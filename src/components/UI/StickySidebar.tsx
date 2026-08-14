"use client";

import React, { useState } from "react";
import { Clock, ShieldCheck, CheckCircle2, PhoneCall, Sparkles, Send } from "lucide-react";

interface StickySidebarProps {
  title?: string;
  badge?: string;
  features?: string[];
  ctaText?: string;
  onBookClick?: () => void;
}

export default function StickySidebar({
  title = "Instant Concierge Advisory",
  badge = "On-Ground Support in Turkey",
  features = [
    "Direct contact with local operational team",
    "Verified paperwork & contract review",
    "24/7 dedicated bilingual support",
    "Fast turnaround within 24 hours",
  ],
  ctaText = "Schedule Fast Advisory",
}: StickySidebarProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phoneOrEmail) {
      setSubmitted(true);
    }
  };

  return (
    <aside className="sticky top-28 space-y-6">
      <div className="bg-gradient-to-br from-[#2B103A] to-[#3D1852] text-[#EFE7DA] p-6 rounded-[24px] shadow-2xl border border-[#C49A2A]/20 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center space-x-1.5 bg-[#C49A2A] text-[#2B103A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            <span>{badge}</span>
          </span>
          <span className="flex items-center space-x-1 text-[10px] text-[#EFE7DA]/70">
            <Clock className="w-3 h-3 text-[#C49A2A]" />
            <span>Response &lt; 1 hr</span>
          </span>
        </div>

        <h3 className="font-serif font-bold text-xl mb-2 text-[#EFE7DA]">
          {title}
        </h3>
        <p className="text-xs text-[#EFE7DA]/80 leading-relaxed mb-5">
          Get direct, personalized assistance from our experts in Istanbul, Ankara, Trabzon, and Karabük.
        </p>

        {submitted ? (
          <div className="bg-[#EFE7DA]/10 backdrop-blur-md p-4 rounded-[16px] border border-[#C49A2A]/40 text-center">
            <CheckCircle2 className="w-8 h-8 text-[#C49A2A] mx-auto mb-2" />
            <h4 className="font-serif font-bold text-sm text-[#EFE7DA]">Inquiry Received!</h4>
            <p className="text-[11px] text-[#EFE7DA]/80 mt-1">
              Our Turkey specialist will contact you via WhatsApp or Email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#EFE7DA]/70 block mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Mansour"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#EFE7DA]/10 border border-[#EFE7DA]/20 rounded-[12px] p-2.5 text-xs text-[#EFE7DA] placeholder-[#EFE7DA]/40 outline-none focus:border-[#C49A2A]"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold tracking-wider text-[#EFE7DA]/70 block mb-1">
                WhatsApp or Email
              </label>
              <input
                type="text"
                required
                placeholder="e.g. +90 555 000 0000"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="w-full bg-[#EFE7DA]/10 border border-[#EFE7DA]/20 rounded-[12px] p-2.5 text-xs text-[#EFE7DA] placeholder-[#EFE7DA]/40 outline-none focus:border-[#C49A2A]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C49A2A] text-[#2B103A] py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-md flex items-center justify-center space-x-1.5 cursor-pointer mt-1"
            >
              <span>{ctaText}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-[#EFE7DA]/10">
          <ul className="space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center space-x-2 text-[11px] text-[#EFE7DA]/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2A] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Emergency Contact Card */}
      <div className="bg-white/50 backdrop-blur-md p-5 rounded-[20px] border border-[#2B103A]/10 shadow-sm flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-[#2B103A]/10 text-[#2B103A] flex items-center justify-center shrink-0">
          <PhoneCall className="w-5 h-5 text-[#C49A2A]" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-xs text-[#2B103A]">Urgent Legal or Transfer Need?</h4>
          <p className="text-[11px] text-[#2B103A]/70">WhatsApp Support Available 24/7</p>
        </div>
      </div>
    </aside>
  );
}
