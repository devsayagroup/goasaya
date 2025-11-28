"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer-goa.png"
          alt="Asian dining background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Centered Content */}
      <div className="relative flex flex-col justify-center items-center h-full px-6 md:px-14 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-6xl uppercase font-style leading-tight max-w-3xl"
        >
          Coming Soon
        </motion.h1>
      </div>
    </section>
  );
}
