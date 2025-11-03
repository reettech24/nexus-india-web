'use client'

import React from 'react';
// Using FaStar from react-icons for the solid star
import { FaStar } from 'react-icons/fa';

// Data for the 6 testimonial cards
const testimonialData = [
  {
    quote: (
      <>
        "<strong className="text-blue-600">Nexus India</strong> tool is not only
        powerful but also incredibly user..."
      </>
    ),
    name: 'Emily Ray',
    company: 'Tech Innovators Inc.',
    avatarUrl: 'https://placehold.co/100x100/e0e0e0/808080?text=ER',
    rating: '4.8'
  },
  {
    quote: (
      <>
        "<strong className="text-blue-600">I love how</strong> intuitive Nexus India is
        —it's like having a financial expert on..."
      </>
    ),
    name: 'Gracie Abrams',
    company: 'FinancePro Solutions',
    avatarUrl: 'https://placehold.co/100x100/e0e0e0/808080?text=GA',
    rating: '4.8'
  },
  {
    quote: (
      <>
        "<strong className="text-blue-600">Nexus India</strong> has saved us countless
        hours on financial reporting, allowing..."
      </>
    ),
    name: 'Theo James',
    company: 'Retail Success Ltd.',
    avatarUrl: 'https://placehold.co/100x100/e0e0e0/808080?text=TJ',
    rating: '4.8'
  },
  {
    quote: (
      <>
        "<strong className="text-blue-600">Nexus India</strong> tool is not only
        powerful but also incredibly user..."
      </>
    ),
    name: 'Emily Ray',
    company: 'Tech Innovators Inc.',
    avatarUrl: 'https://placehold.co/100x100/e0e0e0/808080?text=ER',
    rating: '4.8'
  },
  {
    quote: (
      <>
        "<strong className="text-blue-600">I love how</strong> intuitive Nexus India is
        —it's like having a financial expert on..."
      </>
    ),
    name: 'Gracie Abrams',
    company: 'FinancePro Solutions',
    avatarUrl: 'https://placehold.co/100x100/e0e0e0/808080?text=GA',
    rating: '4.8'
  },
  {
    quote: (
      <>
        "<strong className="text-blue-600">Nexus India</strong> has saved us countless
        hours on financial reporting, allowing..."
      </>
    ),
    name: 'Theo James',
    company: 'Retail Success Ltd.',
    avatarUrl: 'https://placehold.co/100x100/e0e0e0/808080?text=TJ',
    rating: '4.8'
  },
];

// Reusable Testimonial Card Component
const TestimonialCard = ({ quote, name, company, avatarUrl, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
    {/* Quote */}
    <blockquote className="text-gray-700 text-lg">
      {quote}
    </blockquote>
    
    {/* Author and Rating */}
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center">
        <img 
          src={avatarUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full bg-gray-200 object-cover" 
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
      <div className="flex items-center text-yellow-500">
        <FaStar className="w-5 h-5" />
        <span className="ml-1.5 font-bold text-gray-800">{rating}</span>
      </div>
    </div>
  </div>
);

// Main Section Component
const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-700 to-teal-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Real Results and Real Voices from 
          <br />
          <span className="text-yellow-400">Our Happy Customers</span>
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;