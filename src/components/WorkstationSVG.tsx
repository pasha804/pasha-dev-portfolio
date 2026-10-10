import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Sparkles, Terminal } from 'lucide-react';

export const WorkstationSVG: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full group select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer Neon Glow Aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-glow/30 via-purple-electric/25 to-purple-neon/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 pointer-events-none" />

      {/* Main Interactive Cyber Card Chassis */}
      <motion.div
        animate={{
          rotateX: -mousePos.y * 10,
          rotateY: mousePos.x * 12,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 120 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl overflow-hidden border border-purple-neon/50 bg-[#090514] shadow-[0_0_50px_rgba(168,85,247,0.35)]"
      >
        {/* Top Header Rail with Telemetry HUD */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#120a24]/90 backdrop-blur-md border-b border-purple-900/50 text-[10px] font-orbitron">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
            <span className="font-bold text-white tracking-wider">DEV_WORKSTATION // v4.2</span>
          </div>

          <div className="flex items-center gap-2 text-purple-300 font-mono text-[9px]">
            <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-neon/30 text-purple-neon flex items-center gap-1">
              <Cpu className="w-2.5 h-2.5" />
              <span>OCTANE RIG</span>
            </span>
            <span className="hidden sm:inline-block text-slate-400">LATENCY: 7ms</span>
          </div>
        </div>

        {/* Display Frame: Workstation Image + Vector SVG HUD Layer */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-black flex items-center justify-center">
          {/* Workstation Isometric Graphic */}
          <img
            src="/hero-workstation.jpg"
            alt="Pasha Dev Cybernetic Developer Workstation"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
          />

          {/* Vignette Gradients for High-Depth Integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090514] via-transparent to-transparent opacity-75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090514]/40 via-transparent to-transparent pointer-events-none" />

          {/* SVG HUD Graphics & Telemetry Vector Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 640 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Linear Gradient for HUD laser scanning beam */}
              <linearGradient id="laserBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0" />
                <stop offset="50%" stopColor="#C084FC" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#E879F9" stopOpacity="0" />
              </linearGradient>

              {/* Grid pattern */}
              <pattern id="hudGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(192, 132, 252, 0.08)" strokeWidth="0.8" />
              </pattern>
            </defs>

            {/* Subtle Overlay Grid */}
            <rect width="640" height="400" fill="url(#hudGrid)" />

            {/* Top-Left SVG Target Brackets */}
            <path d="M 24 45 L 24 24 L 45 24" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="24" r="2" fill="#FFFFFF" />

            {/* Top-Right SVG Target Brackets */}
            <path d="M 616 45 L 616 24 L 595 24" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            <circle cx="616" cy="24" r="2" fill="#FFFFFF" />

            {/* Bottom-Left SVG Target Brackets */}
            <path d="M 24 355 L 24 376 L 45 376" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="376" r="2" fill="#FFFFFF" />

            {/* Bottom-Right SVG Target Brackets */}
            <path d="M 616 355 L 616 376 L 595 376" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
            <circle cx="616" cy="376" r="2" fill="#FFFFFF" />

            {/* Central Holographic Aim Reticle / Crosshair */}
            <circle cx="320" cy="200" r="42" stroke="rgba(192, 132, 252, 0.25)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="320" cy="200" r="70" stroke="rgba(217, 70, 239, 0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="310" y1="200" x2="330" y2="200" stroke="#C084FC" strokeWidth="1.2" opacity="0.6" />
            <line x1="320" y1="190" x2="320" y2="210" stroke="#C084FC" strokeWidth="1.2" opacity="0.6" />

            {/* Vector Coordinate HUD Markers */}
            <text x="32" y="55" fill="#E9D5FF" fontSize="9" fontFamily="monospace" opacity="0.75">SYS_LOCK: 33.6844° N</text>
            <text x="32" y="68" fill="#C084FC" fontSize="8" fontFamily="monospace" opacity="0.65">AZIMUTH: 73.0479° E</text>

            <text x="520" y="55" fill="#E9D5FF" fontSize="9" fontFamily="monospace" opacity="0.75">CORE: ONLINE</text>
            <text x="520" y="68" fill="#34D399" fontSize="8" fontFamily="monospace" opacity="0.8">FREQ: 5.20 GHz</text>

            {/* Animated Laser Scanning Beam */}
            <line x1="0" y1="0" x2="640" y2="0" stroke="url(#laserBeam)" strokeWidth="4">
              <animate 
                attributeName="y1" 
                values="20;380;20" 
                dur="6s" 
                repeatCount="indefinite" 
              />
              <animate 
                attributeName="y2" 
                values="20;380;20" 
                dur="6s" 
                repeatCount="indefinite" 
              />
            </line>
          </svg>

          {/* Floating Glassmorphic HUD Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0e0720]/85 border border-purple-neon/40 backdrop-blur-md text-[10px] font-orbitron text-white z-20">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>ARCHITECTURE // ACTIVE</span>
          </div>

          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-purple-950/85 border border-purple-neon/40 backdrop-blur-md text-[9px] font-mono text-purple-neon z-20">
            FULL_STACK_RIG
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070312]/90 border border-purple-neon/50 backdrop-blur-md text-[10px] font-orbitron text-slate-200 z-20">
            <span className="w-2 h-2 rounded-full bg-purple-neon animate-ping" />
            <span className="text-white font-bold">PASHA WORKSTATION</span>
            <span className="text-purple-300 text-[9px] hidden sm:inline">• OCTANE 3D</span>
          </div>

          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 border border-purple-900/60 backdrop-blur-md text-[9px] font-mono text-slate-300 z-20">
            <Sparkles className="w-3 h-3 text-purple-electric" />
            <span>NEON RIG READY</span>
          </div>
        </div>

        {/* Bottom Status Rail */}
        <div className="px-4 py-2 bg-[#0d071a] border-t border-purple-900/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-purple-neon" />
            <span className="text-slate-300">SYSTEM: ONLINE</span>
          </div>
          <span className="text-purple-neon font-semibold tracking-wider">
            RENDER: ISOMETRIC // SVG HUD
          </span>
        </div>
      </motion.div>

      {/* Outer Corner Accents */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-neon pointer-events-none" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-neon pointer-events-none" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-purple-electric pointer-events-none" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-purple-electric pointer-events-none" />
    </div>
  );
};
