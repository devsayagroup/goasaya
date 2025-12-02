"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/event-data";

export default function EventsSection() {
  const sortedEvents = [...EVENTS].sort((a, b) => {
    const idA = Number(a.id);
    const idB = Number(b.id);
    return idB - idA; 
  });

  const latestEvents = sortedEvents.slice(0, 3);

  return (
    <section className="container mx-auto bg-cream text-black py-24 px-8 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-24 md:items-center">
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
          className="mt-8 md:mt-0 md:text-right max-w-lg text-black"
        >
          <p className="font-text text-md mb-4 leading-loose">
            From private celebrations to quiet reflections, GoaSaya holds space
            for every moment worth remembering. Under the glow of soft lights,
            we celebrate togetherness in its purest form.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {latestEvents.map((event, idx) => (
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
            <Link href={`/events/${event.slug}`} className="w-full group">
              <div className="relative w-full h-[420px] rounded-sm overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover duration-700 brightness-90"
                />
              </div>

              <h1 className="mt-6 text-xl font-semibold font-style uppercase">
                {event.title}
              </h1>
              <h3 className="text-lg font-text">{event.subtitle}</h3>
              <p className="text-black/80 text-sm mt-1 font-text">
                {event.date}
              </p>
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
            className="object-cover brightness-75 group-hover:brightness-100 duration-700 transition-all"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

          <Link href="/events" className="relative z-10 flex flex-col items-center">
            <h3 className="text-xl font-style mb-4">Explore More Events</h3>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
