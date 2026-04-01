// "use client";

// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import { GOASAYA_WEEKDAYS } from '@/lib/promo-data';

// export default function WeekdaysPage() {
//   return (
//     <div className="bg-[#0a0a0a] text-white min-h-screen font-serif">
//       {/* Editorial Header */}
//       <section className="max-w-7xl mx-auto h-[70vh] flex flex-col justify-center px-4">
//         {/* <motion.span 
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }}
//           className="uppercase tracking-[0.3em] text-sm mb-4 text-gray-400"
//         >
//           Weekday Specials
//         </motion.span> */}
//         <motion.h1 
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-7xl md:text-[9em] text-center font-special font-light tracking-tight uppercase"
//         >
//           Weekdays Specials
//         </motion.h1>
//         <p className="mt-6 italic text-gray-400 text-right font-sans">A curated deal for every day of the week</p>
//       </section>

//       {/* Main Campaign List */}
//       <div className="flex flex-col gap-32 pb-40">
//         {GOASAYA_WEEKDAYS.map((campaign, i) => (
//           <CampaignSection key={campaign.slug} campaign={campaign} index={i} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function CampaignSection({ campaign, index }: { campaign: any, index: number }) {
//   const isEven = index % 2 === 0;

//   return (
//     <motion.section 
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
//     >
//       <div className={isEven ? "order-2" : "order-1"}>
//         <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">{campaign.day}</h2>
//         <h3 className="text-5xl md:text-6xl mb-6 leading-tight uppercase tracking-tighter">
//           {campaign.title}
//         </h3>
//         <div className="h-[1px] w-20 bg-white mb-6" style={{ backgroundColor: campaign.accent }} />
//         <p className="text-2xl font-sans font-bold mb-4">{campaign.offer}</p>
//         <p className="text-gray-400 text-lg mb-8 max-w-md font-sans font-light">
//           {campaign.description}
//         </p>
//         <div className="text-3xl font-light italic tracking-widest">{campaign.price}</div>
        
//         <button className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-500 uppercase text-xs tracking-widest">
//           Reserve a Table
//         </button>
//       </div>

//       <div className={`relative aspect-[3/4] overflow-hidden group ${isEven ? "order-1" : "order-2"}`}>
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.8 }}
//           className="w-full h-full"
//         >
//           <Image 
//             src={campaign.image} 
//             alt={campaign.title}
//             fill
//             className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Your existing data structure
// const GOASAYA_WEEKDAYS = [
//   { day: "Monday", slug: "matcha-monday", title: "Matcha Monday", offer: "Buy 1 Get 1 Ceremonial Matcha", price: "135K", description: "Exclusively shipped all the way from Kyoto. Enjoy a complimentary serving.", image: "/promo/WS-2.jpg", accent: "#2D5A27" },
//   { day: "Tuesday", slug: "tipsy-tuesday", title: "Tipsy Tuesday", offer: "Free Flow Cocktails", price: "299K/Guest", description: "Elevate your Tuesday with our premium mixology selection.", image: "/promo/WS-3.jpg", accent: "#9B1B30" },
//   { day: "Wednesday", slug: "winesday", title: "Winesday", offer: "Buy 1 Get 1 Wine by the Glass", price: "160K", description: "Enjoy a complimentary glass of wine with every glass ordered.", image: "/promo/WS-4.jpg", accent: "#722F37" },
//   { day: "Thursday", slug: "thirsty-thursday", title: "Thirsty Thursday", offer: "Bucket 4 Corona", price: "299K/Bucket", description: "The ultimate mid-week refresher. Available every Thursday.", image: "/promo/WS-5.jpg", accent: "#D4AF37" },
//   { day: "Friday", slug: "tgif", title: "TGIF", offer: "The Goa Steak + 2 Glasses of Wine", price: "999,000", description: "A thoughtfully curated steak pairing to end your week.", image: "/promo/WS-6.jpg", accent: "#1A1A1A" }
// ];

// export default function WeekdaysGallery() {
//   const [selectedPromo, setSelectedPromo] = useState<typeof GOASAYA_WEEKDAYS[0] | null>(null);

//   return (
//     <main className="bg-[#FAF9F6] min-h-screen py-24 px-6 md:px-12 font-serif selection:bg-stone-200">
      
//         <header className="text-black mb-12 md:mb-20 text-center">
//             <h1 className="text-[5em] md:text-[10em] font-special font-extralight leading-[1] tracking-[2px] uppercase">
//             Weekday Specials
//             </h1>
//             <p className="text-xs uppercase tracking-[0.5em] font-sans text-stone-500">
//             A Curated Deals for Every Day of the Week
//             </p>
//         </header>

//         <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
//             {GOASAYA_WEEKDAYS.map((promo) => (
//             <motion.div
//                 key={promo.slug}
//                 layoutId={`card-${promo.slug}`}
//                 onClick={() => setSelectedPromo(promo)}
//                 className="cursor-pointer group relative aspect-[4/5]"
//             >
//                 {/* Minimal Label on hover (Optional, but looks premium) */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10 flex items-center justify-center">
//                 <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest text-sm font-sans font-bold mix-blend-overlay">
//                     View
//                 </span>
//                 </div>
                
//                 <motion.img
//                 layoutId={`image-${promo.slug}`}
//                 src={promo.image}
//                 alt={promo.title}
//                 className="w-full h-full object-cover shadow-md"
//                 />
//             </motion.div>
//             ))}
//         </div>

//         <AnimatePresence>
//             {selectedPromo && (
//             <>
//                 {/* Blurred Backdrop */}
//                 <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setSelectedPromo(null)}
//                 className="fixed inset-0 bg-white/60 backdrop-blur-md z-40 cursor-zoom-out"
//                 />

//                 {/* Modal Content */}
//                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 pointer-events-none">
//                 <motion.div
//                     layoutId={`card-${selectedPromo.slug}`}
//                     className="bg-white flex flex-col md:flex-row w-full max-w-5xl shadow-2xl pointer-events-auto overflow-hidden"
//                 >
//                     {/* Left: The Image (Maintains LayoutId for seamless transition) */}
//                     <div className="w-full md:w-1/2 bg-stone-100 flex items-center justify-center p-4">
//                     <motion.img
//                         layoutId={`image-${selectedPromo.slug}`}
//                         src={selectedPromo.image}
//                         alt={selectedPromo.title}
//                         className="max-h-[80vh] w-auto object-contain shadow-lg"
//                     />
//                     </div>

//                     {/* Right: The Typography & Data */}
//                     <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white text-[#1a1a1a]">
                    
//                     {/* Close Button */}
//                     <button 
//                         onClick={() => setSelectedPromo(null)}
//                         className="absolute top-6 right-8 text-xs uppercase tracking-[0.3em] font-sans text-stone-400 hover:text-black transition-colors"
//                     >
//                         Close [X]
//                     </button>

//                     <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-stone-400 mb-6">
//                         {selectedPromo.day} Special
//                     </span>
                    
//                     <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter uppercase leading-[0.9] mb-8">
//                         {selectedPromo.title}
//                     </h2>

//                     <div className="space-y-6">
//                         <p className="text-xl font-sans font-bold tracking-tight uppercase" style={{ color: selectedPromo.accent }}>
//                         {selectedPromo.offer}
//                         </p>
                        
//                         <p className="text-stone-500 text-sm leading-relaxed uppercase tracking-[0.15em] font-sans font-light">
//                         {selectedPromo.description}
//                         </p>

//                         <div className="pt-8 flex items-end gap-4">
//                         <span className="text-4xl font-extralight italic tracking-tighter">{selectedPromo.price}</span>
//                         </div>

//                         <div className="pt-8">
//                         <button className="w-full group relative overflow-hidden py-4 border border-black hover:border-black transition-colors duration-500">
//                             <span className="relative z-10 text-[10px] uppercase tracking-[0.6em] font-sans font-bold group-hover:text-white transition-colors duration-500">
//                             Reserve Now
//                             </span>
//                             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
//                         </button>
//                         </div>
//                     </div>
//                     </div>
//                 </motion.div>
//                 </div>
//             </>
//             )}
//         </AnimatePresence>
//     </main>
//   );
// }


"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Easing } from 'framer-motion';

const GOASAYA_WEEKDAYS = [
  { day: "Monday", slug: "matcha-monday", title: "Matcha Monday", offer: "Buy 1 Get 1 Ceremonial Matcha", price: "135K", description: "Exclusively shipped all the way from Kyoto. Enjoy a complimentary serving.", image: "/promo/WS-2.jpg", accent: "#2D5A27" },
  { day: "Tuesday", slug: "tipsy-tuesday", title: "Tipsy Tuesday", offer: "Free Flow Cocktails", price: "299K/Guest", description: "Elevate your Tuesday with our premium mixology selection.", image: "/promo/WS-3.jpg", accent: "#9B1B30" },
  { day: "Wednesday", slug: "winesday", title: "Winesday", offer: "Buy 1 Get 1 Wine by the Glass", price: "160K", description: "Enjoy a complimentary glass of wine with every glass ordered.", image: "/promo/WS-4.jpg", accent: "#722F37" },
  { day: "Thursday", slug: "thirsty-thursday", title: "Thirsty Thursday", offer: "Bucket 4 Corona", price: "299K/Bucket", description: "The ultimate mid-week refresher. Available every Thursday.", image: "/promo/WS-5.jpg", accent: "#D4AF37" },
  { day: "Friday", slug: "tgif", title: "TGIF", offer: "The Goa Steak + 2 Glasses of Wine", price: "999,000", description: "A thoughtfully curated steak pairing to end your week.", image: "/promo/WS-6.jpg", accent: "#1A1A1A" }
];

const transitionEasing: Easing = [0.16, 1, 0.3, 1];

export default function WeekdaysGallery() {
  const [selectedPromo, setSelectedPromo] = useState<typeof GOASAYA_WEEKDAYS[0] | null>(null);

  useEffect(() => {
    if (selectedPromo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPromo]);

  return (
    <main className="bg-maroon min-h-screen py-28 px-4 sm:px-6 md:px-12 font-serif selection:bg-stone-200 selection:text-black">
        <header className="text-white mb-12 md:mb-20 text-center px-4 overflow-hidden">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: transitionEasing }}
              className="text-[5em] md:text-[10em] leading-[1.1em] font-special font-extralight uppercase"
            >
            Weekday Specials
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-sm md:text-lg uppercase tracking-[0.3em] mt-[1em] md:mt-[-.2em] font-sans text-stone-100"
            >
            A Curated Deals for Every Day of the Week
            </motion.p>
        </header>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
            {GOASAYA_WEEKDAYS.map((promo) => (
            <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: transitionEasing } }
                }}
                key={promo.slug}
                layoutId={`card-${promo.slug}`}
                onClick={() => setSelectedPromo(promo)}
                className="cursor-pointer group relative aspect-[4/5] overflow-hidden bg-stone-100"
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700 z-10 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 uppercase tracking-widest text-xs font-sans font-bold mix-blend-overlay">
                      Explore
                  </span>
                </div>
                
                <motion.img
                  layoutId={`image-${promo.slug}`}
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
            </motion.div>
            ))}
        </motion.div>

        <AnimatePresence>
            {selectedPromo && (
            <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedPromo(null)}
                  className="fixed inset-0 bg-stone-900/40 backdrop-blur-md  z-40 cursor-pointer"
                />

                <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-30 pointer-events-none">
                  <motion.div
                      layoutId={`card-${selectedPromo.slug}`}
                      className="bg-white flex flex-col md:flex-row w-full h-full md:h-auto md:max-h-[70vh] max-w-6xl shadow-2xl pointer-events-auto overflow-y-auto overflow-x-hidden md:overflow-hidden relative rounded-md"
                  >
                      <button 
                          onClick={() => setSelectedPromo(null)}
                          className="md:hidden absolute top-4 right-4 z-50 bg-white/80 backdrop-blur text-black p-3 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold shadow-sm"
                      >
                          Close
                      </button>

                      <div className="w-full md:w-1/2 bg-stone-100 flex items-center justify-center p-6 md:p-12 min-h-[50vh] md:min-h-0 relative">
                        <motion.img
                            layoutId={`image-${selectedPromo.slug}`}
                            src={selectedPromo.image}
                            alt={selectedPromo.title}
                            className="max-h-[60vh] md:max-h-[60vh] w-auto object-contain shadow-xl"
                        />
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ delay: 0.3, duration: 0.8, ease: transitionEasing }}
                        className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-white text-[#1a1a1a]"
                      >
                        <button 
                            onClick={() => setSelectedPromo(null)}
                            className="hidden md:block absolute top-8 right-10 text-[10px] uppercase tracking-[0.3em] font-sans text-stone-400 hover:text-black transition-colors"
                        >
                            Close [X]
                        </button>

                        <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-stone-400 mb-4 md:mb-6">
                            {selectedPromo.day} Special
                        </span>
                        
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tighter uppercase leading-[0.9] mb-6 md:mb-8 break-words">
                            {selectedPromo.title}
                        </h2>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl font-sans font-bold tracking-tight uppercase" style={{ color: selectedPromo.accent }}>
                            {selectedPromo.offer}
                            </p>
                            
                            <p className="text-stone-500 text-xs md:text-sm leading-relaxed uppercase tracking-[0.15em] font-sans font-light">
                            {selectedPromo.description}
                            </p>

                            {/* <div className="pt-6 md:pt-8 flex items-end gap-4">
                            <span className="text-3xl md:text-4xl font-extralight italic tracking-tighter">{selectedPromo.price}</span>
                            </div> */}

                            <div className="pt-8 md:pt-12 pb-10 md:pb-0">
                              <button className="w-full group relative overflow-hidden py-4 border border-black hover:border-black transition-colors duration-500">
                                  <span className="relative z-10 text-[10px] uppercase tracking-[0.6em] font-sans font-bold group-hover:text-white transition-colors duration-500">
                                  Reserve Now
                                  </span>
                                  <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                              </button>
                            </div>
                        </div>
                      </motion.div>
                  </motion.div>
                </div>
            </>
            )}
        </AnimatePresence>
    </main>
  );
}