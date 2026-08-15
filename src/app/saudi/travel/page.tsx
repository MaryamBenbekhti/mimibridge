"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceGrid, { ServiceItem } from "@/components/ServiceGrid";
import CrossNav from "@/components/CrossNav";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import StickySidebar from "@/components/UI/StickySidebar";
import FAQAccordion, { FAQItem } from "@/components/UI/FAQAccordion";
import TestimonialsSection, { Testimonial } from "@/components/UI/TestimonialsSection";
import ProcessTimeline, { TimelineStep } from "@/components/UI/ProcessTimeline";
import {
  Compass,
  Plane,
  Car,
  Shield,
  Hotel,
  Building,
  Home,
  MapPin,
  Utensils,
  ShoppingBag,
  Trees,
  Landmark,
  Eye,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Palmtree,
} from "lucide-react";

// SECTION 1: AIRPORT SERVICES
const AIRPORT_SERVICES: ServiceItem[] = [
  {
    id: "ap1",
    title: "Airport Chauffeur Reception",
    desc: "Personal driver greeting you inside arrivals with a personalized name sign at King Khalid (RUH), King Abdulaziz (JED), Prince Mohammad (MED), or King Fahd (DMM).",
    icon: Plane,
    tags: ["Flight Tracking", "Meet & Greet"],
    relevantPersonas: ["tourist", "family", "business"],
  },
  {
    id: "ap2",
    title: "Private Chauffeur & Fleet",
    desc: "Dedicated chauffeur with luxury GMC Yukon, Mercedes Sprinter vans, or luxury sedans for full-day city transit, business meetings, or intercity travel.",
    icon: Car,
    tags: ["Chauffeur Fleet", "Hourly / Daily"],
    relevantPersonas: ["business", "family", "tourist"],
  },
  {
    id: "ap3",
    title: "VIP Fast-Track & Terminal Transfer",
    desc: "Executive black-car luxury transfer with fast-track terminal assistance, VIP lounge coordination, Wi-Fi, and personalized luggage handling.",
    icon: Shield,
    tags: ["VIP Fast-Track", "Executive Transit"],
    relevantPersonas: ["business", "family"],
  },
];

// SECTION 2: ACCOMMODATION
const ACCOMMODATION_SERVICES: ServiceItem[] = [
  {
    id: "ac1",
    title: "5-Star & Heritage Hotels",
    desc: "Curated reservations at premier luxury hotels across Riyadh, Jeddah waterfront, Makkah clock tower views, and Madinah central area.",
    icon: Hotel,
    tags: ["5-Star Luxury", "Preferred Rates"],
    relevantPersonas: ["tourist", "family", "business"],
  },
  {
    id: "ac2",
    title: "Executive Serviced Residences",
    desc: "Fully serviced residential suites in prime districts (KAFD Riyadh, Al-Rawdah Jeddah) with kitchens and concierge services for families and delegations.",
    icon: Building,
    tags: ["Serviced Suites", "Corporate Living"],
    relevantPersonas: ["family", "business", "tourist"],
  },
  {
    id: "ac3",
    title: "Luxury Desert Resorts & Coastal Chalets",
    desc: "Exclusive stays in AlUla starlit desert resorts, Red Sea coastal chalets, and private family compounds.",
    icon: Home,
    tags: ["Desert Resorts", "Private Chalets"],
    relevantPersonas: ["family", "tourist"],
  },
];

// SECTION 3: CITY GUIDES
const CITY_GUIDES = [
  {
    name: "Riyadh",
    tagline: "The Modern Financial & Cultural Capital",
    desc: "UNESCO Diriyah At-Turaif, futuristic KAFD financial skyline, Kingdom Tower Skybridge, and vibrant Boulevard World entertainment.",
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg",
    highlights: ["Diriyah At-Turaif", "KAFD Financial Hub", "Boulevard World"],
  },
  {
    name: "Jeddah",
    tagline: "The Red Sea Gateway & Historical Al-Balad",
    desc: "UNESCO-listed coral stone architecture in Historic Al-Balad, scenic Red Sea Corniche, King Fahd's Fountain, and coastal yacht hospitality.",
    image: "https://images.trvl-media.com/place/553248634646177626/e5c39be0-8b5d-49e9-ae16-92f7c86f9d47.jpg",
    highlights: ["Historic Al-Balad", "Red Sea Corniche", "King Fahd Fountain"],
  },
  {
    name: "Makkah",
    tagline: "The Sacred Holy Center",
    desc: "Spiritual pilgrimage, seamless transit to Al-Masjid Al-Haram, Abraj Al-Bait Clock Tower vistas, and dedicated family logistics.",
    image: "https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg",
    highlights: ["Al-Masjid Al-Haram", "Abraj Al-Bait", "Jabal Al-Nour"],
  },
  {
    name: "Madinah",
    tagline: "The Radiant City & Spiritual Haven",
    desc: "Serene visits to Al-Masjid An-Nabawi, historic Quba Mosque, Mount Uhud battlefield, and tranquil organic date farm groves.",
    image: "https://getexperience.com/cdn-cgi/image/width=1024,height=853,fit=cover,quality=55,dpr=1,sharpen=1,format=jpeg/uploads/02b8cd23-4b6e-4b8a-b985-4dc29fec32a9.jpg",
    highlights: ["Al-Masjid An-Nabawi", "Quba Mosque", "Mount Uhud"],
  },
  {
    name: "AlUla",
    tagline: "Living Museum & Nabataean Heritage",
    desc: "UNESCO World Heritage Hegra tombs carved into sandstone monoliths, mirrored Maraya Hall, and starlit luxury desert resorts.",
    image: "https://thisrareearth.com/wp-content/uploads/2024/10/Best-Things-To-Do-in-AlUla-Saudi-Arabia-2-768x1024.jpg",
    highlights: ["Hegra Tombs", "Maraya Concert Hall", "Elephant Rock"],
  },
];

// SECTION 4: THINGS TO DO
const THINGS_TO_DO: ServiceItem[] = [
  {
    id: "td1",
    title: "Saudi Culinary & Fine Dining",
    desc: "Curated reservations at authentic Najdi heritage restaurants, coastal Red Sea seafood venues, and Michelin-caliber fine dining in Riyadh.",
    icon: Utensils,
    tags: ["Najdi Heritage", "Fine Dining"],
    relevantPersonas: ["tourist", "family", "business"],
  },
  {
    id: "td2",
    title: "Luxury Malls & Historic Souks",
    desc: "Guided shopping excursions through premier retail destinations (Centria, Red Sea Mall) and vibrant traditional markets (Souq Al-Zal, Souq Al-Alawi).",
    icon: ShoppingBag,
    tags: ["Luxury Malls", "Traditional Souks"],
    relevantPersonas: ["tourist", "family"],
  },
  {
    id: "td3",
    title: "Edge of the World & Desert Safaris",
    desc: "Exciting 4x4 off-road excursions to Jebel Fihrayn (Edge of the World), red sand dune bashing, and luxury Bedouin camp dining under the stars.",
    icon: Trees,
    tags: ["Edge of the World", "Desert Safari"],
    relevantPersonas: ["family", "tourist"],
  },
  {
    id: "td4",
    title: "Historic Fortresses & UNESCO Sites",
    desc: "Expert-led heritage tours exploring Diriyah, Al Masmak Fortress, Murabba Palace, and King Abdulaziz Historical Center.",
    icon: Landmark,
    tags: ["UNESCO Heritage", "Guided Tours"],
    relevantPersonas: ["family", "tourist"],
  },
  {
    id: "td5",
    title: "Spiritual & Cultural Journeys",
    desc: "Full coordination for Umrah, Nusuk portal permits, Haramain High-Speed Train tickets, and spiritual ziyarah landmark tours in Makkah & Madinah.",
    icon: Eye,
    tags: ["Umrah Support", "Haramain Rail"],
    relevantPersonas: ["tourist", "family"],
  },
  {
    id: "td6",
    title: "Family & Entertainment Venues",
    desc: "Family-friendly itineraries covering Boulevard World, Saudi mega-events, Red Sea boat cruises, and premier entertainment hubs.",
    icon: HeartHandshake,
    tags: ["Boulevard World", "Family Outings"],
    relevantPersonas: ["family"],
  },
];

// SECTION 5: TRAVEL PACKAGES
const TRAVEL_PACKAGES = [
  {
    title: "Custom Saudi Itinerary",
    price: "Starting from $30",
    description: "A tailored Saudi Arabia travel plan based on your schedule, preferences, and cities of interest.",
    features: [
      "Day-by-day customized travel plan",
      "Key attractions & booking links",
      "Fine dining & local cuisine recommendations",
      "Haramain train & airport transit guidance",
      "Traditional souks & shopping directory",
      "Daily estimated travel budget",
      "Local cultural etiquette & useful Arabic phrases",
    ],
    buttonText: "PLAN MY SAUDI TRIP",
    popular: false,
  },
  {
    title: "Half-Day Local Host",
    price: "Starting from $60",
    unit: "half-day",
    description: "Discover Riyadh or Jeddah with an experienced, friendly bilingual local host.",
    features: [
      "4 hours of accompanied local hosting",
      "Private transit coordination & assistance",
      "Curated historical & cultural highlights",
      "Restaurant & traditional coffee recommendations",
      "Assistance communicating and bargaining at souks",
      "Flexible schedule built around your interests",
    ],
    buttonText: "BOOK LOCAL HOST",
    popular: true,
  },
  {
    title: "Full-Day VIP Concierge",
    price: "Starting from $110",
    unit: "full day",
    description: "Comprehensive on-ground concierge escort for executive travelers, families, and visiting delegations.",
    features: [
      "8 hours of dedicated on-ground host accompaniment",
      "Private chauffeur vehicle coordination",
      "VIP restaurant reservations & priority access",
      "Multi-city transit (Riyadh, Jeddah, Makkah, Madinah)",
      "Bilingual translation & corporate support",
      "Personalized itinerary with seamless execution",
    ],
    buttonText: "BOOK FULL-DAY VIP",
    popular: false,
  },
];

// TIMELINE
const TRAVEL_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "Flight Arrival in KSA", description: "Flight tracked live for gate and terminal updates." },
  { stepNumber: 2, title: "VIP Meet & Greet", description: "Personal driver welcomes you at airport arrivals." },
  { stepNumber: 3, title: "Executive Transit", description: "Private luxury chauffeur transit directly to your hotel." },
  { stepNumber: 4, title: "Hotel & Suite Check-In", description: "Assistance with luggage and check-in procedures." },
  { stepNumber: 5, title: "Guided Exploration", description: "Enjoy tailored excursions with your dedicated local host." },
];

// FAQS
const FAQS: FAQItem[] = [
  {
    question: "How do tourist and visitor visas work for Saudi Arabia?",
    answer: "Saudi Arabia offers an instant electronic tourist visa (eVisa) or visa-on-arrival for citizens of over 60 countries, as well as holders of valid US, UK, or Schengen visas. We provide guidance on visa eligibility and local entry requirements.",
  },
  {
    question: "How do we travel between Makkah, Madinah, and Jeddah?",
    answer: "The Haramain High-Speed Railway connects Makkah, Jeddah, King Abdulaziz International Airport (JED), King Abdullah Economic City (KAEC), and Madinah in comfort at 300 km/h. We assist with booking first-class seats and coordinating private station transfers.",
  },
  {
    question: "What should visitors know about local customs and dress code?",
    answer: "Saudi Arabia warmly welcomes international visitors. Modest clothing that covers shoulders and knees is recommended in public spaces. Women are not required to wear abayas or headscarves in general public areas, though respectful modest attire is standard.",
  },
  {
    question: "Can you provide private drivers for visiting business delegations?",
    answer: "Yes. We operate private executive chauffeur fleets (including GMC Yukon, Mercedes Vito/Sprinter, and luxury sedans) available for hourly, daily, or multi-day corporate bookings across Riyadh, Jeddah, and the Eastern Province.",
  },
];

// TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Faisal Al-Sabah",
    role: "Family Traveler",
    cityOrUni: "Jeddah & Al-Balad",
    quote: "Mimi Bridge organized our family's holiday across Jeddah and Madinah flawlessly. The private driver, hotel bookings, and historical tour guides were five-star.",
    rating: 5,
  },
  {
    name: "Eleanor Vance",
    role: "Corporate Delegate",
    cityOrUni: "Riyadh (KAFD)",
    quote: "Our business delegation in Riyadh relied on Mimi Bridge for luxury airport transit and daily chauffeur services between KAFD and our hotel. Outstanding punctuality!",
    rating: 5,
  },
  {
    name: "Dr. Tariq Qureshi",
    role: "Umrah & Cultural Visitor",
    cityOrUni: "Makkah & Madinah",
    quote: "The seamless train bookings, private station pickups, and welcoming local hosts made our spiritual journey effortless and peaceful.",
    rating: 5,
  },
];

export default function SaudiTravelPage() {
  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("travel-packages");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMBS */}
      <Breadcrumbs items={[{ label: "Saudi Arabia", href: "/saudi" }, { label: "Travel Services" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Premium Concierge — Saudi Arabia</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Travel & Hospitality in <span className="text-emerald-400">Saudi Arabia</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Bespoke trip planning, executive airport chauffeur transfers, luxury accommodations, and attentive on-ground local hosts across the Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Book Chauffeur / Custom Trip</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#travel-packages"
              onClick={scrollToPackages}
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Explore Packages</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT AREA WITH STICKY SIDEBAR ON DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-16">
          {/* AIRPORT SERVICES */}
          <ServiceGrid
            title="Airport & Executive Transit"
            subtitle="Meet & greet receptions, private chauffeur fleets, and seamless VIP terminal transit"
            items={AIRPORT_SERVICES}
          />

          {/* ACCOMMODATION SERVICES */}
          <ServiceGrid
            title="Luxury Accommodations"
            subtitle="Curated 5-star hotel reservations, executive residences, and family compound suites"
            items={ACCOMMODATION_SERVICES}
          />

          {/* SAUDI CITY GUIDES */}
          <div>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                Destination Highlights
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
                Iconic Cities of the Kingdom
              </h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Explore our featured destination hubs across Saudi Arabia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITY_GUIDES.map((city) => (
                <div
                  key={city.name}
                  className="group relative h-[340px] rounded-[24px] overflow-hidden border border-[#2B103A]/10 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 bg-emerald-950"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <h3 className="font-serif text-2xl font-bold mb-0.5">{city.name}</h3>
                    <p className="text-[11px] font-semibold text-[#C49A2A] mb-1.5">{city.tagline}</p>
                    <p className="text-xs text-[#EFE7DA]/80 leading-relaxed line-clamp-2 mb-3">
                      {city.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {city.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="text-[9px] bg-white/10 text-[#EFE7DA] px-2 py-0.5 rounded-full backdrop-blur-sm"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THINGS TO DO */}
          <ServiceGrid
            title="Experiences & Local Activities"
            subtitle="Historic UNESCO tours, culinary tastings, desert safaris, and spiritual journey coordination"
            items={THINGS_TO_DO}
          />

          {/* TIMELINE */}
          <ProcessTimeline
            title="Your Saudi Arrival Journey"
            subtitle="From touchdown at King Khalid or King Abdulaziz Airport to total comfort and memorable experiences"
            steps={TRAVEL_TIMELINE}
          />
        </div>

        {/* STICKY SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Saudi Travel Concierge"
            badge="Dedicated Local Team"
            ctaText="Request Custom Itinerary"
            features={[
              "Executive luxury fleet with verified private drivers",
              "Direct Haramain High-Speed Train & Nusuk coordination",
              "VIP fast-track airport meet & greet assistance",
              "24/7 dedicated on-call traveler support in KSA",
            ]}
          />
        </div>
      </div>

      {/* TRAVEL PACKAGES */}
      <div id="travel-packages" className="mt-20 py-16 border-t border-[#2B103A]/10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
            Travel Plans
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
            Saudi Travel Concierge Packages
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
            Personalized travel planning and friendly local accompaniment tailored to your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAVEL_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${pkg.popular
                  ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl scale-[1.03] ring-2 ring-[#C49A2A]"
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-emerald-600"
                }`}
            >
              <div>
                {pkg.popular && (
                  <span className="bg-[#C49A2A] text-[#2B103A] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif font-bold text-xl mb-1">{pkg.title}</h3>
                <div className="flex items-baseline space-x-1.5 mb-2">
                  <span className={`font-serif text-2xl font-bold ${pkg.popular ? "text-[#C49A2A]" : "text-[#2B103A]"}`}>
                    {pkg.price}
                  </span>
                  {pkg.unit && (
                    <span className={`text-xs ${pkg.popular ? "text-[#EFE7DA]/70" : "text-[#2B103A]/60"}`}>
                      / {pkg.unit}
                    </span>
                  )}
                </div>
                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? "text-[#EFE7DA]/75" : "text-[#2B103A]/70"}`}>
                  {pkg.description}
                </p>

                <ul className="space-y-2.5 text-xs mb-6 border-t pt-4 border-current/10">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C49A2A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/journey-planner"
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md block ${pkg.popular
                    ? "bg-[#C49A2A] text-[#2B103A] hover:bg-[#d6aa35]"
                    : "bg-[#2B103A] text-[#EFE7DA] hover:bg-[#2B103A]/90"
                  }`}
              >
                {pkg.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* FAQ */}
      <FAQAccordion items={FAQS} />

      {/* CROSS-NAV */}
      <CrossNav currentPath="/saudi/travel" country="saudi" />
    </main>
  );
}
