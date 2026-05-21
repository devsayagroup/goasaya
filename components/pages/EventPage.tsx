"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; 
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { EventType } from "@/lib/event-data";

export default function PublicEventsView({ events }: { events: EventType[] }) {
  const sortedEvents = [...events].reverse();
  const [activeImage, setActiveImage] = useState<string>(sortedEvents[0]?.image || "");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A0F0A] relative flex flex-col justify-between selection:bg-[#1A0F0A] selection:text-[#F5F4F0]">
        
        {/* SUBTLE TEXTURE */}
        <svg className="hidden md:block pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* 1. INTRO / HEADER HERO WITH BACKGROUND IMAGE */}
        <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-14 border-b border-[#1A0F0A]/10 z-20 overflow-hidden">
            
            {/* Background Image & Gradient Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image 
                    src="/images/webp/goa6.webp" // Make sure to use a beautiful, wide architectural shot here
                    alt="GoaSaya Curated Events and Happenings"
                    fill 
                    unoptimized 
                    priority 
                    sizes="100vw"
                    className="object-cover object-center opacity-100" 
                />
                {/* This gradient ensures the bottom of the image melts perfectly into the page below it */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-maroon/80 to-maroon/60" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-style uppercase text-white tracking-tight leading-[0.9]">
                        Happenings <br /> <span className="italic text-white/80">At The Cave.</span>
                    </h1>
                </div>
                <p className="text-sm md:text-base max-w-xs text-left md:text-right font-light leading-relaxed text-white/60 italic">
                    A limited calendar of seasonal tasting structures, collaborations, and atmospheric gatherings.
                </p>
            </div>
        </section>

        {/* 2. THE RESPONSIVE DISPLAY CANVAS */}
        <section className="w-full flex-grow flex flex-col lg:flex-row px-6 md:px-14 py-12 lg:py-32 gap-12 lg:gap-24 relative z-10">
            
            {/* DESKTOP MODE: FIXED IMAGE PERSISTENCE FRAME (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:block lg:w-5/12 h-[65vh] lg:sticky lg:top-32 relative overflow-hidden rounded-sm bg-[#EAE8E3]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image 
                            src={activeImage} 
                            alt="GoaSaya Curated Experience Artwork" 
                            fill 
                            unoptimized 
                            priority
                            className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 border border-[#1A0F0A]/5 m-4 pointer-events-none" />
            </div>

            {/* THE LIST ENGINE: Seamless Desktop Hover vs Natural Mobile Stacking */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <div className="flex flex-col w-full">
                    {sortedEvents.map((event, index) => (
                        <Link 
                            href={`/events/${event.slug}`}
                            key={event.id}
                            onMouseEnter={() => {
                                setActiveImage(event.image);
                                setActiveIndex(index);
                            }}
                            onClick={() => trackEvent(event.tracking || 'view_event', { category: 'engagement', label: event.title })}
                            className="group w-full py-8 lg:py-12 border-b border-[#1A0F0A]/10 flex flex-col justify-between gap-6 relative"
                        >
                            {/* MOBILE & TABLET IMAGE DISPLAY: Inline, non-hover layout */}
                            <div className="block lg:hidden w-full aspect-[16/10] sm:aspect-video relative overflow-hidden rounded-sm border border-[#1A0F0A]/5">
                                <Image 
                                    src={event.image} 
                                    alt={event.title} 
                                    fill 
                                    unoptimized 
                                    className="object-cover object-center" 
                                />
                            </div>

                            {/* TEXT ENGINE BLOCK */}
                            <div className="flex flex-row items-baseline justify-between w-full">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-[#1A0F0A]/40 lg:group-hover:text-[#1A0F0A] transition-colors">
                                        {event.date}
                                    </span>
                                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-style uppercase tracking-tight text-[#1A0F0A]/80 lg:group-hover:text-[#1A0F0A] lg:group-hover:translate-x-2 transition-all duration-500 ease-[0.16,1,0.3,1]">
                                        {event.title}
                                    </h2>
                                </div>

                                {/* Link Indicator Arrow */}
                                <div className="lg:opacity-0 lg:group-hover:opacity-100 transform lg:translate-y-2 lg:group-hover:translate-y-0 transition-all duration-500 ease-[0.16,1,0.3,1] shrink-0 ml-4">
                                    <ArrowUpRight size={24} strokeWidth={1.5} className="text-[#1A0F0A]" />
                                </div>
                            </div>

                            {/* Desktop Line Highlight Effect */}
                            <div className="hidden lg:block absolute bottom-0 left-0 h-[1px] bg-[#1A0F0A] w-0 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    </main>
  );
}