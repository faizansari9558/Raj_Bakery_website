import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Clock, Store, Sparkles, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { LocationCard } from '../components/LocationCard';
import { CTASection } from '../components/CTASection';
import { locations } from '../data/locations';
import { businessConfig } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const FindUs = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>2 Bakery Locations in Pune</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white">
            Find Raj Bakery Near You
          </h1>
          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Visit us at either of our two bakery locations in Pune for freshly baked daily products and customized celebration cakes.
          </p>
        </div>
      </section>

      {/* Two Locations Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Bakery Locations"
            title="Our Pune Bakery Branches"
            subtitle="Get exact directions, view on Google Maps, or enquire directly with your nearest Raj Bakery shop."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>

          {/* Quick FAQ / Visit Note */}
          <div className="mt-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF5EB] border border-amber-900/10 text-center space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#2A1810]">
              Planning a Pickup or Bulk Order?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed max-w-xl mx-auto">
              You can message us beforehand on WhatsApp to check fresh daily batch availability or reserve your customized celebration cake for easy counter pickup.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openWhatsAppEnquiry({ type: 'general' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

    </div>
  );
};

export default FindUs;
