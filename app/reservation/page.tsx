// ON THE MAIN DOMAIN: components/pages/ReservationPage.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReservationContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('utm_source') || searchParams.get('source') || 'website_direct';
    const campaign = searchParams.get('utm_campaign') || '';
    
    const iframeSrc = `https://reservation.goasaya.com/embed?source=${encodeURIComponent(source)}&utm_campaign=${encodeURIComponent(campaign)}`;

    return (
        // Stripped away h-screen and min-h-screen limits
        <div className="w-full bg-black pt-12"> 
            <iframe 
                src={iframeSrc} 
                // CRITICAL FIX: Hardcoded a massive height so the inner scrollbar never appears
                className="w-full h-[1200px] border-none"
                title="GoaSaya Reservations"
                loading="lazy"
                // Prevent iOS from trying to zoom or mess with the iframe bounds
                style={{ width: '1px', minWidth: '100%', borderRadius: "50px", padding: "30px" }}
            />
        </div>
    );
}

export default function ReservationPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black " />}>
            <ReservationContent />
        </Suspense>
    );
}