import React, { useState } from 'react';
import { projectsData, type ProjectItem } from '../data/projectsData';
import { Sparkles, X, CheckCircle2, Target, Cpu, ExternalLink, Github, FileText, ArrowUpRight, Terminal, Layers, Copy, Check, Filter } from 'lucide-react';
import { CyberCard } from '../components/CyberCard';
import { CyberButton } from '../components/CyberButton';
import { sound } from '../utils/audio';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedBlueprint, setCopiedBlueprint] = useState<boolean>(false);

  const categories = [
    { id: 'All', label: 'All Projects', count: 7 },
    { id: 'Autonomous AI', label: 'Autonomous AI', count: 1 },
    { id: 'Live Showcase', label: 'Live Showcase', count: 3 },
    { id: 'E-Commerce', label: 'E-Commerce', count: 1 },
    { id: 'Developer Utility', label: 'Developer Tools', count: 1 },
    { id: 'Concept Platform', label: 'Platforms', count: 1 },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.typeBadge === selectedCategory);

  const handleCopyBlueprint = (diagramText: string) => {
    sound.playClick();
    navigator.clipboard.writeText(diagramText);
    setCopiedBlueprint(true);
    setTimeout(() => setCopiedBlueprint(false), 2500);
  };

  const openModal = (project: ProjectItem) => {
    sound.playOpenModal();
    setActiveModalProject(project);
  };

  const closeModal = () => {
    sound.playClick();
    setActiveModalProject(null);
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 border-b border-purple-900/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-purple-neon mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
              <span>Engineered Systems // GitHub Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
              Featured Work
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base font-sans leading-relaxed">
            Real products, platforms, and interactive software engineered by Pasha Dev. Verified repositories, live deployments, and deep architectural blueprints.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="w-full overflow-x-auto pb-4 mb-10 flex items-center gap-2 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#090714] border border-purple-900/60 shadow-[0_0_20px_rgba(168,85,247,0.12)]">
            <span className="px-3 py-1 text-slate-500 text-xs font-orbitron flex items-center gap-1.5 hidden sm:flex">
              <Filter className="w-3.5 h-3.5 text-purple-neon" />
              <span>FILTER:</span>
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-glow via-purple-neon to-purple-electric text-slate-950 shadow-[0_0_15px_rgba(192,132,252,0.5)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-purple-950/60 text-purple-300'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid using CyberCard */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <CyberCard telemetryTag={`PRJ_${project.name.toUpperCase().replace(/\s+/g, '_')}`} className="h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Badge & Category */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full bg-purple-glow/20 border border-purple-neon/40 text-[11px] font-heading font-bold text-purple-neon">
                          {project.typeBadge}
                        </span>
                        <span className="text-[11px] font-heading text-slate-400 font-semibold truncate max-w-[140px]">
                          {project.category}
                        </span>
                      </div>

                      {/* Visual Project Thumbnail Preview */}
                      <div className="w-full aspect-[16/10] rounded-xl mb-5 overflow-hidden relative border border-purple-900/60 bg-[#0A0714] group-hover:border-purple-glow/60 transition-all duration-300">
                        <img
                          src={project.thumbnailUrl}
                          alt={`${project.name} thumbnail`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Dark Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0714] via-transparent to-transparent opacity-70" />

                        {/* Top Badges overlay */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          {project.demoUrl ? (
                            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/50 text-[10px] font-orbitron font-bold text-emerald-400 backdrop-blur-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              LIVE DEMO
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-950/90 border border-purple-500/50 text-[10px] font-orbitron font-bold text-purple-200 backdrop-blur-md">
                              <Github className="w-3 h-3 text-purple-neon" />
                              REPO VERIFIED
                            </span>
                          )}
                        </div>

                        {/* Bottom Micro Pill */}
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 border border-purple-900/50 text-[9px] font-mono text-purple-300">
                          {project.technologies[0]}
                        </div>
                      </div>

                      {/* Project Title & Short Description */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-heading font-black text-white group-hover:text-purple-neon transition-colors">
                          {project.name}
                        </h3>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 rounded-md bg-purple-950/60 hover:bg-purple-900 text-purple-neon hover:text-white transition-colors"
                            title="Open Live App"
                            onClick={() => sound.playClick()}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3 mb-5">
                        {project.shortDescription}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#141026] border border-purple-900/50 text-[10px] font-heading font-semibold text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Live / Repo links & CyberButton */}
                    <div className="space-y-2.5 pt-2">
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-orbitron">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.playClick()}
                            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 font-bold transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>LIVE DEMO</span>
                          </a>
                        ) : (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.playClick()}
                            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#130d24] hover:bg-purple-950 border border-purple-800/40 text-purple-200 font-bold transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>VIEW REPO</span>
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sound.playClick()}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#130d24] hover:bg-purple-950 border border-purple-800/40 text-purple-200 font-bold transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE</span>
                        </a>
                      </div>

                      <CyberButton
                        size="sm"
                        fullWidth
                        onClick={() => openModal(project)}
                      >
                        <span>VIEW ARCHITECTURE</span>
                      </CyberButton>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Upgraded Interactive Architecture HUD Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0B0818] border border-purple-neon/70 p-5 sm:p-8 shadow-[0_0_60px_rgba(168,85,247,0.4)] space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-purple-900/60 pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold bg-purple-glow/20 text-purple-neon border border-purple-neon/40">
                    {activeModalProject.typeBadge}
                  </span>
                  <span className="text-xs font-heading text-slate-400 font-semibold">
                    {activeModalProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  {activeModalProject.name}
                </h3>
              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-purple-neon" />
              </button>
            </div>

            {/* Quick Link Actions inside Modal */}
            <div className="flex flex-wrap items-center gap-3">
              {activeModalProject.demoUrl && (
                <a
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/60 text-emerald-400 hover:text-white text-xs font-orbitron font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Deployment</span>
                </a>
              )}

              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#160e2b] border border-purple-600/50 text-purple-200 hover:text-white text-xs font-orbitron font-bold transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>

              <a
                href={activeModalProject.architectureDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => sound.playClick()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#160e2b] border border-purple-600/50 text-purple-200 hover:text-white text-xs font-orbitron font-bold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download .MD Blueprint</span>
              </a>

              {/* Copy Blueprint Button */}
              <button
                onClick={() => handleCopyBlueprint(activeModalProject.architectureDetails.diagramAscii)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-950/80 border border-purple-neon/50 text-purple-200 hover:text-white text-xs font-orbitron font-bold transition-colors"
              >
                {copiedBlueprint ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Blueprint Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-neon" />
                    <span>Copy ASCII Diagram</span>
                  </>
                )}
              </button>
            </div>

            {/* System Blueprint ASCII Diagram */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-heading uppercase text-purple-neon font-bold">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-electric" />
                  <span>System Architecture Blueprint</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">ASCII ARCHITECTURE SPEC</span>
              </div>
              <div className="p-4 rounded-xl bg-[#06040d] border border-purple-900/60 overflow-x-auto relative group">
                <pre className="font-mono text-xs text-purple-300 leading-relaxed whitespace-pre">
                  {activeModalProject.architectureDetails.diagramAscii}
                </pre>
              </div>
            </div>

            {/* Data Flow & Request Lifecycle */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-heading uppercase text-purple-neon font-bold">
                <Layers className="w-4 h-4 text-purple-electric" />
                <span>Request & Data Flow Lifecycle</span>
              </div>
              <div className="space-y-2">
                {activeModalProject.architectureDetails.dataFlow.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-[#110b24] border border-purple-950">
                    <span className="w-5 h-5 rounded-full bg-purple-900/60 border border-purple-neon/50 text-[11px] font-mono font-bold text-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-sans">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Goal & Technical Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 p-4 rounded-xl bg-[#0f0922] border border-purple-950">
                <div className="flex items-center gap-1.5 text-xs font-heading uppercase text-purple-neon font-bold">
                  <Target className="w-3.5 h-3.5 text-purple-electric" />
                  <span>Project Goal</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {activeModalProject.projectGoal}
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-[#0f0922] border border-purple-900/50">
                <div className="flex items-center gap-1.5 text-xs font-heading uppercase text-purple-neon font-bold">
                  <Cpu className="w-3.5 h-3.5 text-purple-electric" />
                  <span>Engineering Approach</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {activeModalProject.approach}
                </p>
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-2">
              <div className="text-xs font-heading uppercase text-purple-neon font-bold">
                Key Architectural Highlights:
              </div>
              <ul className="space-y-2">
                {activeModalProject.architectureDetails.highlights.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-purple-neon shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Details */}
            <div className="pt-4 border-t border-purple-900/50 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-heading gap-2">
              <span className="text-slate-400 font-bold">COMPLETE TECH STACK:</span>
              <span className="text-purple-neon font-bold">
                {activeModalProject.techStackDetailed}
              </span>
            </div>

            {/* Modal Close Button */}
            <CyberButton
              size="md"
              fullWidth
              onClick={closeModal}
            >
              <span>Close Blueprint</span>
            </CyberButton>

          </div>
        </div>
      )}
    </section>
  );
};
