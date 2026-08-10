import type { Metadata } from "next";
import Link from "next/link";
import MobileStickyCta from "@/components/ui/MobileStickyCta"; // Assuming you have this from earlier

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";

export const metadata: Metadata = {
  title: "Plan Your Visit | GOASAYA Premium Cave Restaurant PIK 2",
  description: "Everything you need to know before visiting GOASAYA in PIK 2. Find our dress code, location details, reservation policies, and opening hours.",
  alternates: { canonical: `${SITE_URL}/visit` },
  openGraph: {
    title: "Plan Your Visit to GOASAYA PIK 2",
    description: "Prepare for an unforgettable culinary experience inside Jakarta’s most iconic architectural sand cave.",
    url: `${SITE_URL}/visit`,
    siteName: "GOASAYA",
    type: "website",
  },
};

// The exact JSON-LD Schema that feeds ChatGPT & Google AI Overviews
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where exactly is GoaSaya located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GoaSaya is located in the heart of PIK 2 (Pantai Indah Kapuk 2), Tangerang, Banten. We are situated perfectly for those looking for a premium dining escape away from the busy Jakarta city center, featuring our signature sand cave architecture."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to make a reservation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While we accommodate walk-ins based on availability, reservations are highly recommended to secure your table inside the cave, especially for weekend dining and exclusive events."
      }
    },
    {
      "@type": "Question",
      "name": "What is the dress code at GoaSaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our dress code is Smart Casual. We encourage our guests to dress up for the occasion to match our aesthetic and luxurious vibe. Please avoid wearing sleeveless shirts (for men), athletic wear, and flip-flops."
      }
    },
    {
      "@type": "Question",
      "name": "What type of cuisine does GoaSaya serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Asian Progressive cuisine. Our menu elevates traditional Asian flavors using modern culinary techniques and premium ingredients, perfectly paired with our signature craft cocktails."
      }
    }
  ]
};

export default function VisitPage() {
  const faqs = faqSchema.mainEntity;

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24 px-6">
      {/* Inject the FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-style uppercase mb-4 text-[#FFE3AF]">
            Plan Your Visit
          </h1>
          <p className="font-text text-white/70 text-sm md:text-base leading-relaxed">
            Prepare for an unforgettable culinary experience inside PIK 2&apos;s most iconic architectural sand cave. Here is everything you need to know.
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-8">
              <h3 className="text-xl md:text-2xl font-style text-white mb-3">
                {faq.name}
              </h3>
              <p className="font-text text-white/60 leading-relaxed text-sm md:text-base">
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center">
          <Link 
            href="/menu"
            className="px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-full"
          >
            View Menu
          </Link>
          <a 
            href="https://wa.me/6281338382845?text=I+want+to+book+a+table+at+GoaSaya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#FFE3AF] text-black text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors rounded-full"
          >
            Book a Table
          </a>
        </div>
      </div>

      <MobileStickyCta 
        href="https://wa.me/6281338382845?text=I+want+to+book+a+table+at+GoaSaya"
        text="Book a Table"
      />
    </main>
  );
}