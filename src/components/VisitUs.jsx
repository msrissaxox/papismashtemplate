"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function VisitUs() {
const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
    
    <div
      className="flex flex-col items-center justify-center py-36 mt-20 bg-gradient-to-br from-pink-600 to-orange-400 text-white"
      id="contact"
    >
      <h1 className="text-5xl font-bold mb-6">VISIT US</h1>
      <p className="max-w-xl text-3xl text-center mb-8">Papi Smash'd</p>
      <p>407-730-4894</p>
      <p>66 E. Pine Street</p>
      <p>Orlando, FL 32801</p>
      <p>Downtown Orlando</p>
    </div>
    </section>
  );
}
