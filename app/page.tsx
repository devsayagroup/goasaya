import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import { orgJsonLd, websiteJsonLd, restaurantJsonLd } from "@/lib/seo/jsonLd";

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { ssr: true });
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: true });
const SpecialEventSection = dynamic(() => import('@/components/sections/SpecialEventSection'), { ssr: true });
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com"; 
const SITE_NAME = "GOASAYA"; 
const OG_IMAGE = `${SITE_URL}/rooms/frontview.webp`;

export const metadata: Metadata = {
  title: `${SITE_NAME} – Aesthetic Cave Restaurant & Asian Progressive Dining in PIK 2`,
  description: "Experience GOASAYA, an iconic sand cave-inspired dining destination in PIK 2, Tangerang. Enjoy progressive Asian cuisine, aesthetic atmospheres, and exclusive nightlife events.",
  alternates: { canonical: "/" },

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

export default async function HomePage() {
  return (
    <>
     {/* 1. Website Schema (It's a function, so we add ()) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(websiteJsonLd()) 
        }}
      />
      
      {/* 2. Organization Schema (It's a function, so we add ()) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(orgJsonLd()) 
        }}
      />
      
      {/* 3. Restaurant Schema (It's an object, so NO parentheses) */}
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



// import type { Metadata } from "next";
// import Script from "next/script";
// import dynamic from 'next/dynamic';
// import { orgJsonLd,websiteJsonLd } from "@/lib/seo/jsonLd";
// // import { getEventIndex } from "@/lib/event-index";

// const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {ssr: true});
// const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {ssr: true});
// const SpecialEventSection = dynamic(() => import('@/components/sections/SpecialEventSection'), {ssr: true});
// // const EventSection = dynamic(() => import('@/components/sections/EventSection'), {ssr: true});
// const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {ssr: true});

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com"; 
// const SITE_NAME = "GOASAYA"; 
// const OG_IMAGE = `${SITE_URL}/rooms/frontview.webp`;

// export const metadata: Metadata = {
//   title: `${SITE_NAME} – Cave-Inspired Dining & Experiences in PIK 2`,
//   description: "GoaSaya is a cave-inspired dining destination in PIK 2, Jakarta—crafted for immersive meals, curated experiences, and unforgettable nights.",
//   keywords: [
//     "GoaSaya",
//     "cave restaurant Jakarta",
//     "PIK 2 restaurant",
//     "immersive dining Jakarta",
//     "private dining PIK",
//     "event venue Jakarta",
//     "Cafe di PIK",
//     "PIK must visit",
//   ],
//   alternates: { canonical: "/" },

//   openGraph: {
//     title: `${SITE_NAME} – Cave-Inspired Dining & Experiences in PIK 2 Jakarta`,
//     description: "Immersive cave-inspired dining in PIK 2, Jakarta. Curated meals, events, and unforgettable nights.",
//     url: SITE_URL,
//     siteName: SITE_NAME,
//     type: "website",
//     images: [{ url: OG_IMAGE, width: 1000, height: 1000, alt: SITE_NAME }],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: `${SITE_NAME} – Cave-Inspired Dining & Experiences in PIK 2 Jakarta`,
//     description:"Immersive cave-inspired dining in PIK 2, Jakarta. Curated meals, events, and unforgettable nights.",
//     images: [OG_IMAGE],
//   },
// };

// export default async function HomePage() {
//   return (
//     <>
//       <Script
//         id="website-jsonld"
//         strategy="beforeInteractive"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
//       />
//       <Script
//         id="org-jsonld"
//         strategy="beforeInteractive"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
//       />
//       <HeroSection/>
//       <AboutSection/>
//       <SpecialEventSection/>
//       <ExperienceSection/>
//     </>
//   );
// }

