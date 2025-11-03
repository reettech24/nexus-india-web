"use client";

import React from "react";
import Link from "next/link";

// Data for the key area cards
const keyAreas = [
  {
    title: "WOMEN EMPOWERMENT",
    imageUrl: "/Women-emp.jpg",
    link: "/pages/women_empowerment",
  },
  {
    title: "ANIMAL WELFARE",
    imageUrl: "/Animal.jpg",
    link: "/",
  },
  {
    title: "STARTUPS",
    imageUrl: "/Startup.jpg",
    link: "/",
  },
];

// Reusable Card Component
const KeyAreaCard = ({ title, imageUrl, link }) => (
  <Link href={link}>
    <div className="relative h-[60vh] w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-xl font-bold text-white uppercase tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  </Link>
);

// Main Section Component
const KeyAreasSection = () => {
  return (
    <section className="bg-stone-300  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-black text-center mb-12">
          Our Key Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyAreas.map((area) => (
            <KeyAreaCard
              key={area.title}
              title={area.title}
              imageUrl={area.imageUrl}
              link={area.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAreasSection;
