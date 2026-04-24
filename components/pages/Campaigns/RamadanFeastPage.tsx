// components/campaigns/RamadanClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Moon, Star } from "lucide-react"; 

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const RAMADAN_MENU = [
  { 
    name: "Kepala Kakap", 
    desc: "Fresh Red Snapper Head Gently Simmered in a Rich Indonesian Coconut.", 
    src: "/images/webp/RF2.webp" 
  },
  { 
    name: "Garlic Butter King Prawn", 
    desc: "Juicy King Prawns Sautéed in Fragrant Garlic Butter—Rich, Savory, & Comforting.", 
    src: "/images/webp/RF3.webp" 
  },
  { 
    name: "Desa Fried Rice", 
    desc: "Expertly Stir-fried with The Balance of The Authentic Indonesian Seasoning.", 
    src: "/images/webp/RF4.webp" 
  },
  { 
    name: "Ikan Bakar Bumbu Bali", 
    desc: "Fresh Fish Marinated in Traditional Balinese Spices, Grilled for a Smoky & Fragrant Finish.", 
    src: "/images/webp/RF5.webp" 
  },
  { 
    name: "Grilled Oxtail Soup", 
    desc: "A Slow Simmered Soup with Tender Meat & Indonesian Spices, Clear Yet Flavourful Broth.", 
    src: "/images/webp/RF6.webp" 
  },
];

export default function RamadanFeastPage() {
  return (
    <main className="min-h-screen bg-[#04150D] text-white/80 font-text overflow-hidden">      
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/webp/RF.webp" 
                alt="Goasaya Ramadan Feast"
                fill
                sizes="100vw"
                quality={100} 
                className="object-cover object-center opacity-50"
                priority
            />
            {/* Deep green to black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#04150D]/80 via-[#0A2E1C]/40 to-[#04150D]/100 pointer-events-none" />
            
            {/* Soft gold glow at the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        </div>

        <div className="relative z-10 text-center max-w-5xl flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="flex flex-col items-center mb-6"
          >
            <div className="flex gap-3 text-[#D4AF37] mb-4">
                <Moon size={18} strokeWidth={1.5} />
                <Star size={18} strokeWidth={1.5} />
            </div>
            <span className="text-xs font-style md:text-sm uppercase tracking-[0.3em] font-medium text-[#D4AF37]">
                Best Value Set Menu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: premiumEase }}
            // Using a classic serif/script feel via your font-style to match the poster's typography
            className="text-6xl sm:text-7xl md:text-9xl font-style uppercase tracking-tight text-white drop-shadow-2xl"
          >
            RAMADAN <br className="xs:block md:hidden"/> FEAST
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: premiumEase }}
            className="flex flex-col items-center mt-8"
          >
            {/* <span className="px-4 py-1 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-widest rounded-sm mb-4">
                Past Season Archive
            </span> */}
            <p className="font-style text-lg md:text-2xl text-white/90 max-w-2xl drop-shadow-lg leading-relaxed">
                Relive the warmth of togetherness. A look back at our curated culinary journey of authentic Indonesian flavors.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#D4AF37]/50 animate-pulse z-10">
          <ChevronRight size={30} className="rotate-90" strokeWidth={1}/>
        </div>
      </section>

      {/* 2. THE MENU GRID */}
      <section className="relative container mx-auto px-6 md:px-14 py-24 md:py-32 z-10">        
        <div className="text-center mb-16 md:mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: premiumEase }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-5xl font-style uppercase text-white tracking-tight drop-shadow-md mb-4"
            >
                The Feast Signatures
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-[1px] w-24 bg-[#D4AF37]/50 mx-auto"
            />
        </div>

        {/* Masonry-style Grid for the 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {RAMADAN_MENU.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: idx * 0.15, ease: premiumEase }}
                    viewport={{ once: true, margin: "-50px" }}
                    // Make the first two items slightly larger/span differently if desired, or keep uniform
                    className={`flex flex-col gap-6 group ${idx === 0 || idx === 1 ? 'lg:col-span-1' : ''}`}
                >
                    <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-[#D4AF37]/20 shadow-2xl">
                        <Image
                            src={item.src}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04150D]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                    </div>
                    
                    <div className="flex flex-col text-center px-4">
                        <h3 className="text-2xl font-style text-[#D4AF37] mb-3 leading-tight">{item.name}</h3>
                        <p className="text-sm text-white/70 leading-relaxed font-light">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 3. CTA TO CURRENT EXPERIENCES */}
      <section className="relative w-full border-t border-[#D4AF37]/20 bg-[#020A06] py-24 px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-2xl mx-auto flex flex-col items-center"
        >
            <h2 className="text-3xl md:text-4xl font-style text-white mb-6">Experience GOASAYA Today</h2>
            <p className="text-white/60 mb-10 text-sm md:text-base leading-relaxed">
                While our Ramadan Feast has concluded for the season, our progressive Asian dining experience continues. Join us in the cave to discover our current seasonal offerings and signature menus.
            </p>
            <Link 
                href="https://cho.pe/web_goasayarestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group w-full max-w-[280px]"
            >
                <div className="absolute inset-0 group-hover:bg-[#D4AF37]/10 transition-colors rounded-lg pointer-events-none" />
                <Image
                    src="/images/reservewhite.png" 
                    alt="Reserve your table at GOASAYA"
                    width={300}
                    height={100}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </Link>
        </motion.div>
      </section>

    </main>
  );
}