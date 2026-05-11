import type { Metadata } from 'next';
// Make sure this import path still correctly points to your client component!
import MayMadnessPage from '@/components/pages/Campaigns/MayMadnessPage'; 

// High-converting SEO targeting "AYCE di PIK2"
export const metadata: Metadata = {
  title: 'May Madness: Premium AYCE Lunch di PIK 2 | GOASAYA',
  description: 'Experience Not Your Usual All You Can Eat (AYCE) di PIK 2 with GOASAYA. Enjoy progressive Asian dining, 50+ exquisite menus, and free-flow Venchi gelato for just 399K.',
  keywords: [
    'AYCE di PIK 2', 
    'All You Can Eat PIK 2', 
    'AYCE Premium Jakarta', 
    'May Madness GOASAYA', 
    'GOASAYA Lunch', 
    'Buffet PIK 2', 
    'Restoran Fine Dining PIK 2'
  ],
  alternates: {
    // STRICT CANONICAL PAIRED WITH YOUR SILO STRATEGY
    canonical: 'https://www.goasaya.com/experiences/may-madness', 
  },
  openGraph: {
    title: 'May Madness: Premium AYCE Lunch di PIK 2 | GOASAYA',
    description: 'Not Your Usual All You Can Eat. Freshly prepared to order, 50+ menus, and free-flow Venchi gelato. Book your table at PIK 2 today.',
    url: 'https://www.goasaya.com/experiences/may-madness',
    siteName: 'GOASAYA',
    images: [
      {
        url: '/images/webp/MM1.webp', 
        width: 1200,
        height: 630,
        alt: 'GOASAYA May Madness AYCE in PIK 2',
      },
    ],
    locale: 'id_ID', 
    type: 'website',
  },
};

export default function MayMadness() {
  
  // 1. FOOD EVENT & OFFER SCHEMA
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEvent",
    "name": "May Madness: Premium AYCE Lunch",
    "description": "Not Your Usual All You Can Eat. Progressive Asian dining featuring 50+ exquisite menus and free-flow Venchi gelato.",
    "image": "https://www.goasaya.com/images/webp/MM1.webp",
    "url": "https://www.goasaya.com/experiences/may-madness",
    "startDate": "2026-05-01T11:00:00+07:00",
    "endDate": "2026-05-31T15:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Restaurant",
      "name": "GoaSaya",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Entertainment District, Pantai Indah Kapuk 2 (PIK 2)",
        "addressLocality": "Jakarta Utara",
        "addressRegion": "DKI Jakarta",
        "postalCode": "14470",
        "addressCountry": "ID"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Premium AYCE Package",
      "price": "399000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-05-01T11:00:00+07:00",
      "url": "https://www.goasaya.com/reservation"
    }
  };

  // 2. FAQ SCHEMA
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Berapa harga All You Can Eat (AYCE) premium di PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paket Premium AYCE May Madness di GoaSaya PIK 2 ditawarkan dengan harga spesial Rp 399.000. Harga ini sudah termasuk lebih dari 50 menu eksklusif yang dimasak sesuai pesanan (made-to-order) dan free-flow gelato Venchi."
        }
      },
      {
        "@type": "Question",
        "name": "Apa saja menu AYCE di GoaSaya PIK 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Berbeda dengan buffet biasa, menu AYCE GoaSaya mengusung konsep Progressive Asian Dining. Anda dapat menikmati lebih dari 50 hidangan premium yang disiapkan segar langsung dari dapur, ditutup dengan free-flow gelato Venchi yang eksklusif."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <MayMadnessPage />
    </>
  );
}