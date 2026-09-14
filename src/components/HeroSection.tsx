"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import {
  Play,
  Brain,
  Film,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="overview"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Dark-Blue Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-navy-700/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, Titles, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-blue-500/25 shadow-sm text-xs font-medium text-slate-200">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Available for Machine Learning & Motion Graphics Projects</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-[0.25em] font-semibold text-blue-400">
                Software Engineer & Motion Designer
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Abdullah Al <span className="gradient-text">Noman</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 flex items-center gap-2 flex-wrap">
                <span className="text-blue-400">AI/ML Developer</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-100">Motion Graphics Designer</span>
              </p>
            </div>

            {/* Core Tagline */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              Bridging the gap between intelligent algorithms and cinematic visual storytelling. Specializing in high-accuracy machine learning architectures, automated post-production pipelines in Premiere Pro & After Effects, and scalable software solutions.
            </p>

            {/* Location & University Badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-navy-900/60 px-3 py-1.5 rounded-md border border-blue-500/15">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-navy-900/60 px-3 py-1.5 rounded-md border border-blue-500/15">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                B.Sc. CSE, Daffodil International University
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#videos"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-blue-soft hover:shadow-blue-glow transition-all duration-200 w-full sm:w-auto group"
              >
                <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                <span>Watch Video Showcase</span>
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-navy-900/80 hover:bg-navy-800 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-200 w-full sm:w-auto"
              >
                <Brain className="w-4 h-4 text-blue-400" />
                <span>Explore ML Projects</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-navy-900/80 border border-blue-500/20 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-navy-800 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-navy-900/80 border border-blue-500/20 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-navy-800 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-navy-900/80 border border-blue-500/20 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-navy-800 transition-all"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Glow Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500/30 via-navy-700/20 to-blue-600/30 rounded-3xl blur-md opacity-70" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-navy-850 to-dark-900 border border-blue-500/25 p-3.5 shadow-2xl overflow-hidden">
                {/* Profile Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-navy-950 border border-blue-500/20 shadow-inner">
                  <Image
                    src="/20260716_011820.jpg"
                    alt="Abdullah Al Noman"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent opacity-80" />

                  {/* Corner Badge on Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-navy-950/90 backdrop-blur-md border border-blue-500/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                          Portfolio Verified
                        </p>
                        <p className="text-sm font-bold text-white">
                          AI/ML & Motion Graphics
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Metrics bar under portrait */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-blue-500/15">
                  <div className="px-3 py-2 rounded-lg bg-navy-900/60 border border-blue-500/10">
                    <span className="block text-[11px] text-slate-400">ML Benchmark</span>
                    <span className="text-sm font-bold text-blue-400">97.85% Accuracy</span>
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-navy-900/60 border border-blue-500/10">
                    <span className="block text-[11px] text-slate-400">NASA Space Apps</span>
                    <span className="text-sm font-bold text-emerald-400">Regional Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 pt-10 border-t border-blue-500/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-navy-900/50 backdrop-blur-md border border-blue-500/15 hover:border-blue-400/35 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <span className="blue-gradient-text">{item.value}</span>
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
