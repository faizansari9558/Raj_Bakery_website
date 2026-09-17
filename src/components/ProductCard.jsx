import React from 'react';
import { WhatsAppEnquiryButton } from './WhatsAppEnquiryButton';

export const ProductCard = ({ product }) => {

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* 1:1 Aspect Ratio Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-amber-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#0F4C47] shadow-sm backdrop-blur-xs border border-amber-900/10">
            {product.category}
          </span>
        </div>

        {/* Pure Veg Indicator Badge */}
        <div className="absolute top-3 right-3 bg-white/95 p-1 rounded-md shadow-sm border border-stone-200">
          <div className="w-4 h-4 border border-green-600 flex items-center justify-center p-0.5">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#2A1810] group-hover:text-[#0F4C47] transition-colors leading-snug">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="mt-2 text-xs sm:text-sm text-[#6B5041] line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3 border-t border-amber-900/5">
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
