// import Head from "../head";
// import dynamic from "next/dynamic";

// const ReservationPage = dynamic(() => import('@/components/pages/ReservationPage'), {ssr: true});

// export default function Reservation() {
//   return (
//     <>
//         <Head 
//             title= "Reserve Your Table | GOASAYA Luxury Fine Dining"
//             description= "Book your table at GOASAYA today. Enjoy Michelin-level Asian dining in a sophisticated cave-inspired setting. Reserve for an unforgettable culinary adventure."
//             url="https://www.goasaya.com"
//             keywords="book table restaurant, fine dining reservation, goasaya booking, luxury dining reservation, best asian fine dining"
//             image="https://www.goasaya.com/logo/09.jpg"
//         />
//         <ReservationPage/>
//     </>
//   );
// }

// components/pages/ReservationPage.tsx
"use client";

import Image from "next/image";
import ReservationForm from "@/components/ui/ReservationForm";

export default function ReservationPage() {
    return (
        <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-10">
                <Image
                    // Changed to webp if you have it! If not, change back to goa9.JPG
                    src="/images/webp/goa9.webp" 
                    alt="Goasaya Interior"
                    fill
                    priority
                    className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>
            
            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-6 py-28 md:py-32 w-full">
                <ReservationForm />
            </div>
        </section>
    );
}