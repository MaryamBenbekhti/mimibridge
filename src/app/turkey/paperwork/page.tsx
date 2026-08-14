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
} from "lucide-react";

// ────────────────────────────────────────────────────────────────
// SERVICES DATA
// ────────────────────────────────────────────────────────────────
const PAPERWORK_SERVICES = [
  {
    id: "rp1",
    title: "Residence Permit Assistance",
    price: "Starting from $50",
    icon: Shield,
    desc: "General guidance and practical support for navigating the residence permit (İkamet) process in Turkey.",
    features: [
      "General document checklist",
      "Help organizing documents",
      "Translation assistance",
      "Online application guidance",
      "Appointment guidance",
      "General process explanation",
      "Optional accompaniment",
    ],
    disclaimer:
      "Mimi Bridge provides administrative assistance and general guidance. This service is not legal advice or legal representation.",
    cta: "GET ASSISTANCE",
  },
  {
    id: "sd1",
    title: "Student Document Assistance",
    price: "Starting from $30",
    icon: FileCheck,
    desc: "Practical help for students managing university paperwork, enrollment documents, and official forms.",
    features: [
      "University document organization",
      "Enrollment paperwork guidance",
      "Student certificates assistance",
      "General form guidance",
      "Document organization",
      "Translation assistance",
    ],
    disclaimer: null,
    cta: "GET DOCUMENT HELP",
  },
  {
    id: "tn1",
    title: "Tax Number / Administrative Setup Guidance",
    price: "Starting from $25",
    icon: BadgeCheck,
    desc: "Step-by-step guidance for obtaining your Turkish Tax Identification Number (Vergi Numarası) and other basic administrative registrations.",
    features: [
      "Explain the general process",
      "Document checklist",
      "Appointment and location guidance",
      "Translation assistance",
      "Accompaniment if needed",
    ],
    disclaimer:
      "Mimi Bridge provides guidance and accompaniment. We do not issue government documents.",
    cta: "GET GUIDANCE",
  },
  {
    id: "aa1",
    title: "Appointment Assistance",
    price: "Starting from $20",
    icon: Calendar,
    desc: "Help preparing for and attending appointments with government offices, universities, banks, and other public or private institutions.",
    features: [
      "Appointment guidance",
      "Required-document checklist",
      "Translation assistance",
      "Optional accompaniment",
      "Help preparing questions and communications",
    ],
    disclaimer: null,
    cta: "BOOK SUPPORT",
  },
  {
    id: "dt1",
    title: "Document Translation & Organization",
    price: "Starting from $15",
    icon: Languages,
    desc: "Practical translation assistance and document organization to help you understand and manage Turkish paperwork.",
    features: [
      "Translation assistance",
      "Document organization",
      "Help understanding Turkish paperwork",
      "Checklist preparation",
      "Guidance on where documents may need to be submitted",
    ],
    disclaimer:
      "Translation assistance provided by Mimi Bridge is for general understanding. Officially sworn/certified translation is only provided when completed by a properly authorized professional.",
    cta: "GET TRANSLATION HELP",
  },
];

// ────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────
const FAQS: FAQItem[] = [
  {
    question: "Does Mimi Bridge provide legal advice?",
    answer:
      "No. Mimi Bridge provides general administrative assistance, translation, and practical guidance. We do not provide legal advice or legal representation. For legal matters, we can help connect you with appropriate licensed professionals.",
  },
  {
    question: "Can Mimi Bridge guarantee my residence permit approval?",
    answer:
      "No. Mimi Bridge assists with document organization, translation, and appointment preparation. The outcome of any government application is determined by the relevant Turkish authorities. We cannot guarantee approval.",
  },
  {
    question: "What documents do I need for a Turkish Tax Number?",
    answer:
      "Generally, you will need your passport. Our team will prepare a checklist specific to your situation and accompany you to the tax office if needed.",
  },
  {
    question: "Can you accompany me to a government appointment?",
    answer:
      "Yes. Our Appointment Assistance and Residence Permit Assistance services include optional accompaniment to help with communication, translation, and general guidance during your appointment.",
  },
  {
    question: "Is the translation assistance certified or sworn?",
    answer:
      "Our translation assistance is provided for general understanding purposes. If you require an officially certified or sworn translation for legal or government use, we can connect you with a properly authorized sworn translator.",
  },
];

// ────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────
export default function TurkeyPaperworkPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Turkey", href: "/turkey" },
          { label: "Paperwork & Administrative Assistance" },
        ]}
      />

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A2A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <FileCheck className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Turkey — Administrative Support</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Paperwork Is Easier With{" "}
            <span className="text-[#C49A2A]">Someone Beside You.</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Practical assistance for newcomers and students dealing with everyday
            administrative procedures in Turkey. We help with document
            organization, translation, appointment guidance, and general process
            support — not legal advice.
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
          Mimi Bridge provides general administrative assistance, translation,
          and practical guidance. We do not provide legal advice or guarantee
          government, visa, residency, or application outcomes. For legal
          matters, we can help connect you with licensed professionals.
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
                We focus on the practical side — getting you organized, informed,
                and prepared.
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
                Turkey Paperwork & Administrative Assistance
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
            badge="Turkey — Practical Guidance"
            ctaText="Request Administrative Help"
            features={[
              "Document checklist preparation",
              "Translation assistance for Turkish paperwork",
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
            paperwork support you need.
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
      <CrossNav currentPath="/turkey/paperwork" />
    </main>
  );
}
