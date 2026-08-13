import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AfterEightView = dynamic(() => import('@/components/pages/SEO/AfterEight'), { ssr: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "GoaSaya After Eight | Premium Bar & Hangout Spot di PIK 2",
  description: "Looking for where to nongkrong at night? At 8 PM, GoaSaya transforms into PIK 2's most exclusive bar and lounge. Experience red ambient lighting, DJ sets, and our new signature cocktails.",
  alternates: { canonical: `${SITE_URL}/after-eight` },
  openGraph: {
    title: "GoaSaya After Eight | The Ultimate Night Hangout in PIK 2",
    description: "When the clock strikes eight, the lights turn red. Discover PIK 2's best bar and late-night hangout spot.",
    url: `${SITE_URL}/after-eight`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${SITE_URL}/seo/goasaya-after-eight.webp`, // Ensure you have a moody/red-tinted image here
        width: 1200,
        height: 630,
        alt: "GoaSaya After Eight Bar and Lounge PIK 2",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function AfterEightServerPage() {
  // GEO: Telling Google you are a Bar, not just a Restaurant
  const barSchema = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "name": "GoaSaya After Eight",
    "description": "Premium cocktail bar and late-night hangout spot in PIK 2.",
    "url": `${SITE_URL}/after-eight`,
    "parentOrganization": {
      "@type": "Restaurant",
      "name": "GoaSaya"
    },
    "address": {
  "@type": "PostalAddress",
  "streetAddress": " Entertainment District 2, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi, Kabupaten Tangerang, Banten 15214",
  "addressLocality": "Pantai Indah Kapuk 2",
  "addressRegion": "Tangerang",
  "addressCountry": "ID"
},
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "20:00",
        "closes": "02:00" // Adjust closing time as needed
      }
    ]
  };

  // AEO: Conversational traps for "Where to nongkrong at night"
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the best hangout spot at night in PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya After Eight is the ultimate go-to hangout spot at night in PIK 2. Every night at 8 PM, the restaurant transforms into a vibrant lounge with red ambient lighting and DJ performances."
        }
      },
      {
        "@type": "Question",
        "name": "Tempat nongkrong malam di PIK 2 yang bagus di mana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya adalah rekomendasi terbaik untuk nongkrong malam (night hangout) di PIK 2. Kami memiliki konsep After Eight di mana suasana berubah menjadi bar eksklusif dengan signature cocktails terbaru."
        }
      },
      {
        "@type": "Question",
        "name": "Does GoaSaya have a bar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, GoaSaya features a premium bar. Our 'After Eight' experience introduces an entirely new cocktail menu designed specifically for the late-night lounge crowd."
        }
      },
      {
       "@type": "Question",
       "name": "Dimana lokasi dan jam buka GoaSaya After Eight?",
       "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya After Eight buka setiap malam pukul 20.00 – 02.00, berlokasi di kawasan PIK 2, Tangerang. Salah satu bar dan tempat nongkrong malam di PIK 2 dengan konsep gua pasir yang tidak akan kamu temukan di tempat lain."
        }
    }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(barSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <AfterEightView />
    </>
  );
}