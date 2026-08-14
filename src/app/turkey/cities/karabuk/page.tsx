"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  GraduationCap, 
  Building2, 
  Compass, 
  Languages, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  LucideIcon 
} from "lucide-react";

interface CityCard {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

const TURKEY_CITIES: CityCard[] = [
  {
    name: "Istanbul",
    tagline: "The Famous Global & Cultural Heart",
    description: "Top-tier private and public universities, international business centers, and historic residence corridors.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Ankara",
    tagline: "The Capital & Administrative Core",
    description: "Government agencies, major research institutions, diplomatic missions, and embassy services.",
    image: "https://bukaviyyehotel.com.tr/tema/genel/uploads/haberler/ankara-gezilecek-yerler.jpg",
  },
  {
    name: "Trabzon",
    tagline: "Black Sea Jewel & Coastal Charm",
    description: "Serene academic living, Black Sea coastal tourism, real estate investments, and nature retreats.",
    image: "https://www.advantour.com/img/turkey/images/trabzon.jpg",
  },
  {
    name: "Karabük / Safranbolu",
    tagline: "UNESCO Heritage & University Hub",
    description: "Karabük University student community, historic Ottoman architecture, and affordable student housing.",
    image: "https://bellimatur.com/upload/safranbolu%20kristal%20teras.jpg",
  },
];

export default function TurkeyPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* HERO SECTION */}
      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
  <Image
    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&auto=format&fit=crop&q=80"
    alt="Turkey Skyline"
    fill
    priority
    className="object-cover"
    unoptimized
  />
  
  {/* Dark Overlay for Text Legibility */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />

  {/* Foreground Content */}
  <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
    <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-[#EFE7DA]/20">
      <Building2 className="w-3.5 h-3.5 text-[#C49A2A]" />
      <span>Destination Turkey</span>
    </span>
    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
      Studying, Relocating & Living in <span className="text-[#C49A2A]">Turkey</span>
    </h1>
    <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
      Your end-to-end operational guide in Turkey. From university admissions and student housing to sworn translation and residency permits.
    </p>
  </div>
</div>

      {/* CORE SERVICES GRID */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
            Turkey Operational Services
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70">
            Dedicated academic and concierge services engineered for international students and travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={GraduationCap}
            title="Student Placement"
            desc="University enrollment guidance, equivalency (Denklik) assistance, and dormitory/apartment placement."
          />
          <ServiceCard
            icon={Languages}
            title="Certified Translation"
            desc="Sworn Turkish ↔ Arabic / English translations for legal documents, transcripts, and official contracts."
          />
          <ServiceCard
            icon={Compass}
            title="Housing & Relocation"
            desc="Short & long-term apartment leases, utility setup, airport transfers, and local neighborhood orientation."
          />
          <ServiceCard
            icon={ShieldCheck}
            title="Residency & Legal Guidance"
            desc="Step-by-step support for student/tourist Ikamet (residency permits) and health insurance setup."
          />
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
              Focus Destinations in Turkey
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#2B103A]/70 max-w-md">
            On-ground presence and student support services across major Turkish metropolitan and educational centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TURKEY_CITIES.map((city) => (
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
                <span className="bg-[#2B103A]/90 text-[#EFE7DA] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  Turkey 🇹🇷
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

      {/* ACADEMIC & CONCIERGE ADVANTAGE BANNER */}
      <div className="bg-white/40 backdrop-blur-md border border-[#2B103A]/10 rounded-[28px] p-8 md:p-12 shadow-xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C49A2A] font-bold block mb-2">
              Why Mimi Bridge in Turkey
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B103A] mb-4">
              Direct Support with Zero Bureaucratic Hassle
            </h2>
            <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed mb-6">
              Navigating university registrations, lease agreements, and official paperwork in Turkey can be daunting without native guidance. We provide boots-on-the-ground support at every step.
            </p>

            <ul className="space-y-3 text-xs md:text-sm text-[#2B103A]/80">
              <FeatureItem text="Direct liaison with university registration offices" />
              <FeatureItem text="Verified lease agreements with trusted property owners" />
              <FeatureItem text="Multilingual on-site translators for legal proceedings" />
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#2B103A] to-[#3D1852] text-[#EFE7DA] p-8 rounded-[20px] shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-3">Planning Your Move or Semester?</h3>
            <p className="text-xs text-[#EFE7DA]/80 leading-relaxed mb-6">
              Share your desired city, field of study, or relocation goals, and our local advisors will prepare an action plan for your arrival.
            </p>
            <Link
              href="/journey-planner"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-md w-full sm:w-auto"
            >
              <span>Build Turkey Itinerary</span>
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
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg">
      <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
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
      <CheckCircle2 className="w-4 h-4 text-[#C49A2A] shrink-0" />
      <span>{text}</span>
    </li>
  );
}