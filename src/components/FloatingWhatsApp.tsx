import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import { Bot, Sparkles, X, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import { CyberButton } from './CyberButton';

export const FloatingWhatsApp: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const handleAiConsult = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!aiQuestion.trim() || isLoading) return;

    setIsLoading(true);
    setAiResponse(null);

    try {
      const response = await fetch('https://cleanapis.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer cc_gDLU0hQeuyvFPoRAmgz8mjukkywGveExxQ38JtdB5RbzrtKx`
        },
        body: JSON.stringify({
          model: 'claude-opus-5.5',
          messages: [
            {
              role: 'system',
              content: `You are 'Pasha AI', the friendly and official assistant for 'Pasha Dev' (Muhammad Mubashar).
NEVER mention that you are an AI developed by Anthropic, Claude, or any other company. You are exclusively Pasha AI.
Tone: Friendly, conversational, and highly helpful.
Rules:
1. If the user asks for prices, provide the exact prices based on the list below.
2. If the user doesn't know what they need or is confused, politely ask them about their budget and business goals so you can recommend the best solution.
3. Be persuasive and ensure no information is missing if they ask for details.

Pricing & Info:
- Landing pages: PKR 3,000+ (1-3 days).
- Business websites: PKR 8,000+ (5-8 days).
- Online stores / E-commerce: PKR 15,000+ (7-12 days).
- Custom Web Apps: PKR 20,000+ (12-20 days).
- Desktop Software (POS): PKR 15,000+ (7-12 days).
- Hosting & domain are separate from development costs.
- Tech Stack: Python (FastAPI/Django), React, TypeScript, Node.js, Tailwind CSS.

Keep responses concise but complete. End by encouraging them to connect directly with Mubashar on WhatsApp for finalizing details.`
            },
            {
              role: 'user',
              content: aiQuestion
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('API Error');
      }

      const data = await response.json();
      const reply = data.choices[0].message.content;
      setAiResponse(reply);
    } catch (error) {
      setAiResponse("System error connecting to AI. Please try reaching out directly on WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setAiQuestion(prompt);
  };

  return (
    <>
      {/* ── FLOATING DOCK ──────────────────────────────────────────── */}
      <aside
        aria-label="Direct Channels"
        className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-4 pointer-events-auto"
      >
        {/* ── AI BUTTON (Icon Only) ─────────────────────────────────────────── */}
        <button
          onClick={() => setIsAiModalOpen(true)}
          aria-label="Open Pasha AI Assistant"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full
            bg-[#100C22]/95 border border-purple-glow/50
            hover:border-purple-neon hover:bg-[#1A1035]
            shadow-[0_4px_24px_rgba(168,85,247,0.3),0_0_0_1px_rgba(168,85,247,0.1)]
            hover:shadow-[0_4px_32px_rgba(192,132,252,0.55),0_0_0_1px_rgba(192,132,252,0.2)]
            transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
        >
          {/* Animated pulse core */}
          <span className="absolute top-1 right-1 flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-neon opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-electric" />
          </span>

          <Bot className="w-5 h-5 text-purple-neon group-hover:rotate-12 transition-transform duration-300" />
        </button>

        {/* ── WHATSAPP BUTTON (Icon Only + Pointing Hand + Pulsing Glow) ───────────────────────────────────── */}
        <div className="relative flex items-center">
          {/* Floating Pointing Hand */}
          <div className="absolute right-[110%] animate-bounce-x pr-2 pointer-events-none">
            <span className="text-3xl drop-shadow-[0_0_10px_rgba(37,211,102,0.5)]">👉</span>
          </div>
          
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full
              bg-[#071712]/95 border border-[#25D366]/60
              hover:border-[#25D366] hover:bg-[#0C2018]
              shadow-[0_0_20px_rgba(37,211,102,0.4),0_0_0_1px_rgba(37,211,102,0.2)]
              hover:shadow-[0_0_35px_rgba(37,211,102,0.7),0_0_0_1px_rgba(37,211,102,0.4)]
              transition-all duration-300 hover:-translate-y-1 backdrop-blur-md animate-glow-whatsapp"
          >
            {/* Live indicator */}
            <span className="absolute top-1 right-1 flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
            </span>

            {/* Official WhatsApp icon — proper green circle logo */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full shadow-[0_0_12px_rgba(37,211,102,0.5)] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.8)] transition-all duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 175.2 175.2"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <circle cx="87.6" cy="87.6" r="87.6" fill="#25D366" />
                <path
                  d="M122.4 53.1c-9.1-9.1-21.2-14.1-34.1-14.1-26.6 0-48.2 21.6-48.2 48.2 0 8.5 2.2 16.8 6.4 24.1L40 135.2l24.5-6.4c7 3.8 14.9 5.8 22.9 5.8h0c26.6 0 48.2-21.6 48.2-48.2 0-12.9-5-25-14.2-34.3zm-34.1 74.1c-7.2 0-14.3-1.9-20.4-5.6l-1.5-.9-15.3 4 4.1-15-1-1.5c-4.1-6.4-6.2-13.8-6.2-21.4 0-22.2 18.1-40.2 40.3-40.2 10.8 0 20.9 4.2 28.5 11.8 7.6 7.6 11.7 17.7 11.7 28.5.1 22.2-18 40.3-40.2 40.3zm22.1-30.1c-1.2-.6-7.1-3.5-8.2-3.9-1.1-.4-1.9-.6-2.7.6-.8 1.2-3.1 3.9-3.8 4.7-.7.8-1.4.9-2.6.3-1.2-.6-5-1.8-9.5-5.9-3.5-3.1-5.9-7-6.6-8.2-.7-1.2-.1-1.8.5-2.4.6-.6 1.2-1.4 1.8-2.1.6-.7.8-1.2 1.2-2 .4-.8.2-1.5-.1-2.1-.3-.6-2.7-6.5-3.7-8.9-1-2.3-2-2-2.7-2-.7 0-1.5-.1-2.3-.1-.8 0-2.1.3-3.2 1.5-1.1 1.2-4.2 4.1-4.2 10s4.3 11.6 4.9 12.4c.6.8 8.5 13 20.6 18.2 2.9 1.2 5.1 2 6.9 2.5 2.9.9 5.5.8 7.6.5 2.3-.3 7.1-2.9 8.1-5.7 1-2.8 1-5.2.7-5.7-.3-.4-1.1-.7-2.3-1.3z"
                  fill="#fff"
                />
              </svg>
            </span>
          </a>
        </div>
      </aside>

      {/* ── AI SYSTEM MODAL ─────────────────────────────────────────── */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D0B1A] border border-purple-neon/40 p-6 sm:p-7 shadow-[0_0_60px_rgba(168,85,247,0.35),0_0_0_1px_rgba(168,85,247,0.1)] space-y-5">

            {/* Glow header line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-neon/60 to-transparent" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-glow/30 to-purple-dark/20 border border-purple-neon/40 flex items-center justify-center text-purple-neon shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <Bot className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-white">
                    Pasha AI Consultant
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-neon animate-pulse" />
                    <span className="text-[9px] font-mono text-purple-neon/70 tracking-wider uppercase">
                      SYSTEM_ACTIVE // LIVE
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsAiModalOpen(false);
                  setAiResponse(null);
                  setAiQuestion('');
                }}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="space-y-2.5">
              <div className="text-[10px] font-orbitron font-bold text-purple-300/60 uppercase tracking-widest">
                Quick Consultations
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'What does an online store cost?',
                  'How long does a website take?',
                  'Best hosting for my business?',
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="px-3 py-1.5 rounded-xl bg-[#151228] border border-purple-900/50
                      text-slate-300 hover:text-purple-neon hover:border-purple-neon/40
                      text-[11px] font-sans transition-all duration-200 hover:bg-purple-950/30 text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAiConsult} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  disabled={isLoading}
                  placeholder="Ask about project scopes, stacks, or estimates..."
                  className="w-full px-4 py-3 rounded-xl bg-[#120F24] border border-purple-900/60
                    text-white text-xs font-sans focus:outline-none focus:border-purple-neon/60
                    focus:shadow-[0_0_0_1px_rgba(192,132,252,0.2)] pr-12 placeholder-slate-600 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !aiQuestion.trim()}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-lg
                    bg-purple-glow/20 hover:bg-purple-neon text-purple-neon hover:text-slate-950
                    border border-purple-neon/30 hover:border-purple-neon transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
            </form>

            {/* Response Display */}
            {aiResponse && (
               <div className="p-4 rounded-xl bg-[#140F28] border border-purple-glow/30 space-y-3 shadow-[inset_0_0_20px_rgba(168,85,247,0.08)]">
                <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-purple-neon">
                  <Sparkles className="w-3.5 h-3.5 text-purple-electric" />
                  <span>AI Recommendation</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed whitespace-pre-wrap">
                  {aiResponse}
                </p>
                <div className="pt-2 border-t border-purple-900/30">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-bold text-[#25D366] hover:underline flex items-center gap-1 w-fit"
                  >
                    <span>Connect directly with Mubashar on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-1">
              <CyberButton
                size="sm"
                fullWidth
                onClick={() => {
                  window.open(whatsappUrl, '_blank');
                  setIsAiModalOpen(false);
                }}
              >
                <span>Discuss on WhatsApp</span>
              </CyberButton>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
