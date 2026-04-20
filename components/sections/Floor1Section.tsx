// "use client";

// import { motion} from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function Floor1Section() {
//     const images = [
//         { src: "/images/goalt1-2.jpg", span: "col-span-2" },
//         { src: "/images/goalt1-3.jpg", span: "col-span-1" },
//         { src: "/images/goalt1-5.jpg", span: "col-span-1" },
//         { src: "/images/goalt1-4.jpg", span: "col-span-1" },
//     ];
//      const realiImages = [
//         { src: "/rooms/main.jpeg", span: "col-span-2" },
//         { src: "/rooms/glass.jpeg", span: "col-span-1" },
//         { src: "/rooms/hole.jpeg", span: "col-span-1" },
//         { src: "/rooms/main-2.jpeg", span: "col-span-1" },
//     ];
//     return (
//         <section className="w-full bg-black text-white overflow-hidden">
//             <div className="relative container mx-auto px-6 md:px-14 py-30">
//                 <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
//                     <div className="flex items-start mb-16 md:mb-0">
//                         <Image
//                             src="/logo/LogotypeIcon-02.png"
//                             alt="GOASAYA"
//                             width={250}
//                             height={250}
//                         />
//                     </div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1 }}
//                         className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-gray-300"
//                     >
//                         <h1 className="font-style text-5xl md:text-7xl mb-4">
//                         1st Floor
//                         </h1>
//                         <Link href="/https://cho.pe/web_goasayarestaurant" className="text-sm font-medium transition-all duration-300">
//                             <Image
//                                 src="/images/reservewhite.png"
//                                 alt="GOASAYA Reservation"
//                                 width={250}
//                                 height={250}
//                             />
//                         </Link>
//                     </motion.div>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="flex mx-auto justify-center items-center mb-16"
//                     >

//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-lg md:text-center md:text-xl font-style leading-loose max-w-4xl"
//                     >
//                         A short escape from the modern life to an intimate man-made cave, where the outside world can reach you.
//                         Your safe space surrounded by stone walls and soft lights. A deeply relaxing ambience serving you comfort.
//                         Here we gather to share meals and create memories.
//                     </motion.h1>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                     viewport={{ once: true }}
//                     className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
//                 >
//                     {realiImages.map((img, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                         whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                         transition={{ delay: i * 0.2, duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className={`${i === 0 ? "md:col-span-3" : "md:col-span-1"} col-span-2 relative w-full h-[300px] md:h-[500px] overflow-hidden`}
//                     >
//                         <Image
//                         src={img.src}
//                         alt={`Goasaya interior ${i + 1}`}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         className="object-cover brightness-95 hover:brightness-110 transition-all duration-700"
//                         />
//                     </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Custom premium easing for that high-end, heavy feel
const premiumEase: [number,number,number,number] = [0.16, 1, 0.3, 1];

export default function Floor1Section() {
    // Removed the unused 'images' array to keep your bundle clean
    const realiImages = [
        { src: "/rooms/main.jpeg", span: "col-span-2" },
        { src: "/rooms/glass.jpeg", span: "col-span-1" },
        { src: "/rooms/hole.jpeg", span: "col-span-1" },
        { src: "/rooms/main-2.jpeg", span: "col-span-1" },
    ];

    return (
        // FIX 1: Replaced flat bg-black with the rich, deep cave gradient
        <section className="w-full bg-gradient-to-b from-black via-[#0f0f0f] to-[#1a0b08] text-[#f5f5f5] overflow-hidden">
            <div className="relative container mx-auto px-6 md:px-14 py-32">
                
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: premiumEase }}
                        className="flex items-start mb-16 md:mb-0"
                    >
                        {/* FIX 2: Applied aspect ratio fix to prevent layout shifts */}
                        <Image
                            src="/logo/LogotypeIcon-02.png"
                            alt="GOASAYA"
                            width={250}
                            height={100} // Set a realistic height
                            className="w-[180px] md:w-[250px] h-auto object-contain"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
                        className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-white"
                    >
                        <h1 className="font-style text-5xl md:text-7xl mb-6 tracking-tight">
                            1st Floor
                        </h1>
                        {/* FIX 3: Removed the accidental '/' before the https which would break the link */}
                        <Link 
                            href="https://cho.pe/web_goasayarestaurant" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block transition-transform duration-500 hover:scale-105 hover:brightness-125"
                        >
                            <Image
                                src="/images/reservewhite.png"
                                alt="GOASAYA Reservation"
                                width={180}
                                height={50}
                                className="w-[140px] md:w-[180px] h-auto object-contain"
                            />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex mx-auto justify-center items-center mb-24"
                >
                    <h2 className="text-lg md:text-center md:text-xl font-style font-light text-white/70 leading-relaxed max-w-4xl">
                        A short escape from the modern life to an intimate man-made cave, where the outside world can reach you.
                        Your safe space surrounded by stone walls and soft lights. A deeply relaxing ambience serving you comfort.
                        Here we gather to share meals and create memories.
                    </h2>
                </motion.div>

                {/* THE GALLERY GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {realiImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 1, ease: premiumEase }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`
                                ${i === 0 ? "md:col-span-3" : "md:col-span-1"} 
                                col-span-2 relative w-full h-[350px] md:h-[600px] overflow-hidden group rounded-sm
                            `}
                        >
                            {/* FIX 4: Corrected sizes array. The first image takes full width, the others take 33% */}
                            <Image
                                src={img.src}
                                alt={`Goasaya 1st Floor Experience ${i + 1}`}
                                fill
                                sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                                className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-[3s] group-hover:scale-105"
                            />
                            {/* Luxury Dark Overlay that fades on hover */}
                            <div className="absolute inset-0 bg-[#230c0f]/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}