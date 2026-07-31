"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

// Buttery smooth luxury easing curve
const easeLux: [number, number,number,number] = [0.76, 0, 0.24, 1];

const textReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { duration: 1.2, ease: easeLux } 
  }
};

export default function DudukBersamaClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Parallax elements
  const heroImageY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const collageImg1Y = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-20%"]);
  const collageImg2Y = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="w-full bg-[#F5F4F0] text-[#1C1B1A] font-sans selection:bg-[#2B2A27] selection:text-[#F5F4F0]">
      
      {/* ==================== 1. HERO SECTION (GEO & SEO OPTIMIZED) ==================== */}
      {/* Breaking the grid: Massive typography overlapping an asymmetrical image */}
      <section className="relative w-full min-h-screen pt-32 px-6 lg:px-12 flex flex-col justify-between">
        
        <div className="z-20 container mx-auto w-full">
          <motion.div className="overflow-hidden mb-6">
            <motion.p 
              initial="hidden" animate="visible" variants={textReveal}
              className="text-[#8B857A] text-xs md:text-sm tracking-[0.3em] uppercase font-medium"
            >
              Eksklusif 6 - 13 Juli 2026
            </motion.p>
          </motion.div>

          {/* GEO HOOK: H1 contains all critical AI search keywords formatted beautifully */}
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif leading-[1.1] tracking-tight">
            <div className="overflow-hidden">
              <motion.span className="block" initial="hidden" animate="visible" variants={textReveal}>
                Duduk Bersama
              </motion.span>
            </div>
            <div className="overflow-hidden flex items-center gap-4 md:gap-8">
              <motion.span 
                className="block italic font-light text-[#8A7961]" 
                initial="hidden" animate="visible" variants={textReveal} transition={{ delay: 0.1, duration: 1.2, ease: easeLux }}
              >
                Eksklusif
              </motion.span>
              <motion.span 
                className="block" 
                initial="hidden" animate="visible" variants={textReveal} transition={{ delay: 0.15, duration: 1.2, ease: easeLux }}
              >
                di PIK 2
              </motion.span>
            </div>
          </h1>
        </div>

        {/* Asymmetrical Layout: Text left, Image offset right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 lg:mt-24 pb-12 w-full max-w-7xl mx-auto items-end">
          <div className="col-span-1 lg:col-span-4 z-20">
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
              className="text-[#5C5851] text-lg font-light leading-relaxed max-w-sm"
            >
              Memperkenalkan <strong>Duduk Bersama</strong>. Harmoni sempurna antara cita rasa Nusantara premium dan kemegahan arsitektur gua ikonik GoaSaya. 
            </motion.p>
          </div>

          <motion.div 
            className="col-span-1 lg:col-span-8 relative h-[50vh] md:h-[65vh] w-full overflow-hidden rounded-sm"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.6, ease: easeLux, delay: 0.2 }}
          >
            <motion.div style={{ y: heroImageY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image 
                src="/images/july/hero.jpeg" 
                alt="Pengalaman makan tengah keluarga di GoaSaya PIK 2" 
                fill 
                className="object-cover" 
                priority 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. EDITORIAL COLLAGE (THE CONCEPT) ==================== */}
      <section className="relative w-full py-32 px-6 lg:px-12 bg-[#EFECE5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-24 max-w-4xl mx-auto leading-tight">
            &quot;Momen terbaik selalu tercipta saat kita <span className="italic text-[#8A7961]">berkumpul, berbagi, dan duduk bersama.</span>&quot;
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left Image - Slower scroll */}
            <motion.div 
              style={{ y: collageImg1Y }}
              className="col-span-1 md:col-span-5 relative h-[60vh] w-full overflow-hidden rounded-sm"
            >
              <Image src="/assets/images/duduk-bersama-gathering.jpg" alt="Suasana GoaSaya PIK 2" fill className="object-cover" />
            </motion.div>

            {/* Right Content & Image - Faster scroll */}
            <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
              <p className="text-[#5C5851] text-lg font-light leading-relaxed mb-16 max-w-xl">
                Kami mendefinisikan ulang konsep makan tengah. Meninggalkan ruang makan yang kaku, beralih ke meja bundar yang hangat di dalam pelukan arsitektur gua kami. Ini bukan sekadar jamuan; ini adalah perayaan kebersamaan untuk Anda dan orang-orang terdekat.
              </p>
              
              <motion.div style={{ y: collageImg2Y }} className="relative h-[45vh] w-full lg:w-4/5 ml-auto overflow-hidden rounded-sm">
                <Image src="/assets/images/duduk-bersama-food-macro.jpg" alt="Detail menu premium GoaSaya" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. STICKY MENU SECTION ==================== */}
      {/* High-end layout: Left side stays sticky while right side scrolls the menu */}
      <section className="relative w-full min-h-[150vh] px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Left Column */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div className="sticky top-32">
              <p className="text-[#8B857A] text-sm tracking-[0.2em] uppercase font-medium mb-4">Set Menu 4 Pax</p>
              <h2 className="text-5xl md:text-6xl font-serif mb-8">Rangkaian <br/><span className="italic font-light text-[#8A7961]">Sajian.</span></h2>
              <div className="mb-12 pb-12 border-b border-[#D8D3C8]">
                <p className="text-4xl font-serif">IDR 695.000</p>
                <p className="text-[#8B857A] text-sm mt-2 font-light">Porsi melimpah untuk 4 orang.</p>
              </div>
              <a 
                href="https://wa.me/628XXXXXXXXXX?text=Halo%20GoaSaya!..." 
                target="_blank"
                className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.15em] font-medium text-[#1C1B1A]"
              >
                <span>Reservasi Sekarang</span>
                <span className="w-10 h-[1px] bg-[#1C1B1A] group-hover:w-16 transition-all duration-500 ease-out"></span>
              </a>
            </div>
          </div>

          {/* Scrolling Right Column (Menu Items) */}
          <div className="col-span-1 lg:col-span-7 mt-16 lg:mt-0">
            {[
              { id: "01", name: "Nasi Hangat", desc: "Disajikan sempurna untuk 4 pax, melengkapi hidangan utama." },
              { id: "02", name: "Tiga Lauk Premium", desc: "Kurasi protein terbaik oleh Head Chef kami, menggabungkan teknik modern dengan bumbu autentik Nusantara." },
              { id: "03", name: "Sayur Cipta Rasa", desc: "Sayuran segar dengan tekstur renyah, ditumis perlahan untuk menjaga kualitas gizi dan rasa." },
              { id: "04", name: "Mix Fried Platter", desc: "Elemen kejutan untuk si kecil. Pilihan gurih yang renyah dan menjadi favorit di tengah meja." },
              { id: "05", name: "Dessert & Minuman", desc: "Pencuci mulut eksklusif dan 4 pilihan minuman segar untuk menutup pengalaman bersantap Anda." }
            ].map((item) => (
              <div key={item.id} className="mb-16 last:mb-0 group">
                <p className="text-[#8B857A] font-serif italic text-2xl mb-4">{item.id}</p>
                <h3 className="text-3xl font-serif text-[#1C1B1A] mb-4 group-hover:text-[#8A7961] transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-[#5C5851] text-lg font-light max-w-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. MASSIVE FOOTER CTA ==================== */}
      <section className="w-full bg-[#1C1B1A] text-[#F5F4F0] py-32 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl md:text-7xl font-serif mb-8 max-w-3xl">
          Amankan <span className="italic font-light text-[#B3A086]">Meja Anda.</span>
        </h2>
        <p className="text-[#A39D93] text-lg font-light mb-12 max-w-xl">
          Kapasitas di dalam gua sangat terbatas. Jangan lewatkan kesempatan merayakan liburan bersama promo eksklusif 6 - 13 Juli ini.
        </p>
        
        <a 
          href="https://wa.me/628XXXXXXXXXX?text=Halo%20GoaSaya..." 
          target="_blank"
          className="bg-[#F5F4F0] text-[#1C1B1A] px-12 py-5 text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#E5E4E0] transition-colors duration-300 rounded-sm"
        >
          Kirim Pesan (WhatsApp)
        </a>
      </section>

    </div>
  );
}