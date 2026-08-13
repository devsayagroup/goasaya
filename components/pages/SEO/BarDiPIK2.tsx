// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform, Variants } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import MobileStickyCta from "@/components/ui/MobileStickyCta";

// const MARQUEE_ITEMS = [
//   "BAR DI PIK 2",
//   "HANGOUT DI PIK 2",
//   "AFTER EIGHT",
//   "1% LOUNGE",
// ];

// export default function BarDiPik2View() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 24 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
//   };

//   const fadeLeft: Variants = {
//     hidden: { opacity: 0, x: -32 },
//     show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
//   };

//   const fadeRight: Variants = {
//     hidden: { opacity: 0, x: 32 },
//     show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
//   };

//   return (
//     <main className="relative min-h-screen bg-[#F6F1E6] text-[#211712] selection:bg-[#7A1F1F] selection:text-[#F6F1E6] overflow-x-hidden">

//       {/* HERO — asymmetric split, parallax image */}
//       <section ref={heroRef} className="relative pt-28 md:pt-32 pb-0 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
//           <motion.div
//             initial="hidden" animate="show" variants={fadeLeft}
//             className="md:col-span-7 relative z-10"
//           >
//             <h1 className="font-style text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#211712]">
//               Two ways<br />to be out<br />
//               <span className="text-[#7A1F1F]">in PIK 2.</span>
//             </h1>
//             <p className="font-text text-[#211712]/60 text-sm md:text-base leading-relaxed max-w-sm mt-8">
//               The bar for a loud night out. The room for the one that&apos;s just yours. Both live inside
//               GoaSaya — pick the one your night needs.
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden" animate="show" variants={fadeRight}
//             className="md:col-span-5 relative"
//           >
//             <div className="relative aspect-[3/4] overflow-hidden">
//               <motion.div
//                 style={{ y: heroImageY, scale: heroImageScale }}
//                 className="absolute inset-0"
//               >
//                 <Image
//                   src="/campaigns/all-you-can-eat.webp"
//                   alt="Bar and hangout spot in PIK 2 - GoaSaya"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </motion.div>
//             </div>
//             <div className="absolute -bottom-6 -left-6 md:-left-10 bg-[#F6F1E6] border border-[#211712]/10 px-5 py-4 max-w-[200px]">
//               <p className="font-style italic text-sm text-[#211712]/80 leading-snug">
//                 &ldquo;One Place, two completely different nights.&rdquo;
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* MARQUEE — dynamic keyword band */}
//       <div className="relative mt-20 md:mt-28 border-y border-[#211712]/10 bg-[#211712] py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//         >
//           {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
//             <span
//               key={i}
//               className="font-style italic text-lg md:text-2xl text-[#F6F1E6]/70 mx-8 flex items-center gap-8"
//             >
//               {item}
//               <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F1F]" />
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       {/* INTRO — asymmetric editorial pull */}
//       <section className="relative py-24 md:py-32 px-6 border-b border-[#211712]/10">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
//           <motion.p
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//             className="md:col-span-4 font-style text-2xl md:text-3xl leading-tight text-[#211712]"
//           >
//             Looking for a bar or hangout spot in PIK 2 that isn&apos;t like the rest?
//           </motion.p>
//           <motion.p
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//             className="md:col-span-7 md:col-start-6 font-text text-[#211712]/65 text-base md:text-lg leading-relaxed"
//           >
//             GoaSaya runs two rooms with two very different jobs. <strong className="text-[#211712] font-semibold">After Eight</strong> is
//             the open bar and lounge — DJ sets, cocktails, a crowd. <strong className="text-[#211712] font-semibold">1% Lounge</strong> is
//             the private KTV room — closed doors, your own playlist, your own people. Same address, opposite
//             energy. Sedang cari bar di PIK 2 atau tempat hangout malam yang lebih personal? Salah satu dari
//             keduanya kemungkinan besar yang kamu cari.
//           </motion.p>
//         </div>
//       </section>

//       {/* TWO CONCEPTS — alternating asymmetric rows, indexed */}
//       <section className="relative">
//         {/* After Eight row */}
//         <div className="relative border-b border-[#211712]/10 py-20 md:py-28 px-6 overflow-hidden">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
//             <motion.span
//               initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//               className="md:col-span-1 font-style text-6xl md:text-7xl text-[#211712]/10 leading-none select-none"
//             >
//               01
//             </motion.span>

//             <motion.div
//               initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
//               className="md:col-span-6 order-2 md:order-1"
//             >
//               <span className="text-[10px] uppercase tracking-[0.4em] text-[#7A1F1F] font-semibold mb-4 block">
//                 For the night out
//               </span>
//               <h3 className="font-style text-4xl md:text-5xl text-[#211712] mb-5">After Eight</h3>
//               <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mb-8 max-w-md">
//                 GoaSaya&apos;s sand cave turns into PIK 2&apos;s bar at 8PM sharp — red light, live DJ sets,
//                 and a cocktail menu built for staying out late. This is the bar di PIK 2 you tell your
//                 friends about.
//               </p>
//               <Link
//                 href="/after-eight"
//                 className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#211712]"
//               >
//                 Explore After Eight
//                 <span className="block h-px w-8 bg-[#211712] group-hover:w-14 transition-all duration-300" />
//               </Link>
//             </motion.div>

//             <motion.div
//               initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
//               className="md:col-span-5 order-1 md:order-2"
//             >
//               <div className="relative aspect-[4/5] overflow-hidden">
//                 <Image
//                   src="/seo/goasaya-after-eight.webp"
//                   alt="Bar di PIK 2 - GoaSaya After Eight"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* 1% Lounge row — reversed */}
//         <div className="relative border-b border-[#211712]/10 py-20 md:py-28 px-6 overflow-hidden bg-[#EFE6D3]/50">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
//             <motion.span
//               initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//               className="md:col-span-1 md:order-3 font-style text-6xl md:text-7xl text-[#211712]/10 leading-none select-none text-right md:text-left"
//             >
//               02
//             </motion.span>

//             <motion.div
//               initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
//               className="md:col-span-5 order-1"
//             >
//               <div className="relative aspect-[4/5] overflow-hidden">
//                 <Image
//                   src="/rooms/onepercent/Pi-11.webp"
//                   alt="Hangout spot in PIK 2 - 1% Lounge KTV"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
//               className="md:col-span-6 order-2"
//             >
//               <span className="text-[10px] uppercase tracking-[0.4em] text-[#7A1F1F] font-semibold mb-4 block">
//                 For the private one
//               </span>
//               <h3 className="font-style text-4xl md:text-5xl text-[#211712] mb-5">1% Lounge</h3>
//               <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mb-8 max-w-md">
//                 A private KTV room in PIK 2, built for the group that wants the door closed. Birthdays,
//                 office gatherings, family nights — this is the hangout spot in PIK 2 for the moments you
//                 don&apos;t want to share with a crowd.
//               </p>
//               <Link
//                 href="/one-percent-lounge"
//                 className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#211712]"
//               >
//                 Explore 1% Lounge
//                 <span className="block h-px w-8 bg-[#211712] group-hover:w-14 transition-all duration-300" />
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* LOCATION SUMMARY */}
//       <section className="relative py-20 md:py-24 px-6 border-b border-[#211712]/10">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           <motion.span
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//             className="font-style text-2xl md:text-3xl text-[#211712]"
//           >
//             One address. Two nights.
//           </motion.span>
//           <motion.p
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//             className="font-text text-[#211712]/60 text-sm md:text-base leading-relaxed max-w-md md:text-right"
//           >
//             After Eight and 1% Lounge sit in the same PIK 2, Tangerang address — walk from one mood to the
//             other without ever leaving.
//           </motion.p>
//         </div>
//       </section>

//       {/* FAQ — two-column, question list feel; ID copy kept exact to match FAQPage schema */}
//       <section className="relative py-24 md:py-32 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
//           <motion.h2
//             initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
//             className="md:col-span-4 font-style text-3xl md:text-4xl text-[#211712] leading-tight"
//           >
//             Questions about bar &amp; hangout di PIK 2
//           </motion.h2>

//           <div className="md:col-span-7 md:col-start-6 space-y-0">
//             <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
//               <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
//                 Rekomendasi bar di PIK 2 yang bagus di mana?
//                 <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
//               </summary>
//               <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
//                 GoaSaya After Eight adalah bar dan lounge eksklusif di PIK 2, buka setiap malam pukul 20.00
//                 dengan pencahayaan merah, DJ set, dan signature cocktails.
//               </p>
//             </details>

//             <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
//               <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
//                 Tempat hangout di PIK 2 selain restoran apa saja?
//                 <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
//               </summary>
//               <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
//                 GoaSaya menghadirkan dua konsep hangout di PIK 2: After Eight untuk suasana bar dan lounge
//                 malam, serta 1% Lounge untuk KTV room privat dan acara bareng teman atau keluarga.
//               </p>
//             </details>

//             <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
//               <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
//                 Apa bedanya After Eight dan 1% Lounge?
//                 <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
//               </summary>
//               <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
//                 After Eight adalah konsep bar dan lounge terbuka dengan DJ set dan cocktail, sementara 1%
//                 Lounge adalah ruang KTV privat yang lebih cocok untuk grup kecil, ulang tahun, atau acara
//                 khusus.
//               </p>
//             </details>

//             <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
//               <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
//                 Apakah perlu reservasi untuk hangout di GoaSaya PIK 2?
//                 <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
//               </summary>
//               <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
//                 Reservasi sangat disarankan, terutama untuk After Eight di malam weekend dan untuk KTV room
//                 di 1% Lounge, karena kapasitas terbatas.
//               </p>
//             </details>
//           </div>
//         </div>
//       </section>

//       <MobileStickyCta
//         href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+know+more+about+After+Eight+and+1%25+Lounge."
//         text="Chat on WhatsApp"
//       />
//     </main>
//   );
// }


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

const MARQUEE_ITEMS = [
  "BAR DI PIK 2",
  "HANGOUT DI PIK 2",
  "AFTER EIGHT",
  "1% LOUNGE",
];

export default function BarDiPik2View() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main className="relative min-h-screen bg-[#F6F1E6] text-[#211712] selection:bg-[#7A1F1F] selection:text-[#F6F1E6] overflow-x-hidden">

      {/* HERO — asymmetric split, parallax image */}
      <section ref={heroRef} className="relative pt-28 md:pt-32 pb-0 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
          <motion.div
            initial="hidden" animate="show" variants={fadeLeft}
            className="md:col-span-7 relative z-10"
          >
            <h1 className="font-style text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#211712]">
              Two ways<br />to be out<br />
              <span className="text-[#7A1F1F]">in PIK 2.</span>
            </h1>
            <p className="font-text text-[#211712]/60 text-sm md:text-base leading-relaxed max-w-sm mt-8">
              The bar for a loud night out. The room for the one that&apos;s just yours. Both live inside
              GoaSaya — pick the one your night needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" animate="show" variants={fadeRight}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.div
                style={{ y: heroImageY, scale: heroImageScale }}
                className="absolute inset-0"
              >
                <Image
                  src="/campaigns/all-you-can-eat.webp"
                  alt="Bar and hangout spot in PIK 2 - GoaSaya"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-[#F6F1E6] border border-[#211712]/10 px-5 py-4 max-w-[200px]">
              <p className="font-style italic text-sm text-[#211712]/80 leading-snug">
                &ldquo;One Place, two completely different nights.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE — dynamic keyword band */}
      <div className="relative mt-20 md:mt-28 border-y border-[#211712]/10 bg-[#211712] py-4 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-style italic text-lg md:text-2xl text-[#F6F1E6]/70 mx-8 flex items-center gap-8"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A1F1F]" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* INTRO — asymmetric editorial pull */}
      <section className="relative py-24 md:py-32 px-6 border-b border-[#211712]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-4 font-style text-2xl md:text-3xl leading-tight text-[#211712]"
          >
            Looking for a bar or hangout spot in PIK 2 that isn&apos;t like the rest?
          </motion.p>
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-7 md:col-start-6 font-text text-[#211712]/65 text-base md:text-lg leading-relaxed"
          >
            GoaSaya runs two rooms with two very different jobs. <strong className="text-[#211712] font-semibold">After Eight</strong> is
            the open bar and lounge — DJ sets, cocktails, a crowd. <strong className="text-[#211712] font-semibold">1% Lounge</strong> is
            the private KTV room — closed doors, your own playlist, your own people. Same address, opposite
            energy. Sedang cari bar di PIK 2 atau tempat hangout malam yang lebih personal? Salah satu dari
            keduanya kemungkinan besar yang kamu cari.
          </motion.p>
        </div>
      </section>

      {/* TWO CONCEPTS — each row drops into that venue's own dark atmosphere */}
      <section className="relative">
        {/* After Eight row — red/black, matches the actual After Eight page */}
        <div className="relative py-20 md:py-28 px-6 overflow-hidden bg-[#0A0505]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <motion.span
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-1 font-style text-6xl md:text-7xl text-white/[0.06] leading-none select-none"
            >
              01
            </motion.span>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
              className="md:col-span-6 order-2 md:order-1"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#FE082C] font-semibold mb-4 block">
                For the night out
              </span>
              <h3 className="font-style text-4xl md:text-5xl text-white mb-5">After Eight</h3>
              <p className="font-text text-sm md:text-base text-white/60 leading-relaxed mb-8 max-w-md">
                GoaSaya&apos;s sand cave turns into PIK 2&apos;s bar at 8PM sharp — red light, live DJ sets,
                and a cocktail menu built for staying out late. This is the bar di PIK 2 you tell your
                friends about.
              </p>
              <Link
                href="/after-eight"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-white"
              >
                Explore After Eight
                <span className="block h-px w-8 bg-[#FE082C] group-hover:w-14 transition-all duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
              className="md:col-span-5 order-1 md:order-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/seo/goasaya-after-eight.webp"
                  alt="Bar di PIK 2 - GoaSaya After Eight"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A0A0A]/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* 1% Lounge row — reversed, deep espresso/gold for a private-VIP feel */}
        <div className="relative py-20 md:py-28 px-6 overflow-hidden bg-[#15100A]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <motion.span
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="md:col-span-1 md:order-3 font-style text-6xl md:text-7xl text-white/[0.06] leading-none select-none text-right md:text-left"
            >
              02
            </motion.span>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft}
              className="md:col-span-5 order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/rooms/onepercent/Pi-11.webp"
                  alt="Hangout spot in PIK 2 - 1% Lounge KTV"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15100A]/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}
              className="md:col-span-6 order-2"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-4 block">
                For the private one
              </span>
              <h3 className="font-style text-4xl md:text-5xl text-white mb-5">1% Lounge</h3>
              <p className="font-text text-sm md:text-base text-white/55 leading-relaxed mb-8 max-w-md">
                A private KTV room in PIK 2, built for the group that wants the door closed. Birthdays,
                office gatherings, family nights — this is the hangout spot in PIK 2 for the moments you
                don&apos;t want to share with a crowd.
              </p>
              <Link
                href="/one-percent-lounge"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-white"
              >
                Explore 1% Lounge
                <span className="block h-px w-8 bg-[#D4AF37] group-hover:w-14 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION SUMMARY */}
      <section className="relative py-20 md:py-24 px-6 border-b border-[#211712]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <motion.span
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-style text-2xl md:text-3xl text-[#211712]"
          >
            One address. Two nights.
          </motion.span>
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-text text-[#211712]/60 text-sm md:text-base leading-relaxed max-w-md md:text-right"
          >
            After Eight and 1% Lounge sit in the same PIK 2, Tangerang address — walk from one mood to the
            other without ever leaving.
          </motion.p>
        </div>
      </section>

      {/* FAQ — two-column, question list feel; ID copy kept exact to match FAQPage schema */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-4 font-style text-3xl md:text-4xl text-[#211712] leading-tight"
          >
            Questions about bar &amp; hangout di PIK 2
          </motion.h2>

          <div className="md:col-span-7 md:col-start-6 space-y-0">
            <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
              <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
                Rekomendasi bar di PIK 2 yang bagus di mana?
                <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
                GoaSaya After Eight adalah bar dan lounge eksklusif di PIK 2, buka setiap malam pukul 20.00
                dengan pencahayaan merah, DJ set, dan signature cocktails.
              </p>
            </details>

            <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
              <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
                Tempat hangout di PIK 2 selain restoran apa saja?
                <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
                GoaSaya menghadirkan dua konsep hangout di PIK 2: After Eight untuk suasana bar dan lounge
                malam, serta 1% Lounge untuk KTV room privat dan acara bareng teman atau keluarga.
              </p>
            </details>

            <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
              <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
                Apa bedanya After Eight dan 1% Lounge?
                <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
                After Eight adalah konsep bar dan lounge terbuka dengan DJ set dan cocktail, sementara 1%
                Lounge adalah ruang KTV privat yang lebih cocok untuk grup kecil, ulang tahun, atau acara
                khusus.
              </p>
            </details>

            <details className="group border-b border-[#211712]/12 py-6 cursor-pointer">
              <summary className="font-style text-lg md:text-xl text-[#211712] list-none flex justify-between items-center gap-6 group-hover:text-[#7A1F1F] transition-colors">
                Apakah perlu reservasi untuk hangout di GoaSaya PIK 2?
                <span className="shrink-0 font-text font-light text-2xl text-[#7A1F1F] group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="font-text text-sm md:text-base text-[#211712]/65 leading-relaxed mt-4 pr-8">
                Reservasi sangat disarankan, terutama untuk After Eight di malam weekend dan untuk KTV room
                di 1% Lounge, karena kapasitas terbatas.
              </p>
            </details>
          </div>
        </div>
      </section>

      <MobileStickyCta
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+know+more+about+After+Eight+and+1%25+Lounge."
        text="Chat on WhatsApp"
      />
    </main>
  );
}