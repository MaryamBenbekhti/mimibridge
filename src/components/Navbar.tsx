"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { Menu, X, Compass, Globe } from "lucide-react";

type Language = "EN" | "AR" | "TR";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>("EN");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Turkey", href: "/turkey" },
    { name: "Saudi Arabia", href: "/saudi" },
    { name: "Resources", href: "/resources" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];

  const cycleLanguage = () => {
    const langs: Language[] = ["EN", "AR", "TR"];
    const nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
    setCurrentLang(langs[nextIdx]);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#EFE7DA]/85 backdrop-blur-md border-b border-[#2B103A]/10 transition-all duration-300"
      dir={currentLang === "AR" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Logo height={48} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse text-xs uppercase tracking-widest font-semibold text-[#2B103A]/80">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#C49A2A] ${
                  isActive ? "text-[#C49A2A] font-bold" : ""
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C49A2A] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Callouts & Language Selector */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Language Switcher */}
          <button
            onClick={cycleLanguage}
            className="flex items-center space-x-1.5 rtl:space-x-reverse border border-[#2B103A]/20 px-3 py-1.5 rounded-full text-xs font-semibold hover:border-[#C49A2A] transition-colors cursor-pointer text-[#2B103A]"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>{currentLang}</span>
          </button>

          {/* Journey Planner CTA */}
          <Link
            href="/journey-planner"
            className="hidden sm:inline-flex items-center space-x-2 rtl:space-x-reverse bg-[#2B103A] text-[#EFE7DA] px-4 py-2 rounded-full text-xs font-semibold tracking-wider hover:bg-[#2B103A]/90 transition-all shadow-md"
          >
            <Compass className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Journey Planner</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2B103A] hover:bg-[#2B103A]/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#EFE7DA] border-b border-[#2B103A]/10 px-6 py-6"
          >
            <div className="flex flex-col space-y-4 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors hover:text-[#C49A2A] ${
                      isActive ? "text-[#C49A2A] font-bold" : "text-[#2B103A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                href="/journey-planner"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse bg-[#2B103A] text-[#EFE7DA] px-4 py-3 rounded-full text-xs font-semibold tracking-wider mt-2 shadow-md"
              >
                <Compass className="w-4 h-4 text-[#C49A2A]" />
                <span>Plan My Journey</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}