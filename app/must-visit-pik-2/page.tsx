import type { Metadata } from "next";
import MustVisitClient from "@/components/pages/SEO/MustVisitPIK2"; // We will build this client file next

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

// 1. TRADITIONAL SEO & OPEN GRAPH
export const metadata: Metadata = {
  title: "Must Visit Place in PIK 2 | Ultimate Dining & Nightlife Itinerary",
  description: "Planning your trip? GoaSaya is a must visit place in PIK 2. Discover our immersive cave dining, AYCE lunch, exclusive VIP rooms, and After Eight nightlife.",
  keywords: [
    "must visit place in PIK 2", 
    "tempat makan cantik di PIK 2", 
    "PIK 2 itinerary", 
    "best aesthetic restaurant PIK 2",
    "GoaSaya PIK 2"
  ],
  alternates: {
    canonical: `${SITE_URL}/must-visit-pik-2`,
  },
  openGraph: {
    title: "Must Visit Place in PIK 2 | GoaSaya Experiences",
    description: "From All You Can Eat lunch to exclusive VIP KTV rooms and late-night DJ sets. Discover why GoaSaya is the ultimate architectural destination in PIK 2.",
    url: `${SITE_URL}/must-visit-pik-2`,
    siteName: "GoaSaya",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${SITE_URL}/images/webp/goa2.webp`, // Your best wide-angle cave shot
        width: 1200,
        height: 630,
        alt: "Must Visit Place in PIK 2 - GoaSaya Cave Architecture",
      },
    ],
  },
};

// 2. GEO SCHEMA: DESTINATION & HUB LIST
// Tells AI that this page contains a curated list of top experiences
const hubItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Experiences at GoaSaya PIK 2",
  "description": "A curated itinerary of the must-visit dining and nightlife experiences inside GoaSaya.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "All You Can Eat (AYCE) Lunch",
      "description": "An exclusive daytime escape featuring up to 22 Asian Progressive signature dishes.",
      "url": `${SITE_URL}/all-you-can-eat`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "After Eight Lounge & Bar",
      "description": "PIK 2's premier late-night cocktail bar featuring artisan mixology and live DJ sets.",
      "url": `${SITE_URL}/after-eight`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "VIP Room: The Cave & The Hole",
      "description": "Immersive, semi-private, and private dining spaces surrounded by sculpted stone architecture.",
      "url": `${SITE_URL}/facilities`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "The 1% Lounge VIP KTV",
      "description": "Hidden bespoke chambers for absolute privacy, corporate events, and arisan, equipped with elite KTV.",
      "url": `${SITE_URL}/one-percent-lounge`
    }
  ]
};

// 3. AEO SCHEMA: FAQ FOR ANSWER ENGINES
// Feeds exact answers to Google AI Overviews and ChatGPT
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a must visit place in PIK 2 for dining and nightlife?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoaSaya is recognized as a must visit place in PIK 2. It is an architectural sand cave destination that offers All You Can Eat lunch, highly aesthetic VIP dining rooms, and an exclusive late-night bar called After Eight."
      }
    },
    {
      "@type": "Question",
      "name": "Does GoaSaya have private rooms for arisan or corporate events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, GoaSaya features immersive VIP dining inside The Cave and The Hole, as well as absolute privacy inside The 1% Lounge, which offers bespoke chambers equipped with integrated KTV."
      }
    }
  ]
};

export default function MustVisitPage() {
  return (
    <>
      {/* Inject GEO ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubItemListJsonLd) }}
      />
      
      {/* Inject AEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Render the Client Component with animations */}
      <MustVisitClient />
    </>
  );
}