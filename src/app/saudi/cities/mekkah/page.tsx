"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import CrossNav from "@/components/CrossNav";
import {
  GraduationCap,
  Compass,
  ArrowRight,
  MapPin,
  Palmtree,
  ShieldCheck,
} from "lucide-react";

export default function MekkahCityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Saudi Arabia", href: "/saudi" },
          { label: "Cities", href: "/saudi" },
          { label: "Makkah" },
        ]}
      />

      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg"
          alt="Makkah Al-Mukarramah"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Sacred Holy Sanctuary</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Makkah — <span className="text-emerald-400">The Spiritual Epicenter</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            From Umm Al-Qura University to dedicated Umrah concierge, luxury Abraj Al-Bait hospitality, and seamless private transit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <GraduationCap className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Umm Al-Qura University</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Academic consultation, international student enrollment dossiers, Arabic language institute setup, and student Iqama services.
          </p>
          <Link href="/saudi/student-services" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Student Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <ShieldCheck className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Visitor Support & Permits</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Nusuk app guidance, document translation, and bilingual escort for families arriving for extended pilgrimages.
          </p>
          <Link href="/saudi/paperwork" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Paperwork Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Compass className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Umrah & Private Transit</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Private VIP transfers between King Abdulaziz Airport (JED) and Makkah, Haramain high-speed railway tickets, and 5-star hotel bookings.
          </p>
          <Link href="/saudi/travel" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Travel Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <CrossNav currentPath="/saudi/travel" country="saudi" />
    </main>
  );
}
