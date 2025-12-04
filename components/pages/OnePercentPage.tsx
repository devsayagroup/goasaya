"use client";

// import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

export default function OnePercentPage() {

  return (
    <section className="relative flex h-screen w-full bg-black text-black px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="/images/goalt2-1.jpg" 
                alt="1% Lounge"
                fill
                className="object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative flex flex-col gap-4 md:gap-8 mx-auto justify-center items-center">
            <h1 className="text-white font-text text-2xl md:text-6xl">OPENING SOON</h1>
            <h1 className="text-white font-text text-8xl md:text-8xl">12/12</h1>
        </div>
    </section>
  );
}
