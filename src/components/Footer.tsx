"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-blue-500/15 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 border border-blue-400/30 text-white font-bold text-sm">
              AN
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {portfolioData.personal.name}
              </p>
              <p className="text-xs text-slate-400">
                AI/ML Developer & Motion Graphics Designer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">
              Overview
            </a>
            <a href="#videos" className="hover:text-white transition-colors">
              Video Showcase
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              AI/ML Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills Matrix
            </a>
            <a href="#awards" className="hover:text-white transition-colors">
              Honors & Awards
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right Column: Back to top & Socials */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-navy-900 border border-blue-500/20 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-navy-900 border border-blue-500/20 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg bg-navy-900 border border-blue-500/20 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-blue-soft"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Abdullah Al Noman. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with Next.js, Tailwind CSS & High-End Motion Principles.
          </p>
        </div>
      </div>
    </footer>
  );
}
