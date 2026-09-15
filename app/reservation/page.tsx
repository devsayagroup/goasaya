// ON THE MAIN DOMAIN: components/pages/ReservationPage.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReservationContent() {
    const searchParams = useSearchParams();
    // 1. Grab ONLY the utm_source, ignore medium and Facebook/Google trackers
    const utmSource = searchParams.get('utm_source');

    // 2. Attach it to the clean embed URL
    const iframeUrl = new URL('https://reservation.goasaya.com/embed');
    if (utmSource) {
        iframeUrl.searchParams.set('utm_source', utmSource);
    }

    return (
        // Stripped away h-screen and min-h-screen limits
        <div className="w-full bg-black pt-12"> 
            <iframe 
                src={iframeUrl.toString()}
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