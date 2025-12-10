"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OnTheMenu() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    //     waitForAnimate: false,
        dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
  <section
    ref={ref}
    className= {`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>

  <div className="justify-center items-center bg-gray-100 py-15 max-w-screen">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl px-2.5 text-center quicksand font-bold       bg-gradient-to-r from-fuchsia-500 to-cyan-500
 bg-clip-text text-transparent mb-10 md:text-5xl">
          On The Menu
        </h2>
        <button
          type="button"
          className="text-white       bg-gradient-to-r from-fuchsia-500 to-cyan-500
hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-md font-bold px-5 py-2.5 text-center me-2 mb-2"
        >
          <a
            href="https://www.ubereats.com/store/papi-smsh-burger/IXK7x2a1VTSwARhiURPhPw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION"
            target="_blank"
          >
            Order Here
          </a>
        </button>
      </div>

    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <img src={"burger.jpg"}className="w-full h-104 object-cover rounded-lg"/>
        </div>
        <div>
          <img src={"burger2.jpg"} className="w-full h-104 object-cover rounded-lg" />
        </div>
        <div>
          <img src={"burger3.jpg"} className="w-full h-104 object-cover rounded-lg" />
        </div>
        <div>
          <img src={"burger4.jpg"} className="w-full h-104 object-cover rounded-lg" />
        </div>
            <div>
          <img src={"burger5.jpg"} className="w-full h-104 object-cover rounded-lg" />
        </div>
        <div>
          <img src={"burger6.jpg"}className="w-full h-104 object-cover rounded-lg"/>
        </div>
        <div>
          <img src={"burger7.jpg"} className="w-full h-104 object-cover rounded-lg" />
        </div>
      </Slider>
    </div>


    </div>


    </section>
  );
}
