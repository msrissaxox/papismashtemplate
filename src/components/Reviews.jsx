"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Reviews() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
    <div className="py-36 mt-20">
      <h1 className="text-4xl text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-bold mb-6">
        FROM OUR COMMUNITY
      </h1>

      <div className="flex justify-center items-center bg-gray-100">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-76">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src="papi1.png" alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Julie, Orlando
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Review 1{" "}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-76">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src="papi1.png" alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Mike, Altamonte Springs
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Review 2{" "}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-76">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src="papi1.png" alt="card-image" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Marissa, Winter Park
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Review 3{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
