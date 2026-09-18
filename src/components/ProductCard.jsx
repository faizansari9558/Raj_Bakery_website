import React from 'react';
import { WhatsAppEnquiryButton } from './WhatsAppEnquiryButton';
import { OptimizedImage } from './OptimizedImage';
import { VegIcon } from './DietarySymbol';

export const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* 1:1 Aspect Ratio Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-amber-50">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          priority={false}
          aspectRatio="1 / 1"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Category Pill */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-white/95 text-[#0F4C47] shadow-sm backdrop-blur-xs border border-amber-900/10">
            {product.category}
          </span>
        </div>

        {/* Pure Veg Indicator Badge */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-white/95 p-1 rounded-md shadow-sm border border-stone-200 z-10 flex items-center justify-center">
          <VegIcon size="sm" />
        </div>
      </div>

      {/* Card Details */}
      <div className="p-3.5 sm:p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Natural wrapping for full product names */}
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#2A1810] group-hover:text-[#0F4C47] transition-colors leading-snug break-words">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="mt-1.5 text-xs text-[#6B5041] line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-3.5 sm:mt-5 pt-3 border-t border-amber-900/5">
          <WhatsAppEnquiryButton 
            product={product} 
            label="Enquire on WhatsApp"
          />
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
