import React, { useState } from 'react';
import { X, ArrowLeft, Check, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/config';
import { CyberButton } from './CyberButton';
import { sound } from '../utils/audio';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedData?: {
    packageTitle?: string;
    projectType?: string;
    pages?: string;
    features?: string[];
    estimateRange?: string;
  } | null;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedData,
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Derive initial values from preselectedData
  const initialProjectType = preselectedData?.projectType || preselectedData?.packageTitle || 'Business Website';
  const initialFeatures = (preselectedData?.features && preselectedData.features.length > 0)
    ? preselectedData.features
    : ['WhatsApp Integration', 'Contact Form'];
  const initialDescription = preselectedData?.estimateRange
    ? `Calculator Estimate: ${preselectedData.estimateRange} for ${preselectedData.pages || 'selected scope'}.`
    : '';

  // Form State
  const [projectType, setProjectType] = useState<string>(initialProjectType);
  const [budget, setBudget] = useState<string>('PKR 10k–20k');
  const [features, setFeatures] = useState<string[]>(initialFeatures);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: '',
    email: '',
    description: initialDescription,
    deadline: 'Within 2 weeks',
  });

  if (!isOpen) return null;

  const toggleFeature = (feat: string) => {
    sound.playClick();
    setFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    setIsSubmitted(true);

    const message = `*NEW PROJECT INQUIRY — PASHA DEV*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Business:* ${formData.businessName || 'Not provided'}\n` +
      `*WhatsApp:* ${formData.whatsapp || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Project Type:* ${projectType}\n` +
      `*Budget:* ${budget}\n` +
      `*Features:* ${features.join(', ') || 'None selected'}\n` +
      `*Deadline:* ${formData.deadline}\n` +
      `*Details:* ${formData.description || 'No additional details'}`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank');
  };

  const resetAndClose = () => {
    sound.playClick();
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D0B1A] border border-purple-neon/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.35)] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 text-purple-neon" />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-purple-glow/20 border border-purple-neon/60 text-purple-neon flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(192,132,252,0.5)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight">
                Inquiry Sent to WhatsApp!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-sm mx-auto leading-relaxed">
                Your project scope has been compiled. I will review your requirements and respond with a clear breakdown and roadmap.
              </p>
            </div>

            <CyberButton size="sm" onClick={resetAndClose}>
              <span>Done</span>
            </CyberButton>
          </div>
        ) : (
          /* Multi-step Inquiry Form */
          <div>
            {/* Step Progress Header */}
            <div className="mb-6 pb-4 border-b border-purple-900/40 flex items-center justify-between">
              <div>
                <span className="text-xs font-heading text-purple-neon font-black">
                  STEP 0{step} — 04
                </span>
                <h3 className="text-xl font-heading font-black text-white tracking-tight mt-0.5">
                  {step === 1 && 'What are you building?'}
                  {step === 2 && "What's your approximate budget?"}
                  {step === 3 && 'What capabilities do you need?'}
                  {step === 4 && 'How can I contact you?'}
                </h3>
              </div>
            </div>

            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="space-y-3">
                {[
                  'Business Website',
                  'Landing Page (1 Page)',
                  'Online Store (E-Commerce)',
                  'Custom Web Application (Python/React)',
                  'Admin Dashboard / Portal',
                  'Desktop Software (POS / Inventory)',
                  'Website Redesign & Speed Fix',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setProjectType(type);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-heading font-semibold transition-all flex items-center justify-between ${
                      projectType === type
                        ? 'border-purple-neon bg-purple-glow/30 text-white font-black shadow-[0_0_15px_rgba(192,132,252,0.4)]'
                        : 'border-purple-950/60 bg-[#121024] text-slate-300 hover:border-purple-800 hover:bg-[#16132C]'
                    }`}
                  >
                    <span>{type}</span>
                    {projectType === type && <Check className="w-4 h-4 text-purple-neon" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
              <div className="space-y-3">
                {[
                  'Under PKR 5,000',
                  'PKR 5,000 – PKR 10,000',
                  'PKR 10,000 – PKR 20,000',
                  'PKR 20,000 – PKR 40,000',
                  'PKR 40,000+',
                  'Not sure / Need consultation',
                ].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setBudget(b);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-heading font-semibold transition-all flex items-center justify-between ${
                      budget === b
                        ? 'border-purple-neon bg-purple-glow/30 text-white font-black shadow-[0_0_15px_rgba(192,132,252,0.4)]'
                        : 'border-purple-950/60 bg-[#121024] text-slate-300 hover:border-purple-800 hover:bg-[#16132C]'
                    }`}
                  >
                    <span>{b}</span>
                    {budget === b && <Check className="w-4 h-4 text-purple-neon" />}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Features */}
            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'WhatsApp Integration',
                  'Inquiry Contact Form',
                  'Google Maps Location',
                  'User Authentication',
                  'Admin Dashboard',
                  'Payment Integration (COD/Card)',
                  'Custom Database Modeling',
                  'External API Integration',
                  'Thermal Receipt Printing',
                  'AI Chatbot / LLM',
                ].map((feat) => {
                  const isChecked = features.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-xl border text-left text-xs font-heading font-semibold transition-all flex items-center justify-between gap-2 ${
                        isChecked
                          ? 'border-purple-neon bg-purple-glow/20 text-white'
                          : 'border-purple-950/60 bg-[#121024] text-slate-400 hover:border-purple-800'
                      }`}
                    >
                      <span className="truncate">{feat}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-purple-neon border-purple-neon text-slate-950'
                            : 'border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-purple-neon uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ali Ahmed"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121024] border border-purple-900/60 text-white text-xs font-sans focus:outline-none focus:border-purple-neon"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-purple-neon uppercase mb-1">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Apex Travel"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121024] border border-purple-900/60 text-white text-xs font-sans focus:outline-none focus:border-purple-neon"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-purple-neon uppercase mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121024] border border-purple-900/60 text-white text-xs font-sans focus:outline-none focus:border-purple-neon"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-heading font-semibold text-purple-neon uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121024] border border-purple-900/60 text-white text-xs font-sans focus:outline-none focus:border-purple-neon"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-semibold text-purple-neon uppercase mb-1">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    placeholder="Briefly describe what your business does and any specific pages or features you have in mind..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121024] border border-purple-900/60 text-white text-xs font-sans focus:outline-none focus:border-purple-neon resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-semibold text-purple-neon uppercase mb-1">
                    Target Deadline
                  </label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121024] border border-purple-900/60 text-white text-xs font-sans focus:outline-none focus:border-purple-neon"
                  >
                    <option value="Urgent (1-3 days)">Urgent (1 to 3 days)</option>
                    <option value="Standard (1-2 weeks)">Standard (1 to 2 weeks)</option>
                    <option value="Flexible (1 month+)">Flexible (1 month+)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <CyberButton size="md" fullWidth type="submit">
                    <span>Submit Project Inquiry</span>
                  </CyberButton>
                </div>
              </form>
            )}

            {/* Navigation Buttons (Back / Next) */}
            {step < 4 && (
              <div className="mt-8 pt-4 border-t border-purple-900/40 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setStep(step - 1);
                    }}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-heading font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <CyberButton 
                  size="sm" 
                  onClick={() => {
                    sound.playClick();
                    setStep(step + 1);
                  }}
                >
                  <span>Continue</span>
                </CyberButton>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
