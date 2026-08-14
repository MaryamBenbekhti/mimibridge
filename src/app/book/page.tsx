"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, Briefcase } from "lucide-react";

export default function BookingPage() {
  const [destination, setDestination] = useState("turkey");
  const [service, setService] = useState("student");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#EFE7DA] text-[#2B103A] pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold block mb-2">
            Direct Concierge
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Book a Consultation
          </h1>
        </div>

        {submitted ? (
          <div className="bg-white/60 p-8 rounded-[28px] border border-[#2B103A]/10 text-center space-y-4">
            <h2 className="font-serif text-2xl font-bold">Consultation Requested</h2>
            <p className="text-xs text-[#2B103A]/70 leading-relaxed">
              Our team will contact you on WhatsApp / Email within 2 hours to confirm your schedule.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-md p-8 rounded-[28px] border border-[#2B103A]/10 space-y-6 shadow-xl">
            
            {/* 1. Destination */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider block mb-2 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C49A2A]" />
                <span>1. Choose Destination</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDestination("turkey")}
                  className={`p-3 rounded-xl border text-xs font-bold uppercase transition-all ${
                    destination === "turkey" ? "bg-[#2B103A] text-[#EFE7DA]" : "bg-white/40"
                  }`}
                >
                  🇹🇷 Turkey
                </button>
                <button
                  type="button"
                  onClick={() => setDestination("saudi")}
                  className={`p-3 rounded-xl border text-xs font-bold uppercase transition-all ${
                    destination === "saudi" ? "bg-emerald-900 text-[#EFE7DA]" : "bg-white/40"
                  }`}
                >
                  🇸🇦 Saudi Arabia
                </button>
              </div>
            </div>

            {/* 2. Service */}
            <div>
              <label className="text-xs uppercase font-bold tracking-wider block mb-2 flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#C49A2A]" />
                <span>2. Select Service</span>
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-white/80 border border-[#2B103A]/15 rounded-xl p-3 text-xs font-medium focus:outline-none"
              >
                <option value="student">Student Admissions & Support</option>
                <option value="translation">Multilingual Translation / Companion</option>
                <option value="travel">Travel Concierge & Local Support</option>
              </select>
            </div>

            {/* 3. Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-bold tracking-wider block mb-2 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#C49A2A]" />
                  <span>3. Preferred Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white/80 border border-[#2B103A]/15 rounded-xl p-3 text-xs font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase font-bold tracking-wider block mb-2 flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C49A2A]" />
                  <span>4. Preferred Time</span>
                </label>
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white/80 border border-[#2B103A]/15 rounded-xl p-3 text-xs font-medium focus:outline-none"
                >
                  <option value="">Select Time Slot</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2B103A] text-[#EFE7DA] py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#2B103A]/90 transition-all shadow-md"
            >
              Confirm Consultation Request
            </button>
          </form>
        )}
      </div>
    </main>
  );
}