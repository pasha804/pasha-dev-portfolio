import React from 'react';
import { MessageSquare, Cpu, Layers, DollarSign, FileCheck2, Sparkles } from 'lucide-react';
import { CyberCard } from '../components/CyberCard';
import { motion } from 'framer-motion';

export const WhySoloSection: React.FC = () => {
  const reasons = [
    {
      title: 'Direct Communication',
      desc: 'You talk directly with the developer building your product. No account managers, no broken telephone, no waiting days for a simple reply.',
      icon: <MessageSquare className="w-5 h-5 text-purple-neon" />,
      tag: '1-ON-1 DIRECT'
    },
    {
      title: 'Custom Build',
      desc: 'No heavy, slow, bloated WordPress templates that break every week. Every interface and endpoint is tailored specifically to your business.',
      icon: <Cpu className="w-5 h-5 text-purple-electric" />,
      tag: 'CLEAN ARCHITECTURE'
    },
    {
      title: 'Modern Stack',
      desc: 'Engineered with Python (FastAPI/Django) and modern React. Blazing fast, highly secure, and built to scale as your company grows.',
      icon: <Layers className="w-5 h-5 text-purple-neon" />,
      tag: 'PYTHON + REACT'
    },
    {
      title: 'Small-Business Friendly',
      desc: 'Development rates designed around realistic Pakistani business budgets. You get premium digital presence without agency markups.',
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      tag: 'FROM PKR 3,000'
    },
    {
      title: 'Clear Scope & Support',
      desc: 'No surprise bills or confusing retainers. Clear written feature list, guaranteed delivery timeline, and free bug-fix support included.',
      icon: <FileCheck2 className="w-5 h-5 text-purple-neon" />,
      tag: 'FIXED PRICE'
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 border-b border-purple-900/30 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#150F26] border border-purple-glow/40 text-purple-neon text-xs font-heading font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
            <span>No Agency Fluff</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            Why Work With a Solo Developer?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            You are not paying for a huge agency office, expensive lunches, or layers of non-technical managers. You work directly with the engineer coding your solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 8k Cinematic Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative lg:sticky lg:top-32"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-purple-900/50 shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
              <div className="absolute inset-0 bg-purple-900/20 mix-blend-color-burn z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
              <img 
                src="/solo_dev.jpg" 
                alt="Cyberpunk Solo Developer Workstation" 
                className="w-full h-full object-cover object-center filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05030a] via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-orbitron text-purple-100 tracking-wider">
                  <span className="text-purple-neon mr-2">SYS.OP:</span>
                  100% Focused Engineering
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`h-full ${idx === 4 ? 'sm:col-span-2' : ''}`}
              >
                <CyberCard telemetryTag={item.tag} className="h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-purple-glow/20 border border-purple-neon/40">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-full bg-[#151128] text-purple-neon border border-purple-neon/30">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-black text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-purple-900/40 text-[11px] font-heading font-bold text-purple-neon">
                      GUARANTEED STANDARD
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
