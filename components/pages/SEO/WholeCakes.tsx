"use client";

import { motion, useScroll, useTransform, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Palette, Clock } from "lucide-react"; 
import { useRef } from "react";
// Import your centralized analytics tracker
import { trackEvent } from "@/lib/analytics";

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function CustomCakeView() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0B0502] text-white/90 font-text relative">
        
        {/* BACKGROUND EFFECTS */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#FF8C00]/5 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#FFE3AF]/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <svg className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* 1. IMMERSIVE FULL-SCREEN HERO */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image 
                    src="/images/cakes/whole-cakes.webp" 
                    alt="GoaSaya Custom and Whole Cakes"
                    fill
                    quality={100}
                    unoptimized
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0502]/60 via-[#0B0502]/40 to-[#0B0502] z-10" />
            </motion.div>

            <motion.div
                style={{ y: yText, opacity: opacityText }}
                className="relative z-20 flex flex-col items-center text-center px-6 mt-20"
            >
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: premiumEase }}
                    className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium text-[#FFE3AF] mb-6"
                >
                    Signature & Bespoke Patisserie
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: premiumEase, delay: 0.2 }}
                    className="text-7xl md:text-8xl lg:text-9xl font-style uppercase text-white leading-[0.9] tracking-tight drop-shadow-2xl"
                >
                    Edible <br /> Art
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: premiumEase, delay: 0.4 }}
                    className="text-sm md:text-lg text-white/70 italic mt-8 max-w-xl"
                >
                    Cave-crafted signature whole cakes and time-honored custom cake designs for extraordinary celebrations.
                </motion.p>
            </motion.div>
        </section>

        {/* 2. THE STICKY SCROLL SHOWCASE: The 3 Signature Cakes */}
        <section className="relative container mx-auto px-6 md:px-14 py-24 md:py-40 z-10">
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
                
                {/* Left Side: Sticky Text */}
                <div className="lg:w-1/2 lg:sticky lg:top-40 flex flex-col gap-10 h-fit">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-6xl font-style uppercase text-white tracking-tight leading-tight">
                            The Signature <br /> Collection
                        </h2>
                    </div>
                    
                    <p className="text-white/70 leading-loose text-lg max-w-md">
                        While our bespoke custom cakes demand extensive time and artisanal focus, our master pastry chefs have curated three legendary whole cakes, perfectly refined and available for your immediate celebrations.
                    </p>

                    <div className="mt-4">
                        <Link 
                            href="https://wa.me/6281338382845?text=Hello%20GoaSaya,%20I%20would%20like%20to%20inquire%20about%20ordering%20a%20signature%20whole%20cake." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => {
                                trackEvent('pre_order_whole_cake', {
                                    category: 'tracking',
                                    label: 'Pre-Order Whole Cake',
                                })
                            }}
                            className="inline-flex items-center gap-4 w-max px-8 py-4 border border-[#FFE3AF]/30 text-[#FFE3AF] rounded-full text-xs font-medium uppercase tracking-[0.2em] group transition-all hover:bg-[#FFE3AF] hover:text-[#0B0502]"
                        >
                            Pre-Order Whole Cake <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Right Side: Scrolling Image Gallery (Smaller, Editorial Layout) */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-16 md:gap-24 w-full mt-10 lg:mt-0">
                    {[
                        { src: "/images/cakes/manjari.webp", title: "Manjari Chocolate Cake", desc: "Rich, intense, and impeccably smooth." },
                        { src: "/images/cakes/golden.webp", title: "The Golden Cake", desc: "A luxurious testament to the GoaSaya aesthetic." },
                        { src: "/images/cakes/bumblebee.webp", title: "The Bumblebee Cake", desc: "Vibrant, precise, and flavor-forward."  }
                    ].map((img, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: premiumEase }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative flex flex-col gap-6 group w-[95%] md:w-[80%] max-w-[450px]"
                        >
                            <div className={`relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-white/5`}>
                                <Image 
                                    src={img.src} 
                                    alt={img.title}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-[#0B0502]/30" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-style uppercase tracking-[0.2em] font-medium text-[#FFE3AF]">
                                    {img.title}
                                </span>
                                <span className="text-[11px] text-white/50 tracking-wide">{img.desc}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. INTERACTIVE ANATOMY GRID (Custom vs Signature) */}
        <section className="relative w-full py-32 z-10  bg-[#0B0502]/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 md:px-14">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Signature Whole Cakes", desc: "Our acclaimed Manjari, Golden, and Bumblebee cakes. Pre-order with 48 hours notice for flawless execution." },
                        { title: "Bespoke Custom Cakes", desc: "A blank canvas. Intricate, thematic creations that require significant time, consultation, and artisanal dedication." },
                        { title: "Progressive Flavors", desc: "Whether an accessible whole cake or a time-intensive custom design, both share our fine-dining culinary rigor." }
                    ].map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: premiumEase, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative p-10 bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-white/[0.05] transition-colors duration-500 cursor-default"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFE3AF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            <h3 className="text-xl font-style uppercase text-white mb-4 group-hover:text-[#FFE3AF] transition-colors">{feature.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. THE TIMELINE (Emphasizing Custom Takes Time) */}
        <section className="relative w-full py-32 z-10">
            <div className="container mx-auto px-6 md:px-14">
                <div className="text-center mb-20">
                    <h3 className="text-3xl md:text-5xl font-style uppercase text-white">The Timeline</h3>
                    <p className="text-sm text-[#FFE3AF] uppercase tracking-[0.3em] mt-6">Artistry Cannot Be Rushed</p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 -translate-y-1/2 z-0" />

                    {[
                        { icon: CalendarDays, step: "Signature Collection", desc: "Our 3 Signature Whole Cakes require a minimum 48-hour notice." },
                        { icon: Palette, step: "Custom Consultation", desc: "Connect with our team to draft your unique custom cake architecture." },
                        { icon: Clock, step: "Custom Execution", desc: "Bespoke custom cakes demand 2 to 3 weeks of lead time for perfection." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: premiumEase, delay: i * 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative z-10 flex flex-col items-center text-center gap-6 bg-[#0B0502] p-8 rounded-full aspect-square justify-center border border-white/5 shadow-2xl hover:border-[#FFE3AF]/30 transition-colors duration-500"
                        >
                            <item.icon size={28} className="text-[#FFE3AF]" strokeWidth={1} />
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-style uppercase text-white tracking-[0.15em]">{item.step}</h4>
                                <p className="text-[11px] text-white/50 leading-relaxed max-w-[180px]">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. IMMERSIVE FINAL CALL TO ACTION */}
        <section className="relative w-full py-40 flex flex-col items-center text-center overflow-hidden z-10">
            <div className="absolute inset-0 bg-[#4A1B07]/10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#FFE3AF]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: premiumEase }}
                viewport={{ once: true }}
                className="relative z-20 flex flex-col items-center px-6"
            >
                <h2 className="text-4xl md:text-7xl font-style uppercase text-white tracking-tight leading-tight drop-shadow-2xl">
                    Secure Your <br /> Centerpiece
                </h2>
                <p className="text-base md:text-lg text-white/60 italic mt-6 mb-12 max-w-xl">
                    Whether pre-ordering from our Signature Collection or commissioning a time-intensive Custom Cake design, reach out to our team to secure your date.
                </p>
                <Link 
                    href="https://wa.me/6281338382845?text=Hello%20GoaSaya,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20cake%20commission." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => {
                        trackEvent('custom_cake_commission', {
                            category: 'tracking',
                            label: 'Custom Cake Commission',
                        })
                    }}
                    className="inline-flex items-center gap-4 px-10 py-5 border border-[#FFE3AF] bg-[#FFE3AF]/5 text-[#FFE3AF] rounded-full text-sm font-medium uppercase tracking-[0.2em] group transition-all duration-500 hover:bg-[#FFE3AF] hover:text-[#0B0502] hover:shadow-[0_0_40px_rgba(255,227,175,0.3)]"
                >
                    Speak With Our Team <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </section>
    </main>
  );
}