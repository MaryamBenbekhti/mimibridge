"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import {
  GraduationCap,
  Compass,
  Users,
  FileCheck,
  BookOpen,
  Home,
  DollarSign,
  Languages,
  Map,
  Bus,
  Baby,
  Heart,
  FileText,
  Calendar,
  List,
  ClipboardList,
  Globe,
  ArrowRight,
  Search,
  Sparkles,
  Tag,
  Clock,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────
type Category = "students" | "travelers" | "parents" | "paperwork";

interface Article {
  id: string;
  category: Category;
  title: string;
  summary: string;
  readTime: string;
  tags: string[];
  icon: React.ElementType;
  comingSoon?: boolean;
}

// ─── ARTICLE DATA ─────────────────────────────────────────────────
const ARTICLES: Article[] = [
  // ── STUDENTS ──────────────────────────────────────────────────
  {
    id: "first-week-turkey",
    category: "students",
    title: "Your First Week in Turkey — A Practical Student Guide",
    summary:
      "From airport arrival to university registration: a step-by-step overview of what to do in your very first week as an international student in Turkey.",
    readTime: "6 min read",
    tags: ["Turkey", "Arrival", "Students"],
    icon: GraduationCap,
  },
  {
    id: "student-checklist",
    category: "students",
    title: "International Student Checklist for Turkey & Saudi Arabia",
    summary:
      "Essential documents, SIM cards, transit cards, bank accounts, and university paperwork — everything to tick off before and after you land.",
    readTime: "5 min read",
    tags: ["Checklist", "Students", "Documents"],
    icon: ClipboardList,
  },
  {
    id: "renting-first-apartment",
    category: "students",
    title: "How to Rent Your First Apartment as a Student in Turkey",
    summary:
      "What to look for in a student flat, how Turkish lease contracts work, utility setup, and practical tips for avoiding common pitfalls.",
    readTime: "7 min read",
    tags: ["Housing", "Turkey", "Renting"],
    icon: Home,
  },
  {
    id: "cost-of-living",
    category: "students",
    title: "Cost of Living for International Students in Turkey",
    summary:
      "A realistic budget breakdown covering rent, food, transport, university fees, and daily expenses in Istanbul, Ankara, Trabzon, and Karabük.",
    readTime: "6 min read",
    tags: ["Budget", "Turkey", "Students"],
    icon: DollarSign,
  },
  {
    id: "useful-turkish-words",
    category: "students",
    title: "50 Useful Turkish Words & Phrases for Student Life",
    summary:
      "Everyday Turkish for navigating university offices, markets, transit, and daily interactions — no language background needed.",
    readTime: "4 min read",
    tags: ["Language", "Turkish", "Students"],
    icon: Languages,
  },
  {
    id: "student-ikamet-guide",
    category: "students",
    title: "Student Residence Permit (İkamet) — Step-by-Step Guide",
    summary:
      "A clear walkthrough of Turkey's student residence permit process: required documents, appointment booking, and what to expect at Göç İdaresi.",
    readTime: "8 min read",
    tags: ["İkamet", "Turkey", "Paperwork"],
    icon: FileCheck,
    comingSoon: true,
  },

  // ── TRAVELERS ─────────────────────────────────────────────────
  {
    id: "first-trip-turkey",
    category: "travelers",
    title: "Your First Trip to Turkey — What to Know Before You Go",
    summary:
      "Visa basics, best entry airports, SIM card options, local customs, and practical tips for first-time visitors to Turkey.",
    readTime: "5 min read",
    tags: ["Turkey", "Travel", "First Trip"],
    icon: Compass,
  },
  {
    id: "city-guides-overview",
    category: "travelers",
    title: "Turkey City Guides: Istanbul, Ankara, Trabzon & Karabük",
    summary:
      "Curated local guides for each of Turkey's most visited student and travel destinations — things to do, where to stay, and local tips.",
    readTime: "4 min read",
    tags: ["City Guides", "Turkey", "Travel"],
    icon: Map,
    comingSoon: false,
  },
  {
    id: "transportation-guide",
    category: "travelers",
    title: "Getting Around Turkey — Public Transport & Transit Guide",
    summary:
      "Metro, tram, bus, intercity coaches, and ferries explained — including how to use the Istanbulkart, Ankarakart, and intercity YHT high-speed trains.",
    readTime: "6 min read",
    tags: ["Transport", "Turkey", "Transit"],
    icon: Bus,
  },
  {
    id: "family-travel-tips",
    category: "travelers",
    title: "Family Travel Tips for Turkey — Visiting with Children",
    summary:
      "Child-friendly neighborhoods, safe accommodation, cultural etiquette, and how to plan a comfortable family trip to Turkey.",
    readTime: "5 min read",
    tags: ["Family", "Travel", "Turkey"],
    icon: Baby,
    comingSoon: true,
  },
  {
    id: "saudi-travel-guide",
    category: "travelers",
    title: "Visiting Saudi Arabia — Practical First-Timer's Overview",
    summary:
      "Entry requirements, dress codes, halal dining, Haramain train tips, and cultural considerations for international visitors to the Kingdom.",
    readTime: "6 min read",
    tags: ["Saudi Arabia", "Travel", "First Trip"],
    icon: Globe,
    comingSoon: true,
  },

  // ── PARENTS ───────────────────────────────────────────────────
  {
    id: "sending-child-abroad",
    category: "parents",
    title: "Sending Your Child to Study Abroad — A Parent's Checklist",
    summary:
      "Documents to prepare before departure, emergency contacts to set up, and practical conversations to have with your child before they travel.",
    readTime: "5 min read",
    tags: ["Parents", "Students", "Checklist"],
    icon: Baby,
  },
  {
    id: "preparing-arrival",
    category: "parents",
    title: "Preparing for Your Child's Arrival in Turkey or Saudi Arabia",
    summary:
      "What to confirm before your child lands — accommodation setup, SIM card, airport transit, and university registration timeline.",
    readTime: "4 min read",
    tags: ["Parents", "Arrival", "Students"],
    icon: Heart,
  },
  {
    id: "housing-checklist-parents",
    category: "parents",
    title: "Housing Checklist for Parents — What to Ask & Verify",
    summary:
      "How to evaluate student housing from abroad: questions to ask, red flags to look for, and how a Mimi Bridge housing video walkthrough works.",
    readTime: "4 min read",
    tags: ["Housing", "Parents", "Checklist"],
    icon: Home,
  },
  {
    id: "how-mimi-supports-parents",
    category: "parents",
    title: "How Mimi Bridge Supports Parents With Children Abroad",
    summary:
      "An honest overview of what Mimi Bridge can and cannot do for parents — video check-ins, housing reports, arrival updates, and ongoing contact.",
    readTime: "3 min read",
    tags: ["Parents", "Mimi Bridge", "Services"],
    icon: Users,
  },
  {
    id: "staying-connected",
    category: "parents",
    title: "Staying Connected With Your Child Studying Abroad",
    summary:
      "Best apps, scheduled call routines, and how to stay meaningfully in touch without creating unnecessary anxiety for your student.",
    readTime: "4 min read",
    tags: ["Parents", "Communication", "Students"],
    icon: Globe,
    comingSoon: true,
  },

  // ── PAPERWORK ─────────────────────────────────────────────────
  {
    id: "document-checklists",
    category: "paperwork",
    title: "Essential Document Checklists for Living in Turkey",
    summary:
      "A master checklist covering student residence permits (İkamet), Tax Number (Vergi No), student document attestation, and general administrative needs.",
    readTime: "5 min read",
    tags: ["Documents", "Turkey", "Checklist"],
    icon: ClipboardList,
  },
  {
    id: "appointment-preparation",
    category: "paperwork",
    title: "How to Prepare for Government Office Appointments in Turkey",
    summary:
      "What to bring, how to find the right office, how to communicate without fluent Turkish, and how Mimi Bridge can accompany you.",
    readTime: "5 min read",
    tags: ["Appointments", "Turkey", "Administrative"],
    icon: Calendar,
  },
  {
    id: "turkish-admin-terms",
    category: "paperwork",
    title: "Common Turkish Administrative Terms — Glossary",
    summary:
      "Key vocabulary for navigating Turkish bureaucracy: İkamet, Denklik, Vergi No, Tapu, Taşınmaz, and more explained in plain language.",
    readTime: "4 min read",
    tags: ["Turkish", "Vocabulary", "Administrative"],
    icon: BookOpen,
  },
  {
    id: "arabic-admin-terms",
    category: "paperwork",
    title: "Common Arabic Administrative Terms in Saudi Arabia — Glossary",
    summary:
      "Essential Saudi administrative vocabulary: Iqama, Absher, Ejar, MOI, CCHI, SPL National Address, and key government portals explained.",
    readTime: "4 min read",
    tags: ["Arabic", "Saudi Arabia", "Administrative"],
    icon: Languages,
  },
  {
    id: "saudi-iqama-guide",
    category: "paperwork",
    title: "Saudi Student Iqama — A Practical Overview",
    summary:
      "What the student Iqama is, why it matters, what documents are required, and the general process for international university students.",
    readTime: "6 min read",
    tags: ["Iqama", "Saudi Arabia", "Students"],
    icon: FileText,
    comingSoon: true,
  },
];

// ─── CATEGORY CONFIG ──────────────────────────────────────────────
const CATEGORIES: {
  id: Category;
  label: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
}[] = [
  {
    id: "students",
    label: "Students",
    icon: GraduationCap,
    color: "text-[#2B103A]",
    bgColor: "bg-[#2B103A]",
    description: "Practical guides for incoming and current international students.",
  },
  {
    id: "travelers",
    label: "Travelers",
    icon: Compass,
    color: "text-emerald-800",
    bgColor: "bg-emerald-800",
    description: "City guides, transport tips, and first-visit essentials.",
  },
  {
    id: "parents",
    label: "Parents",
    icon: Users,
    color: "text-[#8B4513]",
    bgColor: "bg-amber-800",
    description: "Resources for families supporting children studying abroad.",
  },
  {
    id: "paperwork",
    label: "Paperwork & Admin",
    icon: FileCheck,
    color: "text-indigo-800",
    bgColor: "bg-indigo-800",
    description: "Document checklists, glossaries, and appointment guides.",
  },
];

// ─── ARTICLE CARD ─────────────────────────────────────────────────
function ArticleCard({ article }: { article: Article }) {
  const Icon = article.icon;
  return (
    <div
      className={`group bg-white/50 backdrop-blur-md rounded-[20px] border flex flex-col justify-between transition-all duration-300 shadow-sm overflow-hidden ${
        article.comingSoon
          ? "border-[#2B103A]/5 opacity-70"
          : "border-[#2B103A]/10 hover:border-[#C49A2A] hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 bg-[#2B103A] text-[#C49A2A] rounded-[12px] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Icon className="w-5 h-5" />
          </div>
          {article.comingSoon && (
            <span className="text-[9px] font-bold uppercase tracking-wider bg-[#2B103A]/10 text-[#2B103A]/60 px-2.5 py-1 rounded-full shrink-0">
              Coming Soon
            </span>
          )}
        </div>

        <h3 className="font-serif font-bold text-base text-[#2B103A] mb-2 leading-snug">
          {article.title}
        </h3>
        <p className="text-xs text-[#2B103A]/70 leading-relaxed mb-4">
          {article.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-bold uppercase tracking-wider text-[#2B103A]/60 bg-[#2B103A]/6 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-5 flex items-center justify-between">
        <span className="flex items-center space-x-1 text-[10px] text-[#2B103A]/50 font-medium">
          <Clock className="w-3 h-3" />
          <span>{article.readTime}</span>
        </span>
        {article.comingSoon ? (
          <span className="text-xs text-[#2B103A]/40 font-medium">
            Coming Soon
          </span>
        ) : (
          <Link
            href={`/resources/${article.id}`}
            className="inline-flex items-center space-x-1 text-xs font-bold text-[#C49A2A] group-hover:translate-x-0.5 transition-transform"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────
export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = ARTICLES.filter((a) => {
    const matchCat = activeCategory === "all" || a.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const countFor = (cat: Category) =>
    ARTICLES.filter((a) => a.category === cat).length;

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Resources" }]} />

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-16 mb-12 shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A2A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center space-x-2 bg-[#EFE7DA]/10 backdrop-blur-md text-[#EFE7DA] text-[11px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 border border-[#EFE7DA]/20">
            <BookOpen className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span>Mimi Bridge Knowledge Centre</span>
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Practical Guides &{" "}
            <span className="text-[#C49A2A]">Local Resources.</span>
          </h1>

          <p className="text-sm md:text-lg text-[#EFE7DA]/85 leading-relaxed mb-8 font-sans max-w-2xl">
            Honest, practical guides written for students, travelers, and parents navigating life in Turkey and Saudi Arabia. No fluff — just the information you actually need.
          </p>

          {/* Search */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EFE7DA]/50" />
            <input
              type="text"
              placeholder="Search guides, checklists, glossaries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-[#EFE7DA]/20 text-[#EFE7DA] placeholder-[#EFE7DA]/50 rounded-full pl-11 pr-5 py-3.5 text-xs font-medium focus:outline-none focus:border-[#C49A2A] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* CATEGORY OVERVIEW CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(isActive ? "all" : cat.id)
              }
              className={`p-5 rounded-[20px] border text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? `${cat.bgColor} text-[#EFE7DA] border-transparent shadow-xl scale-[1.02]`
                  : "bg-white/40 backdrop-blur-md border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A] hover:bg-white/60"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-[10px] flex items-center justify-center mb-3 ${
                  isActive ? "bg-white/20 text-[#EFE7DA]" : `${cat.bgColor} text-[#EFE7DA]`
                }`}
              >
                <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </div>
              <h3
                className={`font-serif font-bold text-sm mb-0.5 ${
                  isActive ? "text-[#EFE7DA]" : "text-[#2B103A]"
                }`}
              >
                {cat.label}
              </h3>
              <p
                className={`text-[10px] leading-relaxed ${
                  isActive ? "text-[#EFE7DA]/80" : "text-[#2B103A]/60"
                }`}
              >
                {countFor(cat.id)} guides
              </p>
            </button>
          );
        })}
      </div>

      {/* ACTIVE FILTER INDICATOR */}
      {activeCategory !== "all" && (
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Tag className="w-3.5 h-3.5 text-[#C49A2A]" />
            <span className="text-xs font-bold text-[#2B103A] uppercase tracking-wider">
              {CATEGORIES.find((c) => c.id === activeCategory)?.label}
            </span>
            <span className="text-xs text-[#2B103A]/50">
              — {filtered.length} guide{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          <button
            onClick={() => setActiveCategory("all")}
            className="text-xs text-[#2B103A]/50 hover:text-[#2B103A] underline underline-offset-2 transition-colors cursor-pointer"
          >
            Show all
          </button>
        </div>
      )}

      {/* SEARCH RESULTS COUNT */}
      {searchQuery && (
        <div className="flex items-center space-x-2 mb-8">
          <Search className="w-3.5 h-3.5 text-[#C49A2A]" />
          <span className="text-xs text-[#2B103A]/60">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
          </span>
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs text-[#C49A2A] hover:underline cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}

      {/* ALL ARTICLES (no active filter) */}
      {activeCategory === "all" && !searchQuery ? (
        <div className="space-y-14">
          {CATEGORIES.map((cat) => {
            const catArticles = ARTICLES.filter((a) => a.category === cat.id);
            const Icon = cat.icon;
            return (
              <section key={cat.id} id={cat.id}>
                {/* Section heading */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-9 h-9 ${cat.bgColor} text-[#EFE7DA] rounded-[12px] flex items-center justify-center`}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#2B103A]">
                        {cat.label}
                      </h2>
                      <p className="text-xs text-[#2B103A]/60 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className="text-xs font-bold text-[#C49A2A] hover:underline hidden sm:block cursor-pointer"
                  >
                    View all {cat.label} →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* FILTERED / SEARCH RESULTS GRID */
        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-10 h-10 text-[#2B103A]/20 mx-auto mb-3" />
              <p className="text-sm text-[#2B103A]/50 font-medium">
                No guides found. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* BOTTOM CTA */}
      <div className="mt-16 bg-gradient-to-br from-[#2B103A] via-[#3D1852] to-[#2B103A] text-[#EFE7DA] rounded-[32px] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden border border-[#C49A2A]/20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#C49A2A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Still have questions?</span>
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Can&apos;t find what you need?
          </h2>
          <p className="text-xs md:text-sm text-[#EFE7DA]/80 max-w-xl mx-auto mb-8 leading-relaxed font-sans">
            Our on-ground student advisors are available to answer your specific questions directly — whether it&apos;s about housing, paperwork, student life, or travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#C49A2A] text-[#2B103A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#d6aa35] transition-all shadow-lg"
            >
              <span>Ask Mimi Bridge</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/journey-planner"
              className="inline-flex items-center justify-center space-x-2 border border-[#EFE7DA]/20 text-[#EFE7DA] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              <span>Build My Journey Plan</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
