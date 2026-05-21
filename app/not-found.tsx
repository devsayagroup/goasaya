// app/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/webp/goa6.webp" // Using your standard dark ambience image
          alt="GOASAYA Ambience"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Deep gradient overlay to ensure text is perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-[#120502]/90 z-10"></div>
      </div>

      {/* 2. Animated Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* Subtle 404 Number */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#FFE3AF] font-sans text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-semibold"
        >
          Error 404
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-style uppercase text-white mb-6 leading-tight drop-shadow-lg"
        >
          Lost in the <br /> Sanctuary
        </motion.h1>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[1px] w-24 bg-white/20 mb-8" 
        />

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-text text-white/70 text-sm md:text-base leading-relaxed max-w-md mb-12"
        >
          The space you are looking for does not exist or has been moved. Let us guide you back to our first home.
        </motion.p>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center font-style tracking-[0.15em] uppercase text-sm md:text-base bg-[#FFE3AF] text-black px-10 py-4 rounded-sm shadow-[0_0_30px_rgba(255,227,175,0.15)] hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Return Home
          </Link>
        </motion.div>

      </div>
    </main>
  );
}