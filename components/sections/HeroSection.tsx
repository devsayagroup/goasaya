"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const images = [
  "/images/webp/goa1.webp", 
  "/images/webp/goa2.webp",
  "/images/webp/goa4.webp",
  "/images/webp/goa5.webp",
  "/images/webp/goa6.webp",
  "/images/webp/goa7.webp",
  "/images/webp/goa8.webp",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0 mt-[-18rem] md:mt-0">
          <Marquee 
              speed={30} 
              gradient={false} 
              pauseOnHover={false} 
              className="h-full"
          >
            {images.map((src, i) => {
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
                    className="object-cover object-center" 
                    priority={isPriority}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a] pointer-events-none" />
      </div>

      <div className="relative container flex flex-col lg:flex-row mx-auto justify-between lg:items-center px-6 pt-110 lg:pt-0 md:px-14 z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-6xl uppercase font-style leading-tight max-w-3xl drop-shadow-2xl"
        >
          Asian Progressive Dining Experience
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 md:mt-0 lg:text-right max-w-lg text-white/90 drop-shadow-xl"
        >
          <p className="font-text mb-4 md:mb-8 text-sm leading-loose md:text-base">
            A short escape from modern life to an intimate man-made cave.
            A sanctuary where light, stone, and sound come together in quiet harmony.
            Here, comfort finds you and the world fades away.
          </p>
          <Link
            href="/experience"
            className="text-sm font-medium tracking-widest uppercase text-white border-b border-white/40 hover:text-[#FFE3AF] hover:border-[#FFE3AF] pb-1 transition-all duration-300"
          >
            View Experience
          </Link>
        </motion.div>
      </div>
    </section>
  );
}