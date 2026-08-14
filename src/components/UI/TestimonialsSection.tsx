"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  cityOrUni: string;
  quote: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  items: Testimonial[];
}

export default function TestimonialsSection({
  title = "Trusted by Students & Families Worldwide",
  subtitle = "Hear directly from clients who transitioned seamlessly to living, studying, and conducting business in Turkey.",
  items,
}: TestimonialsSectionProps) {
  return (
    <div className="py-12 border-t border-[#2B103A]/10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
          Verified Experiences
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs md:text-sm text-[#2B103A]/70 mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/50 backdrop-blur-md p-6 rounded-[24px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 text-[#C49A2A]">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C49A2A]" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#2B103A]/15" />
              </div>

              <p className="text-xs md:text-sm text-[#2B103A]/80 leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#2B103A]/5 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#2B103A] text-[#EFE7DA] font-serif font-bold text-sm flex items-center justify-center shrink-0 border border-[#C49A2A]">
                {item.avatar ? (
                  <img src={item.avatar} alt={item.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  item.name.charAt(0)
                )}
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-[#2B103A] flex items-center space-x-1">
                  <span>{item.name}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A2A]" />
                </h3>
                <p className="text-[11px] text-[#2B103A]/60">
                  {item.role} • <span className="text-[#C49A2A] font-medium">{item.cityOrUni}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
