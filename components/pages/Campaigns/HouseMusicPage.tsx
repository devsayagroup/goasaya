"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function HouseMusicClient() {
  return (
    // Base theme: Very deep warm black to contrast the fiery orange KV
    <main className="relative min-h-screen bg-[#090201] text-white selection:bg-[#FF3E00] selection:text-white pb-32">
      
      {/* =========================================
          SECTION 1: IMMERSIVE HERO
      ========================================= */}
      <div className="relative w-full h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background KV Poster */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/campaigns/hmg-6.png"
            alt="The First Ever House Music in GOA"
            fill
            priority
            className="object-cover md:object-contain object-top md:object-center opacity-80" 
            sizes="100vw"
          />
          {/* Gradients to seamlessly blend the image into the background color */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#090201] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090201] via-transparent to-transparent z-10 h-1/3 bottom-0" /> */}
        </div>

        {/* Floating Accent Text (For visual hierarchy, as the poster already has text) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-16 z-20 flex flex-col items-center text-center px-6"
        >
          <span className="text-white text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,62,0,0.5)]">
            July&apos;s Final Beat
          </span>
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-white to-transparent opacity-50" />
        </motion.div>
      </div>

      {/* =========================================
          SECTION 2: AEO & GEO OPTIMIZED DETAILS
      ========================================= */}
      <div className="relative z-20 w-full pt-16 pb-24 md:pt-24 md:pb-32 px-6">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-24"
        >
          
          {/* Main Hook */}
          <div className="flex flex-col items-center text-center">
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-6xl lg:text-7xl font-style uppercase text-white mb-6 tracking-wide drop-shadow-lg"
            >
              Echoes Through <br className="md:hidden"/> <span className="text-[#FF3E00]">The Cave</span>
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="font-text text-white/70 text-base md:text-xl leading-relaxed max-w-2xl"
            >
              For one night only, GoaSaya transforms. Experience the first-ever House Music event inside PIK 2&apos;s most iconic architectural cave. Close out July with deep beats, premium cocktails, and an unforgettable underground atmosphere right here in Tangerang.
            </motion.p>
          </div>

          {/* Event Spec Grid (Highly scannable for both users and AI bots) */}
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {/* Box 1: Date/Time */}
            <div className="bg-[#1A0A08] border border-[#FF3E00]/20 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#FF3E00]/60 transition-colors duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF3E00] font-bold mb-3">When</span>
              <span className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest">Friday</span>
              <span className="text-sm uppercase tracking-[0.2em] text-white/60 mt-1">31 July • 9 PM</span>
            </div>

            {/* Box 2: Offer */}
            <div className="bg-[#1A0A08] border border-[#FF3E00]/20 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#FF3E00]/60 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#FF3E00]/5" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF3E00] font-bold mb-3 relative z-10">Exclusive Offer</span>
              <span className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest relative z-10">Buy 1 Get 1</span>
              <span className="text-sm uppercase tracking-[0.2em] text-[#FF3E00] mt-1 relative z-10">Free Cocktails</span>
            </div>

            {/* Box 3: Performer */}
            <div className="bg-[#1A0A08] border border-[#FF3E00]/20 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#FF3E00]/60 transition-colors duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF3E00] font-bold mb-3">Featuring</span>
              <span className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest">DJ Firhan</span>
              <span className="text-sm uppercase tracking-[0.2em] text-white/60 mt-1">Live Set</span>
            </div>

            {/* Box 4: Access */}
            <div className="bg-[#FF3E00] p-8 rounded-2xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,62,0,0.2)]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-black font-bold mb-3">Access</span>
              <span className="text-xl md:text-2xl font-bold text-black uppercase tracking-widest">RSVP Only</span>
              <span className="text-sm uppercase tracking-[0.2em] text-black/80 mt-1 font-medium">Limited Capacity</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* =========================================
          SECTION 3: AEO FAQ SECTION
          (This section explicitly feeds AI engines)
      ========================================= */}
      <section className="relative z-20 w-full py-20 bg-[#120504] border-t border-b border-[#FF3E00]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-[#FF3E00] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Event Briefing</h3>
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-2 border-b border-white/5 pb-6">
              <h4 className="text-lg text-white font-medium">Where is the House Music event taking place?</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">The event is hosted exclusively at GoaSaya, located in PIK 2, Tangerang, Banten. Experience the music inside our signature architectural cave dining space.</p>
            </div>
            <div className="flex flex-col gap-2 border-b border-white/5 pb-6">
              <h4 className="text-lg text-white font-medium">Is there a cover charge or entry fee?</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">Access to the event is strictly via RSVP. Please contact our reservation team to secure your table and view minimum spend requirements for the night.</p>
            </div>
            <div className="flex flex-col gap-2 pb-2">
              <h4 className="text-lg text-white font-medium">What is the special cocktail promotion?</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">Guests attending the Friday, 31 July event will enjoy a Buy 1 Get 1 Free Cocktails offer throughout the evening to complement DJ Firhan&apos;s live set.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CALL TO ACTION
      ========================================= */}

      {/* =========================================
          SECTION 4: CALL TO ACTION
      ========================================= */}
      <section className="relative w-full py-32 md:py-40 z-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden border-t border-[#FF3E00]/10">
        
        {/* Background Image & Moody Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/campaigns/hmg-5.png" // Replace with a crowd, DJ, or cave interior image
            alt="Secure Your Spot at House Music in GOA"
            fill
            className="object-cover opacity-50 mix-blend-luminosity" // Desaturates slightly to let the orange UI pop
            sizes="100vw"
          />
          {/* Deep dark overlay that blends seamlessly into the #090201 background color */}
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-[#090201] via-black/20 to-[#090201]" />
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 max-w-2xl flex flex-col items-center"
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-style text-white mb-6 drop-shadow-2xl">
              Secure Your Spot
            </h2>
            <p className="font-text text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-lg drop-shadow-lg">
              Capacity inside the cave is strictly limited for this one-night-only event. Tap below to RSVP and ensure your entry.
            </p>
            
            {/* The CTA Button using the intense Orange/Red */}
            <a 
                href="https://wa.me/6281338382845?text=I+want+to+RSVP+for+House+Music+in+GOA+on+31+July"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#FF3E00] text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,62,0,0.6)] relative z-30"
            >
                RSVP via WhatsApp
            </a>
        </motion.div>
      </section>
      {/* <section className="relative w-full py-32 md:py-40 z-20 flex flex-col items-center justify-center text-center px-6">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 max-w-2xl flex flex-col items-center"
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-style text-white mb-6 drop-shadow-lg">
              Secure Your Spot
            </h2>
            <p className="font-text text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Capacity inside the cave is strictly limited for this one-night-only event. Tap below to RSVP and ensure your entry.
            </p>
        
            <a 
                href="https://wa.me/6281338382845?text=I+want+to+RSVP+for+House+Music+in+GOA+on+31+July"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#FF3E00] text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,62,0,0.4)]"
            >
                RSVP via WhatsApp
            </a>
        </motion.div>
      </section> */}

      {/* Reusable Mobile CTA */}
      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=I+want+to+RSVP+for+House+Music+in+GOA+on+31+July"
        text="RSVP Now"
        eventName="rsvp_house_music"
        eventLabel="House Music Campaign Page"
      />
    </main>
  );
}