"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GlobalCtaProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  href?: string;
  bgImage?: string;
  // --- Custom Styling Props ---
  sectionClassName?: string;
  overlayClassName?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

export default function GlobalCta({
  title = "Ready to Experience GoaSaya?",
//   subtitle = "Join Us",
  description = "Secure your table inside PIK 2's most iconic sand cave for an unforgettable evening of premium dining and curated cocktails.",
  ctaText = "Book Your Table",
  href = "https://wa.me/6281338382845?text=I+want+to+book+a+table+at+GoaSaya",
  bgImage = "/rooms/frontview.webp",
  
  // --- Default Theme (Dark & Gold) ---
  sectionClassName = "bg-[#050505] border-[#FFE3AF]/10",
  overlayClassName = "bg-black/60 bg-gradient-to-b from-[#050505] via-black/40 to-[#050505]",
//   subtitleClassName = "text-[#FFE3AF] drop-shadow-md",
  titleClassName = "text-white drop-shadow-2xl",
  descriptionClassName = "text-white/70 drop-shadow-lg",
  buttonClassName = "bg-[#FFE3AF] text-black hover:bg-white shadow-[0_0_20px_rgba(255,227,175,0.15)]"
}: GlobalCtaProps) {
  return (
    <section className={`relative w-full py-24 md:py-32 z-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden border-t ${sectionClassName}`}>
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt="Dine at GoaSaya"
          fill
          className="object-cover opacity-40 mix-blend-luminosity grayscale" 
          sizes="100vw"
        />
        {/* Dynamic Overlay that controls the vibe */}
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-2xl flex flex-col items-center"
      >
        {/* <span className={`text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${subtitleClassName}`}>
          {subtitle}
        </span> */}
        <h2 className={`text-3xl md:text-5xl font-style mb-6 ${titleClassName}`}>
          {title}
        </h2>
        <p className={`font-text text-sm md:text-base leading-relaxed mb-10 max-w-md ${descriptionClassName}`}>
          {description}
        </p>
        
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:scale-105 transition-all duration-300 rounded-full relative z-30 ${buttonClassName}`}
        >
          {ctaText}
        </a>
      </motion.div>
    </section>
  );
}