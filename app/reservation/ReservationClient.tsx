// app/reservation/ReservationClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReservationContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('utm_source') || 'website_direct';
    
    const iframeSrc = `https://reservation.goasaya.com/embed?utm_source=${encodeURIComponent(source)}`;

    return (
        <div className="w-full bg-black pt-12"> 
            <iframe 
                key={iframeSrc} 
                src={iframeSrc} 
                className="w-full h-[1200px] border-none"
                title="GoaSaya Reservations"
                loading="lazy"
                style={{ width: '1px', minWidth: '100%', borderRadius: "50px", padding: "30px" }}
            />
        </div>
    );
}

export default function ReservationClient() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black " />}>
            <ReservationContent />
        </Suspense>
    );
}