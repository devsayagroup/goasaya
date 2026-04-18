import { Metadata } from 'next';
import CafeDiPikClient from '@/components/pages/SEO/CafeDiPIK';

// 1. STRICT SERVER-SIDE SEO METADATA
export const metadata: Metadata = {
  title: 'GoaSaya | The Most Unique Cave Cafe di PIK - PIK Must Visit 2026',
  description: 'A short escape from the modern life to an intimate man-made cave. Discover why GoaSaya is the ultimate aesthetic cafe di PIK and a definitive PIK must visit.',
  alternates: {
    canonical: 'https://www.goasaya.com/cafe-di-pik',
  },
  openGraph: {
    title: 'GoaSaya: The Ultimate Cafe di PIK Experience',
    description: 'Discover the cave-inspired aesthetic at GoaSaya. The top PIK must visit destination.',
    images: ['https://www.goasaya.com/images/cave-wide.jpg'],
  },
};

export default function CafeDiPikPage() {
  // 2. STRICT SERVER-SIDE SCHEMA GENERATION (Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "GoaSaya",
    "image": "https://www.goasaya.com/images/cave-wide.jpg",
    "@id": "https://www.goasaya.com/cafe-di-pik",
    "url": "https://www.goasaya.com/cafe-di-pik",
    "telephone": "+62XXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PIK 2",
      "addressLocality": "Jakarta Utara",
      "addressRegion": "DKI Jakarta",
      "postalCode": "14470",
      "addressCountry": "ID"
    },
    "servesCuisine": "International, Coffee",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "00:00" // Adjusted based on your screenshot footer
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes GoaSaya the best cafe di PIK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our unique man-made cave architecture provides an intimate escape from the modern world. Combined with premium hospitality, it's a deeply relaxing ambiance unlike any other cafe in PIK 2."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the best place for a PIK must visit experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoaSaya is located in the heart of PIK 2. We offer a safe space surrounded by stone walls and soft lights, perfect for those who appreciate the finer things."
        }
      }
    ]
  };

  return (
    <>
      {/* Inject invisible SEO data into the DOM before the UI loads */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Render the Client UI */}
      <CafeDiPikClient />
    </>
  );
}