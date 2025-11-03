'use client'

import React from 'react';

// Data for the category cards
const categories = [
  {
    title: 'Handicrafts',
    description: 'Discover unique, handcrafted treasures that celebrate local artistry and tradition.',
    imageUrl: 'https://placehold.co/400x500/2980b9/white?text=Handicrafts'
  },
  {
    title: 'Eco-friendly Products',
    description: 'Shop sustainable goods crafted with care for you and the planet.',
    imageUrl: 'https://placehold.co/400x500/27ae60/white?text=Eco-friendly'
  },
  {
    title: 'Artworks',
    description: 'Experience the creativity of local artists bringing culture and stories to life.',
    imageUrl: 'https://placehold.co/400x500/8e44ad/white?text=Artworks'
  },
  {
    title: 'Lifestyle',
    description: 'Explore locally inspired lifestyle products that blend heritage with modern living.',
    imageUrl: 'https://placehold.co/400x500/c0392b/white?text=Lifestyle'
  }
];

// Reusable Card Component
const CategoryCard = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-96 w-full rounded-xl overflow-hidden group cursor-pointer">
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
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-1 text-gray-200">{description}</p>
      </div>
    </div>
  );
};

// Main Section Component
const LocalHeroesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-5xl font-bold text-gray-900">
          Your Local Heroes, <span className="text-orange-500">Now Online.</span>
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title}
              title={category.title}
              description={category.description}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalHeroesSection;