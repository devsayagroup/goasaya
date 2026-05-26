// components/ui/MobileStickyCta.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface MobileStickyCtaProps {
  href: string;
  text: string;
  // Optional GA4 Tracking Props (with sensible defaults)
  eventName?: string;
  eventCategory?: string;
  eventLabel?: string;
  // Optional setting to hide the arrow if needed
  showArrow?: boolean;
}

export default function MobileStickyCta({
  href,
  text,
  eventName = "sticky_cta_click",
  eventCategory = "conversion",
  eventLabel = "Mobile Sticky CTA",
  showArrow = true,
}: MobileStickyCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-[85%] p-4  z-50">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent(eventName, {
            category: eventCategory,
            label: eventLabel,
          })
        }
        className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-[#FFE3AF] text-[#050201] rounded-sm text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(255,227,175,0.2)]"
      >
        {text} {showArrow && <ArrowUpRight size={16} />}
      </Link>
    </div>
  );
}