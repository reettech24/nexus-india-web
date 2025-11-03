'use client'

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Data for the categories. You can expand this based on your backend.
const categoriesData = {
  'Real Estate': [
    { title: 'Agents', color: 'bg-yellow-500' },
    { title: 'Contractors', color: 'bg-green-500' },
    { title: 'Builders', color: 'bg-blue-500' },
    { title: 'Interior Designers', color: 'bg-pink-500' },
    { title: 'Property Management', color: 'bg-indigo-500' },
  ],
  'Jewelry': [
    { title: 'Goldsmiths', color: 'bg-yellow-400' },
    { title: 'Diamond Merchants', color: 'bg-cyan-400' },
    { title: 'Designers', color: 'bg-rose-400' },
    { title: 'Gemologists', color: 'bg-teal-400' },
  ],
  'Retail': [
    { title: 'Boutiques', color: 'bg-purple-500' },
    { title: 'Shops', color: 'bg-teal-500' },
    { title: 'Malls', color: 'bg-sky-500' },
  ],
  'Manufacturing': [
    { title: 'Factories', color: 'bg-gray-600' },
    { title: 'Suppliers', color: 'bg-blue-600' },
    { title: 'Logistics', color: 'bg-orange-700' },
  ],
  'Agriculture': [
    { title: 'Farms', color: 'bg-green-600' },
    { title: 'Distributors', color: 'bg-orange-600' },
    { title: 'Equipment', color: 'bg-lime-600' },
  ],
};

// Get the tab names from the data
const tabs = Object.keys(categoriesData);

const BusinessCategories = () => {
  const [activeTab, setActiveTab] = useState('Real Estate');

  // Get the cards for the currently active tab
  const activeCards = categoriesData[activeTab] || [];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              You can not miss on <span className="text-orange-500">this</span>
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Discover the most in-demand businesses trusted by thousands. From timeless jewelry to expert real estate agents, and from thriving retail to manufacturing and agriculture—these categories define opportunity and growth. Explore the best of what people are searching for, all in one place.
            </p>
          </div>
          <a 
            href="#" 
            className="flex-shrink-0 mt-4 sm:mt-0 text-sm font-medium text-orange-500 border border-orange-500 rounded-full px-4 py-1.5 hover:bg-orange-50 transition-colors"
          >
            View All &raquo;
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Swiper Component */}
        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={2}  // Default for mobile
          breakpoints={{
            // Responsive breakpoints
            640: { slidesPerView: 3 }, // sm
            768: { slidesPerView: 4 }, // md
            1024: { slidesPerView: 5 }, // lg
          }}
          className="w-full"
        >
          {activeCards.map((card) => (
            <SwiperSlide key={card.title}>
              <div 
                className={`h-48 rounded-lg flex items-center justify-center p-4 ${card.color} shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                <h3 className="text-white text-xl font-bold text-center">{card.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BusinessCategories;