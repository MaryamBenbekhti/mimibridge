"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="text-xs uppercase tracking-wider text-[#2B103A]/70 mb-6 flex items-center space-x-2 flex-wrap"
    >
      <Link 
        href="/" 
        className="inline-flex items-center space-x-1 hover:text-[#C49A2A] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-[#2B103A]/30 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-[#C49A2A] font-bold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#C49A2A] transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
