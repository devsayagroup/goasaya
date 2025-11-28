"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
    return (
      <section className="relative mt-32 h-[500px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/goaexp.jpg" 
          alt="GOASAYA Evening"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/75" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 px-6 md:px-16 max-w-3xl"
        >
          <h2 className="text-3xl md:text-6xl font-style text-white mb-6 leading-tight">
            Crafting Evenings <br /> of Fire, Sound & Stone
          </h2>
          <p className="text-white/80 font-text mb-8">
            A world where gastronomy and art collide. Let the night unfold with
            curated feasts, live sound, and rituals beneath the GOASAYA stars.
          </p>
          <Link
            href="/reservation"
            className="inline-block bg-orangecream rounded-md text-white px-10 py-4"
          >
            Reserve Your Experience
          </Link>
        </motion.div>
      </section>  
    );
}