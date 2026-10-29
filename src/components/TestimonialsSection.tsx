import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { VERIFIED_TESTIMONIALS } from '../data/mockData';

interface TestimonialsSectionProps {
  onOpenScreenshot: () => void;
  onOpenHireModal: (service?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenScreenshot,
  onOpenHireModal,
}) => {
  return (
    <section id="reviews" className="py-16 bg-[#0a0c12] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-bold text-[#25F4EE] uppercase tracking-wider">
                100% Verified Upwork Client History
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
              What Brand Owners Say About Sumair
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Real, unedited client feedback from completed TikTok Shop launches and creative editing contracts.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenScreenshot}
              className="px-4 py-2 bg-[#25F4EE]/10 hover:bg-[#25F4EE]/20 border border-[#25F4EE]/30 text-[#25F4EE] hover:text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Inspect Upwork Screenshot Proof</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#12141c] border border-white/10 hover:border-[#25F4EE]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Project Title & Dates */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-slate-400">
                    {t.dates}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded text-amber-400 text-xs font-mono font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>5.0</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-white font-heading mb-2 leading-snug">
                  {t.projectTitle}
                </h3>

                {/* Amount and pricing terms */}
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 pb-3 border-b border-white/5 font-mono">
                  <span className="text-white font-bold">{t.amount}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.pricingType}</span>
                  {t.hoursLogged && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{t.hoursLogged} hours ({t.hourlyRate})</span>
                    </>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-200 italic leading-relaxed mb-4">
                  "{t.reviewText}"
                </p>

                {/* Freelancer's response if available */}
                {t.freelancerResponse && (
                  <div className="bg-white/5 rounded-xl p-3 border-l-2 border-[#25F4EE] mb-4 text-[11px] text-slate-300">
                    <span className="font-semibold text-[#25F4EE] block mb-0.5">
                      Freelancer's Response:
                    </span>
                    <p className="italic">{t.freelancerResponse}</p>
                  </div>
                )}
              </div>

              {/* Endorsements pills */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block mb-2 font-mono">
                  Endorsed by Client:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {t.endorsements.map((end, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-slate-300 font-medium"
                    >
                      {end}
                    </span>
                  ))}
                </div>

                {t.verifiedScreenshot && (
                  <button
                    onClick={onOpenScreenshot}
                    className="mt-4 w-full py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Upwork Contract Screenshot</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#171b26] via-[#12141c] to-[#171b26] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white font-heading">
              Ready to achieve the same 5-star results for your TikTok Shop?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Direct communication, zero fluff, and full accountability from day one.
            </p>
          </div>
          <button
            onClick={() => onOpenHireModal()}
            className="px-6 py-3 bg-[#FE2C55] hover:bg-[#e02449] active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#FE2C55]/25 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Your Project with Sumair
          </button>
        </div>

      </div>
    </section>
  );
};
