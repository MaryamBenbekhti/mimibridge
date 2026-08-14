"use client";
import React from "react";
import { MessageSquare, Camera, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-plum text-brand-ivory/90 border-t border-brand-ivory/5 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-brand-ivory">Mimi Bridge</h3>
          <p className="text-xs text-brand-ivory/60 max-w-xs leading-relaxed">
            Your premium concierge partner for travel, education, language integration, and luxury business landing assets inside Turkey.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-brand-ivory/70">
            {["Students Matrix", "Travel Core", "Translation Desk", "Corporate Bridge"].map((l) => (
              <li key={l}><a href="#" className="hover:text-brand-ivory transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Communication</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-9 h-9 bg-brand-ivory/5 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-plum transition-all"><MessageSquare className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 bg-brand-ivory/5 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-plum transition-all"><Camera className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 bg-brand-ivory/5 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-plum transition-all"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Newsletter</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input type="email" placeholder="Email" className="bg-brand-ivory/5 border border-brand-ivory/10 px-3 py-2 text-xs rounded-l-premium outline-none text-brand-ivory w-full" />
            <button className="bg-brand-gold text-brand-plum font-semibold px-4 text-xs rounded-r-premium">Join</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-brand-ivory/5 flex flex-col sm:flex-row justify-between text-xs text-brand-ivory/40">
        <span>&copy; {new Date().getFullYear()} Mimi Bridge. All Rights Reserved.</span>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a href="#">Privacy Protocol</a>
          <a href="#">Terms of Concierge</a>
        </div>
      </div>
    </footer>
  );
}