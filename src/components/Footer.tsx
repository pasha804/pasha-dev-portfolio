import React from 'react';
import { siteConfig } from '../data/config';
import { ArrowUp, Github, Linkedin, ShieldCheck, Mail, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navGroups = [
    {
      title: 'Navigation',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Pricing Menu', href: '#pricing' },
        { label: 'Hosting Guide', href: '#hosting-guide' },
        { label: 'Quote Estimator', href: '#calculator' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Process', href: '#process' },
        { label: 'Featured Work', href: '#work' },
        { label: 'About Developer', href: '#about' },
        { label: 'FAQs', href: '#faq' },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#030306] overflow-hidden">

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-neon/50 to-transparent shadow-[0_0_20px_#C084FC]" />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-purple-glow/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-48 bg-purple-electric/6 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── MAIN FOOTER GRID ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">

          {/* Brand block */}
          <div className="lg:col-span-5 space-y-5">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-[#2D1B5A] to-[#0A0518]
                  border border-purple-neon/60
                  shadow-[0_0_15px_rgba(192,132,252,0.4)]
                  group-hover:shadow-[0_0_25px_rgba(217,70,239,0.7)]
                  group-hover:border-purple-electric
                  transition-all duration-300 overflow-hidden p-0.5"
              >
                <img 
                  src="/pasha-emblem.png" 
                  alt="Pasha Dev Crowned Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-black text-xl text-white group-hover:text-purple-neon transition-colors duration-300">
                  {siteConfig.brandName}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Zap className="w-2.5 h-2.5 text-purple-neon" />
                  <span className="text-[8.5px] font-mono tracking-[0.18em] text-purple-300/70 uppercase font-semibold">
                    AI Full Stack Developer
                  </span>
                </div>
              </div>
            </a>

            {/* Description */}
            <p className="text-sm text-slate-400 font-sans max-w-sm leading-relaxed">
              Building useful digital products with code and design. High-performance websites, online stores, web applications, and desktop software — crafted in Pakistan.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
              bg-[#0D0B1A] border border-purple-900/50
              shadow-[inset_0_0_12px_rgba(168,85,247,0.08)]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-neon" />
              <span className="text-xs font-orbitron font-bold text-purple-300/80 tracking-wide">
                Engineered in Pakistan · Serving Worldwide
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl
                  bg-[#0F0D1E] border border-purple-900/40
                  hover:border-purple-neon/50 hover:bg-purple-950/30
                  text-slate-400 hover:text-purple-neon
                  text-[10px] font-orbitron font-bold tracking-wider uppercase
                  transition-all duration-200"
              >
                <span>TikTok</span>
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#0F0D1E] border border-purple-900/40
                  hover:border-purple-neon/50 hover:bg-purple-950/30
                  text-slate-400 hover:text-purple-neon
                  transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#0F0D1E] border border-purple-900/40
                  hover:border-purple-neon/50 hover:bg-purple-950/30
                  text-slate-400 hover:text-purple-neon
                  transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav link groups */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {navGroups.map((group) => (
              <div key={group.title}>
                <div className="text-[10px] font-orbitron font-black uppercase tracking-[0.2em] text-purple-neon mb-4 flex items-center gap-1.5">
                  <span className="w-4 h-px bg-purple-neon/60" />
                  {group.title}
                </div>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-1.5 text-xs font-sans text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-purple-neon transition-all duration-200 overflow-hidden" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Direct channels */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[10px] font-orbitron font-black uppercase tracking-[0.2em] text-purple-neon mb-4 flex items-center gap-1.5">
              <span className="w-4 h-px bg-purple-neon/60" />
              Direct Channels
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-xl
                bg-[#071712] border border-[#25D366]/30
                hover:border-[#25D366]/60 hover:bg-[#0c2018]
                shadow-[0_0_12px_rgba(37,211,102,0.1)]
                hover:shadow-[0_0_20px_rgba(37,211,102,0.25)]
                transition-all duration-300"
            >
              <svg viewBox="0 0 175.2 175.2" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 shrink-0 group-hover:scale-110 transition-transform duration-200">
                <circle cx="87.6" cy="87.6" r="87.6" fill="#25D366" />
                <path
                  d="M122.4 53.1c-9.1-9.1-21.2-14.1-34.1-14.1-26.6 0-48.2 21.6-48.2 48.2 0 8.5 2.2 16.8 6.4 24.1L40 135.2l24.5-6.4c7 3.8 14.9 5.8 22.9 5.8h0c26.6 0 48.2-21.6 48.2-48.2 0-12.9-5-25-14.2-34.3zm-34.1 74.1c-7.2 0-14.3-1.9-20.4-5.6l-1.5-.9-15.3 4 4.1-15-1-1.5c-4.1-6.4-6.2-13.8-6.2-21.4 0-22.2 18.1-40.2 40.3-40.2 10.8 0 20.9 4.2 28.5 11.8 7.6 7.6 11.7 17.7 11.7 28.5.1 22.2-18 40.3-40.2 40.3zm22.1-30.1c-1.2-.6-7.1-3.5-8.2-3.9-1.1-.4-1.9-.6-2.7.6-.8 1.2-3.1 3.9-3.8 4.7-.7.8-1.4.9-2.6.3-1.2-.6-5-1.8-9.5-5.9-3.5-3.1-5.9-7-6.6-8.2-.7-1.2-.1-1.8.5-2.4.6-.6 1.2-1.4 1.8-2.1.6-.7.8-1.2 1.2-2 .4-.8.2-1.5-.1-2.1-.3-.6-2.7-6.5-3.7-8.9-1-2.3-2-2-2.7-2-.7 0-1.5-.1-2.3-.1-.8 0-2.1.3-3.2 1.5-1.1 1.2-4.2 4.1-4.2 10s4.3 11.6 4.9 12.4c.6.8 8.5 13 20.6 18.2 2.9 1.2 5.1 2 6.9 2.5 2.9.9 5.5.8 7.6.5 2.3-.3 7.1-2.9 8.1-5.7 1-2.8 1-5.2.7-5.7-.3-.4-1.1-.7-2.3-1.3z"
                  fill="#fff"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-orbitron font-bold text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp
                </span>
                <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                  {siteConfig.whatsappDisplay}
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-3 p-3 rounded-xl
                bg-[#0D0B1A] border border-purple-900/40
                hover:border-purple-neon/50 hover:bg-purple-950/20
                shadow-[0_0_10px_rgba(168,85,247,0.08)]
                hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]
                transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg bg-purple-glow/20 border border-purple-glow/30 flex items-center justify-center shrink-0 group-hover:border-purple-neon/50 transition-all">
                <Mail className="w-3.5 h-3.5 text-purple-neon" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-orbitron font-bold text-white group-hover:text-purple-neon transition-colors">
                  Email
                </span>
                <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                  {siteConfig.email}
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* ── BOTTOM BAR ────────────────────────────────────────── */}
        <div className="pt-6 border-t border-purple-950/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            {/* Left: copyright */}
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-600">
              <span className="text-purple-neon/40 font-bold">▸</span>
              <span>© 2026 {siteConfig.brandName}. All rights reserved.</span>
              <span className="hidden sm:inline text-purple-neon/30">|</span>
              <span className="hidden sm:inline">Built with Python & React</span>
            </div>

            {/* Center: HUD tag */}
            <div className="text-[9px] font-mono text-purple-300/30 tracking-widest uppercase hidden md:block">
              PASHA_DEV // SYS_V2.0 // FULL_STACK
            </div>

            {/* Right: back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl
                bg-[#0F0D1E] border border-purple-900/40
                hover:border-purple-neon/50 hover:bg-purple-950/30
                text-slate-500 hover:text-purple-neon
                text-[10px] font-orbitron font-bold uppercase tracking-wider
                transition-all duration-200 focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
};
