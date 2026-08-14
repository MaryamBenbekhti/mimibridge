"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface TimelineStep {
  stepNumber: number | string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ElementType;
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: TimelineStep[];
}

export default function ProcessTimeline({
  title = "Step-by-Step Process Timeline",
  subtitle = "Our proven sequential workflow ensuring seamless onboarding and total legal compliance.",
  steps,
}: ProcessTimelineProps) {
  return (
    <div className="py-12 border-t border-[#2B103A]/10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
          Structured Journey
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

      {/* Desktop Horizontal Step Flow */}
      <div className="hidden lg:grid grid-cols-6 gap-3 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon || CheckCircle2;
          const isLast = idx === steps.length - 1;
          return (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Connecting Line */}
              {!isLast && (
                <div className="absolute top-6 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#2B103A] to-[#C49A2A]/40 z-0" />
              )}

              {/* Step Circle */}
              <div className="w-12 h-12 rounded-full bg-[#2B103A] text-[#C49A2A] flex items-center justify-center font-serif font-bold text-sm z-10 shadow-md group-hover:scale-110 group-hover:border-2 group-hover:border-[#C49A2A] transition-all">
                <Icon className="w-5 h-5" />
              </div>

              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C49A2A] mt-3">
                Step {step.stepNumber}
              </span>
              <h3 className="font-serif font-bold text-sm text-[#2B103A] mt-1 leading-tight">
                {step.title}
              </h3>
              <p className="text-[11px] text-[#2B103A]/70 mt-1 leading-relaxed max-w-[140px]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Vertical Flow */}
      <div className="lg:hidden space-y-4 max-w-md mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon || CheckCircle2;
          const isLast = idx === steps.length - 1;
          return (
            <div key={idx} className="relative flex items-start space-x-4">
              {!isLast && (
                <div className="absolute left-5 top-12 bottom-0 w-[2px] bg-[#2B103A]/10" />
              )}
              <div className="w-10 h-10 rounded-full bg-[#2B103A] text-[#C49A2A] flex items-center justify-center font-bold text-xs shrink-0 shadow-md z-10">
                <Icon className="w-4 h-4" />
              </div>
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-[16px] border border-[#2B103A]/10 flex-1 shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C49A2A] block">
                  Step {step.stepNumber}
                </span>
                <h3 className="font-serif font-bold text-base text-[#2B103A] mt-0.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[#2B103A]/70 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
