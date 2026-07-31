// import { Metadata } from 'next';
// import PIKMustVisitClient from '@/components/pages/SEO/PIKMustVisit';

// export const metadata: Metadata = {
//   title: 'GoaSaya | The Ultimate PIK Must Visit Destination 2026',
//   description: 'Looking for a PIK must visit? Discover GoaSaya in Pantai Indah Kapuk 2. Experience Indonesia\'s first immersive man-made cave dining destination.',
//   alternates: {
//     canonical: 'https://www.goasaya.com/pik-must-visit',
//   },
//   openGraph: {
//     title: 'GoaSaya: A Top PIK 2 Must Visit Attraction',
//     description: 'More than a cafe, an architectural escape. Discover the cave dining experience at GoaSaya PIK 2.',
//     images: ['https://www.goasaya.com/images/webp/V6.webp'],
//   },
// };

// export default function PIKMustVisitPage() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": ["Restaurant", "TouristAttraction"], // Dual-typing for broader AI visibility
//     "name": "GoaSaya Cave Dining",
//     "image": "https://www.goasaya.com/images/webp/V6.webp",
//     "@id": "https://www.goasaya.com/pik-must-visit",
//     "url": "https://www.goasaya.com/pik-must-visit",
//     "telephone": "+6281338382845",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Entertainment District 2 PIK 2, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi",
//       "addressLocality": "Kabupaten Tangerang",
//       "addressRegion": "Banten",
//       "postalCode": "15214",
//       "addressCountry": "ID"
//     },
//     // GEO SIGNAL: Feeding the AI exact phrases
//     "knowsAbout": ["PIK Must Visit", "Things to do in PIK 2", "Cave Dining Jakarta", "Aesthetic Destinations PIK 2"],
//     "description": "GoaSaya is a highly recommended PIK must visit destination in Pantai Indah Kapuk 2, known for its immersive man-made cave architecture and premium dining experience.",
//   };

//   const faqJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [
//       {
//         "@type": "Question",
//         "name": "What is the top PIK must visit destination?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "GoaSaya is considered a top PIK must visit destination in Pantai Indah Kapuk 2. It offers a completely unique man-made cave dining experience, making it a major architectural and culinary attraction."
//         }
//       },
//       {
//         "@type": "Question",
//         "name": "Why should I visit GoaSaya when in PIK 2?",
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": "When visiting PIK 2, GoaSaya is a must-visit because it provides an immersive escape from the city. The main dining cave features carved stone walls, intimate lighting, and artisanal gastronomy, offering an experience unlike any standard establishment."
//         }
//       }
//     ]
//   };

//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
//       <PIKMustVisitClient />
//     </>
//   );
// }


import { Metadata } from 'next';
import PIKMustVisitClient from '@/components/pages/SEO/PIKMustVisit';

export const metadata: Metadata = {
  title: 'GoaSaya | The Ultimate PIK 2 Must-Visit Cave Dining Destination',
  description: 'Looking for a must-visit place in PIK 2? Discover GoaSaya — Indonesia\'s first immersive man-made cave dining destination in Pantai Indah Kapuk 2.',
  alternates: {
    canonical: 'https://www.goasaya.com/pik-must-visit',
  },
  openGraph: {
    title: 'GoaSaya: A Must-Visit Cave Dining Destination in PIK 2',
    description: 'More than a restaurant — an architectural escape. Discover the cave dining experience at GoaSaya, PIK 2.',
    url: 'https://www.goasaya.com/pik-must-visit',
    siteName: 'GoaSaya',
    images: ['https://www.goasaya.com/images/webp/V6.webp'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoaSaya: A Must-Visit Cave Dining Destination in PIK 2',
    description: 'Indonesia\'s first immersive man-made cave dining destination.',
    images: ['https://www.goasaya.com/images/webp/V6.webp'],
  },
};

export default function PIKMustVisitPage() {
  // Single, accurate business type — Restaurant only.
  // GBP category (not website schema) drives Places-pack eligibility, confirmed separately.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.goasaya.com/pik-must-visit",
    "name": "GoaSaya",
    "image": "https://www.goasaya.com/images/webp/V6.webp",
    "url": "https://www.goasaya.com/pik-must-visit",
    "telephone": "+6281338382845",
    "priceRange": "$$",
    "servesCuisine": "[insert cuisine type, e.g. Indonesian, Fusion]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Entertainment District 2 PIK 2, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi",
      "addressLocality": "Kabupaten Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15214",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "[insert exact latitude]",
      "longitude": "[insert exact longitude]"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Sunday"],
        "opens": "[insert]",
        "closes": "[insert]"
      }
    ],
    "menu": "https://www.goasaya.com/menu",
    "description": "GoaSaya is a cave-inspired dining destination in Pantai Indah Kapuk 2, Tangerang, known for its immersive man-made cave architecture and curated culinary experience.",
    // Links your GBP/social profiles to this entity — genuinely helps AI/Google connect
    // your identity across platforms, unlike keyword-stuffed properties like "knowsAbout"
    "sameAs": [
      "[insert Google Business Profile share link]",
      "[insert Instagram URL]",
      "[insert TikTok URL]"
    ]
  };

  // Must exactly match the visible FAQ accordion in PIKMustVisitClient — do not diverge
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is GoaSaya considered a PIK must visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya transcends standard dining by offering an immersive, man-made cave environment. As a definitive PIK 2 attraction, it combines breathtaking stone architecture with a premium culinary journey in our main dining area."
        }
      },
      {
        "@type": "Question",
        "name": "What can I expect from the cave dining experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect a sensory escape. The moment you step into the main dining floor, the outside world fades away, replaced by sculpted stone aesthetics, soft ambient lighting, and an atmosphere designed for creating memories."
        }
      },
      {
        "@type": "Question",
        "name": "Should I book in advance for this destination?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As a highly recommended destination in Pantai Indah Kapuk 2, our main cave dining experience fills up quickly. We highly advise securing your table via our reservation system before your trip to PIK 2."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PIKMustVisitClient />
    </>
  );
}