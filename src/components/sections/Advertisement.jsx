"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ✅ Ads data
const adsData = [
  { image: "/Sunglasses.avif", brand: "Brand Name", learnMore: "#", website: "#" },
  { image: "/Yoga-girl.jpg", brand: "Brand Name", learnMore: "#", website: "#" },
  { image: "/Yoga-girl.jpg", brand: "Brand Name", learnMore: "#", website: "#" },
  { image: "/cookies.avif", brand: "Brand Name", learnMore: "#", website: "#" },
  { image: "/Home.jpg", brand: "Brand Name", learnMore: "#", website: "#" },
];

// Rotate ads to show different starting ads
function getRotatedAds(startIndex) {
  return [...adsData.slice(startIndex), ...adsData.slice(0, startIndex)];
}

export default function Advertisement() {
  return (
    <section className="w-full bg-gray-50 pt-34">
      {/* Grid layout for AdBoxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start px-0">
        <AdBox ads={getRotatedAds(1)} className="h-40 sm:h-48 md:h-52 w-full" />
        <AdBox ads={getRotatedAds(0)} className="h-56 sm:h-64 md:h-80 w-full" />
        <AdBox ads={getRotatedAds(3)} className="h-56 sm:h-64 md:h-80 w-full md:-mt-28" />
        <AdBox ads={getRotatedAds(2)} className="h-40 sm:h-48 md:h-52 w-full" />
      </div>

      {/* Swiper pagination styling */}
      <style jsx global>{`
        .ads-swiper .swiper-pagination-bullet { background: white; opacity: 0.6; }
        .ads-swiper .swiper-pagination-bullet-active { background: #f97316; opacity: 1; }
        .ads-swiper .swiper-pagination { bottom: 10px !important; }
      `}</style>
    </section>
  );
}

// ✅ Single AdBox component
function AdBox({ ads, className }) {
  if (!ads || ads.length === 0) {
    return <div className="bg-gray-100 flex items-center justify-center">No Ads</div>;
  }

  const displayAds = ads.slice(0, 5); 

  return (
    <div className={`bg-gray-100 overflow-hidden ${className}`}>
      <Swiper
        className="ads-swiper h-full"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {displayAds.map((ad, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Image */}
              <Image
                src={ad.image}
                alt={ad.brand}
                fill
                unoptimized
                className="object-cover"
              />

              {/* Brand badge */}
              <div className="absolute top-2 left-0 bg-orange-500 text-white text-xs sm:text-xl px-2 sm:px-3 py-1">
                {ad.brand}
              </div>

              {/* Left bottom link → View Website */}
              <div className="absolute bottom-2 left-2">
                <a
                  href={ad.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 text-xs sm:text-sm px-2 sm:px-3 no-underline"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  View Website &gt;&gt;
                </a>
              </div>

              {/* Right bottom link → Learn More */}
              <div className="absolute bottom-2 right-2">
                <a
                  href={ad.learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 text-xs sm:text-sm px-2 sm:px-3 no-underline"
                  style={{ color: '#f97316', textDecoration: 'none' }}
                >
                  Learn More &gt;&gt;
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
