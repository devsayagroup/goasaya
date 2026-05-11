// // components/pages/LinksClient.tsx
// "use client";

// import { motion, Easing } from "framer-motion";
// import Image from "next/image";
// import { trackEvent } from "@/lib/analytics"; 

// import { FiCalendar, FiPhone, FiBookOpen, FiMapPin } from "react-icons/fi";
// import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"; 

// const biolinksData = [
//   {
//     title: "Book Now",
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
//     title: "Menu",
//     icon: FiBookOpen,
//     url: "https://www.goasaya.com/menu", 
//   },
//   {
//     title: "Location",
//     icon: FiMapPin,
//     url: "https://maps.app.goo.gl/xwEBnBzx11LhhMRy5", 
//   },
//   {
//     title: "Instagram",
//     icon: FaInstagram,
//     url: "https://instagram.com/goasaya.jkt", 
//   },
//   {
//     title: "TikTok",
//     icon: FaTiktok,
//     url: "https://www.tiktok.com/@goasaya.jkt", 
//   },
// ];

// const premiumEase: Easing = [0.16, 1, 0.3, 1];

// export default function LinksClient() {
  
//   const handleLinkClick = (title: string, url: string) => {
//     trackEvent("bio_link_clicked", { link_title: title, link_url: url });
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center sm:py-12 bg-black">
//       <div className="absolute inset-0 hidden sm:block z-0">
//         <Image
//           src="/images/webp/goa9.webp"
//           alt="GOASAYA Ambience"
//           fill
//           priority
//           className="object-cover object-center brightness-[0.3]"
//         />
//       </div>

//       <main className="relative z-10 w-full min-h-[100dvh] sm:min-h-0 sm:h-[900px] sm:max-w-[450px] bg-gradient-to-b from-[#5C2314] via-[#33110A] to-[#120502] sm:rounded-[40px] sm:border-[10px] sm:border-[#111111] sm:shadow-2xl text-white flex flex-col items-center py-12 px-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
//         <div className="w-full flex flex-col items-center">
          
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: premiumEase }}
//             className="flex flex-col items-center text-center"
//           >
//             <div className="relative w-24 h-24 mb-4 rounded-full bg-[#2F0F10] flex items-center justify-center overflow-hidden">
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
//             <p className="font-style text-sm text-white mb-1">
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
//              <a href="https://instagram.com/goasaya.jkt" onClick={() => handleLinkClick("Social IG", "https://instagram.com/goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors">
//                 <FaInstagram className="w-[22px] h-[22px]" />
//              </a>
//              <a href="https://wa.me/6281338382845" onClick={() => handleLinkClick("Social WA", "https://wa.me/6281338382845")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors">
//                 <FaWhatsapp className="w-[22px] h-[22px]" />
//              </a>
//              <a href="https://www.tiktok.com/@goasaya.jkt" onClick={() => handleLinkClick("Social TikTok", "https://www.tiktok.com/@goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors">
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
//                     className={`group relative w-full flex items-center p-3 sm:p-4 rounded-full border transition-all duration-300 font-sans text-[11px] uppercase tracking-widest font-semibold
//                       ${link.highlight 
//                         ? "bg-[#FFE3AF] text-[#3A0D08] border-[#FFE3AF] shadow-[0_0_30px_rgba(255,227,175,0.15)] hover:scale-[1.02]" 
//                         : "bg-black/20 backdrop-blur-sm text-white border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
//                       }`}
//                   >
//                     {/* ✅ REVISED ICON CONTAINER: Added padding (w-9 h-9) and background colors */}
//                     <div className={`flex items-center justify-center w-9 h-9 rounded-full ${link.highlight ? 'bg-[#3A0D08]/15 text-[#3A0D08]' : 'bg-black/40 text-white/80'}`}>
//                         <Icon className="w-[16px] h-[16px] text-inherit" />
//                     </div>
                    
//                     {/* Centered Title */}
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

import { FiCalendar, FiPhone, FiBookOpen, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"; 

const biolinksData = [
  {
    title: "Book Now",
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
    title: "Menu",
    icon: FiBookOpen,
    url: "https://www.goasaya.com/menu", 
  },
  {
    title: "Location",
    icon: FiMapPin,
    url: "https://maps.app.goo.gl/xwEBnBzx11LhhMRy5", 
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/goasaya.jkt", 
  },
  {
    title: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@goasaya.jkt", 
  },
];

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function LinksClient() {
  
  const handleLinkClick = (title: string, url: string) => {
    trackEvent("bio_link_clicked", { link_title: title, link_url: url });
  };

  return (
    // ✅ REVISED ROOT CONTAINER: Added the desktop gradient globally (using sm:)
    <div className="relative min-h-screen w-full flex items-center justify-center sm:py-12 bg-black sm:bg-gradient-to-b sm:from-[#5C2314] sm:via-[#33110A] sm:to-[#120502]">
      
      {/* ✅ REVISED MOBILE IMAGE BACKGROUND: Flipped visibility to show ONLY on mobile (block sm:hidden) */}
      <div className="absolute inset-0 block sm:hidden z-0">
        <Image
          src="/images/webp/goa6.webp"
          alt="GOASAYA Ambience"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay for mobile image */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* ✅ MOBILE FRAME & GRADIENT: Restructured backgrounds */}
      <main className="relative z-10 w-full min-h-[100dvh] sm:min-h-0 sm:h-[900px] sm:max-w-[450px] 
        /* Mobile: Translucent/No background to see the outer image */
        bg-transparent sm:bg-black/30
        /* Desktop Phone Frame: Subtle overlay color, removed mobile-specific gradients */
        backdrop-blur-sm sm:rounded-[40px] sm:border-[10px] sm:border-[#111111] sm:shadow-2xl 
        text-white flex flex-col items-center py-12 px-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div className="w-full flex flex-col items-center">
          
          {/* ✅ ROUND LOGO & TEXT */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-24 h-24 mb-4 rounded-full bg-[#2F0F10] flex items-center justify-center overflow-hidden">
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
            <p className="font-style text-sm text-white mb-1">
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
             <a href="https://instagram.com/goasaya.jkt" onClick={() => handleLinkClick("Social IG", "https://instagram.com/goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors">
                <FaInstagram className="w-[22px] h-[22px]" />
             </a>
             <a href="https://wa.me/6281338382845" onClick={() => handleLinkClick("Social WA", "https://wa.me/6281338382845")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors">
                <FaWhatsapp className="w-[22px] h-[22px]" />
             </a>
             <a href="https://www.tiktok.com/@goasaya.jkt" onClick={() => handleLinkClick("Social TikTok", "https://www.tiktok.com/@goasaya.jkt")} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFE3AF] transition-colors">
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
                    className={`group relative w-full flex items-center p-3 sm:p-4 rounded-full border transition-all duration-300 font-sans text-[11px] uppercase tracking-widest font-semibold
                      ${link.highlight 
                        ? "bg-[#FFE3AF] text-[#3A0D08] border-[#FFE3AF] shadow-[0_0_30px_rgba(255,227,175,0.15)] hover:scale-[1.02]" 
                        : "bg-black/20 backdrop-blur-sm text-white border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
                      }`}
                  >
                    {/* REVISED ICON CONTAINER: Added padding (w-9 h-9) and background colors */}
                    <div className={`flex items-center justify-center w-9 h-9 rounded-full ${link.highlight ? 'bg-[#3A0D08]/15 text-[#3A0D08]' : 'bg-black/40 text-white/80'}`}>
                        <Icon className="w-[16px] h-[16px] text-inherit" />
                    </div>
                    
                    {/* Centered Title */}
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