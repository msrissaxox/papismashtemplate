"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function OnTheMenu() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  
  return (
  <section
    ref={ref}
    className= {`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>

  <div className="justify-center items-center py-36 bg-gray-100 p-20">
      <div className="flex flex-col items-start w-1/3 pr-12">
        <h2 className="text-2xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-bold mb-10 md:text-4xl">
          ON THE MENU
        </h2>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-md font-bold px-5 py-2.5 text-center me-2 mb-2"
        >
          <a
            href="https://www.ubereats.com/store/papi-smsh-burger/IXK7x2a1VTSwARhiURPhPw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION"
            target="_blank"
          >
            View Full Menu
          </a>
        </button>
      </div>


<div className="flex md:flex-col justify-center items-center gap-6">
      <div className="relative flex-col md:flex-row mt-6 pb-5 mx-5 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-66">
        <div className="relative h-56  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src="papi4.png" alt="card-image" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Smash Burgers
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>





      <div className="relative flex-col  mt-6 pb-5 mx-5 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-66">
        <div className="relative h-56  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src="papi5.png" alt="card-image" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Shakes
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>


      <div className="relative flex-col  mt-6 pb-5 mx-5 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-66">
        <div className="relative h-56  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src="papi2.png" alt="card-image" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Fries
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>

</div>


    </div>


    </section>
  );
}
