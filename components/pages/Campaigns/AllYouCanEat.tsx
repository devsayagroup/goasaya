// "use client";

// import { motion, Variants } from "framer-motion";
// import Image from "next/image";
// // import Link from "next/link";
// import MobileStickyCta from "@/components/ui/MobileStickyCta"; 

// export default function AycePage() {
//   const staggerContainer: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 }
//     }
//   };

//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <main className="relative min-h-screen bg-[#131313] text-[#EEEDE5] overflow-hidden">
      
//       {/* HERO SECTION */}
//       <section className="relative w-full h-[85vh] lg:h-screen flex items-center justify-center">
//         {/* Background Image Setup */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/campaigns/all-you-can-eat.webp"
//             alt="Lunch Like No Other - GoaSaya AYCE"
//             fill
//             className="object-cover object-top-[30%] opacity-60"
//             priority
//           />
//           {/* Gradient Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/30 via-transparent to-[#131313]" />
//         </div>

//         {/* Hero Content */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="show"
//           className="relative z-10 flex flex-col items-center text-center px-6 mt-32 lg:mt-48"
//         >
//           <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-style text-white mb-6 drop-shadow-2xl">
//             Lunch Like<br/>No Other
//           </motion.h1>
//              <motion.span variants={fadeUp} className="text-[#FFE3AF] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 drop-shadow-md">
//             All You Can Eat | 11:00 - 15:00
//           </motion.span>
          
//           {/* <motion.div variants={fadeUp} className="flex flex-col items-center mt-4">
//             <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#FFE3AF]">
//               Explore up to 22 Menus
//             </span>
//           </motion.div> */}
//         </motion.div>
//       </section>

//       {/* DETAILS & RULES SECTION */}
//       <section className="relative z-20 py-24 bg-[#131313] border-t border-[#461B13]/30">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="p-8 md:p-12 border border-[#461B13] bg-[#131313]/50 backdrop-blur-sm rounded-sm"
//           >
//             <h2 className="text-2xl md:text-3xl font-style text-[#FFE3AF] mb-6">
//               The GoaSaya AYCE Experience
//             </h2>
//             <p className="font-text text-[#EEEDE5]/80 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
//               Elevate your midday escape. Indulge in unlimited servings of our signature Asian Progressive cuisine inside Jakarta&apos;s most breathtaking sand cave architecture. Perfect for corporate lunches, social gatherings, or a midday <em>makan cantik</em>.
//             </p>

//             {/* The Golden Rule */}
//             <div className="inline-block px-6 py-4 bg-[#461B13]/40 border border-[#FFE3AF]/20 rounded-sm">
//               <p className="text-[#FFE3AF] text-xs md:text-sm uppercase tracking-widest font-bold">
//                 Ordering Time 2 Hours
//               </p>
//               <p className="text-[#EEEDE5] text-[10px] md:text-xs uppercase tracking-wider mt-2 opacity-80">
//                 But you can stay for as long as you like
//               </p>
//             </div>

//             {/* Desktop CTA Button */}
//             <div className="mt-12">
//               <a
//                 href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+the+AYCE+Lunch+Promo!"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center px-10 py-4 bg-[#FFE3AF] text-[#131313] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#EEEDE5] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,227,175,0.1)]"
//               >
//                 Reserve Your Table
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mobile Sticky CTA for easy booking */}
//       <MobileStickyCta 
//         href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+the+AYCE+Lunch+Promo!"
//         text="Book AYCE Lunch"
//       />
//     </main>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import MobileStickyCta from "@/components/ui/MobileStickyCta";

export default function AycePage() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="relative min-h-screen bg-[#131313] text-[#EEEDE5] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] lg:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/campaigns/all-you-can-eat.webp"
            alt="AYCE di PIK 2 - GoaSaya All You Can Eat"
            fill
            className="object-cover object-[center_30%] opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/30 via-transparent to-[#131313]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center px-6 mt-32 lg:mt-48"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-style text-white mb-6 drop-shadow-2xl">
            Lunch Like<br />No Other
          </motion.h1>
          <motion.span variants={fadeUp} className="text-[#FFE3AF] text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 drop-shadow-md">
            AYCE di PIK 2 | 11:00 - 15:00
          </motion.span>

          <motion.div variants={fadeUp} className="flex flex-col items-center mt-4">
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#FFE3AF]">
              Rp 318.000 &middot; Explore up to 22 Menus
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO / KEYWORD-RICH CONTENT (EN + ID) */}
      <section className="relative z-20 py-24 bg-[#131313] ">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 border border-[#FFE3AF] bg-[#131313]/50 backdrop-blur-sm rounded-sm"
          >
            <h2 className="text-2xl md:text-3xl font-style text-[#FFE3AF] mb-6">
              The GoaSaya AYCE Experience
            </h2>
            <p className="font-text text-[#EEEDE5]/80 text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              Elevate your midday escape. Indulge in unlimited servings of our signature Asian Progressive
              cuisine inside PIK 2&apos;s most breathtaking sand cave architecture. Perfect for corporate
              lunches, social gatherings, or a midday <em>makan cantik</em>.
            </p>
            <p className="font-text text-[#EEEDE5]/70 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Mulai 18 Agustus, GoaSaya menghadirkan AYCE (All You Can Eat) di PIK 2 — nikmati hingga 22 menu
              Asian Progressive sepuasnya hanya Rp 318.000 per orang. Salah satu pilihan restoran AYCE di
              PIK 2 dengan suasana paling unik, di dalam arsitektur goa pasir yang estetik.
            </p>

            {/* The Golden Rule */}
            <div className="inline-block px-6 py-4 bg-[#461B13]/40 border border-[#FFE3AF]/20 rounded-sm">
              <p className="text-[#FFE3AF] text-xs md:text-sm uppercase tracking-widest font-bold">
                Rp 318.000 &middot; Ordering Time 2 Hours
              </p>
              <p className="text-[#EEEDE5] text-[10px] md:text-xs uppercase tracking-wider mt-2 opacity-80">
                But you can stay for as long as you like
              </p>
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+the+AYCE+Lunch+Promo!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#FFE3AF] text-[#131313] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#EEEDE5] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,227,175,0.1)]"
              >
                Reserve Your Table
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="relative z-20 py-20 bg-[#131313] border-t border-[#461B13]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-sm md:text-base uppercase tracking-[0.4em] text-[#FFE3AF] mb-8 font-bold"
          >
            22 Menu Asian Progressive
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-text text-sm md:text-base text-[#EEEDE5]/70 leading-relaxed max-w-2xl mx-auto"
          >
            Dari Gochujang Tuna Tartar, Aburi Wagyu Sushi, Rendang Croquette, Chicken Charsiu Bun, hingga
            Hoisin Duck Salad dan Crispy Prawn Signature &mdash; semua bisa dinikmati sepuasnya dalam satu
            sesi AYCE di GoaSaya PIK 2.
          </motion.p>
        </div>
      </section>

      {/* LOCATION & HOURS - local SEO / NAP consistency */}
      <section className="relative z-20 py-16 bg-[#131313] border-t border-[#461B13]/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-sm md:text-base uppercase tracking-[0.4em] text-[#FFE3AF] mb-6 font-bold"
          >
            Lokasi &amp; Jam AYCE
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="font-text text-sm md:text-base text-[#EEEDE5]/70 leading-relaxed"
          >
            AYCE GoaSaya tersedia setiap hari pukul 11.00 &ndash; 15.00, berlokasi di kawasan PIK 2,
            Tangerang. Waktu pemesanan 2 jam, namun kamu bebas nongkrong lebih lama di dalam sand cave kami.
          </motion.p>
        </div>
      </section>

      {/* FAQ - visible, mirrors faqSchema exactly */}
      <section className="relative z-20 py-20 bg-[#131313] ">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-sm md:text-base uppercase tracking-[0.4em] text-[#FFE3AF] mb-10 text-center font-bold"
          >
            Pertanyaan Seputar AYCE
          </motion.h2>
          <div className="space-y-2 font-text text-sm md:text-base text-[#EEEDE5]/70 leading-relaxed">
            <details className="group border-b border-[#FFE3AF]/40 py-5 cursor-pointer">
              <summary className="text-[#EEEDE5] font-style text-base md:text-lg list-none flex justify-between items-center group-hover:text-[#FFE3AF] transition-colors">
                Rekomendasi restoran AYCE di PIK 2?
                <span className="text-[#FFE3AF] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-3 pr-8">
                GoaSaya menawarkan pengalaman Premium AYCE di PIK 2. Anda bisa menikmati hingga 22 menu Asian
                Progressive di dalam arsitektur goa pasir yang estetik, mulai 18 Agustus.
              </p>
            </details>

            <details className="group border-b border-[#FFE3AF]/40 py-5 cursor-pointer">
              <summary className="text-[#EEEDE5] font-style text-base md:text-lg list-none flex justify-between items-center group-hover:text-[#FFE3AF] transition-colors">
                Berapa harga promo AYCE di GoaSaya PIK 2?
                <span className="text-[#FFE3AF] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-3 pr-8">
                Harga All You Can Eat (AYCE) di GoaSaya adalah Rp 318.000 per orang, berlaku setiap hari dari
                jam 11:00 hingga 15:00.
              </p>
            </details>

            <details className="group border-b border-[#FFE3AF]/40 py-5 cursor-pointer">
              <summary className="text-[#EEEDE5] font-style text-base md:text-lg list-none flex justify-between items-center group-hover:text-[#FFE3AF] transition-colors">
                Berapa lama batas waktu makan AYCE di PIK GoaSaya?
                <span className="text-[#FFE3AF] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-3 pr-8">
                Terdapat batas waktu pemesanan (ordering time) selama 2 jam, namun tamu dipersilakan untuk
                stay dan nongkrong selama yang diinginkan.
              </p>
            </details>

            <details className="group border-b border-[#FFE3AF]/40 py-5 cursor-pointer">
              <summary className="text-[#EEEDE5] font-style text-base md:text-lg list-none flex justify-between items-center group-hover:text-[#FFE3AF] transition-colors">
                Menu apa saja yang tersedia di AYCE GoaSaya?
                <span className="text-[#FFE3AF] font-light text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
              </summary>
              <p className="mt-3 pr-8">
                AYCE GoaSaya menghadirkan 22 menu Asian Progressive, termasuk Gochujang Tuna Tartar, Aburi
                Wagyu Sushi, Rendang Croquette, dan Chicken Charsiu Bun.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA for easy booking */}
      <MobileStickyCta
        href="https://wa.me/6281338382845?text=Hi+GoaSaya,+I+want+to+book+the+AYCE+Lunch+Promo!"
        text="Book AYCE Lunch"
      />
    </main>
  );
}