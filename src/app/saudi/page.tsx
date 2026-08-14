"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Briefcase, 
  GraduationCap,
  Compass, 
  Languages, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Palmtree,
  FileCheck,
  LucideIcon 
} from "lucide-react";

interface CityCard {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

const SAUDI_CITIES: CityCard[] = [
  {
    name: "Riyadh",
    tagline: "The Modern Financial & Corporate Hub",
    description: "HQ setup, government regulatory navigation, trade summits, and commercial growth.",
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg",
  },
  {
    name: "Jeddah",
    tagline: "Red Sea Gateway & Historical Al-Balad",
    description: "Maritime commerce, cross-border shipping logistics, and luxury coastal hospitality.",
    image: "https://images.trvl-media.com/place/553248634646177626/e5c39be0-8b5d-49e9-ae16-92f7c86f9d47.jpg",
  },
  {
    name: "Medinah",
    tagline: "The Spiritual & Cultural Haven",
    description: "Serene travel arrangements, private transit, and personalized pilgrimage support.",
    image: "https://getexperience.com/cdn-cgi/image/width=1024,height=853,fit=cover,quality=55,dpr=1,sharpen=1,format=jpeg/uploads/02b8cd23-4b6e-4b8a-b985-4dc29fec32a9.jpg",
  },
  {
    name: "Makkah",
    tagline: "The Sacred Holy Center",
    description: "Seamless family travel, VIP hotel bookings, and dedicated local coordination.",
    image: "https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg",
  },
];

export default function SaudiPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* HERO SECTION */}
     <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
  <Image
    src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1600&auto=format&fit=crop&q=80"
    alt="Saudi Arabia Skyline"
    fill
    priority
    className="object-cover"
    unoptimized
  />
  
  {/* Dark Overlay for Text Legibility */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />

  {/* Foreground Content */}
  <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
    <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
      <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
      <span>Destination Saudi Arabia</span>
    </span>
    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
      Expanding, Traveling & Operating in <span className="text-emerald-400">Saudi Arabia</span>
    </h1>
    <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
      Your trusted, on-ground partner across the Kingdom. Connecting international businesses, investors, and travelers with complete cultural alignment.
    </p>
  </div>
</div>

      {/* CORE SERVICES GRID */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
            Saudi Arabia Operational Corridor
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70">
            Tailored concierge and business services engineered for smooth execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Link href="/saudi/travel" className="block transition-transform hover:-translate-y-1">
            <ServiceCard
              icon={Compass}
              title="Travel Services"
              desc="Custom trip planning, local recommendations, and friendly local accompaniment."
            />
          </Link>
          <Link href="/saudi/translation" className="block transition-transform hover:-translate-y-1">
            <ServiceCard
              icon={Languages}
              title="Translation Services"
              desc="Language assistance for everyday communication, appointments, and guided interpretation."
            />
          </Link>
          <Link href="/saudi/student-services" className="block transition-transform hover:-translate-y-1">
            <ServiceCard
              icon={GraduationCap}
              title="Student Services"
              desc="Practical support for starting your educational journey, orientation, and local setup in Saudi Arabia."
            />
          </Link>
          <Link href="/saudi/paperwork" className="block transition-transform hover:-translate-y-1">
            <ServiceCard
              icon={FileCheck}
              title="Paperwork & Administrative Assistance"
              desc="Practical help with documents, appointments, visitor paperwork, translation, and everyday administrative tasks in Saudi Arabia."
            />
          </Link>
        </div>
      </div>

      {/* FEATURED CITIES */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C49A2A] font-bold block mb-1">
              Key Hubs
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
              Focus Destinations in the Kingdom
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#2B103A]/70 max-w-md">
            On-ground presence across major economic, historical, and cultural centers in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAUDI_CITIES.map((city) => (
            <div
              key={city.name}
              className="group relative h-[400px] rounded-[24px] overflow-hidden border border-[#2B103A]/10 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 bg-[#2B103A]"
            >
              <Image
                src={city.image}
                alt={city.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                unoptimized
              />

              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-emerald-900/90 text-[#EFE7DA] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  Saudi Arabia
                </span>
                <span className="bg-[#EFE7DA]/20 backdrop-blur-md p-2 rounded-full text-[#EFE7DA]">
                  <MapPin className="w-4 h-4" />
                </span>
              </div>

              <div className="relative z-10 text-[#EFE7DA]">
                <h3 className="font-serif text-2xl font-bold mb-1">{city.name}</h3>
                <p className="text-xs font-semibold text-[#C49A2A] mb-2">{city.tagline}</p>
                <p className="text-xs text-[#EFE7DA]/80 leading-relaxed line-clamp-3 mb-4">
                  {city.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-bold text-[#EFE7DA] hover:text-[#C49A2A] transition-colors"
                >
                  <span>Request Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY SAUDI ARABIA BANNER */}
      <div className="bg-white/40 backdrop-blur-md border border-[#2B103A]/10 rounded-[28px] p-8 md:p-12 shadow-xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C49A2A] font-bold block mb-2">
              Cross-Border Advantage
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B103A] mb-4">
              Unlocking the Vision 2030 Growth Engine
            </h2>
            <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed mb-6">
              With Saudi Arabia rapidly transforming its economic landscape, entering the market requires local insights, reliable contacts, and fast administrative turnaround.
            </p>

            <ul className="space-y-3 text-xs md:text-sm text-[#2B103A]/80">
              <FeatureItem text="Verified local network in Riyadh & Jeddah" />
              <FeatureItem text="Seamless Turkish ↔ Arabic business communication" />
              <FeatureItem text="Dedicated concierge for private delegation visits" />
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-[#2B103A] text-[#EFE7DA] p-8 rounded-[20px] shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-3">Planning a Business Delegation or Trip?</h3>
            <p className="text-xs text-[#EFE7DA]/80 leading-relaxed mb-6">
              Tell us your target requirements, dates, and destinations, and our team will prepare a structured itinerary and business agenda.
            </p>
            <Link
              href="/journey-planner"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-md w-full sm:w-auto"
            >
              <span>Build Saudi Itinerary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-emerald-700 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg">
      <div className="w-10 h-10 bg-emerald-900 text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-serif font-bold text-lg mb-2 text-[#2B103A]">{title}</h3>
      <p className="text-xs text-[#2B103A]/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center space-x-2.5">
      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
      <span>{text}</span>
    </li>
  );
}