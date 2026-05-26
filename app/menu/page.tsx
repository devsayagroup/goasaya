import type { Metadata } from "next";
import dynamic from "next/dynamic";
const MenuPage = dynamic(() => import('@/components/pages/MenuPage'), {ssr: true});

const baseUrl = "https://goasaya.com";

export const metadata: Metadata = {
  title: "Menu | GOASAYA Asian Progressive Dining",
  description:
    "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
  keywords:"fine dining menu, asian cuisine menu, tasting menu, goasaya dishes, luxury restaurant food, signature menu",
    openGraph: {
    title: "Menu | GOASAYA Asian Progressive Dining",
    description:
      "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
    url: `${baseUrl}/menu`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${baseUrl}/menu/final-touch.webp`, 
        width: 1200,
        height: 630,
        alt: "GOASAYA Menu",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | GoaSaya",
    description:
      "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
    images: [`${baseUrl}/menu/final-touch.webp`],
  },
};

export default function Menu() {
  return (
    <>
    <MenuPage/>
    </>
  );
}