"use client";

import React, { useState } from "react";
import Link from "next/link";
import PersonaSelector, { PersonaType } from "@/components/PersonaSelector";
import ServiceGrid, { ServiceItem } from "@/components/ServiceGrid";
import CrossNav from "@/components/CrossNav";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import StickySidebar from "@/components/UI/StickySidebar";
import FAQAccordion, { FAQItem } from "@/components/UI/FAQAccordion";
import TestimonialsSection, { Testimonial } from "@/components/UI/TestimonialsSection";
import ProcessTimeline, { TimelineStep } from "@/components/UI/ProcessTimeline";
import {
  Languages,
  Globe2,
  Calendar,
  Clock,
  Building2,
  Stethoscope,
  GraduationCap,
  Home,
  Briefcase,
  Phone,
  FileCheck2,
  Scale,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileText,
  UserCheck,
  Send,
} from "lucide-react";

// LANGUAGE PAIRS
const LANGUAGE_PAIRS = [
  { id: "ar-tr", label: "Arabic ↔ Turkish", flag: "🇸🇦 ↔ 🇹🇷", desc: "Native sworn translators for Arabic & Turkish legal, medical, and academic documents." },
  { id: "en-tr", label: "English ↔ Turkish", flag: "🇬🇧 ↔ 🇹🇷", desc: "Certified English sworn translators for international agreements, transcripts, and embassies." },
  { id: "fr-tr", label: "French ↔ Turkish", flag: "🇫🇷 ↔ 🇹🇷", desc: "Specialized French sworn translation for North African & Francophone students and travelers." },
];

// CHOOSE SERVICE CARDS
const TRANSLATION_SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Hospital & Medical",
    desc: "In-person or remote live medical interpreters for doctors' consultations, hospital admissions, and surgical consent forms.",
    icon: Stethoscope,
    tags: ["Medical Interpreter", "In-Person / Phone"],
    relevantPersonas: ["family", "tourist", "parent"],
  },
  {
    id: "s2",
    title: "Government Office",
    desc: "In-person translator for Immigration Directorate (Göç İdaresi), Tax Office (Vergi Dairesi), and Civil Registry (Nüfus) appointments.",
    icon: Building2,
    tags: ["Ikamet Companion", "Govt Appointments"],
    relevantPersonas: ["new_student", "current_student", "family"],
  },
  {
    id: "s3",
    title: "Apartment & Real Estate",
    desc: "Translation of Turkish lease contracts, utility agreements, and land registry (Tapu) documentation.",
    icon: Home,
    tags: ["Lease Contracts", "Tenant Support"],
    relevantPersonas: ["current_student", "family", "business"],
  },
  {
    id: "s4",
    title: "Phone Call Assistance",
    desc: "Instant live phone call interpretation for setting up appointments, inquiring with landlords, or resolving customer service issues.",
    icon: Phone,
    tags: ["On-Demand Call", "Instant Live Support"],
    relevantPersonas: ["new_student", "tourist", "current_student"],
  },
  {
    id: "s5",
    title: "Notary Legalization",
    desc: "Handling official Turkish Notary (Noter) legalization stamps and governorate Apostille validation for translated files.",
    icon: FileCheck2,
    tags: ["Noter Seal", "Apostille Stamp"],
    relevantPersonas: ["new_student", "business", "family"],
  },
];

// PRICING CARDS
const TRANSLATION_PRICING = [
  {
    title: "Quick Translation",
    price: "Starting from $15",
    unit: "30 min",
    description: "Quick language assistance for everyday situations.",
    features: [
      "Phone calls",
      "WhatsApp messages",
      "Landlord communication",
      "University communication",
      "Everyday conversations",
    ],
    languages: "Arabic ↔ Turkish | English ↔ Turkish | French ↔ Turkish",
    buttonText: "BOOK TRANSLATION",
    popular: false,
  },
  {
    title: "Translation Companion",
    price: "Starting from $40",
    unit: "per hour",
    description: "Personal language assistance when you need someone with you.",
    features: [
      "University appointments",
      "Apartment viewings",
      "Bank visits",
      "Store visits",
      "General appointments",
      "Real-time Turkish ↔ English/Arabic/French interpretation",
    ],
    disclaimer: "Mimi Bridge provides language assistance and interpretation. This service does not include legal representation or professional medical advice.",
    buttonText: "BOOK COMPANION",
    popular: true,
  },
  {
    title: "Extended Translation Support",
    price: "Starting from $80",
    unit: "2 hours",
    description: "Extended language assistance for situations that require more time.",
    features: [
      "Up to 2 hours of interpretation",
      "Multiple locations if nearby",
      "Message translation during the session",
      "Help communicating with local businesses or institutions",
      "Follow-up language assistance",
    ],
    buttonText: "BOOK SUPPORT",
    popular: false,
  },
];

// TIMELINE
const TRANSLATION_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "Select Language & Service", description: "Choose document type, language pair, or interpreter escort." },
  { stepNumber: 2, title: "Submit File or Booking", description: "Upload digital copies or pick your requested date & time." },
  { stepNumber: 3, title: "Sworn Translation", description: "Licensed sworn linguist executes precise translation." },
  { stepNumber: 4, title: "Notary & Apostille", description: "Official Noter seal and Apostille added if required." },
  { stepNumber: 5, title: "Delivery / Escort", description: "Express courier file delivery or on-ground companion arrival." },
];

// FAQS
const FAQS: FAQItem[] = [
  {
    question: "What is the difference between sworn translation and notary legalization?",
    answer: "A sworn translation is performed by a licensed Turkish translator registered with a notary public and bears their official seal. Notary legalization involves taking the sworn translation to a Turkish Notary Public (Noter) for secondary state endorsement, which is mandatory for official residence permit applications, court cases, and marriage licenses.",
  },
  {
    question: "Are your translations accepted by Turkish Universities and the Ministry of Education?",
    answer: "Yes, 100%. All our academic document translations carry official sworn stamps that comply with Turkish Council of Higher Education (YÖK) and Ministry of National Education (MEB Denklik) requirements.",
  },
  {
    question: "How fast can I receive my translated documents?",
    answer: "Standard written translations are completed within 24 hours. Express same-day service (within 4-6 hours) is available for urgent hospital or immigration appointments.",
  },
  {
    question: "Can an interpreter accompany me to my residence permit (Ikamet) appointment?",
    answer: "Absolutely. Immigration officers often require foreigners to bring a qualified bilingual companion. Our sworn interpreters accompany you directly to the Göç İdaresi office to ensure all questions are answered smoothly.",
  },
];

// TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Khaled Al-Sayed",
    role: "Business Investor",
    cityOrUni: "Istanbul Commercial Court",
    quote: "Mimi Bridge provided an exceptional sworn business interpreter for our notary contract signing in Levent. Impeccable accuracy and professional demeanor.",
    rating: 5,
  },
  {
    name: "Nouran Mansour",
    role: "Medical Visitor",
    cityOrUni: "Florence Nightingale Hospital",
    quote: "Having a live medical interpreter by our side during my mother's surgery consultations made us feel completely supported and understood.",
    rating: 5,
  },
  {
    name: "Youssef Ibrahim",
    role: "Master's Student",
    cityOrUni: "Ankara University",
    quote: "Fastest sworn translation of my bachelor's transcript and diploma notarization. The files were delivered to my door in Ankara in under 24 hours.",
    rating: 5,
  },
];

export default function TranslationPage() {
  const [activePersona, setActivePersona] = useState<PersonaType | null>(null);
  const [selectedLangPair, setSelectedLangPair] = useState("ar-tr");
  const [selectedService, setSelectedService] = useState("Government Office");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("booking-calendar");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMB */}
      <Breadcrumbs items={[{ label: "Turkey", href: "/turkey" }, { label: "Certified Translation" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <Languages className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Certified Legal & Medical Linguists</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Certified Translation & <span className="text-[#C49A2A]">Interpretation</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Professional language support for students, families, tourists and businesses across Turkey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking-calendar"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg cursor-pointer"
            >
              <span>Book Translation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>View Pricing</span>
            </a>
          </div>
        </div>
      </div>

      {/* SMART PERSONA SELECTOR */}
      <PersonaSelector onPersonaChange={(p) => setActivePersona(p)} />

      {/* CHOOSE LANGUAGE SECTION */}
      <section className="mb-16">
        <div className="mb-8 text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
            Linguistic Pairs
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Choose Language</h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
            Native sworn translators specialized in bi-directional legal and commercial translation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LANGUAGE_PAIRS.map((pair) => {
            const isSelected = selectedLangPair === pair.id;
            return (
              <div
                key={pair.id}
                onClick={() => setSelectedLangPair(pair.id)}
                className={`p-6 rounded-[24px] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${isSelected
                    ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl scale-[1.02] ring-2 ring-[#C49A2A]"
                    : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{pair.flag}</span>
                    {isSelected && (
                      <span className="bg-[#C49A2A] text-[#2B103A] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Active</span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-2">{pair.label}</h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? "text-[#EFE7DA]/80" : "text-[#2B103A]/70"}`}>
                    {pair.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TWO COLUMN GRID WITH STICKY SIDEBAR ON DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-16">
          {/* CHOOSE SERVICE SECTION */}
          <ServiceGrid
            title="Choose Service"
            subtitle="Select the specific domain or environment where you require translation or interpretation"
            items={TRANSLATION_SERVICES}
            activePersona={activePersona}
          />

          {/* BOOKING CALENDAR SECTION */}
          <section id="booking-calendar" className="bg-white/50 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-[#2B103A]/10 shadow-xl">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                <Calendar className="w-4 h-4" />
                <span>Instant Scheduling</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Booking Calendar</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Schedule your sworn written translation or reserve an on-site interpreter companion.
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="bg-[#2B103A] text-[#EFE7DA] p-8 rounded-[24px] text-center border border-[#C49A2A]/40 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-[#C49A2A] mx-auto mb-3" />
                <h3 className="font-serif font-bold text-2xl mb-2">Translation Request Reserved!</h3>
                <p className="text-xs md:text-sm text-[#EFE7DA]/80 max-w-md mx-auto leading-relaxed mb-6">
                  We have assigned your booking for <span className="text-[#C49A2A] font-bold">{selectedService}</span> ({selectedLangPair.toUpperCase()}) on {bookingDate || "selected date"} at {bookingTime || "selected time"}.
                </p>
                <button
                  onClick={() => setBookingSubmitted(false)}
                  className="bg-[#C49A2A] text-[#2B103A] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35]"
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/70 block mb-2">
                      Selected Language Pair
                    </label>
                    <select
                      value={selectedLangPair}
                      onChange={(e) => setSelectedLangPair(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-3 text-sm text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    >
                      <option value="ar-tr">Arabic ↔ Turkish</option>
                      <option value="en-tr">English ↔ Turkish</option>
                      <option value="fr-tr">French ↔ Turkish</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/70 block mb-2">
                      Selected Domain / Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-3 text-sm text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    >
                      <option value="Hospital & Medical">Hospital & Medical</option>
                      <option value="Government Office">Government Office</option>
                      <option value="University & Equivalence">University & Equivalence</option>
                      <option value="Apartment & Real Estate">Apartment & Real Estate</option>
                      <option value="Business Meeting">Business Meeting</option>
                      <option value="Phone Call Assistance">Phone Call Assistance</option>
                      <option value="Court Documents">Court Documents</option>
                      <option value="Notary Legalization">Notary Legalization</option>
                      <option value="Certified Sworn Translation">Certified Sworn Translation</option>
                      <option value="Live Interpretation Escort">Live Interpretation Escort</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/70 block mb-2 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C49A2A]" />
                      <span>Choose Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-3 text-sm text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/70 block mb-2 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-[#C49A2A]" />
                      <span>Choose Time</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-3 text-sm text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2B103A] text-[#EFE7DA] py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#2B103A]/90 transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Translation</span>
                  <Send className="w-4 h-4 text-[#C49A2A]" />
                </button>
              </form>
            )}
          </section>

          {/* TIMELINE */}
          <ProcessTimeline
            title="Translation Workflow"
            subtitle="From initial document review to final sworn certification and interpreter companion dispatch"
            steps={TRANSLATION_TIMELINE}
          />
        </div>

        {/* STICKY SIDEBAR ON DESKTOP */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Instant Translation Advisory"
            badge="Licensed Sworn Translators"
            ctaText="Request Fast Quote"
            features={[
              "Official sworn stamp valid across all 81 Turkish provinces",
              "Turkish Notary (Noter) & Apostille authorization",
              "Bilingual live companions for Göç İdaresi & Hospitals",
              "24/7 urgent document processing available",
            ]}
          />
        </div>
      </div>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-16 border-t border-[#2B103A]/10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
            Language Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
            Translation & Interpretation Services
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
            Language assistance when everyday communication gets difficult.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRANSLATION_PRICING.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${pkg.popular
                  ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl scale-[1.03] ring-2 ring-[#C49A2A]"
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
                }`}
            >
              <div>
                {pkg.popular && (
                  <span className="bg-[#C49A2A] text-[#2B103A] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif font-bold text-xl mb-1">{pkg.title}</h3>
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className={`font-serif text-2xl font-bold ${pkg.popular ? "text-[#C49A2A]" : "text-[#2B103A]"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-[11px] ${pkg.popular ? "text-[#EFE7DA]/70" : "text-[#2B103A]/60"}`}>
                    /{pkg.unit}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? "text-[#EFE7DA]/75" : "text-[#2B103A]/70"}`}>
                  {pkg.description}
                </p>

                <ul className="space-y-2.5 text-xs mb-6 border-t pt-4 border-current/10">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C49A2A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {pkg.languages && (
                  <div className={`text-[10px] font-semibold mb-4 p-2.5 rounded-xl border ${pkg.popular ? "bg-[#EFE7DA]/10 border-[#EFE7DA]/20 text-[#EFE7DA]" : "bg-[#2B103A]/5 border-[#2B103A]/10 text-[#2B103A]"}`}>
                    {pkg.languages}
                  </div>
                )}

                {pkg.disclaimer && (
                  <p className={`text-[10px] italic mb-6 leading-relaxed ${pkg.popular ? "text-[#EFE7DA]/60" : "text-[#2B103A]/60"}`}>
                    {pkg.disclaimer}
                  </p>
                )}
              </div>

              <Link
                href="/journey-planner"
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md block ${pkg.popular
                    ? "bg-[#C49A2A] text-[#2B103A] hover:bg-[#d6aa35]"
                    : "bg-[#2B103A] text-[#EFE7DA] hover:bg-[#2B103A]/90"
                  }`}
              >
                {pkg.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* FAQ */}
      <FAQAccordion items={FAQS} />

      {/* LARGE CTA */}
      <div className="mt-16 bg-gradient-to-r from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] p-10 md:p-14 rounded-[32px] text-center shadow-2xl relative overflow-hidden border border-[#C49A2A]/30">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Not sure which service you need?
        </h2>
        <p className="text-xs md:text-base text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Tell Mimi about your journey and we&apos;ll help you choose.
        </p>
        <Link
          href="/journey-planner"
          className="inline-flex items-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-xl hover:scale-105"
        >
          <span>TELL US WHAT YOU NEED</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* CROSS-NAVIGATION */}
      <CrossNav currentPath="/turkey/translation" />
    </main>
  );
}