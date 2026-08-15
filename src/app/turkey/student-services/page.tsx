"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  UserCheck,
  Users,
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
  color: string;
  selectedColor: string;
}

const PERSONAS: Persona[] = [
  {
    id: "new_student",
    emoji: "🎓",
    title: "New Student",
    subtitle: "Just arrived or arriving soon",
    description:
      "You are moving to Turkey to study and you need help getting set up. We take care of the practical things so you can focus on starting your new chapter.",
    color: "border-[#2B103A]/10 hover:border-[#C49A2A]",
    selectedColor: "border-[#C49A2A] bg-[#2B103A] text-[#EFE7DA]",
  },
  {
    id: "current_student",
    emoji: "📚",
    title: "Current Student",
    subtitle: "Already studying in Turkey",
    description:
      "You are already living in Turkey but there are things you need help with — university paperwork, a phone call you cannot make in Turkish, or a local task you need assistance with.",
    color: "border-[#2B103A]/10 hover:border-[#C49A2A]",
    selectedColor: "border-[#C49A2A] bg-[#2B103A] text-[#EFE7DA]",
  },
  {
    id: "parent",
    emoji: "👨‍👩‍👧",
    title: "Parent",
    subtitle: "Your child is studying in Turkey",
    description:
      "Your child is far away and you want to know they are okay. We offer simple, honest check-ins and updates so you can stay connected without worrying.",
    color: "border-[#2B103A]/10 hover:border-[#C49A2A]",
    selectedColor: "border-[#C49A2A] bg-[#2B103A] text-[#EFE7DA]",
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
  { icon: Home, title: "Housing help", desc: "Finding a safe, suitable place to live near your university." },
  { icon: Smartphone, title: "SIM card setup", desc: "Getting a Turkish SIM card and phone plan so you are connected from day one." },
  { icon: CreditCard, title: "Transportation card", desc: "Setting up your Istanbulkart or local transit card for getting around the city." },
  { icon: MapPin, title: "City orientation", desc: "A practical introduction to your neighbourhood — shops, transport, and the basics." },
  { icon: CheckCircle2, title: "First-week setup", desc: "Help with all the small but important things you need to do in your first days." },
  { icon: BookOpen, title: "University guidance", desc: "General guidance on navigating your university registration and campus life." },
];

const CURRENT_STUDENT_SERVICES: ServiceCard[] = [
  { icon: Languages, title: "Translation help", desc: "We translate messages, letters, and documents — and can be there for phone calls." },
  { icon: Calendar, title: "Appointment assistance", desc: "We accompany you to government offices, hospitals, or university appointments." },
  { icon: BookOpen, title: "University-related help", desc: "Help navigating your university administration, forms, and bureaucratic processes." },
  { icon: HelpCircle, title: "Everyday local assistance", desc: "General help with daily tasks that are difficult without local language or knowledge." },
  { icon: FileText, title: "Paperwork guidance", desc: "Help understanding and organizing official documents and administrative requirements." },
  { icon: Building, title: "Housing & local issues", desc: "Help resolving issues with landlords, utilities, neighbours, or your living situation." },
];

const PARENT_SERVICES: ServiceCard[] = [
  {
    icon: Video,
    title: "Student Check-In",
    desc: "A scheduled video call and check-in with the student by a fellow local student guide. We say hello, check how their classes and daily routine are going, and send you a friendly summary.",
    ctaText: "Request Service",
    ctaHref: "/contact?service=parent-video-checkin&dest=turkey",
  },
  {
    icon: Home,
    title: "Housing Check",
    desc: "A video walkthrough and check-in of the student's room or flat. We give you a clear visual look at their living setup, heating, and surroundings so you know they are comfortable.",
    ctaText: "Request Service",
    ctaHref: "/contact?service=parent-housing-check&dest=turkey",
  },
  {
    icon: Plane,
    title: "Arrival Update",
    desc: "A quick, reassuring update right after the student lands in Turkey, gets their local SIM connected, and settles into their first accommodation.",
    ctaText: "Request Service",
    ctaHref: "/contact?service=parent-update&dest=turkey",
  },
  {
    icon: Calendar,
    title: "Ongoing Updates",
    desc: "Optional scheduled updates (e.g. monthly or per semester) tailored to give parents peace of mind throughout the academic term while respecting student independence.",
    ctaText: "Learn More",
    ctaHref: "/contact?service=parent-monthly&dest=turkey",
  },
];

function ServiceCardItem({ icon: Icon, title, desc, ctaText, ctaHref }: ServiceCard) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-5 rounded-[18px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md group">
      <div className="flex gap-4 items-start mb-3">
        <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2B103A] bg-[#C49A2A]/20 hover:bg-[#C49A2A] hover:text-[#2B103A] px-3.5 py-1.5 rounded-full transition-colors"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function TurkeyStudentServicesPage() {
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
          🇹🇷 Turkey · Student Support
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2B103A] mb-4 leading-tight">
          Student Services in Turkey
        </h1>
        <p className="text-sm text-[#2B103A]/70 max-w-xl mx-auto leading-relaxed">
          Whether you are arriving for the first time, already settled in, or a parent keeping an
          eye on your child — tell us who you are and we will show you exactly how we can help.
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
            <div className="bg-[#2B103A] text-[#EFE7DA] border border-[#C49A2A]/30 rounded-[24px] p-6 md:p-8 mb-6 relative overflow-hidden shadow-lg">
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
                    As students studying abroad, we know how much families worry from a distance. We offer simple, friendly check-ins, housing video walkthroughs, and clear updates so you always stay connected.
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
          <div className="bg-gradient-to-br from-[#2B103A] to-[#3D1852] text-[#EFE7DA] rounded-[24px] p-8 text-center">
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

      {/* DEFAULT STATE - no persona selected */}
      {!selected && (
        <div className="text-center py-12 text-[#2B103A]/40">
          <ChevronDown className="w-6 h-6 mx-auto mb-2 animate-bounce" />
          <p className="text-sm">Select your profile above to see the services available to you.</p>
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="mt-16 pt-8 border-t border-[#2B103A]/10 flex flex-wrap gap-3 justify-center">
        <Link href="/turkey" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          ← Back to Turkey
        </Link>
        <Link href="/turkey/parent" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Parent Support
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/turkey/translation" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Translation Services
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/turkey/paperwork" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Paperwork Assistance
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/turkey/travel" className="text-xs text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Travel Services
        </Link>
      </div>
    </main>
  );
}
