import React from 'react';
import { Store, Video, Search, Users, Sparkles, BarChart3, Check, ArrowRight, Clock, DollarSign } from 'lucide-react';
import { FREELANCE_SERVICES } from '../data/mockData';
import { TikTokShopIcon } from './TikTokShopIcon';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Store':
        return <Store className="w-5 h-5 text-[#25F4EE]" />;
      case 'Video':
        return <Video className="w-5 h-5 text-[#FE2C55]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#25F4EE]" />;
      default:
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TikTokShopIcon size={18} />
            <span className="text-xs font-mono font-bold text-[#25F4EE] uppercase tracking-wider">
              Sumair's Specialized Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
            End-to-End TikTok Shop & Paid Ads Solutions
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Helping brands increase sales, improve advertising performance, and achieve sustainable growth through data-driven strategies.
          </p>
        </div>

        {/* 6 Services Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREELANCE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#12141c] border border-white/10 hover:border-[#25F4EE]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  {srv.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FE2C55]/20 text-[#FE2C55] border border-[#FE2C55]/30">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white font-heading mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {srv.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono font-semibold text-slate-400 block uppercase tracking-wider">
                    What You Get:
                  </span>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#25F4EE] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{srv.turnaroundTime}</span>
                  </div>
                  <div className="text-base font-black text-white font-mono mt-0.5">
                    Starts at ${srv.startingPrice}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(srv.title)}
                  className="px-3.5 py-1.5 bg-white/10 hover:bg-[#FE2C55] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Inquire</span>
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
