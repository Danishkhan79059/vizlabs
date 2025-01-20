"use client";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track active link
  const router = useRouter();
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  // const navigate = useNavigate();

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
            } py-2 md:py-0`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              activeLink === "aboutus" ? "text-blue-700" : "hover:text-blue-700"
            } py-2 md:py-0`}
            onClick={() => handleLinkClick("aboutus")}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`${
              activeLink === "pricing" ? "text-blue-700" : "hover:text-blue-700"
            } py-2 md:py-0`}
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
            } py-2 md:py-0`}
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
            } py-2 md:py-0`}
            onClick={() => handleLinkClick("viztablog")}
          >
            Blog
          </Link>

          <button
            className="px-2 py-2 mt-2 md:py-0 bg-blue-950 hover:bg-blue-700 rounded-md text-white flex md:hidden w-[40%]"
            onClick={() => {
              navigate("/trial");
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
            <GiHamburgerMenu />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
