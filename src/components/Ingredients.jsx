"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Ingredients() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
<section
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
<div className="relative w-full overflow-hidden">
    <div className="area">
        <ul className="circles">
               <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
<div className="relative z-20 py-16 md:py-20 lg:py-24">
      <div className="container m-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
          {/* Mobile/Tablet layout - stacked: title, image, text */}
          <div className="flex flex-col lg:hidden w-full">
            <h2 className="text-4xl quicksand font-bold text-center bg-black bg-clip-text text-transparent md:text-5xl mb-6">
              Fresh Ingredients
            </h2>
            <img
              src="burger3.jpg"
              className="w-full max-w-md mx-auto h-64 md:h-96 rounded-lg shadow-lg object-cover mb-6"
            />
            <p className="text-black text-base md:text-lg quicksand text-center">
              We believe extraordinary food starts with extraordinary ingredients. That's why our kitchen works directly with local farmers, ranchers, and artisans who share our commitment to sustainability and quality. Our menu shifts with the seasons, ensuring that every bite you take is at peak freshness and flavor. From the farm to your fork, fast.
            </p>
          </div>

          {/* Desktop layout - text and image side by side */}
          <div className="hidden lg:block lg:w-5/12">
            <h2 className="text-4xl quicksand font-bold text-center lg:text-left bg-black bg-clip-text text-transparent md:text-5xl mb-6">
              Fresh Ingredients
            </h2>
            <p className="text-black text-lg quicksand">
              We believe extraordinary food starts with extraordinary ingredients. That's why our kitchen works directly with local farmers, ranchers, and artisans who share our commitment to sustainability and quality. Our menu shifts with the seasons, ensuring that every bite you take is at peak freshness and flavor. From the farm to your fork, fast.
            </p>
          </div>
          <div className="hidden lg:block lg:w-5/12">
            <img
              src="burger3.jpg"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
