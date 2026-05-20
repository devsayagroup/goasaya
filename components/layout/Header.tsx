// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { trackEvent } from "@/lib/analytics";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { name: "About", href: "/about" },
//   { name: "Spaces", href: "/spaces" },
//   { name: "Menu", href: "/menu" },
//   { name: "Facilities", href: "/facilities" },
//   // { name: "Events", href: "/events" },
//   { name: "Experiences", href: "/experiences" },
//   { name: "Journal", href: "/journal" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [menuOpen]);
    
//   const pathname = usePathname();
//   if (pathname === "/links") return null;
    
//   const handleReserve = () => {
//     trackEvent('cta_button_header', {
//       category: 'tracking',
//       label: 'CTA Book Now',
//     });
//     window.open('https://cho.pe/web_goasayarestaurant', '_blank', 'noopener,noreferrer,nofollow');
//   };

//   return (
//     <>
//       <header className="fixed top-0 z-[9999] w-full bg-black backdrop-blur-md py-4 transition-colors duration-500">
//         <div className="container mx-auto grid grid-cols-3 items-center px-6 md:px-14">
//           <div className="col-start-1 flex items-center">
//             <nav className="hidden min-[1300px]:flex space-x-8 text-sm font-medium tracking-wide">
//               {navLinks.map((link, idx) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: idx * 0.1, duration: 0.4 }}
//                 >
//                   <Link href={link.href} className="font-style text-white/90 hover:text-[#FFE3AF] transition-colors" scroll>
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>
//           </div>

//           <motion.div
//             className="col-start-2 justify-self-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Link href="/" onClick={() => setMenuOpen(false)}>
//               <Image
//                 src="/logo/Logotype-01.png"
//                 alt="Logo Goasaya"
//                 width={120}
//                 height={120}
//                 className="w-auto h-auto"
//                 priority
//               />
//             </Link>
//           </motion.div>

//           <div className="col-start-3 justify-self-end flex items-center gap-4 sm:gap-6">
//             <motion.div
//               className="hidden md:block" 
//               initial={{ opacity: 0, x: 10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               <button
//                 aria-label="CTA Button"
//                 type="button"
//                 onClick={() => {
//                   setMenuOpen(false);
//                   handleReserve();
//                 }}
//                 className="font-style cursor-pointer rounded-sm text-xs sm:text-sm tracking-wider uppercase bg-[#FFE3AF] px-5 py-2.5 text-black hover:bg-white transition-colors duration-300"
//               >
//                 Book a table
//               </button>
//             </motion.div>

//             <button
//               className="min-[1300px]:hidden text-white hover:text-[#FFE3AF] transition-colors"
//               onClick={() => setMenuOpen((v) => !v)}
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
//             </button>

//           </div>
//         </div>
//       </header>

//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             className="fixed inset-0 z-[9998] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center px-6"
//             initial={{ opacity: 0, y: "-10%" }}
//             animate={{ opacity: 1, y: "0%" }}
//             exit={{ opacity: 0, y: "-5%" }}
//             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <nav className="flex flex-col items-center space-y-8 md:space-y-12 w-full max-w-2xl mt-12">
//               {navLinks.map((link, idx) => (
//                 <motion.div
//                   key={link.name}
//                   className="overflow-hidden"
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <Link
//                     href={link.href}
//                     className="block text-2xl md:text-4xl font-light tracking-[0.2em] text-white/80 uppercase hover:text-[#FFE3AF] hover:scale-105 transition-all duration-300"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}

//               <motion.div 
//                 className="h-px w-24 bg-white/20 mt-8"
//                 initial={{ opacity: 0, scaleX: 0 }}
//                 animate={{ opacity: 1, scaleX: 1 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//               />

//               <motion.div
//                 className="mt-8 w-full max-w-[280px] md:hidden" 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7, duration: 0.6 }}
//               >
//                 <button
//                   type="button"
//                   className="w-full font-style tracking-[0.15em] uppercase text-sm bg-[#FFE3AF] text-black py-4 rounded-sm shadow-lg hover:bg-white transition-colors duration-300"
//                   onClick={() => {
//                     setMenuOpen(false);
//                     handleReserve();
//                   }}
//                 >
//                   Book a table
//                 </button>
//               </motion.div>
              
//               <motion.p 
//                 className="text-white/40 text-[10px] font-style md:text-xs tracking-[0.3em] uppercase pt-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 A Place Called Home
//               </motion.p>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


// components/pages/LinksClient.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Spaces", href: "/spaces" },
  { name: "Menu", href: "/menu" },
  { name: "Facilities", href: "/facilities" },
  // { name: "Events", href: "/events" },
  { name: "Experiences", href: "/experiences" },
  { name: "Journal", href: "/journal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);
    
  const pathname = usePathname();
  if (pathname === "/links") return null;
    
  const handleReserve = () => {
    trackEvent('cta_button_header', {
      category: 'tracking',
      label: 'CTA Book Now',
    });
    window.open('https://cho.pe/web_goasayarestaurant', '_blank', 'noopener,noreferrer,nofollow');
  };

  return (
    <>
      <header className="fixed top-0 z-[9999] w-full bg-black backdrop-blur-md py-4 transition-colors duration-500">
        <div className="container mx-auto grid grid-cols-3 items-center px-6 md:px-14">
          <div className="col-start-1 flex items-center">
            <nav className="hidden min-[1300px]:flex space-x-8 text-sm font-medium tracking-wide">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <Link href={link.href} className="font-style text-white/90 hover:text-[#FFE3AF] transition-colors" scroll>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <motion.div
            className="col-start-1 md:col-start-2 justify-self-start md:justify-self-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/logo/Logotype-01.png"
                alt="Logo Goasaya"
                width={120}
                height={120}
                className="w-auto h-auto"
                priority
              />
            </Link>
          </motion.div>

          <div className="col-start-3 justify-self-end flex items-center gap-4 sm:gap-6">
            <motion.div
              className="hidden md:block" 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <button
                aria-label="CTA Button"
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  handleReserve();
                }}
                className="font-style cursor-pointer rounded-sm text-xs sm:text-sm tracking-wider uppercase bg-[#FFE3AF] px-5 py-2.5 text-black hover:bg-white transition-colors duration-300"
              >
                Book a table
              </button>
            </motion.div>

            <button
              className="min-[1300px]:hidden text-white hover:text-[#FFE3AF] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
            </button>

          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[9998] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-5%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col items-center space-y-8 md:space-y-12 w-full max-w-2xl mt-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  className="overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block text-2xl md:text-4xl font-light tracking-[0.2em] text-white/80 uppercase hover:text-[#FFE3AF] hover:scale-105 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                className="h-px w-24 bg-white/20 mt-8"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />

              <motion.div
                className="mt-8 w-full max-w-[280px] md:hidden" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <button
                  type="button"
                  className="w-full font-style tracking-[0.15em] uppercase text-sm bg-[#FFE3AF] text-black py-4 rounded-sm shadow-lg hover:bg-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    handleReserve();
                  }}
                >
                  Book a table
                </button>
              </motion.div>
              
              <motion.p 
                className="text-white/40 text-[10px] font-style md:text-xs tracking-[0.3em] uppercase pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                A Place Called Home
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}