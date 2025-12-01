import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SpecialEventSection from "@/components/sections/SpecialEventSection";
import EventSection from "@/components/sections/EventSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "GOASAYA | Asian Progressive Dining Experience",
  description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
  image: "/logo/09.jpg",
  url: "https://goasaya.com",
});

export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <SpecialEventSection/>
      <EventSection/>
    </>
  );
}
