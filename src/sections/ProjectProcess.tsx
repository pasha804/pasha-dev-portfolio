import React from 'react';
import { MessageSquare, Compass, Palette, Code, CheckSquare, Rocket } from 'lucide-react';
import { CyberCard } from '../components/CyberCard';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCUSS',
    subtitle: 'Understand the vision',
    description: 'We connect directly on WhatsApp or call to discuss your business goals, target audience, and key requirements.',
    icon: <MessageSquare className="w-5 h-5 text-purple-neon" />,
  },
  {
    number: '02',
    title: 'PLAN',
    subtitle: 'Scope & timeline',
    description: 'We define the exact page count, feature list, and delivery deadline in a clear, written agreement. No scope creep.',
    icon: <Compass className="w-5 h-5 text-purple-neon" />,
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Visual identity',
    description: 'We establish the visual direction, modern typography, color palette, and mobile responsiveness tailored to your brand.',
    icon: <Palette className="w-5 h-5 text-purple-neon" />,
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Clean engineering',
    description: 'Clean frontend (React/Tailwind) and robust backend (Python/FastAPI) are coded with zero bloat and high performance.',
    icon: <Code className="w-5 h-5 text-purple-neon" />,
  },
  {
    number: '05',
    title: 'TEST',
    subtitle: 'Cross-device verification',
    description: 'Testing across mobile phones, tablets, and desktops. Checking loading speed, form submissions, and database integrity.',
    icon: <CheckSquare className="w-5 h-5 text-purple-neon" />,
  },
  {
    number: '06',
    title: 'DELIVER',
    subtitle: 'Live deployment',
    description: 'Final deployment to your domain and hosting, complete credential handover, and 15–30 days of free bug-fix support.',
    icon: <Rocket className="w-5 h-5 text-purple-neon" />,
  },
];

export const ProjectProcess: React.FC = () => {
  return (
    <section id="process" className="relative py-24 sm:py-32 border-b border-purple-900/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#150F26] border border-purple-glow/40 text-purple-neon text-xs font-heading font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <span>Transparent Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            How We Build Together
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            A structured 6-step engineering methodology that keeps you in the loop without endless meetings or agency delays.
          </p>
        </motion.div>

        {/* 6-Step Grid using CyberCard HUD frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="h-full"
            >
              <CyberCard telemetryTag={`PHASE_${step.number}`} className="h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Step header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-2xl font-heading font-black text-purple-neon">
                        {step.number}
                      </div>
                      <div className="p-2.5 rounded-xl bg-purple-glow/20 border border-purple-neon/40 text-purple-neon">
                        {step.icon}
                      </div>
                    </div>

                    <div className="text-xs font-heading text-purple-electric uppercase tracking-wider mb-1 font-bold">
                      {step.subtitle}
                    </div>
                    <h3 className="text-xl font-heading font-black text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-900/40 flex items-center justify-between text-[11px] font-heading font-semibold text-slate-400">
                    <span>Phase {step.number} of 06</span>
                    <span className="text-purple-neon font-bold">
                      ACTIVE MILESTONE
                    </span>
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
