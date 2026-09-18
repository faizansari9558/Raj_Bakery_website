import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cake, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ExternalLink, 
  Heart
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { locations } from '../data/locations';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import { VegIcon, VegNonVegIcon } from './DietarySymbol';

export const Footer = ({ onOpenEnquiryModal }) => {
  return (
    <footer className="bg-[#18110D] text-[#E8DCCF] pt-12 sm:pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-[#0F4C47] shadow-lg shadow-amber-500/20">
                <Cake className="w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-black tracking-tight text-white">
                RAJ <span className="text-amber-400">BAKERY</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Your neighbourhood bakery in Pune. Bringing fresh bakery products, handmade cookies, crispy khari, and custom celebration cakes to your family moments.
            </p>

            <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-xs">
              <div className="flex items-center gap-2.5 text-stone-200">
                <VegIcon size="sm" />
                <span><strong>Sukhsagar Nagar:</strong> 100% Pure Veg</span>
              </div>
              <div className="flex items-center gap-2.5 text-amber-100">
                <VegNonVegIcon size="sm" />
                <span><strong>Kondhwa:</strong> Veg & Non-Veg Both</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-serif font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-stone-300 hover:text-amber-400 py-1 inline-block transition-colors">
                  › Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-amber-400 py-1 inline-block transition-colors">
                  › About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-300 hover:text-amber-400 py-1 inline-block transition-colors">
                  › Bakery Products
                </Link>
              </li>
              <li>
                <Link to="/special-cakes" className="text-stone-300 hover:text-amber-400 py-1 inline-block transition-colors">
                  › Special Cakes & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/find-us" className="text-stone-300 hover:text-amber-400 py-1 inline-block transition-colors">
                  › Find Our Two Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-amber-400 py-1 inline-block transition-colors">
                  › Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Two Pune Locations */}
          <div>
            <h3 className="text-sm sm:text-base font-serif font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Our Two Locations
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {locations.map((loc) => (
                <div key={loc.id} className="p-3 rounded-xl bg-stone-900/60 border border-stone-800 space-y-1.5">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{loc.name}</span>
                  </div>
                  <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed">
                    {loc.shortAddress}
                  </p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold pt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Quick Contact & WhatsApp */}
          <div>
            <h3 className="text-sm sm:text-base font-serif font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Connect & Enquire
            </h3>

            <div className="space-y-2.5 text-sm">
              <p className="text-xs text-stone-300 leading-relaxed">
                Have a cake enquiry or looking for fresh daily bakery specials? Reach out via WhatsApp or visit our stores.
              </p>

              <button
                onClick={() => openWhatsAppEnquiry({ type: 'general' })}
                className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
                className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Cake className="w-4 h-4" />
                <span>Custom Cake Enquiry</span>
              </button>

              <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Open 7 Days a Week in Pune</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 text-center sm:text-left">
          <p>© 2026 Raj Bakery. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Freshly Baked in Pune with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
