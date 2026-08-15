"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar"; // Adjust path if your Navbar is in a different folder
import {
  GraduationCap,
  Briefcase,
  Languages,
  Compass,
  ArrowRight,
  Building2,
  Palmtree,
  ShieldCheck,
  MapPin,
  LucideIcon
} from "lucide-react";

type CountryContext = "turkey" | "saudi" | null;

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
    image: "https://bukaviyyehotel.com.tr/tema/genel/uploads/haberler/ankara-gezilecek-yerler.jpg",
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
    image: "https://images.trvl-media.com/place/553248634646177626/e5c39be0-8b5d-49e9-ae16-92f7c86f9d47.jpg",
  },
  {
    name: "Riyadh",
    tagline: "The modern capital of Saudi Arabia",
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg",
  },
];

export default function GatewayPage() {
  const router = useRouter();
  const [selectedHub, setSelectedHub] = useState<CountryContext>(null);
  const [activeCityCountry, setActiveCityCountry] = useState<"turkey" | "saudi">("turkey");

  const handleHubSelect = (hub: CountryContext) => {
    setSelectedHub(hub);
    if (hub) {
      setActiveCityCountry(hub);
      if (hub === "turkey") {
        router.push("/turkey");
      } else if (hub === "saudi") {
        router.push("/saudi");
      }
    }
  };

  const currentCities = activeCityCountry === "turkey" ? TURKEY_CITIES : SAUDI_CITIES;

  return (
    <main className="min-h-screen bg-[#EFE7DA] text-[#2B103A] flex flex-col justify-between">
      {/* SHARED STANDALONE NAVBAR */}
      <Navbar />

      {/* HERO / GATEWAY CANVAS */}
      <div className="pt-32 pb-16 my-auto">
        <AnimatePresence mode="wait">
          {!selectedHub ? (
            /* PORTAL SELECTION VIEW */
            <motion.div
              key="gateway-selector"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-6 text-center w-full"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#C49A2A] font-bold block mb-3">
                CROSS-BORDER OPERATIONAL HUB
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#2B103A] mb-4">
                Where is your journey taking you?
              </h1>
              <p className="text-[#2B103A]/70 max-w-xl mx-auto text-sm md:text-base mb-12">
                Select your target destination to access tailored relocation, academic, and corporate services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* TURKEY CARD */}
                <div
                  onClick={() => handleHubSelect("turkey")}
                  className="group relative cursor-pointer p-8 md:p-12 rounded-[24px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between text-left overflow-hidden bg-white/40 backdrop-blur-md"
                >
                  <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Building2 className="w-64 h-64 text-[#2B103A]" />
                  </div>
                  <div>
                    <span className="inline-block bg-[#2B103A] text-[#EFE7DA] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                      Destination Turkey
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-[#2B103A] mb-3">
                      Studying or Relocating to <br /><span className="text-[#C49A2A]">Turkey</span>
                    </h2>
                    <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed mb-8">
                      Complete support for international students and travelers: university admission, housing, residency permits, and certified local concierge services.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-wider text-[#2B103A] group-hover:text-[#C49A2A] transition-colors">
                    <span>Explore Turkey Services</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* SAUDI ARABIA CARD */}
                <div
                  onClick={() => handleHubSelect("saudi")}
                  className="group relative cursor-pointer p-8 md:p-12 rounded-[24px] border border-[#2B103A]/10 hover:border-emerald-600 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between text-left overflow-hidden bg-gradient-to-br from-white/40 to-emerald-900/5 backdrop-blur-md"
                >
                  <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Palmtree className="w-64 h-64 text-emerald-800" />
                  </div>
                  <div>
                    <span className="inline-block bg-emerald-900 text-[#EFE7DA] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                      Destination Saudi Arabia
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-[#2B103A] mb-3">
                      Expanding or Visiting <br /><span className="text-emerald-700">Saudi Arabia</span>
                    </h2>
                    <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed mb-8">
                      On-ground assistance for business and travel: B2B matchmaking, trade delegation support, cultural guidance, and luxury travel arrangements.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-wider text-emerald-800 group-hover:text-emerald-600 transition-colors">
                    <span>Explore Saudi Services</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* SERVICE MATRIX VIEW */
            <motion.div
              key="service-hub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-6 w-full"
            >
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-widest text-[#C49A2A] font-bold block mb-2">
                  Active Corridor: {selectedHub === "turkey" ? "Destination Turkey" : "Destination Saudi Arabia"}
                </span>
                <h2 className="font-serif text-4xl font-bold">
                  {selectedHub === "turkey"
                    ? "Everything You Need to Settle & Study in Turkey"
                    : "On-Ground Professional Support in Saudi Arabia"}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedHub === "turkey" ? (
                  <>
                    <ServiceTile icon={GraduationCap} title="Student Services" desc="SIM guidance, housing help, and campus orientation." />
                    <ServiceTile icon={Languages} title="Translation Services" desc="Everyday translation, phone calls, and live appointment accompaniment." />
                    <ServiceTile icon={Compass} title="Travel Services" desc="Custom trip itineraries and friendly local accompaniment." />
                  </>
                ) : (
                  <>
                    <ServiceTile icon={GraduationCap} title="Student Services" desc="Orientation support, arrival assistance, and local setup." />
                    <ServiceTile icon={Languages} title="Translation Services" desc="Bilingual communication and live appointment accompaniment." />
                    <ServiceTile icon={Compass} title="Travel Services" desc="Personalized itinerary planning and local city exploration support." />
                  </>
                )}
              </div>

              <div className="text-center mt-12 flex justify-center space-x-4">
                <button
                  onClick={() => setSelectedHub(null)}
                  className="border border-[#2B103A]/20 text-[#2B103A] px-6 py-4 rounded-full font-medium text-sm hover:border-[#C49A2A] transition-all cursor-pointer"
                >
                  Change Destination
                </button>
                <button className="bg-[#2B103A] text-[#EFE7DA] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#2B103A]/90 transition-all shadow-lg cursor-pointer">
                  Book a Consultation for {selectedHub === "turkey" ? "Turkey" : "Saudi Arabia"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* INTERACTIVE CITY GUIDES */}
      <section id="travel" className="py-20 px-6 max-w-7xl mx-auto w-full border-t border-[#2B103A]/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
              Curated Destinations
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2B103A]">
              Interactive City Guides
            </h2>
            <p className="text-sm text-[#2B103A]/70 mt-2 max-w-xl">
              Seamless transitions from arrival to luxury regional navigation and local concierge support.
            </p>
          </div>

          {/* Country Filter Switcher */}
          <div className="inline-flex p-1.5 bg-[#2B103A]/5 rounded-full border border-[#2B103A]/10 self-start md:self-auto">
            <button
              onClick={() => setActiveCityCountry("turkey")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeCityCountry === "turkey"
                  ? "bg-[#2B103A] text-[#EFE7DA] shadow-md"
                  : "text-[#2B103A]/70 hover:text-[#2B103A]"
                }`}
            >
              Turkey 🇹🇷
            </button>
            <button
              onClick={() => setActiveCityCountry("saudi")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeCityCountry === "saudi"
                  ? "bg-emerald-900 text-[#EFE7DA] shadow-md"
                  : "text-[#2B103A]/70 hover:text-[#2B103A]"
                }`}
            >
              Saudi Arabia 🇸🇦
            </button>
          </div>
        </div>

        {/* Dynamic Grid of Cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCities.map((city) => (
            <div
              key={city.name}
              className="group relative h-[380px] rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#2B103A]/10 cursor-pointer"
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                unoptimized
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/30 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="self-end">
                  <span className="bg-[#EFE7DA]/20 backdrop-blur-md p-2 rounded-full inline-flex text-[#EFE7DA]">
                    <MapPin className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#EFE7DA] mb-1">
                    {city.name}
                  </h3>
                  <p className="text-xs text-[#EFE7DA]/80 line-clamp-2 mb-4 leading-relaxed">
                    {city.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-xs text-[#2B103A]/40 border-t border-[#2B103A]/5">
        &copy; {new Date().getFullYear()} Mimi Bridge • Cross-Border Operations (Turkey & Saudi Arabia)
      </footer>
    </main>
  );
}

function ServiceTile({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/5 hover:border-[#C49A2A] transition-all group cursor-pointer shadow-sm hover:shadow-md">
      <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-serif font-bold text-lg mb-2 text-[#2B103A]">{title}</h3>
      <p className="text-xs text-[#2B103A]/70 leading-relaxed">{desc}</p>
    </div>
  );
}