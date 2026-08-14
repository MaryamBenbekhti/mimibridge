"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Clear answers to essential questions regarding our concierge and guidance services in Turkey.",
  items,
}: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="py-12 border-t border-[#2B103A]/10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
          Got Questions?
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

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white/70 border-[#C49A2A] shadow-md"
                  : "bg-white/40 border-[#2B103A]/10 hover:border-[#2B103A]/30"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 md:p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${isOpen ? "bg-[#2B103A] text-[#C49A2A]" : "bg-[#2B103A]/5 text-[#2B103A]"}`}>
                    <HelpCircle className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="font-serif font-bold text-base md:text-lg text-[#2B103A]">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#2B103A]/60 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-[#C49A2A]" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-[#2B103A]/80 leading-relaxed border-t border-[#2B103A]/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
