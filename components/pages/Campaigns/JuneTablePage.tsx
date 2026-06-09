"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { juneTableMenu, CourseData, MenuOption } from "@/content/campaigns/june-table-data";
import MobileStickyCta from "@/components/ui/MobileStickyCta"; 

// =========================================
// APPLE-STYLE MINIMALIST MENU COMPONENTS
// =========================================

const MenuGridItem = ({ option, index }: { option: MenuOption; index: number }) => {
  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            type: "spring", 
            stiffness: 260, 
            damping: 25, 
            delay: index * 0.05 
          } 
        }
      }}
      className="flex flex-col group cursor-pointer"
    >
      <div className="relative w-full aspect-[4/5] md:aspect-[4/3] rounded-[20px] md:rounded-[32px] overflow-hidden bg-black/5 mb-4 md:mb-6">
        <Image
          src={option.image || "/images/webp/goa6.webp"}
          alt={option.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col px-1 md:px-2">
        <h3 className="text-sm md:text-2xl font-style text-[#3A0B0E] font-medium tracking-wide mb-1 md:mb-2 transition-colors duration-300">
          {option.name}
        </h3>
        <p className="font-text text-[#3A0B0E]/50 text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
          {option.desc}
        </p>
      </div>
    </motion.div>
  );
};

const InteractiveMenu = () => {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  return (
    <div className="w-full max-w-[1400px] mx-auto py-8 md:py-20">
      
      {/* 1. Header & Tab Navigation (STICKY FIX APPLIED) */}
      <div className="sticky top-0 z-30 flex flex-col items-center text-center pb-4 mb-8 md:mb-16 bg-white/95 backdrop-blur-xl border-b border-[#3A0B0E]/10">
        <h2 className="text-[#3A0B0E] font-style text-2xl md:text-4xl uppercase font-semibold mb-12 md:mb-16">
          The Culinary Journey
        </h2>
        
        {/* Changed to a 2-Column Grid on Mobile, Flex Row on Desktop */}
        <div className="relative grid grid-cols-2 md:flex md:flex-row justify-items-center md:justify-center gap-y-6 gap-x-2 md:gap-14 w-full max-w-4xl px-4 md:px-0">
          {juneTableMenu.map((course, idx) => {
            const isActive = activeCourseIndex === idx;
            return (
              <button
                key={course.course}
                onClick={() => setActiveCourseIndex(idx)}
                className={`relative pb-3 text-sm md:text-md uppercase tracking-[0.15em] transition-colors duration-300 outline-none w-max
                  ${isActive ? "text-[#3A0B0E] font-medium" : "text-[#3A0B0E]/40 hover:text-[#3A0B0E]/80"}`}
              >
                {course.title}
                
                {/* Minimalist floating underline */}
                {isActive && (
                  <motion.div
                    layoutId="minimalistTab"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#3A0B0E]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Dynamic Grid Content */}
      <div className="min-h-[800px] px-6"> 
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourseIndex}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-20"
          >
            {juneTableMenu[activeCourseIndex].options.map((option, idx) => (
              <MenuGridItem key={option.name} option={option} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};


export default function JuneTableClient() {
  return (
    <main className="relative min-h-screen bg-[#0B0604] selection:bg-[#FFE3AF] selection:text-black">
      
      {/* =========================================
          SECTION 1: THE HERO 
      ========================================= */}
      <div className="relative w-full h-[85vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/june/cover.webp"
            alt="The June Table Campaign Background"
            fill
            priority
            className="object-cover" 
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0B0604] z-10" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full max-w-[400px] md:max-w-md lg:max-w-2xl mx-auto px-6 mt-12"
        >
          <div className="relative w-full aspect-[16/9]">
            <Image 
              src="/campaigns/junetabletitle.png"
              alt="The June Table - A Lifestyle Lunch Set"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 448px, 576px"
            />
          </div>
        </motion.div>
      </div>

      {/* =========================================
          SECTION 2: ABOUT & DETAILS 
      ========================================= */}
      <div className="relative z-20 w-full bg-[#0B0604] text-white pt-24 pb-20 md:pt-40 md:pb-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="container mx-auto flex flex-col px-6 md:px-14 gap-16 md:gap-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
              <h2 className="text-3xl md:text-5xl font-style text-[#FFE3AF] mb-6 tracking-wide drop-shadow-sm">
                A Midday Escape
              </h2>
              <p className="font-text text-white/70 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                Explore up to 20 exquisite menu choices crafted to elevate your weekday afternoons. A curated dining experience designed for those who appreciate the finer things.
              </p>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
              className="flex items-baseline justify-start lg:justify-end gap-3 lg:gap-4 w-full"
            >
              <span className="text-7xl md:text-8xl lg:text-9xl font-style text-[#FFE3AF] tracking-wide leading-none">
                349K
              </span>
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/40 whitespace-nowrap">
                / Person
              </span>
            </motion.div>
          </div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-6"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">Date</span>
              <span className="text-base md:text-lg uppercase tracking-[0.15em] text-white/90 font-light">8 — 30 June</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">Availability</span>
              <span className="text-base md:text-lg uppercase tracking-[0.15em] text-white/90 font-light">Weekdays</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-semibold">Time</span>
              <span className="text-base md:text-lg uppercase tracking-[0.15em] text-white/90 font-light">11:00 — 15:00</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* =========================================
          SECTION 3: THE MENU 
      ========================================= */}
      <section id="menu-section" className="relative w-full py-24 md:py-32 bg-[#0B0604] z-10 scroll-mt-10">
        <div className="container mx-auto px-6 md:px-14">
            
            {/* Refined Copywriting Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-center md:text-left pb-12"
            >
                <div className="flex flex-col w-full">
                    <span className="text-[#FFE3AF] text-[10px] uppercase tracking-[0.4em] font-medium mb-4">The June Table</span>
                    <h3 className="text-5xl md:text-6xl font-style uppercase text-white mb-6">Set Menu</h3>
                    <p className="font-text text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Curate your perfect dining experience. Select one exquisite dish from each of the four courses below to build your personalized lifestyle lunch.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
                {juneTableMenu.map((course, idx) => (
                    <div key={idx} className="flex flex-col">
                        {/* Added "Choose One" indicator */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                          <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFE3AF]">
                              {course.course}
                          </span>
                          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                              (Choose 1)
                          </span>
                        </div>

                        <h4 className="text-2xl font-style uppercase text-white mb-10">{course.title}</h4>
                        
                        <div className="flex flex-col gap-10">
                            {course.options.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex flex-col group">
                                    <h5 className="text-sm uppercase tracking-widest text-white/90 mb-3 group-hover:text-[#FFE3AF] transition-colors">{item.name}</h5>
                                    <p className="text-xs font-light text-white/50 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

        {/*     
        <div className="relative z-20 bg-white w-full rounded-t-[40px] -mt-10">
            <InteractiveMenu />
        </div> */}

      <section className="relative w-full py-32 md:py-40 z-10 flex flex-col items-center justify-center text-center px-6  overflow-hidden">
        {/* Background Image & Dark Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/campaigns/marble.jpeg" 
            alt="Secure Your Seat at GOASAYA"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* A moody overlay that blends the edges into the dark page background */}
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-[#0B0604]/20 via-black/10 to-[#0B0604]/10" />
        </div>

        {/* CTA Content */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 max-w-2xl flex flex-col items-center"
        >
            <span className="text-[#FFE3AF] text-[10px] uppercase tracking-[0.4em] font-semibold mb-6 drop-shadow-md">
              Limited Availability
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-style text-white mb-8 drop-shadow-lg">
              Secure Your Seat
            </h2>
            <p className="font-text text-white/80 text-sm md:text-base leading-relaxed mb-12 max-w-lg drop-shadow-md">
                The June Table is an exclusive, limited-time offering available only on weekdays this month. Reserve your experience today.
            </p>
            <a 
                href="https://wa.me/6281338382845?text=I+want+to+book+the+june+table"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 border border-[#FFE3AF] text-[#FFE3AF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#FFE3AF] hover:text-black transition-all duration-500 backdrop-blur-sm bg-black/20 hover:bg-[#FFE3AF]"
            >
                Book via WhatsApp
            </a>
        </motion.div>
      </section>

      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=I+want+to+book+the+june+table"
        text="Book The June Table"
        eventName="book_june_table"
        eventLabel="June Table Menu Page"
      />
    </main>
  );
}