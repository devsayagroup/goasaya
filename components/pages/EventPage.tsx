"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/event-data";
import CTASection from "../sections/CTASection";

const ITEMS_PER_PAGE = 6;

export default function EventsPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // --------- SORT EVENTS BY ID (LATEST FIRST) ---------
  const sortedEvents = [...EVENTS].sort((a, b) => {
    const idA = Number(a.id);
    const idB = Number(b.id);
    return idB - idA; // newest first
  });

  return (
    <section className="w-full text-white overflow-hidden">
        <div className="relative  pt-32">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/bg-goa.jpg" 
                    alt="GOASAYA Background"
                    fill
                    className="object-fit"
                    priority
                />
                <div className="absolute inset-0 bg-maroon/85" />
            </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-14 md:items-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-style leading-tight max-w-2xl"
            >
                Where Memories Take Shape
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-8 md:mt-0 md:text-right max-w-md text-gray-300"
            >
                <p className="font-text text-md mb-4 leading-loose">
                    From private celebrations to quiet reflections, GoaSaya holds space for every moment worth remembering.
                    Under the glow of soft lights, we celebrate togetherness in its purest form.
                </p>
            </motion.div>
        </div>

         <div className="container mx-auto px-6 md:px-16 py-12 md:py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24">
            {sortedEvents.slice(0, visibleCount).map((event, idx) => (
                <motion.div
                    key={event.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: idx * 0.05,
                        type: "spring",
                        stiffness: 60,
                    }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden bg-black rounded-md"
                    >
                        <div className="relative w-full h-[500px]">
                            <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-700"
                            />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        {/* <div className="absolute bottom-6 left-6 text-left">
                            <h3 className="text-2xl font-style text-white drop-shadow-md">
                                {event.title}
                            </h3>
                            <p className="text-white/70 text-sm mt-1 font-text">
                                {event.date} 
                            </p>
                        </div> */}
                    </div>

                <div className="p-6">
                    <div className="text-left mb-4">
                        <h3 className="text-2xl font-style text-white drop-shadow-md">
                            {event.title}
                        </h3>
                        <p className="text-white/70 text-sm mt-1 font-text">
                            {event.date} 
                        </p>
                    </div>
                    <p className="text-white/80 text-sm font-text line-clamp-3 mb-4">
                        {event.homedesc}
                    </p>
                    <Link
                        href={`/events/${event.slug}`}
                        className="inline-block text-white underline font-semibold text-sm tracking-wide"
                    >
                        Discover More
                    </Link>
                </div>
                </motion.div>
                ))}
                </div>

                {visibleCount < EVENTS.length && (
                    <div className="text-center mt-16">
                        <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={loadMore}
                        className="bg-maroon text-white px-10 py-4 rounded-full hover:bg-black transition-all font-semibold tracking-wide"
                        >
                        Load More Events
                        </motion.button>
                    </div>
                )}
            </div>
        <CTASection/>
        </div>
    </section>
  );
}
