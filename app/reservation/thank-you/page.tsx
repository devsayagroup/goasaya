"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ReservationThankYouPage() {
  const params = useSearchParams();

  const event = params.get("event");
  const activity = params.get("activity");
  const pax = params.get("pax");
  const total = params.get("total");

  return (
    <section className="relative w-full text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image
            src="/images/goa9.JPG"
            alt="Goa Saya"
            fill
            priority
            className="object-cover object-center brightness-75"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/90"></div>
        </div>
        <div className="relative container px-6 md:px-14 py-30">
            <div className="max-w-xl  mx-auto w-full bg-black/75 text-white rounded-xl p-12 text-center">
        
        <h1 className="text-3xl md:text-4xl font-style mb-4">
          Thank You for Registering
        </h1>

        <p className="text-gray-300 mb-6">
          Your registration has been received.
          <br />
          Our team will confirm availability and contact you via WhatsApp.
        </p>

        {(event || activity) && (
          <div className="text-sm text-gray-300 bg-white/5 rounded-md py-4 px-8 mb-6 text-left">
            {event && <p><strong>Event:</strong> {event}</p>}
            {activity && <p><strong>Experience:</strong> {activity}</p>}
            {pax && <p><strong>Pax:</strong> {pax}</p>}
            {total && (
              <p>
                <strong>Total:</strong> IDR{" "}
                {Number(total).toLocaleString()}
              </p>
            )}
          </div>
        )}

        <div className="text-sm text-gray-300 mb-6">
          <p className="font-bold mb-1">Payment Method</p>
          <p>
            Bank Transfer
            <br />
            BANK BCA 5660621000
            <br />
            A/N PT MAHA KARYA GOASAYA
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="https://wa.me/6281338382845"
            target="_blank"
            className="bg-[#FFE3AF] font-semibold text-black py-3 rounded-md text-sm tracking-wide"
          >
            Chat with Admin
          </Link>

          <Link
            href="/"
            className="text-gray-400 text-sm hover:text-white transition"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
        </div>
    </section>
 
  );
}
