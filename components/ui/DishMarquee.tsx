"use client";

import { motion, Easing } from "framer-motion";
import Image from "next/image";

interface Dish {
  id: number;
  name: string;
  src: string;
}

const row1: Dish[] = [
  { id: 1, name: "Spicy Tofu Nugget", src: "/images/ayce/1.png" },
  { id: 2, name: "Oyster Mushroom Satai", src: "/images/ayce/2.png" },
  { id: 3, name: "Tropical salt Kiss", src: "/images/ayce/3.png" },
  { id: 4, name: "Kecap Manis Cheesecake", src: "/images/ayce/4.png" },
  { id: 5, name: "Crispy Prawn Signature Roll", src: "/images/ayce/5.png" },
];

const row2: Dish[] = [
  { id: 6, name: "Grill Kraken", src: "/images/ayce/6.png" },
  { id: 7, name: "Raspberry Chocolate Rose", src: "/images/ayce/7.png" },
  { id: 8, name: "Coconut Butterfly", src: "/images/ayce/8.png" },
  { id: 9, name: "Atlantic Soyu Salmon", src: "/images/ayce/9.png" },
  { id: 10, name: "Grilled Enoki Mushroom", src: "/images/ayce/10.png" },
];

const row3: Dish[] = [
  { id: 11, name: "Vegetable Quesadillas", src: "/images/ayce/11.png" },
  { id: 12, name: "Strawberry Matcha Latte Mille Feuille", src: "/images/ayce/12.png" },
  { id: 13, name: "Chicken Corn Soup", src: "/images/ayce/13.png" },
  { id: 14, name: "Chukaidako Fritter", src: "/images/ayce/14.png" },
  { id: 15, name: "Wagyu Carpaccio", src: "/images/ayce/15.png" },
];

const premiumEase: Easing = [0.16, 1, 0.3, 1];

export default function DishMarquee() {
  return (
    <div className="relative w-full py-20 flex flex-col gap-4 md:gap-8 overflow-hidden bg-[#0B0502]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-row-1 { animation: scrollLeft 40s linear infinite; }
        .animate-row-2 { animation: scrollRight 60s linear infinite; }
        .animate-row-3 { animation: scrollLeft 50s linear infinite; }
      `}} />

      <MarqueeRow items={row1} animationClass="animate-row-1" />
      <MarqueeRow items={row2} animationClass="animate-row-2" />
      <MarqueeRow items={row3} animationClass="animate-row-3" />
      
      {/* Heavy Cinematic Masking */}
      <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#0B0502] via-[#0B0502]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-[25%] bg-gradient-to-l from-[#0B0502] via-[#0B0502]/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}

function MarqueeRow({ items, animationClass }: { items: Dish[], animationClass: string }) {
  const loop = [...items, ...items, ...items]; 
  return (
    <div className="relative flex w-full group py-4">
      <div className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused] will-change-transform`}>
        {loop.map((dish, i) => (
          <DishItem key={`${dish.id}-${i}`} dish={dish} />
        ))}
      </div>
    </div>
  );
}

function DishItem({ dish }: { dish: Dish }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-[180px] md:w-[300px] aspect-square mx-4 md:mx-10 cursor-pointer perspective-1000"
      initial="rest" 
      whileHover="hover" 
      animate="rest"
    >
      <motion.div 
        variants={{
            rest: { opacity: 0, scale: 0.8 },
            hover: { opacity: 0.4, scale: 1.2 }
        }}
        className="absolute inset-0 bg-[#FFE3AF] blur-[60px] rounded-full pointer-events-none"
      />

      <motion.div
        variants={{
          rest: { 
            scale: 0.9, 
            rotateY: 0,
            rotateX: 0,
            y: 0, 
            filter: "brightness(0.7) contrast(1.1) saturate(0.8)" 
          },
          hover: { 
            scale: 1.15, 
            rotateY: 15, 
            rotateX: -5,
            y: -20, 
            filter: "brightness(1.1) contrast(1) saturate(1)" 
          },
        }}
        transition={{ duration: 0.8, ease: premiumEase }}
        className="relative w-full h-full preserve-3d"
      >
        <Image
          src={dish.src} 
          alt={dish.name} 
          fill
          quality={100} 
          sizes="(max-width: 768px) 400px, 600px"
          className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]"
        />
      </motion.div>

      <motion.div
        variants={{
          rest: { opacity: 0, y: 15, letterSpacing: "0.2em" },
          hover: { opacity: 1, y: 0, letterSpacing: "0.5em" },
        }}
        transition={{ duration: 0.6, ease: premiumEase }}
        className="absolute -bottom-6 w-max z-20 pointer-events-none flex flex-col items-center"
      >
        <div className="h-[1px] w-8 bg-[#FFE3AF]/50 mb-2" />
        <span className="text-[9px] md:text-[11px] font-style uppercase font-medium text-[#FFE3AF] drop-shadow-md">
          {dish.name}
        </span>
      </motion.div>
    </motion.div>
  );
}