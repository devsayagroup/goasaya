import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <style>
        {`
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
            animation-delay: 0.2s;
            opacity: 0; 
          }
        `}
      </style>

      <div className="absolute inset-0 z-0 animate-fade-bg">
        <Image 
          src="/images/webp/goa10.webp" 
          alt="Goasaya Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-maroon/85" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 animate-reveal">
        <Image 
          src="/logo/LogotypeIcon-01.png" 
          width={100} 
          height={100} 
          alt="Goasaya Logo"
          className="object-contain w-auto h-auto"
          priority
        />
      </div>
    </div>
  );
}