"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, Download, Play, Code2, Sparkles, Mail, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Video Showcase", href: "#videos" },
    { label: "AI & ML Projects", href: "#projects" },
    { label: "Skills Matrix", href: "#skills" },
    { label: "Honors & Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-xl border-b border-blue-500/15 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#overview"
          className="group flex items-center gap-3.5 text-white no-underline"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-dark-850 border border-blue-400/30 shadow-blue-soft group-hover:scale-105 transition-transform duration-200">
            <span className="font-bold text-base tracking-wider text-white">AN</span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-dark-950" title="Available for work" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-100 group-hover:text-blue-300 transition-colors duration-200 text-base sm:text-lg">
              {portfolioData.personal.name}
            </span>
            <span className="text-xs text-blue-400 font-medium hidden sm:inline-block">
              AI/ML Developer & Motion Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-navy-800/60 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/CV%20of%20Abdullah%20Al%20Noman.pdf"
            download
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-navy-900/80 hover:bg-navy-800 border border-blue-500/25 rounded-lg transition-all duration-200 hover:border-blue-400/50"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-blue-soft transition-all duration-200 hover:shadow-blue-glow hover:-translate-y-0.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg bg-navy-900/80 border border-blue-500/20 text-slate-200 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-dark-900/98 backdrop-blur-2xl border-b border-blue-500/20 shadow-2xl transition-all">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-blue-600/20 hover:text-blue-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-blue-500/15 flex flex-col gap-2.5">
              <a
                href="/CV%20of%20Abdullah%20Al%20Noman.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-navy-800 border border-blue-500/30 rounded-lg"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
