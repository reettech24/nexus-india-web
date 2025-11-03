"use client";

import React from "react";

function HalfBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
      {[
        [
          "/bag-img1.webp",
          "Women Professionals",
          "Discover Expert Services by Women Entrepreneurs like CA, Consultants, Teachers etc",
        ],
        [
          "/image.jpg",
          "Women in Business",
          "Discover Unique Brands & Products Made by Women entrepreneurs",
        ],
      ].map(([src, title, desc], i) => (
        <div
          key={i}
          className="relative  overflow-hidden h-80 group cursor-pointer"
        >
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          {/* <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-sm text-gray-200 mt-1">{desc}</p>
            </div> */}
        </div>
      ))}
    </div>
  );
}

export default HalfBanner;
