"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function RestoranPik2Client() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const containerRef = useRef(null);

  // Advanced Parallax for Floating Hero Images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const faqs = [
    {
      question: "Why is GoaSaya considered a top restoran in PIK 2?",
      answer: "GoaSaya stands alone by merging world-class artisanal gastronomy with a breathtaking, man-made cave environment. It is not just a meal; it is the most immersive culinary journey in Pantai Indah Kapuk 2."
    },
    {
      question: "Are you located near the Entertainment District?",
      answer: "Yes, GoaSaya is strategically located right within the Entertainment District of PIK 2, making it the perfect premium dining destination before or after exploring the area's main attractions."
    },
    {
      question: "Do I need to reserve a table in advance?",
      answer: "Yes. Due to high demand for premium dining spots in PIK 2, we strongly advise securing your table via our reservation system to guarantee your place inside the main cave."
    }
  ];

  return (
    <main ref={containerRef} className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#e6d5b8] selection:text-black overflow-hidden">
      
      <section className="relative h-[100svh] flex items-center justify-center px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[#1a0b08] to-[#0a0a0a]">
        <motion.div 
          style={{ y: yImage1 }}
          className="absolute top-[10%] -left-[10%] md:left-[5%] w-[60vw] md:w-[30vw] h-[40vh] md:h-[50vh] opacity-30 md:opacity-50 blur-[2px] md:blur-none"
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden transform -rotate-3">
             <Image src="/images/webp/goa4.webp" alt="Fine Dining PIK 2" fill sizes="50vw" className="object-cover" priority />
          </div>
        </motion.div>
        <motion.div 
          style={{ y: yImage2 }}
          className="absolute bottom-[5%] -right-[10%] md:right-[5%] w-[70vw] md:w-[35vw] h-[35vh] md:h-[60vh] opacity-20 md:opacity-40"
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden transform rotate-2">
             <Image src="/rooms/main-2.jpeg" alt="Cave Interior" fill sizes="50vw" className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div 
          style={{ y: yText }}
          className="relative z-10 flex flex-col items-center text-center mt-12 md:mt-0"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="text-[#e6d5b8] text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold mb-6 block"
          >
            Entertainment District, PIK 2
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: premiumEase }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-style leading-[1] tracking-tighter mix-blend-difference"
          >
            The Premier <br />
            <span className="italic text-[#e6d5b8] font-light">Restoran</span>
          </motion.h1>
        </motion.div>
      </section>

      <section className="py-24 md:py-40 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: premiumEase }}
              className="w-full lg:w-1/2 lg:pr-16"
            >
              <h2 className="text-4xl md:text-6xl font-style leading-[1.1] mb-8 text-white">
                An Iconic <br className="hidden md:block" />
                <span className="text-[#e6d5b8] italic">Destination</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-10">
                Standing as the crown jewel restoran in PIK 2. Located strategically within the Entertainment District, GoaSaya replaces the bustling outside world with a deeply relaxing, premium dining atmosphere surrounded by carved stone.
              </p>
            </motion.div>

            <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: premiumEase }}
                 className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden rounded-sm z-0"
               >
                 <Image src="/images/webp/goa2.webp" alt="Restoran Mewah di PIK 2" fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover" />
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2, delay: 0.3, ease: premiumEase }}
                 className="absolute bottom-0 left-0 w-[55%] h-[55%] overflow-hidden rounded-sm z-10 border-4 border-[#0a0a0a]"
               >
                 <Image src="/images/webp/goa8.webp" alt="Cave Interior PIK 2" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#120806]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20 md:mb-32">
             <h2 className="text-4xl md:text-6xl font-style text-white">Artisanal Gastronomy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto md:h-[650px]">
            {[
              { img: "/images/webp/goa3.webp", title: "The Craft", text: "Precision-crafted mains elevating standard fare into a journey." },
              { img: "/rooms/glass.jpeg", title: "The Ambience", text: "Intimate stone walls providing the ultimate visual dining backdrop." },
              { img: "/images/webp/goa4.webp", title: "The Experience", text: "Premium hospitality tailored for the Entertainment District." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: premiumEase }}
                className="relative h-[400px] md:h-full overflow-hidden group rounded-sm"
              >
                <Image src={pillar.img} alt={pillar.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-2xl md:text-3xl font-style text-white mb-3">{pillar.title}</h3>
                  <p className="text-white/60 font-light text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SIDE-BY-SIDE FAQ */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
             <h2 className="text-3xl md:text-5xl font-style text-white mb-6">Dining <br className="hidden lg:block"/> Inquiries</h2>
             <p className="text-white/50 text-sm md:text-base">Everything you need to know before visiting our restoran in PIK 2.</p>
          </div>
          
          <div className="lg:col-span-8 flex flex-col border-t border-[#e6d5b8]/20">
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
                  <h3 className="text-lg md:text-xl font-style text-white/90 group-hover:text-[#e6d5b8] transition-colors duration-500 pr-8">
                    {faq.question}
                  </h3>
                  <motion.span 
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: premiumEase }}
                    className="text-[#e6d5b8] text-2xl font-light shrink-0"
                  >
                    +
                  </motion.span>
                </div>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0, marginBottom: openFaq === index ? 32 : 0 }}
                  transition={{ duration: 0.5, ease: premiumEase }}
                  className="overflow-hidden"
                >
                  <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-2xl pr-8">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CINEMATIC LINE-DRAW CTA */}
      <section className="py-40 relative flex justify-center items-center overflow-hidden border-t border-[#e6d5b8]/10">
         <Image src="/rooms/main.jpeg" alt="Reserve GoaSaya" fill sizes="100vw" className="object-cover opacity-20" />
         
         <div className="relative z-10 text-center px-6">
            <h2 className="text-5xl md:text-8xl font-style text-white mb-12">
               Take Your <span className="italic text-[#e6d5b8]">Seat</span>
            </h2>
            
            <Link href="/reservation" className="relative inline-flex items-center justify-center px-16 py-6 group">
               {/* Animated Borders */}
               <span className="absolute w-0 h-[1px] bg-[#e6d5b8] top-0 left-0 transition-all duration-500 group-hover:w-full"></span>
               <span className="absolute w-0 h-[1px] bg-[#e6d5b8] bottom-0 right-0 transition-all duration-500 group-hover:w-full"></span>
               <span className="absolute w-[1px] h-0 bg-[#e6d5b8] bottom-0 left-0 transition-all duration-500 group-hover:h-full"></span>
               <span className="absolute w-[1px] h-0 bg-[#e6d5b8] top-0 right-0 transition-all duration-500 group-hover:h-full"></span>
               
               <span className="text-xs tracking-[0.4em] uppercase text-[#e6d5b8] font-semibold">Reserve Table</span>
            </Link>
         </div>
      </section>

    </main>
  );
}