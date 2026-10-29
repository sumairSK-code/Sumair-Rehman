import React from 'react';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MessageCircle, Linkedin, Mail, ExternalLink, Image as ImageIcon, Check, Camera } from 'lucide-react';
import { TikTokShopIcon } from './TikTokShopIcon';
import { ProfileData } from '../types';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenHireModal: (service?: string) => void;
  onOpenScreenshot: () => void;
  onOpenPosterModal: () => void;
  onOpenEditModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenHireModal,
  onOpenScreenshot,
  onOpenPosterModal,
  onOpenEditModal,
}) => {
  const quickServicesList = [
    'TikTok Shop Setup & Management',
    'TikTok, Facebook & Instagram Ads',
    'Product Listing & SEO Optimization',
    'Influencer & Affiliate Marketing',
    'UGC Content & Creative Strategy',
    'E-Commerce Growth & Performance Analytics'
  ];

  return (
    <section id="about" className="relative pt-8 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#25F4EE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FE2C55]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Exact Bio & Text Requested by User */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Verified Freelance Kicker with TikTok Shop Icon */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300 mb-3">
              <span className="flex items-center gap-1.5 bg-[#FE2C55]/15 border border-[#FE2C55]/30 text-white font-semibold px-2.5 py-1 rounded-full">
                <TikTokShopIcon size={14} />
                <span>TikTok Shop Expert</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-[#25F4EE] font-mono font-semibold">
                {profile.location}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-400 font-mono font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                5.0 ★ Rated
              </span>
            </div>

            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-[1.15] mb-4 text-balance">
              {profile.fullName} |{' '}
              <span className="bg-gradient-to-r from-[#25F4EE] via-white to-[#FE2C55] bg-clip-text text-transparent">
                {profile.headline}
              </span>
            </h1>

            {/* Exact Bio Paragraphs */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              <p>
                I help brands grow their TikTok Shop and e-commerce businesses through strategic store management, performance marketing, and conversion-focused optimization.
              </p>
              <p className="text-slate-300">
                With <strong>{profile.experience}</strong>, I specialize in TikTok Shop management, TikTok & Meta Ads, product listing optimization, influencer and affiliate marketing, UGC content, and private-label e-commerce.
              </p>
            </div>

            {/* Quick Services Snapshot */}
            <div className="bg-[#12141c] border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 max-w-2xl shadow-lg">
              <span className="text-xs font-mono font-bold text-[#25F4EE] uppercase tracking-wider block mb-3">
                My Core Services:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {quickServicesList.map((srv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#FE2C55] shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement & Closing Statement */}
            <div className="mb-6 max-w-2xl text-xs sm:text-sm text-slate-300 italic border-l-2 border-[#25F4EE] pl-3.5 py-1">
              "My goal is to help brands increase sales, improve advertising performance, and achieve sustainable growth through data-driven strategies."
              <span className="block not-italic font-extrabold text-white text-sm sm:text-base mt-2 font-heading text-[#25F4EE]">
                Let’s grow your brand together!
              </span>
            </div>

            {/* Direct Contact Buttons (WhatsApp, LinkedIn, Email, Hire) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-600/30 flex items-center gap-2 font-mono cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {profile.phone}</span>
              </a>

              <a
                href={`https://${profile.linkedinUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/50 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 font-mono cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 font-mono cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#FE2C55]" />
                <span>{profile.email}</span>
              </a>

              <button
                onClick={() => onOpenHireModal()}
                className="px-5 py-2.5 bg-[#FE2C55] hover:bg-[#e02449] active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#FE2C55]/30 flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
              >
                <span>Book Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: High Quality Photo of Sumair with Change Photo Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[390px] rounded-3xl overflow-hidden bg-[#12141c] border-2 border-white/15 shadow-2xl shadow-black/80 flex flex-col group">
              
              {/* Photo of Sumair */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <img
                  src={profile.photoUrl}
                  alt={`${profile.fullName} - TikTok Shop Expert`}
                  className="w-full h-full object-cover object-top filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* TikTok Shop Badge Over Photo */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#25F4EE]/40 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <TikTokShopIcon size={18} />
                  <span className="text-xs font-bold text-white font-mono">
                    TikTok Shop Expert
                  </span>
                </div>

                {/* Change Photo Quick Overlay Button */}
                <button
                  onClick={onOpenEditModal}
                  className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white backdrop-blur-md border border-white/25 px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg text-[11px] font-semibold transition-all cursor-pointer opacity-90 hover:opacity-100"
                  title="Upload or change this photo"
                >
                  <Camera className="w-3.5 h-3.5 text-[#25F4EE]" />
                  <span>Change Photo</span>
                </button>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 bg-black/85 backdrop-blur-md rounded-2xl border border-white/15">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h4 className="font-extrabold text-white text-base font-heading">
                        {profile.fullName}
                      </h4>
                      <p className="text-[11px] text-[#25F4EE] font-mono">
                        {profile.location} · {profile.experience}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-400 font-mono block">
                        ● Available Now
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Response &lt; 2 hrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick-Action Bar for Poster & Upwork Proof */}
              <div className="p-3 bg-[#0d0f17] border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={onOpenPosterModal}
                  className="flex-1 py-2 px-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#25F4EE]" />
                  <span>Official Flyer</span>
                </button>

                <button
                  onClick={onOpenScreenshot}
                  className="flex-1 py-2 px-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Upwork Reviews</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
