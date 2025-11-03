"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative h-[90vh] flex items-end justify-left text-white bg-black">
        <Image
          src="/womenHero.jpg"
          alt="Women Empowerment"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative z-10 max-w-3xl p-12">
          
          <p className="text-lg md:text-xl mb-6">
            Every business deserves a chance to shine—without breaking the bank.
            Let Nexus India help you build your future online.
          </p>
          <div className="flex items-center gap-5 mb-3">
            <Link
            href={"/pages/contact_us"}>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition">
              Register Your business
            </button>
            </Link>
            <button className="px-6 py-3 transition">
              Lear more 
            </button>
          </div>
          <p className="text-lg md:text-xl mb-6">
            For further enquiries, Contact us
          </p>
        </div>
      </section>
    </>
  );
}
