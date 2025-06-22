"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function VisitUs() {
const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
    
    <div
      className="flex flex-col items-center justify-center py-36 bg-gradient-to-br from-pink-500 to-orange-300 text-white"
      id="contact"
    >
       <h1 className="text-4xl sarina mb-6 md:text-5xl">Visit Us</h1>
      <p className="max-w-xl text-3xl text-center mb-8">Papi Smash'd</p>
      <h3 className="text-2xl font-bold mb-4 mt-6">Hours</h3>
<div className="grid grid-cols-2 gap-x-6 gap-y-2 text-lg mb-8 max-w-md w-75% justify-items-start break-words">
        <span className="font-semibold">Mon</span>
        <span>11:00am - 9:00pm</span>
        <span className="font-semibold">Tue</span>
        <span>11:00am - 9:00pm</span>
        <span className="font-semibold">Wed</span>
        <span>11:00am - 9:00pm</span>
        <span className="font-semibold">Thu</span>
        <span>11:00am - 10:00pm</span>
        <span className="font-semibold">Fri</span>
        <span>11:00am - 3:00am</span>
        <span className="font-semibold">Sat</span>
        <span>11:00am - 3:00am</span>
        <span className="font-semibold">Sun</span>
        <span>11:00am - 11:00pm</span>
      </div>


      <p>407-730-4894</p>
      <p>66 E. Pine Street</p>
      <p>Orlando, FL 32801</p>
      <p>Downtown Orlando</p>
 <div className="w-full flex justify-center mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9518691431767!2d-81.38017182428324!3d28.541166375714738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77bc8d3312e35%3A0xec15d568cb03e925!2sPapi%20Smash&#39;d%20Burger!5e0!3m2!1sen!2sus!4v1750635517194!5m2!1sen!2sus"
          width="100%"
          height="350"
          className="rounded-lg border-0 w-full max-w-2xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
    </section>
  );
}
