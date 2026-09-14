import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050B14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abdullah Al Noman | AI/ML Developer & Motion Graphics Designer",
  description:
    "Official portfolio of Abdullah Al Noman. High-accuracy Machine Learning Engineering (SONAR, SHAP, Ensemble Learning) and High-End Motion Graphics / Post-Production (Premiere Pro, After Effects, Dynamic Link, VFX).",
  keywords: [
    "Abdullah Al Noman",
    "AI Developer",
    "Machine Learning Engineer",
    "Motion Graphics Designer",
    "Video Editor",
    "After Effects",
    "Premiere Pro",
    "Post-Production",
    "Python",
    "Flutter",
    "Daffodil International University",
  ],
  authors: [{ name: "Abdullah Al Noman" }],
  openGraph: {
    title: "Abdullah Al Noman | AI/ML Developer & Motion Graphics Designer",
    description:
      "Explore the intersection of AI Engineering and Cinematic Motion Design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-950 text-slate-100 min-h-screen antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
