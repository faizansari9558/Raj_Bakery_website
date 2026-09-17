import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cake, 
  Sparkles, 
  MapPin, 
  Utensils, 
  Smile, 
  Store,
  ChevronRight
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';
import { locations } from '../data/locations';

export const About = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-0">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span>✨</span>
            <span>Our Journey & Craft</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white">
            About <span className="text-amber-400">Raj Bakery</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Where every bake is made to make your moments sweeter.
          </p>
        </div>
      </section>

      {/* Main Story & Bakery Atmosphere */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Store Showcase */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-amber-100">
                <img
                  src="/images/bakery/raj-bakery-kondhwa.jpg"
                  alt="Raj Bakery Kondhwa Storefront in Pune"
                  loading="lazy"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-xs shadow-md">
                    Raj Bakery – Kondhwa
                  </span>
                </div>
              </div>

              {/* Sukhsagar Storefront & Counter Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-32 sm:h-40">
                  <img
                    src="/images/bakery/raj-bakery-sukhsagar.jpg"
                    alt="Raj Bakery Sukhsagar Nagar Storefront"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs p-1 rounded-md text-white text-[10px] sm:text-[11px] font-semibold text-center truncate">
                    Sukhsagar Nagar Branch
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md h-32 sm:h-40">
                  <img
                    src="/images/bakery/bakery-interior.jpg"
                    alt="Raj Bakery Display Counter"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs p-1 rounded-md text-white text-[10px] sm:text-[11px] font-semibold text-center truncate">
                    Fresh Bakery Displays
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#0F4C47] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <span>📖</span>
                <span>The Story of Raj Bakery</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2A1810] leading-tight">
                Crafting Joy, Freshness & Sweet Celebrations in Pune
              </h2>

              <p className="text-sm sm:text-base text-[#5A3F30] leading-relaxed">
                At <strong>Raj Bakery</strong>, baking is not just a daily routine; it is our passion for bringing warmth to your dining table and sweetness to your special occasions.
              </p>

              <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                From crispy, flaky puff khari that pairs with hot morning tea to handcrafted celebration cakes that take center stage at birthdays and anniversaries, we prepare each item with care, consistency, and genuine customer-first service.
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-2 text-left">
                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                  <Utensils className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F4C47]">Fresh Daily Bakes</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5041]">Freshly baked treats available daily at both Pune bakery counters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/60">
                  <Cake className="w-5 h-5 text-[#0F4C47] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F4C47]">Custom Celebration Cakes</h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5041]">Personalized cake designs for birthdays, anniversaries, and family milestones.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Made For Every Occasion */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF5EB] border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Celebrate With Us"
            title="Made for Every Occasion"
            subtitle="Whatever your celebration, Raj Bakery is ready to bake something delightful for you and your loved ones."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-900/10 shadow-sm space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#0F4C47]">
                <Cake className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2A1810]">
                Birthdays & Anniversaries
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                Classic flavours including Black Forest, Chocolate Truffle, Fresh Fruit, and Red Velvet customized with your personal celebration message.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-900/10 shadow-sm space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-[#0F4C47]">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F4C47]" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2A1810]">
                Weddings & Grand Events
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                Multi-tier elegant cakes and celebration orders made to order with advance WhatsApp enquiry and customized decoration themes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-900/10 shadow-sm space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-[#0F4C47]">
                <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2A1810]">
                Tea-Time & Daily Snacks
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                Crispy puff khari, butter cookies, cream rolls, pastries, and fresh bakery breads to enjoy every morning and evening.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Two Store Locations Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Visit Us"
            title="Two Convenient Pune Locations"
            subtitle="Visit our Kondhwa or Sukhsagar Nagar branch to experience the freshness firsthand."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-900/10 shadow-md space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#2A1810]">{loc.name}</h4>
                    <p className="text-xs text-stone-500">{loc.areaName}, Pune</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                  {loc.address}
                </p>

                <div className="pt-1">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C47] hover:text-amber-600 transition-colors"
                  >
                    <span>View Location on Google Maps ›</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Celebration CTA */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

    </div>
  );
};

export default About;
