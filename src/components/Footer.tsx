import React from 'react';
import { ShieldCheck, Mail, Calendar, CheckCircle2, Star, MessageCircle, Linkedin, ExternalLink, Edit3 } from 'lucide-react';
import { ProfileData } from '../types';
import { TikTokShopIcon } from './TikTokShopIcon';

interface FooterProps {
  profile: ProfileData;
  onOpenHireModal: () => void;
  onOpenScreenshot: () => void;
  onOpenPosterModal: () => void;
  onOpenEditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenHireModal,
  onOpenScreenshot,
  onOpenPosterModal,
  onOpenEditModal,
}) => {
  return (
    <footer className="bg-[#08090e] border-t border-white/10 pt-12 pb-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Strips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs">5.0 ★ Rated Freelancer</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Top-rated Upwork feedback across client contracts.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs">{profile.experience}</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">TikTok Shop management, TikTok & Meta Ads, UGC.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs">Direct WhatsApp Chat</h5>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 font-mono hover:underline mt-0.5 block"
              >
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#FE2C55]" />
            </div>
            <div>
              <h5 className="font-bold text-white text-xs">Direct Email</h5>
              <a
                href={`mailto:${profile.email}`}
                className="text-[11px] text-slate-300 font-mono hover:underline mt-0.5 block"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Brand & Social Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={profile.photoUrl}
                alt={profile.fullName}
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#25F4EE]"
              />
              <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
                <TikTokShopIcon size={12} />
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm font-heading flex items-center gap-1.5">
                {profile.fullName}
                <span className="text-[11px] text-[#25F4EE] font-mono">
                  · {profile.headline}
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                {profile.location} · {profile.experience}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-300">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-mono font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://${profile.linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#0077b5] hover:text-white font-mono"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenPosterModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Official Flyer
            </button>

            <button
              onClick={onOpenScreenshot}
              className="text-amber-400 hover:underline cursor-pointer flex items-center gap-1"
            >
              <Star className="w-3 h-3 fill-amber-400" />
              <span>Upwork Proof (5.0★)</span>
            </button>

            <button
              onClick={onOpenEditModal}
              className="text-[#25F4EE] hover:underline cursor-pointer flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit Details</span>
            </button>

            <button
              onClick={onOpenHireModal}
              className="px-3.5 py-1.5 bg-[#FE2C55] text-white font-bold rounded-lg hover:bg-[#e02449] cursor-pointer"
            >
              Hire Sumair
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>
            © {new Date().getFullYear()} {profile.fullName}. Freelance {profile.headline}.
          </span>
          <div className="flex items-center gap-3 font-mono">
            <span>WhatsApp: {profile.phone}</span>
            <span>·</span>
            <span>{profile.email}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
