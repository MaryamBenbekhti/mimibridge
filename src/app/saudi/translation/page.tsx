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
  Palmtree,
} from "lucide-react";

// LANGUAGE PAIRS
const LANGUAGE_PAIRS = [
  { id: "ar-en", label: "Arabic ↔ English", flag: "🇸🇦 ↔ 🇬🇧", desc: "Certified translation for Saudi ministries, corporate contracts, medical files, and embassies." },
  { id: "ar-tr", label: "Arabic ↔ Turkish", flag: "🇸🇦 ↔ 🇹🇷", desc: "Native linguists specializing in Saudi-Turkish trade agreements, academic records, and legal files." },
  { id: "ar-fr", label: "Arabic ↔ French", flag: "🇸🇦 ↔ 🇫🇷", desc: "Specialized translation for international business delegations, medical dossiers, and academic records." },
];

// CHOOSE SERVICE CARDS
const TRANSLATION_SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Hospital & Medical Interpretation",
    desc: "In-person or remote live medical interpreters for doctor consultations, hospital admissions, and surgical consent forms at top Saudi healthcare centers.",
    icon: Stethoscope,
    tags: ["Medical Interpreter", "In-Person / Phone"],
    relevantPersonas: ["family", "tourist", "parent"],
  },
  {
    id: "s2",
    title: "Saudi Ministry & Government Office",
    desc: "Bilingual companions for Jawazat (Passports), Ministry of Commerce, Balady, ZATCA, and Chamber of Commerce official appointments.",
    icon: Building2,
    tags: ["Jawazat Companion", "Govt Appointments"],
    relevantPersonas: ["new_student", "current_student", "family"],
  },
  {
    id: "s3",
    title: "University & Academic Translation",
    desc: "Certified translations of high school diplomas, university transcripts, syllabus documents, and certificates for Saudi Ministry of Education equivalency.",
    icon: GraduationCap,
    tags: ["Academic Translation", "Study in Saudi"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "s4",
    title: "Ejar & Real Estate Contracts",
    desc: "Accurate translation and clause explanations for Saudi Ejar rental contracts, compound leases, and commercial property agreements.",
    icon: Home,
    tags: ["Ejar Contracts", "Tenant Rights"],
    relevantPersonas: ["current_student", "family", "business"],
  },
  {
    id: "s5",
    title: "Corporate & Trade Summit Interpretation",
    desc: "Consecutive and simultaneous interpreters for corporate negotiations, investor meetings, factory visits, and global summits (LEAP, FII Riyadh).",
    icon: Briefcase,
    tags: ["Corporate Interpreter", "B2B Negotiations"],
    relevantPersonas: ["business"],
  },
  {
    id: "s6",
    title: "Phone Call & Concierge Assistance",
    desc: "Instant live phone call interpretation for scheduling appointments, communicating with landlords, resolving deliveries, and local inquiries.",
    icon: Phone,
    tags: ["On-Demand Call", "Instant Live Support"],
    relevantPersonas: ["new_student", "tourist", "current_student"],
  },
  {
    id: "s7",
    title: "Legal Powers of Attorney & MOJ",
    desc: "Certified translations of legal powers of attorney (Tawkeel), Ministry of Justice (Najiz) documentation, commercial registry (CR), and affidavits.",
    icon: Scale,
    tags: ["Legal Certified", "Najiz Stamp"],
    relevantPersonas: ["business", "family"],
  },
  {
    id: "s8",
    title: "MOFA & Chamber Attestation",
    desc: "Handling Saudi Ministry of Foreign Affairs (MOFA) attestation procedures, Chamber of Commerce stamps, and legalization requirements.",
    icon: FileCheck2,
    tags: ["MOFA Stamp", "Chamber of Commerce"],
    relevantPersonas: ["new_student", "business", "family"],
  },
  {
    id: "s9",
    title: "Certified Sworn Translation",
    desc: "Officially stamped written translation accepted across all Saudi government entities, embassies, universities, and banks.",
    icon: FileText,
    tags: ["Official Seal", "Fast Turnaround"],
    relevantPersonas: ["new_student", "current_student", "business"],
  },
  {
    id: "s10",
    title: "Live On-Ground Interpreter Escort",
    desc: "Dedicated personal bilingual companion accompanying you for full-day or half-day business, academic, or administrative errands in Riyadh & Jeddah.",
    icon: UserCheck,
    tags: ["Full-Day Companion", "On-Ground Escort"],
    relevantPersonas: ["tourist", "parent", "business", "family"],
  },
];

// PRICING CARDS
const TRANSLATION_PRICING = [
  {
    title: "Quick Translation",
    price: "Starting from $20",
    unit: "30 min",
    description: "Quick language assistance for everyday situations across Saudi Arabia.",
    features: [
      "Phone calls with landlords or banks",
      "WhatsApp & email translation",
      "University administration communication",
      "Courier & delivery coordination",
      "Everyday interactions and inquiries",
    ],
    languages: "Arabic ↔ English | Arabic ↔ Turkish | Arabic ↔ French",
    buttonText: "BOOK TRANSLATION",
    popular: false,
  },
  {
    title: "Translation Companion",
    price: "Starting from $45",
    unit: "per hour",
    description: "Personal language assistance when you need a dedicated interpreter beside you.",
    features: [
      "University registrar & campus visits",
      "Apartment & compound viewings",
      "Saudi bank account opening visits",
      "Government office appointments",
      "Real-time Arabic ↔ English/Turkish interpretation",
    ],
    disclaimer: "Mimi Bridge provides language assistance and interpretation. This service does not include legal representation or medical diagnoses.",
    buttonText: "BOOK COMPANION",
    popular: true,
  },
  {
    title: "Extended Interpretation Support",
    price: "Starting from $90",
    unit: "2 hours",
    description: "Comprehensive language support for extended corporate meetings, hospital visits, or delegations.",
    features: [
      "Up to 2 full hours of on-site interpretation",
      "Accompaniment to multiple nearby locations",
      "Real-time contract & document review during the session",
      "Facilitation of high-level B2B discussions",
      "Follow-up written translation summary",
    ],
    buttonText: "BOOK EXTENDED SUPPORT",
    popular: false,
  },
];

// TIMELINE
const TRANSLATION_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "Select Language & Service", description: "Choose document type, language pair, or interpreter escort." },
  { stepNumber: 2, title: "Submit File or Booking", description: "Upload digital copies or pick your requested date & time in KSA." },
  { stepNumber: 3, title: "Certified Translation", description: "Licensed Arabic linguists execute precise, accredited translation." },
  { stepNumber: 4, title: "Attestation & Legalization", description: "Official MOFA or Chamber of Commerce stamps applied if required." },
  { stepNumber: 5, title: "Express Delivery / Escort", description: "Digital PDF & express courier delivery, or companion arrival." },
];

// FAQS
const FAQS: FAQItem[] = [
  {
    question: "What is certified translation in Saudi Arabia?",
    answer: "Certified translation in Saudi Arabia is performed by licensed translation bureaus and accredited linguists whose stamps are officially recognized by Saudi ministries (such as MOFA, Ministry of Commerce, Ministry of Justice, and universities). We guarantee compliance with Saudi official standards.",
  },
  {
    question: "Are your translations accepted by Saudi Universities and the Ministry of Education?",
    answer: "Yes, 100%. Our academic document translations carry official accreditation accepted by the Ministry of Education, 'Study in Saudi' portal, and all public and private Saudi universities.",
  },
  {
    question: "How fast can I receive translated documents in Saudi Arabia?",
    answer: "Standard document translations are completed within 24 hours. Express same-day delivery (within 4-6 hours) is available for urgent embassy, medical, or administrative deadlines.",
  },
  {
    question: "Can an interpreter accompany me to Saudi government offices or corporate summits?",
    answer: "Yes. Our professional bilingual interpreters accompany clients across Riyadh, Jeddah, Dammam, and other major cities for business summits (LEAP, FII), medical appointments, and government meetings.",
  },
];

// TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sultan Al-Otaibi",
    role: "Commercial Delegation Lead",
    cityOrUni: "Riyadh Exhibition Center (LEAP)",
    quote: "Mimi Bridge provided exceptional Turkish-Arabic interpreters for our corporate meetings in Riyadh. Seamless communication, high business acumen, and total professionalism.",
    rating: 5,
  },
  {
    name: "Hala Mansoor",
    role: "Medical Visitor",
    cityOrUni: "King Faisal Specialist Hospital",
    quote: "Having an attentive interpreter by our side for specialist medical consultations in Riyadh gave our family clarity and comfort every step of the way.",
    rating: 5,
  },
  {
    name: "Murat Yılmaz",
    role: "Postgraduate Researcher",
    cityOrUni: "King Saud University",
    quote: "Fastest certified translation and MOFA attestation for my master's degree and transcripts. Received the stamped files in Riyadh within 24 hours.",
    rating: 5,
  },
];

export default function SaudiTranslationPage() {
  const [activePersona, setActivePersona] = useState<PersonaType | null>(null);
  const [selectedLangPair, setSelectedLangPair] = useState("ar-en");
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
      <Breadcrumbs items={[{ label: "Saudi Arabia", href: "/saudi" }, { label: "Translation Services" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Certified Linguistic Support — Saudi Arabia</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Translation & Interpretation in <span className="text-emerald-400">Saudi Arabia</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Certified Arabic translation, MOFA attestation guidance, and on-ground bilingual companions for students, corporate delegations, medical visits, and official appointments across the Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking-calendar"
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Book Interpreter / Translation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Upload Document for Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* LANGUAGE PAIRS SECTION */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
            Certified Linguistic Coverage
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A]">
            Primary Language Pairs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LANGUAGE_PAIRS.map((pair) => (
            <div
              key={pair.id}
              onClick={() => setSelectedLangPair(pair.id)}
              className={`p-6 rounded-[20px] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                selectedLangPair === pair.id
                  ? "bg-white/80 border-emerald-600 ring-2 ring-emerald-500/30 shadow-lg scale-[1.02]"
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 hover:border-emerald-600 shadow-sm"
              }`}
            >
              <div>
                <div className="text-2xl mb-2">{pair.flag}</div>
                <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-1">{pair.label}</h3>
                <p className="text-xs text-[#2B103A]/70 leading-relaxed">{pair.desc}</p>
              </div>
              <div className="mt-4 flex items-center space-x-1.5 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Certified & Government Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SMART PERSONA SELECTOR */}
      <PersonaSelector onPersonaChange={(p) => setActivePersona(p)} />

      {/* MAIN TWO-COLUMN CONTENT AREA WITH STICKY SIDEBAR ON DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-16">
          {/* CHOOSE SERVICE */}
          <ServiceGrid
            title="Translation & Interpretation Services"
            subtitle="Explore our specialized services tailored for everyday, academic, medical, and corporate needs in Saudi Arabia"
            items={TRANSLATION_SERVICES}
            activePersona={activePersona}
          />

          {/* TIMELINE */}
          <ProcessTimeline
            title="How Our Translation Desk Works"
            subtitle="From initial document submission to certified delivery or on-site companion arrival"
            steps={TRANSLATION_TIMELINE}
          />
        </div>

        {/* STICKY SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Saudi Linguistic Desk"
            badge="Accredited Translators"
            ctaText="Request Custom Translation"
            features={[
              "Accredited Arabic, English & Turkish linguists",
              "Saudi MOFA & Chamber legalization support",
              "Express same-day delivery available (4-6h)",
              "On-ground escorts in Riyadh, Jeddah & Dammam",
            ]}
          />
        </div>
      </div>

      {/* INTERACTIVE BOOKING CALENDAR & ESTIMATOR SECTION */}
      <div id="booking-calendar" className="mt-20 bg-white/50 backdrop-blur-md border border-emerald-600/20 rounded-[32px] p-8 md:p-12 shadow-xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Reservation</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
              Book an Interpreter or Translation
            </h2>
            <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
              Select your required service, language pair, and date to schedule on-ground or digital assistance.
            </p>
          </div>

          {bookingSubmitted ? (
            <div className="bg-emerald-950 text-[#EFE7DA] p-8 rounded-[24px] text-center border border-emerald-500/30">
              <ShieldCheck className="w-12 h-12 text-[#C49A2A] mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold mb-2">Booking Request Received!</h3>
              <p className="text-xs text-[#EFE7DA]/80 max-w-md mx-auto mb-6">
                Our Saudi translation desk will contact you via WhatsApp within 30 minutes to confirm your assigned interpreter or document workflow.
              </p>
              <button
                onClick={() => setBookingSubmitted(false)}
                className="bg-[#C49A2A] text-[#2B103A] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A] mb-2">
                    Language Pair
                  </label>
                  <select
                    value={selectedLangPair}
                    onChange={(e) => setSelectedLangPair(e.target.value)}
                    className="w-full bg-white border border-[#2B103A]/20 rounded-[12px] p-3 text-xs text-[#2B103A] focus:outline-none focus:border-emerald-600"
                  >
                    <option value="ar-en">Arabic ↔ English (🇸🇦 ↔ 🇬🇧)</option>
                    <option value="ar-tr">Arabic ↔ Turkish (🇸🇦 ↔ 🇹🇷)</option>
                    <option value="ar-fr">Arabic ↔ French (🇸🇦 ↔ 🇫🇷)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A] mb-2">
                    Required Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-[#2B103A]/20 rounded-[12px] p-3 text-xs text-[#2B103A] focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Government Office">Saudi Government Office / Jawazat Escort</option>
                    <option value="Hospital & Medical">Hospital & Medical Consultation</option>
                    <option value="University & Academic">University & Academic Translation</option>
                    <option value="Ejar & Real Estate">Ejar / Real Estate Contract Translation</option>
                    <option value="Business Meeting">Corporate Meeting & Summit Interpretation</option>
                    <option value="Document Notarization">MOFA & Legal Attestation</option>
                    <option value="Phone Assistance">Phone Call / Remote Assistance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A] mb-2">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Preferred Date</span>
                    </span>
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-white border border-[#2B103A]/20 rounded-[12px] p-3 text-xs text-[#2B103A] focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A] mb-2">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Preferred Time</span>
                    </span>
                  </label>
                  <input
                    type="time"
                    required
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full bg-white border border-[#2B103A]/20 rounded-[12px] p-3 text-xs text-[#2B103A] focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A] mb-2">
                  City / Location in Saudi Arabia
                </label>
                <input
                  type="text"
                  placeholder="e.g., Riyadh (KAFD / King Saud Uni), Jeddah, Dammam, or Remote"
                  className="w-full bg-white border border-[#2B103A]/20 rounded-[12px] p-3 text-xs text-[#2B103A] focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-emerald-950 text-[#EFE7DA] text-xs font-bold uppercase tracking-widest hover:bg-emerald-900 transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Confirm & Reserve Booking</span>
                <Send className="w-3.5 h-3.5 text-[#C49A2A]" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* PRICING PACKAGES */}
      <div className="mt-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
            Transparent Rates
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
            Interpretation & Language Packages
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
            Clear, upfront pricing with no hidden charges for services across the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRANSLATION_PRICING.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl scale-[1.03] ring-2 ring-[#C49A2A]"
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-emerald-600"
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="bg-[#C49A2A] text-[#2B103A] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full inline-block mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif font-bold text-xl mb-1">{pkg.title}</h3>
                <div className="flex items-baseline space-x-1.5 mb-2">
                  <span className={`font-serif text-2xl font-bold ${pkg.popular ? "text-[#C49A2A]" : "text-[#2B103A]"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-xs ${pkg.popular ? "text-[#EFE7DA]/70" : "text-[#2B103A]/60"}`}>
                    / {pkg.unit}
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

                {pkg.disclaimer && (
                  <p className={`text-[10px] italic mb-6 leading-relaxed ${pkg.popular ? "text-[#EFE7DA]/60" : "text-[#2B103A]/60"}`}>
                    {pkg.disclaimer}
                  </p>
                )}
              </div>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md block ${
                  pkg.popular
                    ? "bg-[#C49A2A] text-[#2B103A] hover:bg-[#d6aa35]"
                    : "bg-[#2B103A] text-[#EFE7DA] hover:bg-[#2B103A]/90"
                }`}
              >
                {pkg.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* FAQ */}
      <FAQAccordion items={FAQS} />

      {/* CROSS-NAV */}
      <CrossNav currentPath="/saudi/translation" country="saudi" />
    </main>
  );
}
