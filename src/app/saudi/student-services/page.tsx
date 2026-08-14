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
  GraduationCap,
  School,
  FileCheck,
  Plane,
  Home,
  Building,
  FileText,
  CreditCard,
  UserCheck,
  BookOpen,
  MapPin,
  Shield,
  Smartphone,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Heart,
  Wifi,
  ShoppingBasket,
  ShieldAlert,
  Video,
  Eye,
  CalendarCheck,
  Palmtree,
} from "lucide-react";

// SECTION 1: WHO IS THIS FOR?
const TARGET_AUDIENCE = [
  {
    title: "Current Student",
    subtitle: "Already living & studying in Saudi Arabia",
    desc: "For international students already enrolled in Saudi universities who need assistance with university administration, Iqama, Ejar housing, or local living setup.",
    icon: UserCheck,
    persona: "current_student" as PersonaType,
    services: [
      "University & Campus Assistance",
      "Ejar Housing & Compound Help",
      "Certified Arabic Translation",
      "Student Iqama & Absher Support",
      "Bank & Mada Card Guidance",
      "Local Transportation & SIM Setup",
      "Government Appointment Support",
    ],
    cta: "GET STUDENT HELP",
  },
  {
    title: "New Student",
    subtitle: "Preparing to arrive or in first week",
    desc: "For students preparing to travel to Saudi Arabia and those navigating their first crucial days of arrival, campus registration, and settling in.",
    icon: GraduationCap,
    persona: "new_student" as PersonaType,
    services: [
      "Study in Saudi Pre-Arrival Checklist",
      "Airport Meet & Chauffeur Transit",
      "Student Housing & Compound Sourcing",
      "Saudi SIM Card (STC / Mobily / Zain)",
      "University Enrollment Escort",
      "Student Iqama & Medical Screening",
      "National Address & Bank Setup",
      "First Week Orientation & City Guide",
    ],
    cta: "START MY JOURNEY",
  },
  {
    title: "Parent",
    subtitle: "Peace of mind for families abroad",
    desc: "For parents who want dedicated on-ground coordination and reassuring status updates while their son or daughter studies in the Kingdom.",
    icon: Users,
    persona: "parent" as PersonaType,
    services: [
      "Student Arrival Confirmation",
      "Scheduled Video Check-Ins",
      "Student Wellbeing / Status Reports",
      "Housing & Compound Video Walkthrough",
      "Neighborhood & Safety Overview",
      "Direct Parent Communication Support",
      "24/7 Emergency On-Ground Contact",
    ],
    cta: "SUPPORT MY STUDENT",
  },
];

// DEDICATED PARENT SUPPORT SERVICES
const PARENT_SUPPORT_SERVICES = [
  {
    id: "ps1",
    title: "STUDENT VIDEO CHECK-IN",
    price: "Starting from $25",
    desc: "A scheduled video call with your student upon arrival in Saudi Arabia to confirm that they have settled into campus or accommodation safely.",
    features: [
      "Scheduled high-definition video call",
      "Direct arrival and campus confirmation",
      "Verify access to accommodation and essentials",
      "Comprehensive update shared with parents",
      "Written summary and next steps after the call",
    ],
    note: "This is a general support and communication service. It is not medical, psychological, or professional supervision.",
    icon: Video,
  },
  {
    id: "ps2",
    title: "HOUSING VIDEO CHECK",
    price: "Starting from $35",
    desc: "A live or recorded video walkthrough of your student's dorm room, private compound apartment, or residential studio in Saudi Arabia.",
    features: [
      "Live or recorded video walkthrough",
      "Review visible living conditions and amenities",
      "Inspect bedroom, study area, and facilities",
      "Overview of building security and neighborhood",
      "Detailed summary sent directly to parent",
    ],
    disclaimer: "Mimi Bridge provides a visual and general condition overview. This is not a formal architectural inspection or legal appraisal.",
    icon: Eye,
  },
  {
    id: "ps3",
    title: "PARENT STATUS UPDATE",
    price: "Starting from $20",
    desc: "A concise, structured briefing for parents covering university enrollment milestones, Iqama status, and daily comfort.",
    features: [
      "Student enrollment & onboarding report",
      "Housing & utility setup status",
      "Iqama & bank account progress",
      "Local neighborhood orientation notes",
      "Written update delivered via WhatsApp or email",
    ],
    icon: FileText,
  },
  {
    id: "ps4",
    title: "MONTHLY STUDENT CHECK-IN",
    price: "Starting from $50/month",
    desc: "Ongoing support and peace of mind for families throughout the academic semester across Saudi university cities.",
    features: [
      "One scheduled monthly student check-in session",
      "One monthly comprehensive parent update",
      "Ongoing housing, visa, and welfare check",
      "Liaison assistance between student and family",
      "Summary report delivered after each check-in",
    ],
    note: "Designed for general coordination and communication support for families abroad.",
    icon: CalendarCheck,
  },
];

// SECTION 2: BEFORE ARRIVAL
const BEFORE_ARRIVAL: ServiceItem[] = [
  {
    id: "ba1",
    title: "Saudi University Consultation",
    desc: "Expert guidance evaluating accredited Saudi universities (KSU, KAU, KFUPM, PNU, KAUST, Umm Al-Qura, Islamic University) for your target major.",
    icon: School,
    tags: ["Academic Planning", "Saudi Universities"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ba2",
    title: "Study in Saudi & Admission Guidance",
    desc: "Step-by-step assistance navigating the 'Study in Saudi' governmental portal, university admission dossiers, and acceptance confirmations.",
    icon: FileCheck,
    tags: ["Study in Saudi", "Acceptance Letters"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ba3",
    title: "Required Documents & Attestation",
    desc: "Checklist verification, Saudi Cultural Mission attestation, Ministry of Foreign Affairs (MOFA) legalization, and certified Arabic translation.",
    icon: FileText,
    tags: ["MOFA Attestation", "Arabic Translation"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ba4",
    title: "Saudi Student Visa Guidance",
    desc: "Guidance on visa authorization (Tafweez), medical report guidelines, and submission requirements at Saudi embassies and VFS Tasheel centers.",
    icon: Shield,
    tags: ["Student Visa", "Embassy Docs"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ba5",
    title: "Airport Chauffeur Reception",
    desc: "Personalized meet & greet upon arrival at King Khalid (RUH Riyadh), King Abdulaziz (JED Jeddah), Prince Mohammad (MED Madinah), or King Fahd (DMM).",
    icon: Plane,
    tags: ["Airport Meet & Greet", "Luggage Transit"],
    relevantPersonas: ["new_student", "parent", "family"],
  },
];

// SECTION 3: HOUSING
const HOUSING: ServiceItem[] = [
  {
    id: "h1",
    title: "Campus Dormitory Placement",
    desc: "Securing and coordinating official on-campus housing or university-managed dormitories with verified security and meal plans.",
    icon: Building,
    tags: ["University Dorms", "Campus Living"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "h2",
    title: "Private Apartment & Compound Search",
    desc: "Curating verified residential apartments or secure expatriate compounds close to your campus in Riyadh, Jeddah, or Dhahran.",
    icon: Home,
    tags: ["Ejar Apartments", "Secure Compounds"],
    relevantPersonas: ["current_student", "family"],
  },
  {
    id: "h3",
    title: "Apartment Viewing & Video Tours",
    desc: "Accompanied in-person property tours or high-definition live video walkthroughs of apartments prior to signing agreements.",
    icon: MapPin,
    tags: ["Video Walkthrough", "Neighborhood Safety"],
    relevantPersonas: ["parent", "current_student"],
  },
  {
    id: "h4",
    title: "Ejar Contract Review & Translation",
    desc: "Comprehensive review and translation of official Saudi Ejar rental contracts to ensure clear terms, deposit protection, and tenant rights.",
    icon: FileText,
    tags: ["Ejar Platform", "Tenant Rights"],
    relevantPersonas: ["parent", "current_student"],
  },
  {
    id: "h5",
    title: "Utility & Broadband Setup",
    desc: "Assistance setting up Saudi Electricity Company (SEC) accounts, National Water Company (NWC), and fiber home broadband (STC / Mobily).",
    icon: CreditCard,
    tags: ["Electricity / Water", "Fiber Broadband"],
    relevantPersonas: ["current_student"],
  },
];

// SECTION 4: UNIVERSITY LIFE
const UNIVERSITY_LIFE: ServiceItem[] = [
  {
    id: "ul1",
    title: "Campus Registration Escort",
    desc: "On-site companion support at the university deanship of admissions and student affairs for final physical document submission and onboarding.",
    icon: UserCheck,
    tags: ["Student Affairs", "Final Registration"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ul2",
    title: "Student ID (Bitaqa) Issuance",
    desc: "Assistance submitting official photo requirements, collecting your university ID card, and enabling campus facility access gates.",
    icon: CreditCard,
    tags: ["Campus ID", "Facility Access"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ul3",
    title: "Course Registration & LMS Onboarding",
    desc: "Guidance navigating university academic portals (EduGate, Blackboard) for course selections, prerequisites, and timetable scheduling.",
    icon: BookOpen,
    tags: ["EduGate Portal", "Academic Schedules"],
    relevantPersonas: ["new_student", "current_student"],
  },
  {
    id: "ul4",
    title: "Saudi Campus Orientation",
    desc: "Guided introductions to university faculties, international student clubs, Islamic libraries, research labs, and academic advisors.",
    icon: Sparkles,
    tags: ["Campus Life", "Student Networks"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ul5",
    title: "Campus & Neighborhood Tour",
    desc: "Detailed tour of campus facilities, cafeterias, sports complexes, prayer halls, and nearest transit links (Riyadh Metro / SAPTCO).",
    icon: MapPin,
    tags: ["Campus Mapping", "Transit Links"],
    relevantPersonas: ["new_student", "parent"],
  },
];

// SECTION 5: GOVERNMENT SERVICES
const GOVERNMENT_SERVICES: ServiceItem[] = [
  {
    id: "gs1",
    title: "Student Iqama Issuance & Jawazat",
    desc: "Complete guidance navigating the student Iqama (residence permit) application, medical checkup (Efada), fingerprinting, and Absher activation.",
    icon: Shield,
    tags: ["Student Iqama", "Absher & Muqeem"],
    relevantPersonas: ["new_student", "current_student"],
  },
  {
    id: "gs2",
    title: "National Address Registration (SPL)",
    desc: "Registering your official Saudi National Address via Saudi Post (SPL) and Tawakkalna, required for bank accounts, deliveries, and official paperwork.",
    icon: FileText,
    tags: ["National Address", "SPL Post"],
    relevantPersonas: ["new_student", "current_student"],
  },
  {
    id: "gs3",
    title: "Saudi Bank Account & Mada Setup",
    desc: "Accompanied visits to major Saudi banks (Al Rajhi Bank, SNB, Riyad Bank, Alinma) to open student accounts, issue Mada debit cards, and set up Apple Pay.",
    icon: CreditCard,
    tags: ["Mada Debit Card", "SAR Accounts"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "gs4",
    title: "Student Health Insurance (CCHI)",
    desc: "Assisting with mandatory Council of Cooperative Health Insurance (CCHI) compliant student medical insurance for clinic and hospital coverage.",
    icon: Shield,
    tags: ["CCHI Insurance", "Medical Coverage"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "gs5",
    title: "Public Transit & Student Travel Cards",
    desc: "Issuing student transit cards for Riyadh Metro, Riyadh Bus, SAPTCO intercity coaches, and discounted student fares on the Haramain High-Speed Train.",
    icon: CreditCard,
    tags: ["Riyadh Metro", "Haramain Train"],
    relevantPersonas: ["new_student", "current_student"],
  },
];

// SECTION 6: DAILY LIFE
const DAILY_LIFE: ServiceItem[] = [
  {
    id: "dl1",
    title: "Saudi Mobile SIM & Data Setup",
    desc: "Passport and Iqama based registration for high-speed student 5G data bundles (STC, Mobily, Zain, Salam) upon arrival.",
    icon: Smartphone,
    tags: ["5G Data", "STC / Mobily / Zain"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "dl2",
    title: "Furnishing & Student Marketplace",
    desc: "Guided shopping tours and delivery coordination for affordable student furniture, study desks, electronics, and home essentials.",
    icon: ShoppingBag,
    tags: ["Furniture Sourcing", "Home Setup"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "dl3",
    title: "Home Broadband Installation",
    desc: "Coordinating fiber internet broadband installation for student apartments with leading telecom providers.",
    icon: Wifi,
    tags: ["Fiber Internet", "Fast Connection"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "dl4",
    title: "Saudi Shopping & Hypermarket Guide",
    desc: "Local neighborhood orientation for student grocery stores (Danube, Tamimi, Lulu, Panda), electronics centers, and stationery markets.",
    icon: ShoppingBasket,
    tags: ["Hypermarkets", "Local Essentials"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "dl5",
    title: "24/7 Student Emergency Support",
    desc: "Dedicated multi-lingual on-call hotline for urgent medical coordination, translation needs, or unexpected administrative emergencies.",
    icon: ShieldAlert,
    tags: ["24/7 Hotline", "Urgent Assistance"],
    relevantPersonas: ["parent", "new_student", "family"],
  },
];

// SECTION 7: PACKAGES DATA
const STUDENT_PACKAGES = [
  {
    title: "Saudi Student Starter",
    price: "Starting from $60",
    description: "Essential on-ground setup for international students arriving in Saudi Arabia.",
    features: [
      "Saudi 5G SIM card guidance & activation",
      "Public transit & metro card assistance",
      "University campus orientation walkthrough",
      "Supermarket, pharmacy & neighborhood guide",
      "Key Arabic phrases for daily life in Saudi",
      "Dedicated WhatsApp support during first week",
    ],
    buttonText: "GET STARTED",
    popular: false,
  },
  {
    title: "Housing & Ejar Support",
    price: "Starting from $65",
    description: "Practical assistance finding student accommodation, dorms, and navigating Ejar leases.",
    features: [
      "Curated student-friendly property listings",
      "Direct communication with landlords/property agents",
      "Certified Arabic translation of rental terms",
      "One accompanied property/dormitory viewing",
      "Ejar contract checklist & tenant safeguards",
      "Neighborhood overview & transit proximity check",
    ],
    disclaimer: "Mimi Bridge provides general assistance and translation support. We do not provide legal or licensed real-estate agency services.",
    buttonText: "GET HOUSING HELP",
    popular: false,
  },
  {
    title: "Complete First Week in KSA",
    price: "Starting from $140",
    description: "Full concierge care and on-ground escort during your initial days in Saudi Arabia.",
    features: [
      "VIP airport pickup & chauffeur transit",
      "Saudi SIM card & 5G data setup",
      "Public transit registration (Metro/Bus)",
      "University registrar escort & ID support",
      "Accompaniment for housing & Ejar agreement",
      "National Address & Saudi Bank account guidance",
      "Essential markets & pharmacy orientation",
      "7 days of priority on-call WhatsApp assistance",
    ],
    buttonText: "CHOOSE PACKAGE",
    popular: true,
  },
];

// SECTION 8: TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Zaid Al-Ghamdi",
    role: "Computer Science Student",
    cityOrUni: "King Saud University (Riyadh)",
    quote: "Mimi Bridge coordinated my airport pickup in Riyadh, assisted with my student Iqama medical check, and helped me open my Al Rajhi account in no time. Seamless experience!",
    rating: 5,
  },
  {
    name: "Dr. Mona Al-Husseini",
    role: "Parent",
    cityOrUni: "Princess Nourah University Parent",
    quote: "Sending our daughter to study in Riyadh was a major milestone. Mimi Bridge's video walkthrough of her accommodation and first-week check-ins gave our whole family immense confidence.",
    rating: 5,
  },
  {
    name: "Hamza Nour",
    role: "Petroleum Engineering Student",
    cityOrUni: "KFUPM (Dhahran)",
    quote: "The on-ground team helped me translate and notarize my academic certificates, secure my student residence permit, and settle into student housing smoothly. Outstanding support!",
    rating: 5,
  },
];

// SECTION 9: FAQ
const FAQS: FAQItem[] = [
  {
    question: "What is the 'Study in Saudi' platform and how does it work?",
    answer: "The 'Study in Saudi' portal is the official gateway established by the Saudi Ministry of Education for international students applying to Saudi universities. It facilitates academic applications, visa issuance, and educational scholarships. We assist students in preparing verified academic dossiers and navigating portal submissions.",
  },
  {
    question: "When should I apply for my Saudi Student Iqama (Residence Permit)?",
    answer: "Once you arrive in the Kingdom on your Study Visa, your university and our concierge team guide you through the medical examination (Efada), fingerprinting, and issuance of your official Student Iqama via the Jawazat and Absher platforms.",
  },
  {
    question: "What is the Ejar system for renting student housing in Saudi Arabia?",
    answer: "Ejar is the mandatory electronic rental network governed by the Saudi Ministry of Housing. All legitimate residential leases must be registered on Ejar to protect tenant and landlord rights. We help review contract terms and ensure clear translation before signing.",
  },
  {
    question: "Can parents visit their student in Saudi Arabia?",
    answer: "Yes! Parents and immediate family members can easily visit students in Saudi Arabia by obtaining a Saudi Tourist Visa or Family Visit Visa. We provide airport transfers, hotel accommodations, and local transport assistance for visiting families.",
  },
  {
    question: "How do international students open a bank account in Saudi Arabia?",
    answer: "Once you have your Student Iqama, registered Saudi mobile number, and verified National Address via SPL (Saudi Post), we accompany you to top Saudi banks (such as Al Rajhi, SNB, or Riyad Bank) to set up your account and instant Mada debit card.",
  },
  {
    question: "Which cities in Saudi Arabia do you cover for student services?",
    answer: "We provide comprehensive on-ground support across Riyadh, Jeddah, Makkah, Madinah, and the Eastern Province (Dammam, Khobar, Dhahran), alongside remote consultation across all Saudi academic institutions.",
  },
];

// SECTION 10: TIMELINE
const STUDENT_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "University Consultation", description: "Select program, verify criteria & submit to Study in Saudi." },
  { stepNumber: 2, title: "Visa & Attestation", description: "Attest diplomas via MOFA & secure your Saudi Study Visa." },
  { stepNumber: 3, title: "Arrival & Reception", description: "Meet & greet at RUH/JED/MED/DMM with Saudi SIM activation." },
  { stepNumber: 4, title: "Housing & Campus Setup", description: "Dormitory or Ejar lease onboarding & student ID registration." },
  { stepNumber: 5, title: "Iqama, Address & Banking", description: "Medical check, Student Iqama, SPL National Address & Mada card." },
  { stepNumber: 6, title: "Fully Settled in KSA", description: "Thrive in your studies with 24/7 dedicated local assistance." },
];

export default function SaudiStudentServicesPage() {
  const [activePersona, setActivePersona] = useState<PersonaType | null>(null);

  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("packages");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMB NAVIGATION */}
      <Breadcrumbs items={[{ label: "Saudi Arabia", href: "/saudi" }, { label: "Student Services" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-emerald-500/20">
        {/* Background Subtle Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-emerald-900/60 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-emerald-400/30">
            <Palmtree className="w-3.5 h-3.5 text-emerald-400" />
            <span>Academic Concierge — Saudi Arabia</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Student Services in <span className="text-emerald-400">Saudi Arabia</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Complete, on-ground academic support from your university application and Saudi visa to your student Iqama, housing, and campus life across the Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Book Student Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#packages"
              onClick={scrollToPackages}
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] bg-white/5 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>View Packages</span>
            </a>
          </div>
        </div>
      </div>

      {/* SMART PERSONA SELECTOR */}
      <PersonaSelector onPersonaChange={(p) => setActivePersona(p)} />

      {/* MAIN TWO-COLUMN CONTENT AREA WITH STICKY SIDEBAR ON DESKTOP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-16">
          {/* SECTION 1: WHO IS THIS FOR? */}
          <section>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                Target Groups
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">Who is this for?</h2>
              <p className="text-xs md:text-sm text-[#2B103A]/70 mt-1">
                Tailored concierge solutions built specifically for every stage of your educational path in Saudi Arabia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TARGET_AUDIENCE.map((card, idx) => {
                const Icon = card.icon;
                const isSelected = activePersona && card.persona === activePersona;
                return (
                  <div
                    key={idx}
                    className={`bg-white/40 backdrop-blur-md p-6 rounded-[20px] border flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                      isSelected
                        ? "border-[#C49A2A] ring-2 ring-[#C49A2A]/40 bg-white/80 scale-[1.02]"
                        : "border-[#2B103A]/10 hover:border-[#C49A2A]"
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 bg-emerald-950 text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-[#2B103A] mb-1">{card.title}</h3>
                      <span className="text-[11px] font-semibold text-[#C49A2A] block mb-3">{card.subtitle}</span>
                      <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{card.desc}</p>

                      <ul className="space-y-2 text-xs text-[#2B103A]/80 mb-6 border-t border-[#2B103A]/10 pt-4">
                        {card.services.map((svc, sIdx) => (
                          <li key={sIdx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span>{svc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* DEDICATED PARENT SUPPORT SECTION */}
          <section id="parent-support" className="bg-gradient-to-br from-emerald-950/10 via-amber-800/5 to-transparent p-8 rounded-[28px] border border-emerald-600/20">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-[#C49A2A] text-[#C49A2A]" />
                <span>Parent Support in Saudi Arabia</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
                Stay Connected, Even From Far Away.
              </h2>
              <p className="text-xs md:text-sm text-[#2B103A]/75 mt-2 max-w-2xl leading-relaxed">
                Mimi Bridge provides parents with complete peace of mind through structured student check-ins, accommodation video reviews, and continuous communication support across the Kingdom.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PARENT_SUPPORT_SERVICES.map((ps) => {
                const Icon = ps.icon;
                return (
                  <div
                    key={ps.id}
                    className="bg-white/60 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-emerald-950 text-[#C49A2A] rounded-[12px] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-serif font-bold text-[#C49A2A] bg-[#2B103A]/5 px-3 py-1 rounded-full border border-[#C49A2A]/20">
                          {ps.price}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-2">{ps.title}</h3>
                      <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{ps.desc}</p>

                      <ul className="space-y-2 text-xs text-[#2B103A]/80 mb-4 border-t border-[#2B103A]/10 pt-3">
                        {ps.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {ps.disclaimer && (
                        <p className="text-[10px] text-[#2B103A]/60 italic bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 mb-4 leading-relaxed">
                          &quot;{ps.disclaimer}&quot;
                        </p>
                      )}

                      {ps.note && (
                        <p className="text-[10px] text-[#2B103A]/60 italic mb-4 leading-relaxed">
                          Note: {ps.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 2: BEFORE ARRIVAL */}
          <ServiceGrid
            title="Before Arrival & Admissions"
            subtitle="Study in Saudi portal guidance, MOFA attestation, academic evaluation, and airport reception"
            items={BEFORE_ARRIVAL}
            activePersona={activePersona}
          />

          {/* SECTION 3: HOUSING */}
          <ServiceGrid
            title="Housing & Accommodation"
            subtitle="Campus dormitories, private compound residences, and official Ejar lease reviews"
            items={HOUSING}
            activePersona={activePersona}
          />

          {/* SECTION 4: UNIVERSITY LIFE */}
          <ServiceGrid
            title="University Life in KSA"
            subtitle="Campus onboarding, registration escort, ID (Bitaqa) issuance, and portal navigation"
            items={UNIVERSITY_LIFE}
            activePersona={activePersona}
          />

          {/* SECTION 5: GOVERNMENT SERVICES */}
          <ServiceGrid
            title="Official & Government Services"
            subtitle="Student Iqama (Jawazat), SPL National Address, Saudi bank accounts (Mada), and health insurance"
            items={GOVERNMENT_SERVICES}
            activePersona={activePersona}
          />

          {/* SECTION 6: DAILY LIFE */}
          <ServiceGrid
            title="Daily Life in the Kingdom"
            subtitle="Saudi 5G SIM setups, fiber internet, hypermarket orientation, and 24/7 emergency support"
            items={DAILY_LIFE}
            activePersona={activePersona}
          />

          {/* TIMELINE */}
          <ProcessTimeline
            title="Your Saudi Educational Journey"
            subtitle="From your initial university acceptance to becoming fully established on campus"
            steps={STUDENT_TIMELINE}
          />
        </div>

        {/* STICKY DESKTOP SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Saudi Student Concierge"
            badge="On-Ground Academic Team"
            ctaText="Schedule Student Advisory"
            features={[
              "Direct liaison with Saudi university registrars",
              "Verified Ejar student lease & translation support",
              "Complete Student Iqama & medical dossier guidance",
              "24/7 on-ground student assistance hotline",
            ]}
          />
        </div>
      </div>

      {/* SECTION 7: PACKAGES */}
      <div id="packages" className="py-16 border-t border-[#2B103A]/10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
            Student Support Packages
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
            Saudi Student Service Packages
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
            Practical support for starting your educational journey in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[24px] border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
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
                <p className={`font-serif text-2xl font-bold mb-2 ${pkg.popular ? "text-[#C49A2A]" : "text-[#2B103A]"}`}>
                  {pkg.price}
                </p>
                <p className={`text-xs leading-relaxed mb-6 ${pkg.popular ? "text-[#EFE7DA]/75" : "text-[#2B103A]/70"}`}>
                  {pkg.description}
                </p>

                <ul className="space-y-2.5 text-xs mb-6 border-t pt-4 border-current/10">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-[#C49A2A]" : "text-[#C49A2A]"}`} />
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
      </div>

      {/* SECTION 8: TESTIMONIALS */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* SECTION 9: FAQ */}
      <FAQAccordion items={FAQS} />

      {/* SECTION 10: LARGE CTA */}
      <div className="mt-16 bg-gradient-to-r from-emerald-950 via-[#2B103A] to-emerald-950 text-[#EFE7DA] p-10 md:p-14 rounded-[32px] text-center shadow-2xl relative overflow-hidden border border-[#C49A2A]/30">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Not sure which service you need in Saudi Arabia?
        </h2>
        <p className="text-xs md:text-base text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Tell Mimi about your educational journey in the Kingdom and we&apos;ll help you choose.
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
      <CrossNav currentPath="/saudi/student-services" country="saudi" />
    </main>
  );
}
