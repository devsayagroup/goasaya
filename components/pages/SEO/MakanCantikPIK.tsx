"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import GlobalCta from "@/components/ui/GlobalCta";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function MakanCantikView() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="relative min-h-screen bg-[#131313] text-[#EEEDE5] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campaigns/goa-turns-red.webp" // Use a well-lit, highly aesthetic image here
            alt="Tempat Makan Cantik di PIK 2"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/40 via-transparent to-[#131313]" />
        </div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="relative z-10 flex flex-col items-center text-center px-6 mt-20"
        >
          <motion.span variants={fadeUp} className="text-[#FFE3AF] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 drop-shadow-md">
            Makan Cantik di PIK 2
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-style text-white mb-6 drop-shadow-2xl">
            Aesthetic Dining<br/>Elevated.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="font-text text-[#EEEDE5]/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Rasakan pengalaman bersantap di dalam mahakarya arsitektur sand cave pertama di Jakarta. Sempurna untuk momen spesial, OOTD, dan arisan.
          </motion.p>
        </motion.div>
      </section>

      {/* THREE PILLARS OF MAKAN CANTIK */}
      <section className="relative z-20 py-24 bg-[#131313]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4">
            
            {/* Pillar 1: Photo Spots */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-[#FFE3AF]/20">
                <Image 
                  src="/campaigns/iconic-entrance-goa.webp" // Use a shot showing people or interior
                  alt="Spot Foto OOTD Estetik" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style text-[#FFE3AF] mb-3">Spot Foto Estetik</h3>
              <p className="font-text text-sm text-[#EEEDE5]/70 leading-relaxed">
                Desain interior bernuansa sand cave dengan lighting memukau, menciptakan latar belakang sempurna untuk OOTD dan konten media sosial Anda.
              </p>
            </motion.div>

            {/* Pillar 2: Food */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-[#FFE3AF]/20">
                <Image 
                  src="/campaigns/goa-new-cocktails.webp" // Use a beautiful food/plating shot
                  alt="Artisan Cocktails dan Minuman Cantik" 
                  fill 
                  className="object-cover object-bottom" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style text-[#FFE3AF] mb-3">Artisan Cocktails</h3>
              <p className="font-text text-sm text-[#EEEDE5]/70 leading-relaxed">
                Lengkapi momen bersantai Anda dengan kreasi koktail dari mixologist kami. Diramu khusus untuk memanjakan lidah dan tampil memukau di setiap jepretan kamera.              </p>
            </motion.div>

            {/* Pillar 3: Vibe/Arisan */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-[#FFE3AF]/20">
                <Image 
                  src="/campaigns/makan-cantik.webp" // A shot showing a group of friends having fun
                  alt="Tempat Arisan PIK 2" 
                  fill 
                  className="object-cover object-top" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-style text-[#FFE3AF] mb-3">Arisan & Hangout</h3>
              <p className="font-text text-sm text-[#EEEDE5]/70 leading-relaxed">
                Tersedia bilik semi-private dan VIP rooms yang ideal untuk merayakan ulang tahun, arisan, atau sekadar berkumpul bersama orang terdekat.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

       <GlobalCta 
          title="Rencanakan Momen Anda"
        subtitle="Reserve Your Table"
        description="Amankan meja Anda untuk pengalaman makan cantik terbaik di PIK 2. Kami sangat menyarankan reservasi terlebih dahulu."
        ctaText="Reservasi Sekarang"
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+saya+ingin+reservasi+untuk+makan+cantik/arisan."
        bgImage="/menu/final-touch.webp"

        sectionClassName="bg-[#EEEDE5] border-[#461B13]/10" 
        overlayClassName="bg-cream/10 bg-gradient-to-b from-cream to-creamlight" 
        subtitleClassName="text-[#E47406] drop-shadow-none" 
        titleClassName="text-[#461B13] drop-shadow-none" 
        descriptionClassName="text-[#461B13]/80 drop-shadow-none" 
        buttonClassName="bg-[#461B13] text-[#EEEDE5] hover:bg-[#D44F27] hover:text-[#EEEDE5] shadow-xl" 
        />

      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+saya+ingin+reservasi+untuk+makan+cantik/arisan."
        text="Reservasi Sekarang"
      />
    </main>
  );
}