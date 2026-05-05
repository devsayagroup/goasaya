// // "use client";

// // import { useSearchParams } from "next/navigation";
// // import { useMemo, useState } from "react";
// // import { motion } from "framer-motion";
// // import { eventIndex } from "@/content/events/event-index";
// // import { trackEvent } from "@/lib/analytics";

// // export default function ReservationForm() {
// //   const searchParams = useSearchParams();
// //   const slug = searchParams.get("event");
// //   const priceParam = searchParams.get("price");
// //   const priceFromUrl = priceParam ? Number(priceParam) : undefined;

// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSuccess, setIsSuccess] = useState(false);

// //   const event = useMemo(
// //     () => eventIndex.find((e) => e.slug === slug),
// //     [slug]
// //   );

// //   if (!event) {
// //     return (
// //       <section className="py-24 text-center text-gray-400">
// //         Invalid reservation link
// //       </section>
// //     );
// //   }

// //   const { remainingSeats, isFull } = event;

// //   const pricePerPax =
// //     typeof priceFromUrl === "number" && !Number.isNaN(priceFromUrl)
// //       ? priceFromUrl
// //       : event.price;

// //   const [form, setForm] = useState({
// //     name: "",
// //     phone: "",
// //     pax: 1,
// //   });

// //   const totalPrice =
// //     typeof pricePerPax === "number"
// //       ? pricePerPax * form.pax
// //       : undefined;

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (isFull || form.pax > remainingSeats || isSubmitting) return;

// //     setIsSubmitting(true);

// //     trackEvent(event.tracking ?? "event_reservation_submit", {
// //       event: event.title,
// //       pax: form.pax,
// //       price: pricePerPax,
// //       total: totalPrice,
// //     });

// //     try {
// //       await fetch("/api/reservation", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           event: event.title,
// //           date: event.date,
// //           time: event.time,
// //           name: form.name,
// //           phone: form.phone,
// //           pax: form.pax,
// //           pricePerPax,
// //           total: totalPrice,
// //         }),
// //       });
// //     } catch (error) {
// //       console.error("Failed to submit reservation:", error);
// //     }
// //     setIsSuccess(true);

// //     setTimeout(() => {
// //       const query = new URLSearchParams({
// //         event: event.title,
// //         pax: form.pax.toString(),
// //         total: totalPrice?.toString() ?? "",
// //       }).toString();

// //       window.location.href = `/reservation/thank-you?${query}`;
// //     }, 1500);

// //     setIsSubmitting(false);
// //   };

// //   return (
// //     <section className="bg-black/85 max-w-7xl mx-auto text-white rounded-xl py-12 md:py-16 px-6">
// //     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

// //       <div className="flex flex-col justify-center md:justify-start">
// //         <motion.h1
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-2xl md:text-5xl font-style uppercase mb-8"
// //         >
// //           Event Reservation
// //         </motion.h1>

// //         <div className="rounded-lg border border-white/10 bg-white/5 p-6">
// //           <p className="text-xl font-semibold">{event.title}</p>

// //           {(event.date || event.time) && (
// //             <p className="text-sm text-gray-300 mt-1">
// //               {event.date} {event.time && `· ${event.time}`}
// //             </p>
// //           )}

// //           <p className="mt-4 text-sm">
// //             {isFull ? (
// //               <span className="text-red-400">Fully Booked</span>
// //             ) : (
// //               <span className="text-gray-300">
// //                 {remainingSeats} seats left
// //               </span>
// //             )}
// //           </p>

// //           {!isFull && (
// //             <p className="text-xs text-gray-400 mt-2 leading-relaxed">
// //               Seats are limited. Reservations are confirmed after submission.
// //             </p>
// //           )}
// //         </div>
// //       </div>

// //       <form onSubmit={handleSubmit} className="space-y-6">

// //         <div>
// //           <label className="block text-sm mb-2 text-gray-300">Name</label>
// //           <input
// //             required
// //             value={form.name}
// //             onChange={(e) =>
// //               setForm({ ...form, name: e.target.value })
// //             }
// //             className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-2 text-gray-300">
// //             Phone Number
// //           </label>
// //           <input
// //             required
// //             value={form.phone}
// //             onChange={(e) =>
// //               setForm({ ...form, phone: e.target.value })
// //             }
// //             className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-2 text-gray-300">Pax</label>
// //           <input
// //             type="number"
// //             min={1}
// //             max={remainingSeats}
// //             value={form.pax}
// //             disabled={isFull || isSubmitting}
// //             onChange={(e) =>
// //               setForm({ ...form, pax: Number(e.target.value) })
// //             }
// //             className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
// //           />
// //           {!isFull && (
// //             <p className="text-xs text-gray-400 mt-1">
// //               Maximum {remainingSeats} pax available
// //             </p>
// //           )}
// //         </div>

// //         {typeof pricePerPax === "number" && (
// //           <div className="rounded-md bg-white/5 p-4 text-sm">
// //             <div className="flex justify-between text-gray-300">
// //               <span>Price / Pax</span>
// //               <span>IDR {pricePerPax.toLocaleString()}</span>
// //             </div>
// //             <div className="flex justify-between font-semibold mt-2">
// //               <span>Total</span>
// //               <span>IDR {totalPrice?.toLocaleString()}</span>
// //             </div>
// //           </div>
// //         )}

// //         {isSuccess && (
// //           <div className="text-sm text-green-400 text-center">
// //             Registration successful. Redirecting…
// //           </div>
// //         )}

// //         <div className="pt-6 text-center">
// //           <motion.button
// //             whileHover={!isSubmitting ? { scale: 1.01 } : undefined}
// //             whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
// //             type="submit"
// //             disabled={isSubmitting || isFull}
// //             className={`w-full md:w-auto px-10 py-3 rounded-md  cursor-pointer font-style text-sm tracking-wide ${
// //               isSubmitting || isFull
// //                 ? "bg-gray-600 cursor-not-allowed"
// //                 : "bg-[#FFE3AF] text-black"
// //             }`}
// //           >
// //             {isFull
// //               ? "Fully Booked"
// //               : isSubmitting
// //               ? "Submitting..."
// //               : "Confirm Reservation"}
// //           </motion.button>
// //         </div>
// //       </form>

// //     </div>
// //   </section>
// //   );
// // }

// "use client";

// import { useSearchParams } from "next/navigation";
// import { useMemo, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { eventIndex } from "@/content/events/event-index";
// import { trackEvent } from "@/lib/analytics";

// type EventItem = {
//   slug: string;
//   title: string;
//   date?: string;
//   time?: string;
//   price?: number;
//   remainingSeats?: number;
//   isFull?: boolean;
//   tracking?: string;
// };

// const GENERAL_SLUG = "__general__";

// export default function ReservationForm() {
//   const searchParams = useSearchParams();

//   const urlSlug = searchParams.get("event") || "";
//   const priceParam = searchParams.get("price");
//   const priceFromUrl = priceParam ? Number(priceParam) : undefined;

//   const [selectedSlug, setSelectedSlug] = useState<string>(urlSlug || GENERAL_SLUG);

//   useEffect(() => {
//     setSelectedSlug(urlSlug || GENERAL_SLUG);
//   }, [urlSlug]);

//   const selectedEvent = useMemo(() => {
//     if (selectedSlug === GENERAL_SLUG) return null;
//     return (eventIndex as EventItem[]).find((e) => e.slug === selectedSlug) || null;
//   }, [selectedSlug]);

//   const isInvalidUrlEvent = Boolean(urlSlug) && !selectedEvent;

//   const isGeneral = selectedSlug === GENERAL_SLUG;

//   const remainingSeats = selectedEvent?.remainingSeats ?? 0;
//   const isFull = selectedEvent?.isFull ?? false;

//   const pricePerPax =
//     typeof priceFromUrl === "number" && !Number.isNaN(priceFromUrl)
//       ? priceFromUrl
//       : selectedEvent?.price;

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     pax: 1,

//     // general-only inputs
//     manualTitle: "",
//     manualDate: "",
//     manualTime: "",
//   });

//   const resolvedTitle = selectedEvent?.title || (isGeneral ? form.manualTitle : "");
//   const resolvedDate = selectedEvent?.date || (isGeneral ? form.manualDate : "");
//   const resolvedTime = selectedEvent?.time || (isGeneral ? form.manualTime : "");

//   const resolvedPricePerPax = typeof pricePerPax === "number" ? pricePerPax : undefined;
//   const totalPrice =
//     selectedEvent && typeof resolvedPricePerPax === "number"
//       ? resolvedPricePerPax * form.pax
//       : undefined;

//   const paxValid = selectedEvent ? form.pax >= 1 && form.pax <= remainingSeats : form.pax >= 1;

//   const canSubmit =
//     !isSubmitting &&
//     form.name.trim().length > 0 &&
//     form.phone.trim().length > 0 &&
//     paxValid &&
//     // event guard
//     (!selectedEvent ? true : !isFull) &&
//     // general required fields
//     (!isGeneral ||
//       (form.name.trim().length > 0 &&
//       form.phone.trim().length > 0 &&
//         form.manualDate.trim().length > 0 &&
//         form.manualTime.trim().length > 0));

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!canSubmit) return;

//     setIsSubmitting(true);

//     const payload = {
//       event: resolvedTitle,
//       date: resolvedDate,
//       time: resolvedTime,
//       name: form.name,
//       phone: form.phone,
//       pax: form.pax,

//       ...(selectedEvent
//         ? {
//             pricePerPax: resolvedPricePerPax,
//             total: totalPrice,
//           }
//         : {}),

//       source: selectedEvent ? "event" : "general",
//       slug: selectedEvent?.slug ?? null,
//     };

//     trackEvent(selectedEvent?.tracking ?? "reservation_submit", {
//       event: resolvedTitle || "General Reservation",
//       slug: selectedEvent?.slug ?? "general",
//       pax: form.pax,
//       ...(selectedEvent ? { price: resolvedPricePerPax, total: totalPrice } : {}),
//     });

//     try {
//       const res = await fetch("/api/reservation", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         trackEvent("reservation_submit_failed", {
//           status: res.status,
//           slug: selectedEvent?.slug ?? "general",
//         });
//         setIsSubmitting(false);
//         return;
//       }
//     } catch (error) {
//       console.error("Failed to submit reservation:", error);
//       trackEvent("reservation_submit_failed", {
//         error: "network_error",
//         slug: selectedEvent?.slug ?? "general",
//       });
//       setIsSubmitting(false);
//       return;
//     }

//     setIsSuccess(true);

//     setTimeout(() => {
//       const query = new URLSearchParams({
//         source: selectedEvent ? "event" : "general",

//         event: resolvedTitle || "General Reservation",
//         name: form.name,
//         phone: form.phone,
//         date: resolvedDate || "",
//         time: resolvedTime || "",
//         pax: String(form.pax),

//         // include only if exists
//         ...(selectedEvent && typeof totalPrice === "number"
//           ? { total: String(totalPrice) }
//           : {}),
//       }).toString();

//       window.location.href = `/reservation/thank-you?${query}`;
//     }, 900);

//     setIsSubmitting(false);
//   };

//   return (
//     <section className="bg-black/85 max-w-7xl mx-auto text-white rounded-xl py-12 md:py-16 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* LEFT */}
//         <div className="flex flex-col justify-center md:justify-start">
//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center text-3xl md:text-5xl font-style uppercase mb-8"
//           >
//             Reservation
//           </motion.h1>

//           {isInvalidUrlEvent && (
//             <p className="mb-4 text-sm text-amber-200/90">
//               The reservation link is invalid. Please select an event below or continue with a general reservation.
//             </p>
//           )}

//           <div className="rounded-lg border border-white/10 bg-white/5 p-6">
//             {!urlSlug && (
//               <div className="mb-5">
//                 <p className="text-xs text-white/60 mb-4">
//                   Select Reservation Type
//                 </p>
//                 <select
//                   value={selectedSlug}
//                   onChange={(e) => setSelectedSlug(e.target.value)}
//                   className="w-full bg-black/30 border border-white/10 rounded-md py-3 outline-none text-white"
//                 >
//                   <option value={GENERAL_SLUG} className="text-black">
//                     General Reservation
//                   </option>
//                   {(eventIndex as EventItem[]).map((ev) => (
//                     <option key={ev.slug} value={ev.slug} className="text-black">
//                       {ev.title}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             <p className="text-xl font-semibold">
//               {selectedEvent?.title || (isGeneral ? "General Reservation" : "Event")}
//             </p>

//             {(resolvedDate || resolvedTime) && (
//               <p className="text-sm text-gray-300 mt-1">
//                 {resolvedDate} {resolvedTime && `· ${resolvedTime}`}
//               </p>
//             )}

//             {selectedEvent && (
//               <p className="mt-4 text-sm">
//                 {isFull ? (
//                   <span className="text-red-400">Fully Booked</span>
//                 ) : (
//                   <span className="text-gray-300">{remainingSeats} seats left</span>
//                 )}
//               </p>
//             )}

//             {isGeneral && (
//               <p className="mt-4 text-xs text-white/55 leading-relaxed">
//                 Submit your preferred date and time — we will confirm availability and details via WhatsApp.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {isGeneral && (
//             <>
//               <div>
//                 <label className="block text-sm mb-2 text-gray-300">Reservation Title</label>
//                 <input
//                   required
//                   value={form.manualTitle}
//                   onChange={(e) => setForm({ ...form, manualTitle: e.target.value })}
//                   placeholder="e.g. Dinner / Anniversary / Birthday"
//                   className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm mb-2 text-gray-300">Date</label>
//                   <input
//                     required
//                     type="date"
//                     value={form.manualDate}
//                     onChange={(e) => setForm({ ...form, manualDate: e.target.value })}
//                     className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm mb-2 text-gray-300">Time</label>
//                   <input
//                     required
//                     type="time"
//                     value={form.manualTime}
//                     onChange={(e) => setForm({ ...form, manualTime: e.target.value })}
//                     className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Name</label>
//             <input
//               required
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
//             <input
//               required
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
//             />
//           </div>

//           {/* PAX (for both) */}
//           <div>
//             <label className="block text-sm mb-2 text-gray-300">Pax</label>
//             <input
//               type="number"
//               min={1}
//               max={selectedEvent ? remainingSeats : undefined}
//               value={form.pax}
//               disabled={isSubmitting || (selectedEvent ? isFull : false)}
//               onChange={(e) => setForm({ ...form, pax: Number(e.target.value) })}
//               className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
//             />
//             {selectedEvent && !isFull && (
//               <p className="text-xs text-gray-400 mt-1">
//                 Maximum {remainingSeats} pax available
//               </p>
//             )}
//           </div>

//           {/* EVENT-only: price summary */}
//           {selectedEvent && typeof resolvedPricePerPax === "number" && (
//             <div className="rounded-md bg-white/5 p-4 text-sm">
//               <div className="flex justify-between text-gray-300">
//                 <span>Price / Pax</span>
//                 <span>IDR {resolvedPricePerPax.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between font-semibold mt-2">
//                 <span>Total</span>
//                 <span>IDR {totalPrice?.toLocaleString()}</span>
//               </div>
//             </div>
//           )}

//           {isSuccess && (
//             <div className="text-sm text-green-400 text-center">
//               Registration successful. Redirecting…
//             </div>
//           )}

//           <div className="pt-6 text-center">
//             <motion.button
//               whileHover={!isSubmitting ? { scale: 1.01 } : undefined}
//               whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
//               type="submit"
//               disabled={!canSubmit}
//               className={[
//                 "w-full md:w-auto px-10 py-3 rounded-md font-style text-sm tracking-wide",
//                 !canSubmit ? "bg-gray-600 cursor-not-allowed" : "bg-[#FFE3AF] text-black",
//               ].join(" ")}
//             >
//               {selectedEvent?.isFull ? "Fully Booked" : isSubmitting ? "Submitting..." : "Confirm Reservation"}
//             </motion.button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }




// components/ui/ReservationForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pax: 2, // Defaulting to 2 is standard for fine dining
    date: "",
    time: "",
    occasion: "", 
  });

  const canSubmit =
    !isSubmitting &&
    form.name.trim().length > 0 &&
    form.phone.trim().length > 0 &&
    form.date.trim().length > 0 &&
    form.time.trim().length > 0 &&
    form.pax >= 1;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);

    const payload = {
      source: "general",
      name: form.name,
      phone: form.phone,
      pax: form.pax,
      date: form.date,
      time: form.time,
      occasion: form.occasion || "General Reservation",
    };

    trackEvent("reservation_submit", {
      event: payload.occasion,
      pax: payload.pax,
    });

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        trackEvent("reservation_submit_failed", { status: res.status });
        setIsSubmitting(false);
        return;
      }
    } catch (error) {
      console.error("Failed to submit reservation:", error);
      trackEvent("reservation_submit_failed", { error: "network_error" });
      setIsSubmitting(false);
      return;
    }

    setIsSuccess(true);

    // Redirect to Thank You page
    setTimeout(() => {
      const query = new URLSearchParams({
        source: "general",
        event: form.occasion || "General Reservation",
        name: form.name,
        phone: form.phone,
        date: form.date,
        time: form.time,
        pax: String(form.pax),
      }).toString();

      window.location.href = `/reservation/thank-you?${query}`;
    }, 900);
  };

  return (
    <section className="bg-black/85 backdrop-blur-md container mx-auto text-white rounded-xl py-12 md:py-20 px-6 md:px-12 border border-white/5 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* LEFT: Copy & Instructions */}
        <div className="flex flex-col md:pr-20 justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-style uppercase tracking-tight mb-6 text-[#FFE3AF]"
          >
            Reserve Your Table
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-white/70  font-text text-sm  leading-relaxed"
          >
            <p>
              Step away from the outside world and immerse yourself in the GOASAYA experience. 
            </p>
            <p>
              Please provide your desired date and time below. For special arrangements, VIP requests, or dietary requirements, you may specify your occasion. Our concierge team will reach out via WhatsApp to confirm your booking details.
            </p>
            <div className="pt-4 border-t border-white/10 mt-6">
               <p className="text-xs uppercase tracking-widest text-white/50">For immediate assistance</p>
               <p className="mt-2">+62 813-3838-2845</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: The Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-white/60">Date *</label>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FFE3AF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-white/60">Time *</label>
              <input
                required
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FFE3AF] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-white/60">Name *</label>
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FFE3AF] transition-colors placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-white/60">Phone Number *</label>
              <input
                required
                placeholder="WhatsApp Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FFE3AF] transition-colors placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-white/60">Number of Guests *</label>
              <input
                required
                type="number"
                min={1}
                value={form.pax}
                disabled={isSubmitting}
                onChange={(e) => setForm({ ...form, pax: Number(e.target.value) })}
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FFE3AF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2 text-white/60">Occasion (Optional)</label>
              <input
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                placeholder="e.g., Anniversary, Birthday"
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-[#FFE3AF] transition-colors placeholder:text-white/20"
              />
            </div>
          </div>

          {isSuccess && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-green-400 text-center pt-2">
              Request received. Redirecting...
            </motion.div>
          )}

          <div className="pt-8">
            <motion.button
              whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
              whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
              type="submit"
              disabled={!canSubmit}
              className={[
                "w-full py-4 rounded-sm font-style uppercase tracking-widest text-sm transition-all duration-300",
                !canSubmit 
                  ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/10" 
                  : "bg-[#FFE3AF] text-black shadow-lg shadow-[#FFE3AF]/20",
              ].join(" ")}
            >
              {isSubmitting ? "Processing..." : "Request Reservation"}
            </motion.button>
          </div>
        </form>

      </div>
    </section>
  );
}