import Head from "../head";
import AboutPage from "@/components/pages/AboutPage";

export default function About() {
  return (
    <>
        <Head 
            title= "About GOASAYA | The Art of Cave-Inspired Asian Dining"
            description= "Learn the story behind GOASAYA — where ancient cave aesthetics meet modern culinary innovation. Our philosophy blends Asian artistry, refined design, and exceptional hospitality to create a transcendent dining experience."
            url="https://www.goasaya.com"
            keywords="Asian fine dining concept, restaurant story, cave design restaurant, luxury dining story, fine dining philosophy, GOASAYA culinary journey"
            image="https://www.goasaya.com/logo/09.jpg"
        />

        <AboutPage/>
    </>
  );
}