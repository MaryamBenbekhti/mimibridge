"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

interface City {
  name: string;
  tagline: string;
  image: string;
}

const TURKEY_CITIES: City[] = [
  {
    name: "Istanbul",
    tagline: "The famous global & cultural heart",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Ankara",
    tagline: "The capital core of Turkey",
    image: "https://images.unsplash.com/photo-1589083142727-2c5e5ba8a75e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Trabzon",
    tagline: "Black Sea jewel, nature & coastal charm",
    image: "https://www.advantour.com/img/turkey/images/trabzon.jpg",
  },
  {
    name: "Karabük / Safranbolu",
    tagline: "UNESCO Ottoman heritage & historic architecture",
    image: "https://bellimatur.com/upload/safranbolu%20kristal%20teras.jpg",
  },
];

const SAUDI_CITIES: City[] = [
  {
    name: "Medinah",
    tagline: "The spiritual haven",
    image: "https://getexperience.com/cdn-cgi/image/width=1024,height=853,fit=cover,quality=55,dpr=1,sharpen=1,format=jpeg/uploads/02b8cd23-4b6e-4b8a-b985-4dc29fec32a9.jpg",
  },
  {
    name: "Makkah",
    tagline: "The holy center of Muslims",
    image: "https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg",
  },
  {
    name: "Jeddah",
    tagline: "Red Sea coastal port & historical Al-Balad",
    image: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3838240045950347438",
  },
  {
    name: "Riyadh",
    tagline: "The modern capital of Saudi Arabia",
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg",
  },
];

export default function CityGuides() {
  const [activeCountry, setActiveCountry] = useState<"turkey" | "saudi">("turkey");

  const currentCities = activeCountry === "turkey" ? TURKEY_CITIES : SAUDI_CITIES;

  return (
    <section id="travel" className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Header Section with Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold block mb-2">
            Curated Destinations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-plum">
            Interactive City Guides
          </h2>
          <p className="text-sm text-brand-plum/70 mt-2 max-w-xl">
            Seamless transitions from arrival to luxury regional navigation and local concierge support.
          </p>
        </div>

        {/* Country Filter Switcher */}
        <div className="inline-flex p-1.5 bg-brand-plum/5 rounded-full border border-brand-plum/10 self-start md:self-auto">
          <button
            onClick={() => setActiveCountry("turkey")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCountry === "turkey"
                ? "bg-brand-plum text-brand-ivory shadow-md"
                : "text-brand-plum/70 hover:text-brand-plum"
            }`}
          >
            Turkey 🇹🇷
          </button>
          <button
            onClick={() => setActiveCountry("saudi")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCountry === "saudi"
                ? "bg-emerald-900 text-brand-ivory shadow-md"
                : "text-brand-plum/70 hover:text-brand-plum"
            }`}
          >
            Saudi Arabia 🇸🇦
          </button>
        </div>
      </div>

      {/* Grid of Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentCities.map((city) => (
          <div
            key={city.name}
            className="group relative h-[380px] rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-brand-plum/10 cursor-pointer"
          >
            {/* Background Image with Fallback handling */}
            <img
              src={city.image}
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-plum/90 via-brand-plum/30 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="self-end">
                <span className="bg-brand-ivory/20 backdrop-blur-md p-2 rounded-full inline-flex text-brand-ivory">
                  <MapPin className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-1">
                  {city.name}
                </h3>
                <p className="text-xs text-brand-ivory/80 line-clamp-2 mb-4 leading-relaxed">
                  {city.tagline}
                </p>

                <button className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-brand-gold bg-brand-ivory/10 hover:bg-brand-ivory/20 backdrop-blur-md px-4 py-2 rounded-full transition-all border border-brand-gold/30">
                  <span>Explore City</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}