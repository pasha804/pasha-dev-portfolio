import React from 'react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  onClick,
  href,
  type = 'button',
  className = '',
  size = 'md',
  fullWidth = false,
}) => {
  const sizeConfig = {
    sm: {
      height: 'h-[44px]',
      padding: 'px-6',
      fontSize: 'text-[11px] sm:text-xs',
      minWidth: 'min-w-[160px]',
    },
    md: {
      height: 'h-[54px]',
      padding: 'px-8',
      fontSize: 'text-xs sm:text-sm',
      minWidth: 'min-w-[200px]',
    },
    lg: {
      height: 'h-[64px]',
      padding: 'px-10',
      fontSize: 'text-sm sm:text-base',
      minWidth: 'min-w-[240px]',
    },
  }[size];

  const content = (
    <div
      className={`relative group inline-flex items-center justify-center select-none cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
        sizeConfig.height
      } ${fullWidth ? 'w-full' : sizeConfig.minWidth} max-w-full ${className}`}
    >
      {/* Outer Glow Halo on Hover */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-neon via-purple-electric to-purple-neon rounded-lg opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 -z-10" />

      {/* Main Container with specific Cyber shape */}
      <div 
        className="relative w-full h-full bg-[#0b0416] flex items-center justify-center overflow-visible"
        style={{
          clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)',
          boxShadow: 'inset 0 0 20px rgba(168,85,247,0.2)'
        }}
      >
        {/* Core Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-electric/30 via-purple-900/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Inner glow lines to simulate the double border */}
        <div 
          className="absolute inset-[2px] border border-purple-neon/30 pointer-events-none"
          style={{
            clipPath: 'polygon(14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px), 0 14px)',
          }}
        />

        {/* Text Content */}
        <div className={`relative z-10 flex items-center justify-center gap-2 font-orbitron font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all ${sizeConfig.fontSize} ${sizeConfig.padding}`}>
          {children}
          {/* Animated Hover Arrow */}
          <span className="inline-flex overflow-hidden relative w-0 group-hover:w-4 transition-all duration-300 -mr-2 group-hover:mr-0 opacity-0 group-hover:opacity-100 items-center justify-center">
            <span className="absolute -translate-x-full group-hover:translate-x-0 transition-transform duration-300 delay-75 text-purple-neon">
              →
            </span>
          </span>
        </div>
      </div>

      {/* ── EXTERNAL SVG OVERLAYS FOR EXACT BORDER MATCHING ── */}
      {/* 
        Instead of one stretching SVG, we use absolute positioned SVGs for the corners and edges 
        to maintain perfect 45-degree angles and stroke widths regardless of button width.
      */}

      {/* Top Left Corner */}
      <svg className="absolute top-0 left-0 w-8 h-8 pointer-events-none overflow-visible" viewBox="0 0 32 32">
        {/* Main outline */}
        <path d="M 0 15 L 15 0 L 32 0" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
        {/* Glowing Thick Slanted Bar */}
        <line x1="2" y1="17" x2="17" y2="2" stroke="#FFFFFF" strokeWidth="2.5" className="filter drop-shadow-[0_0_8px_#D946EF]" />
        {/* Dot on glowing bar */}
        <circle cx="2" cy="17" r="1.5" fill="#FFFFFF" className="filter drop-shadow-[0_0_4px_#FFFFFF]" />
      </svg>

      {/* Top Right Corner */}
      <svg className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-visible" viewBox="0 0 32 32">
        <path d="M 0 0 L 17 0 L 32 15" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
        <line x1="24" y1="2" x2="28" y2="2" stroke="#C084FC" strokeWidth="1.5" />
        <line x1="26" y1="0" x2="26" y2="4" stroke="#C084FC" strokeWidth="1.5" />
      </svg>

      {/* Bottom Right Corner */}
      <svg className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-visible" viewBox="0 0 32 32">
        {/* Main outline */}
        <path d="M 32 17 L 17 32 L 0 32" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
        {/* Glowing Thick Slanted Bar */}
        <line x1="30" y1="15" x2="15" y2="30" stroke="#FFFFFF" strokeWidth="2.5" className="filter drop-shadow-[0_0_8px_#D946EF]" />
        {/* Dot on glowing bar */}
        <circle cx="30" cy="15" r="1.5" fill="#FFFFFF" className="filter drop-shadow-[0_0_4px_#FFFFFF]" />
      </svg>

      {/* Bottom Left Corner */}
      <svg className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none overflow-visible" viewBox="0 0 32 32">
        <path d="M 32 32 L 15 32 L 0 17" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
        {/* Decorative notch */}
        <rect x="4" y="26" width="6" height="2" transform="rotate(-45 4 26)" fill="#D946EF" className="drop-shadow-[0_0_4px_#D946EF]" />
      </svg>

      {/* Top Edge */}
      <div className="absolute top-0 left-8 right-8 h-px bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Top Center Glowing Bar */}
      <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-16 h-[2.5px] bg-white shadow-[0_0_8px_#D946EF] rounded-full flex items-center justify-between px-[-4px]">
        <div className="absolute -left-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_#FFFFFF]" />
        <div className="absolute -right-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_#FFFFFF]" />
      </div>

      {/* Bottom Edge */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Bottom Center Glowing Bar */}
      <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-16 h-[2.5px] bg-white shadow-[0_0_8px_#D946EF] rounded-full flex items-center justify-between px-[-4px]">
        <div className="absolute -left-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_#FFFFFF]" />
        <div className="absolute -right-1 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_#FFFFFF]" />
      </div>

      {/* Left Edge */}
      <div className="absolute top-8 bottom-8 left-0 w-px bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Left Edge Hashes */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 -translate-x-1/2">
        <div className="w-2.5 h-[1.5px] bg-purple-neon rotate-[-45deg] shadow-[0_0_4px_#C084FC]" />
        <div className="w-2.5 h-[1.5px] bg-purple-neon rotate-[-45deg] shadow-[0_0_4px_#C084FC]" />
        <div className="w-2.5 h-[1.5px] bg-purple-neon rotate-[-45deg] shadow-[0_0_4px_#C084FC]" />
      </div>

      {/* Right Edge */}
      <div className="absolute top-8 bottom-8 right-0 w-px bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Right Edge Hashes */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 translate-x-1/2">
        <div className="w-2.5 h-[1.5px] bg-purple-neon rotate-[-45deg] shadow-[0_0_4px_#C084FC]" />
        <div className="w-2.5 h-[1.5px] bg-purple-neon rotate-[-45deg] shadow-[0_0_4px_#C084FC]" />
        <div className="w-2.5 h-[1.5px] bg-purple-neon rotate-[-45deg] shadow-[0_0_4px_#C084FC]" />
      </div>

      {/* Mini Text Decals */}
      {size !== 'sm' && (
        <>
          <div className="absolute top-1 right-2 text-[6px] font-mono text-purple-300/80 tracking-widest pointer-events-none">
            01 SYSTEM_ON
          </div>
          <div className="absolute bottom-1 left-3 text-[6px] font-mono text-purple-300/80 tracking-widest pointer-events-none flex items-center gap-1">
            <span>SYSTEM_ON 01</span>
            <span className="text-purple-neon">///</span>
          </div>
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block focus:outline-none">
      {content}
    </button>
  );
};
