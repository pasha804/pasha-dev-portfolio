import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { PricingSection } from './sections/PricingSection';
import { HostingEducation } from './sections/HostingEducation';
import { QuoteCalculator } from './sections/QuoteCalculator';
import { ProjectProcess } from './sections/ProjectProcess';
import { PortfolioSection } from './sections/PortfolioSection';
import { AboutSection } from './sections/AboutSection';
import { WhySoloSection } from './sections/WhySoloSection';
import { TechStackWall } from './sections/TechStackWall';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CommandPalette } from './components/CommandPalette';
import { IntroScreen } from './components/IntroScreen';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useState<{
    packageTitle?: string;
    projectType?: string;
    pages?: string;
    features?: string[];
    estimateRange?: string;
  } | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenInquiry = (initialCategoryOrPackage?: string) => {
    if (initialCategoryOrPackage) {
      setInquiryData({ packageTitle: initialCategoryOrPackage });
    } else {
      setInquiryData(null);
    }
    setIsInquiryOpen(true);
  };

  const handleOpenInquiryWithEstimate = (details: {
    projectType: string;
    pages: string;
    features: string[];
    estimateRange: string;
  }) => {
    setInquiryData(details);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col relative selection:bg-purple-glow/30 selection:text-purple-neon w-full max-w-full overflow-x-hidden bg-[#050508]">
      {/* Cinematic Intro Screen */}
      {showIntro && (
        <IntroScreen onComplete={() => setShowIntro(false)} />
      )}

      {/* High-End Global Cyber Atmosphere Background (Positive Z-index, perfectly rendered) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img 
          src="/bg-cyber.jpg" 
          alt="Cyber Cosmic Atmosphere" 
          className="w-full h-full object-cover object-center opacity-80 pointer-events-none" 
        />
        {/* Cosmic Purple Aurora Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(168,85,247,0.25),transparent_75%)] pointer-events-none" />
        {/* Balanced Vignette Veil for Perfect Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/30 via-[#050508]/50 to-[#050508]/85 pointer-events-none" />
      </div>

      {/* Main Interactive Website Body */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* Desktop trailing custom cursor */}
        <CustomCursor />

        {/* Main navigation */}
        <Navbar 
          onOpenInquiry={handleOpenInquiry} 
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {/* 1. Cinematic Hero with Workstation SVG HUD */}
          <HeroSection onOpenInquiry={handleOpenInquiry} />

          {/* 2. Interactive Services Explorer */}
          <ServicesSection onOpenInquiry={handleOpenInquiry} />

          {/* 3. Transparent Pricing Menu (Tabs for Websites, Stores, Apps, Desktop + PKR/USD Toggle) */}
          <PricingSection onOpenInquiry={handleOpenInquiry} />

          {/* 4. What You Pay For & Hosting Education Guide (Hostinger + VPS Breakdown) */}
          <HostingEducation />

          {/* 5. Interactive Quote Estimator / Price Calculator with WhatsApp Export */}
          <QuoteCalculator onOpenInquiryWithEstimate={handleOpenInquiryWithEstimate} />

          {/* 6. 6-Step Project Process */}
          <ProjectProcess />

          {/* 7. Real Portfolio Showcase with Filter Tabs & Architecture Details */}
          <PortfolioSection />

          {/* 8. About Muhammad Mubashar (Pasha Dev) & Interactive Terminal */}
          <AboutSection />

          {/* 9. Why Work With a Solo Developer? (No Agency Fluff) */}
          <WhySoloSection />

          {/* 10. Curated Tech Stack Wall & Client Feedback Notice */}
          <TechStackWall />

          {/* 11. Frequently Asked Questions */}
          <FAQSection />

          {/* 12. Cinematic Final Call To Action */}
          <FinalCTASection onOpenInquiry={() => handleOpenInquiry()} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Direct WhatsApp CTA */}
        <FloatingWhatsApp />

        {/* Interactive 4-step Project Inquiry Modal */}
        <ProjectInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          preselectedData={inquiryData}
        />

        {/* Quick Command Palette (Cmd+K / Ctrl+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenInquiry={handleOpenInquiry}
        />
      </div>
    </div>
  );
};

export default App;
