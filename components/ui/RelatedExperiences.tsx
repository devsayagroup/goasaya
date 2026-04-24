"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { campaigns } from "@/content/campaigns/index"; 

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function RelatedExperiences({ currentCampaignId }: { currentCampaignId: string }) {
  const sortedCampaigns = [...campaigns].reverse();
  const otherCampaigns = sortedCampaigns
    .filter((campaign) => campaign.id !== currentCampaignId)
    .slice(0, 3);

  if (otherCampaigns.length === 0) return null;

  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-14 border-t border-[#3d1808]/10 bg-[#F5EFE6] overflow-hidden z-20">
      
      {/* Ambient Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFFDF9] via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EAE0D5]/50 pointer-events-none" />

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-style uppercase text-maroon tracking-tight drop-shadow-sm">
            Continue Exploring
          </h2>
          <Link 
            href="/campaigns" 
            className="hidden md:inline-block text-sm uppercase tracking-widest text-[#3d1808]/60 hover:text-maroon transition-colors border-b border-[#3d1808]/20 hover:border-maroon pb-1"
          >
            View All Experiences
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-10">
          {otherCampaigns.map((campaign, idx) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.15, ease: premiumEase }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link 
                href={campaign.ctaLink} 
                className="group flex items-center gap-5 p-3 -ml-3 rounded-lg hover:bg-[#EAE0D5]/40 transition-colors duration-500 border border-transparent hover:border-[#3d1808]/5"
              >
                <div className="relative w-24 h-[120px] sm:w-28 sm:h-[140px] flex-shrink-0 rounded-sm overflow-hidden shadow-lg shadow-maroon/10">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    sizes="120px"
                    className="object-cover brightness-95 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3d1808]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                <div className="flex flex-col justify-center">
                  {!campaign.isActive ? (
                      <span className="text-[9px] uppercase tracking-widest text-maroon/60 font-semibold mb-2 block">
                          Archive
                      </span>
                  ) : (
                      <span className="text-[9px] uppercase tracking-widest text-maroon font-bold mb-2 block">
                          Active Now
                      </span>
                  )}
                  
                  <h3 className="text-xl sm:text-2xl font-style uppercase text-maroon group-hover:text-[#3d1808] transition-colors duration-300 leading-snug">
                    {campaign.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-medium text-[#3d1808]/60 group-hover:text-maroon transition-colors duration-300">
                    Discover
                    <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
            <Link 
                href="/experiences" 
                className="inline-block text-xs uppercase tracking-widest text-[#3d1808]/60 hover:text-maroon transition-colors border-b border-[#3d1808]/20 hover:border-maroon pb-1"
            >
                View All Experiences
            </Link>
        </div>
      </div>
    </section>
  );
}