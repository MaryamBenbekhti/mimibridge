"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Compass,
  Users,
  Languages,
  FileCheck,
  Calendar,
  Home,
  Bus,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  MessageSquare,
  Plane,
  FileText,
  HeartHandshake,
  Building,
  Package,
  ShieldCheck,
} from "lucide-react";

// ─── TYPES ───────────────────────────────────────────────────────
type Destination = "turkey" | "saudi" | null;
type Purpose =
  | "student"
  | "travel"
  | "parent"
  | "translation"
  | "paperwork"
  | null;
type HelpItem =
  | "housing"
  | "translation"
  | "transportation"
  | "paperwork"
  | "local"
  | "parent_updates";

interface Recommendation {
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

// ─── RECOMMENDATION ENGINE ────────────────────────────────────────
function getRecommendations(
  destination: Destination,
  purpose: Purpose,
  helpItems: HelpItem[]
): Recommendation[] {
  const dest = destination === "turkey" ? "turkey" : "saudi";
  const recs: Recommendation[] = [];

  // Purpose-based primary recommendations
  if (purpose === "student") {
    recs.push({
      title: "Student Services",
      desc:
        destination === "turkey"
          ? "Airport arrival, campus registration, SIM card, student transit pass, and dorm walkthroughs."
          : "Airport chauffeur, university Deanship escort, SPL address setup, and 5G SIM activation.",
      href: `/${dest}/student-services`,
      icon: GraduationCap,
    });
  }

  if (purpose === "travel") {
    recs.push({
      title: "Travel Concierge",
      desc:
        destination === "turkey"
          ? "Curated city tours, airport chauffeur, Bosphorus cruises, and luxury hotel bookings."
          : "Desert safaris, Haramain train coordination, cultural site visits, and private chauffeur transit.",
      href: `/${dest}/travel`,
      icon: Compass,
    });
  }

  if (purpose === "parent") {
    recs.push({
      title: "Parent Support Portal",
      desc: "Scheduled video check-ins with your child, housing video walkthroughs, arrival updates, and ongoing reports.",
      href: `/${dest}/parent`,
      icon: HeartHandshake,
    });
  }

  if (purpose === "translation") {
    recs.push({
      title: "Translation Services",
      desc:
        destination === "turkey"
          ? "Certified Turkish translation, live interpretation, and notarized document translation."
          : "Certified Arabic translation, live interpretation, and official notarized documentation.",
      href: `/${dest}/translation`,
      icon: Languages,
    });
  }

  if (purpose === "paperwork") {
    recs.push({
      title: "Paperwork & Admin Assistance",
      desc:
        destination === "turkey"
          ? "İkamet (residence permit) guidance, student document help, and appointment accompaniment."
          : "Iqama issuance, Ejar lease navigation, and administrative appointment support.",
      href: `/${dest}/paperwork`,
      icon: FileCheck,
    });
  }

  // Help items drive additional recommendations
  if (helpItems.includes("housing") && purpose !== "parent") {
    recs.push({
      title: "Housing Walkthrough",
      desc: "In-person inspection and video verification of your flat, dorm room, or rental property.",
      href: `/${dest}/student-services`,
      icon: Home,
    });
  }

  if (helpItems.includes("transportation")) {
    recs.push({
      title: "Arrival Transfer & Transit Setup",
      desc:
        destination === "turkey"
          ? "Airport pickup (IST, SAW, ESB, TZX) and Istanbulkart / Ankarakart student transit pass setup."
          : "Airport chauffeur from RUH, JED, MED, or DMM with metro card and ride-hailing app assistance.",
      href: `/${dest}/travel`,
      icon: Plane,
    });
  }

  if (helpItems.includes("translation") && purpose !== "translation") {
    recs.push({
      title: "Live Translation Support",
      desc: "On-call or in-person bilingual interpreter for appointments, government visits, and landlord meetings.",
      href: `/${dest}/translation`,
      icon: Languages,
    });
  }

  if (helpItems.includes("paperwork") && purpose !== "paperwork") {
    recs.push({
      title: "Administrative Document Help",
      desc: "Document checklists, organized paperwork folders, and accompaniment to government offices.",
      href: `/${dest}/paperwork`,
      icon: FileText,
    });
  }

  if (helpItems.includes("local")) {
    recs.push({
      title: "Local On-Ground Assistance",
      desc: "Direct peer support from our student guides: SIM card activation, bank account setup, and city orientation.",
      href: `/${dest}/student-services`,
      icon: ShieldCheck,
    });
  }

  if (helpItems.includes("parent_updates")) {
    recs.push({
      title: "Parent Updates & Check-Ins",
      desc: "Scheduled video calls, housing reports, arrival confirmations, and ongoing updates for families.",
      href: `/${dest}/parent`,
      icon: Users,
    });
  }

  // Deduplicate by href
  const seen = new Set<string>();
  return recs.filter((r) => {
    if (seen.has(r.href + r.title)) return false;
    seen.add(r.href + r.title);
    return true;
  });
}

// ─── STEP INDICATOR ───────────────────────────────────────────────
function StepIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? "w-6 h-2 bg-[#C49A2A]"
              : i === current
              ? "w-8 h-2 bg-[#2B103A]"
              : "w-4 h-2 bg-[#2B103A]/15"
          }`}
        />
      ))}
    </div>
  );
}

// ─── OPTION BUTTON ────────────────────────────────────────────────
function OptionButton({
  selected,
  onClick,
  children,
  emoji,
  isSaudi = false,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  emoji?: string;
  isSaudi?: boolean;
}) {
  const activeClass = isSaudi
    ? "bg-emerald-900 text-[#EFE7DA] border-emerald-700 shadow-md ring-2 ring-emerald-400/30"
    : "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-md ring-2 ring-[#C49A2A]/30";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center space-x-3 p-4 rounded-[16px] border text-left text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
        selected
          ? activeClass
          : "bg-white/50 border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A] hover:bg-white/80"
      }`}
    >
      {selected ? (
        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C49A2A]" />
      ) : (
        <div className="w-4 h-4 shrink-0 rounded-full border-2 border-current opacity-40" />
      )}
      <span>
        {emoji && <span className="mr-1.5">{emoji}</span>}
        {children}
      </span>
    </button>
  );
}

// ─── MULTI SELECT BUTTON ──────────────────────────────────────────
function MultiSelectButton({
  selected,
  onClick,
  children,
  icon: Icon,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ElementType;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center space-x-2.5 p-4 rounded-[16px] border text-left text-xs font-bold transition-all cursor-pointer ${
        selected
          ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] ring-2 ring-[#C49A2A]/30 shadow-md"
          : "bg-white/50 border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A] hover:bg-white/80"
      }`}
    >
      <Icon
        className={`w-4 h-4 shrink-0 ${selected ? "text-[#C49A2A]" : "text-[#2B103A]/60"}`}
      />
      <span>{children}</span>
    </button>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────
export default function JourneyPlannerPage() {
  const [step, setStep] = useState(0);
  const [destination, setDestination] = useState<Destination>(null);
  const [purpose, setPurpose] = useState<Purpose>(null);
  const [arrivalDate, setArrivalDate] = useState("");
  const [helpItems, setHelpItems] = useState<HelpItem[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;
  const isSaudi = destination === "saudi";

  const primaryColor = isSaudi ? "emerald-900" : "[#2B103A]";
  const accentColor = isSaudi ? "emerald-400" : "[#C49A2A]";

  const toggleHelp = (item: HelpItem) => {
    setHelpItems((prev) =>
      prev.includes(item) ? prev.filter((h) => h !== item) : [...prev, item]
    );
  };

  const canNext = () => {
    if (step === 0) return destination !== null;
    if (step === 1) return purpose !== null;
    if (step === 2) return true; // arrival date is optional
    if (step === 3) return helpItems.length > 0;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const recommendations = getRecommendations(destination, purpose, helpItems);

  const purposeLabels: Record<string, string> = {
    student: "Student",
    travel: "Traveler",
    parent: "Parent",
    translation: "Translation",
    paperwork: "Paperwork",
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#EFE7DA] text-[#2B103A] pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Success header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Personalised Plan</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A] mb-2">
              Your Mimi Bridge Plan
            </h1>
            <p className="text-xs text-[#2B103A]/70 leading-relaxed">
              Based on your answers, here are the services we recommend for your journey.
            </p>
          </div>

          {/* Summary pill row */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <span className="bg-[#2B103A] text-[#EFE7DA] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              {destination === "turkey" ? "🇹🇷 Turkey" : "🇸🇦 Saudi Arabia"}
            </span>
            {purpose && (
              <span className="bg-[#C49A2A] text-[#2B103A] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {purposeLabels[purpose]}
              </span>
            )}
            {arrivalDate && (
              <span className="bg-white/60 text-[#2B103A] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#2B103A]/10">
                {new Date(arrivalDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            )}
            {helpItems.map((h) => (
              <span
                key={h}
                className="bg-white/60 text-[#2B103A] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#2B103A]/10"
              >
                {h.replace("_", " ")}
              </span>
            ))}
          </div>

          {/* Recommendations */}
          <div className="space-y-4 mb-8">
            {recommendations.map((rec, idx) => {
              const Icon = rec.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/50 backdrop-blur-md p-6 rounded-[20px] border border-[#2B103A]/10 flex items-start space-x-4 shadow-sm hover:border-[#C49A2A] transition-all"
                >
                  <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-base text-[#2B103A] mb-1">
                      {rec.title}
                    </h3>
                    <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-3">
                      {rec.desc}
                    </p>
                    <Link
                      href={rec.href}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-[#C49A2A] hover:underline"
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[28px] p-8 text-center border border-[#C49A2A]/20 shadow-2xl">
            <h2 className="font-serif text-2xl font-bold mb-2">
              Ready to get started?
            </h2>
            <p className="text-xs text-[#EFE7DA]/80 mb-6 leading-relaxed">
              Tell us a bit more about your situation and a Mimi Bridge advisor will reach out to you directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/contact?dest=${destination}`}
                className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Mimi →</span>
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                  setDestination(null);
                  setPurpose(null);
                  setArrivalDate("");
                  setHelpItems([]);
                }}
                className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/30 text-[#EFE7DA] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>Start Over</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#EFE7DA] text-[#2B103A] pt-28 pb-20 px-6">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Journey Planner</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2B103A] mb-2">
            Build Your Mimi Bridge Plan
          </h1>
          <p className="text-xs text-[#2B103A]/70 leading-relaxed">
            Answer 4 quick questions and we&apos;ll recommend the right services for your journey.
          </p>
        </div>

        {/* Step indicator */}
        <StepIndicator current={step} total={totalSteps} />

        {/* Step card */}
        <div className="bg-white/50 backdrop-blur-md rounded-[28px] border border-[#2B103A]/10 shadow-xl p-8">

          {/* ── STEP 1: Destination ─────────────────────────────── */}
          {step === 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <MapPin className="w-4 h-4 text-[#C49A2A]" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2B103A]/50">
                  Step 1 of 4
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-6">
                Where are you going?
              </h2>
              <div className="space-y-3">
                <OptionButton
                  selected={destination === "turkey"}
                  onClick={() => setDestination("turkey")}
                  emoji="🇹🇷"
                >
                  Turkey
                </OptionButton>
                <OptionButton
                  selected={destination === "saudi"}
                  onClick={() => setDestination("saudi")}
                  emoji="🇸🇦"
                  isSaudi
                >
                  Saudi Arabia
                </OptionButton>
              </div>
            </div>
          )}

          {/* ── STEP 2: Purpose ─────────────────────────────────── */}
          {step === 1 && (
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Package className="w-4 h-4 text-[#C49A2A]" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2B103A]/50">
                  Step 2 of 4
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-6">
                What brings you there?
              </h2>
              <div className="space-y-3">
                <OptionButton
                  selected={purpose === "student"}
                  onClick={() => setPurpose("student")}
                  emoji="🎓"
                  isSaudi={isSaudi}
                >
                  Student
                </OptionButton>
                <OptionButton
                  selected={purpose === "travel"}
                  onClick={() => setPurpose("travel")}
                  emoji="✈️"
                  isSaudi={isSaudi}
                >
                  Travel
                </OptionButton>
                <OptionButton
                  selected={purpose === "parent"}
                  onClick={() => setPurpose("parent")}
                  emoji="👨‍👩‍👧"
                  isSaudi={isSaudi}
                >
                  Parent (child studying abroad)
                </OptionButton>
                <OptionButton
                  selected={purpose === "translation"}
                  onClick={() => setPurpose("translation")}
                  emoji="🗣️"
                  isSaudi={isSaudi}
                >
                  Translation
                </OptionButton>
                <OptionButton
                  selected={purpose === "paperwork"}
                  onClick={() => setPurpose("paperwork")}
                  emoji="📋"
                  isSaudi={isSaudi}
                >
                  Paperwork & Admin
                </OptionButton>
              </div>
            </div>
          )}

          {/* ── STEP 3: Arrival Date ─────────────────────────────── */}
          {step === 2 && (
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Calendar className="w-4 h-4 text-[#C49A2A]" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2B103A]/50">
                  Step 3 of 4
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">
                When are you arriving?
              </h2>
              <p className="text-xs text-[#2B103A]/60 mb-6 leading-relaxed">
                This helps us prepare the right arrangements ahead of time. You can skip this step if you don&apos;t know yet.
              </p>
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-[#2B103A]/70 block mb-2">
                  Estimated arrival date
                </label>
                <input
                  type="date"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  className="w-full bg-white/80 border border-[#2B103A]/15 rounded-[14px] p-4 text-sm font-medium text-[#2B103A] focus:outline-none focus:border-[#C49A2A] transition-colors"
                />
              </div>
              <p className="text-[11px] text-[#2B103A]/50 mt-3">
                Optional — you can leave this blank and we&apos;ll follow up.
              </p>
            </div>
          )}

          {/* ── STEP 4: What help do you need? ──────────────────── */}
          {step === 3 && (
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C49A2A]" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2B103A]/50">
                  Step 4 of 4
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B103A] mb-2">
                What help do you need?
              </h2>
              <p className="text-xs text-[#2B103A]/60 mb-6 leading-relaxed">
                Select all that apply — we&apos;ll tailor your recommendations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MultiSelectButton
                  selected={helpItems.includes("housing")}
                  onClick={() => toggleHelp("housing")}
                  icon={Home}
                >
                  Housing
                </MultiSelectButton>
                <MultiSelectButton
                  selected={helpItems.includes("translation")}
                  onClick={() => toggleHelp("translation")}
                  icon={Languages}
                >
                  Translation
                </MultiSelectButton>
                <MultiSelectButton
                  selected={helpItems.includes("transportation")}
                  onClick={() => toggleHelp("transportation")}
                  icon={Bus}
                >
                  Transportation
                </MultiSelectButton>
                <MultiSelectButton
                  selected={helpItems.includes("paperwork")}
                  onClick={() => toggleHelp("paperwork")}
                  icon={FileText}
                >
                  Paperwork
                </MultiSelectButton>
                <MultiSelectButton
                  selected={helpItems.includes("local")}
                  onClick={() => toggleHelp("local")}
                  icon={ShieldCheck}
                >
                  Local Assistance
                </MultiSelectButton>
                <MultiSelectButton
                  selected={helpItems.includes("parent_updates")}
                  onClick={() => toggleHelp("parent_updates")}
                  icon={Users}
                >
                  Parent Updates
                </MultiSelectButton>
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-6 gap-4">
          {step > 0 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2B103A] border border-[#2B103A]/20 hover:border-[#2B103A] px-5 py-3 rounded-full transition-all cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className={`inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md ${
                canNext()
                  ? "bg-[#2B103A] text-[#EFE7DA] hover:bg-[#3D1852]"
                  : "bg-[#2B103A]/20 text-[#2B103A]/40 cursor-not-allowed shadow-none"
              }`}
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext()}
              className={`inline-flex items-center space-x-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md ${
                canNext()
                  ? "bg-[#C49A2A] text-[#2B103A] hover:bg-[#d6aa35]"
                  : "bg-[#C49A2A]/30 text-[#2B103A]/40 cursor-not-allowed shadow-none"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Show My Plan</span>
            </button>
          )}
        </div>

        {/* Step 3 skip link */}
        {step === 2 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setStep(3)}
              className="text-xs text-[#2B103A]/50 hover:text-[#2B103A] underline underline-offset-2 transition-colors cursor-pointer"
            >
              Skip — I don&apos;t know yet
            </button>
          </div>
        )}
      </div>
    </main>
  );
}