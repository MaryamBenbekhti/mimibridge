"use client";

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import StickySidebar from "@/components/UI/StickySidebar";
import FAQAccordion, { FAQItem } from "@/components/UI/FAQAccordion";
import {
  FileCheck,
  FileText,
  Calendar,
  Languages,
  Building2,
  ClipboardList,
  MapPin,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Sparkles,
} from "lucide-react";

// ────────────────────────────────────────────────────────────────
// SERVICES DATA
// ────────────────────────────────────────────────────────────────
const PAPERWORK_SERVICES = [
  {
    id: "vp1",
    title: "Visitor Paperwork Assistance",
    price: "Starting from $30",
    icon: FileCheck,
    desc: "General guidance and practical support for visitors who need help with paperwork and understanding official requirements in Saudi Arabia.",
    features: [
      "General document checklist",
      "Application preparation guidance",
      "Translation assistance",
      "Appointment guidance",
      "Help understanding official requirements",
    ],
    disclaimer:
      "Mimi Bridge does not guarantee visa or entry approval. All decisions are made by the relevant Saudi authorities.",
    cta: "GET VISITOR HELP",
  },
  {
    id: "df1",
    title: "Document & Form Assistance",
    price: "Starting from $20",
    icon: FileText,
    desc: "Practical help understanding, organizing, and preparing documents and official forms in Saudi Arabia.",
    features: [
      "Help understanding forms",
      "Document organization",
      "Translation assistance",
      "Checklist preparation",
      "General submission guidance",
    ],
    disclaimer: null,
    cta: "GET DOCUMENT HELP",
  },
  {
    id: "ag1",
    title: "Appointment & Government Office Assistance",
    price: "Starting from $30",
    icon: Calendar,
    desc: "Preparation and support for appointments with government offices, institutions, and other official bodies in Saudi Arabia.",
    features: [
      "Appointment preparation",
      "Required-document checklist",
      "Translation assistance",
      "Accompaniment where appropriate",
      "Help communicating with staff",
    ],
    disclaimer: null,
    cta: "BOOK APPOINTMENT SUPPORT",
  },
  {
    id: "tc1",
    title: "Translation & Administrative Communication",
    price: "Starting from $20",
    icon: Languages,
    desc: "Language assistance for administrative communications, forms, emails, phone calls, and general correspondence in Saudi Arabia.",
    features: [
      "Arabic ↔ Turkish translation",
      "Arabic ↔ English translation",
      "English ↔ Turkish translation",
      "Help with emails and forms",
      "Phone-call assistance",
      "General administrative communication",
    ],
    disclaimer: null,
    cta: "GET TRANSLATION HELP",
  },
];

// ────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────
const FAQS: FAQItem[] = [
  {
    question: "Does Mimi Bridge provide legal advice for Saudi Arabia?",
    answer:
      "No. Mimi Bridge provides general administrative assistance, translation, and practical guidance. We do not provide legal advice or legal representation. For legal matters, we can help connect you with appropriate licensed professionals.",
  },
  {
    question: "Can Mimi Bridge guarantee visa or entry approval into Saudi Arabia?",
    answer:
      "No. All visa and entry decisions are made by the relevant Saudi authorities. Mimi Bridge assists with document organization, translation, and preparation support only.",
  },
  {
    question: "Which languages do you provide translation assistance for in Saudi Arabia?",
    answer:
      "We provide translation assistance for Arabic ↔ Turkish, Arabic ↔ English, and English ↔ Turkish. Our team can help with written documents, emails, forms, and phone-call interpretation.",
  },
  {
    question: "Can you accompany me to a government office in Saudi Arabia?",
    answer:
      "Yes, where appropriate, our team can accompany you to appointments and assist with communication, translation, and general guidance.",
  },
  {
    question: "Is your translation assistance officially certified?",
    answer:
      "Our translation assistance is provided for general understanding and administrative communication. If you require officially sworn or certified translation for legal purposes, we can connect you with a properly authorized professional.",
  },
];

// ────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────
export default function SaudiAssistancePage() {
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
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A2A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <FileCheck className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Saudi Arabia — Administrative Support</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Navigating Saudi Arabia,{" "}
            <span className="text-[#C49A2A]">Made Simpler.</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Practical support for visitors, students, families, and businesses who
            need help understanding everyday administrative processes in Saudi
            Arabia. We focus on information, document help, translation, and
            appointment guidance — not legal services.
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
              href="/book"
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* GLOBAL DISCLAIMER BANNER */}
      <div className="flex items-start space-x-3 bg-amber-500/10 border border-amber-500/30 rounded-[16px] p-5 mb-12">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-[#2B103A]/80 leading-relaxed">
          <span className="font-bold text-[#2B103A]">Important: </span>
          Mimi Bridge provides general administrative assistance, translation, and
          practical guidance. We do not provide legal advice or guarantee
          government, visa, residency, or application outcomes. For legal matters,
          we can help connect you with licensed professionals.
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
                What We Help With
              </h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1 leading-relaxed">
                We focus on the practical side — connecting you with the right
                information, helping organize your documents, and supporting
                communication.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: ClipboardList, label: "Information & Checklists" },
                { icon: FileText, label: "Document Organization" },
                { icon: Languages, label: "Translation Assistance" },
                { icon: Calendar, label: "Appointment Guidance" },
                { icon: MapPin, label: "Accompaniment" },
                { icon: Building2, label: "Application Prep Support" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white/40 backdrop-blur-md p-4 rounded-[16px] border border-[#2B103A]/10 flex items-center space-x-3 hover:border-[#C49A2A] transition-colors"
                  >
                    <div className="w-9 h-9 bg-[#2B103A] text-[#C49A2A] rounded-[10px] flex items-center justify-center shrink-0">
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
                Saudi Arabia Paperwork & Administrative Assistance
              </h2>
            </div>

            <div className="space-y-6">
              {PAPERWORK_SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="bg-white/40 backdrop-blur-md p-6 rounded-[24px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 bg-[#2B103A] text-[#C49A2A] rounded-[14px] flex items-center justify-center shrink-0">
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
                        href="/book"
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2A] shrink-0" />
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
            title="Administrative Support"
            badge="Saudi Arabia — Practical Guidance"
            ctaText="Request Administrative Help"
            features={[
              "Document checklist preparation",
              "Translation assistance (Arabic, English, Turkish)",
              "Appointment guidance and accompaniment",
              "General administrative process explanation",
            ]}
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <FAQAccordion items={FAQS} />
      </div>

      {/* LARGE CTA */}
      <div className="mt-16 bg-gradient-to-r from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] p-10 md:p-14 rounded-[32px] text-center shadow-2xl relative overflow-hidden border border-[#C49A2A]/30">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#C49A2A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Not sure where to start?
          </h2>
          <p className="text-xs md:text-base text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us your situation and we&apos;ll help you identify exactly what
            administrative support you need in Saudi Arabia.
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

      {/* BACK TO SAUDI */}
      <div className="mt-12 pt-12 border-t border-[#2B103A]/10 text-center">
        <Link
          href="/saudi"
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 hover:text-[#C49A2A] transition-colors"
        >
          <span>← Back to Saudi Arabia Services</span>
        </Link>
      </div>
    </main>
  );
}
