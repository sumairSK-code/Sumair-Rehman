import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { FREELANCE_CASE_STUDIES } from '../data/mockData';

interface CaseStudiesSectionProps {
  onOpenHireModal: (caseStudyTitle?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenHireModal }) => {
  const [activeStudy, setActiveStudy] = useState(0);

  const study = FREELANCE_CASE_STUDIES[activeStudy];

  return (
    <section id="case-studies" className="py-16 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-[#25F4EE] uppercase tracking-wider">
            Proven Client Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
            Real Case Studies & Growth Breakdowns
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            See how targeted TikTok Shop infrastructure and high-ROAS video editing transform revenue.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#12141c] p-1.5 rounded-2xl border border-white/10 flex items-center gap-2">
            {FREELANCE_CASE_STUDIES.map((cs, index) => (
              <button
                key={cs.id}
                onClick={() => setActiveStudy(index)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeStudy === index
                    ? 'bg-white text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cs.client}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Spotlight */}
        <div className="bg-[#12141c] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Media Column */}
            <div className="lg:col-span-5 relative bg-black min-h-[320px] flex flex-col justify-end p-6">
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FE2C55] text-white inline-block">
                  {study.industry}
                </span>

                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <div className="text-xs text-slate-400 font-mono mb-1">Impact Metric</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {study.resultsHeadline}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">{study.gmvGrowth} GMV</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-[#25F4EE] font-bold">{study.roas} ROAS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-400">
                  <span className="text-[#25F4EE] font-bold">{study.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>Full Project Delivery</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading mb-4 leading-tight">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6 text-xs text-slate-300">
                  <div>
                    <h4 className="font-bold text-white text-[11px] uppercase tracking-wider font-mono mb-1 text-[#FE2C55]">
                      The Challenge:
                    </h4>
                    <p className="leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-[11px] uppercase tracking-wider font-mono mb-1 text-[#25F4EE]">
                      Sumair's Solution:
                    </h4>
                    <p className="leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-6">
                  <h4 className="font-mono text-xs font-bold text-white mb-2 uppercase tracking-wider">
                    Key Deliverables & Milestones:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.keyOutcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="bg-[#171b26] rounded-xl p-3.5 border-l-2 border-[#FE2C55] text-xs text-slate-200 italic mb-6">
                  {study.testimonialQuote}
                  <span className="block not-italic font-bold text-white text-[11px] mt-1">
                    — Upwork Verified Client Feedback (5.0 ★)
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => onOpenHireModal(study.title)}
                  className="px-5 py-2.5 bg-[#FE2C55] hover:bg-[#e02449] active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#FE2C55]/25 flex items-center gap-2 cursor-pointer"
                >
                  <span>Replicate These Results for Your Brand</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
