'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BookingIframe() {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get('utm_source');

  // Derive the URL directly. No useEffect or useState needed!
  const iframeSrc = utmSource 
    ? `https://reservation.goasaya.com/embed?utm_source=${utmSource}` 
    : 'https://reservation.goasaya.com/embed';

  return (
    <iframe 
      // The key forces the iframe to reload if the URL changes upon hydration
      key={iframeSrc} 
      src={iframeSrc} 
      className="w-full h-[1200px] border-none"
      title="GoaSaya Reservation"
    />
  );
}

export default function ReservationPage() {
  return (
    <main>
       <Suspense fallback={<div>Loading reservation...</div>}>
         <BookingIframe />
       </Suspense>
    </main>
  );
}