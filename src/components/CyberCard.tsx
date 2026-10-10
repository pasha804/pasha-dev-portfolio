import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  badge?: string;
  telemetryTag?: string;
  isPopular?: boolean;
}

export const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  contentClassName,
  badge,
  telemetryTag = 'SYSTEM_ON 01',
  isPopular = false,
}) => {
  return (
    <div
      className={`relative group transition-all duration-300 w-full ${
        isPopular
          ? 'shadow-[0_0_40px_rgba(168,85,247,0.25)] -translate-y-1'
          : 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-0.5'
      } ${className}`}
    >
      {/* Outer Glow Halo on Hover */}
      <div className="absolute -inset-2 bg-gradient-to-br from-purple-neon via-purple-electric to-purple-neon rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

      {/* Popular / Feature Pill Badge if applicable */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1A0B2E] border border-purple-neon text-white font-orbitron text-[9px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(192,132,252,0.8)] z-30 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-neon animate-ping" />
          <span className="relative z-10">{badge}</span>
        </div>
      )}

      {/* Main Container with specific Cyber shape */}
      <div 
        className="relative w-full h-full bg-[#080510] flex flex-col justify-between overflow-visible"
        style={{
          clipPath: 'polygon(46px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 46px), calc(100% - 46px) 100%, 24px 100%, 0 calc(100% - 24px), 0 46px)',
          boxShadow: 'inset 0 0 40px rgba(168,85,247,0.15)'
        }}
      >
        {/* Core Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-neon/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Inner glow lines to simulate the double border profile */}
        <div 
          className="absolute inset-[3px] border border-purple-neon/20 group-hover:border-purple-neon/40 pointer-events-none transition-colors duration-300"
          style={{
            clipPath: 'polygon(44px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 44px), calc(100% - 44px) 100%, 22px 100%, 0 calc(100% - 22px), 0 44px)',
          }}
        />

        {/* Real Content Wrapped Inside */}
        <div className={`relative z-10 w-full h-full flex flex-col justify-between ${contentClassName || 'p-5 sm:p-6 lg:p-7'}`}>
          {children}
        </div>
      </div>

      {/* ── EXTERNAL SVG OVERLAYS FOR EXACT BORDER MATCHING ── */}
      {/* 
        Instead of a single stretching SVG path, we use absolutely positioned corner elements
        to maintain correct 45-degree angles and stroke weights regardless of card dimensions.
      */}

      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 w-[60px] h-[60px] pointer-events-none z-20 overflow-visible">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 60 60">
          {/* Main outline matching the clip-path corner */}
          <path d="M 0 46 L 46 0 L 60 0" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
          
          {/* Metallic Armor Plate filling the corner */}
          <path d="M 4 42 L 42 4 L 60 4 L 46 18 L 18 46 Z" fill="#1E1038" stroke="#C084FC" strokeWidth="1" opacity="0.95" />
          
          {/* Glowing Thick Slanted Bar */}
          <line x1="6" y1="40" x2="40" y2="6" stroke="#FFFFFF" strokeWidth="2.5" className="filter drop-shadow-[0_0_8px_#D946EF]" />
          <circle cx="6" cy="40" r="1.5" fill="#FFFFFF" className="filter drop-shadow-[0_0_4px_#FFFFFF]" />
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 w-[40px] h-[40px] pointer-events-none z-20 overflow-visible">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 40 40">
          <path d="M 0 0 L 16 0 L 40 24" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
          {/* Decorative notches */}
          <line x1="28" y1="2" x2="34" y2="2" stroke="#C084FC" strokeWidth="1.5" />
          <line x1="32" y1="-2" x2="32" y2="6" stroke="#C084FC" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 w-[60px] h-[60px] pointer-events-none z-20 overflow-visible">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 60 60">
          {/* Main outline matching the clip-path corner */}
          <path d="M 60 14 L 14 60 L 0 60" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" />
          
          {/* Metallic Armor Plate filling the corner */}
          <path d="M 56 18 L 18 56 L 0 56 L 14 42 L 42 14 Z" fill="#1E1038" stroke="#C084FC" strokeWidth="1" opacity="0.95" />
          
          {/* Glowing Thick Slanted Bar */}
          <line x1="54" y1="20" x2="20" y2="54" stroke="#FFFFFF" strokeWidth="2.5" className="filter drop-shadow-[0_0_8px_#D946EF]" />
          <circle cx="54" cy="20" r="1.5" fill="#FFFFFF" className="filter drop-shadow-[0_0_4px_#FFFFFF]" />
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 w-[40px] h-[40px] pointer-events-none z-20 overflow-visible">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 40 40">
          <path d="M 40 60 L 24 60 L 0 36" fill="none" stroke="#C084FC" strokeWidth="1.5" className="drop-shadow-[0_0_4px_#C084FC]" transform="translate(0, -20)" />
          {/* Decorative pill */}
          <rect x="6" y="28" width="8" height="2.5" rx="1" transform="rotate(-45 6 28)" fill="#D946EF" className="drop-shadow-[0_0_4px_#D946EF]" />
        </svg>
      </div>

      {/* Top Edge Line */}
      <div className="absolute top-0 left-[60px] right-[40px] h-[1.5px] bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Top Center Glowing Bar */}
      <div className="absolute top-[-1.5px] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[3px] bg-white shadow-[0_0_10px_#D946EF] rounded-full flex items-center justify-between px-[-5px]">
        <div className="absolute -left-1.5 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_#FFFFFF]" />
        <div className="absolute -right-1.5 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_#FFFFFF]" />
      </div>

      {/* Bottom Edge Line */}
      <div className="absolute bottom-0 left-[40px] right-[60px] h-[1.5px] bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Bottom Center Glowing Bar */}
      <div className="absolute bottom-[-1.5px] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-[3px] bg-white shadow-[0_0_10px_#D946EF] rounded-full flex items-center justify-between px-[-5px]">
        <div className="absolute -left-1.5 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_#FFFFFF]" />
        <div className="absolute -right-1.5 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_#FFFFFF]" />
      </div>

      {/* Left Edge Line */}
      <div className="absolute top-[46px] bottom-[24px] left-0 w-[1.5px] bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Left Vertical HUD Label: "01-SECURE" + Vents */}
      <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 pointer-events-none select-none z-20">
        <div className="flex flex-col gap-1.5 opacity-80">
          <span className="w-3 h-[1.5px] bg-purple-neon rotate-[-30deg] shadow-[0_0_4px_#C084FC]" />
          <span className="w-3 h-[1.5px] bg-purple-neon rotate-[-30deg] shadow-[0_0_4px_#C084FC]" />
          <span className="w-3 h-[1.5px] bg-purple-neon rotate-[-30deg] shadow-[0_0_4px_#C084FC]" />
        </div>
        <span className="-rotate-90 origin-center text-[8px] font-mono tracking-[0.3em] text-purple-200/90 uppercase whitespace-nowrap mt-10">
          01-SECURE
        </span>
      </div>

      {/* Right Edge Line */}
      <div className="absolute top-[24px] bottom-[46px] right-0 w-[1.5px] bg-[#C084FC] shadow-[0_0_4px_#C084FC]" />
      {/* Right Vertical HUD Label: "TELEMETRY" + Vents */}
      <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 pointer-events-none select-none z-20">
        <span className="rotate-90 origin-center text-[8px] font-mono tracking-[0.3em] text-purple-200/90 uppercase whitespace-nowrap mb-10">
          TELEMETRY
        </span>
        <div className="flex flex-col gap-1.5 opacity-80">
          <span className="w-3 h-[1.5px] bg-purple-neon rotate-[-30deg] shadow-[0_0_4px_#C084FC]" />
          <span className="w-3 h-[1.5px] bg-purple-neon rotate-[-30deg] shadow-[0_0_4px_#C084FC]" />
          <span className="w-3 h-[1.5px] bg-purple-neon rotate-[-30deg] shadow-[0_0_4px_#C084FC]" />
        </div>
      </div>

      {/* Top-Right HUD Telemetry Tag */}
      <div className="absolute top-2.5 right-8 flex items-center gap-1.5 text-[9px] font-mono tracking-tight text-purple-200/80 pointer-events-none z-20">
        <span className="font-bold text-purple-100">01</span>
        <span>SYSTEM_ON</span>
        <span className="text-purple-neon font-black text-xs">+</span>
      </div>

      {/* Audio / Signal Equalizer Bars (Bottom Center-ish) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-end gap-1 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
        <span className="w-[1.5px] h-1.5 bg-purple-neon shadow-[0_0_4px_#C084FC]" />
        <span className="w-[1.5px] h-3 bg-purple-neon shadow-[0_0_4px_#C084FC]" />
        <span className="w-[1.5px] h-4.5 bg-purple-electric shadow-[0_0_4px_#D946EF]" />
        <span className="w-[1.5px] h-2.5 bg-purple-neon shadow-[0_0_4px_#C084FC]" />
        <span className="w-[1.5px] h-6 bg-white shadow-[0_0_6px_#fff]" />
        <span className="w-[1.5px] h-3 bg-purple-neon shadow-[0_0_4px_#C084FC]" />
        <span className="w-[1.5px] h-1.5 bg-purple-neon shadow-[0_0_4px_#C084FC]" />
        <span className="w-[1.5px] h-4 bg-purple-electric shadow-[0_0_4px_#D946EF]" />
        <span className="w-[1.5px] h-2 bg-purple-neon shadow-[0_0_4px_#C084FC]" />
      </div>

      {/* Bottom-Left Tech Tag */}
      <div className="absolute bottom-2.5 left-10 flex items-center gap-2 text-[8px] font-mono text-purple-200/80 pointer-events-none z-20">
        <span className="w-3 h-1.5 rounded-full bg-purple-neon shadow-[0_0_6px_#C084FC] -rotate-45" />
        <span>{telemetryTag}</span>
        <span className="text-purple-neon font-black">///</span>
      </div>
    </div>
  );
};
