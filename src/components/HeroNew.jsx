"use client";
import React from "react";
import BuyButton from "./BuyButton";
import { useInView } from "react-intersection-observer";


export default function HeroNew() {
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
    
    <div className="relative z-20 px-6 pt-20 pb-16 md:px-12 md:py-20 lg:px-20 lg:py-24 md:mx-10 lg:mx-20 lg:mt-0 flex flex-col lg:flex-row gap-8 lg:gap-12 quicksand">
        <div className="flex flex-1 justify-center items-center flex-col text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl quicksand mb-6 lg:mb-0">
                Share your{" "}
                <span className="font-bold quicksand block lg:inline">
                    love for burgers!
                </span>
            </h1>
            
            {/* Image for mobile - shows only on mobile */}
            <div className="flex lg:hidden w-full justify-center items-center mb-6">
                <img 
                    src="burger.jpg" 
                    alt="burger photo" 
                    className="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg"
                />
            </div>
            
            <div className="w-full">
                <p className="mt-4 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                    est laborum.
                </p>
            </div>
            <div className="mt-6">
                <BuyButton />
            </div>
        </div>
        
        {/* Image for desktop - shows only on desktop */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
            <img 
                src="burger.jpg" 
                alt="burger photo" 
                className="w-full h-[500px] max-w-lg object-cover rounded-2xl shadow-lg"
            />
        </div>
    </div>
</div>
</section>
)
}