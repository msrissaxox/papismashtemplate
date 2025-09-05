"use client";
import { Typography } from "@material-tailwind/react";
 import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="px-6 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between">
      <Typography className="py-1.5 px-1.5 sarina text-lg bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
        &copy; 2025 Papi Smash'd design by <a href="https://www.marissalamothe.dev
        " target="_blank">Marissa Lamothe</a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
        
        <a
      href="https://www.facebook.com/papismashd"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <IoLogoFacebook className="text-4xl" />
    </a>

        
        <li>
      <a
      href="https://www.instagram.com/papismashdburger"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram className="text-4xl"  
      />
    </a>
        </li>
       
      
      </ul>
    </footer>
  );
}