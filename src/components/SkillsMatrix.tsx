"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Brain,
  Film,
  Code2,
  Terminal,
  CheckCircle2,
  Sliders,
  Sparkles,
} from "lucide-react";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<"aiMl" | "motionVideo" | "softwareWeb" | "toolsOther">("aiMl");
  const { skills } = portfolioData;

  const tabs = [
    { id: "aiMl" as const, label: "AI & Machine Learning", icon: Brain, count: skills.aiMl.length },
    { id: "motionVideo" as const, label: "Motion Design & Video VFX", icon: Film, count: skills.motionVideo.length },
    { id: "softwareWeb" as const, label: "Web, Mobile & Backend", icon: Code2, count: skills.softwareWeb.length },
    { id: "toolsOther" as const, label: "Systems & Data Tools", icon: Terminal, count: skills.toolsOther.length },
  ];

  return (
    <section id="skills" className="relative py-24 bg-dark-900/80 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/25 text-xs font-semibold text-blue-400">
            <Sliders className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p className="text-base text-slate-300">
            Deep technical proficiency spanning mathematically grounded machine learning, production software development, and cinematic visual post-production.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-950/90 border border-blue-500/20 backdrop-blur-md gap-1 sm:gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white shadow-blue-soft"
                      : "text-slate-400 hover:text-white hover:bg-navy-850"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-400"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-blue-700 text-blue-100" : "bg-navy-800 text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-4">
          {activeTab !== "toolsOther" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {skills[activeTab].map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl bg-navy-850/70 border border-blue-500/15 hover:border-blue-400/35 transition-all shadow-sm group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                      <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-navy-950 border border-blue-500/20 text-blue-300">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-navy-950 rounded-full h-2 overflow-hidden border border-blue-500/10 mt-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1.5">
                    <span>Proficiency Level</span>
                    <span className="font-mono font-bold text-blue-400">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Systems & Data Tools Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.toolsOther.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-navy-850/80 border border-blue-500/15 hover:border-blue-400/35 transition-all text-center group"
                >
                  <div className="w-8 h-8 rounded-lg bg-navy-950 border border-blue-500/20 mx-auto mb-2 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                    <Terminal className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {tool.name}
                  </h4>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {tool.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
