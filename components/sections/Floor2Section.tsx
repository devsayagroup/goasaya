// "use client";

// import { motion} from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function Floor2Section() {
//     const realImages = [
//         { src: "/rooms/op/classic.JPG", span: "col-span-2" },
//         { src: "/rooms/op/chinese.JPG", span: "col-span-1" },
//         { src: "/rooms/op/pink.jpg", span: "col-span-1" },
//         { src: "/rooms/op/japanese.JPG", span: "col-span-1" },

//     ];
//     return (
//         <section className="relative w-full bg-maroon text-black overflow-hidden">
//             <div className="absolute inset-0">
//                 <Image
//                     src="/images/Japanese_Theme_Karaoke_3.jpg"
//                     alt="Asian dining background"
//                     fill
//                     priority
//                     className="object-cover object-center brightness-75"
//                 />
//                 <div className="absolute inset-0 bg-maroon/75"></div>
//             </div>
//             <div className="relative container mx-auto px-6 md:px-14 py-30">
//                 <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
//                     <div className="flex items-center mb-16 md:mb-0">
//                         <Image
//                             src="/logo/onepercentlounge-white.png"
//                             alt="Onepercent Lounge"
//                             width={200}
//                             height={200}
//                         />
//                     </div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1 }}
//                         className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-white"
//                     >
//                         <h1 className="font-style text-5xl md:text-7xl mb-4">
//                         2nd Floor
//                         </h1>
//                         <Link href="/onepercentlounge" className="text-sm font-medium transition-all duration-300">
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
//                     className="flex flex-col mx-auto justify-center items-center mb-16"
//                     >

//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-lg md:text-center text-white md:text-xl font-style leading-loose max-w-4xl"
//                     >
//                         Above GoaSaya lies a private space for those who appreciate the finer things. <br />
//                         A place where you belong. <br /> <br /> Our members presence speaks louder than status.
//                     </motion.h1>
//                 </motion.div>
                

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                     viewport={{ once: true }}
//                     className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
//                 >
//                     {realImages.map((img, i) => (
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
//                         alt={`GoaSaya KTV ${i + 1}`}
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

// Brought over the custom premium easing for consistency
const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Floor2Section() {
    const realImages = [
        { src: "/rooms/op/classic.JPG", span: "col-span-2" },
        { src: "/rooms/op/chinese.JPG", span: "col-span-1" },
        { src: "/rooms/op/pink.jpg", span: "col-span-1" },
        { src: "/rooms/op/japanese.JPG", span: "col-span-1" },
    ];

    return (
        <section className="relative w-full bg-[#3e0c15] text-black overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Japanese_Theme_Karaoke_3.jpg"
                    alt="Asian dining background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-maroon/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-6 md:px-14 py-32">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:items-center">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }} // Changed from animate to whileInView
                        transition={{ duration: 1.2, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex items-center mb-16 md:mb-0"
                    >
                        <Image
                            src="/logo/onepercentlounge-white.png"
                            alt="Onepercent Lounge"
                            width={200}
                            height={100} // Adjusted to a more natural logo proportion
                            className="w-[160px] md:w-[200px] object-contain drop-shadow-xl"
                            style={{ height: "auto" }} // ✅ FIX: Prevents the aspect-ratio warning
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }} // Changed from animate to whileInView
                        transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mt-8 md:mt-0 md:text-right max-w-xs md:max-w-sm text-white"
                    >
                        <h1 className="font-style text-5xl md:text-7xl mb-6 drop-shadow-lg">
                            2nd Floor
                        </h1>
                        <Link 
                            href="/one-percent-lounge" 
                            className="inline-block transition-transform duration-500 hover:scale-105 hover:brightness-125"
                        >
                            <Image
                                src="/images/reservewhite.png"
                                alt="GOASAYA Reservation"
                                width={180}
                                height={50} // Adjusted from 250x250 to standard button proportions
                                className="w-[140px] md:w-[180px] object-contain drop-shadow-lg"
                                style={{ height: "auto" }} // ✅ FIX: Prevents the aspect-ratio warning
                            />
                        </Link>
                    </motion.div>
                </div>

                {/* Description Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col mx-auto justify-center items-center mb-20"
                >
                    <h2 className="text-lg md:text-center text-white/90 md:text-xl font-style font-light leading-loose max-w-3xl drop-shadow-md">
                        Above GoaSaya lies a private space for those who appreciate the finer things. <br />
                        A place where you belong. <br /> <br /> 
                        <span className="text-[#FFE3AF]">Our members&apos; presence speaks louder than status.</span>
                    </h2>
                </motion.div>
                
                {/* Gallery Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
                >
                    {realImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 1, ease: premiumEase }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`
                                ${i === 0 ? "md:col-span-3" : "md:col-span-1"} 
                                col-span-2 relative w-full h-[350px] md:h-[500px] overflow-hidden group rounded-sm shadow-2xl
                            `}
                        >
                            <Image
                                src={img.src}
                                alt={`GoaSaya KTV ${i + 1}`}
                                fill
                                // ✅ FIX: Set sizes properly so the massive first image isn't blurry on desktop
                                sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                                className="object-cover brightness-100"
                            />
                            {/* Dark overlay for luxury feel */}
                            <div className="absolute inset-0 bg-[#3e0c15]/20  duration-1000 z-10 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}