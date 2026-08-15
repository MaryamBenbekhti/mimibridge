"use client";

import React from "react";
import Link from "next/link";
import {
  Video,
  Home,
  Plane,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
}

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
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 hover:border-emerald-700 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md group">
      <div className="flex gap-4 items-start mb-4">
        <div className="w-11 h-11 bg-emerald-900 text-[#C49A2A] rounded-[14px] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-sm">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-lg text-[#2B103A] mb-1.5">{title}</h3>
          <p className="text-xs md:text-sm text-[#2B103A]/70 leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="pt-4 border-t border-[#2B103A]/5 flex justify-end">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-full transition-colors"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function SaudiParentPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* HEADER */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-3">
          🇸🇦 Saudi Arabia · Family & Parent Support
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2B103A] mb-4 leading-tight">
          Parent Support in Saudi Arabia
        </h1>
        <p className="text-sm md:text-base text-[#2B103A]/70 max-w-xl mx-auto leading-relaxed">
          Reliable, student-led updates and check-ins to give you peace of mind while your child studies in the Kingdom.
        </p>
      </div>

      {/* FEATURED BANNER */}
      <div className="bg-emerald-950 text-[#EFE7DA] border border-emerald-500/30 rounded-[24px] p-6 md:p-8 mb-8 relative overflow-hidden shadow-xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl shrink-0">👨‍👩‍👧</span>
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-1">
              Peace of Mind for Families
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#EFE7DA] mb-2 leading-tight">
              &ldquo;Your child is far away. You don&apos;t have to feel far away.&rdquo;
            </h2>
            <p className="text-xs md:text-sm text-[#EFE7DA]/85 leading-relaxed max-w-2xl">
              As students studying in Saudi Arabia, we understand how much peace of mind matters to families abroad. We provide friendly peer check-ins, campus accommodation video walkthroughs, and clear updates so you always feel close.
            </p>
          </div>
        </div>
      </div>

      {/* REALISTIC DISCLAIMER */}
      <div className="bg-amber-50/90 border border-amber-200/80 rounded-[16px] p-4 mb-8 text-xs text-amber-900 leading-relaxed flex items-start gap-3 shadow-sm">
        <span className="shrink-0 text-base">ℹ️</span>
        <div>
          <strong>A note for parents:</strong> Mimi Bridge is a student-run local support network. We offer friendly peer check-ins and practical updates with student consent. We do not provide emergency response, legal guardianship, or guaranteed physical supervision.
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#2B103A]/50 block">
              Services For Parents
            </span>
            <h2 className="font-serif text-xl font-bold text-[#2B103A]">
              How we help you stay connected
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PARENT_SERVICES.map((service) => (
            <ServiceCardItem key={service.title} {...service} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-emerald-900 to-[#2B103A] text-[#EFE7DA] rounded-[24px] p-8 md:p-10 text-center shadow-xl">
        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
          Stay connected with your child
        </h3>
        <p className="text-xs md:text-sm text-[#EFE7DA]/75 max-w-md mx-auto mb-6 leading-relaxed">
          Your child is far away. You don&apos;t have to feel far away. Get in touch and we&apos;ll explain exactly how our check-ins and updates work.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact?dest=saudi&service=student-parent"
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

      {/* BOTTOM NAV */}
      <div className="mt-16 pt-8 border-t border-[#2B103A]/10 flex flex-wrap gap-3 justify-center text-xs">
        <Link href="/saudi" className="text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          ← Back to Saudi Arabia
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/student-services" className="text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Student Services
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/translation" className="text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Translation Services
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/paperwork" className="text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Paperwork Assistance
        </Link>
        <span className="text-[#2B103A]/20">|</span>
        <Link href="/saudi/travel" className="text-[#2B103A]/60 hover:text-[#2B103A] transition-colors">
          Travel Services
        </Link>
      </div>
    </main>
  );
}
