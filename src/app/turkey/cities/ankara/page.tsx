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

export default function AnkaraCityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Turkey", href: "/turkey" },
          { label: "Cities", href: "/turkey" },
          { label: "Ankara" },
        ]}
      />

      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://bukaviyyehotel.com.tr/tema/genel/uploads/haberler/ankara-gezilecek-yerler.jpg"
          alt="Ankara Capital"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-[#EFE7DA]/20">
            <MapPin className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Capital & Diplomatic Quarter</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Ankara — <span className="text-[#C49A2A]">The Administrative Heart</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            Leading academic research universities (METU, Bilkent, Hacettepe, Ankara University), diplomatic embassies, and governmental institutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <GraduationCap className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Student Life in Ankara</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Prestigious research universities, affordable student housing in Çankaya and Bahçelievler, and student Ankarakart setup.
          </p>
          <Link href="/turkey/student-services" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Student Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Briefcase className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">MEB Denklik & Ministry</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Ministry of National Education (MEB) diploma equivalency, embassy attestation, and sworn translation.
          </p>
          <Link href="/turkey/paperwork" className="text-xs font-bold text-[#C49A2A] flex items-center space-x-1">
            <span>Explore Paperwork Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Compass className="w-8 h-8 text-[#2B103A] mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Travel & Chauffeur</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Esenboğa Airport (ESB) pickups, diplomatic transfers, and guided visits to Anıtkabir and Atakule.
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
