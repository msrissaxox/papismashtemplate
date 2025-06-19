"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray">
    <div className="py-36 mt-20 bg-white" id="ourstory">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="papi2.png"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-bold md:text-4xl">
              OUR STORY
            </h2>
            <p className="mt-6 text-gray-600">
              At Papi Smash'd Burger, we believe in serving up the best smash
              style burgers with a Latin flare. The Latin spin is inspired by
              our Founders Father. Our burgers are made fresh daily with only
              the finest ingredients. Come visit us and taste the difference!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
