'use client'
import React from "react";

function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 py-10">
      {[
        [
          "/carousel1.jpg",
          "Women Professionals",
          "Discover Expert Services by Women Entrepreneurs like CA, Consultants, Teachers etc",
        ],
      ].map(([src, title, desc], i) => (
        <div
          key={i}
          className="relative  overflow-hidden h-80 group cursor-pointer"
        >
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100"
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

export default Banner;
