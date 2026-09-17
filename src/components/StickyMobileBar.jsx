import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Cake } from 'lucide-react';
import { businessConfig } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const StickyMobileBar = ({ onOpenEnquiryModal }) => {
  return (
    <nav 
      aria-label="Mobile Bottom Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-900/15 px-2.5 py-2 shadow-2xl safe-area-bottom"
    >
      <div className="flex items-center justify-around gap-1.5 max-w-md mx-auto">
        
        {/* WhatsApp Fast Enquiry */}
        <button
          onClick={() => openWhatsAppEnquiry({ type: 'general' })}
          className="flex-1 min-h-[44px] py-2 px-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs flex flex-col sm:flex-row items-center justify-center gap-1 shadow-xs active:scale-95 transition-transform cursor-pointer"
          aria-label="Chat on WhatsApp with Raj Bakery"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </button>

        {/* Custom Cake Enquiry */}
        <button
          onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
          className="flex-1 min-h-[44px] py-2 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs flex flex-col sm:flex-row items-center justify-center gap-1 shadow-xs active:scale-95 transition-transform cursor-pointer"
          aria-label="Custom Cake Enquiry"
        >
          <Cake className="w-4 h-4 shrink-0 text-stone-950" />
          <span className="truncate">Cake Enquiry</span>
        </button>

        {/* Find Stores */}
        <Link
          to="/find-us"
          className="min-h-[44px] py-2 px-3 rounded-xl bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-xs flex flex-col sm:flex-row items-center justify-center gap-1 shadow-xs active:scale-95 transition-transform"
          aria-label="Find Raj Bakery Store Locations"
        >
          <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
          <span>Locations</span>
        </Link>

        {/* Call Main Contact */}
        <a
          href={`tel:${businessConfig.mainContact.phone}`}
          className="min-h-[44px] py-2 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#2A1810] font-bold text-xs flex flex-col sm:flex-row items-center justify-center gap-1 border border-stone-200 active:scale-95 transition-transform"
          aria-label={`Call Raj Bakery at ${businessConfig.mainContact.phone}`}
        >
          <Phone className="w-4 h-4 shrink-0 text-amber-600" />
          <span>Call</span>
        </a>

      </div>
    </nav>
  );
};

export default StickyMobileBar;
