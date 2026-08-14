import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mimi Bridge | Your Trusted Bridge to Life in Turkey",
  description: "Premium personal concierge platform helping you settle, study, travel, and conduct business smoothly in Turkey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#EFE7DA] text-[#2B103A] antialiased">
        {/* SHARED GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}