import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Layers, 
  LayoutDashboard, 
  Monitor, 
  Sparkles, 
  Server, 
  RefreshCw, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Code2 
} from 'lucide-react';
import { servicesData, type ServiceItem } from '../data/servicesData';
import { CyberCard } from '../components/CyberCard';
import { CyberButton } from '../components/CyberButton';
import { motion } from 'framer-motion';
import { sound } from '../utils/audio';

interface ServicesSectionProps {
  onOpenInquiry: (initialCategory?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-purple-neon" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-purple-neon" />,
  Layers: <Layers className="w-5 h-5 text-purple-neon" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-purple-neon" />,
  Monitor: <Monitor className="w-5 h-5 text-purple-neon" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-neon" />,
  Server: <Server className="w-5 h-5 text-purple-neon" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-purple-neon" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section id="services" className="relative py-24 sm:py-32 border-b border-purple-900/30 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Framer Motion Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-purple-neon mb-3 font-semibold">
              <span className="w-2 h-2 rounded-full bg-purple-neon shadow-[0_0_6px_#C084FC]" />
              <span>Full-Stack Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
              What I Build
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base font-sans leading-relaxed">
            From single-page high-converting websites to full custom software systems. Designed for business utility, built with clean code.
          </p>
        </motion.div>

        {/* Dual Column Layout: Service Cards Grid on Left, Live Interactive HUD Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services List (8 Blocks) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesData.map((service, idx) => {
              const isSelected = selectedService.id === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => {
                    sound.playClick();
                    setSelectedService(service);
                  }}
                  onMouseEnter={() => {
                    if (selectedService.id !== service.id) {
                      sound.playHover();
                      setSelectedService(service);
                    }
                  }}
                  className={`group relative p-5 cursor-pointer transition-all duration-300 text-left overflow-hidden ${
                    isSelected
                      ? 'bg-[#140D26] shadow-[0_0_30px_rgba(168,85,247,0.35)] -translate-y-0.5'
                      : 'bg-[#090A14]/90 hover:bg-[#101222] hover:-translate-y-0.5'
                  }`}
                  style={{
                    clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                  }}
                >
                  {/* Outer Cyber Border Frame */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-colors duration-300 border ${
                      isSelected
                        ? 'border-purple-neon shadow-[inset_0_0_15px_rgba(192,132,252,0.3)]'
                        : 'border-purple-900/50 group-hover:border-purple-500/60'
                    }`}
                    style={{
                      clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                    }}
                  />

                  {/* Corner Flare Accent on Top-Left */}
                  <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors ${isSelected ? 'border-white' : 'border-purple-neon/50'}`} />
                  {/* Corner Flare Accent on Bottom-Right */}
                  <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-colors ${isSelected ? 'border-white' : 'border-purple-neon/50'}`} />

                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-orbitron font-bold ${isSelected ? 'text-purple-neon' : 'text-slate-500'}`}>
                        {service.number}
                      </span>
                      <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-purple-glow/30 text-white' : 'bg-white/5 text-slate-400 group-hover:text-purple-neon'}`}>
                        {iconMap[service.icon]}
                      </div>
                    </div>
                    <span className="text-xs font-orbitron font-bold text-purple-neon">
                      {service.startingPrice}
                    </span>
                  </div>

                  <h3 className="text-base font-orbitron font-bold text-white mb-1.5 group-hover:text-purple-neon transition-colors relative z-10">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans line-clamp-2 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-purple-900/30 text-[11px] font-orbitron font-semibold relative z-10">
                    <span className="text-slate-400">{service.timeline}</span>
                    <span className="text-purple-neon flex items-center gap-1 transition-opacity">
                      <span>{isSelected ? 'Selected' : 'Inspect'}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </span>
                  </div>

                  {/* Mobile Inline Detail View (Expands directly underneath the clicked card on mobile) */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="lg:hidden mt-4 pt-4 border-t border-purple-900/60 space-y-3 relative z-10"
                    >
                      <div className="relative w-full h-36 rounded-lg overflow-hidden border border-purple-neon/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-950/20 mix-blend-overlay" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[10px] font-heading font-bold text-purple-neon uppercase tracking-wider">
                          Key Capabilities:
                        </div>
                        <ul className="space-y-1.5">
                          {service.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-neon shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between text-[11px] py-2 border-y border-purple-900/40 font-heading">
                        <span className="text-slate-400">Timeline: <strong className="text-white">{service.timeline}</strong></span>
                        <span className="text-slate-400">Stack: <strong className="text-white">{service.tech.slice(0, 2).join(', ')}</strong></span>
                      </div>

                      <div className="pt-1">
                        <CyberButton
                          size="sm"
                          fullWidth
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            sound.playClick();
                            onOpenInquiry(service.title);
                          }}
                        >
                          <span>Request {service.title}</span>
                        </CyberButton>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Service Explorer HUD (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            <CyberCard
              badge="SERVICE SPECIFICATION"
              telemetryTag={`SYS_${selectedService.number}`}
              isPopular={true}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/50">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-heading text-purple-neon font-black">{selectedService.number}</span>
                    <span className="text-xs font-heading text-slate-400 uppercase tracking-wider">{selectedService.tagline}</span>
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-purple-glow/20 border border-purple-neon/50 text-purple-neon font-heading text-xs font-bold shadow-[0_0_10px_rgba(192,132,252,0.3)]">
                    {selectedService.startingPrice}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight mb-3">
                  {selectedService.title}
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {/* Cyber Image Display */}
                <motion.div 
                  key={selectedService.image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-40 sm:h-52 mb-6 rounded-lg overflow-hidden border border-purple-neon/30 group-hover:border-purple-neon/60 transition-colors"
                >
                  <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay z-10 pointer-events-none" />
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Decorative Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-50" />
                </motion.div>

                {/* Key Features */}
                <div className="space-y-4 mb-6">
                  <div className="text-xs font-heading uppercase tracking-wider text-purple-neon font-bold">
                    Included Capabilities:
                  </div>
                  <ul className="space-y-2.5">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-purple-neon shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & Tech */}
                <div className="grid grid-cols-2 gap-4 py-4 my-6 border-y border-purple-900/50 text-xs font-heading">
                  <div>
                    <div className="text-slate-400 flex items-center gap-1.5 mb-1 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-purple-neon" />
                      <span>TIMELINE</span>
                    </div>
                    <div className="text-white font-bold">{selectedService.timeline}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 flex items-center gap-1.5 mb-1 font-semibold">
                      <Code2 className="w-3.5 h-3.5 text-purple-neon" />
                      <span>TECH STACK</span>
                    </div>
                    <div className="text-white font-bold">{selectedService.tech.slice(0, 3).join(', ')}</div>
                  </div>
                </div>
              </div>

              {/* Action Button: CyberButton */}
              <div className="pt-2">
                <CyberButton
                  size="md"
                  fullWidth
                  onClick={() => onOpenInquiry(selectedService.title)}
                >
                  <span>Request {selectedService.title}</span>
                </CyberButton>
              </div>
            </CyberCard>
          </div>

        </div>
      </div>
    </section>
  );
};
