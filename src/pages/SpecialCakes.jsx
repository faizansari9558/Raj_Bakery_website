import React, { useState, useMemo } from 'react';
import { Cake, Sparkles, Heart, Crown, Gift, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CakeCard } from '../components/CakeCard';
import { CTASection } from '../components/CTASection';
import { cakes, cakeCategories } from '../data/cakes';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const SpecialCakes = ({ onOpenEnquiryModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCakes = useMemo(() => {
    if (selectedCategory === "All") return cakes;
    return cakes.filter((cake) => cake.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>🎂</span>
            <span>Handcrafted Celebration Cakes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white">
            Special Celebration Cakes
          </h1>
          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            From playful kids birthdays and romantic anniversaries to royal multi-tier wedding cakes, we bake for your most memorable moments.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Custom Cake Enquiry Form</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Cake Gallery */}
      <section className="py-16 sm:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {cakeCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F4C47] text-white shadow-md shadow-teal-900/20 scale-105'
                      : 'bg-white text-[#4A3225] border border-amber-900/10 hover:bg-amber-50 hover:text-[#0F4C47]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Cakes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                onEnquire={(c) => onOpenEnquiryModal ? onOpenEnquiryModal(c) : openWhatsAppEnquiry({ type: 'cake', itemName: c.name })}
              />
            ))}
          </div>

          {/* Custom Cake Order Process Steps */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#FAF5EB] border border-amber-900/10 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F4C47]">
                Simple & Convenient
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2A1810] mt-1">
                How Custom Cake Orders Work
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5041] mt-1">
                Order your personalized celebration cake in 3 easy steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-amber-900/10 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 font-serif font-black text-xl flex items-center justify-center mx-auto">
                  1
                </div>
                <h4 className="font-serif font-bold text-base text-[#2A1810]">
                  Choose Design & Flavour
                </h4>
                <p className="text-xs text-[#6B5041] leading-relaxed">
                  Select from our catalog or share your reference photo, weight, and occasion.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-amber-900/10 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 font-serif font-black text-xl flex items-center justify-center mx-auto">
                  2
                </div>
                <h4 className="font-serif font-bold text-base text-[#2A1810]">
                  Confirm via WhatsApp
                </h4>
                <p className="text-xs text-[#6B5041] leading-relaxed">
                  Send your enquiry details to our team on WhatsApp for quick confirmation and custom message text.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-amber-900/10 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 font-serif font-black text-xl flex items-center justify-center mx-auto">
                  3
                </div>
                <h4 className="font-serif font-bold text-base text-[#2A1810]">
                  Pickup Fresh at Pune Branch
                </h4>
                <p className="text-xs text-[#6B5041] leading-relaxed">
                  Collect your freshly baked, beautifully decorated celebration cake at your preferred time.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

    </div>
  );
};

export default SpecialCakes;
