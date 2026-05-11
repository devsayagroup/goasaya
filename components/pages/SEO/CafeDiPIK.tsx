"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Premium easing curve for ultra-smooth animations
const premiumEase: [number,number,number,number] = [0.16, 1, 0.3, 1];

export default function CafeDiPikClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  // Parallax calculations
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaY = useTransform(ctaScroll, [0, 1], ["-20%", "20%"]);

  const faqs = [
    {
      question: "What makes GoaSaya the most aesthetic cafe di PIK 2?",
      answer: "Unlike standard coffee shops, GoaSaya introduces Indonesia's first luxury cave dining concept. The combination of carved stone walls, cozy lighting, and premium hospitality makes it the ultimate aesthetic cafe in Pantai Indah Kapuk 2."
    },
    {
      question: "Is GoaSaya suitable for a cozy hangout or aesthetic photos?",
      answer: "Absolutely. We designed GoaSaya to be highly photogenic and cozy. Every angle of our 1st Floor Cave and 2nd Floor Lounge provides a unique visual backdrop, making it a highly recommended PIK 2 must-visit for content and relaxation."
    },
    {
      question: "Do I need a reservation to visit this cafe di PIK?",
      answer: "Because GoaSaya is a highly sought-after destination in PIK 2, we strongly recommend booking a table in advance via our official reservation system, though walk-ins are welcomed based on availability."
    }
  ];

  return (
    <main className="bg-gradient-to-b from-[#1a0b08] via-[#230c0f] to-[#120806] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#e6d5b8] selection:text-black overflow-hidden">
      <section ref={heroRef} className="relative h-screen flex flex-col justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/rooms/main-2.jpeg" 
            alt="GoaSaya Cave Texture" 
            fill 
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#230c0f] via-transparent to-transparent"></div>
        </motion.div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: premiumEase }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-style mb-6 leading-[1.1] tracking-tighter drop-shadow-2xl">
              The Definitive <br />
              <span className="italic text-[#e6d5b8] font-light">Cafe di PIK 2</span> {/* Added the '2' */}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: premiumEase }}
            className="text-sm md:text-lg text-white/70 max-w-2xl leading-relaxed font-light md:mt-6"
          >
            A short escape from modern life into an intimate, aesthetic cave concept. 
            Discover why GoaSaya is recognized as the most cozy and unique cafe di Pantai Indah Kapuk 2.
          </motion.p>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-4 md:px-8 py-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: premiumEase }}
             className="max-w-md"
           >
              <h2 className="text-6xl md:text-7xl font-style">The Cave</h2>
           </motion.div>
           <Link href="/reservation" className="group flex items-center gap-4 border-b border-white/20 pb-2 hover:border-[#e6d5b8] transition-colors">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/70 group-hover:text-[#e6d5b8] transition-colors">Explore Gallery</span>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="md:col-span-8 relative h-[500px] md:h-[700px] overflow-hidden group rounded-sm"
          >
            <Image src="/rooms/main-2.jpeg" alt="GoaSaya Cafe di PIK Interior" fill className="object-cover transition-transform duration-[4s] group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-[#230c0f]/20 group-hover:bg-transparent transition-colors duration-1000"></div>
          </motion.div>
          
          <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
              className="relative h-[242px] md:h-[342px] overflow-hidden group rounded-sm"
            >
              <Image src="/images/webp/goa8.webp" alt="Aesthetic Cafe di PIK seating" fill className="object-cover transition-transform duration-[4s] group-hover:scale-105" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: premiumEase }}
              className="relative h-[242px] md:h-[342px] overflow-hidden group rounded-sm"
            >
              <Image src="/images/webp/goa3.webp" alt="PIK Must Visit Dining Table" fill className="object-cover transition-transform duration-[4s] group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-40 relative">
        <div className="max-w-[1300px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-4xl md:text-7xl font-style leading-[1.2] mb-6 text-white">
              Why GoaSaya is a <br/>
              <span className="text-[#e6d5b8] italic">PIK Must Visit</span>
            </h2>
            <p className="text-white/60 text-lg font-light max-w-xl mx-auto">A place where you belong. Step into a world carefully curated for those who appreciate the finer things.</p>
          </motion.div>

          <div className="flex flex-col gap-32">
            <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: premiumEase }}
                className="md:w-1/2"
              >
                <span className="text-[#e6d5b8] font-style text-3xl mb-4 block">01.</span>
                <h3 className="text-3xl md:text-5xl font-style mb-6 text-white">Aesthetic Cave Concept</h3>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">As the most unique aesthetic cafe di PIK 2, our carved stone architecture provides a breathtaking, highly photogenic backdrop that you won&apos;t find anywhere else in Jakarta.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: premiumEase }}
                className="md:w-1/2 relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm"
              >
                <Image src="/images/webp/goa2.webp" alt="Intimate Architecture" fill className="object-cover" priority />
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: premiumEase }}
                className="md:w-1/2 relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm"
              >
                <Image src="/images/webp/goa4.webp" alt="Artisanal Dining" fill className="object-cover" priority />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: premiumEase }}
                className="md:w-1/2"
              >
                <span className="text-[#e6d5b8] font-style text-3xl mb-4 block">02.</span>
                <h3 className="text-3xl md:text-5xl font-style mb-6 text-white">Cozy & Exclusive Dining</h3>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">More than just a coffee shop, GoaSaya offers a deeply cozy and private ambiance. We elevate standard cafe fare with precision-crafted culinary experiences and artisanal desserts.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-[#e6d5b8]/10">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-style">Frequently Asked</h2>
        </div>
        
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              key={index} 
              className="border-b border-[#e6d5b8]/20 cursor-pointer group"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center py-8">
                <h3 className="text-xl md:text-2xl font-style text-white/90 group-hover:text-[#e6d5b8] transition-colors duration-500">
                  {faq.question}
                </h3>
                <motion.span 
                  animate={{ rotate: openFaq === index ? 45 : 0 }}
                  transition={{ duration: 0.5, ease: premiumEase }}
                  className="text-[#e6d5b8] text-3xl font-light"
                >
                  +
                </motion.span>
              </div>
              <motion.div 
                initial={false}
                animate={{ 
                  height: openFaq === index ? "auto" : 0,
                  opacity: openFaq === index ? 1 : 0,
                  marginBottom: openFaq === index ? 32 : 0
                }}
                transition={{ duration: 0.5, ease: premiumEase }}
                className="overflow-hidden"
              >
                <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-3xl pr-12">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="relative py-40 md:py-42 flex flex-col items-center text-center overflow-hidden">
        <motion.div 
          style={{ y: ctaY }}
          className="absolute inset-0 z-0 w-full h-[150%]"
        >
          <Image 
            src="/images/goa9.JPG" 
            alt="GoaSaya Cave Experience" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0b08]/40"></div>
        </motion.div>

        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-8xl font-style leading-[1.1] mb-10 text-white drop-shadow-lg">
            Step Into <br/><span className="italic text-[#e6d5b8]">The Cave</span>
          </h2>
          
          <Link 
            href="/reservation" 
            className="group relative rounded-md inline-flex items-center justify-center overflow-hidden border border-[#e6d5b8] bg-transparent px-12 py-5 text-sm tracking-[0.3em] uppercase font-medium text-[#e6d5b8] transition-all duration-500 hover:text-black"
          >
            <span className="absolute inset-0 h-full w-full bg-[#e6d5b8] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
            <span className="relative font-style z-10">Book A Table</span>
          </Link>
        </div>
      </section>
    </main>
  );
}