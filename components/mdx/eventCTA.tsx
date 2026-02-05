"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

interface EventCTAProps {
  eventSlug?: string;
  activity?: {
    id: string;
    price?: number;
  };
  tracking?: string;
  children: React.ReactNode;
}

export default function EventCTA({
  eventSlug,
  activity,
  tracking,
  children,
}: EventCTAProps) {
  const params = new URLSearchParams();

  // Event-based reservation
  if (eventSlug) {
    params.set("event", eventSlug);
  }

  // Activity-based reservation (Valentine, Workshop, etc)
  if (activity?.id) {
    params.set("activity", activity.id);
  }

  // Price (only if exists)
  if (typeof activity?.price === "number") {
    params.set("price", activity.price.toString());
  }

  // ✅ Final href
  const href =
    params.toString().length > 0
      ? `/reservation?${params.toString()}`
      : "/reservation";

  return (
    <Link
      href={href}
      data-tracking={tracking}
      onClick={() => {
        if (tracking) {
          trackEvent(tracking, {
            event: eventSlug ?? "general",
            activity: activity?.id ?? "general",
            price: activity?.price,
          });
        }
      }}
      className="
        not-prose inline-flex items-center justify-center
        mt-4 rounded-full px-6 py-2
        text-sm font-semibold tracking-wide
        border transition-all duration-300
      "
      style={{
        borderColor: "var(--cta-color)",
        color: "var(--cta-color)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--cta-hover)";
        e.currentTarget.style.color = "var(--cta-text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "var(--cta-color)";
      }}
    >
      {children}
    </Link>
  );
}
