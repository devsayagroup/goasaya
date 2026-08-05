"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function GoaAfterEightClient() {
  return (
    // Base theme: Pitch black background to contrast the intense crimson red
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#E61515] selection:text-white">
      
      {/* =========================================
          SECTION 1: IMMERSIVE HERO
      ========================================= */}
      <div className="relative w-full h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background KV Poster */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/campaigns/hmg-6.png"
            alt="GOA AFTER EIGHT"
            fill
            priority
            className="object-cover md:object-contain object-top md:object-center opacity-90" 
            sizes="100vw"
          />
          {/* Gradients to seamlessly blend the image into the pitch black background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050505] z-10" />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 z-20 flex flex-col items-center text-center px-6"
        >
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#E61515] to-transparent opacity-60" />
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
            <motion.span 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-[#E61515] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-6 drop-shadow-[0_0_15px_rgba(230,21,21,0.5)]"
            >
              The Night Shift Begins
            </motion.span>
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-6xl lg:text-7xl font-style uppercase text-white mb-6 tracking-wide drop-shadow-lg"
            >
              Deep House <br className="md:hidden"/> <span className="text-[#E61515]">In The Cave</span>
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="font-text text-white/70 text-base md:text-xl leading-relaxed max-w-2xl"
            >
              When the clock strikes eight, the dining room transforms. Immerse yourself in the hypnotic rhythms of Deep House, surrounded by the architectural curves of PIK 2&apos;s premier underground destination.
            </motion.p>
          </div>

          {/* Event Spec Grid */}
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {/* Box 1: Date/Time */}
            <div className="bg-[#0A0A0A] border border-[#E61515]/20 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#E61515]/60 transition-colors duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E61515] font-bold mb-3">When</span>
              <span className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest">Friday</span>
              <span className="text-sm uppercase tracking-[0.2em] text-white/60 mt-1">7 August • 9 PM</span>
            </div>

            {/* Box 2: Offer */}
            <div className="bg-[#0A0A0A] border border-[#E61515]/20 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#E61515]/60 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#E61515]/5" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E61515] font-bold mb-3 relative z-10">Exclusive Offer</span>
              <span className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest relative z-10">Buy 1 Get 1</span>
              <span className="text-sm uppercase tracking-[0.2em] text-[#E61515] mt-1 relative z-10">Cocktails</span>
            </div>

            {/* Box 3: Genre */}
            <div className="bg-[#0A0A0A] border border-[#E61515]/20 p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#E61515]/60 transition-colors duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E61515] font-bold mb-3">Sound</span>
              <span className="text-xl md:text-2xl font-medium text-white uppercase tracking-widest">Deep House</span>
              <span className="text-sm uppercase tracking-[0.2em] text-white/60 mt-1">Live DJ Set</span>
            </div>

            {/* Box 4: Access */}
            <div className="bg-[#E61515] p-8 rounded-2xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(230,21,21,0.25)]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-black font-bold mb-3">Access</span>
              <span className="text-xl md:text-2xl font-bold text-black uppercase tracking-widest">RSVP</span>
              <span className="text-sm uppercase tracking-[0.2em] text-black/80 mt-1 font-medium">Recommended</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* =========================================
          SECTION 3: AEO FAQ SECTION
      ========================================= */}
      <section className="relative z-20 w-full py-20 bg-[#0A0A0A] border-t border-b border-[#E61515]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-[#E61515] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Event Briefing</h3>
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-2 border-b border-white/5 pb-6">
              <h4 className="text-lg text-white font-medium">Where is GOA AFTER EIGHT taking place?</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">The event takes place inside the iconic cave dining room of GoaSaya, located in PIK 2, Tangerang, Banten.</p>
            </div>
            <div className="flex flex-col gap-2 border-b border-white/5 pb-6">
              <h4 className="text-lg text-white font-medium">What is the music format?</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">The night is dedicated strictly to Deep House, providing a sophisticated, rhythmic atmosphere designed for lounging, drinking, and socializing.</p>
            </div>
            <div className="flex flex-col gap-2 pb-2">
              <h4 className="text-lg text-white font-medium">How does the Friday cocktail promotion work?</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">Guests attending on Friday, 7 August can take advantage of our Buy 1 Get 1 Free Cocktails promotion starting from 9 PM until late.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CALL TO ACTION
      ========================================= */}
      <section className="relative w-full py-32 md:py-40 z-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden border-t border-[#E61515]/10">
        
        {/* Background Image & Moody Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/campaigns/hmg-5.png" // Ideal for a dark cave interior or cocktail shot
            alt="Secure Your Spot at GOA AFTER EIGHT"
            fill
            className="object-cover" 
            sizes="100vw"
          />
          {/* Deep dark overlay that blends seamlessly into the #050505 background */}
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-[#050505] via-black/50 to-[#050505]" />
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
              Tables inside the cave fill up quickly for our After Eight sessions. Tap below to RSVP and secure your entry for this Friday.
            </p>
            
            <a 
                href="https://wa.me/6281338382845?text=I+want+to+RSVP+for+GOA+AFTER+EIGHT+on+7+August"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#E61515] text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(230,21,21,0.5)] relative z-30"
            >
                RSVP via WhatsApp
            </a>
        </motion.div>
      </section>

      {/* Reusable Mobile CTA */}
      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=I+want+to+RSVP+for+GOA+AFTER+EIGHT+on+7+August"
        text="RSVP Now"
        eventName="rsvp_goa_after_eight"
        eventLabel="Goa After Eight Campaign Page"
      />
    </main>
  );
}