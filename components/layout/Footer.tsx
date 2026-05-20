import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const d = new Date();
    const year = d.getFullYear();
    
    const pathname = usePathname();
      if (pathname === "/links") return null;

    return (
      <footer className="relative bg-maroon text-white py-8 px-6 md:py-12" id="contact">
        <div className="absolute inset-0 ">
            <Image
                src="/images/footer-goa.png"
                alt="Asian dining background"
                fill
                sizes="100vw"
                className="object-cover object-center brightness-75 bg-maroon"
            />
            <div className="absolute inset-0 bg-maroon/85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-2 md:px-4">
            <div className="flex flex-col justify-center items-center my-8 font-text">
                <Link href="/">
                    <Image src="/logo/LogotypeIcon-01.png" alt='Logo Goasaya' width={180} height={180} />
                </Link>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mt-12 w-full">
                    <div className="hidden md:block absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
                    <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
                    <div className="hidden md:block absolute inset-y-0 left-3/4 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="font-style text-lg mb-6">Get In Touch</h1>
                        <div className="flex flex-col text-center text-sm gap-1">
                        <span>
                            <Link href="tel:+6281338382845" className="hover:text-[#FFE3AF] transition-colors">
                                +62 813 3838 2845
                            </Link>
                        </span>
                        <span>
                            <Link href="mailto:marketing@sayagroup.id" className="hover:text-[#FFE3AF] transition-colors">
                                marketing@sayagroup.id
                            </Link>
                        </span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center text-center">
                        <h1 className="font-style text-lg mb-6">Address</h1>
                        <div className="flex flex-col text-center text-sm">
                            <span className="text-center">Entertainment District, PIK 2</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center text-center">
                        <h1 className="font-style text-lg mb-6">Opening Hours</h1>
                        <div className="flex flex-col text-center text-sm gap-1">
                        <span className="font-bold text-[#FFE3AF]">Everyday</span>
                        <span>11:00 AM - 00:00 AM</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center text-center">
                        <h1 className="font-style text-lg mb-6">Social Media</h1>
                        <div className="flex flex-row items-center gap-4">
                        <Link
                            aria-label="instagram"
                            href="https://www.instagram.com/goasaya.jkt"
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                        >
                            <Image
                            src="/images/icon-ig.webp"
                            alt="Instagram Goasaya"
                            width={30}
                            height={30}
                            />
                        </Link>
                        <Link
                            aria-label="tiktok"
                            href="https://www.tiktok.com/@goasaya.jkt"
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                        >
                            <Image
                            src="/images/icon-tt.webp"
                            alt="Tiktok Goasaya"
                            width={30}
                            height={30}
                            />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="border-t border-white/20 mt-6 md:mt-2 pt-8 text-center text-sm md:text-md text-white/80">
                <p>
                    © {year} GOASAYA by {" "}
                    <Link href="https://www.sayagroup.id" target="_blank" rel="noreferrer" className="text-[#FFE3AF] hover:underline">
                        Saya Group
                    </Link>
                </p>
            </div>
        </div>
      </footer>
    );
}