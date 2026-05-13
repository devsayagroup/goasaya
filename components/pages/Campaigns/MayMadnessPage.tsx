"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, CalendarDays } from "lucide-react"; 
import RelatedExperiences from "@/components/ui/RelatedExperiences";
import DishMarquee from "@/components/ui/DishMarquee";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MayMadnessPage() {
  return (
    <main className="min-h-screen bg-[#0B0502] text-white/80 font-text overflow-hidden">      
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/webp/MM1.webp" 
                alt="May Madness Cave Entrance"
                fill
                sizes="100vw"
                quality={100} 
                unoptimized={true} 
                className="object-cover object-center"
                priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0502]/80 via-[#4A1B07]/30 to-[#0B0502]/100 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#FF8C00]/15 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        </div>

        <div className="relative z-10 text-center max-w-5xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: premiumEase }}
            className="flex flex-col items-center mb-4 md:mb-10"
          >
            <span className="text-xs font-style md:text-md uppercase tracking-[0.2em] font-medium text-white">
                THE NEW LUNCH CONCEPT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: premiumEase }}
            className="text-6xl sm:text-7xl md:text-9xl font-style uppercase tracking-tight text-white drop-shadow-3xl"
          >
            MAY <br className="xs:block md:hidden"/> MADNESS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: premiumEase }}
            className="font-style text-xl md:text-3xl text-white mt-6 max-w-xl drop-shadow-lg"
          >
            A Month of Endless Lunch
          </motion.p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-pulse z-10">
          <ChevronRight size={30} className="rotate-90" strokeWidth={1}/>
        </div>
      </section>

      <section className="relative container mx-auto px-6 md:px-14 py-32 z-10">        
        <div className="grid md:grid-cols-3 gap-12 items-end mb-20 md:mb-32">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: premiumEase }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-2"
          >
             <h2 className="text-4xl md:text-6xl max-w-2xl font-style uppercase text-white leading-[1.2] tracking-tight drop-shadow-md">
                399K FOR A LUNCH WITHOUT LIMITS
             </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:items-end md:text-right"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-style font-medium text-white mb-4">Price per guest</span>
            <p className="text-xs text-white/60 font-medium">Limited time, only this May. Terms and conditions apply.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start gap-8"
          >
            <div className="relative w-full h-[350px] md:h-[450px] rounded-sm overflow-hidden border border-white/5 group shadow-2xl">
              <Image 
                src="/images/webp/MM2.webp"
                alt="GOASAYA Rethought All You Can Eat" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.85] group-hover:brightness-110 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-[#0B0502]/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#FFE3AF]/75 mb-4">Redefining Experience</span>
              <h3 className="text-3xl font-style uppercase text-white mb-6 drop-shadow-sm">Not Your Usual All You Can Eat</h3>
              <p className="text-base text-white/80 leading-loose max-w-lg">Freshly prepared by order, thoughtfully served to your table. A premium lunch experience redefining expectations.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start gap-8 md:mt-24" 
          >
            <div className="relative w-full h-[350px] md:h-[450px] rounded-sm overflow-hidden border border-white/5 group shadow-2xl">
              <Image 
                src="/images/webp/MM3.webp" 
                alt="Explore Over 50 Menus" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-[0.85] group-hover:brightness-110 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-[#0B0502]/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
            </div>
            <div className="w-full flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#FFE3AF]/75 mb-4">Unlimited Discovery</span>
              <h3 className="text-3xl font-style uppercase text-white mb-6 drop-shadow-sm">MORE THAN 50 MENUS TO EXPLORE</h3>
              <p className="text-base text-white/80 leading-loose max-w-lg">From progressive Asian appetizers to deeply comforting mains. Discover a curated journey through taste without limits.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* <section className="relative w-full py-20 z-10 flex flex-col items-center overflow-hidden">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-5xl flex flex-col items-center text-center gap-6 mb-10 px-6"
        >
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-[#FFE3AF]/75">
                The Culinary Archive
            </span>
            <h2 className="text-3xl md:text-6xl font-style uppercase text-white drop-shadow-sm">
                Explore The Menu
            </h2>
            <p className="text-xs text-white/50 italic tracking-wide">
               Hover to discover our signature highlights
            </p>
        </motion.div>

        <DishMarquee />
      </section> */}

      <section className="relative w-full bg-[#0B0502] text-black overflow-hidden py-32 md:py-48 px-6 md:px-14">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#4A1B07]/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0502] via-transparent to-[#0B0502]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[400px] bg-[#FF8C00]/15 blur-[130px] rounded-full pointer-events-none" />
            </div>

            <div className="relative z-10 container mx-auto text-center flex flex-col items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-xs md:text-[20px]  uppercase tracking-[0.4em] font-medium text-[#FFE3AF] mb-4 md:mb-8">
                        THE SWEET FINALE
                    </span>
                    <h2 className="text-5xl md:text-8xl font-style uppercase text-white tracking-tight drop-shadow-2xl">
                        FREE FLOW ICE CREAM
                    </h2>
                    
                    <div className="relative w-[350px] h-[200px] md:w-[350px] md:h-[250px] mb-8">
                        <Image
                            src="/images/venchi/logo.png" 
                            alt="Venchi Premium Italian Ice Cream Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    
                    <p className="text-sm md:text-lg text-white font-style italic max-w-2xl drop-shadow-xl leading-relaxed">
                        Your lunch experience comes to an intimate close with authentic Italian <br className="hidden sm:block"/> Gelato from Venchi. <span className="text-[#FFB85C] font-semibold">Enjoy it as much as you like.</span>
                    </p>
                </motion.div>

                {/* VENCHI VARIANTS GRID */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 mt-12 w-full max-w-8xl">
                    {[
                        { name: "Nougatine", src: "/images/venchi/1.webp" },
                        { name: "Parmigiano", src: "/images/venchi/2.webp" },
                        { name: "Mango", src: "/images/venchi/3.webp" },
                        { name: "Pistachio", src: "/images/venchi/4.webp" },
                        { name: "Stracciatella", src: "/images/venchi/5.webp" },
                        { name: "Cremino", src: "/images/venchi/6.webp" },
                    ].map((variant, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: i * 0.15, ease: premiumEase }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="flex flex-col items-center gap-5 group cursor-pointer"
                        >
                            <div className="relative w-full aspect-square rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                                <Image
                                    src={variant.src}
                                    alt={`Venchi ${variant.name}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-1000 brightness-90 group-hover:brightness-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0502]/60 to-transparent pointer-events-none" />
                            </div>
                            {/* <h4 className="text-sm md:text-base font-style font-medium uppercase tracking-[0.2em] text-white/80 group-hover:text-[#FFB85C] transition-colors duration-500">
                                {variant.name}
                            </h4> */}
                        </motion.div>
                    ))}
                </div>
            </div>
      </section>

      <section className="relative container mx-auto px-6 md:px-14 py-32 z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: premiumEase }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full flex flex-col gap-10"
            >
                <div className="flex flex-col items-start">
                    <span className="text-[12px] uppercase tracking-[0.2em] font-style font-medium text-white mb-4">Details</span>
                    <h2 className="text-4xl md:text-5xl font-style uppercase text-white mb-8 tracking-tight drop-shadow-md">
                        MAY MADNESS at goasaya
                    </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-2xl">
                  <div className="flex items-start gap-5">
                      <div className="flex items-center justify-center rounded-sm bg-[#FFE3AF] p-3 mt-1 border border-white/5">
                        <CalendarDays size={22} className="text-maroon" strokeWidth={1.5}/>
                      </div>
                      <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFE3AF]/80">Duration</span>
                          <p className="text-base text-white/90 font-medium">Limited time, only this May</p>
                          <p className="text-xs text-white/60">Weekday (Mon–Fri) Only</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-5">
                      <div className="flex items-center justify-center rounded-sm bg-[#FFE3AF] p-3 mt-1 border border-white/5">
                        <Clock size={22} className="text-maroon" strokeWidth={1.5}/>
                      </div>
                      <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFE3AF]/80">Hours</span>
                          <p className="text-base text-white/90 font-medium">11.00 AM — 16.00</p>
                          <p className="text-xs text-white/60">Strictly Lunch concept</p>
                      </div>
                  </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full flex justify-center md:justify-end md:pt-24"
            >
                <Link 
                    href="https://cho.pe/web_goasayarestaurant" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="relative group w-full max-w-sm"
                >
                    <div className="absolute inset-0 rounded-lg pointer-events-none" />
                    <Image
                        src="/images/reservewhite.png" 
                        alt="Book GOASAYA May Madness Lunch Now"
                        width={300}
                        height={100}
                        className="w-full h-auto object-contain shadow-2xl transition-transform duration-500 hover:scale-105 hover:brightness-125"
                        priority
                    />
                </Link>
            </motion.div>
        </div>
      </section>
      <RelatedExperiences currentCampaignId="may-madness" />
    </main>
  );
}