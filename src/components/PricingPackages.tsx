import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/mockData';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string, price: number) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-16 bg-[#0a0c12] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#25F4EE] uppercase tracking-wider">
            Clear, Predictable Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
            Choose Your TikTok Growth Package
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            No surprise invoices. Fixed scopes with 100% money-back satisfaction guarantees.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                pkg.popular
                  ? 'bg-[#151926] border-2 border-[#25F4EE] shadow-2xl shadow-[#25F4EE]/10 scale-100 md:-translate-y-2'
                  : 'bg-[#12141c] border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] text-black font-extrabold text-[10px] uppercase font-mono px-3 py-1 rounded-full shadow-md tracking-wider">
                  ★ MOST POPULAR FOR BRANDS
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {pkg.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-white/10">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    / {pkg.billingPeriod}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    What's Included:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${pkg.popular ? 'text-[#25F4EE]' : 'text-emerald-400'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <div className="text-[11px] text-slate-400 italic mb-3 text-center">
                  Ideal for: {pkg.idealFor}
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.name, pkg.price)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#FE2C55] hover:bg-[#e02449] text-white shadow-lg shadow-[#FE2C55]/30'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
