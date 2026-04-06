"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

const HTMLFlipBook = dynamic(
  () => import("react-pageflip").then((m) => m.default),
  { ssr: false }
);

// Next.js + TS-friendly
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
  aspectRatio?: number;
  maxBookWidth?: number;
  containerPaddingPx?: number;
};

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
    <div className="relative h-full w-full overflow-hidden bg-[#fcfcfc]">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="select-none object-contain"
          draggable={false}
          sizes="(max-width: 768px) 50vw, 500px"
          priority={isCover}
        />
      ) : (
        <div className="h-full w-full bg-[#fcfcfc]" />
      )}

      {/* Static Resting Shadows: Strictly inside pages only */}
      {!isCover && spineSide !== "none" && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {spineSide === "left" ? (
            <>
              <div className="absolute inset-y-0 right-0 w-8 sm:w-14 bg-gradient-to-l from-black/40 via-black/5 to-transparent opacity-80" />
              <div className="absolute inset-y-0 right-[1px] w-px bg-white/40" />
            </>
          ) : (
            <>
              <div className="absolute inset-y-0 left-0 w-8 sm:w-14 bg-gradient-to-r from-black/40 via-black/5 to-transparent opacity-80" />
              <div className="absolute inset-y-0 left-[1px] w-px bg-white/40" />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function MenuFlip({
  pages,
  cover,
  aspectRatio = 0.72,
  maxBookWidth = 1000,
  containerPaddingPx = 32,
}: MenuFlipProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<any>(null);

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

    if (base.length % 2 === 1) {
      const insertAt = base.length - 2;
      return [...base.slice(0, insertAt), "", ...base.slice(insertAt)];
    }
    return base;
  }, [cover, pages]);

  const lastIndex = bookPages.length - 1;

  useEffect(() => {
    if (!shellRef.current) return;
    const el = shellRef.current;

    const ro = new ResizeObserver(([entry]) => {
      window.requestAnimationFrame(() => {
        const rawW = entry.contentRect.width;
        const isMobile = rawW < 768;
        
        const activePadding = isMobile ? 8 : containerPaddingPx;
        const safeW = Math.max(260, rawW - activePadding);

        const bookW = Math.min(safeW, maxBookWidth);
        const pageW = Math.floor(bookW / 2);
        const pageH = Math.floor(pageW / aspectRatio);

        setPageSize({ w: pageW, h: pageH });
      });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [aspectRatio, maxBookWidth, containerPaddingPx]);

  const goTo = (idx: number) => {
    const target = clamp(idx, 0, lastIndex);
    setPageIndex(target);
    bookRef.current?.pageFlip()?.turnToPage(target);
  };

  const prev = () => bookRef.current?.pageFlip()?.flipPrev();
  const next = () => bookRef.current?.pageFlip()?.flipNext();

  return (
    // ✅ FIX: Added overflow-hidden to the outermost shell wrapper to kill the scrollbars completely
    <div ref={shellRef} className="w-full flex flex-col items-center overflow-hidden">
      
      {/* ✅ FIX: Added overflow-hidden here as well to trap the 3D flipping animation */}
      <div className="relative w-full pb-10 overflow-hidden">
        <div
          className="relative mx-auto"
          style={{ width: pageSize.w * 2 }}
        >
          {/* subtle center crease line on spread */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-50 w-px -translate-x-1/2 bg-black/10 opacity-30" />

          <FlipBook
            ref={bookRef}
            width={pageSize.w}
            height={pageSize.h}
            size="fixed"
            showCover={true}
            usePortrait={false} 
            mobileScrollSupport={true}
            useMouseEvents={true} 
            drawShadow={true} 
            maxShadowOpacity={0.25} 
            showPageCorners={true} // Restored the natural hover fold
            flippingTime={900} 
            swipeDistance={30}
            onFlip={(e: any) => {
              if (typeof e?.data === "number") setPageIndex(e.data);
            }}
            className="mx-auto drop-shadow-2xl"
          >
            {bookPages.map((src, idx) => {
              const isCover = idx === 0 || idx === lastIndex;
              const spineSide = isCover ? "none" : idx % 2 === 0 ? "right" : "left";

              return (
                <div key={idx} className="h-full w-full bg-white">
                  <PageFrame
                    src={src || undefined}
                    alt={isCover ? `Cover` : `Page ${idx + 1}`}
                    isCover={isCover}
                    spineSide={spineSide}
                  />
                </div>
              );
            })}
          </FlipBook>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex w-full max-w-xl flex-col items-center px-4">
        <div className="w-full rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur shadow-lg border-t border-white/10">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              disabled={pageIndex <= 0}
              className="text-xs font-semibold uppercase tracking-wider disabled:opacity-40"
            >
              Prev
            </button>

            <input
              type="range"
              min={0}
              max={lastIndex}
              value={pageIndex}
              onChange={(e) => goTo(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-white outline-none"
            />

            <button
              onClick={next}
              disabled={pageIndex >= lastIndex}
              className="text-xs font-semibold uppercase tracking-wider disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
        
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/50 md:hidden">
          Rotate phone for larger view
        </p>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: #fff;
        }
        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: #fff;
          border: none;
        }
      `}</style>
    </div>
  );
}