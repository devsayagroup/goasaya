import Head from "../head";
import MenuPage from "@/components/pages/MenuPage";
import type { Metadata } from "next";

const baseUrl = "https://goasaya.com";

export const metadata: Metadata = {
  title: "Menu | GoaSaya",
  description:
    "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
  openGraph: {
    title: "Menu | GoaSaya",
    description:
      "Explore the full GOASAYA culinary experience. From appetizers, mains, desserts, premium beverages, cocktails, and signature drinks.",
    url: `${baseUrl}/menu`,
    siteName: "GOASAYA",
    images: [
      {
        url: `${baseUrl}/logo/09.jpg`, 
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
    images: [`${baseUrl}/images/og-menu.jpg`],
  },
};
export default function Menu() {
  return (
    <>
        <Head 
            title= "Menu | GOASAYA Asian Progressive Dining"
            description= "Explore the GOASAYA menu — a curated selection of Asian progressive dishes, tasting menus, and signature creations. Every plate tells a story of flavor, craftsmanship, and elegance."
            url="https://www.goasaya.com"
            keywords="fine dining menu, asian cuisine menu, tasting menu, goasaya dishes, luxury restaurant food, signature menu"
            image="https://www.goasaya.com/logo/09.jpg"
        />
        <MenuPage/>
    </>
  );
}