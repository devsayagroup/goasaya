import Head from "../head";
import dynamic from "next/dynamic";
const Floor1Section = dynamic(() => import('@/components/sections/Floor1Section'), {ssr: true});
const Floor2Section = dynamic(() => import('@/components/sections/Floor2Section'), {ssr: true});

export default function Experience() {
  return (
    <>
      <Head 
          title= "The GOASAYA Experience | Asian Progressive Fine Dining Redefined"
          description= "Immerse yourself in the GOASAYA experience — an Asian progressive tasting journey in a cave-inspired atmosphere. Discover harmony between texture, flavor, and artistry through our curated menus and sensory design."
          url="https://www.goasaya.com"
          keywords="Asian tasting menu, immersive dining experience, luxury restaurant interior, progressive Asian cuisine, cave restaurant design, fine dining tasting experience"
          image="https://www.goasaya.com/logo/09.jpg"
      />
      <Floor1Section/>
      <Floor2Section/>
    </>
  );
}