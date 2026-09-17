import React from 'react';
import { MessageCircle } from 'lucide-react';
import { sendProductEnquiry, sendCakeEnquiry } from '../utils/whatsapp';

export const WhatsAppEnquiryButton = ({ 
  product = null, 
  cake = null, 
  label = "Enquire on WhatsApp",
  className = "",
  variant = "primary" // 'primary' | 'outline' | 'compact'
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (product) {
      sendProductEnquiry(product);
    } else if (cake) {
      sendCakeEnquiry(cake);
    }
  };

  const baseStyles = "w-full min-h-[44px] sm:min-h-[48px] py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all duration-200 active:scale-98 cursor-pointer select-none";
  
  const variants = {
    primary: "bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-amber-500/10 hover:shadow-md",
    outline: "bg-transparent border border-green-600 text-green-700 hover:bg-green-50",
    compact: "min-h-[40px] py-2 px-3 bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs"
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`${label} for ${product?.name || cake?.name || 'Item'}`}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-stone-950 shrink-0" />
      <span className="truncate">{label}</span>
    </button>
  );
};

export default WhatsAppEnquiryButton;
