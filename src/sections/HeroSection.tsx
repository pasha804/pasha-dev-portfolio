import React, { useState, useEffect } from 'react';
import { ArrowDown, ShieldCheck, Terminal, Zap, Sparkles, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/config';
import { CyberButton } from '../components/CyberButton';
import { WorkstationSVG } from '../components/WorkstationSVG';
import { sound } from '../utils/audio';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenInquiry: (initialCategory?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const [pktTime, setPktTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format in Pakistan Standard Time (PKT, UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setPktTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    sound.playClick();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[660px] lg:min-h-[760px] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden border-b border-purple-900/30">
      
      {/* Volumetric Purple Ambient Glow Atmosphere */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-purple-glow/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[550px] h-[550px] bg-purple-electric/15 rounded-full blur-[190px] pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 cyber-grid opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, High-Tech Specs & Action Hub */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 z-10 text-left"
          >
            
            {/* System Status Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-4 py-1.5 rounded-full bg-[#120D24] border border-purple-neon/50 text-xs font-orbitron font-bold text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              <span className="w-2 h-2 rounded-full bg-purple-neon animate-ping shadow-[0_0_8px_#C084FC]" />
              <span>PASHA DEV // FULL-STACK RUNTIME</span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-white font-black tracking-wide">FROM PKR 3,000</span>
              {pktTime && (
                <>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <span className="text-emerald-400 font-mono text-[11px] hidden sm:inline">PKT {pktTime}</span>
                </>
              )}
            </div>

            {/* Main Headline with Metallic Chrome Purple */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-purple-neon flex items-center gap-2">
                <span>Web</span>
                <span className="text-purple-400">•</span>
                <span>Apps</span>
                <span className="text-purple-400">•</span>
                <span>Stores</span>
                <span className="text-purple-400">•</span>
                <span>Software</span>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-heading font-black tracking-tight text-white leading-[1.12] uppercase">
                Building Digital Products <br className="hidden sm:inline" />
                <span className="text-metallic-purple drop-shadow-[0_0_35px_rgba(217,70,239,0.5)]">
                  That Mean Business.
                </span>
              </h1>
            </div>

            {/* Supporting Subtitle */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed">
              Websites, stores, web apps and software — designed and engineered by Pasha Dev. High-performance software designed for real business growth without agency overhead.
            </p>

            {/* Trust Line & Verification Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-orbitron text-slate-400">
              <div className="flex items-center gap-1.5 text-purple-neon font-bold">
                <ShieldCheck className="w-4 h-4 text-purple-neon" />
                <span>{siteConfig.trustLine}</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-purple-neon" />
                Direct 1-on-1 Engineering
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="text-slate-300">Pakistan & Worldwide</span>
            </div>

            {/* Action Buttons: Exact CyberButton & Secondary Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <CyberButton 
                size="lg" 
                className="w-full sm:w-auto" 
                onClick={() => {
                  sound.playClick();
                  onOpenInquiry();
                }}
              >
                <span>Start a Project</span>
              </CyberButton>

              <button
                onClick={scrollToServices}
                onMouseEnter={() => sound.playHover()}
                className="group relative px-6 py-4 rounded-xl bg-[#0F0D1C] border border-purple-500/50 hover:border-purple-neon hover:bg-purple-950/40 text-slate-200 font-orbitron text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]"
              >
                <span>View Services</span>
                <ArrowDown className="w-4 h-4 text-purple-neon group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* 4 Feature Badges (Matching Reference Pic 1 Bottom Strip) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl font-orbitron text-[11px]">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0e0a1f]/80 border border-purple-900/40 text-slate-200 hover:border-purple-neon/40 transition-colors">
                <Terminal className="w-3.5 h-3.5 text-purple-neon shrink-0" />
                <span className="font-semibold truncate">Modern Stack</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0e0a1f]/80 border border-purple-900/40 text-slate-200 hover:border-purple-electric/40 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-purple-electric shrink-0" />
                <span className="font-semibold truncate">Clean Design</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0e0a1f]/80 border border-purple-900/40 text-slate-200 hover:border-purple-neon/40 transition-colors">
                <MessageSquare className="w-3.5 h-3.5 text-purple-neon shrink-0" />
                <span className="font-semibold truncate">Direct Talk</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0e0a1f]/80 border border-purple-900/40 text-slate-200 hover:border-emerald-500/40 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-semibold truncate">Fair Pricing</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Holographic Developer Workstation with SVG HUD Overlays */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <WorkstationSVG />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
