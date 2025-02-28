"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-auto items-center pt-5 justify-center flex bg-transparent z-50 fixed p-5 transition-all duration-300`}
    >
      <section
        className={`flex items-center justify-between w-full md:w-[85%] h-20 bg-white border border-white rounded-xl z-50 shadow-xl px-2`}
      >
        {/* Logo and Hamburger for Mobile */}
        <div className="flex items-center w-full justify-between md:w-auto">
          <Link href="/" className="flex items-center ">
            <img src="./image/viz.png" alt="Logo" className="h-10 " />
          </Link>
        </div>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:w-1/2 md:justify-start md:items-center md:gap-4 flex-col md:flex-row absolute md:static top-28 left-0 min-h-12 min-w-80 bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 rounded-md ml-6`}
        >
          <Link
            href="/"
            className={`${
              activeLink === "home" ? "text-blue-700" : "hover:text-blue-700"
            } py-2 md:py-0 font-semibold`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              activeLink === "aboutus" ? "text-blue-700" : "hover:text-blue-700"
            } py-2 md:py-0 font-semibold`}
            onClick={() => handleLinkClick("aboutus")}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`${
              activeLink === "pricing" ? "text-blue-700" : "hover:text-blue-700"
            } py-2 md:py-0 font-semibold`}
            onClick={() => handleLinkClick("pricing")}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className={`${
              activeLink === "/contact"
                ? "text-blue-700"
                : "hover:text-blue-700"
            } py-2 md:py-0 font-semibold`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact us
          </Link>
          <Link
            href="/viztablog"
            className={`${
              activeLink === "viztablog"
                ? "text-blue-700"
                : "hover:text-blue-700"
            } py-2 md:py-0 font-semibold`}
            onClick={() => handleLinkClick("viztablog")}
          >
            Blog
          </Link>

          <button
            className="px-2 py-2 mt-2 md:py-0 bg-blue-950 hover:bg-blue-700 rounded-md text-white flex md:hidden w-[40%]"
            onClick={() => {
              router.push("/trial");
              setIsMenuOpen(false);
            }}
          >
            Try free
          </button>
        </nav>

        {/* Buttons */}
        <div className="flex w-full md:w-1/2 items-center justify-end gap-2 mt-4 md:mt-0 ">
          <button
            className="px-2 py-1 bg-blue-950 rounded-md hover:bg-blue-700 text-white hidden md:flex"
            onClick={() => router.push("/trial")}
          >
            Try free
          </button>

          <div className="relative">
            <button
              className="px-2 py-1 bg-blue-950 rounded-md hover:bg-blue-700 text-white flex"
              onClick={() => window.open("https://app.vizta.in/", "_blank")}
            >
              Login
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="32px"
              height="32px"
            >
              <path
                fill="currentColor"
                d="M 5 5 L 5 11 L 11 11 L 11 5 L 5 5 z M 13 5 L 13 11 L 19 11 L 19 5 L 13 5 z M 21 5 L 21 11 L 27 11 L 27 5 L 21 5 z M 7 7 L 9 7 L 9 9 L 7 9 L 7 7 z M 15 7 L 17 7 L 17 9 L 15 9 L 15 7 z M 23 7 L 25 7 L 25 9 L 23 9 L 23 7 z M 5 13 L 5 19 L 11 19 L 11 13 L 5 13 z M 13 13 L 13 19 L 19 19 L 19 13 L 13 13 z M 21 13 L 21 19 L 27 19 L 27 13 L 21 13 z M 7 15 L 9 15 L 9 17 L 7 17 L 7 15 z M 15 15 L 17 15 L 17 17 L 15 17 L 15 15 z M 23 15 L 25 15 L 25 17 L 23 17 L 23 15 z M 5 21 L 5 27 L 11 27 L 11 21 L 5 21 z M 13 21 L 13 27 L 19 27 L 19 21 L 13 21 z M 21 21 L 21 27 L 27 27 L 27 21 L 21 21 z M 7 23 L 9 23 L 9 25 L 7 25 L 7 23 z M 15 23 L 17 23 L 17 25 L 15 25 L 15 23 z"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
