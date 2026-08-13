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
      <section className="relative w-full h-[75vh] md:h-[80vh] lg:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campaigns/after-eight.webp"
            alt="Bar di PIK 2 - GoaSaya After Eight"
            fill
            className="object-cover object-center opacity-60 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3A0A0A]/60 via-[#0A0505]/80 to-[#0A0505]" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="relative z-10 flex flex-col items-center text-center px-6 mt-72 md:mt-64"
        >
          <motion.span variants={fadeUp} className="text-[#303030] text-[9px] md:text-xs uppercase tracking-[0.4em] font-bold mb-8">
            Your Go-To Hangout Spot At Night
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-8xl font-base font-extrabold text-[#FE082C] leading-[.7] tracking-tighter mb-24 drop-shadow-[0_0_30px_rgba(212,79,39,0.5)]">
            GOA AFTER <br /> <span className="font-after tracking-normal">Eight</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-text text-white/70 text-sm md:text-base max-w-xs md:max-w-lg mx-auto leading-relaxed tracking-wide">
            Bar dan tempat hangout di PIK 2. Setiap malam pukul 8, GoaSaya berubah jadi lounge eksklusif.
          </motion.p>
        </motion.div>
      </section>

      {/* THE MANIFESTO (SEO-Optimized Intro, EN + ID) */}
      <section className="relative z-20 py-24 bg-[#0A0505] flex justify-center border-t border-[#8B1A1A]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-xl md:text-3xl font-style text-[#FE082C] mb-8 uppercase tracking-widest"
          >
            Premier Bar &amp; Hangout Spot in PIK 2
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-text text-lg md:text-2xl text-white/80 leading-relaxed font-light"
          >
            Forget the ordinary. As the clock strikes eight and the ambient lights turn crimson, our iconic
            sand cave transforms into
            <span className="text-[#FE082C] font-semibold"> After Eight </span>
            — an exclusive late-night sanctuary fueled by pulsing beats, premium bottle service, and
            uncompromising mixology.
          </motion.p>
          {/* <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-text text-sm md:text-base text-white/60 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Setiap malam pukul 8, GoaSaya berubah dari restoran gua ikonik menjadi bar dan tempat hangout di
            PIK 2 yang beda dari yang lain — lengkap dengan pencahayaan merah, DJ set, dan menu koktail baru
            yang dirancang khusus untuk malam hari. Kalau kamu sedang cari tempat nongkrong malam di PIK 2,
            After Eight adalah jawabannya.
          </motion.p> */}
        </div>
      </section>

      {/* THREE PILLARS OF NIGHTLIFE */}
      <section className="relative z-20 py-24 bg-[#0A0505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center text-sm md:text-style uppercase tracking-[0.1em] text-white/50 mb-16 font-bold"
          >
            Kenapa GoaSaya After Eight Jadi Pilihan Bar dan Hangout di PIK
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8">

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
                  src="/seo/goa-tunnel-turns-red.webp"
                  alt="Suasana Bar di PIK 2 Malam Hari"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style mb-3 text-[#FE082C] transition-colors">The Transformation</h3>
              <p className="font-text text-sm text-white/60 leading-relaxed">
                As night falls, our iconic sand cave is bathed in deep red ambient lighting, shifting the mood
                from aesthetic dining to an exclusive speakeasy-style bar in PIK 2.
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
                  src="/seo/goasaya-cocktails.webp"
                  alt="Signature Cocktails Bar di PIK 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style mb-3 text-[#FE082C] transition-colors">The Night Menu</h3>
              <p className="font-text text-sm text-white/60 leading-relaxed">
                Discover a brand new selection of bold, artisan cocktails crafted specifically for the After
                Eight crowd. Premium spirits, elevated mixology.
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
                  src="/seo/goasaya-after-eight.webp"
                  alt="Tempat Nongkrong Malam PIK 2"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style mb-3 text-[#FE082C] transition-colors">Where To Nongkrong</h3>
              <p className="font-text text-sm text-white/60 leading-relaxed">
                The perfect answer to &quot;where to go next.&quot; Live DJ sets, bottle service, and an
                unmatched crowd making it the best hangout spot in PIK.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THE DETAILS (SEO FAQ styled as a VIP Concierge) */}
      <section className="relative z-20 py-24 bg-[#050202] border-t border-[#8B1A1A]/20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-sm md:text-base uppercase tracking-[0.4em] text-[#FE082C] mb-12 text-center font-bold">
              The Details
            </h2>

            <div className="space-y-2">
              {/* FAQ Item 1 - must match faqSchema exactly */}
              <details className="group border-b border-[#8B1A1A]/30 py-5 cursor-pointer">
                <summary className="text-white/90 font-style text-lg md:text-xl list-none flex justify-between items-center group-hover:text-[#FE082C] transition-colors">
                  Where is the best hangout spot at night in PIK 2?
                  <span className="text-[#FE082C] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="font-text text-sm md:text-base text-white/60 leading-relaxed mt-4 pr-8">
                  GoaSaya After Eight is the ultimate go-to hangout spot at night in PIK 2. Every night at 8 PM,
                  the restaurant transforms into a vibrant lounge with red ambient lighting and DJ performances.
                </p>
              </details>

              {/* FAQ Item 2 */}
              <details className="group border-b border-[#8B1A1A]/30 py-5 cursor-pointer">
                <summary className="text-white/90 font-style text-lg md:text-xl list-none flex justify-between items-center group-hover:text-[#FE082C] transition-colors">
                  Tempat nongkrong malam di PIK 2 yang bagus di mana?
                  <span className="text-[#FE082C] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="font-text text-sm md:text-base text-white/60 leading-relaxed mt-4 pr-8">
                  GoaSaya adalah rekomendasi terbaik untuk nongkrong malam (night hangout) di PIK 2. Kami
                  memiliki konsep After Eight di mana suasana berubah menjadi bar eksklusif dengan signature
                  cocktails terbaru.
                </p>
              </details>

              {/* FAQ Item 3 */}
              <details className="group border-b border-[#8B1A1A]/30 py-5 cursor-pointer">
                <summary className="text-white/90 font-style text-lg md:text-xl list-none flex justify-between items-center group-hover:text-[#FE082C] transition-colors">
                  Does GoaSaya have a bar?
                  <span className="text-[#FE082C] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="font-text text-sm md:text-base text-white/60 leading-relaxed mt-4 pr-8">
                  Yes, GoaSaya features a premium bar. Our &apos;After Eight&apos; experience introduces an
                  entirely new cocktail menu designed specifically for the late-night lounge crowd.
                </p>
              </details>

              {/* FAQ Item 4 - Location & Hours, folded into FAQ per request */}
              <details className="group border-b border-[#8B1A1A]/30 py-5 cursor-pointer">
                <summary className="text-white/90 font-style text-lg md:text-xl list-none flex justify-between items-center group-hover:text-[#FE082C] transition-colors">
                  Dimana lokasi dan jam buka GoaSaya After Eight?
                  <span className="text-[#FE082C] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="font-text text-sm md:text-base text-white/60 leading-relaxed mt-4 pr-8">
                  GoaSaya After Eight buka setiap malam pukul 20.00 &ndash; 00.00, berlokasi di kawasan PIK 2,
                  Tangerang. Salah satu bar dan tempat nongkrong malam di PIK 2 dengan konsep gua pasir yang
                  tidak akan kamu temukan di tempat lain.
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL CTA - Styled for the Red After Eight Theme */}
      <GlobalCta
        title="Secure Your Lounge Space"
        subtitle="The Night Is Young"
        description="Tables fill up fast after 8 PM. Book your spot now for bottle service, new cocktails, and the best nightlife in PIK 2."
        ctaText="Book A Table"
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+a+table+for+After+Eight+tonight."
        bgImage="/seo/goa-tunnel-turns-red.webp"

        sectionClassName="bg-[#050202] border-[#8B1A1A]/20"
        overlayClassName="bg-[#050202]/10 bg-gradient-to-b from-[#0A0505] via-[#2A0808]/40 to-[#0A0505]"
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