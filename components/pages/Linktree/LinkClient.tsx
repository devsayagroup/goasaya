// // components/pages/LinksClient.tsx
// "use client";

// import { motion, Easing} from "framer-motion";
// import Image from "next/image";
// import { trackEvent } from "@/lib/analytics"; 

// import { FiCalendar, FiPhone, FiBookOpen, FiMapPin, FiGlobe} from "react-icons/fi";
// import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"; 
// import { LuCakeSlice } from "react-icons/lu";

// const biolinksData = [
//   {
//     title: "Book Now via Chope",
//     icon: FiCalendar,
//     url: "https://cho.pe/web_goasayarestaurant",
//     highlight: true, 
//   },
//   {
//     title: "RSVP by Call",
//     icon: FiPhone,
//     url: "https://wa.me/6281338382845", 
//   },
//   {
//     title: "Reguler Menu",
//     icon: FiBookOpen,
//     url: "https://www.goasaya.com/menu", 
//   },
//   {
//     title: "AYCE Menu",
//     icon: FiBookOpen,
//     url: "/AYCE_MENU.pdf", 
//   },
//   {
//     title: "Whole Cakes Order",
//     icon: LuCakeSlice,
//     url: "/cakes", 
//   },
//   {
//     title: "Location",
//     icon: FiMapPin,
//     url: "https://maps.app.goo.gl/xwEBnBzx11LhhMRy5", 
//   },
//   {
//     title: "Website",
//     icon: FiGlobe,
//     url: "https://www.goasaya.com", 
//   },
//   // {
//   //   title: "Instagram",
//   //   icon: FaInstagram,
//   //   url: "https://instagram.com/goasaya.jkt", 
//   // },
//   // {
//   //   title: "TikTok",
//   //   icon: FaTiktok,
//   //   url: "https://www.tiktok.com/@goasaya.jkt", 
//   // },
// ];

// const premiumEase: Easing = [0.16, 1, 0.3, 1];

// export default function LinksClient() {
  
//   const handleLinkClick = (title: string, url: string) => {
//     trackEvent("bio_link_clicked", { link_title: title, link_url: url, page_source: "links" });
//   };

//   return (
//     // ✅ FIX 1: Changed `min-h-[100dvh]` to `min-h-screen` and added `bg-black`. 
//     // If the image fails to cover the over-scroll, it will show black instead of a white glitch!
//     // Also added `pb-24` to ensure there is plenty of scrolling room at the bottom.
//     <div className="relative min-h-screen w-full flex flex-col items-center py-12 px-6 pb-24 bg-black overflow-y-auto">
      
//       {/* ✅ FIX 2: Added `bg-black` to this wrapper as well to double-layer the dark background */}
//       <div className="fixed inset-0 z-0 bg-black pointer-events-none">
//         <Image
//           src="/images/webp/goa6.webp"
//           alt="GOASAYA Ambience"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/70 z-10"></div>
//       </div>

//       <main className="relative z-20 w-full max-w-[450px] text-white flex flex-col items-center">
//         <div className="w-full flex flex-col items-center">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: premiumEase }}
//             className="flex flex-col items-center text-center"
//           >
//             <div className="relative w-24 h-24 mb-4 rounded-full bg-[#2F0F10] flex items-center justify-center overflow-hidden shadow-lg">
//               <div className="relative w-16 h-16">
//                 <Image 
//                   src="/logo/Logoicon-brown.webp" 
//                   alt="GOASAYA Logo"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>
            
//             <h1 className="font-style text-2xl uppercase text-white mb-2">
//               GoaSaya
//             </h1>
//             <p className="font-style text-sm text-white mb-1 drop-shadow-md">
//               Our First Home. <br/>
//               You&apos;re not just arriving, you&apos;re returning.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="flex items-center gap-6 mt-6 mb-10"
//           >
//              <a href="https://instagram.com/goasaya.jkt" onClick={() => handleLinkClick("Instagram", "https://instagram.com/goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors drop-shadow-md">
//                 <FaInstagram className="w-[22px] h-[22px]" />
//              </a>
//              <a href="https://wa.me/6281338382845" onClick={() => handleLinkClick("Whatsapp", "https://wa.me/6281338382845")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors drop-shadow-md">
//                 <FaWhatsapp className="w-[22px] h-[22px]" />
//              </a>
//              <a href="https://www.tiktok.com/@goasaya.jkt" onClick={() => handleLinkClick("Tiktok", "https://www.tiktok.com/@goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors drop-shadow-md">
//                 <FaTiktok className="w-[20px] h-[20px]" />
//              </a>
//           </motion.div>

//           <motion.div 
//             initial="hidden"
//             animate="show"
//             variants={{
//               hidden: { opacity: 0 },
//               show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//             }}
//             className="w-full space-y-4"
//           >
//             {biolinksData.map((link, idx) => {
//               const Icon = link.icon;
              
//               return (
//                 <motion.div
//                   key={idx}
//                   variants={{
//                     hidden: { opacity: 0, y: 20 },
//                     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
//                   }}
//                 >
//                   <a
//                     href={link.url}
//                     onClick={() => handleLinkClick(link.title, link.url)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`group relative w-full flex items-center p-3 sm:p-4 rounded-full border transition-all duration-300 font-sans text-[12px] uppercase tracking-widest font-semibold backdrop-blur-md
//                       ${link.highlight 
//                         ? "bg-[#FFE3AF] text-[#3A0D08] border-[#FFE3AF] shadow-[0_0_30px_rgba(255,227,175,0.15)] hover:scale-[1.02]" 
//                         : "bg-black/40 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:scale-[1.02]"
//                       }`}
//                   >
//                     <div className={`flex items-center justify-center w-9 h-9 rounded-full ${link.highlight ? 'bg-[#3A0D08]/15 text-[#3A0D08]' : 'bg-black/60 text-white/90'}`}>
//                         <Icon className="w-[16px] h-[16px] text-inherit" />
//                     </div>
                    
//                     <span className="flex-1 font-style text-center pr-9">
//                       {link.title}
//                     </span>
//                   </a>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//         </div>
//       </main>
//     </div>
//   );
// }

// components/pages/LinksClient.tsx
"use client";

import { motion, Easing} from "framer-motion";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics"; 

import { FiCalendar, FiPhone, FiBookOpen, FiMapPin, FiGlobe} from "react-icons/fi";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"; 
import { LuCakeSlice } from "react-icons/lu";

const biolinksData = [
  {
    title: "Book Now via Chope",
    icon: FiCalendar,
    url: "https://cho.pe/web_goasayarestaurant",
    highlight: true, 
  },
  {
    title: "RSVP by Call",
    icon: FiPhone,
    url: "https://wa.me/6281338382845", 
  },
  {
    title: "Reguler Menu",
    icon: FiBookOpen,
    url: "https://www.goasaya.com/menu", 
  },
  {
    title: "AYCE Menu",
    icon: FiBookOpen,
    url: "/AYCE_MENU.pdf", 
  },
  {
    title: "Whole Cakes Order",
    icon: LuCakeSlice,
    url: "/cakes", 
  },
  {
    title: "Location",
    icon: FiMapPin,
    url: "https://maps.app.goo.gl/xwEBnBzx11LhhMRy5", 
  },
  {
    title: "Website",
    icon: FiGlobe,
    url: "https://www.goasaya.com", 
  },
  // {
  //   title: "Instagram",
  //   icon: FaInstagram,
  //   url: "https://instagram.com/goasaya.jkt", 
  // },
  // {
  //   title: "TikTok",
  //   icon: FaTiktok,
  //   url: "https://www.tiktok.com/@goasaya.jkt", 
  // },
];

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function LinksClient() {
  
  const handleLinkClick = (title: string, url: string) => {
    trackEvent("bio_link_clicked", { link_title: title, link_url: url, page_source: "links" });
  };

  return (
    // ✅ FIX 1: Removed `overflow-y-auto`. Now the native browser window handles the scrolling smoothly.
    // Kept `min-h-screen` and `bg-black` so the background color is always dark.
    <div className="relative min-h-screen w-full flex flex-col items-center pt-12 pb-24 px-6 bg-black">
      
      {/* ✅ FIX 2: Background image is `fixed` so it never moves, even while the content scrolls over it. */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/images/webp/goa6.webp"
          alt="GOASAYA Ambience"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      <main className="relative z-20 w-full max-w-[450px] text-white flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 mb-4 rounded-full bg-[#2F0F10] flex items-center justify-center overflow-hidden shadow-lg">
              <div className="relative w-16 h-16">
                <Image 
                  src="/logo/Logoicon-brown.webp" 
                  alt="GOASAYA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            <h1 className="font-style text-2xl uppercase text-white mb-2">
              GoaSaya
            </h1>
            <p className="font-style text-sm text-white mb-1 drop-shadow-md">
              Our First Home. <br/>
              You&apos;re not just arriving, you&apos;re returning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-6 mt-6 mb-10"
          >
             <a href="https://instagram.com/goasaya.jkt" onClick={() => handleLinkClick("Instagram", "https://instagram.com/goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors drop-shadow-md">
                <FaInstagram className="w-[22px] h-[22px]" />
             </a>
             <a href="https://wa.me/6281338382845" onClick={() => handleLinkClick("Whatsapp", "https://wa.me/6281338382845")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors drop-shadow-md">
                <FaWhatsapp className="w-[22px] h-[22px]" />
             </a>
             <a href="https://www.tiktok.com/@goasaya.jkt" onClick={() => handleLinkClick("Tiktok", "https://www.tiktok.com/@goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors drop-shadow-md">
                <FaTiktok className="w-[20px] h-[20px]" />
             </a>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="w-full space-y-4"
          >
            {biolinksData.map((link, idx) => {
              const Icon = link.icon;
              
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
                  }}
                >
                  <a
                    href={link.url}
                    onClick={() => handleLinkClick(link.title, link.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-full flex items-center p-3 sm:p-4 rounded-full border transition-all duration-300 font-sans text-[12px] uppercase tracking-widest font-semibold backdrop-blur-md
                      ${link.highlight 
                        ? "bg-[#FFE3AF] text-[#3A0D08] border-[#FFE3AF] shadow-[0_0_30px_rgba(255,227,175,0.15)] hover:scale-[1.02]" 
                        : "bg-black/40 text-white border-white/20 hover:bg-white/10 hover:border-white/40 hover:scale-[1.02]"
                      }`}
                  >
                    <div className={`flex items-center justify-center w-9 h-9 rounded-full ${link.highlight ? 'bg-[#3A0D08]/15 text-[#3A0D08]' : 'bg-black/60 text-white/90'}`}>
                        <Icon className="w-[16px] h-[16px] text-inherit" />
                    </div>
                    
                    <span className="flex-1 font-style text-center pr-9">
                      {link.title}
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </main>
    </div>
  );
}