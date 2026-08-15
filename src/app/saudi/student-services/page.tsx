"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  HelpCircle,
  Video,
  Camera,
  MessageSquare,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

type PersonaId = "new_student" | "current_student" | "parent";

interface Persona {
  id: PersonaId;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  selectedColor: string;
  color: string;
}

const PERSONAS: Persona[] = [
  {
    id: "new_student",
    emoji: "🎓",
    title: "New Student",
    subtitle: "Just arrived or arriving soon",
    description:
      "You are moving to Saudi Arabia to study and you need help getting set up. We help with the practical things — housing, SIM, Iqama guidance, and getting your first weeks sorted.",
    color: "border-[#2B103A]/10 hover:border-emerald-700",
    selectedColor: "border-emerald-700 bg-emerald-900 text-[#EFE7DA]",
  },
  {
    id: "current_student",
    emoji: "📚",
    title: "Current Student",
    subtitle: "Already studying in Saudi Arabia",
    description:
      "You are already living in Saudi Arabia but there are things you need help with — a government appointment, Arabic translation, or navigating university administration.",
    color: "border-[#2B103A]/10 hover:border-emerald-700",
    selectedColor: "border-emerald-700 bg-emerald-900 text-[#EFE7DA]",
  },
  {
    id: "parent",
    emoji: "👨‍👩‍👧",
    title: "Parent",
    subtitle: "Your child is studying in Saudi Arabia",
    description:
      "Your child is studying in Saudi Arabia and you want to stay informed. We offer simple, honest check-ins and updates — so you feel close even from far away.",
    color: "border-[#2B103A]/10 hover:border-emerald-700",
    selectedColor: "border-emerald-700 bg-emerald-900 text-[#EFE7DA]",
  },
];

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  ctaText?: string;
  ctaHref?: string;
}

const NEW_STUDENT_SERVICES: ServiceCard[] = [
  { icon: Plane, title: "Arrival assistance", desc: "We meet you at the airport and help you get to your accommodation safely." },
  { icon: Home, title: "Housing help", desc: "Finding suitable student accommodation — shared flats, university housing, or compounds." },
  { icon: Smartphone, title: "SIM card setup", desc: "Getting a Saudi SIM (STC, Mobily, or Zain) and data plan so you are connected from day one." },
  { icon: CreditCard, title: "Transportation card", desc: "Help with local transport options and getting around your city." },
  { icon: MapPin, title: "City orientation", desc: "A practical introduction to your city — where to shop, eat, get around, and feel at home." },
  { icon: CheckCircle2, title: "First-week setup", desc: "Help with all the small but important things in your first days — opening a bank account, SPL National Address, and more." },
  { icon: BookOpen, title: "University guidance", desc: "General guidance on enrolling, registering at your university, and understanding what documents you need." },
];

const CURRENT_STUDENT_SERVICES: ServiceCard[] = [
  { icon: Languages, title: "Translation help", desc: "We translate Arabic documents, letters, and messages — and can accompany you to appointments." },
  { icon: Calendar, title: "Appointment assistance", desc: "We accompany you to government offices, clinics, university admin, or Absher-related appointments." },
  { icon: BookOpen, title: "University-related help", desc: "Help navigating university administration, forms, and official academic processes." },
  { icon: HelpCircle, title: "Everyday local assistance", desc: "General help with daily tasks that are harder without Arabic or local knowledge." },
  { icon: FileText, title: "Paperwork guidance", desc: "Help understanding and organizing official documents, Iqama-related paperwork, and administrative steps." },
  { icon: Building, title: "Housing & local issues", desc: "Help resolving issues with Ejar contracts, landlords, utilities, or your living situation." },
];

const PARENT_SERVICES: ServiceCard[] = [
  {
    icon: Video,
    title: "Student Check-In",
    desc: "A scheduled video call and check-in with the student by a fellow local student guide in Saudi Arabia. We say hello, check how their routine is going, and send you a friendly summary.",
    ctaText: "Request Service",
    ctaHref: "/contact?service=parent-video-checkin&dest=saudi",
  },
  {
    icon: Home,
    title: "Housing Check",
    desc: "A video walkthrough and check-in of the student's campus dorm or flat. We give you a clear visual look at their living environment and air conditioning setup so you know they are comfortable.",
    ctaText: "Request Service",
    ctaHref: "/contact?service=parent-housing-check&dest=saudi",
  },
  {
    icon: Plane,
    title: "Arrival Update",
    desc: "A quick, reassuring update directly to you once the student arrives safely in Saudi Arabia, gets their local SIM connected, and settles into their initial housing.",
    ctaText: "Request Service",
    ctaHref: "/contact?service=parent-update&dest=saudi",
  },
  {
    icon: Calendar,
    title: "Ongoing Updates",
    desc: "Optional scheduled updates (e.g. monthly or per semester) tailored to give parents peace of mind throughout their studies in the Kingdom while respecting student independence.",
    ctaText: "Learn More",
    ctaHref: "/contact?service=parent-monthly&dest=saudi",
  },
];

function ServiceCardItem({ icon: Icon, title, desc, ctaText, ctaHref }: ServiceCard) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-5 rounded-[18px] border border-[#2B103A]/10 hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md group">
      <div className="flex gap-4 items-start mb-3">
        <div className="w-10 h-10 bg-emerald-900 text-[#C49A2A] rounded-[12px] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-sm text-[#2B103A] mb-1">{title}</h4>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed">{desc}</p>
        </div>
      </div>
      {ctaText && ctaHref && (
        <div className="pt-3 border-t border-[#2B103A]/5 flex justify-end">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function SaudiStudentServicesPage() {
  const [selected, setSelected] = useState<PersonaId | null>(null);

  const selectedPersona = PERSONAS.find((p) => p.id === selected);

  const services =
    selected === "new_student"
      ? NEW_STUDENT_SERVICES
      : selected === "current_student"
      ? CURRENT_STUDENT_SERVICES
      : selected === "parent"
      ? PARENT_SERVICES
      : [];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* HEADER */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-3">
          🇸🇦 Saudi Arabia · Student Support
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2B103A] mb-4 leading-tight">
          Student Services in Saudi Arabia
        </h1>
        <p className="text-sm text-[#2B103A]/70 max-w-xl mx-auto leading-relaxed">
          Whether you are arriving for the first time, already studying here, or a parent keeping
          an eye on your child — tell us who you are and we will show you exactly how we can help.
        </p>
      </div>

      {/* PERSONA SELECTOR */}
      <div id="parent" className="mb-10">
        <p className="text-xs uppercase tracking-widest font-bold text-[#2B103A]/50 text-center mb-5">
          Who are you?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PERSONAS.map((persona) => {
            const isSelected = selected === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => setSelected(isSelected ? null : persona.id)}
                className={`text-left p-5 rounded-[20px] border-2 transition-all duration-200 cursor-pointer shadow-sm ${
                  isSelected
                    ? persona.selectedColor
                    : "bg-white/40 backdrop-blur-md " + persona.color
                }`}
              >
                <div className="text-3xl mb-3">{persona.emoji}</div>
                <h3
                  className={`font-serif font-bold text-lg mb-1 ${
                    isSelected ? "text-[#EFE7DA]" : "text-[#2B103A]"
                  }`}
                >
                  {persona.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isSelected ? "text-[#EFE7DA]/80" : "text-[#2B103A]/60"
                  }`}
                >
                  {persona.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SELECTED PERSONA CONTENT */}
      {selectedPersona && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header banner for parent or standard description */}
          {selected === "parent" ? (
            <div className="bg-emerald-950 text-[#EFE7DA] border border-emerald-500/30 rounded-[24px] p-6 md:p-8 mb-6 relative overflow-hidden shadow-lg">
              <div className="flex items-start gap-4">
                <span className="text-4xl">👨‍👩‍👧</span>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
                    Parent Support
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#EFE7DA] mb-2 leading-tight">
                    &ldquo;Your child is far away. You don&apos;t have to feel far away.&rdquo;
                  </h2>
                  <p className="text-xs md:text-sm text-[#EFE7DA]/85 leading-relaxed max-w-2xl">
                    As students studying in Saudi Arabia, we understand how much peace of mind matters to families abroad. We offer friendly peer check-ins, campus accommodation video walkthroughs, and clear updates so you always feel close.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#2B103A]/5 border border-[#2B103A]/10 rounded-[20px] p-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{selectedPersona.emoji}</span>
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#2B103A] mb-2">
                    {selectedPersona.title}
                  </h2>
                  <p className="text-sm text-[#2B103A]/70 leading-relaxed">
                    {selectedPersona.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Parent disclaimer */}
          {selected === "parent" && (
            <div className="bg-amber-50/90 border border-amber-200/80 rounded-[16px] p-4 mb-6 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
              <span className="shrink-0 text-sm">ℹ️</span>
              <div>
                <strong>A note for parents:</strong> Mimi Bridge is a student-run local support network. We offer friendly peer check-ins and practical updates with student consent. We do not provide emergency response, legal guardianship, or guaranteed physical supervision.
              </div>
            </div>
          )}

          {/* Services grid */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest font-bold text-[#2B103A]/50 mb-4">
              {selected === "parent" ? "Parent Services Available" : "How we help"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <ServiceCardItem key={s.title} {...s} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-900 to-[#2B103A] text-[#EFE7DA] rounded-[24px] p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-3">
              {selected === "parent"
                ? "Stay connected with your child"
                : "Ready to get started?"}
            </h3>
            <p className="text-xs text-[#EFE7DA]/75 max-w-md mx-auto mb-6 leading-relaxed">
              {selected === "parent"
                ? "Your child is far away. You don't have to feel far away. Get in touch and we'll explain exactly what we offer."
                : "Tell us a bit about your situation and we'll get back to you quickly with how we can help."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Mimi Bridge</span>
              </Link>
              <Link
                href="/journey-planner"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 text-[#EFE7DA] border border-[#EFE7DA]/20 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                <span>Plan my journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* DEFAULT STATE */}
      {!selected && (
        <div className="text-center py-12 text-[#2B103A]/40">
          <ChevronDown className="w-6 h-6 mx-auto mb-2 animate-bounce" />
          <p className="text-sm">Select your profile above to see the services available to you.</p>
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="mt-16 pt-8 border-t border-[#2B103A]/10 flex flex-wrap gap-3 justify-center">
        <Link href="/saudi" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          ← Back to Saudi Arabia
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/translation" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Translation Services
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/paperwork" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Paperwork Assistance
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/travel" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Travel Services
        </Link>
      </div>
    </main>
  );
}
