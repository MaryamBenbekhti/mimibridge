"use client";

import React from "react";
import { LucideIcon, CheckCircle2 } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  tags?: string[];
  relevantPersonas?: string[];
}

interface ServiceGridProps {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
  activePersona?: string | null;
}

export default function ServiceGrid({ title, subtitle, items, activePersona }: ServiceGridProps) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A] mb-2">{title}</h2>
        {subtitle && <p className="text-xs md:text-sm text-[#2B103A]/70">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          const isHighlighted = activePersona && item.relevantPersonas?.includes(activePersona);

          return (
            <div
              key={item.id}
              className={`relative bg-white/40 backdrop-blur-md p-6 rounded-[20px] border transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl ${
                isHighlighted
                  ? "border-[#C49A2A] ring-2 ring-[#C49A2A]/40 bg-white/80 scale-[1.01]"
                  : "border-[#2B103A]/10 hover:border-[#C49A2A]"
              }`}
            >
              {isHighlighted && (
                <span className="absolute -top-2.5 right-4 bg-[#C49A2A] text-[#2B103A] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Recommended for you</span>
                </span>
              )}

              <div>
                <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-[#2B103A]">{item.title}</h3>
                <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">{item.desc}</p>
              </div>

              {item.tags && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#2B103A]/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2B103A]/5 text-[#2B103A]/80 text-[10px] font-medium px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}