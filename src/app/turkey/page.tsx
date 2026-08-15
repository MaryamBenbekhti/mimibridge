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

const TURKEY_CITIES: CityCard[] = [
  {
    name: "Istanbul",
    tagline: "Historic city, world-class universities",
    description:
      "A city where old and new meet. Home to major universities, vibrant student life, and everything you need to get settled quickly.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop&q=80",
    href: "/turkey/cities/istanbul",
  },
  {
    name: "Ankara",
    tagline: "The capital — practical and well-connected",
    description:
      "Turkey's capital city, with key government offices, universities, and a straightforward city layout that makes settling in easier.",
    image:
      "https://bukaviyyehotel.com.tr/tema/genel/uploads/haberler/ankara-gezilecek-yerler.jpg",
    href: "/turkey/cities/istanbul",
  },
  {
    name: "Trabzon",
    tagline: "Black Sea coast, calm student life",
    description:
      "A relaxed city on the Black Sea with a welcoming student community, affordable living, and beautiful natural surroundings.",
    image: "https://www.advantour.com/img/turkey/images/trabzon.jpg",
    href: "/turkey/cities/istanbul",
  },
  {
    name: "Karabük / Safranbolu",
    tagline: "Student hub with UNESCO heritage",
    description:
      "Home to Karabük University and the UNESCO-listed town of Safranbolu. Affordable, friendly, and popular with international students.",
    image: "https://bellimatur.com/upload/safranbolu%20kristal%20teras.jpg",
    href: "/turkey/cities/karabuk",
  },
];

const TURKEY_SERVICES = [
  {
    emoji: "🎓",
    icon: GraduationCap,
    title: "Student",
    desc: "Whether you just arrived or you've been here a while — we help with housing, SIM cards, university paperwork, and everyday student life.",
    href: "/turkey/student-services",
    color: "bg-[#2B103A]",
  },
  {
    emoji: "✈️",
    icon: Compass,
    title: "Travel",
    desc: "Explore Turkey with local guidance. City trips, day excursions, transport help, and local recommendations from people who actually live here.",
    href: "/turkey/travel",
    color: "bg-[#2B103A]",
  },
  {
    emoji: "🌍",
    icon: Languages,
    title: "Translation",
    desc: "Need help with a phone call, a document, or a government appointment? We speak the language and we'll be there with you.",
    href: "/turkey/translation",
    color: "bg-[#2B103A]",
  },
  {
    emoji: "📄",
    icon: FileCheck,
    title: "Paperwork",
    desc: "Navigating Turkish admin can be confusing. We help you prepare documents, understand the process, and know what to expect.",
    href: "/turkey/paperwork",
    color: "bg-[#2B103A]",
  },
  {
    emoji: "👨‍👩‍👧",
    icon: Users,
    title: "Parent Support",
    desc: "Your child is far away. You don't have to feel far away. Scheduled check-ins, housing video walkthroughs, and arrival updates.",
    href: "/turkey/parent",
    color: "bg-[#2B103A]",
  },
];

export default function TurkeyPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* HERO */}
      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&auto=format&fit=crop&q=80"
          alt="Istanbul skyline at dusk"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-[#EFE7DA]/20">
            <span>🇹🇷</span>
            <span>Turkey</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Your local guide to <span className="text-[#C49A2A]">Turkey</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            Whether you are arriving as a student, traveling with family, or handling important
            paperwork — Mimi Bridge is here to help you figure things out.
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
            What brings you to Turkey?
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 max-w-lg mx-auto">
            Choose what fits your situation and we will show you exactly what support is available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TURKEY_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="block transition-transform hover:-translate-y-1 group"
              >
                <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 shadow-sm hover:shadow-lg h-full flex flex-col">
                  <div className="text-3xl mb-3">{service.emoji}</div>
                  <div className="w-9 h-9 bg-[#2B103A] text-[#C49A2A] rounded-[10px] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-[#2B103A]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#2B103A]/70 leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-[#C49A2A] group-hover:gap-2 transition-all">
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
            We have local knowledge and on-ground support in these cities. Click to explore each one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TURKEY_CITIES.map((city) => (
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
              We help you figure things out
            </h2>
            <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed mb-6">
              Moving to a new country is exciting — and sometimes overwhelming. University
              paperwork, housing searches, language barriers — there is a lot to navigate. We are
              here to make it easier, one step at a time.
            </p>

            <ul className="space-y-3 text-xs md:text-sm text-[#2B103A]/80">
              <FeatureItem text="Practical, local guidance — not generic advice" />
              <FeatureItem text="Available when you need help with everyday tasks" />
              <FeatureItem text="Friendly, honest support in multiple languages" />
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#2B103A] to-[#3D1852] text-[#EFE7DA] p-8 rounded-[20px] shadow-lg">
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
      <CheckCircle2 className="w-4 h-4 text-[#C49A2A] shrink-0" />
      <span>{text}</span>
    </li>
  );
}