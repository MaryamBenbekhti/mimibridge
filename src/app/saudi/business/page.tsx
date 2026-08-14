"use client";

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import CrossNav from "@/components/CrossNav";
import StickySidebar from "@/components/UI/StickySidebar";
import FAQAccordion, { FAQItem } from "@/components/UI/FAQAccordion";
import {
  Briefcase,
  Building2,
  FileCheck2,
  Languages,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Palmtree,
  TrendingUp,
} from "lucide-react";

const BUSINESS_SERVICES = [
  {
    title: "Regional HQ & Commercial Advisory",
    price: "Custom Scope",
    desc: "Strategic on-ground assistance with Saudi commercial registry (CR), Ministry of Investment (MISA) licensing guidance, and ZATCA tax setup.",
    features: [
      "MISA & Ministry of Commerce checklist",
      "Corporate document legal translation",
      "Chamber of Commerce registration support",
      "National Address & corporate bank guidance",
    ],
  },
  {
    title: "Corporate Summit & Delegation Escort",
    price: "Starting from $150/day",
    desc: "Executive chauffeur, VIP airport protocol, and bilingual Arabic-English-Turkish interpreters for summits like LEAP, FII, and Cityscape Global.",
    features: [
      "Bilingual corporate interpreters",
      "Private executive chauffeur fleet (GMC/Mercedes)",
      "Meeting room & hotel coordination",
      "Full itinerary management across Riyadh & Jeddah",
    ],
  },
  {
    title: "Contract & Document Attestation",
    price: "Starting from $40",
    desc: "Certified sworn translations, Saudi Ministry of Foreign Affairs (MOFA) attestation, and Ministry of Justice (Najiz) power-of-attorney coordination.",
    features: [
      "Certified commercial translations",
      "MOFA digital attestation guidance",
      "Najiz & legal power-of-attorney prep",
      "Fast turnaround for tender submissions",
    ],
  },
];

const FAQS: FAQItem[] = [
  {
    question: "How does Mimi Bridge assist international companies entering Saudi Arabia?",
    answer: "We provide comprehensive on-ground operational support—including certified commercial translations, appointment accompaniment with government entities and Chambers of Commerce, executive transit for delegations, and document organization.",
  },
  {
    question: "Do you provide corporate interpreters for Riyadh and Jeddah conferences?",
    answer: "Yes. Our professional bilingual consecutive and simultaneous interpreters are available for conferences (LEAP, FII, Cityscape), board meetings, supplier negotiations, and factory visits across the Kingdom.",
  },
];

export default function SaudiBusinessPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Saudi Arabia", href: "/saudi" }, { label: "Business Services" }]} />

      <div className="bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Corporate Corridor — Vision 2030</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Business & Delegation Services in <span className="text-emerald-400">Saudi Arabia</span>
          </h1>
          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Your on-ground partner for corporate delegations, commercial translations, government office liaison, and executive transit across Riyadh, Jeddah, and the Eastern Province.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg"
          >
            <span>Consult With Business Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        <div className="lg:col-span-8 space-y-6">
          {BUSINESS_SERVICES.map((svc, idx) => (
            <div
              key={idx}
              className="bg-white/40 backdrop-blur-md p-6 rounded-[24px] border border-[#2B103A]/10 hover:border-emerald-600 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                <h3 className="font-serif font-bold text-xl text-[#2B103A]">{svc.title}</h3>
                <span className="text-xs font-serif font-bold text-[#C49A2A] bg-emerald-950/5 px-3 py-1 rounded-full border border-emerald-600/20">
                  {svc.price}
                </span>
              </div>
              <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{svc.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {svc.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-2 text-xs text-[#2B103A]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Saudi Business Advisory"
            badge="Vision 2030 Partner"
            ctaText="Schedule Corporate Call"
            features={[
              "Bilingual Arabic-Turkish-English business linguists",
              "Executive private chauffeur and delegation protocol",
              "Chamber of Commerce & ministry appointment escort",
              "Fast-track corporate document translations",
            ]}
          />
        </div>
      </div>

      <FAQAccordion items={FAQS} />
      <CrossNav currentPath="/saudi/paperwork" country="saudi" />
    </main>
  );
}
