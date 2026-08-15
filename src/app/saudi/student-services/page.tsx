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
  Palmtree,
} from "lucide-react";

// SECTION 1: ARRIVAL & SETUP SERVICES (NEW STUDENTS)
const NEW_STUDENT_SERVICES: ServiceItem[] = [
  {
    id: "ns1",
    title: "Airport Chauffeur & Campus Transfer",
    desc: "Personal student guide welcoming you inside arrivals at RUH, JED, MED, or DMM with direct transfer to university dorms or accommodation.",
    icon: Plane,
    tags: ["Flight Tracking", "Terminal Greeting"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns2",
    title: "Saudi Housing & Compound Setup",
    desc: "Assistance finding verified student dormitories, private compound flats, reviewing Ejar digital leases, and air-conditioning/amenity checks.",
    icon: Home,
    tags: ["Ejar Guidance", "Dorm Inspection"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns3",
    title: "Saudi SIM & 5G Connectivity",
    desc: "Immediate activation of a Saudi student SIM card (STC, Mobily, Zain) with unlimited data packages so you are connected right away.",
    icon: Smartphone,
    tags: ["STC / Mobily", "Instant 5G Data"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns4",
    title: "Metro & Local Transit Pass",
    desc: "Setting up your Riyadh Metro / Bus card and city transport apps (Careem, Bolt, SAPTCO) for convenient campus commutes.",
    icon: CreditCard,
    tags: ["Transit Pass", "City Mobility"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns5",
    title: "University Deanship Registration",
    desc: "Accompaniment to your university's Deanship of Admission & Student Affairs for enrollment verification, student ID, and campus orientation.",
    icon: BookOpen,
    tags: ["Campus Escort", "Student ID"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ns6",
    title: "National Address & Bank Setup",
    desc: "Step-by-step guidance registering your Saudi Post (SPL) National Address, opening a student bank account (Al Rajhi, SNB), and Absher setup.",
    icon: MapPin,
    tags: ["SPL Address", "Bank Account"],
    relevantPersonas: ["new_student"],
  },
];

// SECTION 2: ACADEMIC & DAILY LIVING SERVICES (CURRENT STUDENTS)
const CURRENT_STUDENT_SERVICES: ServiceItem[] = [
  {
    id: "cs1",
    title: "University Administration & Forms",
    desc: "Help managing official university documentation, faculty requests, graduation checklists, and scholarship administrative procedures.",
    icon: FileText,
    tags: ["Scholarship Forms", "Academic Guidance"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs2",
    title: "Arabic Translation & Notarization",
    desc: "Live translation and document translation assistance for administrative appointments, university paperwork, and official Arabic documents.",
    icon: Languages,
    tags: ["Arabic Translation", "Live Support"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs3",
    title: "Student Iqama & Visa Guidance",
    desc: "Practical checklists and step-by-step guidance for student Iqama issuance, renewal deadlines, medical tests, and Jawazat requirements.",
    icon: Shield,
    tags: ["Iqama Guidance", "Jawazat Prep"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs4",
    title: "Housing & Ejar Contract Help",
    desc: "Guidance navigating Ejar electronic tenancy contracts, landlord communication, utility bill management, and lease renewals.",
    icon: Building,
    tags: ["Ejar Platform", "Landlord Mediation"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs5",
    title: "Medical & CCHI Health Insurance",
    desc: "Guidance on cooperative health insurance coverage, finding bilingual hospitals and clinics, and navigating local pharmacies.",
    icon: HeartHandshake,
    tags: ["Health Insurance", "Clinic Guidance"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "cs6",
    title: "Campus Mentorship & Community",
    desc: "Direct mentorship from senior international students on academic excellence, student club life, and navigating living in Saudi Arabia.",
    icon: GraduationCap,
    tags: ["Senior Mentorship", "Student Network"],
    relevantPersonas: ["current_student"],
  },
];

// SECTION 3: STUDENT PACKAGES
const STUDENT_PACKAGES = [
  {
    title: "Essential Saudi Arrival",
    price: "Starting from $40",
    description: "Crucial first-day essentials for international students arriving in Saudi Arabia.",
    features: [
      "Airport meet & greet inside terminal",
      "Saudi 5G student SIM card setup",
      "Local transport & taxi apps setup",
      "Neighborhood orientation guide",
      "Emergency student hotline access",
      "Saudi student checklist PDF",
    ],
    buttonText: "BOOK ARRIVAL BUNDLE",
    popular: false,
  },
  {
    title: "Complete Relocation & Campus Setup",
    price: "Starting from $85",
    unit: "first week",
    description: "Comprehensive hands-on support for your entire first week in the Kingdom.",
    features: [
      "Airport pickup & transfer to accommodation",
      "Student housing walkthrough & Ejar check",
      "Saudi SIM card & high-speed data setup",
      "SPL National Address & bank account setup",
      "University Deanship registration escort",
      "Campus & local neighborhood orientation",
      "7-day dedicated on-call chat support",
    ],
    buttonText: "GET COMPLETE SETUP",
    popular: true,
  },
  {
    title: "Full Semester On-Ground Concierge",
    price: "Starting from $160",
    unit: "semester",
    description: "Continuous on-ground support throughout your academic term for peace of mind.",
    features: [
      "Full Arrival & Relocation package included",
      "Student Iqama issuance & renewal guidance",
      "5 in-person appointment translation escorts",
      "Landlord & Ejar communication support",
      "Academic paperwork & Arabic translation help",
      "Dedicated senior student mentor assigned",
      "Priority response for urgent local needs",
    ],
    buttonText: "JOIN SEMESTER CONCIERGE",
    popular: false,
  },
];

// SECTION 4: TIMELINE
const STUDENT_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "Pre-Arrival Consultation", description: "Document check, accommodation review, and airport arrival scheduling." },
  { stepNumber: 2, title: "Airport Reception & Transfer", description: "Personal student guide welcomes you and escorts you to your housing." },
  { stepNumber: 3, title: "SIM, SPL Address & Bank Setup", description: "Activate 5G line, register National Address, and open student bank account." },
  { stepNumber: 4, title: "University Deanship Registration", description: "Bilingual accompaniment to university student affairs to complete enrollment." },
  { stepNumber: 5, title: "Ongoing Term Mentorship", description: "Support with Iqama, everyday translation, and thriving in Saudi Arabia." },
];

// SECTION 5: FAQS
const FAQS: FAQItem[] = [
  {
    question: "When should I schedule my airport pickup and student onboarding?",
    answer: "We recommend booking 3 to 5 days before your flight to Riyadh, Jeddah, Madinah, or Dammam so our team can coordinate airport arrivals, student SIM activations, and accommodation checks in advance.",
  },
  {
    question: "Do you help with the Saudi Student Iqama process?",
    answer: "Yes! We provide complete administrative checklists and guidance for medical checkups, required university paperwork, and appointment steps for the General Directorate of Passports (Jawazat).",
  },
  {
    question: "Can someone accompany me to my university registration?",
    answer: "Yes. Our bilingual student guides accompany you directly to the Deanship of Admission & Registration at institutions like King Saud University, KAU, KFUPM, and Princess Nourah University.",
  },
  {
    question: "How do I set up my National Address and bank account in Saudi Arabia?",
    answer: "We walk you through registering your SPL (Saudi Post) National Address online and setting up your bank account (e.g. Al Rajhi Bank, SNB) with the proper student documentation.",
  },
  {
    question: "Are your guides fellow international university students in Saudi Arabia?",
    answer: "Yes! Mimi Bridge connects you with senior international students who understand campus life, cultural etiquette, and student budgeting in the Kingdom.",
  },
];

// SECTION 6: TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Al-Bakri",
    role: "Computer Science Student",
    cityOrUni: "King Saud University (KSU), Riyadh",
    quote: "Moving to Riyadh for university was an exciting step. Mimi Bridge met me at RUH airport, helped me get my STC SIM, and guided my SPL address and bank account registration seamlessly.",
    rating: 5,
  },
  {
    name: "Farah Mansour",
    role: "Postgraduate Researcher",
    cityOrUni: "King Abdulaziz University (KAU), Jeddah",
    quote: "The Deanship accompaniment and housing walkthrough gave me total peace of mind. Excellent, respectful, and budget-friendly student service!",
    rating: 5,
  },
  {
    name: "Omar Siddiqui",
    role: "Petroleum Engineering Student",
    cityOrUni: "KFUPM, Dhahran",
    quote: "Mimi Bridge is the best companion for any incoming international student in Saudi Arabia. Having fellow students guide you through your first week is invaluable.",
    rating: 5,
  },
];

export default function SaudiStudentServicesPage() {
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
      <Breadcrumbs items={[{ label: "Saudi Arabia", href: "/saudi" }, { label: "Student Services" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>International Student Concierge — Saudi Arabia</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Student Life in Saudi Arabia, <br />
            <span className="text-emerald-400">Made Simple & Seamless.</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Practical on-ground assistance for international university students across the Kingdom. We handle airport reception, student housing, 5G SIM setup, university enrollment, and Iqama guidance.
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
          <div className="w-10 h-10 bg-emerald-900 text-[#C49A2A] rounded-full flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#2B103A]">Are you a parent with a child studying in Saudi Arabia?</h3>
            <p className="text-xs text-[#2B103A]/70">&ldquo;Your child is far away. You don&apos;t have to feel far away.&rdquo; Explore scheduled video check-ins and campus housing updates.</p>
          </div>
        </div>
        <Link
          href="/saudi/parent"
          className="shrink-0 inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-full transition-all"
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
              ? "bg-emerald-900 text-[#EFE7DA] shadow-md"
              : "bg-white/40 border border-[#2B103A]/10 text-[#2B103A] hover:border-emerald-700"
          }`}
        >
          All Student Services
        </button>
        <button
          onClick={() => setStudentCategory("new")}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            studentCategory === "new"
              ? "bg-emerald-900 text-[#EFE7DA] shadow-md"
              : "bg-white/40 border border-[#2B103A]/10 text-[#2B103A] hover:border-emerald-700"
          }`}
        >
          New Student & Arrival Setup
        </button>
        <button
          onClick={() => setStudentCategory("current")}
          className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            studentCategory === "current"
              ? "bg-emerald-900 text-[#EFE7DA] shadow-md"
              : "bg-white/40 border border-[#2B103A]/10 text-[#2B103A] hover:border-emerald-700"
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
              subtitle="Essential first-week support in Saudi Arabia: airport chauffeur, housing, 5G SIM card, and transit passes"
              items={NEW_STUDENT_SERVICES}
            />
          )}

          {/* SECTION 2: CURRENT STUDENT SERVICES */}
          {(studentCategory === "all" || studentCategory === "current") && (
            <ServiceGrid
              title="Academic, Bureaucracy & Living Support"
              subtitle="Ongoing support for students in the Kingdom: university paperwork, Arabic translation, Iqama guidance, and Ejar leases"
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
                All-in-one support packages tailored for international students arriving at universities across Saudi Arabia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STUDENT_PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${
                    pkg.popular
                      ? "bg-emerald-950 text-[#EFE7DA] border-emerald-700 shadow-xl scale-[1.02] ring-2 ring-emerald-400"
                      : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-emerald-700"
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
                        : "bg-emerald-900 text-[#EFE7DA] hover:bg-emerald-800"
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
            title="Your Saudi Student Journey"
            subtitle="How Mimi Bridge supports you from initial arrival to excelling in your studies"
            steps={STUDENT_TIMELINE}
          />

          {/* SECTION 5: INQUIRY SECTION */}
          <section id="student-inquiry" className="bg-white/50 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-[#2B103A]/10 shadow-xl">
            <div className="mb-6">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                <UserCheck className="w-4 h-4" />
                <span>Direct Student Consultation</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Talk to a Saudi Student Advisor</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Tell us your target university (Riyadh, Jeddah, Dhahran, Madinah) and we will prepare your arrival plan.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="bg-emerald-950 text-[#EFE7DA] p-6 rounded-[20px] text-center">
                <CheckCircle2 className="w-10 h-10 text-[#C49A2A] mx-auto mb-2" />
                <h3 className="font-serif font-bold text-lg mb-1">Request Received!</h3>
                <p className="text-xs text-[#EFE7DA]/80">A student advisor in Saudi Arabia will message you shortly via WhatsApp or email.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#2B103A] block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/20 rounded-[12px] px-4 py-2.5 text-xs text-[#2B103A] outline-none focus:border-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#2B103A] block mb-1">Email or WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +966 5X XXX XXXX"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-white/80 border border-[#2B103A]/20 rounded-[12px] px-4 py-2.5 text-xs text-[#2B103A] outline-none focus:border-emerald-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2B103A] block mb-1">Target University / City in Saudi Arabia</label>
                  <input
                    type="text"
                    placeholder="e.g. King Saud University (Riyadh), KAU (Jeddah), KFUPM (Dhahran)"
                    value={inquiryUniversity}
                    onChange={(e) => setInquiryUniversity(e.target.value)}
                    className="w-full bg-white/80 border border-[#2B103A]/20 rounded-[12px] px-4 py-2.5 text-xs text-[#2B103A] outline-none focus:border-emerald-700"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-900 text-[#EFE7DA] text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
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
            subtitle="Clear answers on student visas, Iqama issuance, university deanship registration, and living in Saudi Arabia"
            items={FAQS}
          />

          {/* SECTION 7: TESTIMONIALS */}
          <TestimonialsSection
            title="International Student Experiences in Saudi Arabia"
            subtitle="Read how scholarship recipients and university students established their academic journeys with Mimi Bridge"
            items={TESTIMONIALS}
          />
        </div>

        {/* STICKY SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Saudi Student Advisory"
            badge="On-Ground Student Support"
            features={[
              "Bilingual international student mentors",
              "Direct help with campus & Deanship paperwork",
              "Fast document check & SPL address setup",
              "Peer-to-peer student-friendly rates",
            ]}
            ctaText="Connect with Student Advisor"
          />
        </div>
      </div>

      {/* CROSS NAVIGATION */}
      <div className="mt-16 pt-8 border-t border-[#2B103A]/10">
        <CrossNav country="saudi" currentPath="/saudi/student-services" />
      </div>
    </main>
  );
}
