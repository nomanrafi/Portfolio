"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import {
  Brain,
  Code,
  Layers,
  Sparkles,
  Github,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  X,
  Cpu,
  BarChart3,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["All", "AI & ML", "Web & App", "Motion & VFX"];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 subtle-grid opacity-40 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/25 text-xs font-semibold text-blue-400">
              <Brain className="w-3.5 h-3.5" />
              <span>Engineering & Machine Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Software & AI/ML <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl">
              Production-tested machine learning models, full-stack enterprise systems, and cross-platform mobile architectures engineered from the ground up.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-navy-900/80 border border-blue-500/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-gradient-to-b from-navy-850/90 to-dark-900 border border-blue-500/20 hover:border-blue-400/40 p-6 sm:p-7 transition-all duration-300 shadow-card-depth hover:shadow-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Header with Category & Period */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy-950/80 border border-blue-500/20 text-xs font-semibold text-blue-300">
                    <Cpu className="w-3 h-3 text-blue-400" />
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.period}
                  </span>
                </div>

                {/* Title & Accuracy Badge */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.accuracy && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-extrabold text-emerald-300 whitespace-nowrap shadow-sm">
                        <BarChart3 className="w-3 h-3 text-emerald-400" />
                        {project.accuracy}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-300/80 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description Bullets (CV Content) */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Actions Bottom Row */}
              <div className="pt-4 border-t border-blue-500/15">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-navy-900 border border-blue-500/15 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-navy-950 text-blue-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Architecture Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/90 hover:bg-navy-800 border border-blue-500/20 text-xs font-medium text-slate-200 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-blue-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-dark-900 border border-blue-500/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-blue-500/15">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {activeProjectModal.category} • {activeProjectModal.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeProjectModal.title}
                </h3>
                <p className="text-sm text-slate-300 mt-0.5">
                  {activeProjectModal.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Callout */}
            {activeProjectModal.accuracy && (
              <div className="my-5 p-4 rounded-xl bg-navy-950 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-emerald-400 font-bold uppercase">
                    Validated Performance Benchmark
                  </p>
                  <p className="text-lg font-extrabold text-white">
                    {activeProjectModal.accuracy}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
            )}

            {/* Complete Bullet Points */}
            <div className="mt-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Detailed Engineering & Architecture:
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-200">
                {activeProjectModal.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Tech Stack */}
            <div className="mt-6 pt-5 border-t border-blue-500/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies & Tooling:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-md bg-navy-800 border border-blue-500/25 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-6 pt-4 border-t border-blue-500/15 flex justify-end gap-3">
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-blue-soft"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
