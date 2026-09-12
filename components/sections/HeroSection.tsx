// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import Marquee from "react-fast-marquee";

// const images = [
//   "/images/webp/goa1.webp", 
//   "/images/webp/goa2.webp",
//   "/images/webp/goa4.webp",
//   "/images/webp/goa5.webp",
//   "/images/webp/goa6.webp",
//   "/images/webp/goa7.webp",
//   "/images/webp/goa8.webp",
// ];

// export default function HeroSection() {
//   return (
//     <section className="relative h-[100dvh] w-full bg-[#0a0a0a] text-white overflow-hidden">
//       <div className="absolute inset-0 bg-[#0a0a0a] z-0">
//         <div className="relative w-full h-[60vh] lg:h-[100dvh]">
//           <Marquee 
//               speed={30} 
//               gradient={false} 
//               pauseOnHover={false} 
//               className="h-[60vh] lg:h-[100dvh] overflow-hidden"
//           >
//             {images.map((src, i) => {
//               const isPriority = i < 2; 
//               return (
//                 <div
//                   key={i}
//                   className="relative flex-shrink-0 w-[80vw] lg:w-[40vw] h-[60vh] lg:h-[100dvh]"
//                 >
//                   <Image
//                     src={src}
//                     alt={`Goasaya ambience ${i + 1}`}
//                     fill
//                     sizes="(max-width: 768px) 80vw, 40vw"
//                     className="object-cover object-center opacity-30" 
//                     priority={isPriority}
//                   />
//                 </div>
//               );
//             })}
//           </Marquee>
//           <div className="absolute inset-0 bg-black/40 lg:bg-black/100 pointer-events-none" />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#0a0a0a] lg:via-transparent lg:to-[#0a0a0a] pointer-events-none" />
//         </div>
//       </div>

//       <div className="relative z-20 container mx-auto h-full px-6 md:px-14 flex flex-col lg:flex-row justify-end lg:justify-between pb-16 lg:pb-0 lg:items-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-white text-3xl lg:text-6xl uppercase font-style leading-tight max-w-3xl drop-shadow-2xl"
//         >
//           Asian Progressive Dining Experience
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="mt-6 lg:mt-0 lg:text-right max-w-lg text-white/90 drop-shadow-xl"
//         >
//           <p className="font-text mb-6 lg:mb-8 text-sm sm:text-base leading-loose">
//             A short escape from modern life to an intimate man-made cave.
//             A sanctuary where light, stone, and sound come together in quiet harmony.
//             Here, comfort finds you and the world fades away.
//           </p>
//           <Link
//             href="/spaces"
//             className="text-sm font-medium tracking-widest uppercase text-white border-b border-white/40 hover:text-[#FFE3AF] hover:border-[#FFE3AF] pb-1 transition-all duration-300"
//           >
//             View Spaces
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const images = [
  "/images/webp/goa1.webp", 
  "/images/webp/goa2.webp",
  "/images/webp/goa4.webp",
  "/images/webp/goa5.webp",
  "/images/webp/goa6.webp",
  "/images/webp/goa7.webp",
  "/images/webp/goa8.webp",
];

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] w-full bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a] z-0">
        <div className="relative w-full h-[60vh] lg:h-[100dvh]">
          <Marquee 
              speed={30} 
              gradient={false} 
              pauseOnHover={false} 
              className="h-[60vh] lg:h-[100dvh] overflow-hidden"
          >
            {images.map((src, i) => {
              const isPriority = i < 2; 
              return (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[80vw] lg:w-[40vw] h-[60vh] lg:h-[100dvh]"
                >
                  <Image
                    src={src}
                    alt={`Goasaya ambience ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className="object-cover object-center opacity-30" 
                    priority={isPriority}
                  />
                </div>
              );
            })}
          </Marquee>
          <div className="absolute inset-0 bg-black/40 lg:bg-black/100 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#0a0a0a] lg:via-transparent lg:to-[#0a0a0a] pointer-events-none" />
        </div>
      </div>

      <div className="relative z-20 container mx-auto h-full px-6 md:px-14 flex flex-col lg:flex-row justify-end lg:justify-between pb-16 lg:pb-0 lg:items-center">
        
        {/* SEO FIX: Standard H1 wrapped inside a motion.div */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl drop-shadow-2xl"
        >
          <h1 className="text-white text-3xl lg:text-6xl uppercase font-style leading-tight">
            <span className="block text-sm lg:text-lg font-text font-light tracking-[0.3em] mb-2 text-[#FFE3AF]">
              GoaSaya PIK 2
            </span>
            Asian Progressive Dining Experience
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 lg:mt-0 lg:text-right max-w-lg text-white/90 drop-shadow-xl"
        >
          {/* We turn this into an H2 so the page has a perfect hierarchical structure */}
          <h2 className="font-text mb-6 lg:mb-8 text-sm sm:text-base leading-loose font-normal">
            A short escape from modern life to an intimate man-made cave.
            A sanctuary where light, stone, and sound come together in quiet harmony.
            Here, comfort finds you and the world fades away.
          </h2>
          <Link
            href="/spaces"
            className="text-sm font-medium tracking-widest uppercase text-white border-b border-white/40 hover:text-[#FFE3AF] hover:border-[#FFE3AF] pb-1 transition-all duration-300"
          >
            View Spaces
          </Link>
        </motion.div>

      </div>
    </section>
  );
}