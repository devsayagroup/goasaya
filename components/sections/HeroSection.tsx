// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="h-screen w-full bg-black text-white overflow-hidden flex items-center">
//       <div className="relative container mx-auto px-6 md:px-14 py-30">
//         {/* Content Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
//           {/* Left Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-style leading-tight max-w-2xl uppercase"
//           >
//             Asian Progressive Dining Experience
//           </motion.h1>

//           {/* Right Description */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="mt-8 md:mt-0 md:text-right max-w-sm text-gray-300"
//           >
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="font-text text-md mb-4"
//             >
//               Discover the flavors of adventure at Cave, where flame-grilled
//               dishes, signature cocktails, and warm cave-like interiors create
//               one unforgettable dining experience.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <Link
//                 href="/experience"
//                 className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
//               >
//                 VIEW EXPERIENCE
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Image Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//           className="grid grid-cols-3 gap-[1px]"
//         >
//           {["/images/goa1.jpg", "/images/goa2.jpg", "/images/goa3.jpg"].map(
//             (src, i) => (
//               <motion.div
//                 key={i}
//                 variants={{
//                   hidden: { opacity: 0, y: 40 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative h-[300px] w-full overflow-hidden"
//               >
//                 <Image
//                   src={src}
//                   alt={`Restaurant image ${i + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover brightness-90 hover:brightness-100 transition-all duration-700 scale-105 hover:scale-110"
//                 />
//               </motion.div>
//             )
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/goa9.JPG",
  "/images/goa2.jpg",
  "/images/goa3.jpg",
  "/images/goa4.jpg",
  "/images/goa7.webp",
  "/images/goa5.jpg",
  "/images/goa6.jpg",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden opacity-85">
            <motion.div
            // content is duplicated, so translate by -50% for a perfect loop
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
            }}
            // important: prevent wrapping and ensure GPU-accelerated transform
            className="flex flex-nowrap will-change-transform"
            style={{ whiteSpace: "nowrap" }}
            >
            {/* duplicated sequence */}
            {[...images, ...images].map((src, i) => (
                <div
                key={i}
                // min-w definitions ensure consistent sizing across breakpoints
                className="relative flex-shrink-0 min-w-[80vw] md:min-w-[40vw] h-[50vh] md:h-[100vh]"
                >
                <Image
                    src={src}
                    alt={`Goasaya ambience ${i + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={i < 2}
                />
                </div>
            ))}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75 pointer-events-none" />
        </div>

        <div className="relative container flex flex-col md:flex-row mx-auto justify-between items-center px-6 pt-100 md:pt-0 md:px-14">
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
                transition={{ duration: 1 }}
                className="mt-8 md:mt-0 md:text-right max-w-lg text-white"
            >
                {/* <p className="font-text mb-4 text-sm md:text-base">
                    Discover the flavors of adventure at Cave, where fire-grilled
                    dishes, signature cocktails, and warm cave-like interiors create
                    one unforgettable dining experience.
                </p> */}
                <p className="font-text mb-4 text-sm leading-loose md:text-base">
                    A short escape from modern life to an intimate man-made cave.
                    A sanctuary where light, stone, and sound come together in quiet harmony.
                    Here, comfort finds you and the world fades away.
                </p>
                <Link
                    href="/experience"
                    className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
                >
                    VIEW EXPERIENCE
                </Link>
            </motion.div>
        </div>
    </section>
  );
}
