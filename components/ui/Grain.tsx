import Image from "next/image";

export default function Grain({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay ${className}`}
    >
      <Image
        src="/rooms/onepercent/Grain.webp"
        alt="grain texture"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
