// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section className="relative w-full text-white overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src="/images/Japanese_Theme_Karaoke_3.jpg"
//           alt="Asian dining background"
//           fill
//           priority
//           className="object-cover object-center brightness-75"
//         />
//         <div className="absolute inset-0 bg-maroon/85"></div>
//       </div>

//       {/* Content */}
//       <div className="relative container mx-auto px-6 md:px-14 py-24">
//         <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="hidden lg:block mt-8 md:mt-0"
//           >
//             <Image
//               src="/images/webp/goa2.webp"
//               alt="Goasaya Ambience"
//               width={400}
//               height={700}
//               className="rounded-sm shadow-lg object-cover"
//             />
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="mt-8 md:mt-0 max-w-4xl"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-2xl md:text-3xl font-style mb-4 leading-normal uppercase"
//             >
//               The restaurant&apos;s kitchen and interior blending natural texture
//               with bold, earthy flavors
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="font-text text-gray-300 leading-loose"
//             >
//               Inspired by nature&apos;s quiet strength, the cave surrounds you with
//               stone, wood, and soft lighting, creating a space that feels both
//               grounding and inviting. Our kitchen brings that same energy to
//               every dish, with fire-grilled flavors, hearty ingredients, and a
//               touch of rustic charm. It&apos;s a place to feel at home, deep in the
//               heart of something wild.
//             </motion.p>

//             {/* Image Grid */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 md:gap-10"
//             >
//               {["/images/webp/goa7.webp", "/images/webp/goa3.webp"].map((src, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: i * 0.2 }}
//                   viewport={{ once: true }}
//                   className="relative  h-[350px] w-full overflow-hidden "
//                 >
//                   <Image
//                     src={src}
//                     alt={`Restaurant image ${i + 1}`}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     className="object-cover rounded-sm"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Japanese_Theme_Karaoke_3.jpg"
          alt="Asian dining background"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-maroon/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-14 py-24">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            // ✅ FIX 2: Removed hidden class. Added a fixed height for mobile/tablet, and h-auto for desktop so it stretches.
            className="relative w-full lg:w-4/12 h-[450px] md:h-[600px] lg:h-auto rounded-sm overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/webp/goa2.webp"
              alt="Goasaya Ambience"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            // Added flex-col and justify-center so the content distributes nicely
            className="w-full lg:w-8/12 flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-3xl font-style mb-6 leading-normal uppercase"
            >
              The restaurant&apos;s kitchen and interior blending natural texture
              with bold, earthy flavors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-text text-gray-300 leading-loose max-w-3xl"
            >
              Inspired by nature&apos;s quiet strength, the cave surrounds you with
              stone, wood, and soft lighting, creating a space that feels both
              grounding and inviting. Our kitchen brings that same energy to
              every dish, with fire-grilled flavors, hearty ingredients, and a
              touch of rustic charm. It&apos;s a place to feel at home, deep in the
              heart of something wild.
            </motion.p>

            {/* Right Side Image Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-6 md:gap-8"
            >
              {["/images/webp/goa7.webp", "/images/webp/goa3.webp"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative w-full h-[300px] md:h-[350px] overflow-hidden rounded-sm shadow-xl"
                >
                  <Image
                    src={src}
                    alt={`Restaurant image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-[2s]"
                  />
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}