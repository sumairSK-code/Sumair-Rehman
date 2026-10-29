import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Calendar, Sparkles, MessageCircle, Linkedin, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProjectInquiry } from '../types';
import { SUMAIR_PROFILE } from '../data/mockData';
import { TikTokShopIcon } from './TikTokShopIcon';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBudget?: number;
  initialScopeItems?: string[];
  onSubmitInquiry: (inquiry: ProjectInquiry) => void;
}

export const HireModal: React.FC<HireModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialBudget,
  initialScopeItems = [],
  onSubmitInquiry,
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : initialScopeItems.length > 0 ? initialScopeItems : ['TikTok Shop Setup & Management']
  );
  const [budget, setBudget] = useState(initialBudget ? `$${initialBudget}` : '$300 - $600');
  const [timeline, setTimeline] = useState('Within 48 Hours (ASAP)');
  const [message, setMessage] = useState(
    initialScopeItems.length > 0
      ? `Hi Sumair, I would like to get started on the following scope:\n- ${initialScopeItems.join('\n- ')}\nEstimated price: $${initialBudget || 0}`
      : ''
  );

  const availableServices = [
    'TikTok Shop Setup & Management',
    'TikTok, Facebook & Instagram Ads',
    'Product Listing & SEO Optimization',
    'Influencer & Affiliate Marketing',
    'UGC Content & Creative Strategy',
    'E-Commerce Growth & Performance Analytics'
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newInquiry: ProjectInquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      brandName,
      storeUrl,
      selectedServices,
      budget,
      timeline,
      message,
      createdAt: 'Just now'
    };

    onSubmitInquiry(newInquiry);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#12141c] border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with Photo & TikTok Shop Icon */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={SUMAIR_PROFILE.photoUrl}
                alt="Sumair Rehman"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#25F4EE]"
              />
              <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
                <TikTokShopIcon size={12} />
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white font-heading">
                {submitted ? 'Inquiry Sent to Sumair Rehman' : 'Work With Sumair Rehman'}
              </h3>
              <p className="text-xs text-slate-400">
                TikTok Shop & E-Commerce Growth Expert · Direct WhatsApp or Email
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Contact Header Strip */}
        <div className="bg-[#171b26] px-5 py-2.5 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <a
            href={SUMAIR_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-mono font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: {SUMAIR_PROFILE.phone}</span>
          </a>

          <a
            href={`https://${SUMAIR_PROFILE.linkedinUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#0077b5] hover:text-white font-mono"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn Profile</span>
          </a>

          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
            {SUMAIR_PROFILE.email}
          </span>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-extrabold text-white font-heading">
              Thank You, {name}!
            </h4>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your inquiry has been received. Sumair will reply to <span className="text-[#25F4EE]">{email}</span> and review your store requirements within 2 hours.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 text-left border border-white/10 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Direct WhatsApp:</span>
                <a
                  href={SUMAIR_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 font-bold"
                >
                  {SUMAIR_PROFILE.phone}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direct Email:</span>
                <span className="font-mono text-white">{SUMAIR_PROFILE.email}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Peter James"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                  Brand or Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Volta Audio / GlowLab"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                  Website / Shopify / TikTok Link
                </label>
                <input
                  type="text"
                  placeholder="https://yourstore.com"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>
            </div>

            {/* Services of Interest */}
            <div>
              <label className="block text-[11px] text-slate-300 font-semibold mb-1.5">
                Services Needed:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableServices.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => toggleService(srv)}
                    className={`p-2 rounded-xl border text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                      selectedServices.includes(srv)
                        ? 'bg-[#25F4EE]/15 border-[#25F4EE] text-white font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="truncate pr-1 text-[11px]">{srv}</span>
                    {selectedServices.includes(srv) && (
                      <span className="w-2 h-2 rounded-full bg-[#25F4EE] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                  Budget Expectation
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                >
                  <option value="$150 - $300">$150 - $300 (Starter)</option>
                  <option value="$300 - $600">$300 - $600 (Growth)</option>
                  <option value="$600 - $1,500">$600 - $1,500 (Scale)</option>
                  <option value="$1,500+/mo">$1,500+/mo (Full Retainer)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                  Project Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                >
                  <option value="Within 48 Hours (ASAP)">Within 48 Hours (ASAP)</option>
                  <option value="Within 1 Week">Within 1 Week</option>
                  <option value="Next 2 - 4 Weeks">Next 2 - 4 Weeks</option>
                  <option value="Long Term Ongoing">Long Term Ongoing</option>
                </select>
              </div>
            </div>

            {/* Message Details */}
            <div>
              <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                Project Notes / Goals
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your current store setup, product niche, or questions for Sumair..."
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#FE2C55] hover:bg-[#e02449] active:scale-98 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-[#FE2C55]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry to Sumair Rehman</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Working Globally · Upwork Contract or Direct Invoicing</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
