import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../static/betalectic_logo.png";

const Navbar = () => {
  const [navdisplay, setnavdisplay] = useState({ display: "inline-block" });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < "639") {
        setnavdisplay({ display: "none" });
        console.log(window.innerWidth);
      } else {
        console.log("a");
        setnavdisplay({ display: "inline-block" });
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (navdisplay.display == "inline-block") {
      setnavdisplay({ display: "none" });
    } else {
      setnavdisplay({ display: "inline-block" });
    }
  };

  return (
    <>
      <div className="header relative font-gothamnarrow-medium z-50">
        <div className="forpsedoelement"></div>
        <div className="flex flex-wrap  p-2rem relative top-0  text-navbar uppercase font-bold items-center justify-between w-full md:w-3/4 mx-auto">
          <div className="logo w-75 h-22 ">
            <Link href="/aboutus">
              <a>
                <Image
                  alt="pic"
                  className="w-full h-full object-cover"
                  src={logo}
                />
              </a>
            </Link>
          </div>
          <div className=" border-black">
            <ul
              style={navdisplay}
              className="absolute bg-white top-36 left-0 sm:relative sm:top-0 sm:left-0 text-lg shadow-black shadow-lg w-full sm:shadow-none"
            >
              <li className="sm:inline-block group block my-4 relative border-black border-2 sm:border-none whitespace-nowrap mx-4 rounded  px-2 py-1">
                <Link href="/aboutus">
                  <a className='group-hover:before:w-full before:duration-500 before:content-[""] before:w-0 before:h-1 before:bg-black before:absolute before:bottom-0 before:left-0 before:hover '>
                    About Us
                  </a>
                </Link>
              </li>
              <li className="sm:inline-block group block my-4 relative border-black border-2 sm:border-none whitespace-nowrap mx-4 rounded  px-2 py-1">
                <Link href="/team">
                  <a className='group-hover:before:w-full before:duration-500 before:content-[""] before:w-0 before:h-1 before:bg-black before:absolute before:bottom-0 before:left-0 before:hover '>
                    Team
                  </a>
                </Link>
              </li>
              <li className="sm:inline-block group block my-4 relative border-black border-2 sm:border-none whitespace-nowrap mx-4 rounded  px-2 py-1">
                <Link href="/ourwork">
                  <a className='group-hover:before:w-full before:duration-500 before:content-[""] before:w-0 before:h-1 before:bg-black before:absolute before:bottom-0 before:left-0 before:hover '>
                    Our Work
                  </a>
                </Link>
              </li>
              <li className="sm:inline-block group block my-4 relative border-black border-2 sm:border-none whitespace-nowrap mx-4 rounded  px-2 py-1">
                <Link href="/contactus">
                  <a className='group-hover:before:w-full before:duration-500 before:content-[""] before:w-0 before:h-1 before:bg-black before:absolute before:bottom-0 before:left-0 before:hover '>
                    ContactUs
                  </a>
                </Link>
              </li>
            </ul>
            <div
              onClick={handleClick}
              className="hamburger mx-4 flex sm:hidden justify-end"
            >
              <span className="text-3xl">Menu</span>
              <svg viewBox="0 0 100 80" width="40" height="40" fill="#657c98">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
