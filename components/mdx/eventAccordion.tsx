// "use client";

// import { useState } from "react";

// interface AccordionItem {
//   title: string;
//   icon?: React.ReactNode;
//   children: React.ReactNode;
// }

// export function EventAccordion({ items }: { items: AccordionItem[] }) {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <div className="divide-y divide-black/10 border-y border-black/10">
//       {items.map((item, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div key={index} className="py-6">
//             <button
//               type="button"
//               onClick={() => setOpenIndex(isOpen ? null : index)}
//               className="w-full flex items-center justify-between text-left"
//             >
//               <div className="flex items-center gap-3">
//                 {item.icon}
//                 <h3 className="font-style text-lg md:text-xl text-[#4C0519]">
//                   {item.title}
//                 </h3>
//               </div>

//               <span className="text-sm text-black/50">
//                 {isOpen ? "−" : "+"}
//               </span>
//             </button>

//             {isOpen && (
//               <div className="mt-4 text-black/80 font-text leading-relaxed space-y-3">
//                 {item.children}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function EventAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-6">
            {/* HEADER */}
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="
                w-full flex items-center justify-between text-left
                group focus:outline-none
              "
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <span className="text-[#7D0F0A] opacity-80">
                    {item.icon}
                  </span>
                )}
                <h3
                  className="
                    font-style text-lg md:text-lg
                    text-[var(--cta-color)]
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* CHEVRON */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-[var(--cta-color)] text-xs"
              >
                ▼
              </motion.span>
            </button>

            {/* CONTENT */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pr-6 text-sm text-black/85 font-text leading-relaxed space-y-2">
                    {item.children}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
