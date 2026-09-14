import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceAwards from "@/components/ExperienceAwards";
import ReferenceAndContact from "@/components/ReferenceAndContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-blue-600 selection:text-white">
      <Navbar />
      <HeroSection />
      <VideoShowcase />
      <ProjectsSection />
      <SkillsMatrix />
      <ExperienceAwards />
      <ReferenceAndContact />
      <Footer />
    </main>
  );
}
