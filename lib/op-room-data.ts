export type RoomPricing = {
  duration: string;
  core: number;
  afterDiscount: number;
  additionalHour: {
    core: number;
    afterDiscount: number;
  };
};

export type Room = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  coverImage: string;
  gallery: string[];
  mood: string;
  capacity: string;
  pricing: RoomPricing;
  includes: string[];
  seoTitle: string;
  seoDescription: string;
};

export const rooms: Room[] = [
  {
    slug: "pink-room",
    name: "Pink Room",
    subtitle: "Soft Energy, Intimate Mood",
    description: "A refined space wrapped in warmth and subtle color. Designed for intimate conversations, relaxed evenings, and moments that feel personal.",
    coverImage: "/rooms/onepercent/Pi-10.webp",
    gallery: ["/rooms/onepercent/Pi-10.webp", "/rooms/onepercent/Pi-12.webp", "/rooms/onepercent/Pi-11.webp"],
    mood: "Gentle, warm, expressive",
    capacity: "Up to 12 pax",
    pricing: {
      duration: "3 Hours",
      core: 7000000,
      afterDiscount: 3500000,
      additionalHour: { core: 1200000, afterDiscount: 600000 },
    },
    includes: ["Private room seating", "Dedicated service staff", "Sound system access"],
    seoTitle: "Pink Room — Private Luxury Room at 1% Lounge Jakarta",
    seoDescription: "The Pink Room at 1% Lounge Jakarta offers an intimate private space with soft lighting, refined ambiance, and personalized service — ideal for exclusive gatherings.",
  },
  {
    slug: "chinese-room",
    name: "Chinese Room",
    subtitle: "Rich Heritage",
    description: "Inspired by heritage elements and deeper tones, this room offers a sense of richness and cultural depth.",
    coverImage: "/rooms/onepercent/Ch-3.webp",
    gallery: ["/rooms/onepercent/Ch-1.webp", "/rooms/onepercent/Ch-2.webp", "/rooms/onepercent/Ch-3.webp"],
    mood: "Bold, warm, heritage",
    capacity: "Up to 15 pax",
    pricing: {
      duration: "3 Hours",
      core: 9000000,
      afterDiscount: 4500000,
      additionalHour: { core: 1400000, afterDiscount: 700000 },
    },
    includes: ["Spacious private layout", "Dedicated service staff", "Premium table arrangement"],
    seoTitle: "Chinese Room — Private Heritage Room at 1% Lounge Jakarta",
    seoDescription: "Experience the Chinese Room at 1% Lounge Jakarta — a private luxury room inspired by rich heritage tones, designed for refined and exclusive gatherings.",
  },
  {
    slug: "japanese-room",
    name: "Japanese Room",
    subtitle: "Minimal Calm",
    description: "A quiet interpretation of Japanese aesthetics. Clean lines, muted tones, and a sense of intentional simplicity.",
    coverImage: "/rooms/onepercent/Jap-2.webp",
    gallery: ["/rooms/onepercent/Jap-2.webp", "/rooms/onepercent/Jap-1.webp", "/rooms/onepercent/Jap-3.webp"],
    mood: "Minimal, serene, focused",
    capacity: "Up to 19 pax",
    pricing: {
      duration: "3 Hours",
      core: 11000000,
      afterDiscount: 5500000,
      additionalHour: { core: 1600000, afterDiscount: 800000 },
    },
    includes: ["Minimalist private room", "Dedicated service staff", "Controlled sound ambiance"],
    seoTitle: "Japanese Room — Minimalist Private Room at 1% Lounge Jakarta",
    seoDescription: "The Japanese Room at 1% Lounge Jakarta offers a minimalist private space with serene ambiance, ideal for focused gatherings and intimate experiences.",
  },
  {
    slug: "classic-room",
    name: "Classic Room",
    subtitle: "Timeless Elegance",
    description: "Where tradition meets modern luxury. A balanced atmosphere for those who appreciate structure, calm, and understated refinement.",
    coverImage: "/rooms/onepercent/Cl-7.webp",
    gallery: ["/rooms/onepercent/Cl-3.webp", "/rooms/onepercent/Cl-5.webp", "/rooms/onepercent/Cl-1.webp"],
    mood: "Elegant, composed, timeless",
    capacity: "Up to 32 pax",
    pricing: {
      duration: "3 Hours",
      core: 13000000,
      afterDiscount: 6500000,
      additionalHour: { core: 2000000, afterDiscount: 1000000 },
    },
    includes: ["Largest private room", "Dedicated senior service staff", "Flexible seating layout"],
    seoTitle: "Classic Room — Elegant Private Room at 1% Lounge Jakarta",
    seoDescription: "The Classic Room at 1% Lounge Jakarta is an elegant private space offering timeless design, spacious seating, and elevated service for exclusive events.",
  },
  {
    slug: "inner-circle",
    name: "Inner Circle",
    subtitle: "Absolute Privacy",
    description: "An exclusive environment reserved for those who value discretion, privacy, and elevated service.",
    coverImage: "/rooms/onepercent/Ic-3.webp",
    gallery: ["/rooms/onepercent/Ic-1.webp", "/rooms/onepercent/Ic-2.webp", "/rooms/onepercent/Ic-3.webp"],
    mood: "Exclusive, private, elevated",
    capacity: "By invitation",
    pricing: {
      duration: "Custom",
      core: 0,
      afterDiscount: 0,
      additionalHour: { core: 0, afterDiscount: 0 },
    },
    includes: ["Highest level of privacy", "Dedicated senior team", "Custom arrangement"],
    seoTitle: "Inner Circle — Ultra-Private VIP Room at 1% Lounge Jakarta",
    seoDescription: "Inner Circle at 1% Lounge Jakarta is an invitation-only private room offering the highest level of privacy, discretion, and personalized luxury service.",
  },
];

export const formatIDR = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};