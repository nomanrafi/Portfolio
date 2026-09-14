"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  UserCheck,
  Copy,
  Check,
  Building2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function ReferenceAndContact() {
  const { personal, reference } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Machine Learning & Motion Project",
    message: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-900/70 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Reference Section */}
        <div className="mb-20">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-blue-500/20 shadow-card-depth flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-400/30 flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Academic Endorsement & Reference
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {reference.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {reference.title}, {reference.department}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-blue-300 font-medium pt-1">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{reference.institution}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href={`mailto:${reference.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-950/80 border border-blue-500/20 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-400/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{reference.email}</span>
              </a>
              <a
                href={`tel:${reference.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-950/80 border border-blue-500/20 text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-400/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{reference.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Direct Contacts Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/25 text-xs font-semibold text-blue-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-base text-slate-300">
            Have a machine learning project, computer vision challenge, or cinematic motion graphics commission? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-navy-850/80 border border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.email, "email")}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-navy-900 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-navy-850/80 border border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-sm font-bold text-white hover:text-blue-300 transition-colors"
                  >
                    {personal.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, "phone")}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-navy-900 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-navy-850/80 border border-blue-500/20 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-sm font-bold text-white">
                  {personal.location}
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Official Profiles:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-navy-850/80 border border-blue-500/20 hover:border-blue-400/40 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-navy-850/80 border border-blue-500/20 hover:border-blue-400/40 flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
                >
                  <Github className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-navy-850 to-dark-900 border border-blue-500/20 shadow-card-depth">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You, Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I will review your inquiry and respond directly to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Project Area / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-400"
                    >
                      <option value="Machine Learning & Motion Project">
                        AI / Machine Learning Engineering Project
                      </option>
                      <option value="Motion Graphics & Video Editing">
                        Motion Graphics & Video Post-Production
                      </option>
                      <option value="Full-Stack Web & Mobile App">
                        Full-Stack Web or Mobile Application
                      </option>
                      <option value="Technical Consultation">
                        Technical Consultation / Other
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Project Brief or Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project timeline, requirements, or challenge..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-navy-950 border border-blue-500/20 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-blue-soft hover:shadow-blue-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
