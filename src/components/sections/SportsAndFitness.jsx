"use clinet";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SportsAndFitness() {
  const [activeTab, setActiveTab] = useState("Yoga");

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
  return (
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
                    <span className="font-bold text-teal-700">₹{p.price}</span>
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
  );
}

export default SportsAndFitness;
