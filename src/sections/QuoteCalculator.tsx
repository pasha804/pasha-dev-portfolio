import React, { useState, useMemo } from 'react';
import { Calculator, Check, Sparkles, AlertCircle, Share2 } from 'lucide-react';
import { CyberCard } from '../components/CyberCard';
import { CyberButton } from '../components/CyberButton';
import { sound } from '../utils/audio';
import { siteConfig } from '../data/config';
import { motion } from 'framer-motion';

interface QuoteCalculatorProps {
  onOpenInquiryWithEstimate: (details: {
    projectType: string;
    pages: string;
    features: string[];
    estimateRange: string;
  }) => void;
}

interface FeatureOption {
  id: string;
  label: string;
  minPrice: number;
  maxPrice: number;
}

const availableFeatures: FeatureOption[] = [
  { id: 'whatsapp', label: 'WhatsApp Direct Chat', minPrice: 0, maxPrice: 0 },
  { id: 'contact-form', label: 'Inquiry / Contact Form', minPrice: 500, maxPrice: 1000 },
  { id: 'animations', label: 'Custom Micro-Animations', minPrice: 1000, maxPrice: 2000 },
  { id: 'auth', label: 'User Authentication / Login', minPrice: 3000, maxPrice: 5000 },
  { id: 'admin-panel', label: 'Dedicated Admin Dashboard', minPrice: 5000, maxPrice: 8000 },
  { id: 'payment-gateway', label: 'Online Payment Integration', minPrice: 5000, maxPrice: 9000 },
  { id: 'database', label: 'Custom Database Architecture', minPrice: 3000, maxPrice: 6000 },
  { id: 'api-sync', label: 'External API Integration', minPrice: 3000, maxPrice: 6000 },
  { id: 'ai-agent', label: 'AI Chatbot / LLM Integration', minPrice: 6000, maxPrice: 12000 },
];

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenInquiryWithEstimate }) => {
  const [projectType, setProjectType] = useState<'website' | 'store' | 'webapp' | 'desktop'>('website');
  const [pages, setPages] = useState<string>('3-4');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['whatsapp', 'contact-form']);

  const toggleFeature = (id: string) => {
    sound.playClick();
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    let baseMin = 3000;
    let baseMax = 5000;

    if (projectType === 'website') {
      if (pages === '1') {
        baseMin = 3000;
        baseMax = 4500;
      } else if (pages === '3-4') {
        baseMin = 6000;
        baseMax = 8000;
      } else if (pages === '5-7') {
        baseMin = 8000;
        baseMax = 11000;
      } else if (pages === '8-10') {
        baseMin = 12000;
        baseMax = 16000;
      } else {
        baseMin = 18000;
        baseMax = 25000;
      }
    } else if (projectType === 'store') {
      baseMin = 15000;
      baseMax = 19000;
      if (pages !== '1' && pages !== '3-4') {
        baseMin += 4000;
        baseMax += 6000;
      }
    } else if (projectType === 'webapp') {
      baseMin = 20000;
      baseMax = 28000;
      if (pages === '8-10' || pages === '10+') {
        baseMin += 10000;
        baseMax += 15000;
      }
    } else if (projectType === 'desktop') {
      baseMin = 15000;
      baseMax = 22000;
      if (pages === '8-10' || pages === '10+') {
        baseMin += 8000;
        baseMax += 12000;
      }
    }

    let featureMin = 0;
    let featureMax = 0;

    selectedFeatures.forEach((featId) => {
      const feat = availableFeatures.find((f) => f.id === featId);
      if (feat) {
        featureMin += feat.minPrice;
        featureMax += feat.maxPrice;
      }
    });

    const totalMin = baseMin + featureMin;
    const totalMax = baseMax + featureMax;

    return {
      totalMin,
      totalMax,
      minFormatted: totalMin.toLocaleString('en-US'),
      maxFormatted: totalMax.toLocaleString('en-US'),
      rawString: `PKR ${totalMin.toLocaleString('en-US')} – PKR ${totalMax.toLocaleString('en-US')}`,
    };
  }, [projectType, pages, selectedFeatures]);

  const handleRequestEstimate = () => {
    sound.playSuccess();
    onOpenInquiryWithEstimate({
      projectType:
        projectType === 'website'
          ? 'Business Website'
          : projectType === 'store'
          ? 'Online Store'
          : projectType === 'webapp'
          ? 'Custom Web Application'
          : 'Desktop Software',
      pages: `${pages} Pages / Screens`,
      features: selectedFeatures.map(
        (id) => availableFeatures.find((f) => f.id === id)?.label || id
      ),
      estimateRange: calculatedEstimate.rawString,
    });
  };

  const handleDirectWhatsAppShare = () => {
    sound.playClick();
    const typeLabel =
      projectType === 'website'
        ? 'Business Website'
        : projectType === 'store'
        ? 'Online Store'
        : projectType === 'webapp'
        ? 'Custom Web Application'
        : 'Desktop Software';
    
    const featureList = selectedFeatures
      .map((id) => availableFeatures.find((f) => f.id === id)?.label || id)
      .join(', ');

    const text = `Hi Pasha Dev, I calculated an estimate on your website:\n\n*Project:* ${typeLabel}\n*Scope:* ${pages} Pages/Screens\n*Features:* ${featureList}\n*Estimated Range:* ${calculatedEstimate.rawString}\n\nCan we discuss the timeline and details?`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="relative py-24 sm:py-32 border-b border-purple-900/30">
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
            <Calculator className="w-3.5 h-3.5 text-purple-electric" />
            <span>Interactive Cost Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            Calculate Your Build Range
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Select your project type, scope, and required capabilities to preview an instant, realistic development estimate.
          </p>
        </motion.div>

        {/* Configurator Box in CyberCard */}
        <div className="max-w-4xl mx-auto">
          <CyberCard telemetryTag="TELEMETRY_CALC" isPopular={true}>
            <div className="space-y-8 py-2">
              
              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-purple-neon font-bold mb-3 flex items-center justify-between">
                  <span>Step 1: Select Project Type</span>
                  <span className="text-[10px] font-mono text-slate-500">BASE ARCHITECTURE</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'website', label: 'Website' },
                    { id: 'store', label: 'Online Store' },
                    { id: 'webapp', label: 'Web App' },
                    { id: 'desktop', label: 'Desktop Software' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setProjectType(type.id as any);
                      }}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-heading font-bold tracking-wide transition-all ${
                        projectType === type.id
                          ? 'border-purple-neon bg-purple-glow/30 text-white shadow-[0_0_15px_rgba(192,132,252,0.4)] scale-[1.02]'
                          : 'border-purple-950/60 bg-[#0E101D] text-slate-400 hover:text-white hover:border-purple-800'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Number of Pages / Screens */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-purple-neon font-bold mb-3 flex items-center justify-between">
                  <span>Step 2: Number of Pages / Screens</span>
                  <span className="text-[10px] font-mono text-slate-500">SCOPE DEPTH</span>
                </label>
                <div className="grid grid-cols-5 gap-2.5">
                  {['1', '3-4', '5-7', '8-10', '10+'].map((pageCount) => (
                    <button
                      key={pageCount}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setPages(pageCount);
                      }}
                      className={`py-3 rounded-xl border text-xs font-heading font-bold transition-all ${
                        pages === pageCount
                          ? 'border-purple-neon bg-purple-glow/30 text-white shadow-[0_0_15px_rgba(192,132,252,0.4)] scale-[1.02]'
                          : 'border-purple-950/60 bg-[#0E101D] text-slate-400 hover:text-white hover:border-purple-800'
                      }`}
                    >
                      {pageCount} {pageCount === '1' ? 'Page' : 'Pages'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Add-on Features */}
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-purple-neon font-bold mb-3 flex items-center justify-between">
                  <span>Step 3: Select Required Features</span>
                  <span className="text-[10px] font-mono text-slate-500">{selectedFeatures.length} SELECTED</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {availableFeatures.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3 rounded-xl border text-left text-xs font-heading font-semibold transition-all flex items-center justify-between gap-2 ${
                          isChecked
                            ? 'border-purple-neon bg-purple-glow/20 text-white shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                            : 'border-purple-950/60 bg-[#0E101D] text-slate-400 hover:border-purple-800 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="truncate">{feat.label}</span>
                          <span className="text-[10px] text-purple-300/60 font-mono">
                            {feat.minPrice === 0 ? 'Included Free' : `+PKR ${feat.minPrice.toLocaleString()}`}
                          </span>
                        </div>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? 'bg-purple-neon border-purple-neon text-slate-950'
                              : 'border-white/20 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculated Output Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#170F2B] to-[#0E0B1A] border border-purple-neon/50 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-heading uppercase text-purple-neon tracking-wider font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
                    <span>Estimated Development Range</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                    PKR {calculatedEstimate.minFormatted} – {calculatedEstimate.maxFormatted}
                  </div>
                  <div className="text-[11px] text-slate-300 font-sans mt-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-purple-neon shrink-0" />
                    <span>Estimate only. Final quote confirmed after scope discussion.</span>
                  </div>
                </div>

                {/* Actions Hub */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleDirectWhatsAppShare}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#081812] border border-[#25D366]/50 hover:border-[#25D366] text-[#25D366] hover:text-white text-xs font-orbitron font-bold transition-all shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                    title="Send Estimate to WhatsApp"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp Quote</span>
                  </button>

                  <CyberButton size="md" onClick={handleRequestEstimate}>
                    <span>Request Estimate</span>
                  </CyberButton>
                </div>
              </div>

            </div>
          </CyberCard>
        </div>

      </div>
    </section>
  );
};
