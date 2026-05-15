// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import type { JournalMeta } from "@/content/articles/types";

// // export default function JournalClient({
// //   journals,
// // }: {
// //   journals: JournalMeta[];
// // }) {
// //   return (
// //     <section className="w-full bg-cream text-black">
// //       <div className="container mx-auto pt-32 pb-20 px-6 md:px-16">

// //         <motion.h1
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-4xl md:text-7xl font-style mb-20"
// //         >
// //           Stories & Spaces
// //         </motion.h1>

// //         <div className="grid md:grid-cols-2 gap-24">
// //           {journals.map((j) => (
// //             <Link key={j.slug} href={`/journal/${j.slug}`} className="group">
// //               <div className="grid md:grid-cols-[120px_1fr] gap-8 items-center">
// //                 <div className="relative aspect-[9/6] md:aspect-[3/4] rounded-md overflow-hidden bg-black/5">
// //                   <Image
// //                     src={j.heroImage}
// //                     alt={j.title}
// //                     fill
// //                     className="object-cover group-hover:scale-105 transition"
// //                   />
// //                 </div>

// //                 <div>
// //                   <h2 className="font-style text-xl mb-3">{j.title}</h2>
// //                   {j.metaDescription && (
// //                     <p className="text-black/80 line-clamp-2">
// //                       {j.metaDescription}
// //                     </p>
// //                   )}
// //                   <span className="inline-block mt-2 text-xs underline">
// //                     Read Journal
// //                   </span>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import type { JournalMeta } from "@/content/articles/types";

// export default function JournalClient({
//   journals,
// }: {
//   journals: JournalMeta[];
// }) {
//   return (
//     // ✅ 1. Applied the dark, premium GOASAYA background with a subtle maroon glow
//     <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-[#2F0F10]/20 to-black/80 pointer-events-none" />

//       <div className="relative z-10 container mx-auto pt-32 pb-24 px-6 md:px-14">

//         {/* ✅ 2. Upgraded Header Typography */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-16 md:mb-24 text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-style uppercase tracking-wide text-white mb-4">
//             Stories & Spaces
//           </h1>
//           <p className="font-text text-sm md:text-base text-white/60 tracking-widest uppercase max-w-xl">
//             Chronicles of our subterranean sanctuary.
//           </p>
//         </motion.div>

//         {/* ✅ 3. Redesigned to a High-End Magazine Grid Layout */}
//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-24">
//           {journals.map((j, idx) => (
//             <motion.div
//               key={j.slug}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
//             >
//               <Link href={`/journal/${j.slug}`} className="group block">
//                 <div className="flex flex-col gap-6">

//                   {/* Large Premium Image Thumbnail */}
//                   <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#1a0a07] border border-white/5 shadow-2xl">
//                     <Image
//                       src={j.heroImage}
//                       alt={j.title}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                     />
//                     {/* Subtle overlay that lifts on hover for image depth */}
//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
//                   </div>

//                   {/* Text Content Below Image */}
//                   <div className="flex flex-col items-start px-2">
//                     <h2 className="font-style text-2xl md:text-3xl text-white mb-3 group-hover:text-[#FFE3AF] transition-colors duration-300">
//                       {j.title}
//                     </h2>
                    
//                     {j.metaDescription && (
//                       <p className="font-text text-white/70 line-clamp-2 leading-relaxed mb-5">
//                         {j.metaDescription}
//                       </p>
//                     )}
                    
//                     {/* Animated "Read Journal" button with an arrow */}
//                     <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#FFE3AF] font-semibold group-hover:translate-x-2 transition-transform duration-300">
//                       Read Journal
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12h14"></path>
//                         <path d="M12 5l7 7-7 7"></path>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { JournalMeta } from "@/content/articles/types";

export default function JournalClient({
  journals,
}: {
  journals: JournalMeta[];
}) {
  // ✅ 1. State to track how many journals to show (Starts at 4)
  const [visibleCount, setVisibleCount] = useState(4);
  
  // ✅ 2. Slice the array to only show the visible ones
  const visibleJournals = journals.slice(0, visibleCount);
  
  // ✅ 3. Check if there are more journals left to load
  const hasMore = visibleCount < journals.length;

  const handleLoadMore = () => {
    // Load 4 more articles each time the button is clicked
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    // ✅ Restored the bg-cream and text-black classic editorial theme
    <section className="relative w-full min-h-screen bg-cream text-black overflow-hidden">
      <div className="relative z-10 container mx-auto pt-32 pb-24 px-6 md:px-14">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-style uppercase tracking-wide text-black mb-4">
            Stories & Spaces
          </h1>
          <p className="font-text text-sm md:text-base text-black/60 tracking-widest uppercase max-w-xl">
            Chronicles of our subterranean sanctuary.
          </p>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-24">
          {visibleJournals.map((j, idx) => (
            <motion.div
              key={j.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/journal/${j.slug}`} className="group block">
                <div className="flex flex-col gap-6">

                  {/* Image Thumbnail */}
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-black/5">
                    <Image
                      src={j.heroImage}
                      alt={j.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-start px-2">
                    
                    {j.publishedAt && (
                      <time 
                        dateTime={j.publishedAt}
                        className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/50 mb-3 font-text font-semibold"
                      >
                        {new Date(j.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                    )}

                    <h2 className="font-style text-2xl md:text-3xl text-black mb-3 group-hover:text-black/60 transition-colors duration-300">
                      {j.title}
                    </h2>
                    
                    {j.metaDescription && (
                      <p className="font-text text-black/70 line-clamp-2 leading-relaxed mb-5">
                        {j.metaDescription}
                      </p>
                    )}
                    
                    <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Read Journal
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-24 flex justify-center"
          >
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 border border-black text-black uppercase tracking-widest text-xs font-semibold hover:bg-black hover:text-white transition-colors duration-300 rounded-sm"
            >
              Load More
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}