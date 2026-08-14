"use client"; // We must add this so we can use the React hook

import React from "react";
import { Home, Plane, ShieldCheck, HelpCircle, PhoneCall, FileText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ServicesGrid() {
  const { t } = useLanguage();

  // We moved the array inside the component so it can use the 't' function
  const POPULAR_SERVICES = [
    { title: t("services.housing.title"), desc: t("services.housing.desc"), icon: Home },
    { title: t("services.airport.title"), desc: t("services.airport.desc"), icon: Plane },
    { title: t("services.sim.title"), desc: t("services.sim.desc"), icon: PhoneCall },
    { title: t("services.translation.title"), desc: t("services.translation.desc"), icon: FileText },
    { title: t("services.permit.title"), desc: t("services.permit.desc"), icon: ShieldCheck },
    { title: t("services.emergency.title"), desc: t("services.emergency.desc"), icon: HelpCircle }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">
          {t("services.title")}
        </h2>
        <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_SERVICES.map((serv, idx) => (
          <div key={idx} className="glass-premium hover:bg-brand-plum/5 p-8 rounded-premium transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-brand-plum text-brand-ivory rounded-[14px] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <serv.icon className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-plum mb-2">{serv.title}</h3>
              <p className="text-sm text-brand-plum/70 leading-relaxed">{serv.desc}</p>
            </div>
            <button className="text-xs uppercase tracking-wider font-bold text-brand-gold mt-6 inline-flex items-center group-hover:text-brand-plum transition-colors">
              {t("services.learnMore")} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}