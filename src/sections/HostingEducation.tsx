import React from 'react';
import { 
  Code, 
  Globe, 
  Server, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle 
} from 'lucide-react';
import { CyberCard } from '../components/CyberCard';
import { motion } from 'framer-motion';

export const HostingEducation: React.FC = () => {
  return (
    <section id="hosting-guide" className="relative py-24 sm:py-32 border-b border-purple-900/30">
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
            <HelpCircle className="w-3.5 h-3.5 text-purple-electric" />
            <span>Transparent Cost Breakdown</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            What You Pay For
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
            Website development is a one-time project fee. Domain names and web hosting are separate recurring infrastructure costs paid directly to service providers.
          </p>
        </motion.div>

        {/* 3 Visual Blocks using CyberCard (Image 2 HUD Frame) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Block 1: BUILD */}
          <CyberCard telemetryTag="SYS_BUILD_01" isPopular={true}>
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-glow/20 border border-purple-neon/40 flex items-center justify-center text-purple-neon mb-5 shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                <Code className="w-6 h-6" />
              </div>
              <div className="text-xs font-heading uppercase tracking-wider text-purple-neon font-bold mb-1">
                One-Time Payment
              </div>
              <h3 className="text-xl font-heading font-black text-white mb-3">
                01. The Build (Development)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                What you pay Pasha Dev for: designing the user interface, writing custom code, integrating database models, configuring WhatsApp triggers, and building the product.
              </p>
            </div>
            <div className="pt-4 border-t border-purple-900/40 text-xs font-heading text-purple-neon font-bold">
              Paid once per project scope
            </div>
          </CyberCard>

          {/* Block 2: DOMAIN */}
          <CyberCard telemetryTag="SYS_DOMAIN_02">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-glow/10 border border-purple-glow/30 flex items-center justify-center text-purple-electric mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-xs font-heading uppercase tracking-wider text-purple-neon font-bold mb-1">
                Yearly Expense
              </div>
              <h3 className="text-xl font-heading font-black text-white mb-3">
                02. The Domain (Address)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                Your digital street address on the internet (e.g. <span className="text-white font-mono font-bold">yourbusiness.com</span> or <span className="text-white font-mono font-bold">.com.pk</span>). You own this 100% under your own account.
              </p>
            </div>
            <div className="pt-4 border-t border-purple-900/40 text-xs font-heading text-slate-400 font-semibold">
              Purchased annually (~PKR 3.5k–4.5k/yr)
            </div>
          </CyberCard>

          {/* Block 3: HOSTING */}
          <CyberCard telemetryTag="SYS_HOST_03">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-neon/30 flex items-center justify-center text-purple-neon mb-5">
                <Server className="w-6 h-6" />
              </div>
              <div className="text-xs font-heading uppercase tracking-wider text-purple-neon font-bold mb-1">
                Monthly / Yearly Server
              </div>
              <h3 className="text-xl font-heading font-black text-white mb-3">
                03. The Hosting (Server)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                The cloud server storage where your website files, pictures, and code live so customers can open it 24/7 anywhere in the world.
              </p>
            </div>
            <div className="pt-4 border-t border-purple-900/40 text-xs font-heading text-slate-400 font-semibold">
              Billed directly by hosting company
            </div>
          </CyberCard>

        </div>

        {/* Timeline: What happens after the build */}
        <div className="mb-20 rounded-2xl p-8 bg-[#0C0E1A] border border-purple-900/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-xl font-heading font-black text-white uppercase tracking-tight mb-2">
              What Happens After the Build?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              Development creates the website. Hosting gives it a place to run. A domain gives it an address.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center text-center">
            <div className="p-4 rounded-xl bg-[#121024] border border-purple-900/50">
              <div className="text-xs font-heading text-purple-neon font-bold">STEP 01</div>
              <div className="text-sm font-heading font-black text-white mt-1">BUILD</div>
              <div className="text-[11px] text-slate-400 font-sans mt-1">Custom Code & UI</div>
            </div>

            <div className="hidden md:flex justify-center text-purple-electric">
              <ArrowRight className="w-5 h-5 text-purple-neon" />
            </div>

            <div className="p-4 rounded-xl bg-[#121024] border border-purple-900/50">
              <div className="text-xs font-heading text-purple-neon font-bold">STEP 02</div>
              <div className="text-sm font-heading font-black text-white mt-1">DOMAIN</div>
              <div className="text-[11px] text-slate-400 font-sans mt-1">Register Address</div>
            </div>

            <div className="hidden md:flex justify-center text-purple-electric">
              <ArrowRight className="w-5 h-5 text-purple-neon" />
            </div>

            <div className="p-4 rounded-xl bg-purple-glow/20 border border-purple-neon shadow-[0_0_15px_rgba(192,132,252,0.4)]">
              <div className="text-xs font-heading text-purple-neon font-bold">STEP 03</div>
              <div className="text-sm font-heading font-black text-white mt-1">HOST & DEPLOY</div>
              <div className="text-[11px] text-purple-neon font-sans font-bold mt-1">100% Live Online</div>
            </div>
          </div>
        </div>

        {/* Hosting Guide: Hostinger vs VPS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Hostinger Recommendation */}
          <div className="lg:col-span-6">
            <CyberCard telemetryTag="GUIDE_SHARED">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-heading text-xs font-bold">
                    RECOMMENDED FOR BEGINNERS
                  </span>
                  <span className="text-xs font-heading text-slate-500 font-semibold">Shared Hosting</span>
                </div>

                <h4 className="text-xl font-heading font-black text-white mb-2">
                  Hostinger Premium Web Hosting
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  For simple websites, shared hosting is usually enough. It comes with a free domain for the first year, free SSL security, and simple setup.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-heading text-purple-neon uppercase tracking-wider font-bold">
                    Ideal For:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Small business websites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Landing pages & portfolios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Basic informatory sites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Simple online catalogs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-purple-900/40 text-[11px] font-sans text-slate-400">
                * Note: Hosting prices change depending on Hostinger's promotional discounts and annual renewal rates. You purchase this directly so you retain full ownership.
              </div>
            </CyberCard>
          </div>

          {/* Cloud VPS for Python & High-End Systems */}
          <div className="lg:col-span-6">
            <CyberCard telemetryTag="GUIDE_CLOUD_VPS" isPopular={true}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-purple-glow/20 border border-purple-neon/50 text-purple-neon font-heading text-xs font-bold">
                    FOR HIGH-PERFORMANCE APPS
                  </span>
                  <span className="text-xs font-heading text-slate-500 font-semibold">Cloud / VPS</span>
                </div>

                <h4 className="text-xl font-heading font-black text-white mb-2">
                  Cloud VPS (Hetzner, Railway, Render)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  For custom Python/FastAPI applications, advanced backend systems, realtime apps or resource-heavy applications, a VPS or modern PaaS cloud platform is more appropriate.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-heading text-purple-neon uppercase tracking-wider font-bold">
                    Recommended For:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-neon" />
                      <span>Custom Python/FastAPI backends</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-neon" />
                      <span>Persistent PostgreSQL databases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-neon" />
                      <span>High-volume online stores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-neon" />
                      <span>Real-time admin dashboards</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-purple-900/40 text-[11px] font-sans text-slate-400">
                * Note: We configure, deploy, and harden the server for you as part of your project handover.
              </div>
            </CyberCard>
          </div>

        </div>

      </div>
    </section>
  );
};
