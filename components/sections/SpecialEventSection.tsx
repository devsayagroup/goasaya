// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function CelebrateGoasaya() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Parallax (soft, luxury motion)
//   const yLeft = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);
//   const yRight = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

//   return (
//     <section
//       ref={ref}
//       className="relative w-full py-32 overflow-hidden"
//     >
//         <div className="absolute inset-0 -z-10">
//             <Image
//                 src="/images/goa2.jpg" 
//                 alt="GOASAYA Background"
//                 fill
//                 className="object-cover"
//                 priority
//             />
//             <div className="absolute inset-0 bg-black/85" />
//          </div>

//     <div className="container mx-auto px-6 md:px-14">
//         <div className="flex flex-col md:flex-row justify-between items-center text-white mb-10">
//             <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-4xl md:text-6xl font-style uppercase leading-tight max-w-xl"
//             >
//                 Celebrate With GoaSaya
//             </motion.h1>

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="mt-8 md:mt-0 md:text-right max-w-lg text-gray-300"
//             >
//                 <p className="font-text text-md leading-loose">
//                     From birthdays to corporate gatherings, we help bring your ideas to life with a space that
//                     feels warm, intimate, and memorable.
//                 </p>
//                 <div className="mt-4 flex justify-start md:justify-end gap-4">
//                     <Link
//                     href="/facilities"
//                     className="text-sm font-medium border-b border-gray-500 hover:border-white transition-all duration-300"
//                     >
//                     See Facilities
//                     </Link>
//                 </div>
//             </motion.div>
//         </div>

//         {/* EVENT TYPE GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//             {
//                 title: "Birthday Party",
//                 desc: "Celebrate a new milestone with family and friends in a cozy and festive atmosphere."
//             },
//             {
//                 title: "Brand Activation",
//                 desc: "Create a strong impression with unique and engaging activation events tailored to your brand."
//             },
//             {
//                 title: "Corporate Gathering",
//                 desc: "Host professional company events that feel warm and well organized, from small meetings to team gatherings."
//             },
//             {
//                 title: "Private and Custom Events",
//                 desc: "Whether it is a product launch or an intimate private party, we are ready to support your vision."
//             }
//             ].map((item, index) => (
//             <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }} 
//                 transition={{ duration: 0.7, delay: index * 0.1 }}
//                 className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
//             >
//                 <h3 className="text-xl text-white font-style mb-3">{item.title}</h3>
//                 <p className="text-gray-300 text-sm font-text leading-relaxed">
//                 {item.desc}
//                 </p>
//             </motion.div>
//             ))}
//         </div>

//         {/* ADD ON SERVICES */}
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }} 
//             className="mt-16 text-center"
//         >
//             <h3 className="text-3xl text-white font-style mb-2">Complete Your Event</h3>
//             <p className="text-gray-300 font-text mb-6 max-w-xl mx-auto">
//             Choose from a variety of add on services that help create a complete and polished experience.
//             </p>

//             <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-200 font-text">
//             <li className="bg-white/5 border border-white/10 p-3 rounded-md">Decoration and Theming</li>
//             <li className="bg-white/5 border border-white/10 p-3 rounded-md">Photo and Videography</li>
//             <li className="bg-white/5 border border-white/10 p-3 rounded-md">Sound, Lighting, and AV Setup</li>
//             <li className="bg-white/5 border border-white/10 p-3 rounded-md">MC, Host, or Entertainment</li>
//             <li className="bg-white/5 border border-white/10 p-3 rounded-md">Custom Catering and Snacks</li>
//             <li className="bg-white/5 border border-white/10 p-3 rounded-md">Event Planning and Coordination</li>
//             </ul>
//         </motion.div>

//     </div>
//     </section>
//   );
// }


"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CelebrateGoasaya() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax (soft, luxury motion)
  const yLeft = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={ref}
      className="relative w-full py-32 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/goa2.jpg"
          alt="GOASAYA Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center text-white mb-16">
          <motion.h1
            style={{ y: yLeft }} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-style uppercase leading-tight max-w-xl"
          >
            Celebrate With GoaSaya
          </motion.h1>

          <motion.div
            style={{ y: yRight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-0 lg:text-right max-w-lg"
          >
            <p className="font-text text-md leading-loose text-white/90">
              From birthdays to corporate gatherings, we help bring your ideas to life with a space that
              feels warm, intimate, and memorable.
            </p>
            <div className="mt-6 flex justify-start lg:justify-end gap-4">
              <Link
                href="/facilities"
                className="text-sm font-medium text-[#FFE3AF] border-b border-[#FFE3AF]/40 hover:border-[#FFE3AF] pb-1 transition-all duration-300"
              >
                See Facilities
              </Link>
            </div>
          </motion.div>
        </div>

        {/* EVENT TYPE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Birthday Party",
              desc: "Celebrate a new milestone with family and friends in a cozy and festive atmosphere."
            },
            {
              title: "Brand Activation",
              desc: "Create a strong impression with unique and engaging activation events tailored to your brand."
            },
            {
              title: "Corporate Gathering",
              desc: "Host professional company events that feel warm and well organized, from small meetings to team gatherings."
            },
            {
              title: "Private and Custom Events",
              desc: "Whether it is a product launch or an intimate private party, we are ready to support your vision."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors rounded-xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl text-white font-style mb-4">{item.title}</h3>
              <p className="text-white/70 text-sm font-text leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl text-white font-style mb-4">Complete Your Event</h3>
          <p className="text-white/80 font-text mb-10 max-w-xl mx-auto leading-relaxed">
            Choose from a variety of add-on services that help create a complete and polished experience.
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-white/90 font-text">
            {[
              "Decoration and Theming",
              "Photo and Videography",
              "Sound, Lighting, and AV Setup",
              "MC, Host, or Entertainment",
              "Custom Catering and Snacks",
              "Event Planning and Coordination"
            ].map((service, idx) => (
              <li 
                key={idx} 
                className="bg-white/5 border border-white/10 p-4 rounded-md hover:bg-white/10 transition-colors"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}