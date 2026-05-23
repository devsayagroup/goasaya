"use client";

import { motion, useScroll, useTransform, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react"; 
import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function RomanticDinnerView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Parallax for the locked hero
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const waMessage = encodeURIComponent("Hi GoaSaya, I am looking to plan a [Date Night / Anniversary / Proposal] and would like to inquire about your Romantic Dining experiences.");
  const rsvpLink = `https://wa.me/6281338382845?text=${waMessage}`;

  const romanticPackages = [
    {
      id: "01",
      title: "Anniversary Tasting",
      subtitle: "Evergreen",
      image: "/articles/dinner/1.webp",
      desc: "A beautifully paced, customized 5-course menu for two. Includes expertly paired wines, an intimate table setting, and a complimentary personalized dessert to celebrate your milestone.",
    },
    {
      id: "02",
      title: "Interactive Date",
      subtitle: "Art & Gastronomy",
      image: "/images/webp/V1.webp",
      desc: "Connect beyond dining. Elevate your evening with a guided, private Painting & Wine session or a Clay Polaroid workshop alongside your curated meal. A moment to remember.",
    },
    {
      id: "03",
      title: "Cave Proposal",
      subtitle: "Absolute Exclusivity",
      image: "/images/webp/goa5.webp",
      desc: "Command a fully private, decorated section of the cave. We handle the bespoke floral arrangements, premium champagne, and discreet timing for the flawless marriage proposal.",
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#050201] text-white/90 font-text relative selection:bg-[#FFE3AF] selection:text-[#050201] overflow-hidden">
        
        <svg className="hidden md:block pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-screen w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <section className="relative w-full min-h-screen flex flex-col justify-between pt-8 pb-12 px-6 md:px-12 z-20">
            <div className="w-full h-[60vh] md:h-[65vh] mt-12 mb-8 relative overflow-hidden rounded-sm group">
                <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform">
                    <Image 
                        src="/romantic-1.png" 
                        alt="Romantic Fine Dining at GoaSaya (Mobile)"
                        fill unoptimized priority sizes="100vw"
                        className="object-cover object-[center_50%] grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 md:hidden block" 
                    />
                    <Image 
                        src="/romantic-3.png" 
                        alt="Romantic Fine Dining at GoaSaya"
                        fill unoptimized priority sizes="100vw"
                        className="object-cover object-[center_80%] grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 hidden md:block" 
                    />
                </motion.div>
                <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none z-10" />
            </div>

            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mt-auto">
                <h1 className="text-5xl md:text-5xl lg:text-[7rem] font-style uppercase text-white tracking-tight leading-[0.85]">
                    A Sanctuary <br /> <span className="text-[#FFE3AF] italic">For Two.</span>
                </h1>
                <div className="flex flex-col gap-2 md:gap-4 max-w-sm">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#FFE3AF]">Intimate Dining</span>
                    <p className="text-sm md:text-base font-light leading-relaxed text-white/60">
                        Escape the noise of the city. Discover Jakarta&apos;s most immersive cave-inspired venue for anniversaries and private proposals.
                    </p>
                </div>
            </div>
        </section>

        <section className="relative w-full py-40 md:py-60 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#050201] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1A0F0A_0%,_#050201_70%)] opacity-50 z-0" />
            
            <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: premiumEase }} viewport={{ once: true }}
                    className="text-3xl lg:text-6xl font-style uppercase text-white/90 leading-tight"
                >
                    &ldquo;The cave is architecturally designed to <span className="italic text-[#FFE3AF]">insulate </span> the world, leaving only your conversation.&rdquo;
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }}
                    className="mt-12 inline-block"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#FFE3AF] border-b border-[#FFE3AF]/30 pb-2">Absolute Privacy</span>
                </motion.div>
            </div>
        </section>
        
        {/* <section className="relative w-full py-32 md:py-48 bg-[#050201] z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-14">
                <div className="mb-32 md:mb-48 flex flex-col items-center text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: premiumEase }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.4em] text-[#FFE3AF] border-b border-[#FFE3AF]/30 pb-4 mb-8"
                    >
                        Curated Experiences
                    </motion.span>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl uppercase font-style text-white leading-[0.9]"
                    >
                        The Collection
                    </motion.h3>
                </div>

                <div className="flex flex-col gap-32 md:gap-56 relative">
                    {romanticPackages.map((pkg, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={pkg.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group`}>
                                <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start' : 'justify-start'}`}>
                                    <motion.div 
                                        initial={{ opacity: 0, clipPath: 'inset(20% 20% 20% 20%)', scale: 0.95 }}
                                        whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
                                        transition={{ duration: 1.4, ease: premiumEase }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="relative w-full lg:w-10/12 aspect-[4/5] overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    >
                                        <Image 
                                            src={pkg.image} 
                                            alt={pkg.title} 
                                            fill 
                                            unoptimized
                                            className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050201]/60 via-transparent to-transparent z-10 pointer-events-none" />
                                        <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none z-10" />
                                    </motion.div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <motion.div 
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="flex flex-col max-w-lg"
                                    >
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="text-[#FFE3AF] text-[10px] uppercase tracking-[0.4em] font-medium">{pkg.id} {"//"} {pkg.subtitle}</span>
                                        </div>
                                        <h4 className="text-4xl md:text-5xl lg:text-7xl font-style uppercase text-white leading-[0.9] mb-6">
                                            {pkg.title}
                                        </h4>
                                        <div className="w-12 h-[1px] bg-white/20 mb-8" />
                                        <p className="text-white/60 font-light leading-relaxed text-sm md:text-base mb-12">
                                            {pkg.desc}
                                        </p>
                                        <Link 
                                            href={rsvpLink}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={() => trackEvent(`inquire_${pkg.title.toLowerCase().replace(' ', '_')}`, { category: 'lead_gen', label: pkg.title })}
                                            className="w-fit inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#FFE3AF] hover:text-white transition-colors group/btn"
                                        >
                                            <span className="border-b border-[#FFE3AF]/30 group-hover/btn:border-white pb-2 transition-colors">Inquire Now</span>
                                            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-2" />
                                        </Link>
                                    </motion.div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section> */}

        <section className="relative w-full py-32 md:py-48 z-10 bg-[#050201] border-t border-white/5">
            <div className="container mx-auto px-6 md:px-14">
                
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 border-b border-white/10 pb-12">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: premiumEase }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] text-[#FFE3AF]"
                        >
                            The Finer Details
                        </motion.span>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-style uppercase text-white leading-[0.9]"
                        >
                            Bespoke <br /> Enhancements
                        </motion.h3>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-white/50 font-light leading-relaxed text-sm md:text-base max-w-md lg:text-right"
                    >
                        Every love story is unique. Our dedicated concierge team is at your disposal to orchestrate personalized touches, ensuring your milestone is flawlessly executed.
                    </motion.p>
                </div>
                
                {/* Minimalist 3-Column Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    
                    {/* Detail 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col group"
                    >
                        <span className="text-[#FFE3AF]/30 font-style text-5xl mb-6 group-hover:text-[#FFE3AF] transition-colors duration-700">01</span>
                        <h4 className="text-2xl font-style uppercase text-white mb-4">Artisan Florals</h4>
                        <p className="text-white/50 font-light leading-relaxed text-sm">
                            From cascading rose paths leading to your table to bespoke centerpieces featuring her favorite blooms, our floral partners design arrangements that take the breath away.
                        </p>
                    </motion.div>

                    {/* Detail 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col group"
                    >
                        <span className="text-[#FFE3AF]/30 font-style text-5xl mb-6 group-hover:text-[#FFE3AF] transition-colors duration-700">02</span>
                        <h4 className="text-2xl font-style uppercase text-white mb-4">Discreet Photography</h4>
                        <p className="text-white/50 font-light leading-relaxed text-sm">
                            Preserve the moment without breaking the intimacy. We can arrange for a professional photographer to be hidden within the cave, capturing the exact second of a proposal.
                        </p>
                    </motion.div>

                    {/* Detail 3 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex flex-col group"
                    >
                        <span className="text-[#FFE3AF]/30 font-style text-5xl mb-6 group-hover:text-[#FFE3AF] transition-colors duration-700">03</span>
                        <h4 className="text-2xl font-style uppercase text-white mb-4">Sommelier Curation</h4>
                        <p className="text-white/50 font-light leading-relaxed text-sm">
                            Elevate your tasting menu with a hand-selected wine journey. From rare vintage champagnes for the toast to complex reds, paired specifically to your palate.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>

        <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden z-10">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image 
                    src="/images/webp/goa3.webp" 
                    alt="Reserve GoaSaya Romantic Table" 
                    fill 
                    unoptimized 
                    className="object-cover object-center opacity-80 grayscale-[20%]" 
                />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#050201] via-[#050201]/40 to-[#050201] z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#FFE3AF]/10 to-transparent z-0 pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: premiumEase }} viewport={{ once: true }} 
                className="relative z-10 flex flex-col items-center px-6 max-w-3xl"
            >
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-style uppercase text-white tracking-tight leading-[0.9] mb-8 drop-shadow-2xl">
                    Secure <br /> <span className="text-[#FFE3AF] italic">The Moment</span>
                </h2>
                
                <p className="text-sm md:text-base text-white/50 font-light mb-12 drop-shadow-md">
                    Connect with our concierge team to customize your evening and secure your private table.
                </p>

                <Link 
                    href={rsvpLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('inquire_romantic_bottom', { category: 'lead_gen', label: 'Romantic Dining' })}
                    className="inline-flex font-style items-center gap-4 px-8 py-4 border border-[#FFE3AF] bg-[#FFE3AF]/5 text-[#FFE3AF] rounded-sm text-xs md:text-sm font-medium uppercase tracking-[0.2em] hover:bg-[#FFE3AF] hover:text-[#050201] transition-all duration-500 shadow-[0_0_30px_rgba(255,227,175,0.05)] backdrop-blur-sm"
                >
                    Speak With Concierge <ArrowUpRight size={18} />
                </Link>
            </motion.div>
        </section>

    </main>
  );
}