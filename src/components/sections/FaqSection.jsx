'use client'

import React, { useState } from 'react';
// You'll need to install react-icons: npm install react-icons
import { FiChevronDown } from 'react-icons/fi';

// Data for the FAQ items
const faqData = [
  {
    question: 'Is Nexus India suitable for small businesses?',
    answer: 'Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.'
  },
  {
    question: 'Is Nexus India suitable for small businesses?',
    answer: 'Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.'
  },
  {
    question: 'Is Nexus India suitable for small businesses?',
    answer: 'Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.'
  },
  {
    question: 'Is Nexus India suitable for small businesses?',
    answer: 'Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.'
  },
  {
    question: 'Is Nexus India suitable for small businesses?',
    answer: 'Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.'
  },
  {
    question: 'Is Nexus India suitable for small businesses?',
    answer: 'Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.'
  }
];

// Reusable FAQ Item Component
// It manages its own open/closed state
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <FiChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      {/* Answer Panel (conditionally rendered) */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-5 px-5 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

// Main FAQ Section Component
const FaqSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Your Questions, <span className="text-orange-500">Answered!</span>
        </h2>
        
        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <FaqItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;