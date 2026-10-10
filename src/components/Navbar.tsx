import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';
import { siteConfig } from '../data/config';
import { CyberButton } from './CyberButton';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenInquiry: (initialCategory?: string) => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      {/* Laser Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-purple-neon via-purple-electric to-purple-neon shadow-[0_0_12px_#C084FC] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Full blur backdrop */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05050A]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_30px_rgba(5,5,10,0.8)]'
          : 'bg-gradient-to-b from-[#05050A]/60 to-transparent backdrop-blur-md'
      }`} />

      {/* Top neon scan-line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-neon/40 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 w-full">

          {/* ── LOGO ─────────────────────────────────────────────── */}
          <a
            href="#"
            onClick={() => sound.playClick()}
            className="flex items-center gap-3 group focus:outline-none select-none shrink-0"
            aria-label="Pasha Dev Home"
          >
            {/* Crowned Metallic P Logo Badge */}
            <div className="relative">
              <div
                className="w-10 h-10 flex items-center justify-center
                  bg-gradient-to-br from-[#2D1B5A] to-[#0A0518]
                  border border-purple-neon/50
                  shadow-[0_0_20px_rgba(192,132,252,0.4),inset_0_0_10px_rgba(168,85,247,0.3)]
                  group-hover:shadow-[0_0_30px_rgba(217,70,239,0.7),inset_0_0_15px_rgba(192,132,252,0.5)]
                  group-hover:border-purple-electric
                  transition-all duration-500 rounded-xl overflow-hidden p-0.5"
              >
                <img 
                  src="/pasha-emblem.png" 
                  alt="Pasha Dev Crowned Emblem" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              {/* Live indicator dot */}
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#05050A] shadow-[0_0_10px_#34D399] animate-pulse" />
            </div>

            {/* Text block */}
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-black text-lg tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                {siteConfig.brandName}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Zap className="w-3 h-3 text-purple-neon" />
                <span className="text-[9px] font-mono tracking-[0.18em] text-purple-300 uppercase font-bold">
                  AI Full Stack Dev
                </span>
              </div>
            </div>
          </a>

          {/* ── DESKTOP NAV ──────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center shrink-0">
            {/* Elegant glassmorphic pill */}
            <div className="flex items-center gap-1 bg-[#0A0B14]/80 backdrop-blur-md border border-purple-900/40 rounded-full px-2 py-1.5 shadow-[inset_0_0_20px_rgba(168,85,247,0.1),0_4px_15px_rgba(0,0,0,0.5)]">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`relative px-4 py-1.5 text-xs font-orbitron font-bold tracking-widest uppercase rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-purple-900/50 shadow-[inset_0_0_15px_rgba(192,132,252,0.3)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-purple-neon shadow-[0_0_8px_#C084FC]" />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* ── RIGHT ACTIONS ─────────────────────────────────────── */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
            
            {/* WhatsApp Premium CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl
                bg-gradient-to-r from-[#0a2018] to-[#05100c] border border-[#25D366]/50
                hover:border-[#25D366] hover:from-[#0c2a20] hover:to-[#081812]
                text-[#25D366] hover:text-white
                shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]
                transition-all duration-300 text-xs font-orbitron font-bold tracking-widest shrink-0"
            >
              <span className="relative flex items-center">
                <svg
                  className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 175.2 175.2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="87.6" cy="87.6" r="87.6" fill="#25D366"/>
                  <path
                    d="M122.4 53.1c-9.1-9.1-21.2-14.1-34.1-14.1-26.6 0-48.2 21.6-48.2 48.2 0 8.5 2.2 16.8 6.4 24.1L40 135.2l24.5-6.4c7 3.8 14.9 5.8 22.9 5.8h0c26.6 0 48.2-21.6 48.2-48.2 0-12.9-5-25-14.2-34.3zm-34.1 74.1c-7.2 0-14.3-1.9-20.4-5.6l-1.5-.9-15.3 4 4.1-15-1-1.5c-4.1-6.4-6.2-13.8-6.2-21.4 0-22.2 18.1-40.2 40.3-40.2 10.8 0 20.9 4.2 28.5 11.8 7.6 7.6 11.7 17.7 11.7 28.5.1 22.2-18 40.3-40.2 40.3zm22.1-30.1c-1.2-.6-7.1-3.5-8.2-3.9-1.1-.4-1.9-.6-2.7.6-.8 1.2-3.1 3.9-3.8 4.7-.7.8-1.4.9-2.6.3-1.2-.6-5-1.8-9.5-5.9-3.5-3.1-5.9-7-6.6-8.2-.7-1.2-.1-1.8.5-2.4.6-.6 1.2-1.4 1.8-2.1.6-.7.8-1.2 1.2-2 .4-.8.2-1.5-.1-2.1-.3-.6-2.7-6.5-3.7-8.9-1-2.3-2-2-2.7-2-.7 0-1.5-.1-2.3-.1-.8 0-2.1.3-3.2 1.5-1.1 1.2-4.2 4.1-4.2 10s4.3 11.6 4.9 12.4c.6.8 8.5 13 20.6 18.2 2.9 1.2 5.1 2 6.9 2.5 2.9.9 5.5.8 7.6.5 2.3-.3 7.1-2.9 8.1-5.7 1-2.8 1-5.2.7-5.7-.3-.4-1.1-.7-2.3-1.3z"
                    fill="#fff"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#25D366] animate-ping opacity-80" />
              </span>
              <span>Connect</span>
            </a>

            {/* Start Project CTA */}
            <CyberButton 
              size="md" 
              onClick={() => {
                sound.playClick();
                onOpenInquiry();
              }}
            >
              <span className="tracking-widest">START PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </CyberButton>
          </div>

          {/* ── MOBILE ACTIONS (Hamburger Only) ─────────────────── */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-xl
                bg-[#0F0D1E] border border-purple-500/60
                text-purple-neon hover:text-white hover:border-purple-neon
                shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(192,132,252,0.6)]
                transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE DRAWER ──────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative border-t border-purple-500/30 bg-[#06070E]/95 backdrop-blur-3xl shadow-2xl">
          {/* Inner glow strip */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-neon/50 to-transparent" />

          <div className="max-w-7xl mx-auto px-5 py-6 space-y-6">

            {/* Nav grid */}
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex flex-col items-center justify-center gap-1.5 py-4 px-3 rounded-2xl
                    bg-gradient-to-b from-[#151126] to-[#0D0F1E] border border-purple-900/50
                    text-xs font-orbitron font-bold uppercase tracking-widest
                    text-slate-300 hover:text-white hover:border-purple-neon
                    hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all duration-300"
                >
                  <span className="text-purple-electric/60 text-[10px] font-mono">//</span>
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <CyberButton
                size="lg"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
              >
                <span className="tracking-widest">START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5 ml-1" />
              </CyberButton>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0a2018] to-[#071712] border border-[#25D366]/50
                  text-[#25D366] font-orbitron text-sm font-bold text-center tracking-widest
                  flex items-center justify-center gap-3
                  shadow-[0_0_20px_rgba(37,211,102,0.2)]
                  hover:border-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]
                  transition-all duration-300 hover:text-white"
              >
                <span>CONNECT ON WHATSAPP</span>
              </a>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between text-[10px] font-mono text-purple-300/50 uppercase tracking-widest pt-4 border-t border-purple-900/30">
              <span>SYS_ONLINE // PASHA_DEV</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-neon animate-pulse" />
                <span className="text-purple-400">READY</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
