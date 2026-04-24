
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CTASection from "../sections/CTASection";
import { campaigns } from "@/content/campaigns/index";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ExperiencePage() {
  const sortedCampaigns = [...campaigns].reverse();

  return (
    <section className="w-full bg-cream text-black overflow-hidden">
      <div className="relative pt-28 md:pt-32 pb-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 md:px-14 items-end mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            // Changed text to maroon for the signature Goasaya look
            className="text-5xl md:text-7xl font-style uppercase text-maroon max-w-2xl tracking-tight drop-shadow-sm"
          >
            Curated Experiences
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
            // Changed to black/70
            className="max-w-md text-black/70 mt-6 md:mt-0 font-text leading-relaxed"
          >
            Discover seasonal tasting menus, weekday privileges, and exclusive events crafted within the cave.
          </motion.p>
        </div>

        <div className="container mx-auto px-6 md:px-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24">
            {sortedCampaigns.map((campaign, idx) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: idx * 0.15, ease: premiumEase }}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col"
              >
                {/* Updated border and shadow for light mode */}
                <Link href={campaign.ctaLink} className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-black/5 shadow-lg block mb-6">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover brightness-95 transition-transform duration-1000"
                  />
                  {/* Subtle dark overlay to make badges pop, fading on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                  
                  {/* Updated Badges for Light Mode */}
                  {!campaign.isActive && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest text-black/60 font-semibold rounded-sm shadow-sm">
                          Archive
                      </div>
                  )}
                  {campaign.isActive && (
                      <div className="absolute top-4 right-4 bg-maroon/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-widest text-white font-semibold rounded-sm shadow-md">
                          Active Now
                      </div>
                  )}
                </Link>

                <div className="flex flex-col">
                  {/* Title changed to Maroon */}
                  <h3 className="text-3xl font-style uppercase text-maroon group-hover:text-black transition-colors duration-300">
                    {campaign.title}
                  </h3>
                  <p className="text-sm font-text text-black/70 mt-3 leading-relaxed max-w-sm">
                    {campaign.description}
                  </p>
                  {/* CTA changed to Maroon/Black interaction */}
                  <div className="mt-6 flex items-center gap-3 text-black group-hover:text-maroon transition-colors duration-300 text-sm uppercase tracking-widest font-medium">
                      <span className="group-hover:mr-2 transition-all duration-300">{campaign.ctaText}</span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
                          <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </section>
  );
}