'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Data for the specialist cards
const specialists = [
  { 
    name: 'Dermatologist', 
    image: 'https://placehold.co/400x500/d35400/white?text=Dermatologist&font=lora' 
  },
  { 
    name: 'Psychiatry', 
    image: 'https://placehold.co/400x500/8e44ad/white?text=Psychiatry&font=lora' 
  },
  { 
    name: 'Cardiologist', 
    image: 'https://placehold.co/400x500/c0392b/white?text=Cardiologist&font=lora' 
  },
  { 
    name: 'Pediatrician', 
    image: 'https://placehold.co/400x500/2980b9/white?text=Pediatrician&font=lora' 
  },
  { 
    name: 'Neurologist', 
    image: 'https://placehold.co/400x500/27ae60/white?text=Neurologist&font=lora' 
  },
];

const HealthcareSpecialist = () => {
  return (
    // Section with the dark teal gradient background
    <section className="bg-gradient-to-r from-teal-700 to-teal-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-2 text-white">
          <h2 className="text-5xl font-bold">
            Healthcare Specialist
            <br />
            <span className="text-yellow-400">Near You</span>
          </h2>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Discover trusted healthcare specialists near you—
            from doctors and clinics to wellness experts—
            ready to support your health journey.
          </p>
        </div>

        {/* Right Column: Swiper */}
        <div className="lg:col-span-3">
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1.5} // Show 1.5 slides on mobile
            breakpoints={{
              // Responsive breakpoints
              640: { // sm
                slidesPerView: 2.5,
              },
              1024: { // lg
                slidesPerView: 3.5,
              },
            }}
            className="w-full"
          >
            {specialists.map((specialist) => (
              <SwiperSlide key={specialist.name}>
                <div className="relative h-80 w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                  {/* Background Image */}
                  <img 
                    src={specialist.image} 
                    alt={specialist.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Text Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {/* <h3 className="text-yellow-400 text-3xl font-bold text-center">
                      {specialist.name}
                    </h3> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default HealthcareSpecialist;