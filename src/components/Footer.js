"use client";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-white mt-10 py-2 text-center bottom-0 left-0">
      <div className="space-y-2">
        <div>
          <Link href="" className="text-sm font-semibold hover:underline">
            Why Vizta?
          </Link>
        </div>
        <div>
          <Link
            href="/pricing"
            className="text-sm font-semibold hover:underline"
          >
            Pricing
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="text-sm font-semibold hover:underline"
          >
            FAQ
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="text-sm font-semibold hover:underline"
          >
            Contact us
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61570940870974"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/viz-labs/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/vizlabsindia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-white transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/vizlabsindia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <Link href="/about" className="text-sm font-semibold hover:underline">
            Site By Viz Labs, inc.
          </Link>
        </div>
        <div>
          <span className="text-sm font-semibold">
            Copyright © 2024 | All rights reserved.
          </span>
        </div>
        <div>
          <Link
            href="/contact"
            className="text-sm font-semibold hover:underline text-orange-300"
          >
            Privacy Notice | Blog | Security | Events | License
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
