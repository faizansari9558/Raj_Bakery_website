import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Cake } from 'lucide-react';
import { businessConfig } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const StickyMobileBar = ({ onOpenEnquiryModal }) => {
  const hasValidPhone = businessConfig.phone && !businessConfig.phone.includes('[');

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-900/15 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Fast Chat */}
        <button
          onClick={() => openWhatsAppEnquiry({ type: 'general' })}
          className="flex-1 py-2.5 px-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>

        {/* Custom Cake Enquiry */}
        <button
          onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
          className="flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
        >
          <Cake className="w-4 h-4 text-amber-200" />
          <span>Cake Enquiry</span>
        </button>

        {/* Find Stores */}
        <Link
          to="/find-us"
          className="py-2.5 px-3 rounded-xl bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-all"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Locations</span>
        </Link>

        {/* Call Main Contact */}
        <a
          href={`tel:${businessConfig.mainContact.phone}`}
          className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#2A1810] font-bold text-xs flex items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call</span>
        </a>

      </div>
    </div>
  );
};

export default StickyMobileBar;
