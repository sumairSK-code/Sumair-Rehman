import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { SUMAIR_PROFILE } from '../data/mockData';
import { TikTokShopIcon } from './TikTokShopIcon';

interface ScopeOption {
  id: string;
  name: string;
  category: string;
  price: number;
  days: number;
  description: string;
}

const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: 'setup',
    name: 'TikTok Shop Setup & Management Launch',
    category: 'Store Management',
    price: 199,
    days: 3,
    description: 'Seller Center setup, tax registration, warehouse routing, category approval, and initial catalog.'
  },
  {
    id: 'ads',
    name: 'TikTok, Facebook & Instagram Ads Setup & Testing',
    category: 'Paid Media',
    price: 299,
    days: 3,
    description: 'Multi-platform campaign setup, audience targeting, Spark Ads, and continuous ROAS optimization.'
  },
  {
    id: 'seo',
    name: 'Product Listing & SEO Optimization (Up to 10 Products)',
    category: 'Marketplace SEO',
    price: 149,
    days: 2,
    description: 'High-intent keyword titles, conversion descriptions, and algorithm search indexing.'
  },
  {
    id: 'affiliates',
    name: 'Influencer & Creator Affiliate Outreach Campaign',
    category: 'Affiliate Marketing',
    price: 350,
    days: 7,
    description: 'Pitching 50+ TikTok creators, sample dispatch pipeline, and follow-up scripts for viral videos.'
  },
  {
    id: 'ugc',
    name: 'UGC Content & Creative Video Strategy (5 Winning Ads)',
    category: 'Creative Strategy',
    price: 249,
    days: 2,
    description: '3-second thumb-stopping hooks, CapCut/Premiere pacing, animated captions, and sound sync.'
  },
  {
    id: 'analytics',
    name: 'E-Commerce Growth & Performance Analytics Retainer',
    category: 'Scale & Analytics',
    price: 650,
    days: 30,
    description: 'Monthly store management, conversion funnel audits, margin optimization, and weekly reporting.'
  }
];

interface ProjectCalculatorProps {
  onProceedWithScope: (selectedNames: string[], totalPrice: number) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onProceedWithScope }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['setup', 'ugc']);

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedOptions = SCOPE_OPTIONS.filter((opt) => selectedIds.includes(opt.id));
  const totalPrice = selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
  const maxDays = selectedOptions.length > 0 ? Math.max(...selectedOptions.map((o) => o.days)) : 0;

  const handleSendScope = () => {
    const names = selectedOptions.map((o) => o.name);
    onProceedWithScope(names, totalPrice);
  };

  return (
    <section id="calculator" className="py-16 bg-[#0a0c12] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TikTokShopIcon size={18} />
            <span className="text-xs font-mono font-bold text-[#25F4EE] uppercase tracking-wider">
              Transparent Pricing Estimator
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
            Build Your Custom Growth Project
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Select the exact solutions you need from Sumair for an immediate price estimate and delivery timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Selection (Left) */}
          <div className="lg:col-span-7 space-y-3">
            {SCOPE_OPTIONS.map((opt) => {
              const isSelected = selectedIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#151926] border-[#25F4EE] shadow-md shadow-[#25F4EE]/10'
                      : 'bg-[#12141c] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-[#25F4EE] text-black font-bold'
                        : 'border border-white/20 bg-black/40'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {opt.name}
                      </h4>
                      <span className="text-sm font-black text-white font-mono shrink-0">
                        ${opt.price}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-1">
                      {opt.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono mt-2">
                      <span>{opt.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>~{opt.days} {opt.days === 1 ? 'day' : 'days'} delivery</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-time Summary Card (Right) */}
          <div className="lg:col-span-5 bg-[#12141c] border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl sticky top-24">
            <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
              <Calculator className="w-5 h-5 text-[#FE2C55]" />
              <h3 className="font-extrabold text-base text-white font-heading">
                Estimated Project Scope
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {selectedOptions.length === 0 ? (
                <div className="text-xs text-slate-400 italic py-4 text-center">
                  Select at least one deliverable from the left to calculate your estimate.
                </div>
              ) : (
                selectedOptions.map((opt) => (
                  <div key={opt.id} className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 truncate max-w-[200px]">
                      {opt.name}
                    </span>
                    <span className="font-mono text-white font-bold ml-2">
                      ${opt.price}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Estimated Turnaround:</span>
                <span className="font-mono text-[#25F4EE] font-bold">
                  {maxDays > 0 ? `${maxDays} Business Days` : 'Instant'}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-sm font-bold text-white pt-2 border-t border-white/5">
                <span>Total Scope Investment:</span>
                <span className="font-mono text-2xl font-black text-[#FE2C55]">
                  ${totalPrice}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={handleSendScope}
                disabled={selectedOptions.length === 0}
                className="w-full py-3.5 bg-[#FE2C55] hover:bg-[#e02449] active:scale-98 text-white text-xs font-black rounded-xl transition-all shadow-lg shadow-[#FE2C55]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
              >
                <span>Submit Scope to Sumair</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SUMAIR_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 font-mono"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Discuss on WhatsApp (+92 335 1031333)</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Invoicing or Upwork Escrow Protection Available</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
