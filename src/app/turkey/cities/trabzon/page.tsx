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
} from "lucide-react";

export default function TrabzonCityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Turkey", href: "/turkey" },
          { label: "Cities", href: "/turkey" },
          { label: "Trabzon" },
        ]}
      />

      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://www.advantour.com/img/turkey/images/trabzon.jpg"
          alt="Trabzon Black Sea"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-[#EFE7DA]/20">
            <MapPin className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Black Sea Jewel</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Trabzon — <span className="text-[#C49A2A]">Coastal Nature & Academics</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            Karadeniz Technical University (KTU), Avrasya University, coastal real estate investments, Uzungöl mountain retreats, and Sumela Monastery.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <GraduationCap className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Student Life in Trabzon</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Karadeniz Technical University (KTU) enrollment, affordable coastal student apartments, and student residence permit support.
          </p>
          <Link href="/turkey/student-services" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Student Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Briefcase className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Property & Administrative Support</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Black Sea real estate contract reviews, Turkish lease translations, and local registration support.
          </p>
          <Link href="/turkey/paperwork" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Paperwork Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Compass className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Uzungöl & Mountain Tourism</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Trabzon Airport (TZX) transfers, Uzungöl mountain tours, Sumela Monastery excursions, and private driver services.
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
