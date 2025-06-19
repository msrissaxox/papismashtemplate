"use client";
import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

export default function Hero() {

    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500); // 500ms delay
    return () => clearTimeout(timer);
  }, []);

    // const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section
      className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-300 to-white text-white">
      <h1 className="text-7xl font-bold pt-20 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        PAPI SMASH'D
      </h1>
      <h2 className="p-10 text-black text-2xl">
        Delicious Food for Every Mood{" "}
      </h2>
      <img src="papi1.png" alt="Papi Smash'd Logo" className="h-170 w-75%" />
    </div>
    </section>
  );
}
