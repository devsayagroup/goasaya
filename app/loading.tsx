// import Image from "next/image";

// export default function Loading() {
//   return (
//     <div className="flex h-screen items-center bg-maroon justify-center z-10!important">
//       <div className="flex flex-col justify-center items-center gap-4">
//         <div className="loader z-20!important">
//           <Image src="/logo/LogotypeIcon-01.png" width={150} height={150} alt="Goasaya Logo"/>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Loading() {
  return (
    // Uses fixed inset-0 to guarantee it covers the entire screen perfectly
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* --- PURE CSS LUXURY ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-bg {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 0.5; transform: scale(1); }
        }
        @keyframes reveal-logo {
          0% { 
            clip-path: inset(100% 0 0 0); 
            transform: translateY(20px);
            opacity: 0;
          }
          100% { 
            clip-path: inset(0 0 0 0); 
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fade-bg {
          animation: fade-in-bg 2.5s ease-out forwards;
        }
        .animate-reveal {
          animation: reveal-logo 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s; /* Slight delay so the background starts first */
          opacity: 0; /* Keeps it hidden until the animation starts */
        }
      `}} />

      {/* Layer 1: The Wallpaper Fade */}
      <div className="absolute inset-0 z-0 animate-fade-bg">
        <Image 
          src="/images/webp/goa10.webp" 
          alt="Goasaya Background"
          fill
          className="object-cover" // Grayscale keeps it subtle
          priority
        />
        {/* Dark overlay so the wallpaper doesn't overpower the logo */}
        <div className="absolute inset-0 bg-maroon/85" />
      </div>

      {/* Layer 2: The Logo Reveal */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-reveal">
        <Image 
          src="/logo/LogotypeIcon-01.png" 
          width={150} 
          height={150} 
          alt="Goasaya Logo"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}