import React from "react";

const PARTNERS = ["Premium Drivers", "Luxury Lofts", "Medical Advisors", "Legal Liaisons", "Telecom Partners", "Cleaning Services"];

export default function PartnerCarousel() {
  return (
    <section className="py-16 bg-brand-plum/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-semibold tracking-widest text-brand-plum/50 uppercase">Verified Local Infrastructures</span>
      </div>
      <div className="flex w-[200%] animate-carousel-infinite items-center">
        {/* Render twice for seamless continuous infinite looping logic */}
        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
          <div key={index} className="flex-1 text-center font-serif text-lg md:text-xl font-semibold opacity-40 text-brand-plum tracking-wide min-w-[200px]">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}