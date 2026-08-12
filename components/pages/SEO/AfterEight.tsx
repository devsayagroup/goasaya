"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import GlobalCta from "@/components/ui/GlobalCta";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function AfterEightView() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="relative min-h-screen bg-[#0A0505] text-[#EEEDE5] overflow-hidden selection:bg-[#8B1A1A] selection:text-white">
      
      {/* HERO SECTION - Deep Red Tint */}
      <section className="relative w-full h-[85vh] lg:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campaigns/after-eight.webp" // Use a shot showing the red lighting
            alt="GoaSaya Bar di PIK 2"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            priority
          />
          {/* Intense red-to-black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3A0A0A]/60 via-[#0A0505]/80 to-[#0A0505]" />
        </div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="relative z-10 flex flex-col items-center text-center px-6 mt-20"
        >
          <motion.span variants={fadeUp} className="text-[#303030] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">
            Your Go-To Hangout Spot At Night
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-base font-extrabold text-[#FE082C] leading-[.7] tracking-tighter mb-12 drop-shadow-[0_0_30px_rgba(212,79,39,0.5)]">
            GOA AFTER <br /> <span className="font-after tracking-normal">Eight</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="font-text text-white/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed tracking-wide">
            At 8:00 PM, the lights turn red. The tempo rises. Experience the ultimate late-night bar and lounge in PIK 2.
          </motion.p>
        </motion.div>
      </section>

      {/* THREE PILLARS OF NIGHTLIFE */}
      <section className="relative z-20 py-24 bg-[#0A0505]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* Pillar 1: The Transformation */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-[#8B1A1A]/30">
                <Image 
                  src="/seo/goa-tunnel-turns-red.webp" // Dark/moody venue shot
                  alt="Red Ambient Lighting PIK 2" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 " />
              </div>
              <h3 className="text-xl md:text-2xl font-style text-white mb-3 group-hover:text-[#D44F27] transition-colors">The Transformation</h3>
              <p className="font-text text-sm text-white/60 leading-relaxed">
                As night falls, our iconic sand cave is bathed in deep red ambient lighting, shifting the mood from aesthetic dining to an exclusive speakeasy vibe.
              </p>
            </motion.div>

            {/* Pillar 2: New Cocktails */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-[#8B1A1A]/30">
                <Image 
                  src="/seo/goasaya-cocktails.webp" // A shot of the new cocktails
                  alt="Bar di PIK 2 Cocktails" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style text-white mb-3 group-hover:text-[#D44F27] transition-colors">The Night Menu</h3>
              <p className="font-text text-sm text-white/60 leading-relaxed">
                Discover a brand new selection of bold, artisan cocktails crafted specifically for the After Eight crowd. Premium spirits, elevated mixology.
              </p>
            </motion.div>

            {/* Pillar 3: Nongkrong / Hangout */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-[#8B1A1A]/30">
                <Image 
                  src="/seo/goasaya-after-eight.webp" // A shot showing the DJ or lounge seating
                  alt="Tempat Nongkrong Malam PIK 2" 
                  fill 
                  className="object-cover object-top" 
                />
                <div className="absolute inset-0" />
              </div>
              <h3 className="text-xl md:text-2xl font-style text-white mb-3 group-hover:text-[#D44F27] transition-colors">Where To Nongkrong</h3>
              <p className="font-text text-sm text-white/60 leading-relaxed">
                The perfect answer to &quot;where to go next.&quot; Live DJ sets, bottle service, and an unmatched crowd making it the best hangout spot in PIK.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GLOBAL CTA - Styled for the Red After Eight Theme */}
      <GlobalCta 
        title="Secure Your Lounge Space"
        subtitle="The Night Is Young"
        description="Tables fill up fast after 8 PM. Book your spot now for bottle service, new cocktails, and the best nightlife in PIK 2."
        ctaText="Book A Table"
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+a+table+for+After+Eight+tonight."
        bgImage="/campaigns/after-eight.webp"
        
        // Custom Deep Red Nightlife Theme
        sectionClassName="bg-[#050202] border-[#8B1A1A]/20" 
        overlayClassName="bg-[#050202]/80 bg-gradient-to-b from-[#0A0505] via-[#2A0808]/40 to-[#0A0505]"
        subtitleClassName="text-[#D44F27] drop-shadow-md" 
        titleClassName="text-white drop-shadow-[0_0_15px_rgba(212,79,39,0.3)]" 
        descriptionClassName="text-white/60 drop-shadow-none" 
        buttonClassName="bg-[#8B1A1A] text-white hover:bg-white hover:text-[#8B1A1A] shadow-[0_0_20px_rgba(139,26,26,0.4)]" 
      />

      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+a+table+for+After+Eight+tonight."
        text="Book After Eight"
      />
    </main>
  );
}