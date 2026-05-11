import type { Metadata } from 'next';
import RamadanFeastPage from '@/components/pages/Campaigns/RamadanFeastPage'; 

export const metadata: Metadata = {
  title: 'Ramadan Feast | Premium Bukber di PIK 2 | GOASAYA',
  description: 'Explore the GOASAYA Ramadan Feast archive. A look back at our exclusive set menus featuring Ikan Bakar Bumbu Bali, Red Snapper Head Gulai, and authentic Indonesian flavors in PIK 2.',
  keywords: [
    'Bukber PIK 2', 
    'Ramadan Menu Jakarta', 
    'Buka Puasa Premium PIK 2', 
    'GOASAYA Ramadan', 
    'Indonesian Fine Dining', 
    'Set Menu Bukber PIK 2',
    'Ikan Bakar Bumbu Bali'
  ],
  alternates: {
    // STRICT CANONICAL
    canonical: 'https://www.goasaya.com/experiences/ramadan-feast',
  },
  openGraph: {
    title: 'Ramadan Feast at GOASAYA | PIK 2',
    description: 'Relive the warmth of togetherness with our best value set menu featuring authentic Indonesian flavors.',
    url: 'https://www.goasaya.com/experiences/ramadan-feast',
    siteName: 'GOASAYA',
    images: [
      {
        url: '/images/webp/RF1.webp', 
        width: 1080,
        height: 1350,
        alt: 'GOASAYA Ramadan Feast Set Menu',
      },
    ],
    locale: 'id_ID', 
    type: 'website',
  },
};

export default function RamadanFeast() {
  
  // 1. PAST FOOD EVENT SCHEMA (Preserves SEO value for next year)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEvent",
    "name": "Ramadan Feast: Premium Bukber",
    "description": "Exclusive set menus featuring Ikan Bakar Bumbu Bali and authentic Indonesian flavors for Buka Puasa in PIK 2.",
    "image": "https://www.goasaya.com/images/webp/RF1.webp",
    "url": "https://www.goasaya.com/experiences/ramadan-feast",
    "startDate": "2026-03-18T17:00:00+07:00", // Past dates for archive
    "endDate": "2026-04-18T20:00:00+07:00",
    "eventStatus": "https://schema.org/EventMovedOnline", 
    "location": {
      "@type": "Restaurant",
      "name": "GoaSaya",
      "telephone": "+6281338382845",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Entertainment District PIK 2, Jl HR Jl. Rasuna Said, Salembaran, Kec. Kosambi",
        "addressLocality": "Kabupaten Tangerang",
        "addressRegion": "Banten",
        "postalCode": "15214",
        "addressCountry": "ID"
      },
    }
  };

  // 2. FAQ SCHEMA
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apakah GoaSaya PIK 2 memiliki paket Bukber (Buka Puasa)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, selama bulan suci Ramadan, GoaSaya menghadirkan paket Ramadan Feast eksklusif dengan menu set masakan khas Nusantara seperti Ikan Bakar Bumbu Bali dan Gulai Kepala Kakap Merah untuk pengalaman bukber premium di PIK 2."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <RamadanFeastPage />
    </>
  );
}