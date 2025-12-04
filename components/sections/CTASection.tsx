"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from '@/lib/analytics'

export default function CTASection() {
  const handleReserve = () => {
    trackEvent('special_event', {
      category: 'tracking',
      label: 'Special Event',
    })
    window.open('https://wa.me/62895428289088?text=Hi%20Goasaya,%20I%20want%20to%20have%20a%20special%20event.', '_blank', 'noopener,noreferrer')
  }
  return (
    <section className="relative mt-32 h-[500px] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/goa9.JPG" 
        alt="GOASAYA"
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
        <button
          aria-label="Special Event"
          type="button"
          onClick={handleReserve}
          className="block bg-[#FFE3AF] mx-auto text-[#3b1f17] px-4 py-2 rounded-md text-center font-semibold cursor-pointer"
        >
          Reserve Your Experience
        </button>
      </motion.div>
    </section>  
  );
}