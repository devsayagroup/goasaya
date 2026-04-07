
// import { generatePageMetadata } from "@/lib/metadata";
// import type { Metadata } from "next";

// export const metadata = generatePageMetadata({
//   title: "GOASAYA | Asian Progressive Dining Experience",
//   description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
//   image: "/logo/09.jpg",
//   url: "https://goasaya.com",
// });

// export default function Home() {
//   return (
//     <>
//       <HeroSection/>
//       <AboutSection/>
//       <SpecialEventSection/>
//       <EventSection/>
//     </>
//   );
// }

import type { Metadata } from "next";
import Script from "next/script";
import dynamic from 'next/dynamic';
import { orgJsonLd,websiteJsonLd } from "@/lib/seo/jsonLd";

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {ssr: true});
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {ssr: true});
const SpecialEventSection = dynamic(() => import('@/components/sections/SpecialEventSection'), {ssr: true});
const EventSection = dynamic(() => import('@/components/sections/EventSection'), {ssr: true});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com"; 
const SITE_NAME = "GOASAYA"; 
const OG_IMAGE = `${SITE_URL}/rooms/frontview.webp`;

export const metadata: Metadata = {
  title: `${SITE_NAME} – Cave-Inspired Dining & Experiences in PIK 2 Jakarta`,
  description: "GoaSaya is a cave-inspired dining destination in PIK 2, Jakarta—crafted for immersive meals, curated experiences, and unforgettable nights.",
  keywords: [
    "GoaSaya",
    "cave restaurant Jakarta",
    "PIK 2 restaurant",
    "immersive dining Jakarta",
    "private dining PIK",
    "event venue Jakarta",
  ],
  alternates: { canonical: "/" },

  openGraph: {
    title: `${SITE_NAME} – Cave-Inspired Dining & Experiences in PIK 2 Jakarta`,
    description: "Immersive cave-inspired dining in PIK 2, Jakarta. Curated meals, events, and unforgettable nights.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1000, height: 1000, alt: SITE_NAME }],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Cave-Inspired Dining & Experiences in PIK 2 Jakarta`,
    description:"Immersive cave-inspired dining in PIK 2, Jakarta. Curated meals, events, and unforgettable nights.",
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="website-jsonld"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="org-jsonld"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <HeroSection/>
      <AboutSection/>
      <SpecialEventSection/>
      <EventSection/>
    </>
  );
}

