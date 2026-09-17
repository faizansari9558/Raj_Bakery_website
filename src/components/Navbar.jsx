import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Cake, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Navbar = ({ onOpenEnquiryModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change & unlock scroll
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Special Cakes', path: '/special-cakes' },
    { name: 'Find Us', path: '/find-us' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Top Announcement Bar - Mobile-optimized */}
      <div className="bg-[#0F4C47] text-amber-200 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 font-medium tracking-wide">
            {/* Sukhsagar Nagar Pure Veg */}
            <div className="flex items-center gap-1.5 text-white">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 border-[1.5px] border-green-600 rounded-[2px] bg-white p-0.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
              </span>
              <span className="font-semibold">Sukhsagar Nagar: Pure Veg</span>
            </div>

            <span className="text-amber-400/60 hidden sm:inline">•</span>

            {/* Kondhwa Veg & Non-Veg */}
            <div className="flex items-center gap-1.5 text-amber-200">
              <span className="inline-flex items-center gap-1 bg-white p-0.5 px-1 rounded-[3px] border border-stone-300 shadow-2xs">
                <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-green-600 rounded-[2px] bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-[#8B2500] rounded-[2px] bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B2500]"></span>
                </span>
              </span>
              <span className="font-semibold text-white">Kondhwa: Veg & Non-Veg</span>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <Link to="/find-us" className="hover:text-white flex items-center gap-1 transition-colors text-amber-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>2 Pune Locations: Kondhwa & Sukhsagar Nagar</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'glass-nav shadow-md py-2 sm:py-2.5 border-b border-amber-900/10' 
            : 'bg-[#FFFDF7] py-2.5 sm:py-3.5 border-b border-amber-900/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Treatment */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group select-none">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Cake className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F4C47]" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-lg sm:text-2xl font-serif font-black tracking-tight text-[#0F4C47]">
                    RAJ <span className="text-amber-600">BAKERY</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-medium tracking-widest text-[#6B5041] uppercase -mt-0.5">
                  Freshness Baked Daily
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-[#0F4C47] bg-amber-100/70 shadow-xs font-bold'
                        : 'text-[#4A3225] hover:text-[#0F4C47] hover:bg-amber-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm shadow-md hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-stone-950" />
                <span>Order / Enquire</span>
              </button>
            </div>

            {/* Mobile Header Action & Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
                className="min-h-[40px] px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs flex items-center gap-1 shadow-sm active:scale-95 transition-transform"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-stone-950" />
                <span>Enquire</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-[#0F4C47] hover:bg-amber-100/60 flex items-center justify-center active:scale-95 transition-transform"
                aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer with Backdrop */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[88px] sm:top-[98px] z-50 flex flex-col">
            {/* Dimmed Backdrop */}
            <div 
              className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-fade-in"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Drawer Content */}
            <div className="relative z-10 bg-[#FFFDF7] border-b border-amber-900/15 shadow-2xl animate-fade-in max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="px-4 pt-3 pb-6 space-y-1.5 max-w-md mx-auto">
                
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`min-h-[48px] flex items-center px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                        isActive
                          ? 'bg-amber-100 text-[#0F4C47]'
                          : 'text-[#4A3225] hover:bg-amber-50 hover:text-[#0F4C47]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile Drawer CTAs */}
                <div className="pt-4 border-t border-amber-900/10 mt-3 space-y-2.5">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      if (onOpenEnquiryModal) {
                        onOpenEnquiryModal();
                      } else {
                        openWhatsAppEnquiry({ type: 'custom' });
                      }
                    }}
                    className="min-h-[48px] w-full py-3 px-4 rounded-xl bg-[#0F4C47] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md hover:bg-[#0b3834] active:scale-98 transition-all"
                  >
                    <Cake className="w-5 h-5 text-amber-400" />
                    <span>Enquire About a Cake</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openWhatsAppEnquiry({ type: 'general' });
                    }}
                    className="min-h-[48px] w-full py-3 px-4 rounded-xl bg-green-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm hover:bg-green-700 active:scale-98 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </button>

                  {/* Direct Phone Link */}
                  <a
                    href={`tel:${businessConfig.mainContact.phone}`}
                    className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-stone-100 text-[#2A1810] font-bold text-xs text-center flex items-center justify-center gap-2 border border-stone-200"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>Call Main Contact ({businessConfig.mainContact.phone})</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
