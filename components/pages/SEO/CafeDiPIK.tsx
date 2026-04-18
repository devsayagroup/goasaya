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
      question: "What makes GoaSaya the best cafe di PIK?",
      answer: "Our unique man-made cave architecture provides an intimate escape from the modern world. Combined with premium hospitality, it's a deeply relaxing ambiance unlike any other cafe in PIK 2."
    },
    {
      question: "Where is the best place for a PIK must visit experience?",
      answer: "GoaSaya is located in the heart of PIK 2. We offer a safe space surrounded by stone walls and soft lights, perfect for those who appreciate the finer things."
    },
    {
      question: "Do I need a reservation?",
      answer: "While we welcome walk-ins, we highly recommend reserving your table in advance to ensure you get the best experience in our 1st Floor Cave or the exclusive 2nd Floor Lounge."
    }
  ];

  return (
    // Replaced flat maroon with a rich, dark gradient to simulate cave depth
    <main className="bg-gradient-to-b from-[#1a0b08] via-[#230c0f] to-[#120806] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#e6d5b8] selection:text-black overflow-hidden">
      
      {/* 1. HERO SECTION (Full bleed with parallax background) */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle background texture/image for the hero */}
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
              <span className="italic text-[#e6d5b8] font-light">Cafe di PIK</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: premiumEase }}
            className="text-sm md:text-lg text-white/70 max-w-2xl leading-relaxed font-light md:mt-6"
          >
            A short escape from the modern life to an intimate man-made cave. 
            Your safe space surrounded by stone walls and soft lights. 
            Discover the ultimate PIK must visit.
          </motion.p>
        </div>
      </section>

      {/* 2. A GLIMPSE INSIDE */}
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
              <Image src="/images/goa1.jpg" alt="Aesthetic Cafe di PIK seating" fill className="object-cover transition-transform duration-[4s] group-hover:scale-105" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: premiumEase }}
              className="relative h-[242px] md:h-[342px] overflow-hidden group rounded-sm"
            >
              <Image src="/images/goa2.jpg" alt="PIK Must Visit Dining Table" fill className="object-cover transition-transform duration-[4s] group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY GOASAYA PIK MUST VISIT (Editorial Asymmetrical Layout) */}
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
            {/* Feature 1 - Image Right */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: premiumEase }}
                className="md:w-1/2"
              >
                <span className="text-[#e6d5b8] font-style text-3xl mb-4 block">01.</span>
                <h3 className="text-3xl md:text-5xl font-style mb-6 text-white">Intimate Architecture</h3>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">Carved aesthetics inspired by nature, providing the ultimate visual backdrop and a deeply relaxing ambiance for your social moments.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: premiumEase }}
                className="md:w-1/2 relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm"
              >
                <Image src="/images/goa1.jpg" alt="Intimate Architecture" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Feature 2 - Image Left */}
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: premiumEase }}
                className="md:w-1/2 relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm"
              >
                <Image src="/images/goa2.jpg" alt="Artisanal Dining" fill className="object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: premiumEase }}
                className="md:w-1/2"
              >
                <span className="text-[#e6d5b8] font-style text-3xl mb-4 block">02.</span>
                <h3 className="text-3xl md:text-5xl font-style mb-6 text-white">Artisanal Dining</h3>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">Here we gather to share meals and create memories. Precision-crafted menus elevating standard cafe fare into a culinary journey.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
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

      {/* 5. PARALLAX CTA SECTION */}
      <section ref={ctaRef} className="relative py-40 md:py-42 flex flex-col items-center text-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: ctaY }}
          className="absolute inset-0 z-0 w-full h-[150%]"
        >
          <Image 
            src="/images/goa9.JPG" 
            alt="GoaSaya Cave Experience" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity"
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