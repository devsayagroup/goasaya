// app/campaigns/may-madness/page.tsx
import type { Metadata } from 'next';
import MayMadnessPage from '@/components/pages/Campaigns/MayMadnessPage'; // Adjust path if needed

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
    locale: 'id_ID', // Localizing to Indonesian audience
    type: 'website',
  },
};

export default function MayMadness() {
  return <MayMadnessPage />;
}