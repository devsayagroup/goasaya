"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

interface FacilityItem {
    title: string;
    icon: React.FC;
}

interface RoomItem {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    capacity: string;
    deposit: string;
    image: string;
    features: {
        label: string;
        icon: React.FC;
    }[];
}

type IconDotProps = {
  className?: string;
};

// const IconBase: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <svg
//     width="40"
//     height="40"
//     viewBox="0 0 24 24"
//     fill="none"
//     aria-hidden="true"
//   >
//     {children}
//   </svg>
// );

/* ----------------------------------------------------
   ICON BASE
---------------------------------------------------- */
const IconBase: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    {children}
  </svg>
);


const IconCave: React.FC = () => (
  <IconBase>
    <path
      d="M3 12c2-6 6-8 9-8s7 2 9 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2 20h20" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

const IconRoom: React.FC = () => (
  <IconBase>
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

const IconDining: React.FC = () => (
  <IconBase>
    <path d="M7 3v13" stroke="currentColor" strokeWidth="1.6" />
    <path d="M11 3v13" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

// const IconSmoking: React.FC = () => (
//   <IconBase>
//     <path d="M3 13h12v3H3z" stroke="currentColor" strokeWidth="1.6" />
//     <path d="M15 13c1 1 2 1 2 3" stroke="currentColor" strokeWidth="1.6" />
//   </IconBase>
// );

// const IconTV: React.FC = () => (
//   <IconBase>
//     <rect
//       x="2"
//       y="4"
//       width="20"
//       height="14"
//       rx="2"
//       stroke="currentColor"
//       strokeWidth="1.6"
//     />
//     <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" />
//   </IconBase>
// );

const IconPet: React.FC = () => (
  <IconBase>
    <path
      d="M12 11c1.5-2 3-2 4-2s2 1 2 2-1 2-2 2-2 0-4-2z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="6" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

// const IconDecor: React.FC = () => (
//   <IconBase>
//     <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" />
//     <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" />
//   </IconBase>
// );

// const IconDecor2: React.FC = () => (
//   <IconBase>
//     <path d="M12 4l3 8H9l3-8z" stroke="currentColor" strokeWidth="1.6" />
//     <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
//   </IconBase>
// );

// const IconMenu: React.FC = () => (
//   <IconBase>
//     <path d="M4 6h16" stroke="currentColor" strokeWidth="1.6" />
//     <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" />
//     <path d="M4 18h16" stroke="currentColor" strokeWidth="1.6" />
//   </IconBase>
// );

// const IconClock: React.FC = () => (
//   <IconBase>
//     <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
//     <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.6" />
//   </IconBase>
// );

// const IconDot: React.FC<IconDotProps> = ({ className }) => (
//   <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="12" r="5" fill="currentColor" />
//   </svg>
// );


/* ----------------------------------------------------
   ICONS
---------------------------------------------------- */

/* Capacity Icon (people silhouettes) */
const IconCapacity: React.FC = () => (
  <IconBase>
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M4.5 18c0-3 2-4.5 3.5-4.5s3.5 1.5 3.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12.5 18c0-3 2-4.5 3.5-4.5s3.5 1.5 3.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </IconBase>
);

/* TV Icon (existing) */
const IconTV: React.FC = () => (
  <IconBase>
    <rect
      x="2"
      y="4"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M8 20h8" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Smoking Icon (existing) */
const IconSmoking: React.FC = () => (
  <IconBase>
    <path d="M3 13h12v3H3z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M15 13c1 1 2 1 2 3" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Menu Icon (existing) */
const IconMenu: React.FC = () => (
  <IconBase>
    <path d="M4 6h16" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 18h16" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Camera Icon (Photographer) */
const IconCamera: React.FC = () => (
  <IconBase>
    <rect
      x="3"
      y="7"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8 7l2-3h4l2 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Decoration Icon (existing) */
const IconDecor: React.FC = () => (
  <IconBase>
    <path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Decoration (self-decor allowed) */
const IconDecor2: React.FC = () => (
  <IconBase>
    <path d="M12 4l3 8H9l3-8z" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Mic Icon (MC / Host) */
const IconMic: React.FC = () => (
  <IconBase>
    <rect
      x="9"
      y="2"
      width="6"
      height="10"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12 12v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 18h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </IconBase>
);

/* Music Icon (Band / DJ) */
const IconMusic: React.FC = () => (
  <IconBase>
    <path
      d="M8 5v10a3 3 0 1 0 2 2.8V9l8-2v6a3 3 0 1 0 2 2.8V3L8 5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

/* Clock Icon (Photoshoot duration) */
const IconClock: React.FC = () => (
  <IconBase>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" />
  </IconBase>
);

/* Dot Icon (bullet) */
const IconDot: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" fill="currentColor" />
  </svg>
);



const FACILITIES_OVERVIEW: FacilityItem[] = [
  { title: "4 Goa Areas", icon: IconCave },
  { title: "2 Private Rooms", icon: IconRoom },
  { title: "Main Dining Room", icon: IconDining },
  { title: "Smoking Room", icon: IconSmoking },
  { title: "75” TV in every room", icon: IconTV },
//   { title: "Pet-friendly", icon: IconPet },
  { title: "In-house or external decoration", icon: IconDecor },
  { title: "Decor-friendly policy", icon: IconDecor2 },
  { title: "Set menu or à la carte", icon: IconMenu },
//   { title: "Free 1-hour extension every 3-hour booking", icon: IconClock },
//   { title: "Free 1-hour extension*", icon: IconClock },
];

const ROOMS: RoomItem[] = [
  {
    id: "the-hole",
    title: "The Hole",
    subtitle: "Intimate, warm, and fully private.",
    price: "IDR 10,000,000",
    capacity: "10–12",
    deposit: "50%",
    image: "/images/goa1.jpg",
    features: [
      { label: "10–12 Capacity", icon: IconCapacity },
      { label: "LED TV 75”", icon: IconTV },
      { label: "Smoking Area", icon: IconSmoking },
      { label: "Set Menu", icon: IconMenu },
      { label: "Photographer", icon: IconCamera },
      { label: "Decoration", icon: IconDecor },
    ],
  },

  {
    id: "the-cave",
    title: "The Cave",
    subtitle: "Perfect for small gatherings or private meetings.",
    price: "IDR 6,500,000",
    capacity: "6–8",
    deposit: "50%",
    image: "/images/goa1.jpg",
    features: [
      { label: "6–8 Capacity", icon: IconCapacity },
      { label: "LED TV 75”", icon: IconTV },
      { label: "Smoking Area", icon: IconSmoking },
      { label: "Set Menu", icon: IconMenu },
      { label: "Photographer", icon: IconCamera },
      { label: "Decoration", icon: IconDecor },
    ],
  },

  {
    id: "glass-room",
    title: "Glass Room",
    subtitle: "Bright by day, glowing by night.",
    price: "IDR 15,000,000",
    capacity: "25–28",
    deposit: "50%",
    image: "/images/goa1.jpg",
    features: [
      { label: "25–28 Capacity", icon: IconCapacity },
      { label: "LED TV 75”", icon: IconTV },
      { label: "Smoking Area", icon: IconSmoking },
      { label: "Set Menu", icon: IconMenu },
      { label: "Photographer", icon: IconCamera },
      { label: "Decoration", icon: IconDecor },
    ],
  },

  {
    id: "main-dining",
    title: "Main Dining Room",
    subtitle: "The heart of Goa Saya.",
    price: "IDR 35,000,000",
    capacity: "30–50",
    deposit: "50%",
    image: "/images/goa1.jpg",
    features: [
      { label: "30–50 Capacity", icon: IconCapacity },
      { label: "LED TV 75”", icon: IconTV },
      { label: "MC or Host", icon: IconMic },
      { label: "Set Menu", icon: IconMenu },
      { label: "Photographer", icon: IconCamera },
      { label: "Decoration", icon: IconDecor },
    ],
  },

  {
    id: "a-whole-goa",
    title: "A Whole Goa",
    subtitle: "An unforgettable full-space experience.",
    price: "IDR 100,000,000",
    capacity: "94",
    deposit: "50%",
    image: "/images/goa1.jpg",
    features: [
      { label: "94 Capacity", icon: IconCapacity },
      { label: "LED TV 75”", icon: IconTV },
      { label: "MC or Host", icon: IconMic },
      { label: "Band or DJ", icon: IconMusic },
      { label: "Set Menu", icon: IconMenu },
      { label: "Photographer", icon: IconCamera },
      { label: "Decoration", icon: IconDecor },
    ],
  },

  {
    id: "shooting-venue",
    title: "Shooting Venue",
    subtitle: "A simple and flexible option for small celebrations.",
    price: "IDR 10.000.000",
    capacity: "",
    deposit: "50%",
    image: "/images/goa1.jpg",
    features: [
      { label: "3 Hours (07:00–10:00)", icon: IconClock },
      { label: "Self-decor allowed", icon: IconDecor2 },
    ],
  },
];


const SectionTitle: React.FC<{
  title: string;
  intro?: string;
}> = ({ title, intro }) => {
  return (
    <div className="mb-8 md:mb-12">
    
      <h2 className="text-3xl md:text-4xl font-style text-white mb-4">
        {title}
      </h2>
      {intro && <p className="leading-loose text-gray-300 max-w-md">{intro}</p>}
    </div>
  );
};


const RoomPanel: React.FC<{ room: RoomItem; idx: number }> = ({
  room,
  idx,
}) => {
  return (
    <section id={room.id} className="relative scroll-mt-32 md:scroll-mt-36">
      <div className="grid md:grid-cols-2 gap-2 items-start">
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="bg-white/3 p-6 md:p-8 rounded-lg backdrop-blur-md">
            <div className="flex flex-row justify-between gap-4 mb-6">
                <div className="flex flex-col">
                    <h3 className="text-2xl md:text-3xl text-white uppercase font-style">
                    {room.title}
                    </h3>
                    <p className="text-sm text-gray-300">{room.subtitle}</p>
                </div>
            </div>

            <div className="flex items-start gap-6 md:gap-12 mb-8">
                <div>
                <p className="text-sm text-gray-300">Price</p>
                <p className="text-2xl md:text-3xl text-white font-semibold">
                    {room.price}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    *Exclude Tax & Service
                </p>
                </div>
                <div>
                <p className="text-sm text-gray-300">Payment terms</p>
                <p className="text-3xl text-white font-semibold">{room.deposit}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {room.features.map((item, i) => {
                    const Icon = item.icon;
                    return (
                    <div key={i} className="flex items-center gap-3">
                        
                        <div className="w-6 h-6 flex items-center justify-center text-white">
                            <Icon />
                        </div>

                        <p className="text-sm text-gray-200">{item.label}</p>
                    </div>
                    );
                })}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <Link
                href="/reservation"
                className="bg-creamlight text-black font-text text-center md:text-left px-5 py-2 rounded-md font-semibold"
                >
                Request Booking
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};


const FacilitiesPage: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftRaw = useTransform(scrollYProgress, [0, 1], ["-60px", "40px"]);
  const rightRaw = useTransform(scrollYProgress, [0, 1], ["40px", "-60px"]);

  const yLeft = useSpring(leftRaw, { stiffness: 60, damping: 22, mass: 0.25 });
  const yRight = useSpring(rightRaw, { stiffness: 60, damping: 22, mass: 0.25 });

  return (
    <main ref={ref} className="relative min-h-screen bg-[#3b1f17] text-white" id="top">
        <div className="absolute inset-0">
            <Image
            src="/images/Japanese_Theme_Karaoke_2.jpg"
            alt="Asian dining background"
            fill
            priority
            className="object-fit object-center brightness-75"
            />
            <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <section className="relative container mx-auto py-32 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-14 md:items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-style uppercase leading-tight max-w-xl"
                >
                    Facilities at GoaSaya
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-8 md:mt-0 md:text-right max-w-lg text-gray-300"
                >
                    <p className="font-text text-md leading-loose">
                        GoaSaya is a hidden sanctuary inspired by the intimacy of a cave.
                        Natural stone textures, warm lighting and considered service
                        create a calm, memorable place for gatherings of any kind.
                    </p>
                    <div className="mt-4 flex justify-start md:justify-end gap-4">
                        <Link
                        href="/reservation"
                        className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
                        >
                        Enquiry & Book
                        </Link>
                        <Link
                        href="/menu"
                        className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
                        >
                        See Menu
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>

        <section className="relative container flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-14 py-6 md:py-24">
            <SectionTitle
            //   eyebrow="About Our Facilities"
            title="About Our Home"
            intro="Perfectly positioned within PIK 2’s entertainment district, GoaSaya is surrounded by Jakarta’s most exciting lifestyle destinations."
            />

            <div className="max-w-2xl grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {FACILITIES_OVERVIEW.map((item, idx) => {
                const Icon = item.icon;
                return (
                <div
                    key={idx}
                    className="flex flex-col items-center text-center gap-3 p-2"
                >
                    <div className="text-white">
                        <Icon />
                    </div>
                    <p className="text-sm text-gray-200">{item.title}</p>
                </div>
                );
            })}
            </div>
        </section>

        <section className="relative w-full bg-black px-6 md:px-14 py-32">
            <div className="container mx-auto flex gap-6">

            <div className="w-full lg:w-3/4 space-y-24">
                {ROOMS.map((room, idx) => (
                <RoomPanel key={room.id} room={room} idx={idx} />
                ))}
            </div>

            <aside className="hidden lg:block w-1/4 sticky top-36 self-start">
                <div className="bg-white/3 p-6 rounded-lg">
                <p className="text-xs uppercase tracking-widest text-gray-300 mb-4">
                    Explore rooms
                </p>

                <nav className="flex flex-col gap-3">
                    {ROOMS.map((room) => (
                    <a
                        href={`#${room.id}`}
                        key={room.id}
                        className="text-sm text-white hover:text-white transition"
                    >
                        {room.title}
                    </a>
                    ))}
                </nav>

                <div className="mt-6">
                    <Link
                    href="/reservation"
                    className="block bg-[#FFE3AF] text-[#3b1f17] px-4 py-2 rounded-lg text-center font-semibold"
                    >
                    Request Availability
                    </Link>
                </div>
                </div>
            </aside>
            </div>
        </section>

        <section className="relative bg-[#2f160f] py-36">
            <div className="absolute inset-0">
                <Image
                src="/images/Japanese_Theme_Karaoke_2.jpg"
                alt="Asian dining background"
                fill
                priority
                className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-black/75"></div>
            </div>
            <div className="relative container mx-auto px-6 md:px-12 text-center">
                <h3 className="text-4xl font-style text-white leading-snug uppercase mb-4">
                    Ready to host your moment?
                </h3>
                <p className="text-gray-300 max-w-xl font-text mx-auto mb-6">
                    Get in touch for bespoke packages and availability. We will help you
                    plan every detail.
                </p>
                <Link
                    href="/reservation"
                    className="inline-block bg-creamlight text-black px-8 py-3 rounded-md font-semibold shadow"
                >
                    Enquire Now
                </Link>
            </div>
        </section>
    </main>
  );
};

export default FacilitiesPage;
