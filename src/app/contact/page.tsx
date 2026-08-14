"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Phone,
    Mail,
    Camera,
    MessageSquare,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Clock,
    Send,
    User,
    ChevronDown,
} from "lucide-react";

// ────────────────────────────────────────────────────────────────
// CONTACT CHANNELS
// ────────────────────────────────────────────────────────────────
const CONTACT_CHANNELS = [
    {
        id: "whatsapp",
        label: "WhatsApp",
        value: "+905513540508",
        sub: "Turkey Line — Fastest response",
        href: "https://wa.me/905513540508",
        icon: MessageSquare,
        badge: "Fastest",
    },
    {
        id: "email",
        label: "Email",
        value: "marie.benbekhti@gmail.com",
        sub: "We reply within 24 hours",
        href: "marie.benbekhti@gmail.com",
        icon: Mail,
        badge: null,
    },
    {
        id: "instagram",
        label: "Instagram",
        value: "@mimibridge_",
        sub: "DMs open — follow us for updates",
        href: "https://instagram.com/mimibridge_",
        icon: Camera,
        badge: null,
    },
    {
        id: "location",
        label: "Based In",
        value: "Turkey & Saudi Arabia",
        sub: "On-ground",
        href: null,
        icon: MapPin,
        badge: null,
    },
];

// ────────────────────────────────────────────────────────────────
// SERVICE OPTIONS FOR BOOKING FORM
// ────────────────────────────────────────────────────────────────
const SERVICE_OPTIONS = [
    { value: "", label: "Select a service..." },
    { value: "student-current", label: "Student Services — Current Student" },
    { value: "student-new", label: "Student Services — New Student" },
    { value: "student-parent", label: "Student Services — Parent Support" },
    { value: "turkey-paperwork", label: "Turkey — Paperwork & Administrative Assistance" },
    { value: "saudi-paperwork", label: "Saudi Arabia — Paperwork & Administrative Assistance" },
    { value: "turkey-translation", label: "Translation Services — Turkey" },
    { value: "saudi-translation", label: "Translation Services — Saudi Arabia" },
    { value: "turkey-travel", label: "Travel Services — Turkey" },
    { value: "saudi-travel", label: "Travel Services — Saudi Arabia" },
    { value: "parent-video-checkin", label: "Parent Support — Student Video Check-In" },
    { value: "parent-housing-check", label: "Parent Support — Housing Video Check" },
    { value: "parent-update", label: "Parent Support — Parent Update" },
    { value: "parent-monthly", label: "Parent Support — Monthly Student Check-In" },
    { value: "other", label: "Other / Not Sure" },
];

const DESTINATION_OPTIONS = [
    { value: "", label: "Select destination..." },
    { value: "turkey", label: "🇹🇷 Turkey" },
    { value: "saudi", label: "🇸🇦 Saudi Arabia" },
    { value: "both", label: "Both" },
];

// ────────────────────────────────────────────────────────────────
// FORM STATE TYPE
// ────────────────────────────────────────────────────────────────
interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    destination: string;
    service: string;
    message: string;
}

// ────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────
export default function ContactPage() {
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        destination: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            {/* PAGE HEADER */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C49A2A] font-bold block mb-3">
                    Get In Touch
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#2B103A] mb-4 leading-tight">
                    We&apos;re Here to{" "}
                    <span className="text-[#C49A2A]">Help You.</span>
                </h1>
                <p className="text-sm md:text-base text-[#2B103A]/70 leading-relaxed">
                    Reach out through any channel below, or fill in the booking form and we
                    will contact you directly to confirm your request.
                </p>
            </div>

            {/* CONTACT CHANNELS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                {CONTACT_CHANNELS.map((ch) => {
                    const Icon = ch.icon;
                    const inner = (
                        <div className="bg-white/40 backdrop-blur-md p-6 rounded-[24px] border border-[#2B103A]/10 hover:border-[#C49A2A] transition-all duration-300 shadow-sm hover:shadow-lg group h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-11 h-11 bg-[#2B103A] text-[#C49A2A] rounded-[14px] flex items-center justify-center group-hover:scale-105 transition-transform">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    {ch.badge && (
                                        <span className="text-[9px] bg-[#C49A2A] text-[#2B103A] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                                            {ch.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-[#2B103A]/50 mb-1">
                                    {ch.label}
                                </p>
                                <p className="font-serif font-bold text-lg text-[#2B103A] mb-1 leading-tight">
                                    {ch.value}
                                </p>
                                <p className="text-xs text-[#2B103A]/60 leading-relaxed">{ch.sub}</p>
                            </div>
                            {ch.href && (
                                <div className="flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#C49A2A] mt-4 group-hover:underline">
                                    <span>Open</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            )}
                        </div>
                    );

                    return ch.href ? (
                        <a
                            key={ch.id}
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                        >
                            {inner}
                        </a>
                    ) : (
                        <div key={ch.id} className="h-full">
                            {inner}
                        </div>
                    );
                })}
            </div>

            {/* RESPONSE TIME BANNER */}
            <div className="flex items-center justify-center space-x-3 bg-[#2B103A]/5 border border-[#2B103A]/10 rounded-[14px] p-4 mb-16 max-w-xl mx-auto">
                <Clock className="w-4 h-4 text-[#C49A2A] shrink-0" />
                <p className="text-xs text-[#2B103A]/70">
                    <span className="font-bold text-[#2B103A]">Typical response time: </span>
                    WhatsApp within 1–2 hours · Email within 24 hours · Instagram within 48 hours
                </p>
            </div>

            {/* TWO-COLUMN: BOOKING FORM + INFO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* BOOKING FORM */}
                <div className="lg:col-span-7">
                    <div className="bg-white/50 backdrop-blur-md border border-[#2B103A]/10 rounded-[32px] p-8 md:p-10 shadow-xl">

                        {submitted ? (
                            /* SUCCESS STATE */
                            <div className="text-center py-10 space-y-5">
                                <div className="w-16 h-16 bg-[#C49A2A]/10 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-[#C49A2A]" />
                                </div>
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A]">
                                    Request Received!
                                </h2>
                                <p className="text-xs md:text-sm text-[#2B103A]/70 max-w-sm mx-auto leading-relaxed">
                                    Thank you for reaching out to Mimi Bridge. Our team will review
                                    your request and contact you via WhatsApp or email within 24 hours
                                    to confirm and discuss your service.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", destination: "", service: "", message: "" }); }}
                                    className="inline-flex items-center space-x-2 bg-[#2B103A] text-[#EFE7DA] px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#2B103A]/90 transition-colors mt-4"
                                >
                                    <span>Submit Another Request</span>
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] text-[#C49A2A] font-bold mb-2">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        <span>Book a Service</span>
                                    </span>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2B103A]">
                                        Tell Us What You Need
                                    </h2>
                                    <p className="text-xs text-[#2B103A]/60 mt-1">
                                        Fill in your details and we&apos;ll reach out to confirm everything personally.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* NAME ROW */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                                First Name <span className="text-[#C49A2A]">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30" />
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    required
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Fatima"
                                                    className="w-full pl-9 pr-4 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] placeholder:text-[#2B103A]/30 focus:outline-none focus:border-[#C49A2A] transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                                Last Name <span className="text-[#C49A2A]">*</span>
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30" />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    required
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Al-Rashidi"
                                                    className="w-full pl-9 pr-4 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] placeholder:text-[#2B103A]/30 focus:outline-none focus:border-[#C49A2A] transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                            Email Address <span className="text-[#C49A2A]">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="[EMAIL_ADDRESS]"
                                                className="w-full pl-9 pr-4 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] placeholder:text-[#2B103A]/30 focus:outline-none focus:border-[#C49A2A] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* PHONE */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                            WhatsApp / Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+966 5XX XXX XXXX"
                                                className="w-full pl-9 pr-4 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] placeholder:text-[#2B103A]/30 focus:outline-none focus:border-[#C49A2A] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* DESTINATION + SERVICE ROW */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                                Destination <span className="text-[#C49A2A]">*</span>
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30 pointer-events-none" />
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30 pointer-events-none" />
                                                <select
                                                    name="destination"
                                                    required
                                                    value={form.destination}
                                                    onChange={handleChange}
                                                    className="w-full pl-9 pr-8 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] focus:outline-none focus:border-[#C49A2A] transition-colors appearance-none cursor-pointer"
                                                >
                                                    {DESTINATION_OPTIONS.map((o) => (
                                                        <option key={o.value} value={o.value} disabled={o.value === ""}>
                                                            {o.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                                Service Needed <span className="text-[#C49A2A]">*</span>
                                            </label>
                                            <div className="relative">
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B103A]/30 pointer-events-none" />
                                                <select
                                                    name="service"
                                                    required
                                                    value={form.service}
                                                    onChange={handleChange}
                                                    className="w-full px-4 pr-8 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] focus:outline-none focus:border-[#C49A2A] transition-colors appearance-none cursor-pointer"
                                                >
                                                    {SERVICE_OPTIONS.map((o) => (
                                                        <option key={o.value} value={o.value} disabled={o.value === ""}>
                                                            {o.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MESSAGE */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2B103A]/60 mb-1.5">
                                            Tell Us More
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Describe your situation, dates, or any specific needs. The more detail, the better we can help."
                                            className="w-full px-4 py-3 bg-white/70 border border-[#2B103A]/15 rounded-[14px] text-xs text-[#2B103A] placeholder:text-[#2B103A]/30 focus:outline-none focus:border-[#C49A2A] transition-colors resize-none"
                                        />
                                    </div>

                                    {/* SUBMIT */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 rounded-full bg-[#2B103A] text-[#EFE7DA] text-xs font-bold uppercase tracking-wider hover:bg-[#2B103A]/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70"
                                    >
                                        {loading ? (
                                            <span>Sending...</span>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                <span>Submit Request</span>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-center text-[#2B103A]/50 leading-relaxed">
                                        By submitting, you agree to be contacted by Mimi Bridge via email or WhatsApp
                                        regarding your request. We never share your information with third parties.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>

                {/* RIGHT PANEL — INFO SIDEBAR */}
                <div className="lg:col-span-5 space-y-6">

                    {/* WHAT HAPPENS NEXT */}
                    <div className="bg-gradient-to-br from-[#2B103A] to-[#3D1852] text-[#EFE7DA] p-8 rounded-[28px] shadow-xl">
                        <h3 className="font-serif text-xl font-bold mb-5">
                            What Happens After You Submit?
                        </h3>
                        <ol className="space-y-4">
                            {[
                                { step: "01", text: "Our team reviews your request, typically within a few hours." },
                                { step: "02", text: "We contact you via WhatsApp or email to confirm your details and clarify any questions." },
                                { step: "03", text: "We prepare a brief plan or quote for your specific situation." },
                                { step: "04", text: "Once confirmed, your Mimi Bridge concierge begins your support." },
                            ].map((item) => (
                                <li key={item.step} className="flex items-start space-x-4">
                                    <span className="text-[#C49A2A] font-serif font-bold text-lg shrink-0 leading-tight">
                                        {item.step}
                                    </span>
                                    <p className="text-xs text-[#EFE7DA]/80 leading-relaxed">{item.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* LANGUAGES */}
                    <div className="bg-white/40 backdrop-blur-md border border-[#2B103A]/10 rounded-[24px] p-6 shadow-sm">
                        <span className="text-xs uppercase tracking-widest text-[#C49A2A] font-bold block mb-3">
                            We Communicate In
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {["🇸🇦 Arabic", "🇬🇧 English", "🇹🇷 Turkish", "🇫🇷 French"].map((lang) => (
                                <span
                                    key={lang}
                                    className="text-xs font-semibold bg-[#2B103A]/5 border border-[#2B103A]/10 text-[#2B103A] px-4 py-2 rounded-full"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* DIRECT WHATSAPP CTA */}
                    <a
                        href="https://wa.me/90XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-[#25D366] text-white p-5 rounded-[20px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider">
                                    Prefer WhatsApp?
                                </p>
                                <p className="text-xs text-white/80">Message us directly — fastest reply</p>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* INSTAGRAM CTA */}
                    <a
                        href="https://instagram.com/mimibridge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-5 rounded-[20px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Camera className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider">
                                    Follow on Instagram
                                </p>
                                <p className="text-xs text-white/80">@mimibridge · DMs welcome</p>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-20 text-center space-y-4">
                <p className="text-xs text-[#2B103A]/50">
                    Not sure which service you need?
                </p>
                <Link
                    href="/journey-planner"
                    className="inline-flex items-center space-x-2 bg-[#2B103A] text-[#EFE7DA] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#2B103A]/90 transition-all shadow-md"
                >
                    <span>Use the Journey Planner</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
