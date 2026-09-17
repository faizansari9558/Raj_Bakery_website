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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
      {/* Top Announcement Bar */}
      <div className="bg-[#0F4C47] text-amber-200 text-xs py-2 px-4 border-b border-teal-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center gap-3 font-medium tracking-wide">
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
          
          <div className="flex items-center gap-4 text-xs">
            <Link to="/find-us" className="hover:text-white flex items-center gap-1 transition-colors text-amber-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>2 Pune Locations: Kondhwa & Sukhsagar Nagar</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav shadow-md py-2.5 border-b border-amber-900/10' 
            : 'bg-[#FFFDF7] py-3.5 border-b border-amber-900/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Treatment inspired by real storefront */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Cake className="w-6 h-6 text-[#0F4C47]" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-serif font-black tracking-tight text-[#0F4C47]">
                    RAJ <span className="text-amber-600">BAKERY</span>
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#6B5041] uppercase -mt-0.5">
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

            {/* Action CTA Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Order / Enquire</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
                className="px-3 py-1.5 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#0F4C47] hover:bg-amber-100/50 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-amber-900/10 bg-[#FFFDF7] animate-fade-in shadow-xl">
            <div className="px-4 pt-3 pb-6 space-y-1 max-w-lg mx-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-amber-100 text-[#0F4C47] font-bold'
                        : 'text-[#4A3225] hover:bg-amber-50 hover:text-[#0F4C47]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-amber-900/10 mt-3 space-y-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onOpenEnquiryModal) {
                      onOpenEnquiryModal();
                    } else {
                      openWhatsAppEnquiry({ type: 'custom' });
                    }
                  }}
                  className="w-full py-3 rounded-xl bg-[#0F4C47] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md hover:bg-[#0b3834] transition-colors"
                >
                  <Cake className="w-5 h-5 text-amber-400" />
                  <span>Enquire About a Cake</span>
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    openWhatsAppEnquiry({ type: 'general' });
                  }}
                  className="w-full py-3 rounded-xl bg-green-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
