"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { eventIndex } from "@/content/events/event-index";
import { highlightedEventSlug } from "@/content/events";

export default function FirstVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);

  const highlightedEvent = eventIndex.find(
    (e) => e.slug === highlightedEventSlug
  );

  useEffect(() => {
    const hasVisited = localStorage.getItem("goasaya_first_visit");

    if (!hasVisited) {
      setIsOpen(true);
      if (!hasTracked) {
        setHasTracked(true);
        localStorage.setItem("goasaya_first_visit", "true");
      }
    }
  }, [hasTracked]);

  if (!isOpen || !highlightedEvent) return null;

  return (
    <div
      className="
        fixed inset-0 z-[99999] px-12
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        pointer-events-auto
      "
    >
      <div
        className="
          relative w-full max-w-sm
          rounded-xl bg-white shadow-2xl
          pointer-events-auto
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-transparent px-4 py-3">
          <h3 className="text-sm font-semibold text-maroon">
            Featured Events
          </h3>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              h-6 w-6 rounded-full
              border border-maroon/70
              text-maroon
              pointer-events-auto
            "
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="relative h-80 w-full">
          <Image
            src={highlightedEvent.image}
            alt={highlightedEvent.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-5 py-4 text-sm text-neutral-700 mb-2">
          <h4 className="text-base font-style text-xl mb-1 font-semibold text-maroon">
            {highlightedEvent.title}
          </h4>
          <p>
            {highlightedEvent.homedesc}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-5 pb-5">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              flex-1 rounded-lg 
              px-4 py-2 text-sm font-medium
              pointer-events-auto
            "
          >
            Not Now
          </button>

          <Link
            href={`/events/${highlightedEvent.slug}`}
            onClick={() => setIsOpen(false)}
            className="
              flex-1 rounded-lg bg-orange
              px-4 py-2 text-center
              text-sm font-semibold text-white
              pointer-events-auto
            "
          >
            See Event
          </Link>
        </div>
      </div>
    </div>
  );
}
