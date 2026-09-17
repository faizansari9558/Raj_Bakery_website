import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, MessageCircle, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Hero = ({ onOpenEnquiryModal }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950 py-14 sm:py-20 lg:py-28">
      
      {/* Background Image with Dark Vignette Overlay for maximum readability & aesthetic impact */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bakery/raj-bakery-kondhwa.jpg"
          alt="Raj Bakery Storefront in Pune"
          loading="eager"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/70"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-950/40 to-stone-950/90"></div>
      </div>

      {/* Decorative Gold Glows */}
      <div className="absolute top-1/4 left-5 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-amber-500/20 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-5 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-teal-500/15 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Pune's Fresh Bake Destination</span>
              </span>

              <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-stone-900/85 border border-amber-400/30 text-[11px] sm:text-xs font-bold backdrop-blur-md">
                <span className="inline-flex items-center gap-1 text-stone-100">
                  <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-green-600 rounded-[2px] bg-white p-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                  </span>
                  <span>Sukhsagar: Pure Veg</span>
                </span>
                <span className="text-stone-500">|</span>
                <span className="inline-flex items-center gap-1 text-amber-200">
                  <span className="inline-flex items-center gap-0.5 bg-white p-0.5 px-1 rounded-[2px] border border-stone-300">
                    <span className="inline-flex items-center justify-center w-2.5 h-2.5 border-[1.2px] border-green-600 rounded-[1px] bg-white">
                      <span className="w-1 h-1 rounded-full bg-green-600"></span>
                    </span>
                    <span className="inline-flex items-center justify-center w-2.5 h-2.5 border-[1.2px] border-[#8B2500] rounded-[1px] bg-white">
                      <span className="w-1 h-1 rounded-full bg-[#8B2500]"></span>
                    </span>
                  </span>
                  <span>Kondhwa: Both</span>
                </span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
              Freshness Baked Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Every Moment</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Welcome to <span className="text-white font-semibold">Raj Bakery</span> — your destination for daily bakery favourites, handmade cookies, crispy khari, and celebration cakes made for every occasion in Pune.
            </p>

            {/* Locations Pill */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm text-stone-200 flex items-center justify-center lg:justify-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="text-amber-300">2 Pune Locations:</strong> Kondhwa & Sukhsagar Nagar
              </span>
            </div>

            {/* CTA Buttons - Mobile-first full width stack */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              
              <Link
                to="/products"
                className="min-h-[48px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-95 transition-all duration-200"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
                className="min-h-[48px] px-6 py-3.5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </button>

              <Link
                to="/find-us"
                className="min-h-[48px] px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md border border-white/15 active:scale-95 transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Find Bakery</span>
              </Link>

            </div>

          </div>

          {/* Right Column: Visual Showcase Feature Card (Desktop only preview) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative group">
              
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-teal-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl">
                
                {/* Storefront Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="/images/bakery/raj-bakery-hero.jpg"
                    alt="Raj Bakery Storefront"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow-md">
                      Featured Bakery
                    </span>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="p-6 bg-stone-900/90 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-white">
                        Visit Raj Bakery
                      </h4>
                      <p className="text-xs text-stone-400">
                        Kondhwa & Sukhsagar Nagar, Pune
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Cake className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60">
                      <p className="text-amber-400 font-bold">Celebration Cakes</p>
                      <p className="text-stone-300 text-[11px]">Custom designs for all occasions</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700/60">
                      <p className="text-amber-400 font-bold">Fresh Daily Bakes</p>
                      <p className="text-stone-300 text-[11px]">Crisp Khari, Cookies & Breads</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
