"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
    <main className="relative bg-black min-h-screen py-28 px-4 sm:px-6 md:px-12 font-serif selection:bg-stone-200 selection:text-black">
        <div className="absolute inset-0">
            <Image
            src="/images/goa9.JPG"
            alt="Goa Saya"
            fill
            priority
            className="object-cover object-center brightness-75"
            />
            <div className="absolute inset-0 bg-black/90"></div>
        </div>
        <header className="relative text-white mb-12 md:mb-20 text-center px-4 overflow-hidden">
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
          className="relative max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
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

                <div className="fixed inset-0 z-50 flex items-center justify-center py-20 px-6 md:p-30 pointer-events-none">
                  <motion.div
                      layoutId={`card-${selectedPromo.slug}`}
                      className="bg-[#ffffff] flex flex-col md:flex-row w-full h-full md:h-auto md:max-h-[70vh] max-w-6xl shadow-2xl pointer-events-auto overflow-y-auto overflow-x-hidden md:overflow-hidden relative"
                  >
                      <button 
                          onClick={() => setSelectedPromo(null)}
                          className="md:hidden absolute top-4 right-4 z-50 bg-white/80 backdrop-blur text-black p-3 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold shadow-sm"
                      >
                          Close
                      </button>

                      <div className="w-full md:w-1/2 bg-[#ffffff] flex items-center justify-center p-6 md:p-12 min-h-[50vh] md:min-h-0 relative">
                        <motion.img
                            layoutId={`image-${selectedPromo.slug}`}
                            src={selectedPromo.image}
                            alt={selectedPromo.title}
                            className="max-h-[40vh] md:max-h-[60vh] w-auto object-contain"
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
                        
                        <h2 className="text-4xl md:text-7xl font-special font-extralight tracking-[0.04em] uppercase leading-[0.9] mb-6 md:mb-8 break-words">
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

                            <div className="pt-8 pb-10 md:pb-0">
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