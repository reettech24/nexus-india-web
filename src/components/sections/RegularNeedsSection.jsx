'use client'

import React from 'react';

// Data for the cards
const needs = [
  {
    title: 'Kirana Stores',
    description: 'Stock up on your everyday groceries and essentials with your trusted neighbourhood kirana shops.',
    imageUrl: 'https://placehold.co/400x500/8e44ad/white?text=Kirana'
  },
  {
    title: 'Technicians',
    description: 'Quick, reliable solutions for home repairs and technical support when you need them.',
    imageUrl: 'https://placehold.co/400x500/2c3e50/white?text=Technicians'
  },
  {
    title: 'Medical Support',
    description: 'Accessible clinics and healthcare services to keep you and your family cared for.',
    imageUrl: 'https://placehold.co/400x500/c0392b/white?text=Medical'
  }
];

// Reusable Card Component
const NeedCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-80 w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg">
      {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
        <p className="text-sm mt-1 text-gray-200">{description}</p>
      </div>
    </div>
  );
};

// Main Section Component
const RegularNeedsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Regular <span className="text-orange-500">Needs</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          From daily essentials to emergency fixes, find everything you need right around the corner—dairy, kirana, fresh veggies, technicians, and more. Our Regular Needs section ensures your everyday requirements are met quickly with trusted local vendors and healthcare facilities nearby.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {needs.map((need) => (
            <NeedCard 
              key={need.title}
              title={need.title}
              description={need.description}
              imageUrl={need.imageUrl}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default RegularNeedsSection;