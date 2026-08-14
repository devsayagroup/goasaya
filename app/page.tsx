import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';
import { orgJsonLd, websiteJsonLd, restaurantJsonLd } from "@/lib/seo/jsonLd";

// Below-the-fold sections remain dynamic for bundle optimization
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: true });
const SpecialEventSection = dynamic(() => import('@/components/sections/SpecialEventSection'), { ssr: true });
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com"; 
const SITE_NAME = "GOASAYA"; 
const OG_IMAGE = `${SITE_URL}/rooms/frontview.webp`;

export const metadata: Metadata = {
  title: `${SITE_NAME} – Aesthetic Cave Restaurant & Asian Progressive Dining in PIK 2`,
  description: "Experience GOASAYA, an iconic sand cave-inspired dining destination in PIK 2, Tangerang. Enjoy progressive Asian cuisine, aesthetic atmospheres, and exclusive nightlife events.",
  // Absolute URL ensures canonical consistency across all crawlers
  alternates: { canonical: SITE_URL },

  openGraph: {
    title: `${SITE_NAME} – Aesthetic Cave Restaurant & Dining in PIK 2`,
    description: "Immersive cave-inspired restaurant in PIK 2. Curated Asian progressive dining, aesthetic atmospheres, and unforgettable nightlife.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "id_ID",
    images: [
      { 
        url: OG_IMAGE, 
        width: 1200, 
        height: 630, 
        alt: `${SITE_NAME} Cave Restaurant PIK 2` 
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Aesthetic Cave Restaurant & Dining in PIK 2`,
    description: "Immersive cave-inspired restaurant in PIK 2. Curated Asian progressive dining and aesthetic nightlife.",
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(websiteJsonLd()) 
        }}
      />
      
      {/* 2. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(orgJsonLd()) 
        }}
      />
      
      {/* 3. Restaurant Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(restaurantJsonLd) 
        }}
      />

      <HeroSection />
      <AboutSection />
      <SpecialEventSection />
      <ExperienceSection />
    </>
  );
}