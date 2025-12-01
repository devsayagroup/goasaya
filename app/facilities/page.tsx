import Head from "../head";
import FacilitiesPage from "@/components/pages/FacilitiesPage";

export default function Facilities() {
  return (
    <>
        <Head 
            title= "Facilities | GOASAYA Luxury Fine Dining"
            description= "Book your table at GOASAYA today. Enjoy Michelin-level Asian dining in a sophisticated cave-inspired setting. Reserve for an unforgettable culinary adventure."
            url="https://www.goasaya.com"
            keywords="book table restaurant, fine dining reservation, goasaya booking, luxury dining reservation, best asian fine dining"
            image="https://www.goasaya.com/logo/09.jpg"
        />
        <FacilitiesPage/>
    </>
  );
}