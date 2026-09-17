import React from 'react';
import { Sparkles } from 'lucide-react';
import { WhatsAppEnquiryButton } from './WhatsAppEnquiryButton';

export const CakeCard = ({ cake }) => {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* 1:1 Aspect Ratio Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-amber-50">
        <img
          src={cake.image}
          alt={cake.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Category Pill */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#0F4C47] text-white shadow-sm border border-teal-800">
            {cake.category}
          </span>
        </div>

        {/* Pure Veg Badge */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/95 p-1 rounded-md shadow-sm border border-stone-200 z-10">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border border-green-600 flex items-center justify-center p-0.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600"></div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-3.5 sm:p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#2A1810] group-hover:text-[#0F4C47] transition-colors leading-snug break-words">
            {cake.name}
          </h3>
          
          {cake.description && (
            <p className="mt-1.5 text-xs text-[#6B5041] line-clamp-2 leading-relaxed">
              {cake.description}
            </p>
          )}

          {cake.suitableFor && (
            <div className="mt-2.5 flex items-center gap-1.5 text-[11px] sm:text-xs text-[#0F4C47] font-semibold bg-teal-50/90 px-2.5 py-1 rounded-lg border border-teal-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">Ideal for: {cake.suitableFor}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-3.5 sm:mt-5 pt-3 border-t border-amber-900/5">
          <WhatsAppEnquiryButton
            cake={cake}
            label="Enquire on WhatsApp"
          />
        </div>

      </div>
    </div>
  );
};

export default CakeCard;
