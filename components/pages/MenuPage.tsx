// "use client";

// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { menuData } from "@/lib/menu-data";

// export default function MenuPage() {
//   const [active, setActive] = useState(menuData[0].name);
//   const detailsRef = useRef<HTMLDetailsElement>(null);
//   const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   useEffect(() => {
//     const el = sectionRefs.current[active];
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [active]);

//   const activeClass =
//     "relative bg-white/10 ring-1 ring-white/20 transition-all duration-300 shadow-lg";

//   const inactiveClass = "hover:bg-white/5 transition-all duration-300";

//   return (
//     <section className="min-h-screen bg-neutral-900 text-white container mx-auto px-6 md:px-20 py-24 md:py-32">
//       <div className="flex flex-col md:flex-row gap-2 md:gap-12">
//         <aside className="w-full md:w-72 md:sticky md:top-24 self-start">
//           <div className="md:hidden mb-6">
//             <motion.details
//               ref={detailsRef}
//               initial={false}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 overflow-hidden"
//             >
//               <summary className="text-lg font-medium cursor-pointer py-2 select-none flex justify-between items-center">
//                 <span>{active}</span>
//                 <span className="text-white/50 text-sm">Tap to open</span>
//               </summary>

//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.25 }}
//                 className="mt-4 space-y-2"
//               >
//                 {menuData.map((cat) => (
//                   <button
//                     key={cat.name}
//                     onClick={() => {
//                       setActive(cat.name);
//                       if (detailsRef.current) detailsRef.current.open = false;
//                     }}
//                     className={`w-full text-left py-2 px-3 rounded-lg font-medium ${
//                       active === cat.name ? activeClass : inactiveClass
//                     }`}
//                   >
//                     {cat.name}
//                   </button>
//                 ))}
//               </motion.div>
//             </motion.details>
//           </div>

//           <div className="hidden md:block bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/5">
//             <h1 className="text-3xl font-light mb-6 tracking-wide">GOASAYA Menu</h1>

//             <nav className="space-y-2 relative">
//               {menuData.map((cat) => (
//                 <motion.button
//                   key={cat.name}
//                   onClick={() => setActive(cat.name)}
//                   className={`w-full text-left py-2 px-3 rounded-lg font-medium relative overflow-hidden ${
//                     active === cat.name ? activeClass : inactiveClass
//                   }`}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   {cat.name}

//                   {active === cat.name && (
//                     <motion.div
//                       layoutId="activeHighlight"
//                       transition={{ type: "spring", stiffness: 200, damping: 18 }}
//                       className="absolute inset-0 rounded-lg bg-white/10 -z-10"
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </nav>
//           </div>

//         </aside>

//         <div className="flex-1">
//           <AnimatePresence mode="wait" initial={false}>
//             {menuData
//               .filter((c) => c.name === active)
//               .map((category) => (
//                 <motion.div
//                   key={category.name}
//                     ref={(el) => {
//                     sectionRefs.current[category.name] = el as HTMLDivElement | null;
//                     }}                  
//                     initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -8 }}
//                   transition={{ duration: 0.4 }}
//                   className="space-y-10"
//                 >
//                   <h2 className="text-4xl font-light tracking-wide">
//                     {category.name}
//                   </h2>

//                   <motion.div
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-10"
//                     initial="hidden"
//                     animate="show"
//                     variants={{
//                       hidden: {},
//                       show: {
//                         transition: {
//                           staggerChildren: 0.05,
//                         },
//                       },
//                     }}
//                   >
//                     {category.items.map((item) => (
//                       <motion.div
//                         key={item.title}
//                         variants={{
//                           hidden: { opacity: 0, y: 10 },
//                           show: { opacity: 1, y: 0 },
//                         }}
//                         transition={{ duration: 0.35 }}
//                         className="bg-white/5 p-6 rounded-2xl shadow-xl border border-white/10 flex gap-5"
//                       >
//                         <div className="w-28 h-24 relative rounded-xl overflow-hidden bg-white/10">
//                           <Image
//                             src={item.image || "/placeholder.jpg"}
//                             alt={item.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>

//                         <div className="flex-1">
//                           <div className="flex justify-between items-start mb-2">
//                             <h3 className="text-lg font-medium tracking-wide">
//                               {item.title}
//                             </h3>
//                             <span className="font-semibold whitespace-nowrap">
//                               Rp {item.price}
//                             </span>
//                           </div>

//                           <p className="text-sm text-white/70 leading-relaxed">
//                             {item.description}
//                           </p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/lib/menu-data";
import Image from "next/image";

export default function MenuPage() {
    const [active, setActive] = useState(menuData[0].name);
    const [hasInteracted, setHasInteracted] = useState(false);

    const beverageNames = [
        "Coffee",
        "Non Coffee",
        "Matcha Series (Hot/Iced)",
        "Signature Cocktails",
        "Classic Cocktails",
        "Mocktails",
        "Tea by TWG",
        "Flavour Tea",
        "Healthy Juice",
    ];

    const beverageStartIndex = menuData.findIndex((cat) =>
        beverageNames.includes(cat.name)
    );
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>(
    Object.fromEntries(menuData.map((c) => [c.name, null]))
    );

    useEffect(() => {
        if (!hasInteracted) return; 

        const el = sectionRefs.current[active];
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [active]);

    const activeClass = "relative bg-white/10 ring-1 ring-white/20 transition-all duration-300";
    const inactiveClass = "hover:bg-white/5 transition-all duration-300";

    return (
        <section className="w-full">
            <div className="relative text-white mx-auto px-6 md:px-20 py-24 md:py-32">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/goa1.jpg" 
                        alt="GOASAYA Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/90" />
                </div>
            <div className="container mx-auto flex flex-col md:flex-row gap-2 md:gap-16">
                <aside className="w-full md:w-64 md:sticky md:top-24 self-start">
                    <div className="md:hidden mb-6">
                        <motion.details
                        ref={detailsRef}
                        className="bg-black/40 p-4 rounded-2xl border border-white/5"
                        >
                        <summary className="text-lg cursor-pointer py-2 flex justify-between items-center">
                            <span>{active}</span>
                            <span className="text-white/50 text-sm">Tap</span>
                        </summary>

                        <div className="mt-4 space-y-1">
                            {menuData.map((cat,index) => (
                            <div key={cat.name}>
                                {index === beverageStartIndex && (
                                    <div className="my-4 border-t border-white/20 pt-4 text-white text-xs tracking-widest">
                                        BEVERAGES
                                    </div>
                                )}
                            <button
                                key={cat.name}
                                onClick={() => {
                                setActive(cat.name);
                                setHasInteracted(true);
                                if (detailsRef.current) detailsRef.current.open = false;
                                }}
                                className={`w-full text-left py-2 px-3 rounded-lg font-medium ${
                                cat.name === active ? activeClass : inactiveClass
                                }`}
                            >
                                {cat.name}
                            </button>
                            </div>
                            ))}
                        </div>
                        </motion.details>
                    </div>    

                    <div className="hidden md:block bg-black/40 p-6 rounded-2xl border border-white/5">
                        <h1 className="text-2xl font-style font-light mb-6 tracking-wide">
                        GOASAYA Menu
                        </h1>

                        <nav className="space-y-2 relative">
                        {menuData.map((cat, index) => (
                            <div key={cat.name}>
                                {index === beverageStartIndex && (
                                    <div className="my-4 border-t border-white/20 pt-4 text-white/40 text-xs tracking-widest">
                                        BEVERAGES
                                    </div>
                                )}
                                <motion.button
                                onClick={() => {  
                                    setHasInteracted(true);
                                    setActive(cat.name) 
                                }}
                                className={`w-full text-left py-2 px-3 rounded-lg font-medium relative ${
                                    cat.name === active ? activeClass : inactiveClass
                                }`}
                                >
                                {cat.name}

                                {cat.name === active && (
                                    <motion.div
                                    layoutId="highlight"
                                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                                    />
                                )}
                                </motion.button>
                            </div>
                        ))}
                        </nav>
                    </div>
                </aside>

                <div className="flex-1">
                <AnimatePresence mode="wait">
                    {menuData
                    .filter((c) => c.name === active)
                    .map((category) => (
                        <motion.div
                        key={category.name}
                        ref={(el) => {
                        sectionRefs.current[category.name] = el;
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-10"
                        >
                        <h2 className="text-4xl uppercase font-style font-light tracking-wide">
                            {category.name}
                        </h2>

                        <div className="space-y-8">
                            {category.items.map((item) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 6 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="border-b border-white/10 pb-6"
                            >
                                <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-medium uppercase tracking-wide">
                                    {item.title}
                                </h3>
                                <span className="font-semibold whitespace-nowrap">
                                    Rp {item.price}
                                </span>
                                </div>

                                <p className="text-sm text-white/60 leading-relaxed">
                                {item.description}
                                </p>
                            </motion.div>
                            ))}
                        </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                </div>
                </div>
            </div>
        </section>
    );
}
