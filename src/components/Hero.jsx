"use client";
import React, { useEffect, useState } from "react";
import OnTheMenu from "./OnTheMenu";

export default function Hero() {

    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
    
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 to-white text-white px-4 py-10 md:py-20 pb-20 ">
      {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold pt-20 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        PAPI SMASH'D
      </h1> */}
       <img src="Papi-Logo.avif" alt="Papi Smash'd Logo" />
      {/* <h2 className="p-10 text-black text-2xl">
       
        Delicious Food for Every Mood{" "}
      </h2> */}
      {/* <img src="papi1.png" alt="Papi Smash'd Logo" 
  className="w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl h-auto mt-4"
 /> */}


    </div>
    <OnTheMenu />
    </section>
  );
}
