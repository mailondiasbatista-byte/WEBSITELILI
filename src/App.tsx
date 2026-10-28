import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValuesBanner } from './components/ValuesBanner';
import { ServicesSection } from './components/ServicesSection';
import { BraidCatalog } from './components/BraidCatalog';
import { InteractiveCustomizer } from './components/InteractiveCustomizer';
import { CareGuide } from './components/CareGuide';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { OriginalFlyerModal } from './components/OriginalFlyerModal';
import { BraidStyle } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStyleForBooking, setSelectedStyleForBooking] = useState<BraidStyle | null>(null);
  const [customizationData, setCustomizationData] = useState<any>(null);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedStyleForBooking(null);
    setCustomizationData(null);
    setIsBookingOpen(true);
  };

  const handleSelectStyleForBooking = (style: BraidStyle) => {
    setSelectedStyleForBooking(style);
    setCustomizationData(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithCustomization = (customData: any) => {
    setCustomizationData(customData);
    setSelectedStyleForBooking(customData.style);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
        />

        {/* Brand Values Strip */}
        <ValuesBanner />

        {/* 6 Key Pillars / Services Section */}
        <ServicesSection
          onOpenBooking={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* Braid Catalog & Interactive Gallery */}
        <BraidCatalog
          onSelectStyleForBooking={handleSelectStyleForBooking}
        />

        {/* Interactive Braid Customizer / Simulator */}
        <InteractiveCustomizer
          onOpenBookingWithCustomization={handleOpenBookingWithCustomization}
        />

        {/* Braid Care & Longevity Guide */}
        <CareGuide />

        {/* Location (El Kheir), Contact (+212 719 684 150), Reviews */}
        <LocationContact
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedStyle={selectedStyleForBooking}
        customizationData={customizationData}
      />

      {/* Original Flyer Modal Lightbox */}
      <OriginalFlyerModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
      />

    </div>
  );
}
