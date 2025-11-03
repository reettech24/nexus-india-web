"use client";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi"; // Make sure to install react-icons

function Header() {
  return (
    // Updated background to be dark, semi-transparent, blurred, and rounded
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] z-50">
      <nav className="bg-gray-900/80 max-w-8xl mx-auto  backdrop-blur-sm rounded-xl shadow-lg">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex ">
              {/* Placeholder for your logo image */}
              <Link href={"/"} className=" flex items-center space-x-3">
                <img
                  className="h-11 w-12"
                  src="/logo.png"
                  alt="Nexus India Logo"
                  href="/"
                />
                {/* Logo Text with Tagline */}
                <div>
                  <span className="font-bold text-xl text-white">
                    NEXUS INDIA
                  </span>
                  <p className="text-xs text-gray-300 tracking-wider">
                    BIG DREAMS, SMALL BUDGET
                  </p>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <a href="#" className="text-gray-300 hover:text-white py-2">
                About us
              </a>
              <a href="#" className="text-gray-300 hover:text-white py-2">
                Services
              </a>
              <a
                href="/pages/women_empowerment"
                className="text-gray-300 hover:text-white py-2"
              >
                Women Empowerment
              </a>
              <a href="#" className="text-gray-300 hover:text-white py-2">
                Animal Welfare
              </a>
              <a href="#" className="text-gray-300 hover:text-white py-2">
                Startups
              </a>
              <a
                href="/pages/contact_us"
                className="text-gray-300 hover:text-white py-2"
              >
                Contact Us
              </a>
              <a
                href="/pages/profile"
                className="text-gray-300 hover:text-white py-2"
              >
                Profile
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FiSearch className="text-gray-300 h-5 w-5 hover:text-white cursor-pointer" />
              <a
                href="#"
                className="px-5 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Sign in / Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
