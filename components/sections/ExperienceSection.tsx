

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { campaigns } from "@/content/campaigns/index";

export default function ExperienceSection() {
  const sortedCampaigns = [...campaigns].reverse();
  const filterCampaigns = sortedCampaigns.slice(0, 3);

  return (
    <section className="container mx-auto bg-cream text-black py-32 px-8 md:px-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-24 lg:items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-maroon text-4xl md:text-6xl uppercase font-style leading-tight max-w-2xl"
        >
          Where Memories Take Shape
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 lg:mt-0 lg:text-right max-w-lg text-black"
        >
          {/* <p className="font-text text-md mb-4 leading-loose">
            From private celebrations to quiet reflections, GoaSaya holds space
            for every moment worth remembering. Under the glow of soft lights,
            we celebrate togetherness in its purest form.
          </p> */}
          <p className="font-text text-md mb-4 leading-loose">
            Every month brings a new reason to gather. Discover our rotating culinary campaigns, 
            seasonal menus, and curated specials designed to make every visit unforgettable
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {filterCampaigns.map((campaign, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: idx % 2 === 0 ? 60 : -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: idx * 0.15,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: true }}
            className={`flex flex-col items-center text-center transition-all ${
              idx % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
            }`}
          >
            <Link href={campaign.ctaLink} className="w-full group">
              <div className="relative w-full h-[420px] rounded-sm overflow-hidden">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover duration-700 brightness-90"
                />
              </div>

              <h1 className="mt-4 px-2 text-xl font-semibold font-style uppercase text-black">
                {campaign.title}
              </h1>
              <h3 className="text-sm px-2 text-black/80 mt-2 font-text line-clamp-2">
                {campaign.description}
              </h3>
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center items-center text-white text-center h-[400px] overflow-hidden group"
        >
          <Image
            src="/images/goa11.JPG"
            alt="Explore More GOASAYA Events"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover brightness-75 group-hover:brightness-100 duration-700 transition-all"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

          <Link href="/experiences" className="relative z-10 flex flex-col items-center">
            <h3 className="text-xl font-style mb-4">Explore More Experiences</h3>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}