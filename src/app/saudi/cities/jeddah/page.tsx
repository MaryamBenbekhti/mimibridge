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
  Palmtree,
} from "lucide-react";

export default function JeddahCityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Saudi Arabia", href: "/saudi" },
          { label: "Cities", href: "/saudi" },
          { label: "Jeddah" },
        ]}
      />

      <div className="relative w-full h-[400px] md:h-[480px] rounded-[32px] overflow-hidden mb-16 flex items-center justify-center border border-[#2B103A]/10 shadow-2xl">
        <Image
          src="https://images.trvl-media.com/place/553248634646177626/e5c39be0-8b5d-49e9-ae16-92f7c86f9d47.jpg"
          alt="Jeddah Corniche & Al-Balad"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B103A]/90 via-[#2B103A]/60 to-[#2B103A]/40 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center max-w-3xl px-6 text-[#EFE7DA]">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Red Sea Coastal Gateway</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Jeddah — <span className="text-emerald-400">Bride of the Red Sea</span>
          </h1>
          <p className="text-sm md:text-base text-[#EFE7DA]/80 max-w-2xl mx-auto leading-relaxed">
            From King Abdulaziz University (KAU) and maritime commerce to UNESCO-listed Historic Al-Balad and luxury coastal hospitality.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <GraduationCap className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Student Life in Jeddah</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            King Abdulaziz University (KAU), Dar Al-Hekma, and Effat University offering premier academic programs and dynamic coastal living.
          </p>
          <Link href="/saudi/student-services" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Student Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Briefcase className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Maritime Commerce & Logistics</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Jeddah Islamic Port logistics, Chamber of Commerce document attestations, and corporate translation support.
          </p>
          <Link href="/saudi/paperwork" className="text-xs font-bold text-emerald-800 flex items-center space-x-1">
            <span>Explore Paperwork Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[24px] border border-[#2B103A]/10">
          <Compass className="w-8 h-8 text-emerald-700 mb-4" />
          <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">Al-Balad & Coastal Excursions</h2>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
            Historic Al-Balad coral architecture walks, yacht cruises on the Red Sea, and airport transfers from King Abdulaziz Airport (JED).
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
