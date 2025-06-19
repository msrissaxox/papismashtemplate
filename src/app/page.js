//1. FIX MENU BAR
//2. FADE IN FOR ALL SECTIONS
//3. FIX ON THE MENU SECTION
//4. FIX REVIEWS SECTION

// bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent


import react from "react";

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
