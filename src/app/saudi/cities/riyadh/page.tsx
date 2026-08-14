"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import CrossNav from "@/components/CrossNav";
import {
  Building2,
  GraduationCap,
  Briefcase,
  Compass,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function RiyadhCityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Saudi Arabia", href: "/saudi" },
          { label: "Cities", href: "/saudi" },
          { label: "Riyadh" },
        ]}
      />

      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg"
          alt="Riyadh Skyline"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-emerald-400/30">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Capital City Hub</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Riyadh — <span className="text-emerald-400">The Modern Financial & Cultural Heart</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            From premier universities like King Saud University and Princess Nourah University to KAFD corporate headquarters and historic Diriyah.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <GraduationCap className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Student Life in Riyadh</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            King Saud University (KSU), Princess Nourah University (PNU), and Alfaisal University offering world-class campuses and scholarship options.
          </p>
          <Link href="/saudi/student-services" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Student Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Briefcase className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Business & KAFD</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Regional HQ setup, LEAP tech conference, government ministerial liaison, and high-level corporate translation.
          </p>
          <Link href="/saudi/paperwork" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Paperwork Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Compass className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Travel & Diriyah</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Private chauffeur transit, Edge of the World excursions, luxury hotel reservations, and Boulevard World experiences.
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
