"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, GraduationCap, Compass, Languages, Briefcase } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext"; // Adjusted path: components -> context

export default function Hero() {
  // Initialize the language hook
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-brand-plum/5 blur-[140px]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        <motion.span variants={itemVariants} className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-4 block">
          {t("hero.subtitle")}
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-brand-plum tracking-tight leading-[1.08] max-w-4xl">
          {t("hero.title")}
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 text-base md:text-xl text-brand-plum/70 max-w-2xl font-normal leading-relaxed">
          {t("hero.description")}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 w-full max-w-3xl">
          {/* Changed buttons to Next.js Links with href paths */}
          <Link href="/students" className="flex items-center justify-center space-x-2 bg-brand-plum text-brand-ivory px-6 py-3.5 rounded-premium text-sm font-medium transition-transform hover:-translate-y-0.5 shadow-md">
            <GraduationCap className="w-4 h-4 text-brand-gold" /> <span>{t("hero.studentBtn")}</span>
          </Link>
          <Link href="/travel" className="flex items-center justify-center space-x-2 glass-premium border border-brand-plum/10 text-brand-plum px-6 py-3.5 rounded-premium text-sm font-medium transition-transform hover:-translate-y-0.5 shadow-sm">
            <Compass className="w-4 h-4" /> <span>{t("hero.travelBtn")}</span>
          </Link>
          <Link href="/translation" className="flex items-center justify-center space-x-2 glass-premium border border-brand-plum/10 text-brand-plum px-6 py-3.5 rounded-premium text-sm font-medium transition-transform hover:-translate-y-0.5 shadow-sm">
            <Languages className="w-4 h-4" /> <span>{t("hero.translationBtn")}</span>
          </Link>
          <Link href="/business" className="flex items-center justify-center space-x-2 glass-premium border border-brand-plum/10 text-brand-plum px-6 py-3.5 rounded-premium text-sm font-medium transition-transform hover:-translate-y-0.5 shadow-sm">
            <Briefcase className="w-4 h-4" /> <span>{t("hero.businessBtn")}</span>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-14 w-full max-w-2xl glass-premium rounded-premium p-2 shadow-lg border border-brand-plum/5 flex items-center">
          <div className="flex items-center flex-1 px-3">
            <Search className="w-5 h-5 text-brand-plum/40 mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder={t("hero.searchPlaceholder")} 
              className="w-full bg-transparent border-none outline-none text-brand-plum placeholder:text-brand-plum/40 text-sm md:text-base py-2.5"
            />
          </div>
          <button className="bg-brand-plum text-brand-ivory px-6 py-3 rounded-[14px] text-sm font-medium tracking-wide hover:bg-brand-plum/90">
            {t("hero.searchBtn")}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-brand-plum/50">
          <span className="font-semibold">{t("hero.suggestionsLabel")}</span>
          {/* You can also move this array to your translation JSON files eventually */}
          {["Find student housing", "Book a translator", "Airport pickup", "Residence permit help"].map((s) => (
            <button key={s} className="hover:text-brand-plum transition-colors underline decoration-brand-gold/40 underline-offset-4">{s}</button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}