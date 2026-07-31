"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Utensils, Palette, Clock, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function JulyBitesPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const waLink = "https://wa.me/6281338382845?text=Hi%20GoaSaya,%20I%20would%20like%20to%20reserve%20a%20table%20for%20the%20July%20Bites:%20The%20Munchies%20Journey.";

  return (
    // Base is a rich pastel cream, text is deep espresso brown (NO BLACK)
    <main className="relative w-full bg-[#FFF9F2] min-h-screen text-[#4A3B32] overflow-hidden selection:bg-[#F5B5C8] selection:text-[#4A3B32]">
      
      {/* INLINE GRAIN / PAPER TEXTURE EFFECT */}
      <svg className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-multiply w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* WATER PAINT BACKGROUND BLOBS (Fixed globally to scroll naturally) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mary's Rose Splash */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#F5B5C8]/40 blur-[120px] rounded-full mix-blend-multiply" />
        {/* Endless Sky Splash */}
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#9BBAD2]/30 blur-[140px] rounded-full mix-blend-multiply" />
        {/* Pastel Yellow Splash */}
        <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] bg-[#FDF1A9]/40 blur-[100px] rounded-full mix-blend-multiply" />
        {/* Orchid Petal Splash */}
        <div className="absolute bottom-[20%] right-[10%] w-[45vw] h-[45vw] bg-[#C3A6CB]/20 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 flex items-center gap-2 text-[#E293A2]"
          >
            <Sparkles size={14} /> Only in July. Only During Lunch.
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}
            // Big Bubble Pastel Effect: Heavy weight, tight tracking, glossy gradient, soft shadow
            className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-[#F5B5C8] via-[#FDF1A9] to-[#9BBAD2] drop-shadow-[0_4px_4px_rgba(226,147,162,0.3)]"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }} // Adds a subtle glossy outline
          >
            July Bites<br/>
            <span className="text-4xl md:text-6xl lg:text-[5rem] bg-gradient-to-r from-[#9BBAD2] to-[#C3A6CB] bg-clip-text">The Munchies Journey</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-sm md:text-lg text-[#4A3B32]/80 font-medium tracking-wide max-w-xl leading-relaxed"
          >
            This July, lunch gets a little more playful. A refillable mini lunch journey featuring 22 curated bites designed for exploration.
          </motion.p>
        </div>
      </section>

      {/* 2. THE CONCEPT (What is July Bites?) */}
      <section className="relative w-full py-24 md:py-32 z-20">
        <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E293A2] to-[#C3A6CB] mb-6 drop-shadow-sm">
              22 Bites.<br/>One Journey.
            </h2>
            <p className="text-sm md:text-base text-[#4A3B32]/80 font-medium leading-relaxed mb-6">
              Experience an aesthetic lunch concept tailored for perfect afternoons. You will receive a Journey Card featuring 22 exquisite mini lunch selections.
            </p>
            <p className="text-sm md:text-base text-[#4A3B32]/80 font-medium leading-relaxed">
              Order your bites in small, curated rounds. Once you finish a plate, your journey continues. It is an exploration of flavors, served in perfect, photogenic portions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(226,147,162,0.15)] bg-white border-4 border-white"
          >
             {/* Replace with your actual food collage image from the deck */}
            <div className="absolute inset-0 bg-[#FDF1A9]/30 flex items-center justify-center text-[#4A3B32]/40 text-xs font-bold tracking-widest uppercase">
              [ Campaign Imagery Placeholder ]
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE SYSTEM & RULES */}
      <section className="relative w-full py-24 md:py-32 z-20">
        <div className="container mx-auto px-6 md:px-14 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9BBAD2] mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-[#4A3B32]">The Journey Rules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Glassmorphism Cards for a clean, floating look */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} 
              className="p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(74,59,50,0.05)]"
            >
              <Utensils className="text-[#E293A2] mb-6" size={32} strokeWidth={2} />
              <h3 className="text-xl font-extrabold uppercase text-[#4A3B32] mb-3 tracking-tight">Paced Exploration</h3>
              <p className="text-sm text-[#4A3B32]/70 font-medium leading-relaxed">
                Order a maximum of 4-5 mini menus per round. Savor the flavors, and seamlessly refill your order as you progress through the Journey Card.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} 
              className="p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(74,59,50,0.05)]"
            >
              <Clock className="text-[#9BBAD2] mb-6" size={32} strokeWidth={2} />
              <h3 className="text-xl font-extrabold uppercase text-[#4A3B32] mb-3 tracking-tight">Time to Indulge</h3>
              <p className="text-sm text-[#4A3B32]/70 font-medium leading-relaxed">
                Your journey lasts for 90 to 120 minutes of pure indulgence. Please note that the last order is taken 30 minutes before your session concludes.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} 
              className="p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(74,59,50,0.05)] md:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-8"
            >
              <div className="shrink-0 bg-[#FDF1A9]/30 p-4 rounded-2xl">
                <CheckCircle2 className="text-[#DDBB99]" size={36} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold uppercase text-[#4A3B32] mb-3 tracking-tight">Mindful Dining</h3>
                <p className="text-sm text-[#4A3B32]/70 font-medium leading-relaxed md:max-w-3xl">
                  This experience is crafted exclusively for dine-in. Takeaway and sharing packages are not permitted. We kindly ask you to order mindfully to fully enjoy the journey without creating food waste.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVITY: MUNCHIES & CANVAS */}
      <section className="relative w-full py-24 md:py-32 z-20">
        <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row-reverse items-center gap-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C3A6CB] mb-4 flex items-center gap-2">
              <Palette size={14}/> Special Activity
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#4A3B32] mb-6 drop-shadow-sm">
              Munchies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9BBAD2] to-[#E293A2]">& Canvas</span>
            </h2>
            <p className="text-sm md:text-base text-[#4A3B32]/80 font-medium leading-relaxed mb-6">
              Elevate your Friday lunch. Enjoy the visual poetry of a live painting performance by a guest artist in our dining area, or secure a limited seat for our Mini Canvas Session to paint while you dine.
            </p>
            
            {/* Soft floating schedule box */}
            <div className="border border-white/50 p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-[0_10px_40px_rgba(74,59,50,0.05)] mt-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E293A2] mb-4">Live Painting Schedule</h4>
              <p className="text-sm text-[#4A3B32] font-extrabold mb-4">Every Friday Lunch // 12:30 - 14:30</p>
              <ul className="text-sm text-[#4A3B32]/70 font-medium space-y-3">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#9BBAD2]" /> Friday, 10 July 2026</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#FDF1A9]" /> Friday, 17 July 2026</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#C3A6CB]" /> Friday, 24 July 2026</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E293A2]" /> Friday, 31 July 2026</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(155,186,210,0.2)] bg-white border-4 border-white"
          >
            {/* Replace with canvas activity image */}
            <div className="absolute inset-0 bg-[#9BBAD2]/20 flex items-center justify-center text-[#4A3B32]/40 text-xs font-bold tracking-widest uppercase">
               [ Artist Painting Placeholder ]
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PRICING & CTA */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-20 flex flex-col items-center px-6 max-w-2xl bg-white/40 p-12 md:p-20 rounded-[3rem] backdrop-blur-md shadow-[0_20px_60px_rgba(226,147,162,0.15)] border border-white"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E293A2] mb-6 block">The Investment</span>
          
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[1] mb-2 text-[#4A3B32]">
            369K<span className="text-3xl md:text-4xl text-[#9BBAD2]">++</span>
          </h2>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#4A3B32]/40 mb-10">Per Person</p>
          
          <p className="text-sm md:text-base leading-loose tracking-wide text-[#4A3B32]/70 font-medium mb-12">
            Secure your table for this exclusive July event. Slots for the Munchies Journey and the Mini Canvas Sessions are highly limited.
          </p>

          <Link
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('reserve_july_bites', { category: 'campaign', label: 'July Bites Reserve' })}
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-[#F5B5C8] to-[#9BBAD2] text-white font-extrabold uppercase tracking-[0.2em] text-sm shadow-[0_10px_30px_rgba(245,181,200,0.4)] hover:shadow-[0_15px_40px_rgba(245,181,200,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Reserve Your Journey
            <svg 
              xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}