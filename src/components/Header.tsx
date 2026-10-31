import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, MessageSquare, ShieldCheck, Mail, Phone, ExternalLink, Share2, Edit3 } from 'lucide-react';
import { TikTokShopIcon } from './TikTokShopIcon';
import { ProfileData } from '../types';

interface HeaderProps {
  profile: ProfileData;
  onOpenHireModal: (service?: string) => void;
  onOpenScreenshot: () => void;
  onOpenPosterModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenHireModal,
  onOpenScreenshot,
  onOpenPosterModal,
  activeSection,
  setActiveSection,
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0c12]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
      
      {/* Top Banner with Direct WhatsApp & Global Status */}
      <div className="bg-gradient-to-r from-[#FE2C55] via-[#a81c3c] to-[#010101] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              FREELANCER | WORKING GLOBALLY:
            </span>
            <span className="text-yellow-200 font-semibold hidden sm:inline">
              Available for TikTok Shop Management & Performance Ads
            </span>
            <span aria-hidden="true" className="opacity-50 hidden sm:inline">·</span>
            <span className="text-white hidden md:inline">{profile.experience}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono shrink-0">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>WhatsApp: {profile.phone}</span>
            </a>

            <button
              onClick={onOpenScreenshot}
              className="hidden lg:flex items-center gap-1 text-yellow-300 hover:text-white underline cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Upwork 5.0★ Proof</span>
            </button>
          </div>
        </div>
      </div>

      {/* Strict 3-Zone Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark with TikTok Shop Icon & Photo Avatar */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('home');
          }}
          className="flex items-center gap-3 text-left group whitespace-nowrap shrink-0 focus-visible:outline-none cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#25F4EE] shadow-md group-hover:scale-105 transition-transform bg-black">
              <img
                src={profile.photoUrl}
                alt={profile.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-[#FE2C55]">
              <TikTokShopIcon size={14} />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 font-heading">
              {profile.fullName}
              <span className="w-4 h-4 rounded-full bg-[#25F4EE] flex items-center justify-center text-[9px] text-black font-black">
                ✓
              </span>
            </span>
            <span className="text-[11px] text-[#25F4EE] font-mono font-medium -mt-0.5">
              {profile.headline}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-300">
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            My Services
          </a>
          <a
            href="#reviews"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Client Reviews
          </a>
          <a
            href="#calculator"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Rate Estimator
          </a>
          <a
            href="#packages"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Packages
          </a>
        </nav>

        {/* Zone 3: Direct Actions (Share, WhatsApp & Let's Talk) */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Copy Share Link */}
          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard?.writeText(url);
              setCopied(true);
              setTimeout(() => setCopied(false), 2500);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            title="Copy website link for your bio"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#25F4EE]" />
                <span className="hidden md:inline">Share</span>
              </>
            )}
          </button>

          {/* Direct WhatsApp */}
          <a
            href={profile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-lg transition-colors font-mono"
          >
            <span>WhatsApp</span>
          </a>

          {/* Hire Me / Talk */}
          <button
            onClick={() => onOpenHireModal()}
            className="px-3.5 sm:px-4 py-2 bg-[#FE2C55] hover:bg-[#e02449] active:scale-95 text-white text-xs font-bold rounded-lg transition-all shadow-md shadow-[#FE2C55]/25 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </button>
        </div>

      </div>
    </header>
  );
};
