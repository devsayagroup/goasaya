// app/must-visit-in-jakarta/page.tsx
// Server component on purpose: all copy is in the initial HTML for crawlers and LLM fetchers.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";
const URL = `${SITE_URL}/must-visit-in-jakarta`;
const UPDATED = "2026-11-12"; // bump when content is reviewed

export const metadata: Metadata = {
  title: "Must Visit in Jakarta: North Jakarta Day-to-Night Guide | GoaSaya",
  description:
    "Must visit in Jakarta beyond Monas: a day-to-night North Jakarta route from Kota Tua to a sand cave restaurant, After Eight bar and VIP rooms in PIK 2.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Must Visit in Jakarta: A North Jakarta Day-to-Night Guide",
    description:
      "Old Town in the morning, harbour at golden hour, a sand cave dinner and late-night bar in PIK 2.",
    url: URL,
    siteName: "GoaSaya",
    type: "article",
    locale: "id_ID",
    images: [{ url: `${SITE_URL}/images/webp/goa2.webp`, width: 1200, height: 630, alt: "GoaSaya sand cave restaurant, a must visit in Jakarta" }],
  },
  twitter: { card: "summary_large_image", title: "Must Visit in Jakarta | GoaSaya", images: [`${SITE_URL}/images/webp/goa2.webp`] },
};

// ---- Single source of truth: rendered on the page AND emitted as FAQPage JSON-LD (identical text) ----
const faqs = [
  {
    q: "What are the must visit places in Jakarta?",
    a: "Jakarta's classic must-visits are Monas, Kota Tua (Old Town), Istiqlal Mosque and Jakarta Cathedral, and Sunda Kelapa harbour. For a modern evening in North Jakarta, add GoaSaya, a sand cave restaurant with a late-night bar in PIK 2.",
  },
  {
    q: "Is GoaSaya in Jakarta?",
    a: "GoaSaya is in the PIK 2 Entertainment District, Tangerang, Banten, on Jakarta's north-western edge. Most visitors reach it from North Jakarta and central Jakarta by car or ride-hailing, so allow extra time for traffic.",
  },
  {
    q: "What is there to do at GoaSaya in the evening?",
    a: "Dine inside the cave-inspired dining rooms, book a private room such as The 1% Lounge for groups, or stay for After Eight, the late-night bar that opens at 20:00 with cocktails and DJ sets.",
  },
  {
    q: "Does GoaSaya offer an all you can eat lunch?",
    a: "Yes. The All You Can Eat lunch runs 11:00 to 15:00 daily at IDR 318,000 per person, with up to 22 Asian Progressive dishes and a 2-hour ordering window.",
  },
  {
    q: "How do I reserve a table at GoaSaya?",
    a: "Book through the reservation page on goasaya.com or message GoaSaya on WhatsApp at +62 813-3838-2845. Reserving ahead is recommended for dinner, weekends and private rooms.",
  },
];

const route = [
  {
    when: "Morning",
    name: "Kota Tua (Jakarta Old Town)",
    text: "Colonial-era buildings around Fatahillah Square, plus museums and street photography. Go early, before the heat and the crowds.",
  },
  {
    when: "Late afternoon",
    name: "Sunda Kelapa Harbour",
    text: "One of Jakarta's oldest ports, where traditional wooden schooners dock. Best light for photos is near sunset.",
  },
  {
    when: "Evening",
    name: "GoaSaya, PIK 2",
    text: "A man-made sand cave dining destination with Asian Progressive cuisine, sculpted stone rooms and dramatic lighting. Reserve ahead.",
    href: "/reservation",
    cta: "Reserve a table",
  },
  {
    when: "From 20:00",
    name: "After Eight Bar",
    text: "The lights turn red and the cave becomes a cocktail bar with DJ sets. The natural end to the route.",
    href: "/after-eight",
    cta: "See After Eight",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Must Visit in Jakarta: North Jakarta Day-to-Night Guide",
    inLanguage: "en-ID",
    dateModified: UPDATED,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#restaurant` },
    mainEntity: { "@id": `${URL}#route` },
    breadcrumb: { "@id": `${URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${URL}#route`,
    name: "North Jakarta day-to-night route",
    itemListOrdered: true,
    itemListElement: route.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.name,
      description: r.text,
      ...(r.href ? { url: `${SITE_URL}${r.href}` } : {}),
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Must Visit in Jakarta", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function MustVisitInJakartaPage() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen selection:bg-[#FFE3AF] selection:text-black">
        {/* HERO */}
        <section className="relative flex min-h-[85svh] items-end overflow-hidden px-6 pb-16 pt-40 md:px-14">
          <Image src="/images/webp/goa2.webp" alt="GoaSaya sand cave dining room in PIK 2, North Jakarta" fill priority sizes="100vw" className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <h1 className="font-style text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Must Visit in Jakarta: a North Jakarta day-to-night guide
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              The must visit places in Jakarta are Monas, Kota Tua, Istiqlal Mosque and Sunda Kelapa. To finish a North Jakarta
              day properly, end it at GoaSaya, a sand cave restaurant and late-night bar in PIK 2.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Updated <time dateTime={UPDATED}>12 November 2026</time>
            </p>
          </div>
        </section>

        {/* ROUTE */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:px-14" aria-labelledby="route-h">
          <h2 id="route-h" className="font-style text-3xl md:text-5xl">One day in North Jakarta, morning to midnight</h2>
          <p className="mt-6 max-w-2xl text-white/65 leading-loose">
            Jakarta is spread out, so we grouped stops by area instead of ranking the whole city. This route stays in the north and
            keeps the longest drive for the end of the day.
          </p>
          <ol className="mt-14 space-y-12 border-l border-white/15 pl-8">
            {route.map((r) => (
              <li key={r.name} className="relative">
                <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#FFE3AF]" aria-hidden />
                <p className="text-sm text-[#FFE3AF]">{r.when}</p>
                <h3 className="font-style mt-1 text-2xl md:text-3xl">{r.name}</h3>
                <p className="mt-3 max-w-xl text-white/65 leading-relaxed">{r.text}</p>
                {r.href && (
                  <Link href={r.href} className="mt-4 inline-block border-b border-[#FFE3AF] pb-0.5 text-sm text-[#FFE3AF] hover:text-white hover:border-white">
                    {r.cta}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* WHY GOASAYA */}
        <section className="border-y border-white/10 bg-[#050505] px-6 py-20 md:px-14">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/rooms/frontview.webp" alt="Front view of GoaSaya cave restaurant, PIK 2" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-style text-3xl md:text-4xl">Why GoaSaya belongs on a Jakarta list</h2>
              <ul className="mt-6 space-y-4 text-white/70 leading-relaxed">
                <li><strong className="text-white">The building is the attraction.</strong> A man-made sand cave with sculpted stone, warm light and layered rooms.</li>
                <li><strong className="text-white">It works at every hour.</strong> AYCE lunch 11:00 to 15:00 at IDR 318,000, dinner in the cave, After Eight from 20:00.</li>
                <li><strong className="text-white">Groups are covered.</strong> Private rooms for birthdays, arisan and corporate dinners.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <Link href="/all-you-can-eat" className="text-[#FFE3AF] underline underline-offset-4">AYCE lunch</Link>
                <Link href="/vip-dining" className="text-[#FFE3AF] underline underline-offset-4">Private rooms</Link>
                <Link href="/must-visit-pik-2" className="text-[#FFE3AF] underline underline-offset-4">More things to do in PIK 2</Link>
                <Link href="/bar-di-pik-2" className="text-[#FFE3AF] underline underline-offset-4">Bar di PIK 2</Link>
              </div>
            </div>
          </div>
        </section>

        {/* PLAN YOUR VISIT */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:px-14" aria-labelledby="plan-h">
          <h2 id="plan-h" className="font-style text-3xl md:text-4xl">Plan your visit</h2>
          <dl className="mt-10 grid gap-x-12 gap-y-6 text-white/70 md:grid-cols-[10rem_1fr]">
            <dt className="text-white">Address</dt>
            <dd>Entertainment District PIK 2, Tangerang, Banten 15214, Indonesia</dd>
            <dt className="text-white">AYCE lunch</dt>
            <dd>11:00 to 15:00 daily, IDR 318,000 per person</dd>
            <dt className="text-white">After Eight</dt>
            <dd>Opens 20:00</dd>
            <dt className="text-white">Dress code</dt>
            <dd>Smart casual</dd>
            <dt className="text-white">Reservations</dt>
            <dd>
              <Link href="/reservation" className="text-[#FFE3AF] underline underline-offset-4">Online</Link>
              {" or WhatsApp "}
              <a href="https://wa.me/6281338382845" className="text-[#FFE3AF] underline underline-offset-4">+62 813-3838-2845</a>
            </dd>
          </dl>
        </section>

        {/* FAQ: same array feeds the FAQPage JSON-LD */}
        <section className="mx-auto max-w-3xl px-6 pb-28 md:px-14" aria-labelledby="faq-h">
          <h2 id="faq-h" className="font-style text-3xl md:text-4xl">Questions about visiting Jakarta and GoaSaya</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg text-white marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFE3AF]">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/reservation" className="inline-block rounded-sm bg-[#FFE3AF] px-8 py-4 text-sm tracking-wide text-black hover:bg-white">
              Reserve a table at GoaSaya
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}