"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
 
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#ourstory" className="flex items-center text-black hover:text-gray-700 transition-colors">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="#contact" className="flex items-center text-black hover:text-gray-700 transition-colors">
          Contact Us
        </Link>
      </Typography>
 
    </ul>
  );
}
 //Responsive Header Component
export function Header() {
  const [openNav, setOpenNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="px-6 py-3 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
       <Typography
  as="a"
  href="#"
  variant="h6"
  className="mr-4 cursor-pointer sarina bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-bold text-4xl py-1.5"
>
  Papi Smash'd
</Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 hover:bg-transparent text-black focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Header;