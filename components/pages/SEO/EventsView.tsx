"use client";

import { motion, useScroll, useTransform, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; 
import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function EventsView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#0B0502] text-white/90 font-text relative selection:bg-[#FFE3AF] selection:text-[#0B0502]">
        <div className="hidden md:block fixed top-0 left-0 w-full h-full bg-[#FF8C00]/[0.02] blur-[150px] pointer-events-none z-0" />
        <svg className="hidden md:block pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <section className="relative h-screen w-full flex items-end pb-24 px-6 md:px-14 overflow-hidden z-10">
            <motion.div 
                initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 8, ease: "easeOut" }}
                className="absolute inset-0 z-0 will-change-transform"
            >
                <Image 
                    src="/images/webp/goa4.webp" 
                    alt="Luxury Private Dining and Corporate Event Space PIK 2"
                    fill unoptimized priority sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0502] via-[#0B0502]/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/30 z-10" />
            </motion.div>

            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex flex-col gap-6 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: premiumEase }}
                        className="flex items-center gap-4 text-[#FFE3AF] uppercase tracking-[0.4em] text-[10px] md:text-xs font-medium mb-2"
                    >
                        <span className="w-12 h-[1px] bg-[#FFE3AF]" /> Exclusive Venue PIK 2
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: premiumEase, delay: 0.2 }}
                        className="text-5xl md:text-[7vw] leading-[1.1] md:leading-[0.85] font-style uppercase text-white drop-shadow-2xl"
                    >
                        Gather In <br /> <span className="text-[#FFE3AF] italic">The Cave.</span>
                    </motion.h1>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col items-start md:items-end gap-4 text-white/60"
                >
                    <p className="text-sm md:text-base max-w-md text-left md:text-right font-light leading-relaxed">
                        Leave standard hotel ballrooms behind. Discover PIK 2&apos;s premier cave-inspired venue for brand activations and exclusive celebrations.
                    </p>
                </motion.div>
            </motion.div>
        </section>

        <section className="relative w-full py-32 md:py-48 z-10">
            <div className="container mx-auto px-6 md:px-14 flex flex-col lg:flex-row justify-between items-center gap-20">
                <div className="lg:w-5/12 flex flex-col gap-8 order-2 lg:order-1">
                    <h2 className="text-5xl md:text-8xl font-style uppercase leading-[1.2] text-white">
                        Enter <br/> The Cave
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed font-light">
                        The experience begins at the entrance. GoaSaya is a hidden sanctuary architecturally crafted to escape the noise of Jakarta. With signature stone-curved interiors and sound-insulated walls ensuring total privacy, it provides the ultimate immersive backdrop for <strong className="text-white/90 font-normal">corporate events</strong>, brand launches, and VIP <strong className="text-white/90 font-normal">private dining in PIK 2</strong>.
                    </p>
                    <div className="pt-8 border-t border-white/10 mt-4 flex gap-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-style text-[#FFE3AF]">100</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Max Capacity</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl font-style text-[#FFE3AF]">03</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Distinct Spaces</span>
                        </div>
                    </div>
                </div>
                
                <div className="lg:w-5/12 w-full h-[60vh] md:h-[80vh] relative order-1 lg:order-2 group">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: premiumEase }} viewport={{ once: true }}
                        className="w-full h-full relative overflow-hidden rounded-sm"
                    >
                        <Image src="/images/webp/goa9.webp" alt="Entrance to GoaSaya Exclusive Event Venue PIK 2" fill unoptimized className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
                        <div className="absolute inset-0 border border-white/10 m-4 z-10 mix-blend-overlay" />
                    </motion.div>
                </div>
            </div>
        </section>

        <section className="relative w-full z-10 bg-[#050201]">
            <div className="py-24 text-center">
                <h3 className="text-md font-style uppercase tracking-[0.5em] text-[#FFE3AF]">The Spaces</h3>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <Image src="/images/webp/V1.webp" alt="VIP Private Dining Room PIK 2" fill unoptimized className="object-cover brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0502]/90 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 md:px-14 flex flex-col justify-center h-full">
                    <span className="text-[#FFE3AF] uppercase tracking-[0.3em] text-sm mb-4">01 Private Dining</span>
                    <h3 className="text-5xl md:text-8xl font-style uppercase text-white mb-6">The VIP <br/> Lounge</h3>
                    <p className="max-w-md text-white/70 text-lg mb-8">Completely enclosed and highly discreet. Built specifically for executive board dinners, milestone birthdays, and tasting menus. Comfortably seats up to 20 guests.</p>
                </div>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                <Image src="/images/webp/V3.webp" alt="Corporate Event Space Jakarta Main Dining" fill unoptimized className="object-cover brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0502]/90 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 md:px-14 flex flex-col justify-center h-full">
                    <span className="text-[#FFE3AF] uppercase tracking-[0.3em] text-sm mb-4">02 Corporate Events</span>
                    <h3 className="text-5xl md:text-8xl font-style uppercase text-white mb-6">Main <br/> Dining</h3>
                    <p className="max-w-md text-white/70 text-lg mb-8">Set right in the heart of the cave. We can zone off sections of the main floor for networking events, product showcases, and larger team dinners. Seats up to 60 guests.</p>
                </div>
            </div>

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                <Image src="/images/webp/goa5.webp" alt="Wedding Reception Venue Buyout PIK 2" fill unoptimized className="object-cover brightness-[0.35]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0502] via-transparent to-[#0B0502]/80" />
                <div className="relative z-10 container mx-auto px-6 md:px-14 flex flex-col justify-center h-full">
                    <span className="text-[#FFE3AF] uppercase tracking-[0.3em] text-sm mb-4">03 Full Exclusivity</span>
                    <h3 className="text-5xl md:text-8xl font-style uppercase text-white mb-6">Entire Venue <br/> Buyout</h3>
                    <p className="max-w-md text-white/70 text-lg mb-8">Take over the entire restaurant. You get absolute privacy, DJ flexibility, and a customized menu. Ideal for wedding receptions or major company parties. Up to 100 guests standing.</p>
                </div>
            </div>
        </section>

        <section className="relative w-full py-32 md:py-48 z-20 bg-[#0B0502]">
            <div className="container mx-auto px-6 md:px-14">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-10">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-style uppercase text-white">The Investment</h2>
                        <p className="text-[#FFE3AF] uppercase tracking-[0.2em] text-xs mt-4">Transparent Minimum Spends</p>
                    </div>
                    <p className="text-sm text-white/50 max-w-sm md:text-right font-light leading-relaxed">
                        We waive all traditional room rental fees. Your investment is dedicated entirely to your customized culinary curation and premium mixology experience.
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="group flex flex-col md:flex-row justify-between md:items-center py-10 border-b border-white/5 hover:border-[#FFE3AF]/30 transition-colors">
                        <div className="flex flex-col gap-2 md:w-1/2 mb-6 md:mb-0">
                            <h4 className="text-2xl md:text-3xl font-style uppercase text-white group-hover:text-[#FFE3AF] transition-colors">Intimate Private Dining</h4>
                            <p className="text-sm text-white/50 font-light">Exclusive access to the VIP Lounge for up to 20 guests. An immersive 3-hour experience tailored for executive board dinners and milestone birthdays.</p>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs uppercase tracking-widest text-white/40">From</span>
                            <span className="text-3xl md:text-4xl text-white font-light">Rp 15.000.000</span>
                        </div>
                    </div>

                    <div className="group flex flex-col md:flex-row justify-between md:items-center py-10 border-b border-white/5 hover:border-[#FFE3AF]/30 transition-colors">
                        <div className="flex flex-col gap-2 md:w-1/2 mb-6 md:mb-0">
                            <h4 className="text-2xl md:text-3xl font-style uppercase text-white group-hover:text-[#FFE3AF] transition-colors">Corporate Event Space</h4>
                            <p className="text-sm text-white/50 font-light">Semi-private zoning within our Main Dining floor for up to 60 guests. Ideal for client hosting, featuring dedicated service and customized plated menus.</p>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-xs uppercase tracking-widest text-white/40">From</span>
                            <span className="text-3xl md:text-4xl text-white font-light">Rp 40.000.000</span>
                        </div>
                    </div>

                    <div className="group flex flex-col md:flex-row justify-between md:items-center py-10 border-b border-white/5 hover:border-[#FFE3AF]/30 transition-colors">
                        <div className="flex flex-col gap-2 md:w-1/2 mb-6 md:mb-0">
                            <h4 className="text-2xl md:text-3xl font-style uppercase text-white group-hover:text-[#FFE3AF] transition-colors">Grand Venue Buyout</h4>
                            <p className="text-sm text-white/50 font-light">Total restaurant exclusivity for up to 100 guests. Command the entire cave with flexible durations, full entertainment integration, and bespoke brand activations.</p>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl md:text-4xl text-[#FFE3AF] font-style italic">Custom Quote</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative w-full py-24 z-10 bg-[#0B0502]">
            <div className="container mx-auto px-6 md:px-14">
                <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-4">
                    <h3 className="text-2xl md:text-4xl font-style uppercase text-white">Event Gallery</h3>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <div className="relative w-full h-[600px] rounded-sm overflow-hidden"><Image src="/articles/birthday/1.webp" alt="Corporate Event Setup PIK 2" fill unoptimized className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"/></div>
                    <div className="relative w-full h-[400px] rounded-sm overflow-hidden"><Image src="/articles/entertainment/1.webp" alt="Luxury Private Dining Table GoaSaya" fill unoptimized className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"/></div>
                    <div className="relative w-full h-[500px] rounded-sm overflow-hidden"><Image src="/articles/birthday/2.webp" alt="Brand Activation Event Space Jakarta" fill unoptimized className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"/></div>
                    <div className="relative w-full h-[450px] rounded-sm overflow-hidden"><Image src="/articles/birthday/3.webp" alt="Exclusive Restaurant Buyout Wedding Reception" fill unoptimized className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"/></div>
                    <div className="relative w-full h-[700px] rounded-sm overflow-hidden"><Image src="/articles/entertainment/2.webp" alt="VIP Lounge Private Gathering Jakarta" fill unoptimized className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"/></div>
                    <div className="relative w-full h-[350px] rounded-sm overflow-hidden"><Image src="/articles/dinner/1.webp" alt="Fine Dining Corporate Dinner PIK 2" fill unoptimized className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"/></div>
                </div>
            </div>
        </section>

        <section className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden z-10 border-t border-white/10">
            <Image 
                src="/images/webp/goa6.webp" 
                alt="Secure GoaSaya Event Venue" 
                fill 
                unoptimized 
                className="object-cover opacity-30" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0502]/20 via-[#0B0502]/20 to-[#0B0502]/10" />
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: premiumEase }} 
                viewport={{ once: true }} 
                className="relative z-20 flex flex-col items-center px-6 max-w-2xl"
            >
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-style uppercase text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                    Secure <br /> The Cave
                </h2>
                
                <p className="text-base md:text-lg text-white/60 italic mt-6 mb-12">
                    Our team is ready to tailor the space and menu exactly how you want it. Reach out to check our availability.
                </p>

                <Link 
                    href="https://wa.me/6281338382845?text=Hi%20GoaSaya,%20I%20am%20interested%20in%20commissioning%20a%20private%20event." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('book_event_bottom', { category: 'lead_gen', label: 'Book Event' })}
                    className="inline-flex font-style items-center gap-4 px-6 py-3 md:px-8 md:py-4 border border-[#FFE3AF] bg-[#FFE3AF]/5 text-[#FFE3AF] rounded-md text-xs md:text-sm font-medium uppercase tracking-[0.2em] group transition-all duration-500 hover:bg-[#FFE3AF] hover:text-[#0B0502] hover:shadow-[0_0_40px_rgba(255,227,175,0.3)]"
                >
                    Speak With Our Team <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </section>
    </main>
  );
}