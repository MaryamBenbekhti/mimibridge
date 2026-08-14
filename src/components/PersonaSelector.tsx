"use client";

import React, { useState } from "react";
import { GraduationCap, User, Users, Compass, Briefcase, Heart, Sparkles } from "lucide-react";

export type PersonaType = "current_student" | "new_student" | "parent";

interface PersonaOption {
  id: PersonaType;
  label: string;
  icon: React.ElementType;
}

const PERSONAS: PersonaOption[] = [
  { id: "current_student", label: "Current Student", icon: User },
  { id: "new_student", label: "New Student", icon: GraduationCap },
  { id: "parent", label: "Parent", icon: Users },
];

interface PersonaSelectorProps {
  onPersonaChange?: (persona: PersonaType | null) => void;
}

export default function PersonaSelector({ onPersonaChange }: PersonaSelectorProps) {
  const [selected, setSelected] = useState<PersonaType | null>(null);

  const handleSelect = (id: PersonaType) => {
    const next = selected === id ? null : id;
    setSelected(next);
    if (onPersonaChange) onPersonaChange(next);
  };

  return (
    <div className="bg-white/40 backdrop-blur-md border border-[#2B103A]/10 rounded-[24px] p-6 mb-12 shadow-md">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-[#C49A2A]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#2B103A]">
            Tailor Your View
          </span>
        </div>
        {selected && (
          <button
            onClick={() => handleSelect(selected)}
            className="text-[11px] text-[#2B103A]/60 hover:text-[#2B103A] underline font-medium"
          >
            Reset Filter
          </button>
        )}
      </div>

      <p className="text-xs text-[#2B103A]/70 mb-4">
        Who are you? Select your profile to highlight the services most relevant to your journey:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PERSONAS.map((p) => {
          const Icon = p.icon;
          const isSelected = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => handleSelect(p.id)}
              className={`flex flex-col items-center justify-center p-3.5 rounded-[16px] border text-center transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#2B103A] text-[#EFE7DA] border-[#2B103A] shadow-lg scale-[1.02]"
                  : "bg-white/60 border-[#2B103A]/10 text-[#2B103A] hover:border-[#C49A2A]"
              }`}
            >
              <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-[#C49A2A]" : "text-[#2B103A]"}`} />
              <span className="text-xs font-semibold leading-tight">{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}