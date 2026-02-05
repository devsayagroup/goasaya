// import Link from "next/link";
// import Image from "next/image";
// import { getAllArticles } from "@/lib/articles";

// export const metadata = {
//   title: "Journal | Goasaya",
//   description:
//     "Stories, spaces, and ideas that shape the Goasaya experience in PIK 2.",
// };

// export default async function JournalPage() {
//   const journals = await getAllArticles();

//   return (
//     <main className="bg-stone-950 text-white">
//       {/* ================= HEADER ================= */}
//       <section className="px-6 pt-40 pb-32">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-xs uppercase tracking-[0.3em] text-white/50">
//             Journal
//           </p>

//           <h1 className="mt-6 text-5xl md:text-6xl font-light leading-tight">
//             Stories & Spaces
//           </h1>

//           <p className="mt-8 max-w-xl text-white/60 leading-relaxed">
//             A curated journal exploring the architecture, atmosphere, and
//             philosophy behind Goasaya in PIK 2.
//           </p>
//         </div>
//       </section>

//       {/* ================= JOURNAL LIST ================= */}
//       <section className="px-6 pb-40">
//         <div className="max-w-6xl mx-auto space-y-40">
//           {journals.map((journal) => (
//             <Link
//               key={journal.slug}
//               href={`/articles/${journal.slug}`}
//               className="group block"
//             >
//               {/* Image */}
//               <div className="relative aspect-[16/9] overflow-hidden">
//                 <Image
//                   src={journal.heroImage}
//                   alt={journal.title}
//                   fill
//                   className="object-cover transition-opacity duration-500 group-hover:opacity-80"
//                 />
//               </div>

//               {/* Meta */}
//               <div className="mt-8 max-w-3xl">
//                 <p className="text-xs uppercase tracking-[0.3em] text-white/50">
//                   {journal.publishedAt} · {journal.location}
//                 </p>

//                 <h2 className="mt-4 text-3xl md:text-4xl font-light leading-snug">
//                   {journal.title}
//                 </h2>

//                 {journal.metaDescription && (
//                   <p className="mt-4 text-white/60 leading-relaxed">
//                     {journal.metaDescription}
//                   </p>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";
// import { getAllArticles } from "@/lib/articles";

// export const metadata = {
//   title: "Journal | Goasaya",
//   description: "Notes, spaces, and stories from Goasaya PIK 2.",
// };

// export default async function JournalPage() {
//   const journals = await getAllArticles();

//   return (
//     <main className="bg-stone-950 text-white">
//       {/* ================= HEADER ================= */}
//       <section className="px-6 pt-40 pb-24">
//         <div className="max-w-4xl mx-auto">
//           <p className="text-xs uppercase tracking-[0.3em] text-white/50">
//             Journal
//           </p>

//           <h1 className="mt-6 text-5xl font-style font-light leading-tight">
//             Stories & Spaces
//           </h1>

//           <p className="mt-8 max-w-md text-white/60 leading-relaxed">
//             A curated journal exploring space, atmosphere, and moments
//             inside Goasaya PIK 2.
//           </p>
//         </div>
//       </section>

//       {/* ================= LIST ================= */}
//       <section className="px-6 pb-40">
//         <div className="max-w-4xl mx-auto space-y-24">
//           {journals.map((journal) => (
//             <Link
//               key={journal.slug}
//               href={`/journal/${journal.slug}`}
//               className="group block"
//             >
//               <div className="grid grid-cols-[120px_1fr] gap-8 items-start">
//                 {/* Thumbnail */}
//                 <div className="relative aspect-[3/4] overflow-hidden">
//                   <Image
//                     src={journal.heroImage}
//                     alt={journal.title}
//                     fill
//                     className="object-cover transition-opacity duration-300 group-hover:opacity-70"
//                   />
//                 </div>

//                 {/* Text */}
//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-white/40">
//                     {journal.publishedAt}
//                   </p>

//                   <h2 className="mt-3 text-2xl font-light leading-snug">
//                     {journal.title}
//                   </h2>

//                   {journal.metaDescription && (
//                     <p className="mt-4 max-w-xl text-white/60 leading-relaxed">
//                       {journal.metaDescription}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// import Head from "../head";
// import JournalPage from "@/components/pages/JournalPage";

// export default function Journal() {
//   return (
//     <>
//         <Head 
//             title= "Journal of GoaSaya"
//             description= "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings. Our elegant cave-inspired venue offers intimate settings, curated menus, and tailored service for unforgettable moments."
//             url="https://www.goasaya.com"
//             keywords="private dining, event venue restaurant, corporate dinner, luxury event space, exclusive dining experience, private restaurant booking"
//             image="https://www.goasaya.com/logo/09.jpg"
//         />
//         <JournalPage/>
//     </>
//   );
// }
import Head from "../head";
import { getAllArticles } from "@/lib/articles";
import JournalClient from "@/components/pages/JournalPage";

export default async function Journal() {
  const journals = getAllArticles();
  return (

    <>
       <Head 
            title= "Journal of GoaSaya"
            description= "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings. Our elegant cave-inspired venue offers intimate settings, curated menus, and tailored service for unforgettable moments."
            url="https://www.goasaya.com"
            keywords="private dining, event venue restaurant, corporate dinner, luxury event space, exclusive dining experience, private restaurant booking"
            image="https://www.goasaya.com/logo/09.jpg"
        />
      <JournalClient journals={journals} />;
    </>
  )
}
