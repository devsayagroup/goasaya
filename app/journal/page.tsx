import Head from "../head";
import dynamic from "next/dynamic";
import { getAllArticles } from "@/lib/articles";
const JournalClient = dynamic(() => import('@/components/pages/JournalPage'), {ssr: true});

export default async function Journal() {
  const journals = getAllArticles();
  const sortedJournals = journals.sort((a, b) => {
    // Access publishedAt directly since it's on the JournalMeta type
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    
    return dateB - dateA; 
  });
  return (
    <>
      <Head 
        title= "Journal of GoaSaya"
        description= "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings. Our elegant cave-inspired venue offers intimate settings, curated menus, and tailored service for unforgettable moments."
        url="https://www.goasaya.com"
        keywords="private dining, event venue restaurant, corporate dinner, luxury event space, exclusive dining experience, private restaurant booking"
        image="https://www.goasaya.com/logo/09.jpg"
      />
      <JournalClient journals={sortedJournals} />;
    </>
  )
}
