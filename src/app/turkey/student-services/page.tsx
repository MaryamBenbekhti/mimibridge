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
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  Heart,
  Globe,
  Wifi,
  ShoppingBasket,
  ShieldAlert,
  Video,
  Eye,
  CalendarCheck,
  HeartHandshake,
} from "lucide-react";

// SECTION 1: WHO IS THIS FOR?
const TARGET_AUDIENCE = [
  {
    title: "Current Student",
    subtitle: "Already living & studying in Turkey",
    desc: "For students already living in Turkey who need help with everyday university, administrative, housing, or local tasks.",
    icon: UserCheck,
    persona: "current_student" as PersonaType,
    services: [
      "University & Campus Assistance",
      "Housing Assistance",
      "Translation & Communication",
      "Administrative Paperwork Assistance",
      "Appointment Assistance",
      "Local Service Guidance",
      "Transportation & SIM Assistance",
    ],
    cta: "GET STUDENT HELP",
  },
  {
    title: "New Student",
    subtitle: "Preparing to arrive or in first week",
    desc: "For students preparing to arrive in Turkey and those in their first days of settling in.",
    icon: GraduationCap,
    persona: "new_student" as PersonaType,
    services: [
      "Pre-arrival Checklist",
      "Student Housing Assistance",
      "SIM Card Assistance",
      "Transportation Card Guidance",
      "University Orientation",
      "Basic Local Setup",
      "Administrative Paperwork Assistance",
      "First Week Support",
    ],
    cta: "START MY JOURNEY",
  },
  {
    title: "Parent",
    subtitle: "Peace of mind for families abroad",
    desc: "For parents who want support and peace of mind while their son or daughter is studying in Turkey.",
    icon: Users,
    persona: "parent" as PersonaType,
    services: [
      "Student Arrival Confirmation",
      "Video Check-In",
      "Student Wellbeing / Status Updates",
      "Housing Video Check",
      "Local Area Video Update",
      "Parent Communication Support",
      "Emergency Contact Assistance",
    ],
    cta: "SUPPORT MY STUDENT",
  },
];

// DEDICATED PARENT SUPPORT SERVICES
const PARENT_SUPPORT_SERVICES = [
  {
    id: "ps1",
    title: "STUDENT VIDEO CHECK-IN",
    price: "Starting from $20",
    desc: "A scheduled video call with the student to confirm that they have arrived and are settling in.",
    features: [
      "Scheduled video call",
      "Basic arrival confirmation",
      "Check that the student has access to their accommodation",
      "General update shared with the parent",
      "Short written summary after the call",
    ],
    note: "This is a general support and communication service. Do not describe it as medical, psychological, or professional wellbeing monitoring.",
    icon: Video,
  },
  {
    id: "ps2",
    title: "HOUSING VIDEO CHECK",
    price: "Starting from $30",
    desc: "A video walkthrough of the student's accommodation.",
    features: [
      "Live or recorded video walkthrough",
      "Check visible basic conditions",
      "Show bedroom and common areas",
      "Show nearby surroundings if appropriate",
      "Parent receives a short summary",
    ],
    disclaimer: "Mimi Bridge provides a visual and general condition check only. This is not a professional property inspection or legal assessment.",
    icon: Eye,
  },
  {
    id: "ps3",
    title: "PARENT UPDATE",
    price: "Starting from $15",
    desc: "A simple update for parents who want to know how their student is doing with their initial setup.",
    features: [
      "Student status update",
      "Housing/setup update",
      "University/arrival progress",
      "General local situation",
      "Written summary sent to parent",
    ],
    icon: FileText,
  },
  {
    id: "ps4",
    title: "MONTHLY STUDENT CHECK-IN",
    price: "Starting from $40/month",
    desc: "For parents who want recurring support.",
    features: [
      "One scheduled student video check-in per month",
      "One parent update per month",
      "Basic accommodation/setup update",
      "Assistance communicating with the student if needed",
      "Summary after each check-in",
    ],
    note: "Do NOT describe this as professional supervision or health monitoring.",
    icon: CalendarCheck,
  },
];

// SECTION 2: BEFORE ARRIVAL
const BEFORE_ARRIVAL: ServiceItem[] = [
  {
    id: "ba1",
    title: "University Consultation",
    desc: "Expert academic evaluation matching your target field with top-ranked private and public Turkish universities.",
    icon: School,
    tags: ["Academic Planning", "Degree Selection"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ba2",
    title: "Admission Guidance",
    desc: "End-to-end management of university applications, acceptance letters, and ministry equivalency (Denklik) applications.",
    icon: FileCheck,
    tags: ["Admissions", "Denklik"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ba3",
    title: "Required Documents",
    desc: "Verification, apostille check, and sworn translation into Turkish for high school diplomas, transcripts, and passport copies.",
    icon: FileText,
    tags: ["Sworn Translation", "Apostille"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ba4",
    title: "Visa Information",
    desc: "Official embassy document preparation and step-by-step guidance for Turkish student visa approvals.",
    icon: Shield,
    tags: ["Consulate", "Visa Docs"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ba5",
    title: "Airport Pickup",
    desc: "Private chauffeur meet & greet upon landing at Istanbul (IST), Sabiha Gökçen (SAW), Ankara (ESB).",
    icon: Plane,
    tags: ["Private Chauffeur", "Luggage Support"],
    relevantPersonas: ["new_student", "parent", "family"],
  },
];

// SECTION 3: HOUSING
const HOUSING: ServiceItem[] = [
  {
    id: "h1",
    title: "Dormitory Assistance",
    desc: "Securing vetted male or female state/private university dormitories close to your campus with meal options.",
    icon: Building,
    tags: ["Campus Dorms", "Vetted Safety"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "h2",
    title: "Apartment Search",
    desc: "Curated long-term residential listings in safe neighborhoods with convenient commutes to your university.",
    icon: Home,
    tags: ["Private Rental", "Prime Locations"],
    relevantPersonas: ["current_student", "family"],
  },
  {
    id: "h3",
    title: "Apartment Viewing",
    desc: "In-person tours or high-definition live video walkthroughs of apartments prior to signing lease agreements.",
    icon: MapPin,
    tags: ["Video Tours", "Neighborhood Check"],
    relevantPersonas: ["parent", "current_student"],
  },
  {
    id: "h4",
    title: "Contract Translation",
    desc: "Sworn legal translation and clause protection review for Turkish lease contracts to safeguard tenant deposit rights.",
    icon: FileText,
    tags: ["Lease Legal Check", "Tenant Protection"],
    relevantPersonas: ["parent", "current_student"],
  },
  {
    id: "h5",
    title: "Utility Setup",
    desc: "On-site companion support for registering water, electricity, gas meters, and high-speed fiber internet accounts.",
    icon: CreditCard,
    tags: ["Meter Opening", "Bills Registration"],
    relevantPersonas: ["current_student"],
  },
];

// SECTION 4: UNIVERSITY LIFE
const UNIVERSITY_LIFE: ServiceItem[] = [
  {
    id: "ul1",
    title: "Registration",
    desc: "Direct companion support at the university student affairs office for final physical document submission and enrollment.",
    icon: UserCheck,
    tags: ["Student Affairs", "Final Enrollment"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "ul2",
    title: "Student Card",
    desc: "Assistance with official university photo submission, ID card printing, and campus gate access authorization.",
    icon: CreditCard,
    tags: ["Campus ID", "Library Access"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ul3",
    title: "Course Selection",
    desc: "Guidance navigating the academic portal (OBS), course registration prerequisites, and credit load requirements.",
    icon: BookOpen,
    tags: ["OBS Portal", "Syllabus Check"],
    relevantPersonas: ["new_student", "current_student"],
  },
  {
    id: "ul4",
    title: "Orientation",
    desc: "Guided introductions to university facilities, student clubs, international office representatives, and academic mentors.",
    icon: Sparkles,
    tags: ["Campus Welcome", "Peer Networking"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "ul5",
    title: "Campus Tour",
    desc: "In-depth walkthrough of university libraries, cafeteria systems, sports complexes, labs, and nearby transit hubs.",
    icon: MapPin,
    tags: ["Facility Mapping", "Transit Connections"],
    relevantPersonas: ["new_student", "parent"],
  },
];

// SECTION 5: GOVERNMENT SERVICES
const GOVERNMENT_SERVICES: ServiceItem[] = [
  {
    id: "gs1",
    title: "Residence Permit",
    desc: "Full management of Student Ikamet application, appointment slot booking, document folder preparation, and status tracking.",
    icon: Shield,
    tags: ["Student Ikamet", "e-Ikamet Portal"],
    relevantPersonas: ["new_student", "current_student"],
  },
  {
    id: "gs2",
    title: "Tax Number",
    desc: "Instant acquisition of your official Turkish Tax Identification Number (Vergi Numarası) required for banking and lease contracts.",
    icon: FileText,
    tags: ["Vergi No", "Official Registrations"],
    relevantPersonas: ["new_student", "current_student"],
  },
  {
    id: "gs3",
    title: "Bank Account",
    desc: "Accompanied visits to top Turkish banks (Ziraat, İş Bankası, VakıfBank) to open multi-currency account cards with mobile banking.",
    icon: CreditCard,
    tags: ["TRY / USD / EUR", "Mobile App"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "gs4",
    title: "Health Insurance",
    desc: "Sourcing certified private student health insurance policies compliant with Turkish Immigration Directorate (Göç İdaresi) standards.",
    icon: Shield,
    tags: ["Ikamet Compliant", "Hospital Network"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "gs5",
    title: "Transportation Card",
    desc: "Issuance of discounted student public transit cards (Istanbulkart, Ankarakart, etc.) for unlimited affordable city travel.",
    icon: CreditCard,
    tags: ["Student Discount", "Metro / Bus"],
    relevantPersonas: ["new_student", "current_student"],
  },
];

// SECTION 6: DAILY LIFE
const DAILY_LIFE: ServiceItem[] = [
  {
    id: "dl1",
    title: "SIM Card",
    desc: "Passport-based setup for mobile SIM cards (Turkcell, Vodafone, Türk Telekom) with high-speed student data bundles.",
    icon: Smartphone,
    tags: ["Mobile Data", "Tourist / Student SIM"],
    relevantPersonas: ["new_student", "parent"],
  },
  {
    id: "dl2",
    title: "Furniture Marketplace",
    desc: "Access to curated second-hand or affordable new student furniture suppliers, including delivery and assembly.",
    icon: ShoppingBag,
    tags: ["Desks & Beds", "Assembly Support"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "dl3",
    title: "Internet Setup",
    desc: "Fiber home broadband installation management (Türk Telekom, Superonline) with English contract assistance.",
    icon: Wifi,
    tags: ["Home Broadband", "Fast Fiber"],
    relevantPersonas: ["current_student"],
  },
  {
    id: "dl4",
    title: "Shopping Guide",
    desc: "Local directory and accompanied tours for student grocery markets, electronics hubs, and study supplies.",
    icon: ShoppingBasket,
    tags: ["Local Markets", "Electronics Deals"],
    relevantPersonas: ["new_student"],
  },
  {
    id: "dl5",
    title: "Emergency Support",
    desc: "24/7 priority multi-lingual hotline for medical emergencies, urgent translations, and local legal guidance.",
    icon: ShieldAlert,
    tags: ["24/7 Hotline", "Urgent Response"],
    relevantPersonas: ["parent", "new_student", "family"],
  },
];

// SECTION 7: PACKAGES DATA
const STUDENT_PACKAGES = [
  {
    title: "New Student Starter",
    price: "Starting from $50",
    description: "Practical help for students arriving in Turkey for the first time.",
    features: [
      "SIM card guidance",
      "Transportation card assistance",
      "University orientation",
      "Supermarket & essential shops guide",
      "Basic Turkish phrases for everyday life",
      "WhatsApp support for initial questions",
    ],
    buttonText: "GET STARTED",
    popular: false,
  },
  {
    title: "Student Housing Help",
    price: "Starting from $50",
    description: "Practical assistance for students looking for accommodation in Turkey.",
    features: [
      "Help finding suitable listings",
      "Help communicating with landlords",
      "Translation of basic rental conversations",
      "One apartment viewing accompaniment",
      "Basic rental checklist",
      "General guidance about the local area",
    ],
    disclaimer: "Mimi Bridge provides general assistance and translation support. We do not provide legal or real-estate advice.",
    buttonText: "GET HOUSING HELP",
    popular: false,
  },
  {
    title: "Complete First Week",
    price: "Starting from $120",
    description: "A helping hand during your first days in Turkey.",
    features: [
      "Arrival orientation",
      "SIM card assistance",
      "Transportation card assistance",
      "University orientation",
      "Housing assistance",
      "Essential shops and pharmacy tour",
      "Help communicating with locals",
      "7 days of WhatsApp support",
    ],
    buttonText: "CHOOSE PACKAGE",
    popular: true,
  },
];

// SECTION 8: TESTIMONIALS
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Tariq Al-Mansoor",
    role: "Engineering Student",
    cityOrUni: "Istanbul Technical University",
    quote: "Mimi Bridge handled everything from my airport pickup to securing my student residence permit. I didn't have to worry about bureaucratic delays at all.",
    rating: 5,
  },
  {
    name: "Dr. Fatima Al-Khatib",
    role: "Parent",
    cityOrUni: "Medipol University Parent",
    quote: "As a parent sending my daughter to study in Istanbul, having a trusted team conduct apartment viewings and contract reviews gave us immense peace of mind.",
    rating: 5,
  },
  {
    name: "Omar Bakri",
    role: "Architecture Student",
    cityOrUni: "Karabük University",
    quote: "The team assisted with my Denklik equivalence documents and dorm placement in Karabük within just 48 hours of arriving in Turkey. Highly professional service!",
    rating: 5,
  },
];

// SECTION 9: FAQ
const FAQS: FAQItem[] = [
  {
    question: "What is Denklik and why do I need it?",
    answer: "Denklik is the official high school diploma equivalency certificate issued by the Turkish Ministry of National Education (MEB). It confirms your previous education meets Turkish university admission standards. We assist with document translation, apostille validation, and submission to the education ministry.",
  },
  {
    question: "When should I apply for my Student Residence Permit (Ikamet)?",
    answer: "You must initiate your e-Ikamet application online within your 90-day visa validity window after entering Turkey. We prepare your complete physical dossier—including health insurance, student certificate, tax ID, and address verification—and accompany you to your appointment.",
  },
  {
    question: "Can parents accompany students during the orientation and housing process?",
    answer: "Yes! We provide full family accompaniment packages including airport transfers, hotel arrangements, and translated lease viewings so parents can comfortably participate in settling their children.",
  },
  {
    question: "How long does bank account opening take for international students?",
    answer: "With our on-ground companion, bank account opening at major Turkish banks (with debit cards and mobile banking enabled) takes less than 2 hours once your Tax ID and passport translations are prepared.",
  },
  {
    question: "Which cities in Turkey do you cover for student services?",
    answer: "We offer direct on-ground presence in Istanbul, Ankara, Trabzon, and Karabük/Safranbolu, as well as remote consultation support for all other Turkish university towns.",
  },
];

// SECTION 10: TIMELINE
const STUDENT_TIMELINE: TimelineStep[] = [
  { stepNumber: 1, title: "University Consultation", description: "Select program, submit documents & get acceptance." },
  { stepNumber: 2, title: "Visa & Denklik", description: "Translate diplomas & obtain student visa." },
  { stepNumber: 3, title: "Arrival & Pickup", description: "VIP airport reception & student SIM activation." },
  { stepNumber: 4, title: "Housing & Campus", description: "Dorm/Apartment lease setup & university registration." },
  { stepNumber: 5, title: "Bank & Ikamet", description: "Tax ID, bank account & student residence permit." },
  { stepNumber: 6, title: "Fully Settled", description: "Enjoy campus life with 24/7 local support." },
];

export default function StudentServicesPage() {
  const [activePersona, setActivePersona] = useState<PersonaType | null>(null);

  const scrollToPackages = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("packages");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      {/* BREADCRUMB NAVIGATION */}
      <Breadcrumbs items={[{ label: "Turkey", href: "/turkey" }, { label: "Student Services" }]} />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        {/* Background Subtle Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A2A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <GraduationCap className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Academic Concierge Platform</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Student Services in <span className="text-[#C49A2A]">Turkey</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Everything you need from the moment you decide to study in Turkey until you are fully settled into campus and daily life.
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
                Tailored concierge solutions built specifically for every stage of your educational path.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TARGET_AUDIENCE.map((card, idx) => {
                const Icon = card.icon;
                const isSelected = activePersona && card.persona === activePersona;
                return (
                  <div
                    key={idx}
                    className={`bg-white/40 backdrop-blur-md p-6 rounded-[20px] border flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${isSelected
                      ? "border-[#C49A2A] ring-2 ring-[#C49A2A]/40 bg-white/80 scale-[1.02]"
                      : "border-[#2B103A]/10 hover:border-[#C49A2A]"
                      }`}
                  >
                    <div>
                      <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-[#2B103A] mb-1">{card.title}</h3>
                      <span className="text-[11px] font-semibold text-[#C49A2A] block mb-3">{card.subtitle}</span>
                      <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{card.desc}</p>

                      <ul className="space-y-2 text-xs text-[#2B103A]/80 mb-6 border-t border-[#2B103A]/10 pt-4">
                        {card.services.map((svc, sIdx) => (
                          <li key={sIdx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2A] shrink-0" />
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
          <section id="parent-support" className="bg-gradient-to-br from-amber-900/10 via-amber-800/5 to-transparent p-8 rounded-[28px] border border-[#C49A2A]/20">
            <div className="mb-8">
              <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-[#C49A2A] text-[#C49A2A]" />
                <span>Parent Support</span>
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#2B103A]">
                Stay Connected, Even From Far Away.
              </h2>
              <p className="text-xs md:text-sm text-[#2B103A]/75 mt-2 max-w-2xl leading-relaxed">
                Mimi Bridge helps parents stay informed about their student&apos;s arrival, accommodation, and general situation while they are away from home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PARENT_SUPPORT_SERVICES.map((ps) => {
                const Icon = ps.icon;
                return (
                  <div
                    key={ps.id}
                    className="bg-white/60 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center">
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2A] shrink-0 mt-0.5" />
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
            title="Before Arrival"
            subtitle="Admissions, academic guidance, document equivalence, and airport reception"
            items={BEFORE_ARRIVAL}
            activePersona={activePersona}
          />

          {/* SECTION 3: HOUSING */}
          <ServiceGrid
            title="Housing & Accommodation"
            subtitle="Vetted dormitory placement, private apartment sourcing, and contract protections"
            items={HOUSING}
            activePersona={activePersona}
          />

          {/* SECTION 4: UNIVERSITY LIFE */}
          <ServiceGrid
            title="University Life"
            subtitle="Campus onboarding, registration escort, ID authorization, and course selection"
            items={UNIVERSITY_LIFE}
            activePersona={activePersona}
          />

          {/* SECTION 5: GOVERNMENT SERVICES */}
          <ServiceGrid
            title="Government Services"
            subtitle="Official residence permits (Ikamet), tax IDs, banking, and health insurance"
            items={GOVERNMENT_SERVICES}
            activePersona={activePersona}
          />

          {/* SECTION 6: DAILY LIFE */}
          <ServiceGrid
            title="Daily Life"
            subtitle="SIM card setups, fiber internet, furniture marketplaces, and 24/7 emergency support"
            items={DAILY_LIFE}
            activePersona={activePersona}
          />

          {/* TIMELINE */}
          <ProcessTimeline
            title="Your Onboarding Journey"
            subtitle="From your initial university application to becoming fully settled on campus"
            steps={STUDENT_TIMELINE}
          />
        </div>

        {/* STICKY DESKTOP SIDEBAR */}
        <div className="lg:col-span-4 w-full">
          <StickySidebar
            title="Student Concierge Advisory"
            badge="On-Ground Academic Team"
            ctaText="Schedule Student Advisory"
            features={[
              "Direct liaison with Turkish university registries",
              "Verified student lease agreements & translation",
              "Complete e-Ikamet dossier preparation",
              "24/7 emergency student hotline",
            ]}
          />
        </div>
      </div>

      {/* SECTION 7: PACKAGES */}
      <div id="packages" className="py-16 border-t border-[#2B103A]/10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
            Student Support
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
            Student Service Packages
          </h2>
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2">
            Practical support for starting your new life in Turkey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_PACKAGES.map((pkg, idx) => (
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
      </div>

      {/* SECTION 8: TESTIMONIALS */}
      <TestimonialsSection items={TESTIMONIALS} />

      {/* SECTION 9: FAQ */}
      <FAQAccordion items={FAQS} />

      {/* SECTION 10: LARGE CTA */}
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
      <CrossNav currentPath="/turkey/student-services" />
    </main>
  );
}
