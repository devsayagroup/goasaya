"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react"; 
import { trackEvent } from "@/lib/analytics";
import { EventType } from "@/lib/event-data";

export default function EventDetailView({ event }: { event: EventType }) {
  // Normalize the content property into an array for the gallery
  const galleryImages = Array.isArray(event.content) 
    ? event.content 
    : event.content ? [event.content] : [];

  const waMessage = encodeURIComponent(`Hi GoaSaya, I would like to RSVP for the ${event.title} event.`);
  const rsvpLink = `https://wa.me/6281338382845?text=${waMessage}`;

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A0F0A] relative selection:bg-[#1A0F0A] selection:text-[#FDFBF7] pb-32">
        
        {/* SUBTLE GRAIN TEXTURE */}
        <svg className="hidden md:block pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>


        <div className="container mx-auto px-6 pt-16 md:px-14">
            
            {/* 1. STANDARD HERO BANNER */}
            <section className="w-full pt-8">
                <div className="w-full h-[40vh] md:h-[55vh] relative overflow-hidden rounded-sm bg-[#EAE8E3]">
                    <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill 
                        priority 
                        unoptimized 
                        className="object-cover object-center" 
                    />
                </div>
            </section>

            {/* 2. CLEAR TITLE BLOCK */}
            <section className="w-full py-12 md:py-16 border-b border-[#1A0F0A]/10">
                <span className="block text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#1A0F0A]/50 mb-4">
                    {event.subtitle || "Curated Experience"}
                </span>
                <h1 className="text-5xl md:text-7xl font-style uppercase tracking-tight leading-[1] text-[#1A0F0A]">
                    {event.title}
                </h1>
            </section>

            {/* 3. CONTENT SPLIT (Details vs Description) */}
            <section className="w-full py-12 md:py-16">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                    
                    {/* Left Side: Information & CTA */}
                    <div className="w-full md:w-1/3 flex flex-col gap-10">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A0F0A]/40 border-b border-[#1A0F0A]/10 pb-2">Date</span>
                                <span className="text-base md:text-lg font-medium tracking-wide">{event.date}</span>
                            </div>
                            
                            {event.time && (
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A0F0A]/40 border-b border-[#1A0F0A]/10 pb-2">Time</span>
                                    <span className="text-base md:text-lg font-medium tracking-wide">{event.time}</span>
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A0F0A]/40 border-b border-[#1A0F0A]/10 pb-2">Location</span>
                                <span className="text-base md:text-lg font-medium tracking-wide">GoaSaya PIK 2</span>
                            </div>
                        </div>

                        {/* Desktop RSVP Button */}
                        <div className="hidden md:block mt-4">
                            <Link 
                                href={rsvpLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent(event.tracking || 'rsvp_event', { category: 'conversion', label: event.title })}
                                className="group flex items-center justify-between w-full px-6 py-4 bg-[#1A0F0A] text-[#FDFBF7] rounded-sm text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#FF8C00] transition-colors duration-300"
                            >
                                Secure Your Spot <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Description text */}
                    <div className="w-full md:w-2/3">
                        <div 
                            className="prose prose-lg prose-p:font-light prose-p:leading-relaxed prose-p:text-[#1A0F0A]/70 prose-b:font-medium prose-b:text-[#1A0F0A] prose-i:text-[#1A0F0A]/50 prose-i:font-serif max-w-none"
                            dangerouslySetInnerHTML={{ __html: event.desc || "" }}
                        />
                    </div>
                </div>
            </section>

            {/* 4. COMPACT, FOCUSED GALLERY */}
            {galleryImages.length > 0 && (
                <section className="w-full pt-8 pb-16">
                    <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A0F0A]/50 mb-6">Visual Preview</h3>
                    {/* Compact 3-column grid for standard monitors, 2-column for tablets */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((imgSrc, idx) => (
                            <div 
                                key={idx}
                                className="relative w-full aspect-square overflow-hidden rounded-sm bg-[#EAE8E3]"
                            >
                                <Image 
                                    src={imgSrc} 
                                    alt={`${event.title} Gallery Preview ${idx + 1}`} 
                                    fill 
                                    unoptimized
                                    className="object-cover hover:scale-105 transition-transform duration-500" 
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>

        {/* MOBILE FIXED BOTTOM CTA */}
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/95 to-transparent z-50">
            <Link 
                href={rsvpLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(event.tracking || 'rsvp_event_mobile', { category: 'conversion', label: event.title })}
                className="group flex items-center justify-center gap-4 w-full px-8 py-4 bg-[#1A0F0A] text-[#FDFBF7] rounded-sm text-xs font-medium uppercase tracking-[0.2em] shadow-xl"
            >
                Secure Your Spot <ArrowUpRight size={16} />
            </Link>
        </div>

    </main>
  );
}