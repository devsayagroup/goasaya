// app/campaigns/weekday-specials/page.tsx
import type { Metadata } from 'next';
import WeekdaySpecialsPage from '@/components/pages/Campaigns/WeekdaySpecialsPage'; // Adjust path if needed

export const metadata: Metadata = {
  title: 'Weekday Specials & Promos di PIK 2 | GOASAYA',
  description: 'Elevate your weekdays at GOASAYA PIK 2. Enjoy daily exclusive offers including Free Flow Cocktails, Buy 1 Get 1 Wine, Corona Buckets, and our signature Steak pairing.',
  keywords: [
    'Promo Restoran PIK 2', 
    'Weekday Specials Jakarta', 
    'Free Flow Cocktails PIK 2', 
    'Buy 1 Get 1 Wine Jakarta', 
    'Promo Lunch PIK 2', 
    'Promo Dinner PIK 2',
    'GOASAYA Promos',
    'Tempat Nongkrong PIK 2'
  ],
  openGraph: {
    title: 'Weekday Specials & Promos di PIK 2 | GOASAYA',
    description: 'Discover curated deals for every day of the week at GOASAYA. From Matcha Mondays to TGIF Steak pairings, reserve your table today.',
    url: 'https://www.goasaya.com/campaigns/weekday-specials',
    siteName: 'GOASAYA',
    images: [
      {
        url: '/promo/WS-1.webp',
        width: 1200,
        height: 630,
        alt: 'GOASAYA Weekday Specials and Promos in PIK 2',
      },
    ],
    locale: 'id_ID', // Target local Indonesian searches
    type: 'website',
  },
};

export default function WeekdaySpecials() {
  return <WeekdaySpecialsPage />;
}