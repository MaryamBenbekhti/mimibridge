"use client";

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import { Users, Heart, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function CommunityPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Community" }]} />

      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <Users className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Mimi Bridge Community</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Connecting Students, Families & Professionals Across <span className="text-[#C49A2A]">Borders</span>
          </h1>
          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Join our peer networks, student mentorship circles, and family support channels in Turkey and Saudi Arabia.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg"
          >
            <span>Join WhatsApp Community</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
