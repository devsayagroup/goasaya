// app/campaigns/ramadan-feast/page.tsx
import type { Metadata } from 'next';
import RamadanFeastPage from '@/components/pages/Campaigns/RamadanFeastPage'; // Adjust path if needed

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
  openGraph: {
    title: 'Ramadan Feast at GOASAYA | PIK 2',
    description: 'Relive the warmth of togetherness with our best value set menu featuring authentic Indonesian flavors.',
    url: 'https://www.goasaya.com/experiences/ramadan-feast',
    siteName: 'GOASAYA',
    images: [
      {
        url: '/images/webp/RF1.webp', // Make sure you place the cover image here!
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
  return <RamadanFeastPage />;
}