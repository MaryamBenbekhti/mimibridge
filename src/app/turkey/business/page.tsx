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
} from "lucide-react";

const BUSINESS_SERVICES = [
  {
    title: "Company Setup & Commercial Registration",
    price: "Custom Scope",
    desc: "Guidance navigating Turkish Chamber of Commerce (İTO) registration, Tax ID, and legal business formation in Turkey.",
    features: [
      "Company registration checklist",
      "Sworn translation of corporate charters",
      "Notary power-of-attorney accompaniment",
      "Corporate bank account guidance",
    ],
  },
  {
    title: "B2B Interpreter & Trade Fair Escort",
    price: "Starting from $120/day",
    desc: "Consecutive bilingual interpreters for corporate negotiations, supplier visits, and trade exhibitions in Istanbul and Ankara.",
    features: [
      "Sworn Turkish-Arabic-English interpreters",
      "Private business chauffeur fleet",
      "Supplier and factory visit coordination",
      "Executive meeting support",
    ],
  },
  {
    title: "Legal Contract & Notary Attestation",
    price: "Starting from $35",
    desc: "Certified sworn translations, Turkish Notary public (Noter) validation, and apostille processing for cross-border commercial agreements.",
    features: [
      "Certified legal translations",
      "Notary seal & apostille processing",
      "Tenant and supplier contract review",
      "Fast turnaround for tenders",
    ],
  },
];

const FAQS: FAQItem[] = [
  {
    question: "Do you provide business interpreters for Istanbul trade fairs?",
    answer: "Yes, our certified Turkish-Arabic-English interpreters accompany foreign delegations to CNR Expo, TÜYAP, and private corporate meetings across Istanbul and Turkey.",
  },
  {
    question: "Can you assist with Turkish notary procedures for foreign directors?",
    answer: "Yes. Turkish notary public offices require an official sworn translator present whenever a non-Turkish speaker signs corporate powers of attorney or company resolutions. We provide certified sworn translators on-demand.",
  },
];

export default function TurkeyBusinessPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Turkey", href: "/turkey" }, { label: "Business Services" }]} />

      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <Building2 className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Corporate Gateway — Turkey</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Business & Commercial Services in <span className="text-[#C49A2A]">Turkey</span>
          </h1>
          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Your on-ground partner for corporate delegations, commercial sworn translations, notary representation, and executive transit across Istanbul and Ankara.
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
              className="bg-white/40 backdrop-blur-md p-6 rounded-[24px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
                <h3 className="font-serif font-bold text-xl text-[#2B103A]">{svc.title}</h3>
                <span className="text-xs font-serif font-bold text-[#C49A2A] bg-[#2B103A]/5 px-3 py-1 rounded-full border border-[#C49A2A]/20">
                  {svc.price}
                </span>
              </div>
              <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{svc.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {svc.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-2 text-xs text-[#2B103A]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2A] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Turkey Corporate Desk"
            badge="B2B & Notary Liaison"
            ctaText="Schedule Corporate Call"
            features={[
              "Licensed Turkish-Arabic-English sworn interpreters",
              "Notary power-of-attorney accompaniment",
              "Executive chauffeur and delegation protocol",
              "Fast-track commercial document translations",
            ]}
          />
        </div>
      </div>

      <FAQAccordion items={FAQS} />
      <CrossNav currentPath="/turkey/paperwork" country="turkey" />
    </main>
  );
}
