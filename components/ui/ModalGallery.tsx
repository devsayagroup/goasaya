import { useState } from "react";
import Image from "next/image";

interface ModalGalleryProps {
  content: string | string[];
  title: string;
}

function ModalGallery({ content, title }: ModalGalleryProps) {
  const images = Array.isArray(content) ? content : [content];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () =>
    setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);

  const showNext = () =>
    setActiveIndex((prev) => (prev! + 1) % images.length);

  return (
    <>
      {/* --- Gallery Layout --- */}
      <div
        className={`grid gap-4 ${
          images.length > 2
            ? "grid-cols-2 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer group relative rounded-md overflow-hidden"
            onClick={() => openModal(i)}
          >
            <Image
              src={img}
              alt={`${title} - image ${i + 1}`}
              width={100}
              height={100}
              className="rounded-md object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>

      {/* --- FULLSCREEN MODAL --- */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center">
          
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-light"
          >
            ×
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-6 text-white text-4xl select-none"
            >
              ‹
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={showNext}
              className="absolute right-6 text-white text-4xl select-none"
            >
              ›
            </button>
          )}

          {/* Fullscreen Image */}
          <div className="relative w-[90%] max-w-4xl h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt={`${title} - preview`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ModalGallery;
