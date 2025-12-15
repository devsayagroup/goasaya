"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function ReservationForm() {
  const searchParams = useSearchParams();
  const eventName = searchParams.get("event");
  const eventDate = searchParams.get("date");
  const eventTime = searchParams.get("time");
  const eventTracking = searchParams.get("tracking");

  const isEventReservation = !!eventName; 

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    smoking: "No",
    pax: "",
    appetizer:"",
    mainCourse:"",
    dessert:"",
    drinks:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({eventTracking})

    // trackEvent(eventTracking || "reservation_submit", {
    //   category: "Events Tracking",
    //   label: eventName || "General Reservation",
    //   pax: form.pax ? Number(form.pax) : 1,
    // });


  };

  return (
    <section className="bg-black/85 rounded-md text-white py-12 md:py-20 px-6 md:px-12">
      <div className="md:max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-style leading-tight uppercase mb-8 text-center"
        >
          {isEventReservation ? "Event Reservation" : "Reservation"}
        </motion.h2>

        {isEventReservation && (
          <div className="text-center mb-10 border border-gray-700 rounded-lg p-6 bg-white/5">
            <p className="text-xl font-semibold text-[#FFE3AF]">{eventName}</p>
            <p className="text-sm mt-1 text-gray-300">
              {eventDate} · {eventTime}
            </p>
            <p className="text-xs mt-2 text-gray-400 italic">Pre-reserved event slot</p>
          </div>
        )}

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6 font-text"
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            />
          </div>

          {!isEventReservation && (
            <>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm mb-2 text-gray-300">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all text-white"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-2 text-gray-300">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">Area</label>
                <select
                  name="smoking"
                  value={form.smoking}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
                >
                  <option value="Main Dining" className="text-black">Main Dining Room</option>
                  <option value="Glass Room" className="text-black">Glass Room (Smoking)</option>
                  <option value="The Cave" className="text-black">VIP The Cave (up to 8 pax)</option>
                  <option value="The Hole" className="text-black">VIP The Hole (up to 12 pax)</option>
                </select>
              </div>
            </>
          )}

          {/* Pax */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">Pax</label>
            <input
              type="number"
              name="pax"
              min="1"
              value={form.pax}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all"
            />
          </div>

          {/* Button */}
          <div className="pt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#FFE3AF] rounded-md text-black px-10 py-3 uppercase text-sm tracking-wider hover:bg-gray-200 transition-all"
            >
              Confirm Reservation
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}