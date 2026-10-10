import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-b border-purple-900/30">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#150F26] border border-purple-glow/40 text-purple-neon text-xs font-heading font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <HelpCircle className="w-3.5 h-3.5 text-purple-electric" />
            <span>Common Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Straightforward answers about pricing, project scopes, servers, and timelines.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#120E24] border-purple-neon shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                    : 'bg-[#0B0D16] border-purple-950/60 hover:border-purple-800'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl border transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-purple-glow/30 border-purple-neon text-white shadow-[0_0_10px_#C084FC]'
                        : 'bg-white/5 border-purple-900/40 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base font-sans leading-relaxed border-t border-purple-900/40 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                    {item.highlight && (
                      <div className="mt-3 inline-block px-3 py-1 rounded-full bg-purple-glow/20 border border-purple-neon/40 text-xs font-heading text-purple-neon font-bold">
                        Key takeaway: {item.highlight}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
