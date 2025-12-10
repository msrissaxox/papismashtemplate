import react from "react";

import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import OurStory from "@/components/OurStory";
import Ingredients from "@/components/Ingredients";
import OnTheMenu from "@/components/OnTheMenu";

import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import './globals.css'; // Ensure you have global styles imported


export default function Home() {


  return (
    <div>
      <Header />
      <HeroNew />
      <OurStory />
      <Ingredients />
      <OnTheMenu />
      {/* <Reviews /> */}
      <VisitUs />
      <Footer />
    </div>
  );
}
