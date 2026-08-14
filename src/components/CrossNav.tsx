"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Languages, Compass, FileCheck, ArrowRight, Sparkles } from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

const TURKEY_SERVICES: ServiceCardData[] = [
  {
    id: "student",
    title: "Student Services",
    desc: "Practical support for starting your new life in Turkey.",
    href: "/turkey/student-services",
    icon: GraduationCap,
  },
  {
    id: "translation",
    title: "Translation",
    desc: "Language assistance when everyday communication gets difficult.",
    href: "/turkey/translation",
    icon: Languages,
  },
  {
    id: "travel",
    title: "Travel",
    desc: "Personalized travel planning and local support in Turkey.",
    href: "/turkey/travel",
    icon: Compass,
  },
  {
    id: "paperwork",
    title: "Paperwork & Admin",
    desc: "Document help, appointment guidance, and administrative support in Turkey.",
    href: "/turkey/paperwork",
    icon: FileCheck,
  },
];

const SAUDI_SERVICES: ServiceCardData[] = [
  {
    id: "student",
    title: "Student Services",
    desc: "Practical support for starting your educational journey in Saudi Arabia.",
    href: "/saudi/student-services",
    icon: GraduationCap,
  },
  {
    id: "translation",
    title: "Translation",
    desc: "Certified Arabic translation & live interpretation across the Kingdom.",
    href: "/saudi/translation",
    icon: Languages,
  },
  {
    id: "travel",
    title: "Travel",
    desc: "Executive transit, spiritual journeys, and bespoke travel across Saudi cities.",
    href: "/saudi/travel",
    icon: Compass,
  },
  {
    id: "paperwork",
    title: "Paperwork & Admin",
    desc: "Iqama guidance, appointment support, and administrative procedures in Saudi Arabia.",
    href: "/saudi/paperwork",
    icon: FileCheck,
  },
];

export default function CrossNav({ currentPath, country }: { currentPath?: string; country?: "turkey" | "saudi" }) {
  const isSaudi = country === "saudi" || (currentPath && currentPath.startsWith("/saudi"));
  const services = isSaudi ? SAUDI_SERVICES : TURKEY_SERVICES;
  const countryName = isSaudi ? "Saudi Arabia" : "Turkey";

  return (
    <div className="pt-16 border-t border-[#2B103A]/10 mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Concierge Suite</span>
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
          Explore Our {countryName} Services
        </h2>
        <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2 leading-relaxed">
          Friendly, dedicated on-ground support tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((item) => {
          const Icon = item.icon;
          const isCurrent = currentPath === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`p-6 rounded-[24px] border transition-all duration-300 group flex flex-col justify-between ${
                isCurrent
                  ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl ring-2 ring-[#C49A2A]/40"
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 hover:border-[#C49A2A] text-[#2B103A] shadow-sm hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                  isCurrent ? "bg-[#C49A2A] text-[#2B103A]" : "bg-[#2B103A] text-[#C49A2A]"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-serif font-bold text-lg ${isCurrent ? "text-[#EFE7DA]" : "text-[#2B103A]"}`}>
                    {item.title}
                  </h3>
                  {isCurrent && (
                    <span className="text-[9px] bg-[#C49A2A] text-[#2B103A] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${isCurrent ? "text-[#EFE7DA]/80" : "text-[#2B103A]/70"}`}>
                  {item.desc}
                </p>
              </div>

              <div className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isCurrent ? "text-[#C49A2A]" : "text-[#2B103A] group-hover:text-[#C49A2A]"
              }`}>
                <span>{isCurrent ? "Active Page" : "Explore Service"}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}