"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import CrossNav from "@/components/CrossNav";
import {
  GraduationCap,
  Briefcase,
  Compass,
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react";

export default function IstanbulCityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Turkey", href: "/turkey" },
          { label: "Cities", href: "/turkey" },
          { label: "Istanbul" },
        ]}
      />

      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&auto=format&fit=crop&q=80"
          alt="Istanbul Skyline"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-[#EFE7DA]/20">
            <MapPin className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Global Metropolis</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Istanbul — <span className="text-[#C49A2A]">Bridge Between Continents</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            Leading academic institutions, vibrant student districts, commercial corporate hubs, and timeless Bosphorus heritage.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <GraduationCap className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Student Life in Istanbul</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Istanbul University, ITU, Medipol, and Bahçeşehir University offering top-tier degrees, campus dorms, and vibrant student life.
          </p>
          <Link href="/turkey/student-services" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Student Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Briefcase className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Paperwork & Notary Support</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Göç İdaresi residence permit (Ikamet) accompaniment, Turkish sworn translation, and Tax ID (Vergi No) registration.
          </p>
          <Link href="/turkey/paperwork" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Paperwork Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Compass className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Travel & Luxury Transit</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Airport chauffeur transfers from IST & SAW, private Bosphorus yacht cruises, and historical Sultanahmet tours.
          </p>
          <Link href="/turkey/travel" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Travel Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <CrossNav currentPath="/turkey/travel" country="turkey" />
    </main>
  );
}
