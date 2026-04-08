"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/webp/goa1.webp", 
  "/images/webp/goa2.webp",
  "/images/webp/goa3.webp",
  "/images/webp/goa4.webp",
  "/images/webp/goa5.webp",
  "/images/webp/goa6.webp",
  "/images/webp/goa7.webp",
  "/images/webp/goa8.webp",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          animation: custom-marquee 35s linear infinite;
        }
      `}} />

      <div className="absolute inset-0 overflow-hidden opacity-85">
        <div
          className="flex flex-nowrap will-change-transform animate-custom-marquee"
          style={{ width: "200%" }}
        >
          {[...images, ...images].map((src, i) => {
            // ✅ FIX: Prioritize the first TWO images because goa2 (i=1) peeks into the 80vw viewport
            const isPriority = i < 2; 

            return (
              <div
                key={i}
                className="relative flex-shrink-0 w-[80vw] md:w-[40vw] h-[50vh] md:h-screen"
              >
                <Image
                  src={src}
                  alt={`Goasaya ambience ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  quality={60} 
                  className="object-cover object-center bg-[#0a0a0a]" 
                  priority={isPriority}
                  // Let Next.js handle the exact loading attribute automatically based on priority
                />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-black/40 to-[#0a0a0a]/90 pointer-events-none" />
      </div>

      <div className="relative container flex flex-col lg:flex-row mx-auto justify-between lg:items-center px-6 pt-96 lg:pt-0 md:px-14 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-6xl uppercase font-style leading-tight max-w-3xl"
        >
          Asian Progressive Dining Experience
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 md:mt-0 lg:text-right max-w-lg text-white/90"
        >
          <p className="font-text mb-8 text-sm leading-loose md:text-base">
            A short escape from modern life to an intimate man-made cave.
            A sanctuary where light, stone, and sound come together in quiet harmony.
            Here, comfort finds you and the world fades away.
          </p>
          <Link
            href="/experience"
            className="text-sm font-medium tracking-widest uppercase text-white border-b border-white/40 hover:border-white pb-1 transition-all duration-300"
          >
            View Experience
          </Link>
        </motion.div>
      </div>
    </section>
  );
}