'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Women Empowerment",
      description: "Initiatives to uplift and empower women in all fields.",
      link: "https://forms.gle/7U9F16D2maSzYa567",
    },
    {
      title: "Animal Welfare",
      description: "Promoting animal care, protection, and welfare programs.",
      link: "https://forms.gle/7U9F16D2maSzYa567",
    },
    {
      title: "Startups",
      description: "Supporting new businesses with resources and mentorship.",
      link: "https://forms.gle/7U9F16D2maSzYa567",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
      {/* Banner Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/hero.png" // <-- replace with your banner image path in /public
          alt="Nexus India Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Services Section (Desktop & Tablet) */}
        <section className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-thin text-white mb-6 drop-shadow-lg">
            Register Now for Our Upcoming Initiatives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-md rounded-full shadow-md hover:shadow-xl p-4 sm:p-6 text-center transition border hover:border-orange-400"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Services Section (Below Banner) */}
      <section className="block sm:hidden w-full max-w-5xl px-4 py-10">
        <h3 className="text-2xl sm:text-2xl font-thin text-gray-800 mb-6 text-center">
          Register Now for Our Upcoming Initiatives
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 text-center transition border hover:border-orange-400"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
