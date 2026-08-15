"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Compass,
  Users,
  Languages,
  FileCheck,
  ArrowRight,
  MapPin,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface CityCard {
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

const SAUDI_CITIES: CityCard[] = [
  {
    name: "Riyadh",
    tagline: "The capital — fast-growing and modern",
    description:
      "Saudi Arabia's capital is expanding rapidly. A great base for students and travelers, with world-class facilities and a welcoming international community.",
    image:
      "https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg",
    href: "/saudi/cities/riyadh",
  },
  {
    name: "Jeddah",
    tagline: "Red Sea coast, history and culture",
    description:
      "A city with old-town charm and a modern coastline. Jeddah is welcoming, culturally rich, and a great place to explore Saudi life.",
    image:
      "https://images.trvl-media.com/place/553248634646177626/e5c39be0-8b5d-49e9-ae16-92f7c86f9d47.jpg",
    href: "/saudi/cities/jeddah",
  },
  {
    name: "Medina",
    tagline: "Spiritual city, calm and peaceful",
    description:
      "One of the most significant cities in Saudi Arabia. A peaceful destination with deep cultural significance and a strong sense of community.",
    image:
      "https://getexperience.com/cdn-cgi/image/width=1024,height=853,fit=cover,quality=55,dpr=1,sharpen=1,format=jpeg/uploads/02b8cd23-4b6e-4b8a-b985-4dc29fec32a9.jpg",
    href: "/saudi/cities/medinah",
  },
  {
    name: "Makkah",
    tagline: "Sacred destination for Muslim visitors",
    description:
      "The holiest city in Islam. Mimi Bridge can help with logistics, transport, accommodation guidance, and local orientation for visiting families.",
    image:
      "https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg",
    href: "/saudi/cities/mekkah",
  },
];

const SAUDI_SERVICES = [
  {
    emoji: "🎓",
    icon: GraduationCap,
    title: "Student",
    desc: "Arriving in Saudi Arabia to study? We help with housing, Iqama guidance, university orientation, SIM setup, and getting your first weeks sorted.",
    href: "/saudi/student-services",
  },
  {
    emoji: "✈️",
    icon: Compass,
    title: "Travel",
    desc: "Planning a trip to Saudi Arabia? We help with local transport, city recommendations, day trips, and getting around — without the guesswork.",
    href: "/saudi/travel",
  },
  {
    emoji: "🌍",
    icon: Languages,
    title: "Translation",
    desc: "Need Arabic translation, help at a government office, or someone to accompany you to an appointment? We are here to bridge the language gap.",
    href: "/saudi/translation",
  },
  {
    emoji: "📄",
    icon: FileCheck,
    title: "Paperwork",
    desc: "Saudi administrative processes can be complex. We help you understand what's needed, organize your documents, and navigate the steps — calmly.",
    href: "/saudi/paperwork",
  },
  {
    emoji: "👨‍👩‍👧",
    icon: Users,
    title: "Parent Support",
    desc: "Your child is far away. You don't have to feel far away. Scheduled check-ins, housing video walkthroughs, and arrival updates.",
    href: "/saudi/student-services#parent",
  },
];

export default function SaudiPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* HERO */}
      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1600&auto=format&fit=crop&q=80"
          alt="Saudi Arabia skyline"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
            <span>🇸🇦</span>
            <span>Saudi Arabia</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your local guide to{" "}
            <span className="text-emerald-400">Saudi Arabia</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            Whether you are arriving as a student, traveling with family, or handling paperwork —
            Mimi Bridge is your local support in the Kingdom.
          </p>
        </div>
      </div>

      {/* 5 SERVICE CATEGORIES */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C49A2A] font-bold block mb-2">
            How we can help
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
            What brings you to Saudi Arabia?
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 max-w-lg mx-auto">
            Choose what fits your situation and we will show you exactly what support is available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SAUDI_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="block transition-transform hover:-translate-y-1 group"
              >
                <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-emerald-700 transition-all duration-300 shadow-sm hover:shadow-lg h-full flex flex-col">
                  <div className="text-3xl mb-3">{service.emoji}</div>
                  <div className="w-9 h-9 bg-emerald-900 text-[#C49A2A] rounded-[10px] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-[#2B103A]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#2B103A]/70 leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-emerald-700 group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* FEATURED CITIES */}
      <div className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C49A2A] font-bold block mb-1">
              City Guides
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
              Cities we know well
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#2B103A]/70 max-w-md">
            Local knowledge and on-ground support in each of these cities. Click to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAUDI_CITIES.map((city) => (
            <Link
              key={city.name}
              href={city.href}
              className="group relative h-[380px] rounded-[24px] overflow-hidden border border-[#2B103A]/10 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 bg-[#2B103A]"
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
                  Saudi Arabia 🇸🇦
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
                <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-bold text-[#EFE7DA] group-hover:text-[#C49A2A] transition-colors">
                  <span>Explore city</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* WHY MIMI BRIDGE BANNER */}
      <div className="bg-white/40 backdrop-blur-md border border-[#2B103A]/10 rounded-[28px] p-8 md:p-12 shadow-xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C49A2A] font-bold block mb-2">
              Why Mimi Bridge
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2B103A] mb-4">
              A familiar face in an unfamiliar place
            </h2>
            <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed mb-6">
              Saudi Arabia is changing quickly and there is a lot to navigate — paperwork,
              language, local culture. We are here to make that easier with practical, honest
              support at every step.
            </p>

            <ul className="space-y-3 text-xs md:text-sm text-[#2B103A]/80">
              <FeatureItem text="Practical local guidance — not generic advice" />
              <FeatureItem text="Arabic and multilingual support when you need it" />
              <FeatureItem text="Parent updates to keep families connected" />
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-[#2B103A] text-[#EFE7DA] p-8 rounded-[20px] shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-3">
              Not sure where to start?
            </h3>
            <p className="text-xs text-[#EFE7DA]/80 leading-relaxed mb-6">
              Tell us a bit about your situation — where you are going and what you need — and we
              will put together a simple plan for you.
            </p>
            <Link
              href="/journey-planner"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-md w-full sm:w-auto"
            >
              <span>Plan my journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
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