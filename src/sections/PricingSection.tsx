import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Layers, 
  Monitor, 
  Check, 
  Info, 
  Clock, 
  Sparkles,
  Coins
} from 'lucide-react';
import { pricingCategories, pricingPackages, type PricingPackage } from '../data/pricingData';
import { CyberCard } from '../components/CyberCard';
import { CyberButton } from '../components/CyberButton';
import { sound } from '../utils/audio';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingSectionProps {
  onOpenInquiry: (initialPackage?: string) => void;
}

const tabIcons: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-4 h-4" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Monitor: <Monitor className="w-4 h-4" />,
};

// Realistic approx conversion for international clients (USD rates rounded cleanly)
const pkrToUsdMap: Record<string, string> = {
  "PKR 3,000+": "$15+",
  "PKR 6,000+": "$25+",
  "PKR 8,000+": "$35+",
  "PKR 12,000+": "$50+",
  "PKR 15,000+": "$60+",
  "PKR 25,000+": "$95+",
  "PKR 40,000+": "$150+",
  "PKR 20,000+": "$80+",
  "PKR 35,000+": "$135+",
  "PKR 60,000+": "$225+",
  "PKR 30,000+": "$115+",
  "PKR 50,000+": "$190+",
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'websites' | 'stores' | 'apps' | 'desktop'>('websites');
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');

  const filteredPackages = pricingPackages.filter((pkg) => pkg.category === activeCategory);

  const toggleCurrency = (cur: 'PKR' | 'USD') => {
    sound.playClick();
    setCurrency(cur);
  };

  return (
    <section id="pricing" className="relative py-14 sm:py-18 border-b border-purple-900/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#150F26] border border-purple-glow/40 text-purple-neon text-[11px] font-heading font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <Sparkles className="w-3 h-3 text-purple-electric" />
            <span>Honest & Predictable Rates</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
            Start Small. <span className="text-metallic-purple drop-shadow-[0_0_20px_rgba(192,132,252,0.4)]">Build Smart.</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed max-w-2xl mx-auto">
            Simple pricing for businesses that need a real digital presence without an agency-sized budget. Clean engineering tailored for Pakistan & International clients.
          </p>

          {/* Currency Switcher + Disclaimer */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            {/* Currency Pill Switcher */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-[#090714] border border-purple-900/70 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="text-[10px] font-orbitron text-slate-400 px-1.5 flex items-center gap-1">
                <Coins className="w-3 h-3 text-purple-neon" />
                <span>CURRENCY:</span>
              </span>
              <button
                type="button"
                onClick={() => toggleCurrency('PKR')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-orbitron font-bold transition-all ${
                  currency === 'PKR'
                    ? 'bg-purple-neon text-slate-950 shadow-[0_0_8px_#C084FC]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PKR (Rs)
              </button>
              <button
                type="button"
                onClick={() => toggleCurrency('USD')}
                className={`px-2.5 py-0.5 rounded-lg text-xs font-orbitron font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-purple-neon text-slate-950 shadow-[0_0_8px_#C084FC]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>

            {/* Pricing Disclaimer Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0D0F1A] border border-purple-900/50 text-[10px] text-slate-300 font-sans">
              <Info className="w-3 h-3 text-purple-neon shrink-0" />
              <span>
                <strong className="text-white font-heading">Development fee:</strong> Hosting separate.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation Tabs */}
        <div className="w-full max-w-full overflow-x-auto flex sm:justify-center mb-6 pb-1 px-2 scrollbar-none">
          <div className="inline-flex p-1 rounded-2xl bg-[#0B0D16] border border-purple-900/60 shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            {pricingCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategory(cat.id);
                  }}
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-heading font-bold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-glow via-purple-neon to-purple-electric text-slate-950 shadow-[0_0_20px_rgba(192,132,252,0.6)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tabIcons[cat.icon]}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid using CyberCard (Image 2 HUD Frame) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4.5 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg: PricingPackage, idx) => {
              const isPopular = pkg.badge === 'MOST POPULAR';
              const displayPrice = currency === 'USD'
                ? (pkrToUsdMap[pkg.startingPrice] || pkg.startingPrice)
                : pkg.startingPrice;

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="h-full w-full"
                >
                  <CyberCard
                    badge={pkg.badge}
                    telemetryTag={`SYS_PKG_${idx + 1}`}
                    isPopular={isPopular}
                    contentClassName="pt-10 px-4 pb-4 sm:pt-12 sm:px-5 sm:pb-5 flex flex-col justify-between h-full"
                    className="h-full"
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        {/* Title & Pages */}
                        <div className="flex items-start justify-between mb-2.5">
                          <div>
                            <h3 className="text-base sm:text-lg font-heading font-black text-white leading-tight">
                              {pkg.title}
                            </h3>
                            {pkg.pages && (
                              <span className="inline-block mt-1 text-[10px] font-heading font-bold text-purple-neon bg-purple-glow/20 px-2 py-0.5 rounded-full border border-purple-neon/30">
                                {pkg.pages}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price Tag */}
                        <div className="mb-2.5 pb-2.5 border-b border-purple-900/40">
                          <div className="text-[10px] font-heading font-semibold text-slate-400 uppercase tracking-wider">
                            Starting from
                          </div>
                          <div className="text-2xl sm:text-[26px] font-heading font-black text-white tracking-tight mt-0.5 leading-none">
                            {displayPrice}
                          </div>
                          <div className="text-[10px] text-slate-400 font-sans mt-1">
                            One-time build fee
                          </div>
                        </div>

                        {/* Best for */}
                        <p className="text-[11px] text-slate-300 mb-3 italic font-sans leading-snug line-clamp-2">
                          Best for: {pkg.bestFor}
                        </p>

                        {/* Features List */}
                        <div className="space-y-1.5 mb-3.5">
                          <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-purple-neon">
                            What's Included:
                          </div>
                          <ul className="space-y-1.5">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-200 font-sans">
                                <Check className="w-3 h-3 text-purple-neon shrink-0 mt-0.5" />
                                <span className="leading-tight">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Footer & CTA: Exact Image 1 CyberButton */}
                      <div className="pt-2.5 border-t border-purple-900/40 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-heading text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-purple-neon" />
                            <span>{pkg.timeline}</span>
                          </span>
                          <span className="text-[10px] text-slate-400">Scope dependent</span>
                        </div>

                        <CyberButton
                          size="sm"
                          fullWidth
                          onClick={() => {
                            sound.playClick();
                            onOpenInquiry(pkg.title);
                          }}
                        >
                          <span>{pkg.ctaText}</span>
                        </CyberButton>
                      </div>
                    </div>
                  </CyberCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Scope Note */}
        <div className="mt-6 text-center">
          <p className="text-xs font-sans text-slate-400">
            * Final price depends on features, pages, integrations and project scope. Complex software is quoted after detailed requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
