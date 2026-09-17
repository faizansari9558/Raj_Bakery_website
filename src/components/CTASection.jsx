import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, MessageCircle, MapPin, Sparkles, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const CTASection = ({ onOpenEnquiryModal }) => {
  const hasValidPhone = businessConfig.phone && !businessConfig.phone.includes('[');

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white relative overflow-hidden">
      
      {/* Decorative Warm Shapes */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase border border-amber-400/30">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Planning a Special Celebration in Pune?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Let <span className="text-amber-400">Raj Bakery</span> Make Your Special Moments Sweeter
        </h2>

        <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
          From custom birthday designs and multi-tier anniversary cakes to fresh daily tea-time snacks, we're ready to bake for your occasion.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          
          <button
            onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95 transition-all cursor-pointer"
          >
            <Cake className="w-5 h-5" />
            <span>Enquire About a Cake</span>
          </button>

          <button
            onClick={() => openWhatsAppEnquiry({ type: 'general' })}
            className="px-6 py-3.5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-green-600/30 hover:shadow-green-600/40 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us Directly</span>
          </button>

          <Link
            to="/find-us"
            className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base flex items-center gap-2 backdrop-blur-xs border border-white/20 transition-all"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Find Our Bakery</span>
          </Link>

          {hasValidPhone && (
            <a
              href={`tel:${businessConfig.phone}`}
              className="px-6 py-3.5 rounded-2xl bg-stone-900/80 hover:bg-stone-900 text-white font-bold text-sm sm:text-base flex items-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call Us</span>
            </a>
          )}

        </div>

      </div>
    </section>
  );
};

export default CTASection;
