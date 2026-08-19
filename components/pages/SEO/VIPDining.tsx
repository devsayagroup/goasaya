// app/vip-dining/vip-client.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const eliteEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const useCases = [
  {
    title: "The Elite Arisan",
    description: "Gather in unparalleled style. Our private chambers offer highly aesthetic interiors, flattering natural and dramatic lighting, and a secluded atmosphere designed for the ultimate makan cantik experience with your closest circle.",
    image: "/campaigns/makan-cantik.webp", 
  },
  {
    title: "Executive & Corporate",
    description: "Impress your most valued clients. Conduct business in total privacy with dedicated, discreet service and a bespoke Asian Progressive menu that speaks volumes about your standards.",
    image: "/campaigns/corporate-events.webp", 
  },
  {
    title: "Milestone Celebrations",
    description: "Birthdays, anniversaries, and life’s biggest moments deserve an extraordinary backdrop. Select rooms in The 1% Lounge feature integrated KTV systems, seamlessly transitioning your dinner into an unforgettable private party.",
    image: "/campaigns/birthday-celebration.webp", 
  }
];

export default function VIPDiningClient() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#FFE3AF] selection:text-black overflow-hidden">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[100svh] flex flex-col justify-end pb-24 md:pb-32 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src="/images/webp/V4.webp" 
            alt="VIP Dining Room in PIK 2" 
            fill 
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 md:px-14">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: eliteEase }}
            className="text-[#FFE3AF] text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 block font-semibold"
          >
            Exclusive Private Events
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: eliteEase }}
            className="text-5xl md:text-7xl lg:text-8xl font-style mb-6 leading-[0.95] tracking-tighter text-white"
          >
            VIP Dining <br />
            <span className="italic text-[#FFE3AF] font-light">& Private Rooms.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: eliteEase }}
            className="text-sm md:text-lg text-white/60 max-w-xl leading-relaxed font-light mt-8"
          >
            The definitive destination for private rooms and bespoke gatherings in PIK 2. 
            From intimate corporate dinners to vibrant celebrations, GoaSaya provides an unparalleled architectural backdrop for your most important events.
          </motion.p>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-6 md:px-14">
          <div className="flex flex-col gap-24 md:gap-40">
            {useCases.map((useCase, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col gap-10 md:gap-16 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                  
                  {/* Image Block */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: eliteEase }}
                    className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] overflow-hidden rounded-sm"
                  >
                    <Image 
                      src={useCase.image} 
                      alt={useCase.title} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 50vw" 
                      className="object-cover transition-transform duration-[5s] hover:scale-105" 
                    />
                  </motion.div>

                  {/* Text Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: eliteEase }}
                    className="w-full lg:w-1/2 flex flex-col justify-center max-w-lg"
                  >
                    <h2 className="text-3xl md:text-5xl font-style mb-6 text-white leading-tight">
                      {useCase.title}
                    </h2>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                      {useCase.description}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE VENUES SPECS */}
      <section className="py-24 bg-[#120806] border-y border-[#FFE3AF]/10">
        <div className="container mx-auto px-6 md:px-14 text-center max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: eliteEase }}
            className="text-3xl md:text-5xl font-style mb-8 text-white"
          >
            Capacities & <span className="italic text-[#FFE3AF]">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: eliteEase }}
            className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-16"
          >
            Whether you require the architectural wonder of The Cave and The Hole, or the absolute privacy of The 1% Lounge, our spaces are designed to accommodate your specific needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Intimate Gatherings", spec: "12 to 19 Guests", desc: "Perfect for arisan and private family dinners. Features dedicated service." },
              { title: "Corporate Events", spec: "Up to 32 Guests", desc: "Expansive private chambers suitable for board dinners and executive hosting." },
              { title: "Entertainment", spec: "Integrated KTV", desc: "Select rooms in The 1% Lounge feature elite sound systems for private celebrations." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: eliteEase }}
                className="p-8 border border-white/5 bg-[#0a0a0a] rounded-sm"
              >
                <h3 className="text-[#FFE3AF] text-sm tracking-[0.2em] uppercase mb-4">{item.title}</h3>
                <div className="text-2xl font-style text-white mb-4">{item.spec}</div>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 md:py-48 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: eliteEase }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-[#FFE3AF] text-[10px] tracking-[0.4em] uppercase mb-6 block font-semibold">
            By Reservation Only
          </span>
          <h2 className="text-4xl md:text-6xl font-style leading-[1.1] mb-8 text-white">
            Secure Your <br/><span className="italic text-[#FFE3AF]">VIP Experience</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light mb-12">
            Dates for our private chambers book up quickly. Speak with our concierge to arrange your bespoke event and secure your private room in PIK 2.
          </p>
          
          {/* Link to WhatsApp or specific VIP booking page */}
          <Link 
            href="https://wa.me/6281338382845" 
            target="_blank"
            className="group relative rounded-sm inline-flex items-center justify-center overflow-hidden border border-[#FFE3AF] bg-transparent px-12 py-4 text-xs tracking-[0.3em] uppercase font-medium text-[#FFE3AF] transition-all duration-500 hover:text-black"
          >
            <span className="absolute inset-0 h-full w-full bg-[#FFE3AF] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
            <span className="relative z-10">Contact Concierge</span>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}