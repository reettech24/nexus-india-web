'use client'
import React from 'react';

const WeeklyHighlights = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* Left Column: Highlight Text and Image */}
        <div className="lg:col-span-2 relative">
          <h2 className="text-6xl font-bold text-gray-900 mb-6">
            Weekly 
            <br />
            <span className="text-orange-500">Highlight</span>
          </h2>
          <img 
            src="https://placehold.co/800x1000/d3d3d3/4a4a4a?text=Weekly+Highlight" 
            alt="Man in a suit smiling" 
            className="w-full h-[600px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Column: Featured Card */}
        <div className="lg:col-span-1 flex flex-col items-start">
          {/* Logo Placeholder */}
          <img 
            src="https://placehold.co/80x80/3498db/white?text=Logo" 
            alt="Reet Technologies Logo"
            className="w-16 h-16 rounded-lg shadow-sm mb-6"
          />
          
          {/* Card Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img 
              src="https://placehold.co/600x400/ecf0f1/black?text=Workspace" 
              alt="Overhead view of a workspace" 
              className="w-full h-auto object-cover rounded-md mb-5"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Reet Technologies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reet Technologies, Pune is a forward-thinking IT and business consulting firm
              dedicated to empowering startups, SMEs, and global brands with innovation and
              efficiency. Based in Pune, we specialize in digital transformation, AI/ML
              solutions, AR/VR experiences, e-commerce and mobile app development, and
              data-driven digital marketing.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="text-sm font-medium text-orange-500 hover:text-orange-600"
              >
                Read More &raquo;
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-orange-500 hover:text-orange-600"
              >
                Visit Website &raquo;
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeeklyHighlights;