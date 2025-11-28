"use client";

// import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";

export default function OnePercentPage() {

  return (
    <section className="relative h-screen w-full bg-black text-black py-34 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="/images/goalt2-1.jpg" 
                alt="1% Lounge"
                fill
                className="object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative flex mx-auto justify-center items-center mb-12 md:mb-32 ">
            <h1 className="text-white font-text text-2xl md:text-6xl">WELCOME TO 1% LOUNGE</h1>
        </div>
    </section>
  );
}
