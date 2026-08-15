"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import CrossNav from "@/components/CrossNav";
import {
  MapPin,
  Home,
  Utensils,
  ShoppingBag,
  Compass,
  Bus,
  Coins,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Plane,
  GraduationCap,
  FileCheck,
  Users,
  Building,
  Calendar,
  CreditCard,
  MessageSquare,
} from "lucide-react";

export interface Neighborhood {
  name: string;
  tag: string;
  desc: string;
}

export interface FoodSpecialty {
  name: string;
  desc: string;
}

export interface ShoppingSpot {
  name: string;
  type: string;
  desc: string;
}

export interface Attraction {
  name: string;
  category: string;
  desc: string;
}

export interface TransitOption {
  name: string;
  desc: string;
}

export interface BudgetItem {
  item: string;
  cost: string;
  note: string;
}

export interface Phrase {
  phrase: string;
  pronunciation?: string;
  meaning: string;
  context: string;
}

export interface MimiService {
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

export interface CityData {
  name: string;
  country: "turkey" | "saudi";
  countryName: string;
  tagline: string;
  image: string;
  introduction: string;
  bestTimeToVisit: string;
  mainAirports: string;
  currency: string;
  whereToStay: {
    overview: string;
    neighborhoods: Neighborhood[];
  };
  food: {
    overview: string;
    specialties: FoodSpecialty[];
    diningTip: string;
  };
  shopping: {
    overview: string;
    spots: ShoppingSpot[];
  };
  thingsToDo: {
    overview: string;
    attractions: Attraction[];
  };
  transportation: {
    overview: string;
    cardName: string;
    cardDetails: string;
    options: TransitOption[];
  };
  budget: {
    overview: string;
    items: BudgetItem[];
    tip: string;
  };
  languageTips: {
    overview: string;
    phrases: Phrase[];
  };
  mimiServices: MimiService[];
}

export default function CityGuidePage({ data }: { data: CityData }) {
  const isSaudi = data.country === "saudi";
  const primaryBg = isSaudi ? "bg-emerald-900" : "bg-[#2B103A]";
  const accentColor = isSaudi ? "text-emerald-400" : "text-[#C49A2A]";
  const heroGradient = isSaudi
    ? "bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 border-emerald-500/20"
    : "bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] border-[#C49A2A]/20";

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: data.countryName, href: `/${data.country}` },
          { label: "Travel & Hospitality", href: `/${data.country}/travel` },
          { label: data.name },
        ]}
      />

      {/* HERO SECTION */}
      <div className="relative w-full min-h-[440px] md:h-[500px] rounded-[32px] overflow-hidden mb-12 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src={data.image}
          alt={data.name}
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/95 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        
        <div className="relative z-10 text-center max-w-3xl px-6 py-12 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-[#EFE7DA]/20">
            <MapPin className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>{data.countryName} · Destination Guide</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {data.name}
          </h1>
          <p className="text-base md:text-xl font-medium text-[#C49A2A] mb-4">
            {data.tagline}
          </p>
          <p className="text-xs md:text-sm text-[#EFE7DA]/85 max-w-2xl mx-auto leading-relaxed font-sans">
            {data.introduction}
          </p>
        </div>
      </div>

      {/* QUICK FACTS STRIP */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        <div className="bg-white/50 backdrop-blur-md p-4 rounded-[20px] border border-[#2B103A]/10 text-center">
          <span className="text-[10px] uppercase font-bold text-[#2B103A]/50 block mb-1">Main Airport(s)</span>
          <p className="font-serif font-bold text-sm text-[#2B103A]">{data.mainAirports}</p>
        </div>
        <div className="bg-white/50 backdrop-blur-md p-4 rounded-[20px] border border-[#2B103A]/10 text-center">
          <span className="text-[10px] uppercase font-bold text-[#2B103A]/50 block mb-1">Transit Card</span>
          <p className="font-serif font-bold text-sm text-[#2B103A]">{data.transportation.cardName}</p>
        </div>
        <div className="bg-white/50 backdrop-blur-md p-4 rounded-[20px] border border-[#2B103A]/10 text-center">
          <span className="text-[10px] uppercase font-bold text-[#2B103A]/50 block mb-1">Currency</span>
          <p className="font-serif font-bold text-sm text-[#2B103A]">{data.currency}</p>
        </div>
        <div className="bg-white/50 backdrop-blur-md p-4 rounded-[20px] border border-[#2B103A]/10 text-center">
          <span className="text-[10px] uppercase font-bold text-[#2B103A]/50 block mb-1">Best Season</span>
          <p className="font-serif font-bold text-sm text-[#2B103A]">{data.bestTimeToVisit}</p>
        </div>
      </div>

      {/* SECTION 1: WHERE TO STAY */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <Home className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Accommodation</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Where to Stay in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.whereToStay.overview}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.whereToStay.neighborhoods.map((n) => (
            <div
              key={n.name}
              className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-[#2B103A] text-[#EFE7DA] text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
                  {n.tag}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-2">{n.name}</h3>
                <p className="text-xs text-[#2B103A]/70 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: FOOD & DINING */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <Utensils className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Culinary & Dining</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Local Food & Specialties
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.food.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {data.food.specialties.map((dish) => (
            <div
              key={dish.name}
              className="bg-white/40 backdrop-blur-md p-5 rounded-[18px] border border-[#2B103A]/10"
            >
              <h4 className="font-serif font-bold text-base text-[#2B103A] mb-1.5">{dish.name}</h4>
              <p className="text-xs text-[#2B103A]/70 leading-relaxed">{dish.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50/80 border border-amber-200/80 rounded-[16px] p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
          <span className="text-sm shrink-0">💡</span>
          <div>
            <strong>Local Dining Tip:</strong> {data.food.diningTip}
          </div>
        </div>
      </section>

      {/* SECTION 3: SHOPPING */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Shopping & Markets</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Shopping in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.shopping.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.shopping.spots.map((spot) => (
            <div
              key={spot.name}
              className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all shadow-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C49A2A] block mb-1">
                {spot.type}
              </span>
              <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-2">{spot.name}</h3>
              <p className="text-xs text-[#2B103A]/70 leading-relaxed">{spot.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THINGS TO DO */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Must-Visit Sites</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Top Things to Do in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.thingsToDo.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.thingsToDo.attractions.map((attr) => (
            <div
              key={attr.name}
              className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#C49A2A] block mb-1.5">
                  {attr.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-2">{attr.name}</h3>
                <p className="text-xs text-[#2B103A]/70 leading-relaxed">{attr.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TRANSPORTATION */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <Bus className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Getting Around</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Transportation in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.transportation.overview}
        </p>

        <div className="bg-[#2B103A] text-[#EFE7DA] rounded-[20px] p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border border-[#C49A2A]/30">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-6 h-6 text-[#C49A2A] shrink-0" />
            <div>
              <h4 className="font-serif font-bold text-sm text-[#EFE7DA]">{data.transportation.cardName} Transit Pass</h4>
              <p className="text-xs text-[#EFE7DA]/75">{data.transportation.cardDetails}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.transportation.options.map((opt) => (
            <div
              key={opt.name}
              className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10"
            >
              <h4 className="font-serif font-bold text-base text-[#2B103A] mb-1.5">{opt.name}</h4>
              <p className="text-xs text-[#2B103A]/70 leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: BASIC COST & BUDGET INFORMATION */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <Coins className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Cost & Budget</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Basic Budget Guidance in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.budget.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {data.budget.items.map((b) => (
            <div
              key={b.item}
              className="bg-white/40 backdrop-blur-md p-5 rounded-[18px] border border-[#2B103A]/10"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2B103A]/60 block mb-1">
                {b.item}
              </span>
              <p className="font-serif font-bold text-lg text-[#C49A2A] mb-1">{b.cost}</p>
              <p className="text-[11px] text-[#2B103A]/70">{b.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#2B103A]/5 border border-[#2B103A]/10 rounded-[16px] p-4 text-xs text-[#2B103A]/80 leading-relaxed flex items-start gap-2.5">
          <span className="text-sm shrink-0">💰</span>
          <div>
            <strong>Budget Tip:</strong> {data.budget.tip}
          </div>
        </div>
      </section>

      {/* SECTION 7: LOCAL LANGUAGE TIPS */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">Language Tips</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Useful Local Phrases in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          {data.languageTips.overview}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.languageTips.phrases.map((p, idx) => (
            <div
              key={idx}
              className="bg-white/40 backdrop-blur-md p-5 rounded-[18px] border border-[#2B103A]/10 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-serif font-bold text-base text-[#2B103A] mb-0.5">{p.phrase}</h4>
                {p.pronunciation && (
                  <span className="text-[11px] text-[#C49A2A] font-mono block mb-1">
                    [{p.pronunciation}]
                  </span>
                )}
                <p className="text-xs font-semibold text-[#2B103A]/85 mb-1.5">{p.meaning}</p>
                <p className="text-[11px] text-[#2B103A]/60 leading-relaxed">{p.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: MIMI BRIDGE SERVICES IN THIS CITY */}
      <section className="mb-16">
        <div className="flex items-center space-x-2.5 mb-3">
          <div className="w-8 h-8 rounded-[10px] bg-[#2B103A] text-[#C49A2A] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold">On-Ground Concierge</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
          Mimi Bridge Services in {data.name}
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mb-6 max-w-2xl leading-relaxed">
          Our verified on-ground student guides and operational team provide friendly, direct assistance throughout {data.name}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.mimiServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-1.5">{svc.title}</h3>
                  <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{svc.desc}</p>
                </div>
                <Link
                  href={svc.href}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#C49A2A] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: BOTTOM HELP CTA */}
      <div className={`${heroGradient} text-[#EFE7DA] rounded-[32px] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden mb-12`}>
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Local On-Ground Team</span>
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Need help in {data.name}?
          </h2>
          <p className="text-xs md:text-sm text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed font-sans">
            Whether you are arriving as an international student, traveling with your family, or needing paperwork assistance — Mimi Bridge is here to assist in {data.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contact?dest=${data.country}&city=${encodeURIComponent(data.name)}`}
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg font-sans"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Mimi Support</span>
            </Link>
            <Link
              href="/journey-planner"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 text-[#EFE7DA] border border-[#EFE7DA]/20 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all font-sans"
            >
              <span>Plan My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* CROSS NAVIGATION */}
      <CrossNav country={data.country} currentPath={`/${data.country}/travel`} />
    </main>
  );
}
