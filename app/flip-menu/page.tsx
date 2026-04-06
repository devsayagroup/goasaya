import MenuFlip from "@/components/pages/FlipPage";

export default function MenuPage() {
  const pages = Array.from({ length: 66 }, (_, i) => `/flip/${i + 3}.webp`);

  const cover = {
    frontOuter: "/flip/1.webp",
    frontInner: "/flip/2.webp",
    backInner: "/flip/back-cover-inner.webp",
    backOuter: "/flip/back-cover-outer.webp",
  };

  return (
    <main className="min-h-screen bg-[#4A3326] text-white overflow-x-hidden">
      <header className="sticky top-0 z-10 h-14 bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-center px-4">
          <div className="text-sm tracking-[0.35em]">GOASAYA</div>
        </div>
      </header>

      {/* Viewer Container */}
      <section className="mx-auto max-w-6xl justify-center p-2 sm:p-4">
        <div className="rounded-2xl bg-[#4A3326] py-4 text-zinc-900">
          <MenuFlip
            pages={pages}
            cover={cover}
            maxBookWidth={1000} 
            containerPaddingPx={32} 
          />
        </div>
      </section>
    </main>
  );
}