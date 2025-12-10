"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col items-center justify-center bg-white" id="ourstory">
        <div className="py-16 md:py-20 lg:py-24 bg-white w-full">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
              {/* Content section with title, image, and text stacked on mobile */}
              <div className="flex flex-col lg:hidden w-full">
                <h2 className="text-4xl text-center quicksand font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent md:text-5xl mb-6">
                  Our Story
                </h2>
                <img
                  src="burger6.jpg"
                  alt="Our Story"
                  className="w-full max-w-md mx-auto h-64 md:h-96 rounded-lg shadow-lg object-cover mb-6"
                />
                <p className="text-gray-600 quicksand text-base md:text-lg text-center">
                  It all started with a secret family recipe and a shared dream. For generations, our kitchen has perfected the art of simple, soulful cooking. Every dish is a tribute to our founders, crafted with fresh, locally-sourced ingredients and served with genuine warmth. This isn't just a meal—it's history on a plate.
                </p>
              </div>

              {/* Desktop layout - image and text side by side */}
              <div className="hidden lg:block lg:w-5/12">
                <img
                  src="burger6.jpg"
                  alt="Our Story"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="hidden lg:block lg:w-6/12">
                <h2 className="text-4xl text-center lg:text-left quicksand font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent md:text-5xl mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 quicksand text-lg">
                  It all started with a secret family recipe and a shared dream. For generations, our kitchen has perfected the art of simple, soulful cooking. Every dish is a tribute to our founders, crafted with fresh, locally-sourced ingredients and served with genuine warmth. This isn't just a meal—it's history on a plate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
