"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Trophy,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Languages,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

export default function ExperienceAwards() {
  const { education, awards, certifications, languages } = portfolioData;

  return (
    <section id="awards" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/25 text-xs font-semibold text-blue-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background & <span className="gradient-text">Honors</span>
          </h2>
          <p className="text-base text-slate-300">
            Rigorous computer science foundation combined with competitive hackathons, NASA space challenge victory, and certified technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Languages */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="rounded-2xl bg-gradient-to-b from-navy-850 to-dark-900 border border-blue-500/20 p-6 sm:p-7 shadow-card-depth">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Higher Education
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {education.institution}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-base font-semibold text-slate-200">
                  {education.degree}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{education.duration}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                </div>

                <div className="pt-4 border-t border-blue-500/15">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    <span>Relevant Coursework:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-md bg-navy-950 border border-blue-500/15 text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="rounded-2xl bg-navy-850/80 border border-blue-500/20 p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-navy-950 border border-blue-500/20 text-blue-400">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Language Proficiencies
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-navy-950/80 border border-blue-500/15"
                  >
                    <span className="block font-bold text-sm text-white">{lang.name}</span>
                    <span className="text-[11px] text-blue-400 block mt-0.5">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Quick List */}
            <div className="rounded-2xl bg-navy-850/80 border border-blue-500/20 p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-navy-950 border border-blue-500/20 text-blue-400">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Professional Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-navy-950/80 border border-blue-500/15 flex items-start justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-100">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Awards & Competitions Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Competitions, Awards & Hackathons</span>
            </h3>

            {awards.map((award, index) => (
              <div
                key={index}
                className="relative rounded-2xl bg-gradient-to-r from-navy-850 to-navy-900/90 border border-blue-500/20 hover:border-blue-400/40 p-5 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-card-hover group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {award.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-400 font-medium ml-4 mt-0.5">
                      {award.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 ml-4 sm:ml-0">
                    <span className="px-2.5 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-xs font-bold text-blue-300">
                      {award.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {award.year}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed ml-4 mt-2">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
