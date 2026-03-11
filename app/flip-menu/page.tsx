
// import Head from "../head";
// import MenuFlip from "@/components/pages/FlipPage";

// export default async function flipmenu() {
//     const pages = Array.from({ length: 70 }, (_, i) => `/flip/${i + 1}.webp`);

//     const cover = {
//     frontOuter: "/flip/1.webp",
//     frontInner: "/flip/2.webp",
//     backInner: "/flip/69.webp",
//     backOuter: "/flip/70.webp",
//     };

//     const coverSet = new Set([
//     "/flip/1.webp",
//     "/flip/2.webp",
//     "/flip/69.webp",
//     "/flip/70.webp",
//     ]);
//     const pagesWithoutCover = pages.filter((p) => !coverSet.has(p));
//     return (
//         <>
//         <Head 
//                 title= "Menu of Goasaya"
//                 description= "Host your exclusive events at GOASAYA — from private celebrations to corporate gatherings. Our elegant cave-inspired venue offers intimate settings, curated menus, and tailored service for unforgettable moments."
//                 url="https://www.goasaya.com"
//                 keywords="private dining, event venue restaurant, corporate dinner, luxury event space, exclusive dining experience, private restaurant booking"
//                 image="https://www.goasaya.com/logo/09.jpg"
//             />
//             <div className="my-24">
//                 {/* <MenuFlip pages={pages} /> */}
//                 <MenuFlip pages={pagesWithoutCover} cover={cover} />
//             </div>
//         </>
//     )
// }

import MenuFlip from "@/components/pages/FlipPage";
import Head from "../head";

export default function MenuPage() {
  const pages = Array.from({ length: 66 }, (_, i) => `/flip/${i + 3}.webp`);

  const cover = {
    frontOuter: "/flip/1.webp",
    frontInner: "/flip/2.webp",
    backInner: "/flip/back-cover-inner.webp",
    backOuter: "/flip/back-cover-outer.webp",
  };

  return (
    <main className="min-h-screen bg-[#4A3326] text-white">
      <header className="sticky top-0 z-10 h-14 bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-4">
          <div className="text-sm tracking-[0.35em]">GOASAYA</div>
        </div>
      </header>

      {/* Viewer */}
      <section className="mx-auto max-w-6xl justify-center p-4">
        <div className="rounded-2xl bg-[#4A3326] p-4 text-zinc-900">
          <MenuFlip
            pages={pages}
            cover={cover}
            maxMobileWidth={340}      // ✅ smaller on mobile
            maxBookWidth={880}
            containerPaddingPx={60}   // ✅ prevents “outside container”
          />
        </div>
      </section>
    </main>
  );
}