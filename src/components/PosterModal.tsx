import React from 'react';
import { X, CheckCircle2, ShieldCheck, MessageCircle, ExternalLink } from 'lucide-react';
import { SUMAIR_PROFILE } from '../data/mockData';
import { TikTokShopIcon } from './TikTokShopIcon';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireModal: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  onOpenHireModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#12141c] border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <TikTokShopIcon size={20} />
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white font-heading">
                Meet Sumair Rehman — TikTok Shop Expert
              </h3>
              <p className="text-xs text-slate-400">
                Official Agency Portfolio Poster
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

        {/* Poster Image View */}
        <div className="p-4 sm:p-6 bg-black/60 flex flex-col items-center justify-center">
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl max-h-[65vh] overflow-y-auto">
            <img
              src={SUMAIR_PROFILE.posterUrl}
              alt="Sumair Rehman TikTok Shop Expert Poster"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 flex items-center justify-between gap-4">
          <a
            href={SUMAIR_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 font-mono"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenHireModal();
            }}
            className="px-5 py-2 bg-[#FE2C55] hover:bg-[#e02449] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
          >
            Hire Sumair
          </button>
        </div>

      </div>
    </div>
  );
};
