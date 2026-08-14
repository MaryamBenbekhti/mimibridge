"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe2, 
  ShieldCheck, 
  HeartHandshake, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  LucideIcon 
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C49A2A] font-bold block mb-3">
            Behind the Bridge
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-[#2B103A] leading-tight">
            Connecting Worldviews, Cultures & Opportunities
          </h1>
          <p className="text-sm md:text-base text-[#2B103A]/70 max-w-2xl mx-auto leading-relaxed">
            Mimi Bridge was not built in a boardroom. It was created out of real, personal experience navigating life, study, and business across Saudi Arabia and Turkey.
          </p>
        </div>

        {/* Impact Numbers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-[#2B103A] text-[#EFE7DA] p-6 md:p-8 rounded-[24px] shadow-lg">
          <StatItem number="4+" label="Languages Supported" />
          <StatItem number="2" label="Active Hubs (TR & SA)" />
          <StatItem number="100%" label="Verified On-Ground Support" />
          <StatItem number="24/7" label="Concierge Availability" />
        </div>

        {/* Founder Story Block */}
        <div className="relative bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[28px] border border-[#2B103A]/10 shadow-xl mb-16 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Compass className="w-72 h-72 text-[#2B103A]" />
          </div>

          <div className="relative z-10">
            <span className="inline-block bg-[#2B103A]/5 text-[#2B103A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Roots
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-[#2B103A]">
              The Founder's Journey
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#2B103A]/80 leading-relaxed">
              <p>
                Having spent years living between Saudi Arabia and Turkey, our founder encountered first-hand the daily friction faced by individuals moving across borders—language barriers, unfamiliar bureaucracy, lease negotiations, and legal setup.
              </p>
              <p>
                Fluent in <strong className="text-[#2B103A] font-semibold">Arabic, English, French, and Turkish</strong>, the founder began personally translating and assisting friends, visiting families, and business executives. What started as direct personal help evolved into a full cross-border concierge.
              </p>
              <p>
                Mimi Bridge exists so you never have to navigate a new country alone. We provide verified, on-ground support rooted in cultural empathy and local competence.
              </p>
            </div>

            {/* Language Badges */}
            <div className="mt-8 pt-6 border-t border-[#2B103A]/10 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mr-2">
                Core Languages:
              </span>
              {["العربية", "English", "Türkçe", "Français"].map((lang) => (
                <span 
                  key={lang} 
                  className="bg-white/80 border border-[#2B103A]/10 text-[#2B103A] px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">
              Our Guiding Principles
            </h2>
            <p className="text-xs md:text-sm text-[#2B103A]/70">
              Built on transparency, clear communication, and cultural alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={Globe2}
              title="Multilingual"
              desc="Native support in Arabic, Turkish, English, and French for clear, seamless cross-border communication."
            />
            <ValueCard
              icon={ShieldCheck}
              title="On-Ground Trust"
              desc="Verified physical presence, legal guidance, transparent pricing, and zero hidden overhead."
            />
            <ValueCard
              icon={HeartHandshake}
              title="Cultural Empathy"
              desc="Deep understanding of social customs, business etiquette, and lifestyle nuances in Turkey and Saudi Arabia."
            />
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#2B103A] to-[#3D1852] text-[#EFE7DA] p-8 md:p-12 rounded-[28px] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to cross the bridge with confidence?
            </h2>
            <p className="text-xs md:text-sm text-[#EFE7DA]/80 mb-8 leading-relaxed">
              Whether you are enrolling in a university, relocating your family, or establishing business operations, our team is ready to support you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/journey-planner"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-md"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 hover:border-[#EFE7DA] text-[#EFE7DA] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-serif text-2xl md:text-3xl font-bold text-[#C49A2A] mb-1">{number}</p>
      <p className="text-[10px] md:text-xs uppercase tracking-wider text-[#EFE7DA]/70 font-medium">{label}</p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[24px] border border-[#2B103A]/10 text-center hover:border-[#C49A2A] transition-all duration-300 hover:shadow-xl group">
      <div className="w-12 h-12 bg-[#2B103A] text-[#C49A2A] rounded-[16px] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-serif font-bold text-xl mb-2 text-[#2B103A]">{title}</h3>
      <p className="text-xs text-[#2B103A]/70 leading-relaxed">{desc}</p>
    </div>
  );
}