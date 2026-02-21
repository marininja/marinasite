"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import SessionsSection from "@/components/SessionsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useSectionAnalytics } from "@/hooks/useSectionAnalytics";

const Index = () => {
  useSectionAnalytics({
    sections: [
      "hero",
      "approach",
      "who-is-it-for",
      "sessions",
      "about",
      "cta"
    ],
    threshold: 2000
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ApproachSection />
        <WhoIsItForSection />
        <SessionsSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
