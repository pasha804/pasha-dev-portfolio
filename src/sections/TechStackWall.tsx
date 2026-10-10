import React from 'react';
import { Code2, Server, Database, Wrench, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechnologyItem {
  name: string;
  tag: string;
  color: string;
  bgGlow: string;
}

interface TechCategory {
  title: string;
  layerTag: string;
  latency: string;
  icon: React.ReactNode;
  technologies: TechnologyItem[];
}

export const TechStackWall: React.FC = () => {
  const categories: TechCategory[] = [
    {
      title: 'Frontend & UI Engineering',
      layerTag: 'LAYER_01 // CLIENT_CORE',
      latency: '2ms',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      technologies: [
        { name: 'React', tag: 'UI Library', color: '#00D8FE', bgGlow: 'rgba(0, 216, 254, 0.15)' },
        { name: 'TypeScript', tag: 'Strict Typing', color: '#3178C6', bgGlow: 'rgba(49, 120, 198, 0.15)' },
        { name: 'Tailwind CSS', tag: 'Modern Styling', color: '#38BDF8', bgGlow: 'rgba(56, 189, 248, 0.15)' },
        { name: 'Next.js', tag: 'SSR / Edge', color: '#FFFFFF', bgGlow: 'rgba(255, 255, 255, 0.15)' },
        { name: 'Framer Motion', tag: '60FPS Animation', color: '#EC4899', bgGlow: 'rgba(236, 72, 153, 0.15)' },
      ],
    },
    {
      title: 'Backend & High-Speed APIs',
      layerTag: 'LAYER_02 // SYSTEM_RUNTIME',
      latency: '5ms',
      icon: <Server className="w-4 h-4 text-purple-neon" />,
      technologies: [
        { name: 'Python', tag: 'Core Logic', color: '#38BDF8', bgGlow: 'rgba(56, 189, 248, 0.15)' },
        { name: 'FastAPI', tag: 'Async REST', color: '#009688', bgGlow: 'rgba(0, 150, 136, 0.15)' },
        { name: 'Django', tag: 'Robust Backend', color: '#22C55E', bgGlow: 'rgba(34, 197, 94, 0.15)' },
        { name: 'Node.js', tag: 'Microservices', color: '#84CC16', bgGlow: 'rgba(132, 204, 22, 0.15)' },
      ],
    },
    {
      title: 'Databases & In-Memory Storage',
      layerTag: 'LAYER_03 // PERSISTENCE',
      latency: '1ms',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      technologies: [
        { name: 'PostgreSQL', tag: 'ACID Relational', color: '#3B82F6', bgGlow: 'rgba(59, 130, 246, 0.15)' },
        { name: 'SQLite', tag: 'Embedded / Desktop', color: '#0284C7', bgGlow: 'rgba(2, 132, 199, 0.15)' },
        { name: 'Redis', tag: 'Cache & PubSub', color: '#EF4444', bgGlow: 'rgba(239, 68, 68, 0.15)' },
      ],
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      layerTag: 'LAYER_04 // HOSTING_OPS',
      latency: '12ms',
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      technologies: [
        { name: 'Docker', tag: 'Containers', color: '#0284C7', bgGlow: 'rgba(2, 132, 199, 0.15)' },
        { name: 'Git & GitHub', tag: 'CI/CD Pipelines', color: '#F97316', bgGlow: 'rgba(249, 115, 22, 0.15)' },
        { name: 'Linux / Hetzner', tag: 'VPS Hardening', color: '#F59E0B', bgGlow: 'rgba(245, 158, 11, 0.15)' },
        { name: 'Hostinger & SSL', tag: 'Managed Domains', color: '#A855F7', bgGlow: 'rgba(168, 85, 247, 0.15)' },
      ],
    },
    {
      title: 'AI Intelligence & Automations',
      layerTag: 'LAYER_05 // NEURAL_OPS',
      latency: '8ms',
      icon: <Sparkles className="w-4 h-4 text-purple-electric" />,
      technologies: [
        { name: 'Gemini 2.5', tag: 'Multimodal AI', color: '#A855F7', bgGlow: 'rgba(168, 85, 247, 0.2)' },
        { name: 'OpenAI GPT', tag: 'LLM Reasoning', color: '#10A37F', bgGlow: 'rgba(16, 163, 127, 0.15)' },
        { name: 'LangChain', tag: 'Agentic Chains', color: '#22C55E', bgGlow: 'rgba(34, 197, 94, 0.15)' },
      ],
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 border-b border-purple-900/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#150F26] border border-purple-glow/40 text-purple-neon text-xs font-heading font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <span>Engineering Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            Curated Tech Stack
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto">
            Technologies selected for speed, long-term maintainability, and real business performance. No bloated plugins or abandoned frameworks.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative p-5 sm:p-6 rounded-2xl bg-[#090614]/90 border border-purple-900/50 hover:border-purple-neon/50 transition-all shadow-[0_0_25px_rgba(168,85,247,0.08)] group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Top Card Telemetry Rail */}
              <div className="flex items-center justify-between text-[9px] font-mono text-purple-300/70 mb-3 pb-2 border-b border-purple-900/30">
                <span className="tracking-wider">{cat.layerTag}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {cat.latency}
                </span>
              </div>

              {/* Title & Category Icon */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-purple-glow/15 border border-purple-neon/30 shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-sm sm:text-base font-heading font-black text-white tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Technologies Badges with Brand Color Accents */}
              <div className="flex flex-wrap gap-2">
                {cat.technologies.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#120D24] border border-purple-900/50 hover:border-purple-neon/60 transition-all text-xs group/item"
                    style={{
                      boxShadow: `0 0 10px ${tech.bgGlow}`,
                    }}
                  >
                    {/* Brand Glowing Dot */}
                    <span 
                      className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
                    />
                    <span className="text-white font-heading font-bold text-xs">{tech.name}</span>
                    <span className="text-[10px] text-slate-400 font-sans tracking-tight">({tech.tag})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest Feedback Banner (Encrypted Pipeline Ledger) */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#080512] border border-purple-900/60 max-w-2xl mx-auto shadow-[0_0_35px_rgba(168,85,247,0.15)] relative overflow-hidden">
          <div className="flex items-center justify-between text-[9px] font-mono text-purple-300/70 mb-3 pb-2 border-b border-purple-900/40">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-purple-neon" />
              <span>SECURITY_LEDGER // VERIFIED_DELIVERY</span>
            </span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ACTIVE
            </span>
          </div>

          <div className="text-center space-y-2">
            <div className="text-[11px] font-heading text-purple-neon font-bold uppercase tracking-wider">
              Client Feedback & Production Reviews
            </div>
            <h4 className="text-base sm:text-lg font-heading font-black text-white">
              Active Early Projects In Delivery
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
              Early client platforms are currently active in development and final testing. Authenticated client case reviews and production metrics will be published here upon client sign-off.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
