import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Ingredients from "@/components/Ingredients";
import OnTheMenu from "@/components/OnTheMenu";
import Reviews from "@/components/Reviews";
import VisitUs from "@/components/VisitUs";

export default function Home() {
  return (
    <div>
<Header />
<Hero />
<OurStory />
<Ingredients />
<OnTheMenu />
<Reviews />
<VisitUs />

    </div>

  );
}
