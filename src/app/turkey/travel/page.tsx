"use client";

import React, { useState } from "react";
import Link from "next/link";
import PersonaSelector, { PersonaType } from "@/components/PersonaSelector";
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
  Calendar,
  UserCheck,
  Send,
} from "lucide-react";

// SECTION 1: AIRPORT SERVICES
const AIRPORT_SERVICES: ServiceItem[] = [
  {
    id: "ap1",
    title: "Airport Pickup",
    desc: "Personal driver greeting you inside terminal arrivals with a personalized name sign at IST, SAW, ESB, TZX, or NAV airports.",
    icon: Plane,
    tags: ["Flight Tracking", "Meet & Greet"],
    relevantPersonas: ["tourist", "family", "parent", "new_student"],
  },
  {
    id: "ap2",
    title: "Private Driver",
    desc: "Dedicated chauffeur with Mercedes Vito / Sprinter luxury vans for full-day city transit, shopping trips, or intercity travel.",
    icon: Car,
    tags: ["Chauffeur Service", "Hourly / Daily"],
    relevantPersonas: ["business", "family", "tourist"],
  },
  {
    id: "ap3",
    title: "VIP Transfer",
    desc: "Black-car luxury limousine transfer with fast-track terminal assistance, champagne, Wi-Fi, and luggage handling.",
    icon: Shield,
    tags: ["VIP Limousine", "Fast-Track"],
    relevantPersonas: ["business", "family"],
  },
];

// SECTION 2: ACCOMMODATION
const ACCOMMODATION_SERVICES: ServiceItem[] = [
  {
    id: "ac1",
    title: "Hotels",
    desc: "Curated reservations at 5-star Bosphorus luxury hotels, boutique heritage mansions, or family-friendly resorts.",
    icon: Hotel,
    tags: ["Boutique & 5-Star", "VIP Rates"],
    relevantPersonas: ["tourist", "family", "business"],
  },
  {
    id: "ac2",
    title: "Luxury Apartments",
    desc: "Fully serviced luxury residences with kitchens, sea views, and concierge services for extended family or business stays.",
    icon: Building,
    tags: ["Serviced Suites", "Sea View"],
    relevantPersonas: ["family", "business", "parent"],
  },
  {
    id: "ac3",
    title: "Student Accommodation",
    desc: "Short-term furnished suites or verified student residences for incoming students and visiting parents.",
    icon: Home,
    tags: ["Near Campus", "Short/Long Term"],
    relevantPersonas: ["new_student", "current_student", "parent"],
  },
];

// SECTION 3: CITY GUIDES
const CITY_GUIDES = [
  {
    name: "Istanbul",
    tagline: "The Famous Global & Cultural Heart",
    desc: "Historic Sultanahmet, luxury Bosphorus cruises, high-end shopping districts in Nisantasi, and vibrant university hubs.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80",
    highlights: ["Hagia Sophia", "Bosphorus Cruise", "Grand Bazaar"],
  },
  {
    name: "Ankara",
    tagline: "The Capital & Administrative Core",
    desc: "Government diplomatic quarter, Anıtkabir museum, top research universities, and diplomatic hospitality.",
    image: "https://bukaviyyehotel.com.tr/tema/genel/uploads/haberler/ankara-gezilecek-yerler.jpg",
    highlights: ["Anıtkabir", "Atakule", "Bilkent Hub"],
  },
  {
    name: "Karabük",
    tagline: "Academic University City",
    desc: "Fast-growing student city surrounding Karabük University with affordable living and lush pine forest mountains.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
    highlights: ["KBÜ Campus", "Canyon Walks", "Student Cafes"],
  },
  {
    name: "Safranbolu",
    tagline: "UNESCO World Heritage Jewel",
    desc: "Preserved Ottoman wooden mansions, crystal glass terraces, cobblestone bazaars, and traditional Turkish baths.",
    image: "https://bellimatur.com/upload/safranbolu%20kristal%20teras.jpg",
    highlights: ["Ottoman Mansions", "Kristal Teras", "Saffron Market"],
  },
  {
    name: "Trabzon",
    tagline: "Black Sea Coast & Lush Mountains",
    desc: "Sumela Monastery, Uzungöl mountain lake, coastal breezes, fresh seafood, and nature retreats.",
    image: "https://www.advantour.com/img/turkey/images/trabzon.jpg",
    highlights: ["Uzungöl", "Sumela Monastery", "Black Sea Coast"],
  },
  {
    name: "Cappadocia",
    tagline: "Fairytale Caves & Hot Air Balloons",
    desc: "Sunrise hot air balloon rides, ancient underground cities, cave hotels, and majestic volcanic valleys.",
    image: "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=800&auto=format&fit=crop&q=80",
    highlights: ["Hot Air Balloons", "Göreme Caves", "Red Valley"],
  },
];

// SECTION 4: THINGS TO DO
const THINGS_TO_DO: ServiceItem[] = [
  {
    id: "td1",
    title: "Restaurants & Dining",
    desc: "Reservations at fine-dining Ottoman cuisine venues, rooftop Bosphorus seafood dining, and authentic local kebabs.",
    icon: Utensils,
    tags: ["Ottoman Dining", "Rooftop Bosphorus"],
    relevantPersonas: ["tourist", "family", "business"],
  },
  {
    id: "td2",
    title: "Shopping Escort",
    desc: "Guided tours through high-end malls (Zorlu Center, İstinye Park) and historic markets (Grand Bazaar, Spice Market).",
    icon: ShoppingBag,
    tags: ["Luxury Malls", "Grand Bazaar"],
    relevantPersonas: ["tourist", "family"],
  },
  {
    id: "td3",
    title: "Nature & Retreats",
    desc: "Excursions to Sapanca Lake, Belgrad Forest, Bursa cable cars, and Black Sea mountain highlands.",
    icon: Trees,
    tags: ["Sapanca Lake", "Bursa Teleferik"],
    relevantPersonas: ["family", "tourist"],
  },
  {
    id: "td4",
    title: "Mosques & Heritage",
    desc: "Respectful guided visits to Sultanahmet, Süleymaniye, Çamlıca Mosque, and historic Islamic landmarks.",
    icon: Landmark,
    tags: ["Islamic Heritage", "Guided Tours"],
    relevantPersonas: ["family", "tourist", "parent"],
  },
  {
    id: "td5",
    title: "Museums & Arts",
    desc: "Priority fast-track tickets and expert art history guides for Topkapı Palace, Dolmabahçe, and Istanbul Modern.",
    icon: Eye,
    tags: ["Topkapı Palace", "Fast-Track Pass"],
    relevantPersonas: ["tourist", "family"],
  },
  {
    id: "td6",
    title: "Family Activities",
    desc: "Kid-friendly itineraries including Vialand Theme Park, Istanbul Aquarium, Bosphorus yacht trips, and princes' islands.",
    icon: HeartHandshake,
    tags: ["Theme Parks", "Yacht Cruises"],
    relevantPersonas: ["family"],
  },
];

// SECTION 5: TRAVEL PACKAGES
const TRAVEL_PACKAGES = [
  {
    title: "Custom Trip Plan",
    price: "Starting from $25",
    description: "A personalized Turkey itinerary based on your time, budget, and interests.",
    features: [
      "Personalized daily itinerary",
      "Places to visit",
      "Restaurant suggestions",
      "Transportation suggestions",
      "Shopping recommendations",
      "Estimated daily budget",
      "Useful Turkish phrases",
    ],
    buttonText: "PLAN MY TRIP",
    popular: false,
  },
  {
    title: "Local Companion",
    price: "Starting from $50",
    unit: "half-day",
    description: "Explore the city with someone who knows the local area.",
    features: [
      "Half-day local accompaniment",
      "Help navigating transportation",
      "Local recommendations",
      "Restaurant and shopping suggestions",
      "Help communicating with locals",
      "Flexible itinerary",
    ],
    buttonText: "BOOK COMPANION",
    popular: true,
  },
  {
    title: "Full-Day Local Support",
    price: "Starting from $90",
    unit: "full day",
    description: "Personal local assistance for visitors who want a smoother day in Turkey.",
    features: [
      "Full-day accompaniment",
      "Transportation guidance",
      "Local recommendations",
      "Shopping assistance",
      "Restaurant recommendations",
      "Help communicating with locals",
      "Personalized daily plan",
    ],
    buttonText: "BOOK FULL DAY",
    popular: false,
  },
];

// TIMELINE
const TRAVEL_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "Flight Arrival", description: "Flight tracked live for gate updates." },
  { stepNumber: 2, title: "VIP Meet & Greet", description: "Personal driver awaits at terminal arrivals." },
  { stepNumber: 3, title: "Luxury Transit", description: "Private Mercedes Vito transit to accommodation." },
  { stepNumber: 4, title: "Hotel Check-In", description: "Assistance with hotel registration & luggage." },
  { stepNumber: 5, title: "Guided Exploration", description: "Enjoy custom city tours with local host." },
];

// FAQS
const FAQS: FAQItem[] = [
  {
    question: "What happens if my flight to Turkey is delayed?",
    answer: "Our dispatch team monitors your flight number live in real time. Your private driver will adjust their arrival time accordingly with zero extra waiting fees.",
  },
  {
    question: "Are your private drivers and guides bilingual?",
    answer: "Yes! All our chauffeurs and local guides speak fluent English, Arabic, and Turkish, ensuring clear communication throughout your journey.",
  },
  {
    question: "Can you customize travel itineraries for large families or corporate groups?",
    answer: "Absolutely. We manage luxury Sprinter vans and coach buses for large family reunions, university delegations, and corporate retreats across Turkey.",
  },
  {
    question: "Do you offer travel assistance in cities outside Istanbul?",
    answer: "Yes, we provide full local ground support in Istanbul, Ankara, Trabzon, Karabük/Safranbolu, and Cappadocia.",
  },
];

// TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Faisal Al-Thani",
    role: "Family Traveler",
    cityOrUni: "Istanbul & Cappadocia",
    quote: "Mimi Bridge made our family vacation in Turkey completely stress-free. The private Mercedes Vito was pristine, and our guide in Safranbolu was fantastic.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Business Executive",
    cityOrUni: "Ankara Diplomatic Hub",
    quote: "Punctual, professional driver for all 4 days of my business meetings in Ankara. Having a bilingual chauffeur made all the difference.",
    rating: 5,
  },
  {
    name: "Bader Al-Hajri",
    role: "Parent & Tourist",
    cityOrUni: "Trabzon & Uzungöl",
    quote: "We visited Trabzon to inspect university options for my son while enjoying the Black Sea nature. Exceptional airport pickup and tour organization.",
    rating: 5,
  },
];

export default function TravelPage() {
  const [activePersona, setActivePersona] = useState<PersonaType | null>(null);
  const [guideCity, setGuideCity] = useState("Istanbul");
  const [guideDate, setGuideDate] = useState("");
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGuideSubmitted(true);
  };

  const scrollToGuide = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("book-guide");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMB */}
      <Breadcrumbs items={[{ label: "Turkey", href: "/turkey" }, { label: "Travel & Hospitality" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <Compass className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Luxury Concierge & Local Hospitality</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Travel Turkey Like a <span className="text-[#C49A2A]">Local</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Premium local assistance designed for families, tourists and business travelers seeking unforgettable experiences in Turkey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#book-guide"
              onClick={scrollToGuide}
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg cursor-pointer"
            >
              <span>Book Local Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#travel-packages"
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Explore Packages</span>
            </a>
          </div>
        </div>
      </div>

      {/* SMART PERSONA SELECTOR */}
      <PersonaSelector onPersonaChange={(p) => setActivePersona(p)} />

      {/* MAIN LAYOUT WITH STICKY SIDEBAR ON DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-16">
          {/* SECTION 1: AIRPORT SERVICES */}
          <ServiceGrid
            title="Airport Services"
            subtitle="VIP airport reception, private driver transfers, and luxury fleet transit"
            items={AIRPORT_SERVICES}
            activePersona={activePersona}
          />

          {/* SECTION 2: ACCOMMODATION */}
          <ServiceGrid
            title="Accommodation"
            subtitle="Handpicked 5-star hotels, luxury serviced apartments, and student suites"
            items={ACCOMMODATION_SERVICES}
            activePersona={activePersona}
          />

          {/* SECTION 3: CITY GUIDES */}
          <section className="mb-16">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                Destinations
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Focus City Guides</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Explore key cultural, academic, and scenic hubs across Turkey with local experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITY_GUIDES.map((city) => (
                <div
                  key={city.name}
                  className="group relative h-[360px] rounded-[24px] overflow-hidden border border-[#2B103A]/10 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 bg-[#2B103A]"
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-[#2B103A]/90 text-[#EFE7DA] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full backdrop-blur-md border border-[#EFE7DA]/20">
                      Turkey 🇹🇷
                    </span>
                    <span className="bg-[#EFE7DA]/20 backdrop-blur-md p-2 rounded-full text-[#EFE7DA]">
                      <MapPin className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="relative z-10 text-[#EFE7DA]">
                    <h3 className="font-serif text-2xl font-bold mb-1">{city.name}</h3>
                    <p className="text-xs font-semibold text-[#C49A2A] mb-2">{city.tagline}</p>
                    <p className="text-xs text-[#EFE7DA]/80 leading-relaxed line-clamp-2 mb-3">
                      {city.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {city.highlights.map((h) => (
                        <span key={h} className="bg-[#EFE7DA]/15 text-[#EFE7DA] text-[9px] px-2 py-0.5 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: THINGS TO DO */}
          <ServiceGrid
            title="Things To Do"
            subtitle="Curated dining, luxury shopping, historic mosques, museums, and family activities"
            items={THINGS_TO_DO}
            activePersona={activePersona}
          />

          {/* BOOK LOCAL GUIDE INTERACTIVE SECTION */}
          <section id="book-guide" className="bg-white/50 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-[#2B103A]/10 shadow-xl">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                <UserCheck className="w-4 h-4" />
                <span>On-Ground Companion</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Book Local Guide</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Reserve your personal bilingual guide and private driver for custom city tours.
              </p>
            </div>

            {guideSubmitted ? (
              <div className="bg-[#2B103A] text-[#EFE7DA] p-8 rounded-[24px] text-center border border-[#C49A2A]/40 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-[#C49A2A] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-2xl mb-2">Guide Reservation Received!</h3>
                <p className="text-xs md:text-sm text-[#EFE7DA]/80 max-w-md mx-auto leading-relaxed mb-6">
                  Your local guide inquiry for <span className="text-[#C49A2A] font-bold">{guideCity}</span> on {guideDate || "selected date"} has been received. Our travel director will reach out immediately.
                </p>
                <button
                  onClick={() => setGuideSubmitted(false)}
                  className="bg-[#C49A2A] text-[#2B103A] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleGuideSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/70 block mb-2">
                      Destination City
                    </label>
                    <select
                      value={guideCity}
                      onChange={(e) => setGuideCity(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-3 text-sm text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    >
                      <option value="Istanbul">Istanbul</option>
                      <option value="Ankara">Ankara</option>
                      <option value="Karabük">Karabük</option>
                      <option value="Safranbolu">Safranbolu</option>
                      <option value="Trabzon">Trabzon</option>
                      <option value="Cappadocia">Cappadocia</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/70 block mb-2 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C49A2A]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={guideDate}
                      onChange={(e) => setGuideDate(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-3 text-sm text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2B103A] text-[#EFE7DA] py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#2B103A]/90 transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Local Guide</span>
                  <Send className="w-4 h-4 text-[#C49A2A]" />
                </button>
              </form>
            )}
          </section>

          {/* TIMELINE */}
          <ProcessTimeline
            title="Travel & Transit Process"
            subtitle="From touchdown at airport arrivals to seamless luxury sightseeing"
            steps={TRAVEL_TIMELINE}
          />
        </div>

        {/* STICKY SIDEBAR ON DESKTOP */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="VIP Travel Concierge"
            badge="Local Hospitality Team"
            ctaText="Reserve Private Chauffeur"
            features={[
              "Mercedes Vito VIP Fleet with Wi-Fi & Refreshments",
              "Bilingual English/Arabic/Turkish Drivers & Hosts",
              "Real-time flight tracking & zero delay charges",
              "Exclusive access to dining & yacht charter",
            ]}
          />
        </div>
      </div>

      {/* SECTION 5: TRAVEL PACKAGES */}
      <section id="travel-packages" className="py-16 border-t border-[#2B103A]/10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
            Local Support
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
            Travel Services
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
            Personalized travel planning and local support in Turkey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAVEL_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl scale-[1.03] ring-2 ring-[#C49A2A]"
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="bg-[#C49A2A] text-[#2B103A] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif font-bold text-xl mb-1">{pkg.title}</h3>
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className={`font-serif text-2xl font-bold ${pkg.popular ? "text-[#C49A2A]" : "text-[#2B103A]"}`}>
                    {pkg.price}
                  </span>
                  {pkg.unit && (
                    <span className={`text-[11px] ${pkg.popular ? "text-[#EFE7DA]/70" : "text-[#2B103A]/60"}`}>
                      /{pkg.unit}
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
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md block ${
                  pkg.popular
                    ? "bg-[#C49A2A] text-[#2B103A] hover:bg-[#d6aa35]"
                    : "bg-[#2B103A] text-[#EFE7DA] hover:bg-[#2B103A]/90"
                }`}
              >
                {pkg.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* FAQ */}
      <FAQAccordion items={FAQS} />

      {/* LARGE CTA */}
      <div className="mt-16 bg-gradient-to-r from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] p-10 md:p-14 rounded-[32px] text-center shadow-2xl relative overflow-hidden border border-[#C49A2A]/30">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Not sure which service you need?
        </h2>
        <p className="text-xs md:text-base text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Tell Mimi about your journey and we&apos;ll help you choose.
        </p>
        <Link
          href="/journey-planner"
          className="inline-flex items-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-xl hover:scale-105"
        >
          <span>TELL US WHAT YOU NEED</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* CROSS-NAVIGATION */}
      <CrossNav currentPath="/turkey/travel" />
    </main>
  );
}