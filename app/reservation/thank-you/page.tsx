"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ReservationThankYouPage() {
  const params = useSearchParams();

  const source = params.get("source"); // "event" | "general"
  const isGeneral = source === "general";

  const event = params.get("event");
  const activity = params.get("activity"); // optional legacy
  const pax = params.get("pax");
  const total = params.get("total");

  const name = params.get("name");
  const phone = params.get("phone");
  const date = params.get("date");
  const time = params.get("time");

  const hasDetails =
    event || activity || name || phone || date || time || pax || total;

  const dateTime =
    date && time ? `${date} · ${time}` : date ? date : time ? time : null;

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/goa9.JPG"
          alt="Goa Saya"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative mx-auto container px-6 md:px-14 py-28">
        <div className="max-w-xl mx-auto w-full bg-black/85 rounded-xl p-10 md:p-12 text-center">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-style mb-3">
            Reservation Received
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Thank you for registering with GoaSaya. Your request has been
            successfully submitted and is currently{" "}
            <span className="text-white font-medium">pending confirmation</span>.
          </p>

          {/* Reservation Summary */}
          {hasDetails && (
            <div className="text-sm text-gray-300 bg-white/5 rounded-lg py-5 px-6 mb-8 text-left space-y-2">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                Reservation Details
              </p>

              {event && (
                <p>
                  <strong>Reservation:</strong> {event}
                </p>
              )}

              {activity && (
                <p>
                  <strong>Experience:</strong> {activity}
                </p>
              )}

              {name && (
                <p>
                  <strong>Name:</strong> {name}
                </p>
              )}

              {phone && (
                <p>
                  <strong>Phone:</strong> {phone}
                </p>
              )}

              {dateTime && (
                <p>
                  <strong>Date & Time:</strong> {dateTime}
                </p>
              )}

              {pax && (
                <p>
                  <strong>Guests:</strong> {pax} pax
                </p>
              )}

              {!isGeneral && total && (
                <p>
                  <strong>Total Amount:</strong> IDR{" "}
                  {Number(total).toLocaleString("id-ID")}
                </p>
              )}
            </div>
          )}

          {/* What Happens Next */}
          <div className="text-sm text-gray-300 mb-8 text-left space-y-2">
            <p className="font-semibold text-white">What happens next?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Our team will review availability for your selected request.</li>
              <li>You will receive a confirmation message via WhatsApp.</li>
              {!isGeneral && <li>Once confirmed, payment instructions will be finalized.</li>}
            </ul>
          </div>

          {/* Payment Info (EVENT ONLY) */}
          {!isGeneral && (
            <div className="text-sm text-gray-300 bg-white/5 rounded-lg py-5 px-6 mb-8 text-left">
              <p className="font-semibold text-white mb-2">Payment Information</p>
              <p>
                Bank Transfer (BCA)
                <br />
                <strong>5660621000</strong>
                <br />
                A/N <strong>PT MAHA KARYA GOASAYA</strong>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Please proceed with payment only after receiving confirmation from our team.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <Link
              href={`https://wa.me/6281338382845?text=${encodeURIComponent(
                `Hello GOASAYA Team, I’ve just submitted a reservation.\n\nName: ${name ?? "-"}\nReservation: ${event ?? "-"}\nDate & Time: ${dateTime ?? "-"}\nPax: ${pax ?? "-"}\n\nI would like to confirm availability. Thank you.`
              )}`}
              target="_blank"
              className="bg-[#FFE3AF] text-black font-semibold py-3 rounded-md text-sm tracking-wide hover:opacity-90 transition"
            >
              Chat with Admin for Confirmation
            </Link>

            <Link href="/" className="text-gray-400 text-sm hover:text-white transition">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
