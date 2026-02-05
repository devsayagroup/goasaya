// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { getAllArticles } from "@/lib/articles";

// export default async function JournalPage() {
//   const journals = await getAllArticles();
//   return (
//     <section className="w-full bg-cream overflow-hidden">
//         <div className="relative text-black pt-32 pb-20">
//             <div className="container mx-auto md:py-12 px-6 md:px-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-4xl text-black md:text-7xl font-style leading-[1] max-w-xl"
//                 >
//                     Stories & Spaces
//                 </motion.h1>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     className="max-w-md md:text-right text-gray-950"
//                 >
//                     <p className="font-text text-md leading-loose">
//                     A quiet space where memories linger from shared tables to
//                     thoughtful pauses, written as they unfold.
//                     </p>
//                 </motion.div>
//             </div>

//             <div className="container mx-auto px-6 md:px-16 py-12 md:py-24">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-18">
//                 {journals.map((journal) => (
//                     <Link
//                     key={journal.slug}
//                     href={`/journal/${journal.slug}`}
//                     className="group block"
//                     >
//                     <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 px-4 items-center">
//                         {/* <div className="relative aspect-[3/4] overflow-hidden">
//                             <Image
//                                 src={journal.heroImage}
//                                 alt={journal.title}
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div> */}
//                         <div className="relative aspect-[8/6] md:aspect-[8/12] overflow-hidden rounded-sm bg-black/5">
//                             <Image
//                             src={journal.heroImage}
//                             alt={journal.title}
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                             sizes="140px"
//                             />
//                         </div>
//                         <div>
//                             {/* <h2 className="font-style text-2xl font-light leading-snug">
//                                 {journal.title}
//                             </h2>

//                             {journal.metaDescription && (
//                                 <p className="mt-2 text-md max-w-xl text-black/85 leading-relaxed">
//                                 {journal.metaDescription}
//                                 </p>
//                             )} */}

//                             <h2 className="font-style text-xl font-light leading-snug mb-3">
//                                 {journal.title}
//                             </h2>

//                             {journal.metaDescription && (
//                             <p className="max-w-xl text-black/80 leading-relaxed font-text line-clamp-2">
//                                 {journal.metaDescription}
//                             </p>
//                             )}

//                             <span className="inline-block mt-2 text-xs uppercase tracking-widest underline underline-offset-4 text-black">
//                                 Read Journal
//                             </span>
//                         </div>
//                     </div>
//                     </Link>
//                 ))}
//                 </div>
//             </div>

//             {/* <div className="container mx-auto px-6 md:px-16 py-16 md:py-28">
//                 <div className="space-y-24">
//                     {journals.map((journal) => (
//                     <Link
//                         key={journal.slug}
//                         href={`/journal/${journal.slug}`}
//                         className="group block"
//                     >
//                         <article className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
//                         <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-black/5">
//                             <Image
//                             src={journal.heroImage}
//                             alt={journal.title}
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                             sizes="140px"
//                             />
//                         </div>

//                         <div>
//                             <h2 className="font-style text-2xl md:text-3xl font-light leading-snug mb-4 group-hover:opacity-80 transition">
//                             {journal.title}
//                             </h2>

//                             {journal.metaDescription && (
//                             <p className="max-w-2xl text-black/80 leading-relaxed font-text">
//                                 {journal.metaDescription}
//                             </p>
//                             )}

//                             <span className="inline-block mt-6 text-sm uppercase tracking-widest underline underline-offset-4 text-black">
//                             Read Journal
//                             </span>
//                         </div>
//                         </article>
//                     </Link>
//                     ))}
//                 </div>
//             </div> */}

//         </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { JournalMeta } from "@/content/articles/types";

export default function JournalClient({
  journals,
}: {
  journals: JournalMeta[];
}) {
  return (
    <section className="w-full bg-cream">
      <div className="container mx-auto pt-32 pb-20 px-6 md:px-16">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-style mb-20"
        >
          Stories & Spaces
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-24">
          {journals.map((j) => (
            <Link key={j.slug} href={`/journal/${j.slug}`} className="group">
              <div className="grid md:grid-cols-[120px_1fr] gap-8 items-center">
                <div className="relative aspect-[8/12] overflow-hidden bg-black/5">
                  <Image
                    src={j.heroImage}
                    alt={j.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div>
                  <h2 className="font-style text-xl mb-3">{j.title}</h2>
                  {j.metaDescription && (
                    <p className="text-black/80 line-clamp-2">
                      {j.metaDescription}
                    </p>
                  )}
                  <span className="inline-block mt-2 text-xs underline">
                    Read Journal
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
