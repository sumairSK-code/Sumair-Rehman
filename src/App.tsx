import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PricingPackages } from './components/PricingPackages';
import { ScreenshotModal } from './components/ScreenshotModal';
import { PosterModal } from './components/PosterModal';
import { HireModal } from './components/HireModal';
import { Footer } from './components/Footer';
import { ProjectInquiry, ProfileData } from './types';
import { SUMAIR_PROFILE } from './data/mockData';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('sumair_profile_custom');
    return saved ? JSON.parse(saved) : SUMAIR_PROFILE;
  });

  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isScreenshotOpen, setIsScreenshotOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const [selectedServiceForHire, setSelectedServiceForHire] = useState<string>('');
  const [selectedBudgetForHire, setSelectedBudgetForHire] = useState<number | undefined>(undefined);
  const [selectedScopeItems, setSelectedScopeItems] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  const [inquiries, setInquiries] = useState<ProjectInquiry[]>(() => {
    const saved = localStorage.getItem('sumair_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  const handleOpenHire = (serviceTitle?: string, budget?: number, scopeItems?: string[]) => {
    setSelectedServiceForHire(serviceTitle || '');
    setSelectedBudgetForHire(budget);
    setSelectedScopeItems(scopeItems || []);
    setIsHireModalOpen(true);
  };

  const handleScopeCalculated = (scopeNames: string[], totalPrice: number) => {
    handleOpenHire('Custom Scope Proposal', totalPrice, scopeNames);
  };

  const handleSelectPackage = (packageName: string, price: number) => {
    handleOpenHire(packageName, price, [packageName]);
  };

  const handleSubmitInquiry = (inquiry: ProjectInquiry) => {
    const updated = [inquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('sumair_inquiries', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d10] text-[#f1f5f9] selection:bg-[#FE2C55] selection:text-white">
      
      {/* 3-Zone Header */}
      <Header
        profile={profile}
        onOpenHireModal={() => handleOpenHire()}
        onOpenScreenshot={() => setIsScreenshotOpen(true)}
        onOpenPosterModal={() => setIsPosterOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-1">
        {/* Hero Section with exact requested bio and photo */}
        <HeroSection
          profile={profile}
          onOpenHireModal={(srv) => handleOpenHire(srv)}
          onOpenScreenshot={() => setIsScreenshotOpen(true)}
          onOpenPosterModal={() => setIsPosterOpen(true)}
        />

        {/* Verified Upwork Client Reviews (Peter James, Creative Ads Editor) */}
        <TestimonialsSection
          onOpenScreenshot={() => setIsScreenshotOpen(true)}
          onOpenHireModal={(srv) => handleOpenHire(srv)}
        />

        {/* The 6 Core Freelance Services requested by Sumair */}
        <ServicesSection
          onSelectService={(srvTitle) => handleOpenHire(srvTitle)}
        />

        {/* Interactive Scope & Rate Estimator */}
        <ProjectCalculator
          onProceedWithScope={handleScopeCalculated}
        />

        {/* Real Client Case Studies (Peter James E-Commerce & Volta Audio) */}
        <CaseStudiesSection
          onOpenHireModal={(title) => handleOpenHire(title)}
        />

        {/* Standard Fixed Pricing Packages */}
        <PricingPackages
          onSelectPackage={handleSelectPackage}
        />
      </main>

      {/* Upwork Screenshot Lightbox Proof Modal */}
      <ScreenshotModal
        isOpen={isScreenshotOpen}
        onClose={() => setIsScreenshotOpen(false)}
        onOpenHireModal={() => handleOpenHire()}
      />

      {/* Official Poster Modal */}
      <PosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
        onOpenHireModal={() => handleOpenHire()}
      />

      {/* Direct Contact & Booking Modal */}
      <HireModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        initialService={selectedServiceForHire}
        initialBudget={selectedBudgetForHire}
        initialScopeItems={selectedScopeItems}
        onSubmitInquiry={handleSubmitInquiry}
      />

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenHireModal={() => handleOpenHire()}
        onOpenScreenshot={() => setIsScreenshotOpen(true)}
        onOpenPosterModal={() => setIsPosterOpen(true)}
      />

    </div>
  );
}
