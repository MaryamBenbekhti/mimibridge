"use client";

import React from "react";
import Link from "next/link";
import CrossNav from "@/components/CrossNav";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import StickySidebar from "@/components/UI/StickySidebar";
import FAQAccordion, { FAQItem } from "@/components/UI/FAQAccordion";
import {
  FileCheck,
  FileText,
  Calendar,
  MapPin,
  Languages,
  Shield,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Sparkles,
  ClipboardList,
  Building2,
  BadgeCheck,
  Palmtree,
} from "lucide-react";

// ────────────────────────────────────────────────────────────────
// SERVICES DATA
// ────────────────────────────────────────────────────────────────
const PAPERWORK_SERVICES = [
  {
    id: "rp1",
    title: "Saudi Iqama & Residence Guidance",
    price: "Starting from $50",
    icon: Shield,
    desc: "General guidance and practical support for navigating the Saudi residence permit (Iqama), Muqeem platform, and Jawazat procedures.",
    features: [
      "Iqama requirement checklist",
      "Medical checkup (Efada) guidance",
      "Absher & Muqeem portal orientation",
      "Document organization & verification",
      "Certified Arabic translation",
      "Appointment scheduling assistance",
      "Optional accompanied appointment support",
    ],
    disclaimer:
      "Mimi Bridge provides administrative assistance and practical guidance. We do not issue government permits, visas, or legal advice.",
    cta: "GET IQAMA HELP",
  },
  {
    id: "sd1",
    title: "Academic & Student Document Attestation",
    price: "Starting from $35",
    icon: FileCheck,
    desc: "Practical help for students managing Saudi university paperwork, MOFA document attestation, and certified translations.",
    features: [
      "Saudi university document preparation",
      "MOFA (Ministry of Foreign Affairs) attestation guidance",
      "Equivalency & transcript organization",
      "Certified Arabic translation",
      "Study in Saudi submission checklists",
      "Enrollment dossier organization",
    ],
    disclaimer: null,
    cta: "GET DOCUMENT HELP",
  },
  {
    id: "na1",
    title: "National Address & Administrative Registrations",
    price: "Starting from $30",
    icon: BadgeCheck,
    desc: "Step-by-step guidance for setting up your official Saudi National Address (SPL), Tawakkalna app, and essential administrative registrations.",
    features: [
      "Saudi Post (SPL) National Address setup",
      "Tawakkalna & Absher profile activation",
      "Ejar lease registration guidance",
      "Saudi bank opening document checklist",
      "Accompaniment for in-person registrations",
    ],
    disclaimer:
      "Mimi Bridge assists with document preparation and navigation. Official registrations are processed directly through Saudi government portals.",
    cta: "GET SETUP HELP",
  },
  {
    id: "aa1",
    title: "Government & Institutional Appointment Assistance",
    price: "Starting from $30",
    icon: Calendar,
    desc: "Preparation and on-ground support for appointments with Saudi government ministries, universities, banks, and Chambers of Commerce.",
    features: [
      "Appointment booking & preparation",
      "Required document dossier checklist",
      "Arabic translation & communication support",
      "On-site companion for appointments",
      "Help drafting formal inquiries and requests",
    ],
    disclaimer: null,
    cta: "BOOK APPOINTMENT SUPPORT",
  },
  {
    id: "dt1",
    title: "Certified Arabic Translation & Legalization",
    price: "Starting from $20",
    icon: Languages,
    desc: "Certified Arabic translation assistance and document organization to help you understand and submit official paperwork in Saudi Arabia.",
    features: [
      "Certified Arabic ↔ English / Turkish translation",
      "Government-compliant formatting",
      "Document legalization checklist",
      "Chamber of Commerce & ministry stamp guidance",
      "Fast turnaround for urgent submissions",
    ],
    disclaimer:
      "Translation assistance provided by Mimi Bridge meets standard certified requirements. Official government notarization is processed according to Saudi regulations.",
    cta: "GET TRANSLATION HELP",
  },
];

// ────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────
const FAQS: FAQItem[] = [
  {
    question: "Does Mimi Bridge provide legal representation in Saudi Arabia?",
    answer:
      "No. Mimi Bridge provides administrative guidance, translation, appointment accompaniment, and practical coordination. We do not provide legal advice or legal representation. For specialized legal matters, we can refer you to licensed Saudi legal counsel.",
  },
  {
    question: "Can Mimi Bridge guarantee the issuance of my Saudi visa or Iqama?",
    answer:
      "No. Mimi Bridge assists with document checklists, translations, and procedural navigation. Final decisions and approvals rest solely with the Saudi Ministry of Interior, Jawazat, and relevant governmental authorities.",
  },
  {
    question: "What is the Saudi National Address (SPL) and why is it needed?",
    answer:
      "The Saudi National Address (SPL) is the Kingdom's official standardized addressing system. It is mandatory for opening bank accounts, receiving government documents, registering Ejar lease contracts, and mobile SIM subscriptions. We assist you in registering it quickly.",
  },
  {
    question: "Can your team accompany me to Saudi government offices or banks?",
    answer:
      "Yes. Our Appointment Assistance service includes on-ground accompanied visits to bank branches, government service centers, and university administrative offices to facilitate smooth communication in Arabic.",
  },
  {
    question: "How do document attestations work with the Saudi Ministry of Foreign Affairs (MOFA)?",
    answer:
      "Educational certificates, commercial records, and personal documents often require authentication from the issuing country, followed by verification on MOFA's online portal. We provide comprehensive checklists and guidance for the entire attestation chain.",
  },
];

// ────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────
export default function SaudiPaperworkPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Saudi Arabia", href: "/saudi" },
          { label: "Paperwork & Administrative Assistance" },
        ]}
      />

      {/* HERO */}
      <div className="bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Saudi Arabia — Administrative Support</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Saudi Paperwork Is Easier With{" "}
            <span className="text-emerald-400">Local Expertise.</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Practical assistance for international students, professionals, and visitors navigating official procedures in Saudi Arabia. We help with Iqama guidance, National Address setup, MOFA attestation, certified Arabic translation, and appointment support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg hover:shadow-xl"
            >
              <span>Get Administrative Help</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/journey-planner"
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Plan Your Service</span>
            </Link>
          </div>
        </div>
      </div>

      {/* GLOBAL DISCLAIMER BANNER */}
      <div className="flex items-start space-x-3 bg-amber-500/10 border border-amber-500/30 rounded-[16px] p-5 mb-12">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-[#2B103A]/80 leading-relaxed">
          <span className="font-bold text-[#2B103A]">Important: </span>
          Mimi Bridge provides general administrative assistance, certified translation, and procedural guidance. We do not provide legal advice or guarantee governmental, residency, or visa approval outcomes. All official decisions are determined exclusively by the competent Saudi authorities.
        </p>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-6">
          {/* WHAT WE HELP WITH */}
          <section className="mb-10">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                Our Approach
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
                What We Help With in Saudi Arabia
              </h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1 leading-relaxed">
                We focus on the practical execution — making sure your paperwork is verified, attested, translated, and submitted without unnecessary friction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: ClipboardList, label: "Portals & Checklists" },
                { icon: FileText, label: "Document Dossier Organization" },
                { icon: Languages, label: "Certified Arabic Translation" },
                { icon: Calendar, label: "Appointment Guidance" },
                { icon: MapPin, label: "On-Ground Accompaniment" },
                { icon: Building2, label: "MOFA & Jawazat Preparation" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white/40 backdrop-blur-md p-4 rounded-[16px] border border-[#2B103A]/10 flex items-center space-x-3 hover:border-emerald-600 transition-colors"
                  >
                    <div className="w-9 h-9 bg-emerald-950 text-[#C49A2A] rounded-[10px] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#2B103A] leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SERVICES */}
          <section>
            <div className="mb-8">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Services</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
                Saudi Paperwork & Administrative Assistance
              </h2>
            </div>

            <div className="space-y-6">
              {PAPERWORK_SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="bg-white/40 backdrop-blur-md p-6 rounded-[24px] border border-[#2B103A]/10 hover:border-emerald-600 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 bg-emerald-950 text-[#C49A2A] rounded-[14px] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-xl text-[#2B103A]">
                            {svc.title}
                          </h3>
                          <span className="text-xs font-serif font-bold text-[#C49A2A]">
                            {svc.price}
                          </span>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="shrink-0 px-5 py-2.5 rounded-full bg-[#2B103A] text-[#EFE7DA] text-xs font-bold uppercase tracking-wider hover:bg-[#2B103A]/90 transition-colors text-center"
                      >
                        {svc.cta}
                      </Link>
                    </div>

                    <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-5">
                      {svc.desc}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {svc.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center space-x-2 text-xs text-[#2B103A]/80"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {svc.disclaimer && (
                      <p className="text-[10px] italic text-[#2B103A]/60 bg-[#2B103A]/5 px-4 py-2.5 rounded-[10px] border border-[#2B103A]/10 leading-relaxed">
                        &quot;{svc.disclaimer}&quot;
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* STICKY SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Saudi Paperwork Concierge"
            badge="Saudi Arabia — Practical Guidance"
            ctaText="Request Administrative Help"
            features={[
              "Saudi National Address & SPL setup",
              "Certified Arabic translation for MOFA",
              "Jawazat & Iqama medical checklist guidance",
              "On-ground appointment accompaniment in Riyadh & Jeddah",
            ]}
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <FAQAccordion items={FAQS} />
      </div>

      {/* LARGE CTA */}
      <div className="mt-16 bg-gradient-to-r from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] p-10 md:p-14 rounded-[32px] text-center shadow-2xl relative overflow-hidden border border-[#C49A2A]/30">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Need Guidance With Saudi Procedures?
          </h2>
          <p className="text-xs md:text-base text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us about your paperwork needs and our on-ground team will guide you step by step.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-xl hover:scale-105"
          >
            <span>CONTACT OUR TEAM</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* CROSS-NAV */}
      <CrossNav currentPath="/saudi/paperwork" country="saudi" />
    </main>
  );
}
