"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CTASection from "../sections/CTASection";

const ITEMS_PER_PAGE = 6;

// 1. FIX: Define the exact shape of an event to remove the "any" error
export type EventItem = {
  slug: string;
  image: string;
  title: string;
  date: string;
  metaDescription: string;
};

// 2. FIX: Replace { events: any[] } with { events: EventItem[] }
export default function EventsPage({ events }: { events: EventItem[] }) {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  return (
    <section className="w-full text-white overflow-hidden">
      <div className="relative pt-32">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bg-goa.jpg"
            alt="GOASAYA Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-maroon/85" />
        </div>

        {/* HEADER */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 md:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-style max-w-2xl"
          >
            Where Memories Take Shape
          </motion.h1>

          <p className="max-w-md text-gray-300 mt-6 md:mt-0">
            From private celebrations to quiet reflections, GoaSaya holds space
            for every moment worth remembering.
          </p>
        </div>

        {/* GRID */}
        <div className="container mx-auto px-6 md:px-16 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {events.slice(0, visibleCount).map((event, idx) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group bg-black rounded-md overflow-hidden"
              >
                <div className="relative h-[420px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-style uppercase">
                    {event.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 mb-2">
                    {event.date}
                  </p>
                  <p className="text-xs font-text text-white/70 mt-1">
                    {event.metaDescription}
                  </p>
                  <Link
                    href={`/events/${event.slug}`}
                    className="inline-block mt-4 underline text-sm"
                  >
                    Discover More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < events.length && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
                className="bg-maroon text-white px-10 py-4 rounded-full"
              >
                Load More Events
              </button>
            </div>
          )}
        </div>

        <CTASection />
      </div>
    </section>
  );
}