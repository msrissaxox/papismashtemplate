//1. FIX MENU BAR
//3. FIX ON THE MENU SECTION
//4. FIX REVIEWS SECTION


import react from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Ingredients from "@/components/Ingredients";
import OnTheMenu from "@/components/OnTheMenu";
import Reviews from "@/components/Reviews";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
}
