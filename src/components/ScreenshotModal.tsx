import React from 'react';
import { X, CheckCircle2, ShieldCheck, ExternalLink, Star } from 'lucide-react';

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireModal: () => void;
}

export const ScreenshotModal: React.FC<ScreenshotModalProps> = ({
  isOpen,
  onClose,
  onOpenHireModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#12141c] border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white font-heading">
                Verified Upwork Client Feedback
              </h3>
              <p className="text-xs text-slate-400">
                Unedited contract screenshot from Sumair's Upwork freelancer profile
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

        {/* Screenshot Image View */}
        <div className="p-4 sm:p-6 bg-black/60 flex flex-col items-center justify-center">
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl max-h-[60vh] overflow-y-auto">
            <img
              src="/assets/aistudio/image_0a70cf28.png"
              alt="Verified Upwork Testimonials for Sumair"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Highlights summary */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>TikTok Shops for Peter James (5.0★)</span>
              </div>
              <p className="text-slate-300 text-[11px] italic">
                "He was exceptionally thorough. Proactively communicated every step of the way. Went above and beyond..."
              </p>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Full-Time TikTok Ads Creative Editor (5.0★)</span>
              </div>
              <p className="text-slate-300 text-[11px] italic">
                "Dedicated worker, highly recommend... Accountable for Outcomes."
              </p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Upwork Verified Work History</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl"
            >
              Close
            </button>
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
    </div>
  );
};
