// import Image from "next/image";
// import Link from "next/link";

// type JournalMeta = {
//   slug: string;
//   title: string;
//   metaDescription?: string;
//   heroImage: string;
//   publishedAt?: string;
// };

// export default function MoreJournals({
//   journals,
//   currentSlug,
// }: {
//   journals: JournalMeta[];
//   currentSlug: string;
// }) {
//   const filtered = journals.filter(
//     (journal) => journal.slug !== currentSlug
//   );

//   if (!filtered.length) return null;

//   return (
//     <section className="relative max-w-7xl mx-auto border-t border-black/10 py-24 px-6">
//       <h3 className="font-style text-3xl font-light mb-12">
//         More from GoaSaya
//       </h3>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 space-y-12">
//         {filtered.slice(0, 4).map((journal) => (
//           <Link
//             key={journal.slug}
//             href={`/journal/${journal.slug}`}
//             className="group block"
//           >
//             <article className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
//               {/* Image */}
//               <div className="relative aspect-[9/6] md:aspect-[3/4] overflow-hidden rounded-md bg-black/5">
//                 <Image
//                   src={journal.heroImage}
//                   alt={journal.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                   sizes="120px"
//                 />
//               </div>

//               {/* Text */}
//               <div>
//                 {/* {journal.publishedAt && (
//                   <p className="text-xs uppercase tracking-[0.25em] text-black/50 mb-2 font-text">
//                     {journal.publishedAt}
//                   </p>
//                 )} */}

//                 <h4 className="font-style text-xl font-light leading-snug mb-3">
//                   {journal.title}
//                 </h4>

//                 {journal.metaDescription && (
//                   <p className="max-w-xl text-black/80 leading-relaxed font-text line-clamp-2">
//                     {journal.metaDescription}
//                   </p>
//                 )}
//                 <span className="inline-block bottom-0 mt-4 text-sm uppercase tracking-widest underline underline-offset-4 text-black">
//                     Read Journal
//                 </span>
//               </div>
//             </article>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

type JournalMeta = {
  slug: string;
  title: string;
  metaDescription?: string;
  heroImage: string;
  publishedAt?: string;
};

export default function MoreJournals({
  journals,
  currentSlug,
}: {
  journals: JournalMeta[];
  currentSlug: string;
}) {
  const filtered = journals.filter(
    (journal) => journal.slug !== currentSlug
  );

  if (!filtered.length) return null;

  return (
    <section className="relative max-w-6xl mx-auto border-t border-black/10 py-24 px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h3 className="font-style text-3xl md:text-4xl font-light text-black">
          More from GoaSaya
        </h3>
        <Link 
          href="/journal" 
          className="text-xs uppercase tracking-[0.2em] underline underline-offset-4 text-black/60 hover:text-black transition-colors font-semibold"
        >
          View All Journals
        </Link>
      </div>

      {/* ✅ Upgraded to a 3-column editorial grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
        {filtered.slice(0, 3).map((journal) => (
          <Link
            key={journal.slug}
            href={`/journal/${journal.slug}`}
            className="group flex flex-col h-full"
          >
            <article className="flex flex-col gap-5 h-full">
              
              {/* Image: Stacked on top, clean 4/3 aspect ratio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-black/5">
                <Image
                  src={journal.heroImage}
                  alt={journal.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-col flex-grow">
                
                {/* Date: Restored and cleanly formatted */}
                {journal.publishedAt && (
                  <time 
                    dateTime={journal.publishedAt}
                    className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/50 mb-3 font-text font-semibold"
                  >
                    {new Date(journal.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                )}

                <h4 className="font-style text-xl md:text-2xl font-light text-black leading-snug mb-3 group-hover:text-black/70 transition-colors">
                  {journal.title}
                </h4>

                {journal.metaDescription && (
                  <p className="text-black/70 leading-relaxed font-text line-clamp-2 text-sm md:text-base mb-6">
                    {journal.metaDescription}
                  </p>
                )}
                
                {/* Read Link: Pushed to bottom so they align, added an animated arrow */}
                <div className="mt-auto pt-2">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black group-hover:translate-x-1 transition-transform duration-300">
                    Read Journal
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>

              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
