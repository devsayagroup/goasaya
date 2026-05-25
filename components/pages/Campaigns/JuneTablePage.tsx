"use client";

import { motion, useScroll, useTransform, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Clock, Calendar, Info , MapPin} from "lucide-react"; 
import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function JuneTableView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const waLink = "https://wa.me/6281338382845?text=Hi%20GoaSaya,%20I%20want%20to%20book%20the%20June%20Table%20Lunch!";

  const menuData = [
    {
      course: "Course 01",
      title: "Appetizer",
      options: [
        { name: "Truffle Mushroom Velouté", desc: "Wild forest mushrooms, white truffle oil, crispy garlic croutons." },
        { name: "Crispy Soft Shell Crab", desc: "Chili crab emulsion, pickled daikon, micro cilantro." },
        { name: "Wagyu Beef Tartare", desc: "Cured egg yolk, black garlic aioli, rice crackers." },
      ]
    },
    {
      course: "Course 02",
      title: "Main Dish",
      options: [
        { name: "Miso Glazed Black Cod", desc: "Charred baby bok choy, dashi ginger broth, scallion oil." },
        { name: "48-Hour Braised Short Rib", desc: "Sweet soy reduction, truffle potato purée, crispy shallots." },
        { name: "Wild Mushroom Risotto (V)", desc: "Aged parmesan, seasonal truffle shavings, edamame." },
      ]
    },
    {
      course: "Course 03",
      title: "Dessert",
      options: [
        { name: "Matcha Lava Cake", desc: "Warm molten center, black sesame ice cream." },
        { name: "Yuzu & Lemon Tart", desc: "Torched meringue, buttery shortbread crust." },
        { name: "Valrhona Chocolate Mousse", desc: "Dark chocolate flakes, sea salt, raspberry coulis." },
      ]
    },
    {
      course: "Course 04",
      title: "Signature Drink",
      options: [
        { name: "Yuzu Honey Spritz", desc: "Refreshing sparkling yuzu, wild honey, mint." },
        { name: "Classic Artisan Iced Tea", desc: "Cold-brewed lychee tea, aloe vera." },
        { name: "GoaSaya Cold Brew", desc: "Our signature 18-hour steeped single origin coffee." },
      ]
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#050201] text-white/90 font-text relative selection:bg-[#FFE3AF] selection:text-[#050201] pb-24 md:pb-0">
        
        <svg className="hidden md:block pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-screen w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden z-20">
            <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform z-0">
                <Image 
                    src="/images/webp/lunch-flatlay.webp" 
                    alt="The June Table Lunch at GoaSaya"
                    fill unoptimized priority sizes="100vw"
                    className="object-cover object-center grayscale-[10%] brightness-[0.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050201] via-[#050201]/40 to-transparent" />
            </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-14 flex flex-col items-center text-center justify-center h-full pt-20">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: premiumEase }}
                    className="text-[#FFE3AF] text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium border-b border-[#FFE3AF]/30 pb-4 mb-8"
                >
                    The June Table
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.1, ease: premiumEase }}
                    className="text-5xl md:text-7xl lg:text-[7rem] font-style uppercase text-white tracking-tight leading-[0.9] mb-8"
                >
                    Your Midday <br /> <span className="text-[#FFE3AF] italic">Escape Awaits</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
                    className="text-sm md:text-lg font-light leading-relaxed text-white/70 max-w-xl mb-12"
                >
                    Introducing PIK 2&apos;s most iconic 4-course curated lunch experience. Available strictly Monday through Friday.
                </motion.p>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
                    <Link 
                        href="#menu-section"
                        className="inline-flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#FFE3AF] hover:text-white transition-colors"
                    >
                        Explore The Menu 
                    </Link>
                </motion.div>
            </div>
        </section>

        <section className="relative w-full py-24 md:py-56 z-10 overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image 
                    src="/images/webp/goa9.webp" 
                    alt="GoaSaya PIK 2 Cave Ambience" 
                    fill 
                    unoptimized
                    className="object-cover grayscale-[20%] brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050201]/80 via-[#050201]/10 to-[#050201]/80" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-20">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: premiumEase }}
                    viewport={{ once: true }}
                    className="w-full lg:w-5/12 flex flex-col"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-style uppercase text-white leading-[1.1]">
                        A Curated Culinary Journey <br/> <span className="text-[#FFE3AF] italic">In The Cave</span>
                    </h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
                    viewport={{ once: true }}
                    className="w-full lg:w-6/12 flex flex-col gap-6 text-white/70 font-light text-sm md:text-base leading-relaxed lg:border-l border-white/10 lg:pl-10"
                >
                    <p>
                        Step away from the workday and relax in our unique cave-inspired dining room. If you&apos;re looking for the <strong className="font-medium text-white/90">best lunch in PIK 2</strong>, we&apos;ve created the perfect midday escape.
                    </p>
                    <p>
                        Enjoy a customizable 4-course modern Asian set menu made just for you. Whether it&apos;s a <strong className="font-medium text-white/90">business lunch in PIK 2</strong> or an arisan gathering, it&apos;s a premium <strong className="font-medium text-white/90">AYCE alternative</strong> inside <strong className="font-medium text-white/90">PIK&apos;s most aesthetic restaurant</strong>.
                    </p>
                </motion.div>

            </div>
        </section>

        <section id="menu-section" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-[#050201] via-[#0A0502] to-[#050201] z-10 scroll-mt-10">
            <div className="container mx-auto px-6 md:px-14">
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12 text-center md:text-left">
                    <div className="flex flex-col">
                        <span className="text-[#FFE3AF] text-[10px] uppercase tracking-[0.4em] font-medium mb-4">The June Table</span>
                        <h3 className="text-5xl md:text-6xl font-style uppercase text-white">Set Menu</h3>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-end p-6 md:p-8 border border-[#FFE3AF]/20 bg-[#FFE3AF]/[0.02] rounded-sm">
                        <span className="text-4xl md:text-5xl font-style text-[#FFE3AF]">IDR 299.000</span>
                        <span className="text-xs font-light text-white/40 mt-1">/ pax (excluding tax & service)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {menuData.map((course, idx) => (
                        <div key={idx} className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE3AF] border-b border-white/10 pb-4 mb-8">
                                {course.course}
                            </span>
                            <h4 className="text-2xl font-style uppercase text-white mb-8">{course.title}</h4>
                            
                            <div className="flex flex-col gap-8">
                                {course.options.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex flex-col group">
                                        <h5 className="text-sm uppercase tracking-widest text-white/90 mb-2 group-hover:text-[#FFE3AF] transition-colors">{item.name}</h5>
                                        <p className="text-xs font-light text-white/50 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden md:flex w-full justify-center mt-32">
                    <Link 
                        href={waLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('book_june_table', { category: 'conversion', label: 'June Table Desktop' })}
                        className="inline-flex font-style items-center gap-4 px-10 py-5 border border-[#FFE3AF] bg-[#FFE3AF]/5 text-[#FFE3AF] rounded-sm text-sm uppercase tracking-[0.2em] hover:bg-[#FFE3AF] hover:text-[#050201] transition-all duration-500 shadow-[0_0_30px_rgba(255,227,175,0.05)]"
                    >
                        Book Your Lunch <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </section>

        <section className="relative w-full py-24 md:py-40 bg-[#050201] z-10">
            <div className="container mx-auto px-6 md:px-14 flex flex-col lg:flex-row gap-16 lg:gap-24">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: premiumEase }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/3 flex flex-col"
                >
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-style uppercase text-white leading-[0.9]">
                        Essential <br/> <span className="italic text-[#FFE3AF]">Rituals</span>
                    </h3>
                </motion.div>

                <div className="w-full lg:w-2/3 flex flex-col border-b border-white/10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-t border-white/10 group"
                    >
                        <div className="md:w-1/3 shrink-0">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-[#FFE3AF] transition-colors duration-500">Availability</h4>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-sm font-light text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                Exclusively Monday through Friday. Our special midday ritual is paused on weekends and public holidays to accommodate our standard dining experiences.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-t border-white/10 group"
                    >
                        <div className="md:w-1/3 shrink-0">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-[#FFE3AF] transition-colors duration-500">Service Hours</h4>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-sm font-light text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                The kitchen orchestrates the June Table from 11:00 AM until 3:00 PM precisely. We recommend arriving on time to fully enjoy the 4-course pacing.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-t border-white/10 group"
                    >
                        <div className="md:w-1/3 shrink-0">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-[#FFE3AF] transition-colors duration-500">Reservations</h4>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-sm font-light text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                Advance booking via our digital concierge is highly recommended. Walk-ins are accepted strictly subject to daily cave capacity and ingredient availability.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>

        <div className="md:hidden fixed bottom-0 left-0 w-[85%] p-4 bg-gradient-to-t from-[#050201] via-[#050201]/95 to-transparent z-50">
            <Link 
                href={waLink}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent('book_june_table', { category: 'conversion', label: 'June Table Mobile' })}
                className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#FFE3AF] text-[#050201] rounded-sm text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(255,227,175,0.2)]"
            >
                Book Your Lunch <ArrowUpRight size={16} />
            </Link>
        </div>
    </main>
  );
}
