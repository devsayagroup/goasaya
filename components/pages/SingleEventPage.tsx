"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EventType } from "@/lib/event-data";
import ModalGallery from "@/components/ui/ModalGallery";

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
          <div className="absolute bottom-6 left-4 md:left-8 flex flex-col">
            <h1 className="text-2xl md:text-5xl mb-2 font-style text-white uppercase">
              {event.title}
            </h1>
            <p className="text-white font-semibold">
              {event.date}
            </p>
          </div>
         
        </div>

        {/* <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-left space-y-6 font-text max-w-5xl">
          {event.content && (
            <div className="flex-shrink-0 shrink-0">
              <Image
                src={event.content}
                alt={event.title}
                width={500}
                height={500}
                className="rounded-md object-cover w-[500px] h-auto md:w-[420px] lg:w-[480px]"
              />
            </div>
          )}
          <div className="">
            <div
              className="prose prose-invert max-w-2xl text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: event.desc }}
            />

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
        </div> */}

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-left font-text max-w-5xl">

          {/* IMAGE GALLERY */}
          {event.content && (
            <div className="flex flex-col gap-4 flex-shrink-0">

              {/* If content is an array → render multiple images */}
              {Array.isArray(event.content) ? (
                <ModalGallery content={event.content} title={event.title} />
              ) : (
                /* If it's a single image → fallback */
                <Image
                  src={event.content}
                  alt={event.title}
                  width={500}
                  height={500}
                  className="
                    rounded-md object-cover 
                    w-[500px] h-auto 
                    md:w-[420px] lg:w-[480px]
                  "
                />
              )}

            </div>
          )}

          {/* TEXT + CTA */}
          <div>
            <div
              className="prose prose-invert max-w-2xl text-lg leading-relaxed"
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
