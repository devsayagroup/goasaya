// app/journal/page.tsx
import type { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";

// Standard import for better LCP (Largest Contentful Paint) and instant server rendering
import JournalClient from "@/components/pages/JournalPage";

export const metadata: Metadata = {
  title: "Journal & Culinary Stories | GOASAYA PIK 2",
  description: "Immerse yourself in the world of GOASAYA. Read our journal for culinary inspirations, behind-the-scenes stories, chef's notes, and the latest news from our cave-inspired restaurant.",
  keywords: [
    "GOASAYA Journal",
    "Culinary Blog Jakarta",
    "Fine Dining News PIK 2",
    "Chef Notes and Recipes",
    "Progressive Asian Cuisine Stories",
    "Restaurant Behind the Scenes",
    "Gastronomy Blog Indonesia",
    "Luxury Dining Editorial"
  ],
  openGraph: {
    title: "Journal & Culinary Stories | GOASAYA",
    description: "Discover the artistry behind the menu. Explore our journal for culinary stories, latest updates, and insights into progressive Asian dining.",
    url: "https://www.goasaya.com/journal",
    siteName: "GOASAYA",
    images: [
      {
        url: "https://www.goasaya.com/images/webp/V3.webp", // A photo of the chef working or a beautifully plated dish would be perfect here!
        width: 1200,
        height: 630,
        alt: "The GOASAYA Culinary Journal",
      },
    ],
    locale: "id_ID",
    type: "website", // Or "article" if you want to treat the index as a collection
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal & Culinary Stories | GOASAYA",
    description: "Read the latest culinary stories, chef insights, and news from GOASAYA.",
    images: ["https://www.goasaya.com/images/webp/V3.webp"],
  },
  alternates: {
    canonical: "https://www.goasaya.com/journal",
  },
};

export default async function Journal() {
  const journals = getAllArticles();
  
  const sortedJournals = journals.sort((a, b) => {
    // Access publishedAt directly since it's on the JournalMeta type
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    
    return dateB - dateA; 
  });

  return (
    <main className="bg-[#0a0a0a]">
      <JournalClient journals={sortedJournals} />
    </main>
  );
}