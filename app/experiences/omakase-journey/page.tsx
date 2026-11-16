// app/experiences/omakase-journey/page.tsx
// Server component: all copy is in the initial HTML. Facts come from the campaign poster only.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goasaya.com";
const URL = `${SITE_URL}/experiences/omakase-journey`;
const POSTER = `${SITE_URL}/campaigns/omakase-journey.webp`;
const WA = "https://wa.me/6281338382845?text=" + encodeURIComponent("Halo GoaSaya, saya mau reservasi Omakase Journey (hari kerja, 11.00-14.00).");

// Confirm these with the team; they come from the poster.
const PRICE = 318000;
const HOURS = { open: "11:00", close: "14:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] };

export const metadata: Metadata = {
  title: "Omakase Journey: AYCE di PIK 2, Rp 318.000 | GoaSaya",
  description:
    "Omakase Journey di GoaSaya PIK 2: all you can eat khusus hari kerja, 11.00-14.00, Rp 318.000 per orang, 15 pilihan menu chef dan refill tanpa batas di dalam sand cave.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Omakase Journey | GoaSaya PIK 2",
    description: "Savor the chef's creations, as much as you desire. Weekdays 11.00-14.00, Rp 318.000 per orang.",
    url: URL,
    siteName: "GoaSaya",
    type: "website",
    locale: "id_ID",
    images: [{ url: POSTER, width: 1200, height: 1500, alt: "Omakase Journey, all you can eat di GoaSaya PIK 2" }],
  },
  twitter: { card: "summary_large_image", title: "Omakase Journey | GoaSaya", images: [POSTER] },
};

// One array feeds the visible FAQ and the FAQPage JSON-LD (identical text).
const faqs = [
  { q: "Apa itu Omakase Journey di GoaSaya?", a: "Omakase Journey adalah pengalaman all you can eat di GoaSaya PIK 2 di mana tamu menikmati kreasi chef sepuasnya, dengan 15 pilihan menu dan refill tanpa batas." },
  { q: "Berapa harga Omakase Journey?", a: "Harganya Rp 318.000 per orang." },
  { q: "Kapan Omakase Journey berlaku?", a: "Omakase Journey hanya berlaku pada hari kerja (Senin sampai Jumat), pukul 11.00 sampai 14.00." },
  { q: "Bagaimana cara reservasi Omakase Journey?", a: "Reservasi melalui halaman reservasi di goasaya.com atau kirim pesan WhatsApp ke +62 813-3838-2845. Disarankan reservasi lebih dulu." },
  { q: "Di mana lokasi GoaSaya?", a: "GoaSaya berada di Entertainment District PIK 2, Tangerang, Banten 15214, di tepi barat laut Jakarta." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Omakase Journey: AYCE di PIK 2",
    inLanguage: "id",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#restaurant` },
    primaryImageOfPage: POSTER,
    mainEntity: { "@id": `${URL}#offer` },
    breadcrumb: { "@id": `${URL}#breadcrumb` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${URL}#offer`,
    name: "Omakase Journey (All You Can Eat, hari kerja)",
    description: "All you can eat dengan 15 pilihan menu chef dan refill tanpa batas, khusus hari kerja pukul 11.00-14.00.",
    price: PRICE,
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
    url: URL,
    image: POSTER,
    offeredBy: { "@id": `${SITE_URL}/#restaurant` },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: HOURS.days,
      opens: HOURS.open,
      closes: HOURS.close,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${URL}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Experiences", item: `${SITE_URL}/experiences` },
      { "@type": "ListItem", position: 3, name: "Omakase Journey", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

const facts: [string, string][] = [
  ["Hari", "Senin sampai Jumat saja"],
  ["Jam", "11.00 - 14.00"],
  ["Harga", "Rp 318.000 per orang"],
  ["Menu", "15 pilihan, refill tanpa batas"],
];

export default function OmakaseJourneyPage() {
  return (
    <>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen selection:bg-[#FFE3AF] selection:text-black">
        {/* HERO: real HTML text, not text baked into an image */}
        <section className="relative flex min-h-[85svh] items-end overflow-hidden px-6 pb-16 pt-40 md:px-14">
          <Image src="/images/webp/goa2.webp" alt="Interior sand cave GoaSaya PIK 2 untuk Omakase Journey" fill priority sizes="100vw" className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FFE3AF]">All You Can Eat · Hari kerja</p>
            <h1 className="font-style mt-4 text-5xl uppercase leading-[0.95] tracking-tight md:text-8xl">Omakase Journey</h1>
            <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
              Savor the chef&apos;s creations, as much as you desire. Omakase Journey adalah all you can eat di GoaSaya PIK 2, dengan 15 pilihan menu dan refill tanpa batas di dalam sand cave.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/reservation" className="rounded-sm bg-[#FFE3AF] px-8 py-4 text-sm tracking-wide text-black hover:bg-white">Reservasi sekarang</Link>
              <a href={WA} className="rounded-sm border border-white/30 px-8 py-4 text-sm tracking-wide hover:border-[#FFE3AF] hover:text-[#FFE3AF]">Chat WhatsApp</a>
            </div>
          </div>
        </section>

        {/* KEY FACTS */}
        <section className="mx-auto max-w-5xl px-6 py-20 md:px-14" aria-labelledby="facts-h">
          <h2 id="facts-h" className="font-style text-3xl md:text-4xl">Yang perlu kamu tahu</h2>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-[#0a0a0a] p-6">
                <dt className="text-xs uppercase tracking-[0.25em] text-[#FFE3AF]/80">{k}</dt>
                <dd className="mt-2 text-xl text-white">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-white/50">Berlaku hari kerja saja. Reservasi disarankan. Untuk hari lain, lihat <Link href="/all-you-can-eat" className="text-[#FFE3AF] underline underline-offset-4">promo All You Can Eat</Link>.</p>
        </section>

        {/* SETTING */}
        <section className="border-y border-white/10 bg-[#050505] px-6 py-20 md:px-14">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src="/rooms/frontview.webp" alt="Tampak depan GoaSaya, restoran sand cave di PIK 2" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <h2 className="font-style text-3xl md:text-4xl">Makan siang di dalam goa</h2>
              <p className="mt-6 leading-relaxed text-white/70">
                GoaSaya adalah restoran berarsitektur sand cave buatan manusia di PIK 2, dengan batu pahatan, cahaya hangat, dan ruang berlapis. Omakase Journey membuat makan siang hari kerja terasa seperti perjalanan, tanpa terburu-buru memilih.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <Link href="/restoran-pik-2" className="text-[#FFE3AF] underline underline-offset-4">Restoran di PIK 2</Link>
                <Link href="/must-visit-in-jakarta" className="text-[#FFE3AF] underline underline-offset-4">Must visit in Jakarta</Link>
                <Link href="/vip-dining" className="text-[#FFE3AF] underline underline-offset-4">Private room</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-20 pb-28 md:px-14" aria-labelledby="faq-h">
          <h2 id="faq-h" className="font-style text-3xl md:text-4xl">Pertanyaan umum</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none text-lg text-white marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FFE3AF]">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}