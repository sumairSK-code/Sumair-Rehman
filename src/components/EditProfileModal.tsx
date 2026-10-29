import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, Save, RotateCcw, Check, Sparkles, MessageCircle, Mail, Linkedin, Phone } from 'lucide-react';
import { ProfileData } from '../types';
import { SUMAIR_PROFILE } from '../data/mockData';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
  onResetDefaults: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<ProfileData>(profile);
  const [activeTab, setActiveTab] = useState<'photos' | 'contact' | 'text'>('photos');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const photoFileInputRef = useRef<HTMLInputElement>(null);
  const posterFileInputRef = useRef<HTMLInputElement>(null);
  const proofFileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'photoUrl' | 'posterUrl' | 'upworkProofUrl'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFormData((prev) => ({
          ...prev,
          [field]: reader.result as string
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#12141c] border border-white/20 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#25F4EE]/15 flex items-center justify-center text-[#25F4EE]">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white font-heading">
                Customize Photos & Profile Details
              </h3>
              <p className="text-xs text-slate-400">
                Upload new photos or update your WhatsApp, LinkedIn & bio anytime
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

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-[#0d0f17] px-5 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('photos')}
            className={`pb-2.5 px-3 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'photos'
                ? 'text-[#25F4EE] border-[#25F4EE]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Change Photos
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-2.5 px-3 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'contact'
                ? 'text-[#25F4EE] border-[#25F4EE]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Contact & Links
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`pb-2.5 px-3 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'text'
                ? 'text-[#25F4EE] border-[#25F4EE]'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            Headline & Text
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          
          {/* TAB 1: Change Photos */}
          {activeTab === 'photos' && (
            <div className="space-y-6">
              
              {/* Profile Photo */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-black shrink-0 border-2 border-[#25F4EE] shadow-md">
                    <img
                      src={formData.photoUrl}
                      alt="Profile Preview"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white">
                      Main Profile Photo (Working at Laptop)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Displayed in the Hero section, top header avatar, and footer.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 justify-center sm:justify-start">
                      <input
                        type="file"
                        ref={photoFileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'photoUrl')}
                      />
                      <button
                        type="button"
                        onClick={() => photoFileInputRef.current?.click()}
                        className="px-3.5 py-1.5 bg-[#25F4EE] text-black text-xs font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload from Phone/PC</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const url = prompt('Enter direct image URL:', formData.photoUrl);
                          if (url) setFormData((p) => ({ ...p, photoUrl: url }));
                        }}
                        className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-lg hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        Paste Image URL
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Agency Flyer / Poster */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-20 h-28 rounded-xl overflow-hidden bg-black shrink-0 border border-white/20 shadow-md">
                    <img
                      src={formData.posterUrl}
                      alt="Poster Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white">
                      Official Agency Flyer / Poster
                    </h4>
                    <p className="text-xs text-slate-400">
                      Opened when clients click the "Official Flyer" button.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 justify-center sm:justify-start">
                      <input
                        type="file"
                        ref={posterFileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'posterUrl')}
                      />
                      <button
                        type="button"
                        onClick={() => posterFileInputRef.current?.click()}
                        className="px-3.5 py-1.5 bg-[#FE2C55] text-white text-xs font-bold rounded-lg hover:bg-[#e02449] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload New Flyer</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const url = prompt('Enter direct poster image URL:', formData.posterUrl);
                          if (url) setFormData((p) => ({ ...p, posterUrl: url }));
                        }}
                        className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-lg hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        Paste URL
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upwork Testimonial Proof Screenshot */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-24 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-white/20 shadow-md">
                    <img
                      src={formData.upworkProofUrl}
                      alt="Proof Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-white">
                      Upwork Contract Reviews Screenshot
                    </h4>
                    <p className="text-xs text-slate-400">
                      Shown in the verified reviews modal.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1 justify-center sm:justify-start">
                      <input
                        type="file"
                        ref={proofFileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'upworkProofUrl')}
                      />
                      <button
                        type="button"
                        onClick={() => proofFileInputRef.current?.click()}
                        className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload New Screenshot</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Contact & Links */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Number (Displayed to clients)</span>
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                      whatsappUrl: `https://wa.me/${e.target.value.replace(/[^0-9]/g, '')}`
                    }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FE2C55]" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                  <span>LinkedIn Profile Link</span>
                </label>
                <input
                  type="text"
                  value={formData.linkedinUrl}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, linkedinUrl: e.target.value }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Location / Work Status Tag
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, location: e.target.value }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Headline & Text */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Main Headline / Role
                </label>
                <input
                  type="text"
                  value={formData.headline}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, headline: e.target.value }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Experience Tag
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, experience: e.target.value }))
                  }
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#25F4EE]"
                />
              </div>
            </div>
          )}

          {/* Footer Save & Reset Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                if (confirm('Reset all photos and contact details back to original defaults?')) {
                  onResetDefaults();
                  setFormData(SUMAIR_PROFILE);
                }
              }}
              className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold rounded-xl"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 bg-[#FE2C55] hover:bg-[#e02449] active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-[#FE2C55]/30 flex items-center gap-1.5 cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save All Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
