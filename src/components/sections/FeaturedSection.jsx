'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Component for the whole section
const FeaturedSection = () => {
  // Data for the cards (placeholders)
  const card1Slides = [
    'https://placehold.co/600x400/34495e/white?text=Sunglasses+1',
    'https://placehold.co/600x400/34495e/white?text=Sunglasses+2',
    'https://placehold.co/600x400/34495e/white?text=Sunglasses+3',
  ];
  const card2Slides = [
    'https://placehold.co/600x400/2c3e50/white?text=Yoga+1',
    'https://placehold.co/600x400/2c3e50/white?text=Yoga+2',
    'https://placehold.co/600x400/2c3e50/white?text=Yoga+3',
  ];
  const card3Slides = [
    'https://placehold.co/600x400/ecf0f1/black?text=Decor+1',
    'https://placehold.co/600x400/ecf0f1/black?text=Decor+2',
    'https://placehold.co/600x400/ecf0f1/black?text=Decor+3',
  ];
  const card4Slides = [
    'https://placehold.co/600x400/d35400/white?text=Cookies+1',
    'https://placehold.co/600x400/d35400/white?text=Cookies+2',
    'https://placehold.co/600x400/d35400/white?text=Cookies+3',
  ];

  return (
    <>
      {/* This style tag is necessary to make the Swiper pagination dots white, 
        as seen in the image, since we can't edit external CSS. 
      */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.7) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
        }
      `}</style>

      <section className="bg-white py-12 ">
        {/* The section is a 2x2 grid on medium screens and up */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Sunglasses */}
          <div className="relative h-80  overflow-hidden shadow-lg group">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
            >
              {card1Slides.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-md z-10">
              Brand Name
            </span>
            {/* <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold z-10">
              15 Days
            </h2> */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
              <a href="#" className="text-white text-sm font-medium hover:underline">
                View Website &raquo;
              </a>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn more &raquo;
              </a>
            </div>
          </div>

          {/* Card 2: Yoga */}
          <div className="relative h-80  overflow-hidden shadow-lg group">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
            >
              {card2Slides.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            {/* Dark brand tag for this card */}
            <span className="absolute top-4 left-4 bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-md z-10">
              Brand Name
            </span>
            {/* <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold z-10">
              30 Days
            </h2> */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
              <a href="#" className="text-white text-sm font-medium hover:underline">
                View Website &raquo;
              </a>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn more &raquo;
              </a>
            </div>
          </div>

          {/* Card 3: Living Room */}
          <div className="relative h-80  overflow-hidden shadow-lg group">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
            >
              {card3Slides.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-md z-10">
              Brand Name
            </span>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
              <a href="#" className="text-white text-sm font-medium hover:underline">
                View Website &raquo;
              </a>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn more &raquo;
              </a>
            </div>
          </div>

          {/* Card 4: Cookies */}
          <div className="relative h-80  overflow-hidden shadow-lg group">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full"
            >
              {card4Slides.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-md z-10">
              Brand Name
            </span>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
              <a href="#" className="text-white text-sm font-medium hover:underline">
                View Website &raquo;
              </a>
              <a href="#" className="text-white text-sm font-medium hover:underline">
                Learn more &raquo;
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FeaturedSection;