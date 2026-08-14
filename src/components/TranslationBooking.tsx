"use client";

import React from "react";
import { Calendar, Clock, Globe2 } from "lucide-react";

export default function TranslationBooking() {
  return (
    <section id="translation" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block">Certified Frameworks</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-plum tracking-tight leading-tight">
            Linguistic Precision on Demand
          </h2>
          <p className="text-sm text-brand-plum/70 leading-relaxed">
            Eliminate communication deficits with high-end native translators specialized in medical, judicial, and enterprise settings.
          </p>
        </div>

        <div className="lg:col-span-7 glass-premium p-6 md:p-8 rounded-premium shadow-xl border border-brand-plum/5">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-plum/60 block mb-1.5">Language Combo</label>
                <div className="relative">
                  <select className="w-full bg-brand-ivory/50 border border-brand-plum/10 rounded-[12px] p-3 text-sm appearance-none outline-none focus:border-brand-plum">
                    <option>Arabic ↔ Turkish</option>
                    <option>English ↔ Turkish</option>
                    <option>French ↔ Turkish</option>
                  </select>
                  <Globe2 className="w-4 h-4 absolute right-3 top-3.5 text-brand-plum/40 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-plum/60 block mb-1.5">Domain Type</label>
                <select className="w-full bg-brand-ivory/50 border border-brand-plum/10 rounded-[12px] p-3 text-sm outline-none focus:border-brand-plum">
                  <option>Government Office / Immigration</option>
                  <option>Hospital / Medical</option>
                  <option>Business Negotiation</option>
                  <option>University Matrix</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-plum/60 block mb-1.5">Target Date</label>
                <input type="date" className="w-full bg-brand-ivory/50 border border-brand-plum/10 rounded-[12px] p-3 text-sm outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-plum/60 block mb-1.5">Target Time</label>
                <input type="time" className="w-full bg-brand-ivory/50 border border-brand-plum/10 rounded-[12px] p-3 text-sm outline-none" />
              </div>
            </div>

            <button type="submit" className="w-full bg-brand-plum text-brand-ivory py-3.5 rounded-premium text-sm font-semibold tracking-wide shadow-md hover:bg-brand-plum/90 transition-all mt-2">
              Secure Companion Assignment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}