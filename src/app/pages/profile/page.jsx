"use client";

import React, { useState } from "react";
// Updated imports to use a different path mapping that might be more compatible with the build environment.
import { FiSearch, FiHome, FiChevronRight, FiAward } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { FiDribbble, FiInstagram, FiLinkedin } from "react-icons/fi";

// --- Profile Hero Component ---
const ProfileHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 space-x-2">
        <FiHome className="h-4 w-4" />
        <FiChevronRight className="h-4 w-4" />
        <a href="#" className="hover:text-gray-700">
          Listing
        </a>
        <FiChevronRight className="h-4 w-4" />
        <span className="text-gray-700">Profile</span>
      </div>

      {/* Profile Content */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image */}
        <div className="md:col-span-1">
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            {/* Converted from Next/Image to standard <img> */}
            <img
              src="https://placehold.co/400x500/E74C3C/white?text=Priya+Sharma&font=roboto"
              alt="Priya Sharma"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="md:col-span-2">
          <span className="text-sm font-semibold text-orange-500 uppercase">
            Design
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">
            Priya Sharma
          </h1>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <FiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <FiDribbble className="h-5 w-5" />
            </a>
          </div>

          <h2 className="text-xl font-medium text-gray-700 mt-4">
            Graphic Designer
          </h2>
          <p className="text-gray-600 mt-2">
            A passionate, creative graphic designer based in Bengaluru, India,
            specializing in branding, social media visuals, and marketing
            materials. With over 5 years of experience, Priya has worked on 150+
            B2B and B2C projects, helping to build businesses and individuals
            communicate their stories visually.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-gray-600">
              <FiAward className="h-5 w-5 text-orange-500 mr-3" />
              Diploma in Graphic Design | NID Ahmedabad
            </li>
            <li className="flex items-center text-gray-600">
              <FiAward className="h-5 w-5 text-orange-500 mr-3" />
              Adobe Certified Expert: Photoshop, Illustrator | Adobe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- Services Component ---
const ServiceCard = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <span className="text-5xl font-bold text-black/70">{number}</span>
    <h3 className="text-xl font-semibold text-gray-900 mt-4">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm">{description}</p>
    <a
      href="#"
      className="text-sm font-medium text-orange-500 hover:text-orange-600 mt-4 inline-block"
    >
      LEARN MORE
    </a>
  </div>
);

const Services = () => {
  return (
    <div className="bg-gray-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            number="01"
            title="Logo and Brand Identity Design"
            description="Developing unique logos and cohesive brand visuals that help businesses establish a strong identity and stand out. Covers logo variations, color palettes, brand typography, and usage guidelines for consistent branding across all media."
          />
          <ServiceCard
            number="02"
            title="Social Media Content Creation"
            description="Creating engaging social media graphics such as posts, banners, and stories for various platforms including Instagram, Facebook, and LinkedIn. Focuses on visually simplifying brand messages for maximum audience interaction."
          />
          <ServiceCard
            number="03"
            title="Poster, Brochure, and Flyer Design"
            description="Designing print and digital marketing materials including posters, brochures, flyers, and banners for product launches and events. Presents information clearly for events, campaigns, and promotions."
          />
        </div>
      </div>
    </div>
  );
};

// --- Work Samples Component ---
const WorkSamples = () => {
  return (
    <div className="py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Work Samples
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="space-y-4">
            <img
              src="https://placehold.co/500x300/c0392b/white?text=Work+1"
              alt="Work 1"
              className="rounded-lg object-cover w-full"
            />
            <img
              src="https://placehold.co/500x400/2c3e50/white?text=Work+5"
              alt="Work 5"
              className="rounded-lg object-cover w-full"
            />
          </div>
          {/* Column 2 */}
          <div className="space-y-4">
            <img
              src="https://placehold.co/500x716/f39c12/white?text=Work+2"
              alt="Work 2"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          {/* Column 3 */}
          <div className="space-y-4">
            <img
              src="https://placehold.co/500x300/27ae60/white?text=Work+3"
              alt="Work 3"
              className="rounded-lg object-cover w-full"
            />
            <img
              src="https://placehold.co/500x400/8e44ad/white?text=Work+6"
              alt="Work 6"
              className="rounded-lg object-cover w-full"
            />
          </div>
          {/* Column 4 */}
          <div className="space-y-4">
            <img
              src="https://placehold.co/500x716/d35400/white?text=Work+4"
              alt="Work 4"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Pricing Component ---
const Pricing = () => {
  const [activeTab, setActiveTab] = useState("hourly"); // 'hourly', 'service', 'packages'

  return (
    <div className="bg-gray-500 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white mb-8 text-center">
          Pricing/Packages
        </h2>

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200">
          <button
            onClick={() => setActiveTab("hourly")}
            className={`px-6 py-3 font-medium text-md ${
              activeTab === "hourly"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-white hover:text-white/80"
            }`}
          >
            Hourly
          </button>
          <button
            onClick={() => setActiveTab("service")}
            className={`px-6 py-3 font-medium text-md ${
              activeTab === "service"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-white hover:text-white/80"
            }`}
          >
            Service-based
          </button>
          <button
            onClick={() => setActiveTab("packages")}
            className={`px-6 py-3 font-medium text-md ${
              activeTab === "packages"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-white hover:text-white/80"
            }`}
          >
            Packages
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "hourly" && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="text-lg text-gray-700">
                Hourly Price starts from INR 1000/-
              </p>
            </div>
          )}
          {activeTab === "service" && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="text-lg text-gray-700">
                Service-based pricing available. Please contact for a custom
                quote based on your project scope.
              </p>
            </div>
          )}
          {activeTab === "packages" && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <p className="text-lg text-gray-700">
                Monthly retainers and project packages are available. Starting
                from INR 20,000/month.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Testimonials Component ---
const Testimonials = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Testimonials
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
          <img
            src="https://placehold.co/80x80/7f8c8d/white?text=A&font=roboto"
            alt="Anjali Rao"
            className="rounded-full mx-auto w-20 h-20"
          />
          <p className="text-xl italic text-gray-700 mt-6">
            "Priya's creativity, speed, and professionalism helped us stand out
            online. Highly recommended!"
          </p>
          <p className="font-semibold text-gray-900 mt-6">Anjali Rao</p>
          <p className="text-sm text-gray-500">City Reads Bookstore</p>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-orange-500"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </div>
  );
};

// --- Awards Component ---
const AwardItem = ({ title }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-orange-100 p-5 rounded-full">
      <LuTrophy className="h-10 w-10 text-orange-500" />
    </div>
    <p className="font-semibold text-gray-700 mt-4">{title}</p>
  </div>
);

const Awards = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Awards/Recognition
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <AwardItem title="Winner at Designathon, Bangalore" />
          <AwardItem title="Jury at Awwwards, Season 3" />
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <ProfileHero />
        <Services />
        <WorkSamples />
        <Pricing />
        <Testimonials />
        <Awards />
      </main>
    </div>
  );
}
