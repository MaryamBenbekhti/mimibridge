"use client";

import React, { useState } from "react";
import Link from "next/link";
import ServiceGrid, { ServiceItem } from "@/components/ServiceGrid";
import CrossNav from "@/components/CrossNav";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import StickySidebar from "@/components/UI/StickySidebar";
import FAQAccordion, { FAQItem } from "@/components/UI/FAQAccordion";
import TestimonialsSection, { Testimonial } from "@/components/UI/TestimonialsSection";
import ProcessTimeline, { TimelineStep } from "@/components/UI/ProcessTimeline";
import {
  GraduationCap,
  Plane,
  Home,
  Smartphone,
  CreditCard,
  MapPin,
  BookOpen,
  Languages,
  Calendar,
  FileText,
  Building,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  Clock,
  HeartHandshake,
  FileCheck2,
  Send,
  UserCheck,
} from "lucide-react";

// SECTION 1: ARRIVAL & SETUP SERVICES (NEW STUDENTS)
const NEW_STUDENT_SERVICES: ServiceItem[] = [
  {
    id: "ns1",
    title: "Airport Arrival & Transfer",
    desc: "Personal student guide greeting you inside terminal arrivals (IST, SAW, ESB) with direct private transit to your dormitory or apartment.",
    icon: Plane,
    tags: ["Flight Tracking", "Terminal Greeting"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns2",
    title: "Student Housing & Dorm Help",
    desc: "Assistance finding verified student residences, reviewing lease terms, room walkthroughs, and checking heating/wifi setup.",
    icon: Home,
    tags: ["Dorm Inspection", "Lease Review"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns3",
    title: "SIM Card & Connectivity",
    desc: "Instant activation of a Turkish student SIM card (Turkcell, Vodafone) with high-speed data so you are connected from day one.",
    icon: Smartphone,
    tags: ["Student Rates", "Instant 5G"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns4",
    title: "Istanbulkart Transit Card",
    desc: "Setting up your discounted Student Transit Card (Istanbulkart/Ankarakart) for seamless subway, tram, bus, and ferry access.",
    icon: CreditCard,
    tags: ["Discount Transit", "Full City Access"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns5",
    title: "University Registration Escort",
    desc: "Bilingual accompaniment to your university student affairs office (Öğrenci İşleri) for registration, student ID, and course setup.",
    icon: BookOpen,
    tags: ["Campus Escort", "Student ID"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns6",
    title: "Neighborhood & Bank Orientation",
    desc: "Practical introduction to your local campus area: opening a student bank account, finding markets, clinics, and study cafes.",
    icon: MapPin,
    tags: ["Bank Account", "Local Guide"],
    relevantPersonas: ["new_student"],
  },
];

// SECTION 2: ACADEMIC & DAILY LIVING SERVICES (CURRENT STUDENTS)
const CURRENT_STUDENT_SERVICES: ServiceItem[] = [
  {
    id: "cs1",
    title: "University Bureaucracy Support",
    desc: "Help navigating university administration, equivalence (Denklik) paperwork, transcript requests, and official faculty letters.",
    icon: FileText,
    tags: ["Academic Paperwork", "Denklik Prep"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs2",
    title: "Live Translation & Appointments",
    desc: "On-call or in-person Turkish translation for hospital visits, tax office appointments, notary notarization, or landlord calls.",
    icon: Languages,
    tags: ["Live Translation", "Appointment Support"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs3",
    title: "Student Residence Permit (İkamet)",
    desc: "Step-by-step checklist, document organization, student certificate verification, and appointment booking support for Göç İdaresi.",
    icon: Shield,
    tags: ["İkamet Guidance", "Document Checklist"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs4",
    title: "Housing & Landlord Assistance",
    desc: "Help resolving issues with apartment maintenance, utility bills (Doğalgaz, Su, Elektrik), deposit returns, or contract extensions.",
    icon: Building,
    tags: ["Utility Setup", "Landlord Mediation"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs5",
    title: "Medical & Insurance Guidance",
    desc: "Guidance on student health insurance (GSS / private insurance), finding English-speaking clinics, and navigating local pharmacies.",
    icon: HeartHandshake,
    tags: ["Health Insurance", "Clinic Guidance"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs6",
    title: "Academic Life & City Mentorship",
    desc: "Peer advice from senior international students on course electives, internship networking, and student community life in Turkey.",
    icon: GraduationCap,
    tags: ["Senior Mentorship", "Student Network"],
    relevantPersonas: ["current_student"],
  },
];

// SECTION 3: STUDENT PACKAGES
const STUDENT_PACKAGES = [
  {
    title: "Essential Arrival",
    price: "Starting from $35",
    description: "Crucial first-day essentials for international students landing in Turkey.",
    features: [
      "Airport meet & greet inside terminal",
      "Turkish student SIM card setup",
      "Discount student transit card (Istanbulkart)",
      "Neighborhood orientation guide",
      "Emergency local student hotline",
      "Essential student checklist PDF",
    ],
    buttonText: "BOOK ARRIVAL BUNDLE",
    popular: false,
  },
  {
    title: "Complete Relocation & Campus Setup",
    price: "Starting from $75",
    unit: "first week",
    description: "Comprehensive hands-on support for your entire first week of university life.",
    features: [
      "Airport pickup & transit to accommodation",
      "Student housing walkthrough & contract check",
      "Turkish SIM card & high-speed data setup",
      "Student transit card registration",
      "University campus registration accompaniment",
      "Student bank account opening guidance",
      "7-day dedicated on-call chat support",
    ],
    buttonText: "GET COMPLETE SETUP",
    popular: true,
  },
  {
    title: "Full Semester On-Ground Concierge",
    price: "Starting from $140",
    unit: "semester",
    description: "Continuous on-ground support throughout your academic term for total peace of mind.",
    features: [
      "Full Arrival & Relocation package included",
      "Student Residence Permit (İkamet) guidance",
      "5 in-person appointment translation escorts",
      "Utility & landlord communication support",
      "Academic paperwork & translation guidance",
      "Dedicated senior student mentor assigned",
      "Priority response for urgent local needs",
    ],
    buttonText: "JOIN SEMESTER CONCIERGE",
    popular: false,
  },
];

// SECTION 4: TIMELINE
const STUDENT_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "Pre-Arrival Consultation", description: "Document check, accommodation advice, and airport arrival scheduling." },
  { stepNumber: 2, title: "Airport Reception & Transfer", description: "Personal student guide welcomes you and escorts you to your housing." },
  { stepNumber: 3, title: "SIM, Transit & Essentials", description: "Connect phone lines, activate student transit pass, and explore your neighborhood." },
  { stepNumber: 4, title: "Campus Registration Day", description: "Bilingual accompaniment to university student affairs to complete enrollment." },
  { stepNumber: 5, title: "Ongoing Term Mentorship", description: "Support with residence permits (İkamet), everyday translation, and student life." },
];

// SECTION 5: FAQS
const FAQS: FAQItem[] = [
  {
    question: "When should I arrange arrival and student services?",
    answer: "We recommend booking at least 3 to 5 days before your flight so our local student guide can coordinate your airport greeting, prep your transit card, and arrange housing walkthroughs in advance.",
  },
  {
    question: "Do you help with the Turkish student residence permit (İkamet)?",
    answer: "Yes! We provide complete administrative guidance: organizing required forms, student certificates (Öğrenci Belgesi), health insurance, and step-by-step appointment preparation for the Directorate of Migration Management (Göç İdaresi).",
  },
  {
    question: "Can someone accompany me to my university registration?",
    answer: "Absolutely. Our local student guides speak Turkish, English, and Arabic, and will accompany you directly to your university's Student Affairs (Öğrenci İşleri) to ensure your enrollment proceeds smoothly.",
  },
  {
    question: "Can you help me find private student housing or a dorm room?",
    answer: "Yes, we help students evaluate verified private dormitories and furnished student apartments close to major campuses in Istanbul, Ankara, Trabzon, and Karabük.",
  },
  {
    question: "Are your guides fellow international university students?",
    answer: "Yes! Mimi Bridge was founded by international students who have lived through the exact same journey. You get practical, honest, and friendly peer support from people who actually know campus life.",
  },
];

// SECTION 6: TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Youssef El-Mansouri",
    role: "Engineering Student",
    cityOrUni: "Istanbul Technical University (İTÜ)",
    quote: "Landing in Istanbul without speaking Turkish was scary, but having Mimi Bridge meet me at IST airport and set up my Istanbulkart and SIM in an hour made my entire university transition smooth.",
    rating: 5,
  },
  {
    name: "Amina Al-Husseini",
    role: "Medical Student",
    cityOrUni: "Ankara University",
    quote: "The campus registration accompaniment and residence permit checklist saved me weeks of confusion. Professional, friendly, and truly understand student budgets.",
    rating: 5,
  },
  {
    name: "Tariq Benali",
    role: "Business Student",
    cityOrUni: "Karabük University (KBÜ)",
    quote: "Mimi Bridge helped me inspect student housing near campus and set up all my utilities. I recommend them to every incoming international student!",
    rating: 5,
  },
];

export default function TurkeyStudentServicesPage() {
  const [studentCategory, setStudentCategory] = useState<"all" | "new" | "current">("all");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryUniversity, setInquiryUniversity] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("student-packages");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("student-inquiry");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMB */}
      <Breadcrumbs items={[{ label: "Turkey", href: "/turkey" }, { label: "Student Services" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A2A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <GraduationCap className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>International Student Concierge — Turkey</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Student Life in Turkey, <br />
            <span className="text-[#C49A2A]">Made Simple & Seamless.</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Practical on-ground assistance for incoming and current international students. We handle airport reception, student housing walkthroughs, SIM setup, university enrollment, and residence permit guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#student-packages"
              onClick={scrollToPackages}
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Explore Student Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#student-inquiry"
              onClick={scrollToInquiry}
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Request Custom Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* DEDICATED PARENT SUPPORT CALLOUT */}
      <div className="bg-white/40 backdrop-blur-md border border-[#2B103A]/10 rounded-[20px] p-5 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-full flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#2B103A]">Are you a parent with a child studying in Turkey?</h3>
            <p className="text-xs text-[#2B103A]/70">&ldquo;Your child is far away. You don&apos;t have to feel far away.&rdquo; Explore scheduled video check-ins and housing updates.</p>
          </div>
        </div>
        <Link
          href="/turkey/parent"
          className="shrink-0 inline-flex items-center space-x-1.5 text-xs font-bold text-[#2B103A] bg-[#C49A2A]/20 hover:bg-[#C49A2A] hover:text-[#2B103A] px-4 py-2 rounded-full transition-all"
        >
          <span>Visit Parent Support</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        <button
          onClick={() => setStudentCategory("all")}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            studentCategory === "all"
              ? "bg-[#2B103A] text-[#EFE7DA] shadow-md"
              : "bg-white/40 border border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
          }`}
        >
          All Student Services
        </button>
        <button
          onClick={() => setStudentCategory("new")}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            studentCategory === "new"
              ? "bg-[#2B103A] text-[#EFE7DA] shadow-md"
              : "bg-white/40 border border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
          }`}
        >
          New Student & Arrival Setup
        </button>
        <button
          onClick={() => setStudentCategory("current")}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            studentCategory === "current"
              ? "bg-[#2B103A] text-[#EFE7DA] shadow-md"
              : "bg-white/40 border border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
          }`}
        >
          Current Student & Academic Life
        </button>
      </div>

      {/* MAIN LAYOUT WITH STICKY SIDEBAR ON DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-16">
          {/* SECTION 1: NEW STUDENT SERVICES */}
          {(studentCategory === "all" || studentCategory === "new") && (
            <ServiceGrid
              title="New Student & Arrival Setup"
              subtitle="Everything you need in your first days: airport meet & greet, student housing, SIM card, and transit passes"
              items={NEW_STUDENT_SERVICES}
            />
          )}

          {/* SECTION 2: CURRENT STUDENT SERVICES */}
          {(studentCategory === "all" || studentCategory === "current") && (
            <ServiceGrid
              title="Academic, Bureaucracy & Living Support"
              subtitle="Ongoing support for students in Turkey: university paperwork, live translation, İkamet guidance, and housing"
              items={CURRENT_STUDENT_SERVICES}
            />
          )}

          {/* SECTION 3: PRICING PACKAGES */}
          <section id="student-packages" className="mb-16">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Student Bundles</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Popular Student Packages</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Budget-friendly, all-in-one support packages tailored for international students arriving in Turkey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STUDENT_PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-xl scale-[1.02] ring-2 ring-[#C49A2A]"
                      : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
                  }`}
                >
                  <div>
                    {pkg.popular && (
                      <span className="inline-block bg-[#C49A2A] text-[#2B103A] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-3 shadow-sm">
                        Most Popular for New Students
                      </span>
                    )}
                    <h3 className="font-serif font-bold text-xl mb-1">{pkg.title}</h3>
                    <div className="flex items-baseline space-x-1 mb-3">
                      <span className="font-serif font-bold text-2xl text-[#C49A2A]">{pkg.price}</span>
                      {pkg.unit && (
                        <span className={`text-xs ${pkg.popular ? "text-[#EFE7DA]/70" : "text-[#2B103A]/60"}`}>
                          / {pkg.unit}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? "text-[#EFE7DA]/80" : "text-[#2B103A]/70"}`}>
                      {pkg.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-[#C49A2A]" : "text-[#2B103A]"}`} />
                          <span className={pkg.popular ? "text-[#EFE7DA]/90" : "text-[#2B103A]/80"}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/journey-planner"
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
          </section>

          {/* SECTION 4: TIMELINE */}
          <ProcessTimeline
            title="Your Student Onboarding Journey"
            subtitle="How Mimi Bridge guides you from before you land to excelling on campus"
            steps={STUDENT_TIMELINE}
          />

          {/* SECTION 5: INQUIRY SECTION */}
          <section id="student-inquiry" className="bg-white/50 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-[#2B103A]/10 shadow-xl">
            <div className="mb-6">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                <UserCheck className="w-4 h-4" />
                <span>Direct Student Consultation</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Talk to a Local Student Advisor</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Tell us your target university or arrival date, and we will build a custom support plan for you.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="bg-[#2B103A] text-[#EFE7DA] p-6 rounded-[20px] text-center">
                <CheckCircle2 className="w-10 h-10 text-[#C49A2A] mx-auto mb-2" />
                <h3 className="font-serif font-bold text-lg mb-1">Request Received!</h3>
                <p className="text-xs text-[#EFE7DA]/80">A student advisor will message you shortly via WhatsApp or email.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#2B103A] block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Ahmed"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/20 rounded-[12px] px-4 py-2.5 text-xs text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#2B103A] block mb-1">Email or WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +90 5XX XXX XXXX"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/20 rounded-[12px] px-4 py-2.5 text-xs text-[#2B103A] outline-none focus:border-[#C49A2A]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2B103A] block mb-1">Target University / City in Turkey</label>
                  <input
                    type="text"
                    placeholder="e.g. Istanbul University, Bilkent Ankara, Karabük University"
                    value={inquiryUniversity}
                    onChange={(e) => setInquiryUniversity(e.target.value)}
                    className="w-full bg-white/80 border border-[#2B103A]/20 rounded-[12px] px-4 py-2.5 text-xs text-[#2B103A] outline-none focus:border-[#C49A2A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2B103A] text-[#EFE7DA] text-xs font-bold uppercase tracking-wider hover:bg-[#3D1852] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </section>

          {/* SECTION 6: FAQS */}
          <FAQAccordion
            title="Frequently Asked Student Questions"
            subtitle="Clear answers on student visas, residence permits, university registration, and dorms in Turkey"
            items={FAQS}
          />

          {/* SECTION 7: TESTIMONIALS */}
          <TestimonialsSection
            title="Real International Student Stories"
            subtitle="See how students from around the world started their academic journeys in Turkey with Mimi Bridge"
            items={TESTIMONIALS}
          />
        </div>

        {/* STICKY SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Student Concierge Desk"
            badge="On-Ground Student Network"
            features={[
              "International student mentors on-ground",
              "Direct help with campus & university paperwork",
              "Fast document checklist & housing review",
              "Friendly peer-to-peer student rates",
            ]}
            ctaText="Connect with Student Advisor"
          />
        </div>
      </div>

      {/* CROSS NAVIGATION */}
      <div className="mt-16 pt-8 border-t border-[#2B103A]/10">
        <CrossNav country="turkey" currentPath="/turkey/student-services" />
      </div>
    </main>
  );
}
