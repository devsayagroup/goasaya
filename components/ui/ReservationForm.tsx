"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { eventIndex } from "@/content/events/event-index";
import { trackEvent } from "@/lib/analytics";

export default function ReservationForm() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("event");
  const priceParam = searchParams.get("price");
  const priceFromUrl = priceParam ? Number(priceParam) : undefined;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const event = useMemo(
    () => eventIndex.find((e) => e.slug === slug),
    [slug]
  );

  if (!event) {
    return (
      <section className="py-24 text-center text-gray-400">
        Invalid reservation link
      </section>
    );
  }

  const { remainingSeats, isFull } = event;

  const pricePerPax =
    typeof priceFromUrl === "number" && !Number.isNaN(priceFromUrl)
      ? priceFromUrl
      : event.price;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pax: 1,
  });

  const totalPrice =
    typeof pricePerPax === "number"
      ? pricePerPax * form.pax
      : undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFull || form.pax > remainingSeats || isSubmitting) return;

    setIsSubmitting(true);

    trackEvent(event.tracking ?? "event_reservation_submit", {
      event: event.title,
      pax: form.pax,
      price: pricePerPax,
      total: totalPrice,
    });

    try {
      await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: event.title,
          date: event.date,
          time: event.time,
          name: form.name,
          phone: form.phone,
          pax: form.pax,
          pricePerPax,
          total: totalPrice,
        }),
      });
    } catch (error) {
      console.error("Failed to submit reservation:", error);
    }
    setIsSuccess(true);

    setTimeout(() => {
      const query = new URLSearchParams({
        event: event.title,
        pax: form.pax.toString(),
        total: totalPrice?.toString() ?? "",
      }).toString();

      window.location.href = `/reservation/thank-you?${query}`;
    }, 1500);

    setIsSubmitting(false);
  };

  return (
    <section className="bg-black/85 max-w-7xl mx-auto text-white rounded-xl py-12 md:py-16 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

      <div className="flex flex-col justify-center md:justify-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-5xl font-style uppercase mb-8"
        >
          Event Reservation
        </motion.h1>

        <div className="rounded-lg border border-white/10 bg-white/5 p-6">
          <p className="text-xl font-semibold">{event.title}</p>

          {(event.date || event.time) && (
            <p className="text-sm text-gray-300 mt-1">
              {event.date} {event.time && `· ${event.time}`}
            </p>
          )}

          <p className="mt-4 text-sm">
            {isFull ? (
              <span className="text-red-400">Fully Booked</span>
            ) : (
              <span className="text-gray-300">
                {remainingSeats} seats left
              </span>
            )}
          </p>

          {/* Optional helper copy */}
          {!isFull && (
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Seats are limited. Reservations are confirmed after submission.
            </p>
          )}
        </div>
      </div>

      {/* RIGHT — FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">
            Phone Number
          </label>
          <input
            required
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
          />
        </div>

        {/* Pax */}
        <div>
          <label className="block text-sm mb-2 text-gray-300">Pax</label>
          <input
            type="number"
            min={1}
            max={remainingSeats}
            value={form.pax}
            disabled={isFull || isSubmitting}
            onChange={(e) =>
              setForm({ ...form, pax: Number(e.target.value) })
            }
            className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
          />
          {!isFull && (
            <p className="text-xs text-gray-400 mt-1">
              Maximum {remainingSeats} pax available
            </p>
          )}
        </div>

        {/* Price Summary */}
        {typeof pricePerPax === "number" && (
          <div className="rounded-md bg-white/5 p-4 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Price / Pax</span>
              <span>IDR {pricePerPax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <span>Total</span>
              <span>IDR {totalPrice?.toLocaleString()}</span>
            </div>
          </div>
        )}

        {isSuccess && (
          <div className="text-sm text-green-400 text-center">
            Registration successful. Redirecting…
          </div>
        )}

        {/* Submit */}
        <div className="pt-6 text-center">
          <motion.button
            whileHover={!isSubmitting ? { scale: 1.05 } : undefined}
            whileTap={!isSubmitting ? { scale: 0.97 } : undefined}
            type="submit"
            disabled={isSubmitting || isFull}
            className={`w-full md:w-auto px-10 py-3 rounded-md uppercase text-sm tracking-wide ${
              isSubmitting || isFull
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#FFE3AF] text-black"
            }`}
          >
            {isFull
              ? "Fully Booked"
              : isSubmitting
              ? "Submitting..."
              : "Confirm Reservation"}
          </motion.button>
        </div>
      </form>

    </div>
  </section>
  );
}
