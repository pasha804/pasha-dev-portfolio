import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/config';
import { CyberButton } from '../components/CyberButton';
import { motion } from 'framer-motion';

interface FinalCTASectionProps {
  onOpenInquiry: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenInquiry }) => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-b border-purple-900/30">
      
      {/* Cinematic Cosmic Planet Background (Inspired by Pic 2 Bottom) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/cta-cosmic.jpg"
          alt="Cosmic Horizon Developer Vista"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/80 to-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-transparent to-[#050508]" />
      </div>

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Volumetric Center Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-glow/25 via-purple-electric/20 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10"
      >
        
        {/* System Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#150F26]/90 border border-purple-glow/50 text-purple-neon text-xs font-orbitron font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.35)] backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
          <span>SYS_READY // INITIATE SYSTEM</span>
        </div>

        {/* Heading (Matching Reference Pic 2 Bottom) */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white tracking-tight uppercase leading-[1.08]">
          Got an idea? <br />
          <span className="text-metallic-purple drop-shadow-[0_0_35px_rgba(217,70,239,0.5)]">
            Let's build it.
          </span>
        </h2>

        {/* Subtitle (Matching Reference Pic 2 Bottom) */}
        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          Tell me what you're trying to build, what you need it to do, and your approximate budget. You'll get a direct, honest breakdown within hours.
        </p>

        {/* Action Buttons Hub */}
        <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
          {/* Primary CyberButton */}
          <CyberButton size="lg" onClick={onOpenInquiry}>
            <span>Start a Project</span>
          </CyberButton>

          {/* Secondary View Pricing Button */}
          <button
            onClick={scrollToPricing}
            className="px-7 py-4 rounded-xl bg-[#0F0D1C]/90 border border-purple-500/50 hover:border-purple-neon hover:bg-purple-950/40 text-white font-orbitron text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center gap-2 backdrop-blur-md"
          >
            <span>View Pricing</span>
            <ArrowRight className="w-4 h-4 text-purple-neon" />
          </button>

          {/* Official WhatsApp Button with Glowing Indicator */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#071710]/90 border border-emerald-500/60 hover:border-emerald-400 text-emerald-400 hover:text-white font-orbitron text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-md"
          >
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.35C9.33 7.35 9.14 7.35 8.97 7.36C8.77 7.37 8.5 7.45 8.27 7.7C8.04 7.95 7.39 8.56 7.39 9.81C7.39 11.06 8.3 12.28 8.43 12.45C8.56 12.62 10.22 15.18 12.76 16.28C14.87 17.19 15.3 17.01 15.76 16.97C16.22 16.93 17.24 16.36 17.45 15.78C17.66 15.2 17.66 14.7 17.6 14.6C17.54 14.5 17.37 14.44 17.12 14.32C16.87 14.2 15.65 13.6 15.42 13.52C15.19 13.44 15.03 13.4 14.86 13.65C14.7 13.9 14.23 14.5 14.09 14.66C13.95 14.83 13.8 14.85 13.55 14.72C13.3 14.6 12.5 14.34 11.55 13.49C10.81 12.83 10.31 12.01 10.17 11.76C10.03 11.51 10.15 11.38 10.28 11.25C10.39 11.14 10.53 10.96 10.66 10.81C10.79 10.66 10.83 10.56 10.91 10.39C10.99 10.22 10.95 10.08 10.89 9.96C10.83 9.83 10.36 8.68 10.16 8.21C9.97 7.74 9.77 7.81 9.63 7.81C9.5 7.8 9.33 7.8 9.17 7.8" />
            </svg>
            <span>Direct WhatsApp</span>
          </a>
        </div>

        <div className="pt-6 text-xs font-mono text-purple-300/60 font-semibold tracking-wider">
          PASHA DEV // RATES FROM PKR 3,000 • PAKISTAN & WORLDWIDE
        </div>

      </motion.div>
    </section>
  );
};
