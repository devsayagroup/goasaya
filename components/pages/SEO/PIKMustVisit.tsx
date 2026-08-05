"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PIKMustVisitClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

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
      question: "Why is GoaSaya considered a PIK must visit?",
      answer: "GoaSaya transcends standard dining by offering an immersive, man-made cave environment. As a definitive PIK 2 attraction, it combines breathtaking stone architecture with a premium culinary journey in our main dining area."
    },
    {
      question: "What can I expect from the cave dining experience?",
      answer: "Expect a sensory escape. The moment you step into the main dining floor, the outside world fades away, replaced by sculpted stone aesthetics, soft ambient lighting, and an atmosphere designed for creating memories."
    },
    {
      question: "Should I book in advance for this destination?",
      answer: "Yes. As a highly recommended destination in Pantai Indah Kapuk 2, our main cave dining experience fills up quickly. We highly advise securing your table via our reservation system before your trip to PIK 2."
    }
  ];

  return (
    <main className="bg-gradient-to-b from-[#1a0b08] via-[#230c0f] to-[#120806] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#e6d5b8] selection:text-black overflow-hidden">
      
      <section ref={heroRef} className="relative h-[100svh] flex flex-col justify-end pb-20 md:pb-32 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src="/rooms/main-2.jpeg" 
            alt="GoaSaya PIK Must Visit Destination" 
            fill 
            sizes="100vw"
            className="object-cover opacity-50 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b08] via-[#230c0f]/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 md:px-14">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            className="text-5xl md:text-8xl lg:text-8xl font-style mb-6 leading-[0.95] tracking-tighter"
          >
            The Ultimate <br />
            <span className="italic text-[#e6d5b8] font-light">Must Visit.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: premiumEase }}
            className="text-sm md:text-lg text-white/60 max-w-xl leading-relaxed font-light mt-8"
          >
            Not just a place to dine, but an architectural destination to be experienced.
            Step inside the main cave and discover the most breathtaking escape in PIK 2 — 
            minutes from Urban Farm PIK, Sunset Pier, and San Antonio Beach.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32 relative z-10 border-t border-white/[0.03]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-4 flex flex-col justify-end pb-4 lg:pb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-style leading-[1.1] mb-6 md:mb-8 text-white">
                An Immersive <br className="hidden md:block" />
                <span className="text-[#e6d5b8] italic">Sanctuary</span>
              </h2>

              <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl lg:max-w-none pr-0 lg:pr-8">
                GoaSaya transcends standard dining. As a definitive PIK 2 attraction, the sprawling 
                main dining area is enveloped entirely in textured stone walls, creating a secluded, 
                photogenic universe unlike anywhere else in Pantai Indah Kapuk 2.
                <br /><br />
                While PIK 2 is best known for its open-air attractions and waterfront promenades, 
                GoaSaya offers something different: an indoor architectural escape, designed for 
                the moments before or after a day exploring the area — a dinner reservation, a 
                celebration, or simply a place to sit inside something unlike anything else in the city.
              </p>
              
              <Link href="/reservation" className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#e6d5b8] hover:text-white transition-colors group">
                 Secure Your Visit 
                 <span className="w-8 h-[1px] bg-current transform origin-left group-hover:scale-x-150 transition-transform"></span>
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: premiumEase }}
              className="lg:col-span-5 relative h-[400px] md:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-sm group"
            >
              <Image 
                src="/images/webp/goa2.webp" 
                alt="Man-Made Cave Architecture" 
                fill 
                sizes="(max-width: 1024px) 100vw, 41vw" 
                className="object-cover transition-transform duration-[5s]" 
              />
            </motion.div>
            
            {/* Column 3: Small Image (Right) - Spans 3 cols on desktop */}
            {/* Using items-end on the grid + a smaller height creates a beautiful "step" effect */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
              className="lg:col-span-3 relative h-[300px] md:h-[450px] lg:h-[450px] w-full md:w-2/3 lg:w-full ml-auto overflow-hidden rounded-sm group"
            >
              <Image 
                src="/images/webp/goa4.webp" 
                alt="Artisanal Dining Experience" 
                fill 
                sizes="(max-width: 1024px) 100vw, 25vw" 
                className="object-cover transition-transform duration-[5s]" 
              />
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-32 ">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-style mb-8 text-white">
            Part of Your <span className="text-[#e6d5b8] italic">PIK 2 Itinerary</span>
          </h2>
          <p className="max-w-4xl  text-white/60 text-sm md:text-base font-light leading-relaxed">
            Pantai Indah Kapuk 2 has become one of Jakarta&apos;s most visited coastal 
            destinations — home to Urban Farm PIK, Sunset Pier, and the long waterfront 
            walk at San Antonio Beach. GoaSaya sits just minutes away, offering the 
            dining counterpart to a day spent exploring the area: a reservation for 
            dinner, a private celebration through our connected 1% Lounge KTV rooms, 
            or simply a striking place to end the evening.
          </p>
        </div>
      </section>

      <section className="py-32 bg-[#120806] border-y border-[#e6d5b8]/5">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          <div className="mb-20">
             <h2 className="text-4xl md:text-5xl font-style text-white">The Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: premiumEase }}
              className="md:col-span-2 relative h-[400px] md:h-[600px] overflow-hidden group rounded-sm bg-[#1a0b08] p-10 flex flex-col justify-end"
            >
              <Image src="/images/webp/goa3.webp" alt="Culinary Journey PIK 2" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-style mb-4 text-white">Culinary Artistry</h3>
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">A destination for the palate. We merge our immersive environment with artisanal gastronomy, turning every meal into a sensory event.</p>
              </div>
            </motion.div>

            <div className="md:col-span-1 flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
                className="relative h-[200px] md:h-[292px] overflow-hidden group rounded-sm bg-[#1a0b08] p-8 flex flex-col justify-end"
              >
                <Image src="/images/webp/V4.webp" alt="Exclusive Atmosphere" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <h3 className="relative z-10 text-xl font-style text-white">Exclusive Ambience</h3>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
                className="relative h-[200px] md:h-[292px] overflow-hidden group rounded-sm bg-[#1a0b08] p-8 flex flex-col justify-end"
              >
                <Image src="/images/webp/V2.webp" alt="Exclusive Atmosphere" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <h3 className="relative z-10 text-xl font-style text-white">Private & Intimate</h3>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-style">Plan Your Visit</h2>
        </div>
        
        <div className="flex flex-col border-t border-[#e6d5b8]/20">
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
              <div className="flex justify-between items-center py-6">
                <h3 className="text-lg md:text-xl font-style text-white/80 group-hover:text-[#e6d5b8] transition-colors duration-500 pr-8">
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
                animate={{ 
                  height: openFaq === index ? "auto" : 0,
                  opacity: openFaq === index ? 1 : 0,
                  marginBottom: openFaq === index ? 24 : 0
                }}
                transition={{ duration: 0.5, ease: premiumEase }}
                className="overflow-hidden"
              >
                <p className="text-white/50 font-sans text-sm leading-relaxed max-w-3xl pr-12">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="relative py-48 flex flex-col items-center text-center overflow-hidden">
        <motion.div style={{ y: ctaY }} className="absolute inset-0 z-0 w-full h-[150%]">
          <Image 
            src="/images/webp/goa6.webp" 
            alt="GoaSaya Cave Experience Booking" 
            fill 
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120806] via-transparent to-[#120806]"></div>
        </motion.div>

        <div className="relative z-10 px-6">
          <span className="text-[#e6d5b8] text-[10px] tracking-[0.4em] uppercase mb-8 block font-semibold">Your Escape Awaits</span>
          <h2 className="text-5xl md:text-8xl font-style leading-[1.1] mb-12 text-white drop-shadow-lg">
            Experience <br/><span className="italic text-[#e6d5b8]">The Cave</span>
          </h2>
          
          <Link 
            href="/reservation" 
            className="group relative rounded-sm inline-flex items-center justify-center overflow-hidden border border-[#e6d5b8] bg-transparent px-14 py-5 text-xs tracking-[0.3em] uppercase font-medium text-[#e6d5b8] transition-all duration-500 hover:text-black"
          >
            <span className="absolute inset-0 h-full w-full bg-[#e6d5b8] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
            <span className="relative z-10">Secure Your Table</span>
          </Link>
        </div>
      </section>

    </main>
  );
}