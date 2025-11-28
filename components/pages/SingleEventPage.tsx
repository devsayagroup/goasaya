"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventType } from "@/lib/event-data";

interface EventProps {
  event: EventType;
}

export default function SingleEventPage({ event }: EventProps) {
  return (
    <section className="bg-cream min-h-screen text-black px-6 md:px-16 py-24 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-md shadow-lg mb-10">
           <Image
            src="/images/goa1.jpg"
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/85 md:bg-black/75" />
          <div className="absolute bottom-6 left-6 flex flex-col">
            <h1 className="text-3xl md:text-5xl mb-2 font-style text-white uppercase">
              {event.title}
            </h1>
            <p className="text-white font-semibold">
              {event.date}
            </p>
          </div>
         
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-left space-y-6 font-text max-w-3xl">
          {/* <p className="text-maroon font-semibold">
            {event.date} · {event.time}
          </p> */}

          {
            event.content && (
            <Image
              src={event.content}
              alt={event.title}
              width={400}
              height={400}
              className="rounded-md"
            />
            )
          }
          <div className="">
            <div
              className="prose prose-invert max-w-none text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: event.desc }}
            />

            {/* CTA */}
            <div className="pt-6 flex flex-col items-start gap-6">
              <Link
                href={{
                  pathname: "/reservation",
                  query: {
                    event: event.title,
                    date: event.date,
                    tracking: event.tracking,
                  },
                }}
                className="inline-block bg-orange rounded-md text-white px-8 py-3 hover:bg-black transition"
              >
                Reserve Your Seat
              </Link>

              <Link
                href="/events"
                className="text-maroon underline hover:text-black transition-colors"
              >
                ← Back to all events
              </Link>
            </div>
          </div>

          
        </div>
      </motion.div>
    </section>
  );
}
