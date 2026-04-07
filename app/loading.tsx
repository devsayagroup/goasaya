// import Image from "next/image";

// export default function Loading() {
//     return (
//       <div className="flex h-screen items-center bg-maroon justify-center z-10!important">
//         <div className="flex flex-col justify-center items-center gap-4">
//           <div className="loader z-20!important">
//             <Image src="/logo/LogotypeIcon-01.png" width={150} height={150} alt="Logo 7Sundays Network"/>
//           </div>
//         </div>
//       </div>
//     );
//   }


import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-maroon">
      <div className="flex flex-col items-center gap-8 animate-pulse">
        <Image 
          src="/logo/LogotypeIcon-01.png" 
          width={120} 
          height={120} 
          alt="Goasaya Logo"
          className="w-auto h-auto object-contain"
          priority 
        />
        <div className="flex flex-col items-center gap-4">
          <div className="h-px w-16 bg-[#FFE3AF]/40" />
          <p className="text-white/70 text-[10px] uppercase tracking-[0.5em] font-light">
            A Place Called Home
          </p>
        </div>
      </div>
    </div>
  );
}