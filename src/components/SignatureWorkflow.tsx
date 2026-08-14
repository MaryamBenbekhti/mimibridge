"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";

type FormState = {
  purpose: string;
  city: string;
  housing: string;
  translation: string;
  transportation: string;
};

export default function SignatureWorkflow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormState>({
    purpose: "", city: "", housing: "", translation: "", transportation: ""
  });

  const handleSelect = (field: keyof FormState, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(p => Math.min(p + 1, 4));
  const prevStep = () => setStep(p => Math.max(p - 1, 1));

  return (
    <section id="concierge-builder" className="py-24 px-6 bg-brand-plum relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute -bottom-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-gold blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold font-bold bg-brand-ivory/5 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Core Signature Feature
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-ivory tracking-tight">
            Tell Us About Your Trip
          </h2>
          <p className="text-brand-ivory/70 mt-3 max-w-md mx-auto text-sm md:text-base">
            Build your personalized logistical blueprint in under a minute.
          </p>
        </div>

        <div className="glass-dark border border-brand-ivory/10 rounded-premium p-6 md:p-10 text-brand-ivory shadow-2xl relative min-h-[400px] flex flex-col justify-between">
          <div className="w-full bg-brand-ivory/10 h-1 rounded-full overflow-hidden mb-8">
            <motion.div className="bg-brand-gold h-full" animate={{ width: `${(step / 4) * 100}%` }} transition={{ duration: 0.4 }} />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-center mb-6">What brings you to Turkey?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Student", "Tourist", "Business", "Family"].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect("purpose", option)}
                        className={`p-6 rounded-premium border text-center font-medium transition-all ${
                          formData.purpose === option ? "bg-brand-gold text-brand-plum border-brand-gold" : "bg-brand-ivory/5 border-brand-ivory/10 hover:bg-brand-ivory/10"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-center mb-6">Which city is your destination?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Istanbul", "Ankara", "Izmir", "Antalya", "Other"].map((city) => (
                      <button
                        key={city}
                        onClick={() => handleSelect("city", city)}
                        className={`p-5 rounded-premium border text-center font-medium transition-all ${
                          formData.city === city ? "bg-brand-gold text-brand-plum border-brand-gold" : "bg-brand-ivory/5 border-brand-ivory/10 hover:bg-brand-ivory/10"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-6">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-center mb-6">Select your initial dynamic needs:</h3>
                  <div className="space-y-3 max-w-md mx-auto">
                    {[
                      { id: "housing", label: "Premium Housing Assistance" },
                      { id: "translation", label: "Certified Translator Support" },
                      { id: "transportation", label: "Airport VIP Pick-up Service" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id as keyof FormState, formData[item.id as keyof FormState] === "Yes" ? "No" : "Yes")}
                        className={`w-full p-4 rounded-premium border text-left font-medium flex justify-between items-center transition-all ${
                          formData[item.id as keyof FormState] === "Yes" ? "bg-brand-gold text-brand-plum border-brand-gold" : "bg-brand-ivory/5 border-brand-ivory/10 hover:bg-brand-ivory/10"
                        }`}
                      >
                        <span>{item.label}</span>
                        {formData[item.id as keyof FormState] === "Yes" && <CheckCircle className="w-5 h-5 fill-brand-plum stroke-brand-gold" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                  <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold flex items-center justify-center rounded-full mx-auto mb-4">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold">Your Custom Checklist is Ready</h3>
                  <p className="text-brand-ivory/70 max-w-md mx-auto text-sm">
                    Based on your profile as a <span className="text-brand-gold font-semibold">{formData.purpose || "Visitor"}</span> traveling to <span className="text-brand-gold font-semibold">{formData.city || "Turkey"}</span>, we have optimized your requirements.
                  </p>
                  <div className="bg-brand-ivory/5 rounded-premium p-4 max-w-sm mx-auto text-left text-xs space-y-2 border border-brand-ivory/5">
                    <div className="flex justify-between"><span>• Airport Transfer Assignment</span><span className="text-brand-gold">Pending</span></div>
                    <div className="flex justify-between"><span>• Local Biometric SIM Sourcing</span><span className="text-brand-gold">Included</span></div>
                    <div className="flex justify-between"><span>• Legal Turkish Liaison Match</span><span className="text-brand-gold">Ready</span></div>
                  </div>
                  <button className="bg-brand-gold text-brand-plum font-semibold px-8 py-3.5 rounded-premium shadow-lg hover:bg-brand-gold/95 inline-flex items-center space-x-2 mt-2">
                    <span>Generate Complete Blueprint</span> <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {step < 4 && (
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-brand-ivory/10">
              <button onClick={prevStep} disabled={step === 1} className={`flex items-center space-x-1 text-sm ${step === 1 ? "opacity-30 cursor-not-allowed" : "hover:text-brand-gold"}`}>
                <ArrowLeft className="w-4 h-4" /> <span>Back</span>
              </button>
              <button onClick={nextStep} className="bg-brand-ivory text-brand-plum px-6 py-2.5 rounded-premium text-sm font-semibold flex items-center space-x-1 hover:bg-brand-gold hover:text-brand-plum transition-all">
                <span>Continue</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}