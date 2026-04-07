// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const images = [
//   "/images/goa9.webp",
//   "/images/goa2.webp",
//   "/images/goa3.webp",
//   "/images/goa4.webp",
//   "/images/goa7.webp",
//   "/images/goa5.webp",
//   "/images/goa6.webp",
// ];

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full bg-black text-white overflow-hidden flex items-center">
//         <div className="absolute inset-0 overflow-hidden opacity-85">
//             <motion.div
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//                 ease: "linear",
//                 duration: 20,
//                 repeat: Infinity,
//             }}
//             className="flex flex-nowrap will-change-transform"
//             style={{ whiteSpace: "nowrap" }}
//             >
//             {[...images, ...images].map((src, i) => (
//                 <div
//                 key={i}
//                 className="relative flex-shrink-0 min-w-[80vw] md:min-w-[40vw] h-[50vh] md:h-[100vh]"
//                 >
//                 <Image
//                     src={src}
//                     alt={`Goasaya ambience ${i + 1}`}
//                     fill
//                     className="object-cover object-center"
//                     priority={i < 2}
//                 />
//                 </div>
//             ))}
//             </motion.div>

//             <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75 pointer-events-none" />
//         </div>

//         <div className="relative container flex flex-col md:flex-row mx-auto justify-between items-center px-6 pt-100 md:pt-0 md:px-14">
//             <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-white text-3xl md:text-6xl uppercase font-style leading-tight max-w-3xl"
//             >
//                 Asian Progressive Dining Experience
//             </motion.h1>

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="mt-8 md:mt-0 md:text-right max-w-lg text-white"
//             >
//                 <p className="font-text mb-4 text-sm leading-loose md:text-base">
//                     A short escape from modern life to an intimate man-made cave.
//                     A sanctuary where light, stone, and sound come together in quiet harmony.
//                     Here, comfort finds you and the world fades away.
//                 </p>
//                 <Link
//                     href="/experience"
//                     className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
//                 >
//                     VIEW EXPERIENCE
//                 </Link>
//             </motion.div>
//         </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/webp/goa1.webp", 
  "/images/webp/goa2.webp",
  "/images/webp/goa3.webp",
  "/images/webp/goa4.webp",
  "/images/webp/goa5.webp",
  "/images/webp/goa6.webp",
  "/images/webp/goa7.webp",
  "/images/webp/goa8.webp",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden opacity-85">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Slowed down for a more luxurious feel and less CPU thrashing
            repeat: Infinity,
          }}
          className="flex flex-nowrap will-change-transform"
          style={{ width: "200%" }} // Explicit width helps the browser calculate layout faster
        >
          {[...images, ...images].map((src, i) => {
            // Only prioritize the images that will immediately be in the viewport on load
            const isPriority = i < 3; 

            return (
              <div
                key={i}
                className="relative flex-shrink-0 w-[80vw] md:w-[40vw] h-[50vh] md:h-screen"
              >
                <Image
                  src={src}
                  alt={`Goasaya ambience ${i + 1}`}
                  fill
                  // ✅ CRITICAL FIX: Tells Next.js to serve small images to phones and medium to desktop
                  sizes="(max-width: 768px) 80vw, 40vw"
                  quality={70} // Slightly lower quality is perfectly fine for a darkened background
                  className="object-cover object-center"
                  priority={isPriority}
                />
              </div>
            );
          })}
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-black/40 to-[#0a0a0a]/90 pointer-events-none" />
      </div>

      <div className="relative container flex flex-col lg:flex-row mx-auto justify-between lg:items-center px-6 pt-96 lg:pt-0 md:px-14 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-6xl uppercase font-style leading-tight max-w-3xl"
        >
          Asian Progressive Dining Experience
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 md:mt-0 lg:text-right max-w-lg text-white/90"
        >
          <p className="font-text mb-8 text-sm leading-loose md:text-base">
            A short escape from modern life to an intimate man-made cave.
            A sanctuary where light, stone, and sound come together in quiet harmony.
            Here, comfort finds you and the world fades away.
          </p>
          <Link
            href="/experience"
            className="text-sm font-medium tracking-widest uppercase text-white border-b border-white/40 hover:border-white pb-1 transition-all duration-300"
          >
            View Experience
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
