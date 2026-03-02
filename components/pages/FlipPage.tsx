"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

const HTMLFlipBook = dynamic(
  () => import("react-pageflip").then((m) => m.default),
  { ssr: false }
);

// Next.js + TS-friendly (react-pageflip typings can be overly strict)
const FlipBook = HTMLFlipBook as unknown as React.ComponentType<any>;

type CoverPages = {
  frontOuter: string;
  frontInner: string;
  backInner: string;
  backOuter: string;
};

type MenuFlipProps = {
  pages: string[];
  cover: CoverPages;

  aspectRatio?: number;        // pageW / pageH
  maxBookWidth?: number;       // desktop spread max width
  maxMobileWidth?: number;     // mobile single page max width
  containerPaddingPx?: number; // safe area subtract (avoid overflow)
};

type PageFlipApi = {
  flipNext: () => void;
  flipPrev: () => void;
  turnToPage?: (pageIndex: number) => void;
  getCurrentPageIndex?: () => number;
};
type FlipBookRef = { pageFlip: () => PageFlipApi };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function PageFrame({
  src,
  alt,
  isCover,
  spineSide,
}: {
  src?: string;
  alt: string;
  isCover?: boolean;
  spineSide: "left" | "right" | "none";
}) {
  return (
    // ✅ no padding, no border, no inner wrapper spacing
    <div className="relative h-full w-full overflow-hidden bg-white">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          // ✅ keep full page visible (recommended for menu pages)
          className="select-none object-contain"
          draggable={false}
          sizes="(max-width: 768px) 90vw, (min-width: 1024px) 920px, 90vw"
          priority={alt.includes("Cover")}
        />
      ) : (
        <div className="h-full w-full" />
      )}

      {/* realistic shadows (no paper stack) */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle outer edge falloff */}
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/10 to-transparent opacity-20" />
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/10 to-transparent opacity-18" />

        {/* inner/spine shadow (only for inside pages on spread) */}
        {!isCover && spineSide !== "none" && (
          <>
            {spineSide === "left" ? (
              <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-black/55 via-black/12 to-transparent opacity-55" />
            ) : (
              <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-black/55 via-black/12 to-transparent opacity-55" />
            )}

            {/* tiny crease highlight */}
            {spineSide === "left" ? (
              <div className="absolute inset-y-0 right-[8px] w-px bg-white/70 opacity-20" />
            ) : (
              <div className="absolute inset-y-0 left-[8px] w-px bg-white/70 opacity-20" />
            )}
          </>
        )}

        {/* top sheen */}
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/30 to-transparent opacity-20" />
      </div>
    </div>
  );
}

export default function MenuFlip({
  pages,
  cover,
  aspectRatio = 0.72,
  maxBookWidth = 880,
  maxMobileWidth = 300,
  containerPaddingPx = 40,
}: MenuFlipProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<FlipBookRef | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [usePortrait, setUsePortrait] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState({ w: 300, h: 420 });

  const bookPages = useMemo(() => {
    const base = [
      cover.frontOuter,
      cover.frontInner,
      ...pages,
      cover.backInner,
      cover.backOuter,
    ];

    // If odd, insert blank BEFORE backInner so backInner stays on the right side.
    if (base.length % 2 === 1) {
      const insertAt = base.length - 2;
      return [...base.slice(0, insertAt), "", ...base.slice(insertAt)];
    }
    return base;
  }, [cover, pages]);

  const lastIndex = bookPages.length - 1;

  // Fit-to-container sizing (prevents overflow) + mobile uses portrait flip (single side)
  useEffect(() => {
    if (!shellRef.current) return;
    const el = shellRef.current;

    const ro = new ResizeObserver(([entry]) => {
      const rawW = entry.contentRect.width;
      const safeW = Math.max(260, rawW - containerPaddingPx);

      const mobile = safeW < 768;
      setIsMobile(mobile);

      // ✅ mobile = portrait (single page). desktop/tablet switches to spread when wide.
      const portrait = mobile ? true : safeW < 900;
      setUsePortrait(portrait);

      const bookW = mobile
        ? clamp(safeW * 0.86, 240, maxMobileWidth)
        : clamp(safeW, 520, maxBookWidth);

      // react-pageflip width/height are PER PAGE
      const pageW = portrait ? Math.floor(bookW) : Math.floor(bookW / 2);
      const pageH = Math.floor(pageW / aspectRatio);

      setPageSize({ w: pageW, h: pageH });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [aspectRatio, maxBookWidth, maxMobileWidth, containerPaddingPx]);

  const goTo = (idx: number) => {
    const target = clamp(idx, 0, lastIndex);
    setPageIndex(target);

    const api = bookRef.current?.pageFlip();
    if (!api) return;

    if (api.turnToPage) {
      api.turnToPage(target);
      return;
    }

    // fallback if turnToPage not available
    const current = api.getCurrentPageIndex?.() ?? pageIndex;
    const diff = target - current;
    const steps = Math.min(Math.abs(diff), 40);
    for (let i = 0; i < steps; i++) diff > 0 ? api.flipNext() : api.flipPrev();
  };

  const prev = () => bookRef.current?.pageFlip().flipPrev();
  const next = () => bookRef.current?.pageFlip().flipNext();

  return (
    <div ref={shellRef} className="w-full">
      <div className="relative mx-auto w-full overflow-hidden">
        {/* Viewer: ✅ same flip effect on mobile + desktop (mobile is portrait single page) */}
        <div className="w-full pb-12">
          <div
            className="relative mx-auto"
            style={{ width: usePortrait ? pageSize.w : pageSize.w * 2 }}
          >
            {/* subtle center crease line on spread */}
            {!usePortrait && (
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/10 opacity-30" />
            )}

            <FlipBook
              ref={bookRef}
              width={pageSize.w}
              height={pageSize.h}
              size="fixed"
              showCover
              usePortrait={usePortrait}
              mobileScrollSupport
              drawShadow
              maxShadowOpacity={0.22}
              flippingTime={850}
              swipeDistance={30}
              onFlip={(e: any) => {
                if (typeof e?.data === "number") setPageIndex(e.data);
              }}
              className="mx-auto"
            >
              {bookPages.map((src, idx) => {
                const isCover = idx === 0 || idx === lastIndex;

                const spineSide: "left" | "right" | "none" =
                  usePortrait || isCover ? "none" : idx % 2 === 0 ? "right" : "left";

                return (
                  <div
                    key={`${src || "blank"}-${idx}`}
                    className="h-full w-full"
                    style={{ padding: 0, margin: 0 }}
                  >
                    <PageFrame
                      src={src || undefined}
                      alt={
                        isCover
                          ? `Cover ${idx === 0 ? "Front" : "Back"}`
                          : `Page ${idx + 1}`
                      }
                      isCover={isCover}
                      spineSide={spineSide}
                    />
                  </div>
                );
              })}
            </FlipBook>

            {/* outer book shadow (clean, no stack) */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{ boxShadow: "0 26px 65px rgba(0,0,0,0.18)" }}
            />
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute inset-x-0 bottom-2 flex justify-center px-3">
          <div className="w-full max-w-xl rounded-full bg-black/45 px-3 py-1 text-white backdrop-blur">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                disabled={pageIndex <= 0}
                className="rounded-full px-3 py-1 text-xs disabled:opacity-40"
              >
                Prev
              </button>

              <input
                type="range"
                min={0}
                max={lastIndex}
                value={pageIndex}
                onChange={(e) => goTo(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/25"
                aria-label="Page scroller"
              />

              <button
                type="button"
                onClick={next}
                disabled={pageIndex >= lastIndex}
                className="rounded-full px-3 py-1 text-xs disabled:opacity-40"
              >
                Next
              </button>

              <span className="hidden shrink-0 text-xs tabular-nums text-white/80 sm:block">
                {pageIndex + 1}/{bookPages.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Range thumb styling */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          border: none;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </div>
  );
}