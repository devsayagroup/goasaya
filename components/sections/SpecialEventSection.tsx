// "use client";

// import { motion } from "framer-motion";

// export default function SpecialEventSection() {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT IMAGES - ASYMMETRICAL */}
//           <div className="relative w-full h-full flex flex-col gap-6">
            
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="rounded-md overflow-hidden shadow-lg w-2/4 ml-auto"
//             >
//               <img
//                 src="/images/goa1.jpg"
//                 alt="Event at Goasaya"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="rounded-md overflow-hidden shadow-lg w-1/2"
//             >
//               <img
//                 src="/images/goa2.jpg"
//                 alt="Corporate Gathering at Goasaya"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-6 font-text "
//           >
//             <p className="text-sm uppercase tracking-widest text-gray-500">
//               Moments that matter deserve a place that feels special
//             </p>

//             <h2 className="text-maroon text-7xl font-style font-semibold leading-snug">
//               Celebrate with Goasaya
//             </h2>

//             <p className="text-gray-600 leading-relaxed max-w-lg">
//               Host your next event with a setting that brings people together. Goasaya offers curated 
//               experiences that fit celebrations of every kind. Whether you are planning something small 
//               or something big, our space is designed to feel warm, joyful, and unforgettable.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               <div>
//                 <h4 className="text-lg font-medium mb-2">Perfect for</h4>
//                 <ul className="text-gray-600 space-y-1">
//                   <li>Birthday Parties</li>
//                   <li>Brand Activations</li>
//                   <li>Corporate Gatherings</li>
//                   <li>Community Events</li>
//                   <li>Media and Content Sessions</li>
//                   <li>Private Dining Experiences</li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-lg font-medium mb-2">Additional Services</h4>
//                 <ul className="text-gray-600 space-y-1">
//                   <li>Professional Decoration</li>
//                   <li>Photo and Video Crew</li>
//                   <li>Custom Catering</li>
//                   <li>Emcee and Live Music</li>
//                   <li>Kids Entertainment</li>
//                   <li>Event Coordination</li>
//                 </ul>
//               </div>

//             </div>

//             {/* <motion.a
//               href="/event"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm tracking-wide shadow-md"
//             >
//               Plan Your Event
//             </motion.a> */}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function SpecialEventSection() {
//   return (
//     <section className="relative w-full py-28 bg-white overflow-hidden">
      
//       {/* ASYMMETRICAL BACKGROUND IMAGES */}
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         whileInView={{ opacity: 0.4, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="absolute left-0 top-10 w-56 md:w-72 lg:w-96 rotate-[-8deg] opacity-40"
//       >
//         <img
//           src="/images/goa1.jpg"
//           alt="Goasaya Event"
//           className="rounded-xl shadow-lg object-cover"
//         />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 60 }}
//         whileInView={{ opacity: 0.4, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="absolute right-0 bottom-10 w-56 md:w-72 lg:w-96 rotate-[6deg] opacity-40"
//       >
//         <img
//           src="/images/goa2.jpg"
//           alt="Goasaya Corporate Gathering"
//           className="rounded-xl shadow-lg object-cover"
//         />
//       </motion.div>

//       {/* CENTERED CONTENT */}
//       <div className="relative container mx-auto px-6 lg:px-12 text-center font-text">
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-gray-500 uppercase tracking-widest text-sm mb-3"
//         >
//           Moments that matter deserve a place that feels special
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-maroon text-6xl md:text-7xl font-style font-semibold leading-tight mb-6"
//         >
//           Celebrate with Goasaya
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
//         >
//           Host your next event in a space made to bring people together.  
//           Goasaya offers curated experiences for celebrations of all sizes,  
//           designed to feel warm, joyful, and unforgettable.
//         </motion.p>

//         {/* CENTERED BULLET POINTS */}
//         <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-medium mb-2">Perfect for</h4>
//             <ul className="text-gray-700 space-y-1">
//               <li>Birthday Parties</li>
//               <li>Brand Activations</li>
//               <li>Corporate Gatherings</li>
//               <li>Community Events</li>
//               <li>Media and Content Sessions</li>
//               <li>Private Dining Experiences</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-medium mb-2">Additional Services</h4>
//             <ul className="text-gray-700 space-y-1">
//               <li>Professional Decoration</li>
//               <li>Photo and Video Crew</li>
//               <li>Custom Catering</li>
//               <li>Emcee and Live Music</li>
//               <li>Kids Entertainment</li>
//               <li>Event Coordination</li>
//             </ul>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function SpecialEventSection() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Stronger parallax effect
//   const y1 = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);
//   const y2 = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);
//   const y3 = useTransform(scrollYProgress, [0, 1], ["-70px", "70px"]);
//   const y4 = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

//   return (
//     <section
//       ref={ref}
//       className="relative w-full py-28 bg-white overflow-hidden"
//     >
//       {/* LEFT IMAGE GROUP */}
//       <motion.div
//         style={{ y: y1 }}
//         className="absolute left-0 top-10 w-40 sm:w-56 md:w-72 lg:w-[22rem]"
//       >
//         <img
//           src="/images/goa1.jpg"
//           alt="Event Space Goasaya"
//           className="rounded-xl shadow-lg object-cover w-full h-full"
//         />
//       </motion.div>

//       <motion.div
//         style={{ y: y2 }}
//         className="absolute left-6 sm:left-16 bottom-10 w-32 sm:w-44 md:w-56 lg:w-72"
//       >
//         <img
//           src="/images/goa3.jpg"
//           alt="Goasaya Gathering"
//           className="rounded-xl shadow-lg object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* RIGHT IMAGE GROUP */}
//       <motion.div
//         style={{ y: y3 }}
//         className="absolute right-0 top-20 w-40 sm:w-56 md:w-72 lg:w-[22rem]"
//       >
//         <img
//           src="/images/goa2.jpg"
//           alt="Corporate Event Goasaya"
//           className="rounded-xl shadow-lg object-cover w-full h-full"
//         />
//       </motion.div>

//       <motion.div
//         style={{ y: y4 }}
//         className="absolute right-6 sm:right-20 bottom-5 w-36 sm:w-48 md:w-64 lg:w-72"
//       >
//         <img
//           src="/images/goa4.jpg"
//           alt="Media Session Goasaya"
//           className="rounded-xl shadow-lg object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* CENTER CONTENT */}
//       <div className="relative container mx-auto px-6 lg:px-12 text-center font-text">

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-gray-500 uppercase tracking-widest text-sm mb-3"
//         >
//           Moments that matter deserve a place that feels special
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-maroon text-5xl md:text-6xl font-style font-semibold leading-tight mb-6"
//         >
//           Celebrate with Goasaya
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="text-gray-600 max-w-lg mx-auto leading-relaxed mb-12"
//         >
//           Host your next event in a space made to bring people together.
//           Goasaya offers curated experiences for celebrations of all sizes,
//           designed to feel warm, joyful, and unforgettable.
//         </motion.p>

//         {/* BULLET POINTS */}
//         <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <h4 className="text-lg font-medium mb-2">Perfect for</h4>
//             <ul className="text-gray-700 space-y-1">
//               {[
//                 "Birthday Parties",
//                 "Brand Activations",
//                 "Corporate Gatherings",
//                 "Community Events",
//                 "Media and Content Sessions",
//                 "Private Dining Experiences",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="transition-all duration-200 hover:font-semibold hover:text-black cursor-default"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <h4 className="text-lg font-medium mb-2">Additional Services</h4>
//             <ul className="text-gray-700 space-y-1">
//               {[
//                 "Professional Decoration",
//                 "Photo and Video Crew",
//                 "Custom Catering",
//                 "MC and Live Music",
//                 "Kids Entertainment",
//                 "Event Coordination",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="transition-all duration-200 hover:font-semibold hover:text-black cursor-default"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// // import { motion, useScroll, useTransform } from "framer-motion";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef } from "react";

// export default function SpecialEventSection() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Deep parallax for luxury feel
// //   const yLeft = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);
// //   const yRight = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

//     const rawLeft = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);
//     const rawRight = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

//     const yLeft = useSpring(rawLeft, {
//         stiffness: 60,
//         damping: 20,
//         mass: 0.3,
//     });

//     const yRight = useSpring(rawRight, {
//         stiffness: 60,
//         damping: 20,
//         mass: 0.3,
//     });

//   return (
//     <section
//       ref={ref}
//       className="relative w-full py-32 bg-white overflow-hidden"
//     >
//       LEFT IMAGE – Luxe tall portrait
//       <motion.div
//         style={{ y: yLeft }}
//         className="
//           absolute left-0 top-20 
//           w-48 sm:w-64 md:w-80 lg:w-[22rem] 
//           transition-all duration-500 
//           hover:scale-[1.03] hover:opacity-100 opacity-95
//         "
//       >
//         <img
//           src="/images/goa1.jpg"
//           alt="Goasaya Event Premium"
//           className="rounded-2xl shadow-xl object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* RIGHT IMAGE – Wide landscape for contrast */}
//       <motion.div
//         style={{ y: yRight }}
//         className="
//           absolute right-0 bottom-10 
//           w-60 sm:w-72 md:w-96 lg:w-[28rem] 
//           transition-all duration-500 
//           hover:scale-[1.03] hover:opacity-100 opacity-95
//         "
//       >
//         <img
//           src="/images/goa3.jpg"
//           alt="Goasaya Luxe Gathering"
//           className="rounded-2xl shadow-xl object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* CENTER CONTENT */}
//       <div className="relative container mx-auto px-6 lg:px-12 text-center font-text">

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-gray-500 uppercase tracking-[0.25em] text-xs mb-4"
//         >
//           A place where moments become unforgettable
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="
//             text-maroon text-5xl md:text-6xl 
//             font-style font-semibold leading-tight 
//             mb-8
//           "
//         >
//           Celebrate with Goasaya
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="
//             text-gray-600 
//             max-w-md mx-auto 
//             leading-relaxed 
//             mb-16
//           "
//         >
//           Create moments that feel intimate yet elevated.  
//           Goasaya brings character, warmth, and atmosphere to events of any scale.
//         </motion.p>

//         {/* BULLET POINTS – Premium spacing */}
//         <div className="grid md:grid-cols-2 gap-10 max-w-xl mx-auto">

//           {/* Column 1 */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <h4 className="text-lg font-medium mb-3">Perfect for</h4>

//             <ul className="text-gray-700 space-y-2">
//               {[
//                 "Birthday Parties",
//                 "Brand Activations",
//                 "Corporate Gatherings",
//                 "Community Events",
//                 "Media and Content Sessions",
//                 "Private Dining Experiences",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="
//                     transition-all duration-200 
//                     hover:font-semibold hover:text-black 
//                     cursor-default
//                   "
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Column 2 */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-left"
//           >
//             <h4 className="text-lg font-medium mb-3">Additional Services</h4>

//             <ul className="text-gray-700 space-y-2">
//               {[
//                 "Professional Decoration",
//                 "Photo and Video Crew",
//                 "Custom Catering",
//                 "MC and Live Music",
//                 "Kids Entertainment",
//                 "Event Coordination",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="
//                     transition-all duration-200 
//                     hover:font-semibold hover:text-black 
//                     cursor-default
//                   "
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CelebrateGoasaya() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax (soft, luxury motion)
  const yLeft = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section
      ref={ref}
      className="relative w-full py-32 overflow-hidden"
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
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl text-white md:text-6xl leading-snug font-style uppercase mb-6"
        >
            Celebrate With GoaSaya
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 font-text max-w-2xl leading-loose mb-10"
        >
            From birthdays to corporate gatherings, we help bring your ideas to life with a space that
            feels warm, intimate, and memorable.
        </motion.p>

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
                <h3 className="text-xl text-white font-style mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm font-text leading-relaxed">
                {item.desc}
                </p>
            </motion.div>
            ))}
        </div>

        {/* ADD ON SERVICES */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
        >
            <h3 className="text-3xl text-white font-style mb-4">Complete Your Event</h3>
            <p className="text-gray-300 font-text mb-6 max-w-xl">
            Choose from a variety of add on services that help create a complete and polished experience.
            </p>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-200 font-text">
            <li className="bg-white/5 border border-white/10 p-3 rounded-md">Decoration and Theming</li>
            <li className="bg-white/5 border border-white/10 p-3 rounded-md">Photo and Videography</li>
            <li className="bg-white/5 border border-white/10 p-3 rounded-md">Sound, Lighting, and AV Setup</li>
            <li className="bg-white/5 border border-white/10 p-3 rounded-md">MC, Host, or Entertainment</li>
            <li className="bg-white/5 border border-white/10 p-3 rounded-md">Custom Catering and Snacks</li>
            <li className="bg-white/5 border border-white/10 p-3 rounded-md">Event Planning and Coordination</li>
            </ul>
        </motion.div>

    </div>
            

      {/* <div className="relative container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl md:max-w-2xl lg:max-w-3xl"
        >
          <p className="uppercase tracking-[0.25em] text-gray-500 text-xs mb-4">
            Crafting meaningful celebrations
          </p>

          <h2 className="text-4xl md:text-6xl font-style text-maroon leading-tight mb-6">
            Celebrate with <span className="italic">Goasaya</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            A warm and intimate venue where design meets experience. Whether you
            are hosting a milestone celebration or a refined private gathering,
            Goasaya provides a curated space shaped for memorable moments.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-3">Perfect For</h4>
            <ul className="space-y-2 text-gray-700">
              {[
                "Birthday Celebrations",
                "Brand Activations",
                "Corporate Gatherings",
                "Community Events",
                "Content and Media Shoots",
                "Private Dining",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-black hover:font-semibold transition-all duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-3">Available Add Ons</h4>
            <ul className="space-y-2 text-gray-700">
              {[
                "Premium Decoration",
                "Photo and Video Production",
                "Curated Catering",
                "Live Music and MC",
                "Kids Activities",
                "Full Event Coordination",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-black hover:font-semibold transition-all duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
}
