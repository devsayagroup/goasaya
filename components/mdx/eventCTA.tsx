"use client";

import Link from "next/link";

export default function EventCTA({
  href,
  tracking,
  children,
}: {
  href: string;
  tracking?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      data-tracking={tracking}
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

