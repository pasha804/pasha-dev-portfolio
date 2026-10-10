import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import { Sparkles, CheckCircle2, Zap, Terminal, Activity } from 'lucide-react';
import { sound } from '../utils/audio';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'status' | 'stack' | 'guarantee'>('status');

  const skillPills = [
    'Frontend (React/TypeScript)',
    'Backend (Python/FastAPI)',
    'Relational Databases',
    'AI & Automation',
    'UI / UX Cyber Design',
    'Cloud VPS & Docker',
  ];

  const handleTabChange = (tab: 'status' | 'stack' | 'guarantee') => {
    sound.playClick();
    setActiveTab(tab);
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 border-b border-purple-900/30 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-purple-glow/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Developer Story & Brand Identity */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#150F26] border border-purple-glow/40 text-purple-neon text-xs font-heading font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
              <span>ABOUT THE DEVELOPER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase leading-tight">
              One Developer. <br />
              <span className="text-metallic-purple drop-shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                Full Product Mindset.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              <p>
                I'm <strong className="text-white font-heading">{siteConfig.developerName}</strong>, the software engineer behind{' '}
                <strong className="text-purple-neon font-heading">{siteConfig.brandName}</strong>. I build websites, web applications,
                online stores and software with a focus on clean engineering, strong visual design and practical business utility.
              </p>
              <p className="text-slate-300">
                Rather than hiding behind agency bureaucracy or inflated corporate titles, I believe in radical honesty:
                writing performant, clean code that directly drives sales, orders, and inquiries for small businesses in Pakistan and abroad.
              </p>
            </div>

            {/* Interactive Developer Terminal Box */}
            <div className="rounded-xl bg-[#070512] border border-purple-900/60 p-4 shadow-[0_0_25px_rgba(168,85,247,0.15)] space-y-3">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-2 border-b border-purple-950 text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-purple-neon" />
                  <span className="text-white font-bold">pasha@terminal:~</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
              </div>

              {/* Terminal command tabs */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleTabChange('status')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeTab === 'status'
                      ? 'bg-purple-neon text-slate-950 font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  $ pasha --status
                </button>
                <button
                  onClick={() => handleTabChange('stack')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeTab === 'stack'
                      ? 'bg-purple-neon text-slate-950 font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  $ pasha --stack
                </button>
                <button
                  onClick={() => handleTabChange('guarantee')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeTab === 'guarantee'
                      ? 'bg-purple-neon text-slate-950 font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  $ pasha --warranty
                </button>
              </div>

              {/* Terminal Output */}
              <div className="p-2.5 rounded bg-black/60 font-mono text-xs text-purple-200/90 leading-relaxed min-h-[50px]">
                {activeTab === 'status' && (
                  <div>
                    <span className="text-emerald-400 font-bold">▶ STATUS: </span>
                    <span>Available for Q4 2026 builds. Typical kickoff within 24h. WhatsApp response &lt; 2 hrs.</span>
                  </div>
                )}
                {activeTab === 'stack' && (
                  <div>
                    <span className="text-purple-neon font-bold">▶ CORE STACK: </span>
                    <span>Python 3.12 (FastAPI/Django), React 19, TypeScript, PostgreSQL, Tailwind CSS, Docker.</span>
                  </div>
                )}
                {activeTab === 'guarantee' && (
                  <div>
                    <span className="text-purple-electric font-bold">▶ WARRANTY: </span>
                    <span>15 to 30 days free post-delivery bug fixes, zero hidden costs, complete source ownership.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {skillPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#140b2b] border border-purple-500/40 text-xs font-heading font-bold text-purple-200 hover:border-purple-neon hover:text-white transition-colors shadow-[0_0_10px_rgba(168,85,247,0.15)]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-purple-900/40">
              {[
                'Zero template bloat',
                'Fast mobile-first load times',
                'Direct WhatsApp collaboration',
                'Transparent development pricing',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-heading font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-neon shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Developer Holographic Constellation Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[480px] group">
              
              {/* Outer Volumetric Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-glow/30 via-purple-electric/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 pointer-events-none" />

              {/* Futuristic Cyber Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-neon/50 bg-[#0A0614] shadow-[0_0_50px_rgba(168,85,247,0.35)]">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#120a24] border-b border-purple-900/50 text-[10px] font-orbitron">
                  <span className="font-bold text-white tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-neon animate-ping" />
                    DEVELOPER_NODE // MUBASHAR PASHA
                  </span>
                  <span className="text-purple-neon font-mono">NEURAL_GRAPH: 100%</span>
                </div>

                {/* Developer Constellation Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-black">
                  <img
                    src="/about-developer.jpg"
                    alt="Muhammad Mubashar - Solo Developer Full Product Mindset"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0614] via-transparent to-transparent opacity-60" />

                  {/* Floating Micro Status Chips */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e0720]/90 border border-purple-neon/40 backdrop-blur-md text-xs font-orbitron text-white">
                    <Zap className="w-3.5 h-3.5 text-purple-neon" />
                    <span>SOLO ARCHITECT</span>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-neon/30 text-[10px] font-orbitron font-bold text-purple-neon">
                    DIRECT ACCESS
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="px-4 py-2 bg-[#0d071a] border-t border-purple-900/40 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TELEMETRY: ACTIVE_DEV</span>
                  </span>
                  <span className="text-purple-neon">VERIFIED // SOLO_ENGINEER</span>
                </div>
              </div>

              {/* Decorative Corner Chamfers */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-neon pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-neon pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
