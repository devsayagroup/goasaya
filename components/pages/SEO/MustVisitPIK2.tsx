"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const eliteEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const itinerary = [
  {
    id: "ayce",
    time: "11:00 AM",
    title: "All You Can Eat Lunch in PIK 2",
    description: "Escape the midday heat. Recognized as the top promo AYCE di PIK 2, experience an exclusive daytime retreat featuring up to 22 Asian Progressive signature dishes, served directly inside the cooling ambiance of our aesthetic sand cave.",
    link: "/all-you-can-eat",
    linkText: "Explore AYCE Promo",
    image: "/seo/ayce.webp", 
  },
  {
    id: "dining",
    time: "18:00 PM",
    title: "Immersive Cave Dining & Aesthetics",
    description: "As the sun sets, GoaSaya transforms into the ultimate tempat makan cantik di PIK 2. Dine inside our architectural masterpiece—The Cave and The Hole—offering dramatic lighting, natural stone textures, and a flawless backdrop for romantic dinners.",
    link: "/facilities",
    linkText: "View The Architecture",
    image: "/seo/vip-dining-the-hole.webp", 
  },
  {
    id: "vip",
    time: "19:00 PM",
    title: "Exclusive Private Rooms & VIP Lounge",
    description: "For elite gatherings, birthdays, and arisan. Hidden above the main dining floor lies The 1% Lounge. It is the definitive answer for those seeking a private room in PIK 2, featuring 5 bespoke chambers equipped with integrated KTV and dedicated service.",
    link: "/one-percent-lounge",
    linkText: "Reserve a VIP Room",
    image: "/rooms/onepercent/Pi-11.webp", 
  },
  {
    id: "nightlife",
    time: "20:00 PM",
    title: "After Eight: The Premier Nightlife Bar",
    description: "The definitive late-night hangout spot. At 8 PM, the ambient lighting turns red as we launch After Eight. Featuring artisan mixology, live DJ sets, and bottle service, it is the most exclusive speakeasy bar di PIK 2.",
    link: "/after-eight",
    linkText: "Enter After Eight",
    image: "/seo/bar-merah.webp", 
  }
];

export default function MustVisitClient() {
  const containerRef = useRef(null);
  
  return (
    <main ref={containerRef} className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#FFE3AF] selection:text-black">
      
      {/* 1. HERO SECTION (EDITORIAL COVER) */}
      <section className="relative h-[100svh] w-full flex flex-col justify-end p-6 md:p-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/rooms/main-2.jpeg" 
            alt="The Definitive Must Visit Place in PIK 2" 
            fill 
            sizes="100vw"
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          {/* Subtle vignette for editorial feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: eliteEase }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-style leading-[0.9] tracking-tighter text-white"
            >
              The Definitive <br />
              <span className="italic text-[#FFE3AF] font-light">Must Visit Place</span> <br />
              in PIK 2.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: eliteEase }}
            className="max-w-sm"
          >
            <p className="text-sm text-white/70 font-light leading-relaxed border-l border-[#FFE3AF]/30 pl-4">
              More than a restaurant. GoaSaya is an architectural journey. 
              From daytime AYCE escapes to exclusive VIP rooms and late-night mixology. 
              Discover your ultimate itinerary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EDITORIAL MANIFESTO (AEO & SEO HEAVY) */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-14 max-w-5xl text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: eliteEase }}
            className="text-[#FFE3AF] text-[10px] tracking-[0.4em] uppercase mb-8 block font-semibold"
          >
            Curated Experiences
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: eliteEase }}
            className="text-3xl md:text-5xl font-style leading-tight mb-8"
          >
            A Day-to-Night Destination <br/> for the <span className="italic text-[#FFE3AF]">Culinary Elite.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: eliteEase }}
            className="text-white/60 text-sm md:text-base leading-loose font-light max-w-3xl mx-auto"
          >
            When tourists and locals ask where to eat in PIK 2, GoaSaya stands apart as a masterclass in aesthetic design and Asian Progressive cuisine. We have engineered a multi-sensory environment—whether you are capturing the perfect OOTD, hosting an intimate corporate dinner in a private room, or seeking a vibrant late-night hangout spot.
          </motion.p>
        </div>
      </section>

      {/* 3. STICKY ASYMMETRIC ITINERARY GRID */}
      <section className="relative w-full">
        <div className="container mx-auto px-6 md:px-14">
          
          {itinerary.map((item, index) => (
            <div key={item.id} className="relative flex flex-col lg:flex-row border-b border-white/10 py-16 md:py-32 group">
              
              {/* Left Side: Sticky Editorial Chapter */}
              <div className="w-full lg:w-1/3 lg:pr-12 mb-12 lg:mb-0 relative">
                <div className="lg:sticky lg:top-40">
                  <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4 block">
                    Chapter 0{index + 1} &mdash; {item.time}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-style leading-[1.1] mb-6 text-white group-hover:text-[#FFE3AF] transition-colors duration-700">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                  <Link 
                    href={item.link} 
                    className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#FFE3AF] hover:text-white transition-colors group/link"
                  >
                    <span className="font-semibold">{item.linkText}</span>
                    <span className="w-8 h-[1px] bg-[#FFE3AF] group-hover/link:bg-white group-hover/link:w-12 transition-all duration-300"></span>
                  </Link>
                </div>
              </div>

              {/* Right Side: Image with Parallax Reveal */}
              <div className="w-full lg:w-2/3">
                <motion.div 
                  initial={{ opacity: 0, clipPath: "inset(20% 0 0 0)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: eliteEase }}
                  className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden rounded-sm"
                >
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 66vw" 
                    className="object-cover transition-transform duration-[10s] group-hover:scale-110" 
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,10,10,0.8)] pointer-events-none"></div>
                </motion.div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 4. THE HUB DIRECTORY (MINIMALIST FOOTER-STYLE MENU) */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="text-3xl md:text-5xl font-style text-white mb-6 md:mb-0">
              Begin Your <span className="italic text-[#FFE3AF]">Experience.</span>
            </h2>
            <p className="text-[10px] text-white/50 tracking-[0.3em] uppercase max-w-xs md:text-right">
              Reservations are highly recommended to secure your preferred aesthetic space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Book a Table", url: "/reservation", desc: "Main Dining & Cave" },
              { label: "VIP Rooms", url: "/vip-dining", desc: "Private Arisan & Events" },
              { label: "Lunch Promo", url: "/all-you-can-eat", desc: "AYCE Experience" },
              { label: "Nightlife", url: "/after-eight", desc: "Bar & Speakeasy" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="group block p-6 border border-white/5 hover:border-[#FFE3AF]/30 bg-[#0a0a0a] transition-all duration-500">
                <span className="text-[#FFE3AF] text-xl font-style block mb-2">{link.label}</span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}