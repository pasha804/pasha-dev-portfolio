import React, { useState, useEffect } from 'react';
import { Search, Globe, Calculator, Cpu, User, HelpCircle, MessageSquare, ArrowRight, X, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/config';
import { sound } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: (category?: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: CommandItem[] = [
    {
      id: 'services',
      title: 'Explore Services & Solutions',
      category: 'Navigation',
      icon: <Globe className="w-4 h-4 text-purple-neon" />,
      action: () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'pricing',
      title: 'View Transparent Pricing Menu',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-purple-electric" />,
      action: () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'calculator',
      title: 'Interactive Project Cost Calculator',
      category: 'Tools',
      icon: <Calculator className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'work',
      title: 'Featured Work & GitHub Repositories',
      category: 'Navigation',
      icon: <ExternalLink className="w-4 h-4 text-purple-neon" />,
      action: () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'about',
      title: 'About Muhammad Mubashar (Pasha Dev)',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-purple-neon" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      category: 'Navigation',
      icon: <HelpCircle className="w-4 h-4 text-slate-300" />,
      action: () => {
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'inquiry',
      title: 'Start a Project / Send Scope Request',
      category: 'Action',
      icon: <MessageSquare className="w-4 h-4 text-purple-neon" />,
      action: () => {
        onClose();
        onOpenInquiry();
      },
      shortcut: '↵',
    },
    {
      id: 'whatsapp',
      title: 'Chat Directly on WhatsApp (+92 308 4453846)',
      category: 'Action',
      icon: <span className="text-emerald-400 font-bold">WA</span>,
      action: () => {
        window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );


  useEffect(() => {
    if (!isOpen) return;
    sound.playOpenModal();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        sound.playHover();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredCommands[selectedIndex];
        if (selected) {
          sound.playClick();
          selected.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#090614] border border-purple-neon/50 shadow-[0_0_50px_rgba(168,85,247,0.4)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-neon via-purple-electric to-purple-neon shadow-[0_0_12px_#C084FC]" />

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-900/40">
          <Search className="w-5 h-5 text-purple-neon shrink-0 animate-pulse" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search services, pricing, projects or commands..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm font-sans focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    sound.playClick();
                    cmd.action();
                  }}
                  onMouseEnter={() => {
                    setSelectedIndex(idx);
                    sound.playHover();
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-purple-950/60 border border-purple-neon/60 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                      : 'text-slate-300 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-neon/20' : 'bg-white/5'}`}>
                      {cmd.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-orbitron font-bold">
                        {cmd.title}
                      </div>
                      <div className="text-[10px] font-mono text-purple-300/60 uppercase">
                        {cmd.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <kbd className="px-2 py-0.5 rounded bg-black/60 border border-purple-900/50 text-[10px] font-mono text-slate-400">
                        {cmd.shortcut}
                      </kbd>
                    )}
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-purple-neon' : 'opacity-0'}`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#06040d] border-t border-purple-950 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Navigate with ↑ ↓ • Press ↵ to select</span>
          <span className="text-purple-neon">ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
