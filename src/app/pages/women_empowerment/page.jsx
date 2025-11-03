// import React, { useState } from "react";
// import { FiCalendar, FiChevronRight } from "react-icons/fi"; // For the calendar icon
// import { MdPlayArrow } from "react-icons/md"; // For the play arrow icon

// const WomanEmpowermentPage = () => {
//   const [activeTab, setActiveTab] = useState("all"); // State for 'Latest' and 'Trending' tabs

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* Hero Section */}
//       <section
//         className="relative h-[600px] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://placehold.co/1920x600/2c3e50/white?text=Empowerment)",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="text-center text-white p-8">
//             <h1 className="text-5xl font-bold mb-4">Women Empowerment</h1>
//             <p className="text-xl max-w-2xl mx-auto">
//               A community-driven platform to support, inspire, and empower women
//               globally.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Breadcrumbs */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500 space-x-2">
//         <a href="#" className="hover:text-gray-700">
//           Home
//         </a>
//         <FiChevronRight className="h-4 w-4" />
//         <span className="text-gray-700">Women Empowerment</span>
//       </div>

//       {/* Quick Access/Categories Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Quick Access</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {[
//             {
//               img: "https://placehold.co/100x100/ecf0f1/gray?text=Women",
//               label: "Women",
//             },
//             {
//               img: "https://placehold.co/100x100/ecf0f1/gray?text=Health",
//               label: "Health",
//             },
//             {
//               img: "https://placehold.co/100x100/ecf0f1/gray?text=Financ",
//               label: "Finance",
//             },
//             {
//               img: "https://placehold.co/100x100/ecf0f1/gray?text=Tech",
//               label: "Technology",
//             },
//             {
//               img: "https://placehold.co/100x100/ecf0f1/gray?text=Career",
//               label: "Career",
//             },
//             {
//               img: "https://placehold.co/100x100/ecf0f1/gray?text=Educat",
//               label: "Education",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={item.img}
//                 alt={item.label}
//                 className="w-16 h-16 rounded-full object-cover mb-3"
//               />
//               <p className="text-sm font-medium text-gray-700">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Articles Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-orange-50">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Featured Articles
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Main featured article */}
//           <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//             <div className="md:w-1/2 h-64 md:h-auto">
//               <img
//                 src="https://placehold.co/800x600/3498db/white?text=Featured+Article"
//                 alt="Featured Article"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="md:w-1/2 p-6 flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-semibold text-orange-600 uppercase">
//                   Leadership
//                 </span>
//                 <h3 className="text-xl font-bold text-gray-900 mt-2">
//                   How Women are Reshaping the Future of Tech
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   Exploring the impact and contributions of women in the
//                   fast-paced world of technology, from startups to leadership
//                   roles.
//                 </p>
//               </div>
//               <div className="flex items-center text-gray-500 text-sm mt-4">
//                 <FiCalendar className="mr-2" /> June 15, 2024
//               </div>
//             </div>
//           </div>
//           {/* Smaller featured articles */}
//           <div className="grid grid-cols-1 gap-6">
//             {[
//               {
//                 img: "https://placehold.co/400x200/2ecc71/white?text=Tech",
//                 title: "Breaking Barriers: Women in STEM",
//                 date: "June 10, 2024",
//               },
//               {
//                 img: "https://placehold.co/400x200/9b59b6/white?text=Innov",
//                 title: "Innovative Approaches to Female Entrepreneurship",
//                 date: "June 8, 2024",
//               },
//             ].map((article, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden flex"
//               >
//                 <div className="w-1/3 h-24">
//                   <img
//                     src={article.img}
//                     alt={article.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="w-2/3 p-4 flex flex-col justify-between">
//                   <h4 className="font-semibold text-gray-900 text-sm">
//                     {article.title}
//                   </h4>
//                   <div className="flex items-center text-gray-500 text-xs mt-2">
//                     <FiCalendar className="mr-1" /> {article.date}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Programs Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Popular Programs
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               img: "https://placehold.co/600x400/f1c40f/white?text=Mentorship",
//               title: "Global Mentorship Network",
//               description:
//                 "Connecting women with experienced mentors worldwide.",
//             },
//             {
//               img: "https://placehold.co/600x400/e67e22/white?text=Skills",
//               title: "Digital Skills Training Workshop",
//               description:
//                 "Empowering women with essential digital literacy and career skills.",
//             },
//             {
//               img: "https://placehold.co/600x400/34495e/white?text=Finance",
//               title: "Financial Literacy for Women",
//               description:
//                 "Building financial independence through knowledge and resources.",
//             },
//           ].map((program, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//             >
//               <img
//                 src={program.img}
//                 alt={program.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900">
//                   {program.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{program.description}</p>
//                 <a
//                   href="#"
//                   className="mt-4 inline-block text-orange-600 font-medium hover:underline"
//                 >
//                   Learn More &rarr;
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Quote Section */}
//       <section className="bg-emerald-700 text-white py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-3xl italic font-serif leading-relaxed">
//             "The most common way people give up their power is by thinking they
//             don't have any."
//           </p>
//           <p className="mt-6 text-xl font-medium">- Alice Walker</p>
//         </div>
//       </section>

//       {/* Success Stories / Spotlight Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Success Stories & Spotlight
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               img: "https://placehold.co/600x400/1abc9c/white?text=Story+1",
//               title: "From Village to Venture: Sarah's Journey",
//               category: "Entrepreneurship",
//             },
//             {
//               img: "https://placehold.co/600x400/3498db/white?text=Story+2",
//               title: "Breaking the Code: Maria's Tech Triumph",
//               category: "Technology",
//             },
//             {
//               img: "https://placehold.co/600x400/9b59b6/white?text=Story+3",
//               title: "Empowering Communities: Lena's Social Impact",
//               category: "Social Change",
//             },
//             {
//               img: "https://placehold.co/600x400/f1c40f/white?text=Story+4",
//               title: "Leadership in Action: Priya's Corporate Rise",
//               category: "Leadership",
//             },
//             {
//               img: "https://placehold.co/600x400/e67e22/white?text=Story+5",
//               title: "The Art of Resilience: Aisha's Creative Path",
//               category: "Arts & Culture",
//             },
//           ].map((story, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden group"
//             >
//               <div className="relative">
//                 <img
//                   src={story.img}
//                   alt={story.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <MdPlayArrow className="text-white text-5xl" />
//                 </div>
//               </div>
//               <div className="p-4">
//                 <span className="text-xs font-semibold text-gray-500 uppercase">
//                   {story.category}
//                 </span>
//                 <h3 className="text-lg font-bold text-gray-900 mt-2">
//                   {story.title}
//                 </h3>
//                 <a
//                   href="#"
//                   className="mt-3 inline-block text-orange-600 font-medium hover:underline text-sm"
//                 >
//                   Read Story &rarr;
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Articles Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Latest Articles & Resources
//         </h2>

//         {/* Tabs for Latest/Trending */}
//         <div className="flex border-b border-gray-200 mb-8">
//           <button
//             onClick={() => setActiveTab("all")}
//             className={`px-4 py-2 font-medium text-sm ${
//               activeTab === "all"
//                 ? "border-b-2 border-orange-500 text-orange-500"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             All Resources
//           </button>
//           <button
//             onClick={() => setActiveTab("latest")}
//             className={`px-4 py-2 font-medium text-sm ${
//               activeTab === "latest"
//                 ? "border-b-2 border-orange-500 text-orange-500"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             Latest
//           </button>
//           <button
//             onClick={() => setActiveTab("trending")}
//             className={`px-4 py-2 font-medium text-sm ${
//               activeTab === "trending"
//                 ? "border-b-2 border-orange-500 text-orange-500"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             Trending
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               img: "https://placehold.co/600x400/f39c12/white?text=Article+1",
//               title: "The Power of Sisterhood: Building Strong Networks",
//               date: "July 1, 2024",
//               category: "Community",
//             },
//             {
//               img: "https://placehold.co/600x400/8e44ad/white?text=Article+2",
//               title: "Mental Wellness Tips for Busy Professional Women",
//               date: "June 28, 2024",
//               category: "Health",
//             },
//             {
//               img: "https://placehold.co/600x400/d35400/white?text=Article+3",
//               title: "Navigating Career Changes with Confidence",
//               date: "June 25, 2024",
//               category: "Career",
//             },
//             {
//               img: "https://placehold.co/600x400/c0392b/white?text=Article+4",
//               title: "Investing in Yourself: A Guide to Personal Growth",
//               date: "June 20, 2024",
//               category: "Self-Improvement",
//             },
//             {
//               img: "https://placehold.co/600x400/16a085/white?text=Article+5",
//               title: "Digital Entrepreneurship: A Path for Women",
//               date: "June 18, 2024",
//               category: "Business",
//             },
//             {
//               img: "https://placehold.co/600x400/27ae60/white?text=Article+6",
//               title: "Understanding Your Rights: Legal Resources for Women",
//               date: "June 12, 2024",
//               category: "Advocacy",
//             },
//           ]
//             .filter((article) => {
//               // Simple filtering based on activeTab, could be expanded for actual content categories
//               if (activeTab === "latest") return true; // Show all for 'Latest' for this example
//               if (activeTab === "trending")
//                 return (
//                   article.category === "Community" ||
//                   article.category === "Health"
//                 ); // Example filter
//               return true; // 'all' tab
//             })
//             .map((article, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <img
//                   src={article.img}
//                   alt={article.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <span className="text-xs font-semibold text-gray-500 uppercase">
//                     {article.category}
//                   </span>
//                   <h3 className="text-lg font-bold text-gray-900 mt-2">
//                     {article.title}
//                   </h3>
//                   <div className="flex items-center text-gray-500 text-sm mt-2">
//                     <FiCalendar className="mr-2" /> {article.date}
//                   </div>
//                   <a
//                     href="#"
//                     className="mt-3 inline-block text-orange-600 font-medium hover:underline text-sm"
//                   >
//                     Read More &rarr;
//                   </a>
//                 </div>
//               </div>
//             ))}
//         </div>
//         <div className="text-center mt-12">
//           <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
//             Load More Articles
//           </button>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Our Partners
//         </h2>
//         <div className="flex flex-wrap justify-center items-center gap-8">
//           {[
//             "https://placehold.co/150x80/ecf0f1/gray?text=Partner+1",
//             "https://placehold.co/150x80/ecf0f1/gray?text=Partner+2",
//             "https://placehold.co/150x80/ecf0f1/gray?text=Partner+3",
//             "https://placehold.co/150x80/ecf0f1/gray?text=Partner+4",
//             "https://placehold.co/150x80/ecf0f1/gray?text=Partner+5",
//           ].map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Partner ${index + 1}`}
//               className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Call to Action - Join Us */}
//       <section className="bg-blue-800 text-white py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             Join Our Women Empowerment Community
//           </h2>
//           <p className="text-xl mb-8">
//             Connect, learn, and grow with women from around the world.
//           </p>
//           <button className="px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-md hover:bg-orange-600 transition-colors">
//             Sign Up Now
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WomanEmpowermentPage;

"use client";
// pages/women-empowerment.jsx
// Tailwind + Next.js + Shadcn UI (structure only)
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// You'll need to install react-icons: npm install react-icons
import {
  FiBookmark,
  FiMapPin,
  FiClock,
  FiTag,
  FiChevronDown,
  FiBook,
} from "react-icons/fi";

import {
  HiUser,
  HiShieldCheck,
  HiCash,
  HiStar,
  HiBriefcase,
  HiUsers,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const faqData = [
  {
    question: "Is Nexus India suitable for small businesses?",
    answer:
      "Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.",
  },
  {
    question: "How do I join an event?",
    answer:
      'You can register for any event by clicking the "Register Now" button on the event card. You will be prompted to log in or create an account.',
  },
  {
    question: "Is Nexus India suitable for small businesses?",
    answer:
      "Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.",
  },
  {
    question: "How do I join an event?",
    answer:
      'You can register for any event by clicking the "Register Now" button on the event card. You will be prompted to log in or create an account.',
  },
  {
    question: "Is Nexus India suitable for small businesses?",
    answer:
      "Yes, Nexus India is designed to be scalable and is an excellent choice for small businesses looking to grow, network, and find resources.",
  },
  {
    question: "How do I join an event?",
    answer:
      'You can register for any event by clicking the "Register Now" button on the event card. You will be prompted to log in or create an account.',
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left"
      >
        <span className="font-semibold text-gray-800 text-lg">{question}</span>
        <FiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => (
  <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 text-center mb-10">
        Your Questions, <span className="text-orange-500">Answered!</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
);

export default function WomenEmpowerment() {
  const [activeTab, setActiveTab] = useState("Yoga");
  const [activeState, setActiveState] = useState("Rajasthan");

  const stateProducts = {
    Rajasthan: [
      { src: "/carousel1.jpg", name: "Blue Pottery" },
      { src: "/carousel1.jpg", name: "Rajasthani Jewelry" },
      { src: "/carousel1.jpg", name: "Marble Artifacts" },
      { src: "/carousel1.jpg", name: "Camel Leather Footwear" },
      { src: "/carousel1.jpg", name: "Kathputli Puppets" },
    ],
    Maharashtra: [
      { src: "/carousel1.jpg", name: "Paithani Saree" },
      { src: "/carousel1.jpg", name: "Kolhapuri Chappal" },
      { src: "/carousel1.jpg", name: "Warli Art" },
      { src: "/carousel1.jpg", name: "Modak Sweets" },
    ],
    Punjab: [
      { src: "/carousel1.jpg", name: "Phulkari Embroidery" },
      { src: "/carousel1.jpg", name: "Punjabi Jutti" },
      { src: "/carousel1.jpg", name: "Amritsari Papad" },
      { src: "/carousel1.jpg", name: "Handmade Durries" },
    ],
    "Uttar Pradesh": [
      { src: "/carousel1.jpg", name: "Banarasi Saree" },
      { src: "/carousel1.jpg", name: "Lucknow Chikan Work" },
      { src: "/carousel1.jpg", name: "Moradabad Metal Craft" },
    ],
    Gujarat: [
      { src: "/carousel1.jpg", name: "Bandhani Saree" },
      { src: "/carousel1.jpg", name: "Patola Silk" },
      { src: "/carousel1.jpg", name: "Kutchi Handicraft" },
      { src: "/carousel1.jpg", name: "Terracotta Toys" },
    ],
  };

  const schemes = [
    {
      icon: <HiUser className="text-3xl" />,
      text: "Pradhan Mantri Matru Vandana Yojana",
      color: "bg-pink-600",
    },
    {
      icon: <HiShieldCheck className="text-3xl" />,
      text: "Janani Suraksha Yojana",
      color: "bg-blue-500",
    },
    {
      icon: <HiCash className="text-3xl" />,
      text: "Mahila Samridhi Yojana",
      color: "bg-green-600",
    },
    {
      icon: <HiStar className="text-3xl" />,
      text: "Mahila Shakti Kendra",
      color: "bg-yellow-400 text-black",
    },
    {
      icon: <HiBriefcase className="text-3xl" />,
      text: "Support to Training & Employment Program",
      color: "bg-violet-600",
    },
    {
      icon: <HiUsers className="text-3xl" />,
      text: "Beti Bachao Beti Padhao Scheme",
      color: "bg-pink-500",
    },
  ];

  const businesses = [
    { title: "HANDICRAFTS", img: "🪔" },
    { title: "SALONS", img: "💄" },
    { title: "EDUCATION", img: "📚" },
    { title: "FEMALE CHEF", img: "👩‍🍳" },
    { title: "FASHION", img: "🛍️" },
    { title: "HEALTHCARE", img: "🩺" },
    { title: "HOME & DECOR", img: "🏺" },
    { title: "INTERIOR DESIGN", img: "🏡" },
    { title: "CREATIVE ART", img: "🎨" },
  ];

  const skillProgramsData = [
    {
      category: "Livestock Rearing",
      title: "The Goat Project",
      description:
        "The project aims at effective and sustainable goat rearing practices. This includes supporting women 'pashu sakhis' who provide vaccinations, treatment, and training to rearers. 188 pashu sakhis developed with 17,000+ goats.",
      location: "Bihar, Jharkhand",
      image: "https://placehold.co/600x400/a3cb38/white?text=Goat+Project",
    },
    {
      category: "Training in Retail Management",
      title: "Pragati",
      description:
        "Retail skilling initiative that trained 100 women in Delhi & Haryana for customer service, billing, store operations & communication roles. 70+ women successfully placed in retail jobs.",
      location: "Delhi, Haryana",
      image: "https://placehold.co/600x400/3498db/white?text=Pragati",
    },
    {
      category: "E-rickshaw Driving",
      title: "Vahini",
      description:
        "Empowering women to enter the mobility sector by training them as e-rickshaw drivers. 7 women onboarded, driving 2,000+ km and earning sustainable income.",
      location: "Jahangirpuri",
      image: "https://placehold.co/600x400/f39c12/white?text=Vahini",
    },

    // ✅ Newly added high-quality programs

    {
      category: "Digital Literacy & Basic IT",
      title: "Women Digital Sakhi Program",
      description:
        "A program designed to empower rural women with basic computer skills, digital payments knowledge, internet literacy, and online safety to increase employment and business readiness.",
      location: "Rajasthan, Maharashtra",
      image: "https://placehold.co/600x400/1abc9c/white?text=Digital+Sakhi",
    },
    {
      category: "Handicraft & Artisan Training",
      title: "She-Artisans Initiative",
      description:
        "Trains women in traditional craft, modern design techniques, and online selling. Promotes artisan clusters, e-commerce onboarding, and export-quality product creation.",
      location: "Kutch, Rajasthan, Odisha",
      image: "https://placehold.co/600x400/d35400/white?text=She+Artisans",
    },
    {
      category: "Self-Help Group Entrepreneurship",
      title: "Women Micro-Enterprise Academy",
      description:
        "Equips women with entrepreneurship skills, bookkeeping, microcredit access, pricing, sales, branding, and government scheme linkages to build sustainable SHG-based businesses.",
      location: "Uttar Pradesh, Madhya Pradesh",
      image: "https://placehold.co/600x400/8e44ad/white?text=Micro+Enterprise",
    },
    {
      category: "Tailoring & Apparel Skills",
      title: "Stitch & Earn Program",
      description:
        "Skill development program teaching tailoring, machine handling, embroidery, and production - connecting women to garment factories and self-employment orders.",
      location: "Tamil Nadu, Telangana",
      image: "https://placehold.co/600x400/e74c3c/white?text=Stitch+%26+Earn",
    },
    {
      category: "Beauty & Wellness Training",
      title: "Rozgar Beauty Hub",
      description:
        "Hands-on certification training for beauticians including salon management, grooming, bridal makeup, hygiene standards, and client service - leading to home-salon income.",
      location: "Mumbai, Pune",
      image: "https://placehold.co/600x400/9b59b6/white?text=Beauty+Hub",
    },
    {
      category: "Agri-Entrepreneurship",
      title: "Women Agri-Leaders Fellowship",
      description:
        "Supports women in agri-value chain: organic farming, dairy management, packaging, food processing, and cooperative market linkages.",
      location: "Punjab, Gujarat",
      image: "https://placehold.co/600x400/27ae60/white?text=Agri+Leaders",
    },
  ];

  const sportsTabs = ["Yoga", "Gym", "Zumba", "Aerobics", "CrossFit"];

  const sportsProductsData = {
    Yoga: [
      {
        name: "Premium Yoga Mat",
        price: "799",
        image:
          "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
        desc: "Non-slip yoga mat for stability & comfort.",
      },
      {
        name: "Yoga Brick",
        price: "249",
        image:
          "https://images.pexels.com/photos/3822617/pexels-photo-3822617.jpeg",
        desc: "Support tool for perfect posture.",
      },
      {
        name: "Meditation Cushion",
        price: "599",
        image:
          "https://images.pexels.com/photos/6695761/pexels-photo-6695761.jpeg",
        desc: "Comfortable cushion for meditation & breathwork.",
      },
      {
        name: "Yoga Strap",
        price: "199",
        image:
          "https://images.pexels.com/photos/6456000/pexels-photo-6456000.jpeg",
        desc: "Helps improve stretching & flexibility.",
      },
      {
        name: "Yoga Wheel",
        price: "1299",
        image:
          "https://images.pexels.com/photos/6453391/pexels-photo-6453391.jpeg",
        desc: "Enhances balance & deep stretching.",
      },
    ],

    Gym: [
      {
        name: "Dumbbells (Pair)",
        price: "1099",
        image:
          "https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg",
        desc: "Rubber-coated dumbbells for strength training.",
      },
      {
        name: "Resistance Bands",
        price: "499",
        image:
          "https://images.pexels.com/photos/6456007/pexels-photo-6456007.jpeg",
        desc: "Strength training resistance bands.",
      },
      {
        name: "Gym Gloves",
        price: "299",
        image:
          "https://images.pexels.com/photos/3837461/pexels-photo-3837461.jpeg",
        desc: "Anti-slip workout gloves.",
      },
      {
        name: "Adjustable Hand Gripper",
        price: "249",
        image:
          "https://images.pexels.com/photos/7031702/pexels-photo-7031702.jpeg",
        desc: "Grip strength training tool.",
      },
      {
        name: "Adjustable Dumbbell Set",
        price: "2499",
        image:
          "https://images.pexels.com/photos/7674488/pexels-photo-7674488.jpeg",
        desc: "Weight-adjustable dumbbells for home gym.",
      },
    ],

    Zumba: [
      {
        name: "Zumba Shoes",
        price: "1499",
        image:
          "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
        desc: "Flexible dancing shoes for Zumba sessions.",
      },
      {
        name: "Sweat Belt",
        price: "399",
        image:
          "https://images.pexels.com/photos/6454089/pexels-photo-6454089.jpeg",
        desc: "Sweat-enhancing workout belt.",
      },
      {
        name: "Dance Elastic Band",
        price: "249",
        image:
          "https://images.pexels.com/photos/6456140/pexels-photo-6456140.jpeg",
        desc: "Aerobic dance resistance band.",
      },
      {
        name: "Zumba Music CD Pack",
        price: "349",
        image:
          "https://images.pexels.com/photos/159980/music-speakers-microphone-headphones-159980.jpeg",
        desc: "Energetic music pack for Zumba classes.",
      },
    ],

    Aerobics: [
      {
        name: "Aerobic Stepper",
        price: "1499",
        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
        desc: "Perfect for cardio and balance drills.",
      },
      {
        name: "Skipping Rope",
        price: "199",
        image:
          "https://images.pexels.com/photos/4753895/pexels-photo-4753895.jpeg",
        desc: "Speed jump rope for cardio training.",
      },
      {
        name: "Balance Ball",
        price: "999",
        image:
          "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
        desc: "Improves core & balance control.",
      },
      {
        name: "Aerobic Toning Sticks",
        price: "599",
        image:
          "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
        desc: "Weighted sticks for rhythm workouts.",
      },
    ],

    CrossFit: [
      {
        name: "CrossFit Rope",
        price: "799",
        image:
          "https://images.pexels.com/photos/4753895/pexels-photo-4753895.jpeg",
        desc: "High-speed jump rope for CrossFit.",
      },
      {
        name: "Kettlebell",
        price: "1299",
        image:
          "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
        desc: "Strong cast iron kettlebell.",
      },
      {
        name: "Battle Rope",
        price: "1999",
        image:
          "https://images.pexels.com/photos/6339690/pexels-photo-6339690.jpeg",
        desc: "Heavy rope for strength & endurance.",
      },
      {
        name: "Weighted Vest",
        price: "2499",
        image:
          "https://images.pexels.com/photos/6453741/pexels-photo-6453741.jpeg",
        desc: "Increase workout intensity & strength.",
      },
      {
        name: "Plyo Jump Box",
        price: "2999",
        image:
          "https://images.pexels.com/photos/8487922/pexels-photo-8487922.jpeg",
        desc: "Essential for explosive jump training.",
      },
    ],
  };

  const mentorsData = [
    {
      name: "Dr. Anjali Mehra",
      title: "Leadership Coach & HR Consultant",
      price: "999.00",
      status: "Free",
      image: "https://placehold.co/400x400/8e44ad/white?text=Dr.+Anjali",
      tags: ["Career Growth", "Confidence Building"],
    },
    {
      name: "Ritu Sharma",
      title: "Entrepreneurial & Financial Literacy Trainer",
      price: "999.00",
      status: "Paid",
      image: "https://placehold.co/400x400/3498db/white?text=Ritu",
      tags: ["Entrepreneurship", "Financial Independence"],
    },
    {
      name: "Neha Kapoor",
      title: "Personal Branding & Communication Coach",
      price: "999.00",
      status: "Paid",
      image: "https://placehold.co/400x400/2ecc71/white?text=Neha",
      tags: ["Personality Development", "Public Speaking"],
    },
    {
      name: "Priya Verma",
      title: "Business Analyst & Tech Career Mentor",
      price: "1299.00",
      status: "Paid",
      image: "https://placehold.co/400x400/9b59b6/white?text=Priya",
      tags: ["Data Analytics", "IT Careers"],
    },
    {
      name: "Sanya Gupta",
      title: "UX/UI Design Mentor",
      price: "899.00",
      status: "Free",
      image: "https://placehold.co/400x400/e67e22/white?text=Sanya",
      tags: ["UI/UX", "Portfolio Review"],
    },
    {
      name: "Aditi Chawla",
      title: "Startup Growth & Digital Marketing Coach",
      price: "1099.00",
      status: "Paid",
      image: "https://placehold.co/400x400/f39c12/white?text=Aditi",
      tags: ["Digital Marketing", "Startup Growth"],
    },
    {
      name: "Meera Iyer",
      title: "Mental Wellness Counselor",
      price: "799.00",
      status: "Free",
      image: "https://placehold.co/400x400/27ae60/white?text=Meera",
      tags: ["Mental Wellness", "Stress Management"],
    },
    {
      name: "Ankita Singh",
      title: "Chartered Accountant & Finance Mentor",
      price: "1499.00",
      status: "Paid",
      image: "https://placehold.co/400x400/c0392b/white?text=Ankita",
      tags: ["Finance", "Tax Planning"],
    },
    {
      name: "Ishita Malhotra",
      title: "Law & Legal Career Coach",
      price: "999.00",
      status: "Paid",
      image: "https://placehold.co/400x400/2980b9/white?text=Ishita",
      tags: ["Legal Guidance", "Career Coaching"],
    },
    {
      name: "Dr. Kavya Rao",
      title: "Health, Nutrition & Wellness Expert",
      price: "699.00",
      status: "Free",
      image: "https://placehold.co/400x400/8e44ad/white?text=Kavya",
      tags: ["Nutrition", "Women Health"],
    },
    {
      name: "Tanya Bansal",
      title: "Product Manager & Tech Leadership Mentor",
      price: "1599.00",
      status: "Paid",
      image: "https://placehold.co/400x400/16a085/white?text=Tanya",
      tags: ["Product Management", "Tech Leadership"],
    },
    {
      name: "Pooja Desai",
      title: "Life Coach & Confidence Trainer",
      price: "899.00",
      status: "Free",
      image: "https://placehold.co/400x400/d35400/white?text=Pooja",
      tags: ["Self Growth", "Confidence"],
    },
  ];

  const eventsData = [
    {
      date: "11",
      month: "OCTOBER",
      title: "Personality Development Training",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      location: "Online",
      time: "4:00PM - 6:00PM",
      price: "Free",
    },
    {
      date: "25",
      month: "OCTOBER",
      title: "Personality Development Training",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      location: "Andheri, Mumbai",
      time: "4:00PM - 6:00PM",
      price: "₹1999.00",
    },
    {
      date: "30",
      month: "OCTOBER",
      title: "Personality Development Training",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      location: "New Delhi",
      time: "4:00PM - 6:00PM",
      price: "₹799.00",
    },
  ];

  const storiesData = [
    {
      name: "Sakshi Verma: The Calligrapher",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      image: "https://placehold.co/400x300/4a4a4a/white?text=Sakshi+Verma",
    },
    {
      name: "Sakshi Verma: The Calligrapher",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      image: "https://placehold.co/400x300/6a6a6a/white?text=Sakshi+Verma",
    },
    {
      name: "Sakshi Verma: The Calligrapher",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      image: "https://placehold.co/400x300/8a8a8a/white?text=Sakshi+Verma",
    },
    {
      name: "Sakshi Verma: The Calligrapher",
      desc: "An online training program to help women build confidence, communication, and personal growth. For students, professionals, and homemakers seeking self-improvement.",
      image: "https://placehold.co/400x300/aaaaaa/white?text=Sakshi+Verma",
    },
  ];

  return (
    <main className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white bg-black">
        <Image
          src="/womenHero.jpg"
          alt="Women Empowerment"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            Women Empowerment
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Everything you need to empower, inspire & uplift women entrepreneurs
            and leaders.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 transition">
            Join Community
          </button>
        </div>
      </section>

      <div className="bg-gray-100 py-16">
        {/* Section Header */}
        <div className="flex justify-between items-center px-10 mb-6">
          <h5 className="text-gray-600 font-semibold text-2xl">
            Popular Government Schemes for Women
          </h5>

          <button className="border border-red-500 text-red-500 rounded-full px-4 py-1 font-semibold hover:bg-red-500 hover:text-white transition">
            View All »
          </button>
        </div>

        {/* Swiper - Schemes */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={16}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3500}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="px-10 pb-6"
        >
          {schemes.map((scheme, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${scheme.color} text-white justify-between rounded-xl shadow-md min-w-[220px] min-h-[140px] p-4 flex flex-col gap-2`}
              >
                {scheme.icon}
                <span className=" text-md font-bold leading-tight">
                  {scheme.text}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Businesses Section */}
        <div className="text-center my-12">
          <h2 className="font-extrabold text-5xl">
            Popular Women Led{" "}
            <span className="text-yellow-500">Businesses</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {businesses.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md text-center py-8 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.img}</div>
              <h5 className="font-bold">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
      {/* one Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1">
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

      {/* Local Products Section */}
      <div className="bg-white pt-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
                Authentic{" "}
                <span className="text-orange-500">Local Products</span>
              </h2>

              <a
                href="#"
                className="text-sm font-medium text-orange-500 border border-orange-500 rounded-full px-4 py-1.5 hover:bg-orange-50 transition"
              >
                View All &raquo;
              </a>
            </div>

            {/* State Tabs */}
            <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 mb-8 overflow-x-auto">
              {Object.keys(stateProducts).map((state) => (
                <button
                  key={state}
                  onClick={() => setActiveState(state)}
                  className={`pb-3 text-lg font-semibold transition ${
                    activeState === state
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            {/* Swiper Products */}
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={16}
              slidesPerView={2}
              freeMode={true}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={3500}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="pb-4"
            >
              {stateProducts[activeState].map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="w-44 h-60 sm:w-68 sm:h-68 rounded-xl overflow-hidden relative group cursor-pointer">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <h3 className="absolute bottom-4 left-3 text-white text-lg font-bold">
                      {item.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          {/* Final Section */}
          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
                Women <span className="text-orange-500">Powering Change</span>
              </h2>
            </div>

            {/* 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                [
                  "https://placehold.co/600x400/e67e22/white?text=Professionals",
                  "Women Professionals",
                  "Discover Expert Services by Women Entrepreneurs like CA, Consultants, Teachers etc",
                ],
                [
                  "https://placehold.co/600x400/34495e/white?text=Business",
                  "Women in Business",
                  "Discover Unique Brands & Products Made by Women entrepreneurs",
                ],
              ].map(([src, title, desc], i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden h-80 group cursor-pointer"
                >
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="text-sm text-gray-200 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          [
            "/bag-img1.webp",
            "Women Professionals",
            "Discover Expert Services by Women Entrepreneurs like CA, Consultants, Teachers etc",
          ],
          [
            "/image.jpg",
            "Women in Business",
            "Discover Unique Brands & Products Made by Women entrepreneurs",
          ],
        ].map(([src, title, desc], i) => (
          <div
            key={i}
            className="relative  overflow-hidden h-80 group cursor-pointer"
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            {/* <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-sm text-gray-200 mt-1">{desc}</p>
            </div> */}
          </div>
        ))}
      </div>

      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Skill{" "}
              <span className="text-orange-500">Development Programs</span>
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-orange-500 border border-orange-500 rounded-full px-4 py-1.5 hover:bg-orange-50 transition-colors"
            >
              View All &raquo;
            </a>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            slidesPerView={1.1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1 },
            }}
            className="pb-10"
          >
            {skillProgramsData.map((program) => (
              <SwiperSlide key={program.title}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={program.image}
                      alt={program.title}
                    />
                    <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-sm font-medium text-gray-500">
                      {program.category}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm flex-grow">
                      {program.description}
                    </p>

                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
                      <span className="flex items-center text-sm text-gray-500">
                        <FiMapPin className="w-4 h-4 mr-1.5" />
                        {program.location}
                      </span>
                      <a
                        href="#"
                        className="text-sm font-semibold text-orange-500 hover:underline"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-teal-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Sports & <span className="text-orange-400">Fitness</span>
          </h2>

          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
            {sportsTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-medium pb-2 transition-all ${
                  activeTab === tab
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
            <Link
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-white self-center ml-4"
            >
              View All »
            </Link>
          </div>

          <div className=" flex items-center justify-center  mb-6 gap-10">
            <p className="text-center text-gray-200">
              Discover peace and balance with expert-led wellness & fitness
              products.
            </p>
            <button className="bg-transparent border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-teal-800 transition-colors font-medium">
              View Instructors
            </button>
          </div>

          {/* Swiper Products */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2.3 },
              1024: { slidesPerView: 4.5 },
            }}
          >
            {sportsProductsData[activeTab].map((p, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg shadow-md text-gray-900">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold">{p.name}</h4>
                      <span className="font-bold text-teal-700">
                        ₹{p.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                    <button className="mt-3 w-full bg-orange-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-orange-600">
                      Buy Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Learn By <span className="text-orange-500">Industry Mentors</span>
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-orange-500 border border-orange-500 rounded-full px-4 py-1.5 hover:bg-orange-50 transition-colors"
            >
              View more &raquo;
            </a>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 0, // continuous scroll
              disableOnInteraction: false,
            }}
            speed={3500} // scroll speed
            grabCursor={true}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4.2 },
            }}
            className="pb-10"
          >
            {mentorsData.map((mentor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={mentor.image}
                      alt={mentor.name}
                    />
                    <span
                      className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                        mentor.status === "Free"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-gray-900"
                      }`}
                    >
                      {mentor.status}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-sm font-medium text-gray-500">
                      {mentor.title}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      {mentor.name}
                    </h3>

                    <p className="text-xs text-gray-600 mt-2">
                      Guiding women to lead with confidence and level up their
                      careers.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {mentor.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-lg font-bold text-gray-900 mt-3">
                      ₹{mentor.price}{" "}
                      <span className="text-sm font-normal text-gray-500">
                        Per Hour
                      </span>
                    </p>

                    <div className="flex gap-3 mt-4">
                      <button className="flex-1 bg-orange-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-orange-600 transition-colors">
                        Book a Session
                      </button>

                      <button className="flex-1 flex items-center justify-center gap-1.5 bg-gray-200 text-gray-700 text-sm font-semibold py-2 rounded-md hover:bg-gray-300 transition-colors">
                        <FiBookmark className="w-4 h-4" />
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="w-full bg-stone-100 py-12">
        <div className="max-w-8xl mx-auto bg-white shadow-lg border border-gray-300">
          {/* Top Header */}
          <div className="p-6 border-b-2 border-black">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-900">
                  NEXUS INDIA
                </h3>
                <p className="text-sm text-gray-600 tracking-wider">
                  BIG DREAMS, SMALL BUDGET
                </p>
              </div>
              <p className="text-sm text-gray-600 max-w-xs sm:text-right">
                Two sentences about what is women of the week by Nexus India to
                help people understand the significance of it.
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="py-8 border-b-4 border-gray-200">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-center text-gray-900">
              Woman of the Week
            </h1>
            <p className="text-center text-gray-500 mt-2">November 10, 2025</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
            <div className="lg:col-span-1 space-y-5">
              <img
                src="https://placehold.co/800x1000/9ca3af/white?text=Reet+Deole"
                alt="Reet Deole in a studio"
                className="w-full h-auto object-cover rounded-md border"
              />
              <h2 className="text-3xl font-bold text-gray-900">Reet Deole</h2>
              <p className="text-gray-700 text-base">
                Reet Technologies, Pune is a forward-thinking IT and business
                consulting firm dedicated to empowering startups...
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-2 bg-orange-500 text-white font-semibold rounded-md shadow-sm hover:bg-orange-600 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md shadow-sm hover:bg-gray-300 transition-colors">
                  Download Mention
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">
                Reet Technologies - Tech Startup
              </h1>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Reet Technologies, Pune is a forward-thinking IT and business
                  consulting firm...
                </p>

                <p>
                  Based in Pune, we specialize in digital transformation, AI/ML
                  solutions...
                </p>

                <img
                  src="https://placehold.co/600x400/9ca3af/white?text=Studio+Image"
                  alt="Reet Deole in studio"
                  className="w-full h-auto object-cover rounded-md border"
                />

                <p>
                  Reet Technologies, Pune is a forward-thinking IT and business
                  consulting firm...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* one Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1">
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

      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Upcoming <span className="text-orange-500">Events</span>
            </h2>
            <a
              href="#"
              className="text-sm font-medium text-orange-500 border border-orange-500 rounded-full px-4 py-1.5 hover:bg-orange-50 transition-colors"
            >
              View All &raquo;
            </a>
          </div>
          <div className="space-y-6">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex-shrink-0 text-center bg-blue-600 text-white rounded-lg p-4 w-20 h-20 flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-6">
                  <span className="text-3xl font-bold">{event.date}</span>
                  <span className="text-xs font-semibold uppercase">
                    {event.month}
                  </span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-sm text-gray-700 mt-3">
                    <span className="flex items-center">
                      <FiMapPin className="w-4 h-4 mr-1.5 text-gray-500" />
                      {event.location}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="w-4 h-4 mr-1.5 text-gray-500" />
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <FiTag className="w-4 h-4 mr-1.5 text-gray-500" />
                      {event.price}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col md:flex-row items-center gap-3 mt-4 md:mt-0 md:ml-6">
                  <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                    <FiBookmark className="w-4 h-4 mr-1.5" />
                    Save for Later
                  </button>
                  <button className="text-sm font-semibold text-orange-500 border border-orange-500 rounded-full px-5 py-2 hover:bg-orange-500 hover:text-white transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-10">
            Success <span className="text-orange-500">Stories</span>
          </h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            slidesPerView={1.15}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4.2 },
            }}
            className="pb-10"
          >
            {storiesData.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    className="w-full h-40 object-cover"
                    src={story.image}
                    alt={story.name}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 h-20 overflow-hidden">
                      {story.desc}
                    </p>
                    <a
                      href="#"
                      className="text-sm font-semibold text-orange-500 hover:underline mt-4 inline-block"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
