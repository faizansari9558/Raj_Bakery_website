import React, { useState, useEffect } from 'react';
import { X, Cake, Calendar, User, Phone, Sparkles, MessageCircle, Weight } from 'lucide-react';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const EnquiryModal = ({ isOpen, onClose, initialItem = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: '',
    occasion: 'Birthday',
    date: '',
    quantity: '1 kg',
    message: ''
  });

  useEffect(() => {
    if (initialItem) {
      setFormData(prev => ({
        ...prev,
        cakeType: initialItem.name || initialItem
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        cakeType: ''
      }));
    }
  }, [initialItem, isOpen]);

  // Handle ESC key to close & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      type: 'cake-modal',
      name: formData.name,
      phone: formData.phone,
      itemName: formData.cakeType,
      occasion: formData.occasion,
      date: formData.date,
      quantity: formData.quantity,
      message: formData.message
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FFFDF7] rounded-3xl shadow-2xl border border-amber-900/20 overflow-hidden z-10 my-4 sm:my-8 animate-fade-in">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F4C47] to-[#14605A] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] absolute top-3.5 right-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Raj Bakery Cake Enquiry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Custom Cake Enquiry
          </h3>
          <p className="text-xs text-amber-100/90 mt-1">
            Fill your celebration details to connect directly with our bakers on WhatsApp.
          </p>
        </div>

        {/* Form Body - Mobile 1-field-per-row */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* 1. Name */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-amber-700 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-2.5 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 2. Phone */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-amber-700 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="tel"
                required
                inputMode="tel"
                placeholder="e.g. 98XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-2.5 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 3. Cake Type */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Cake Flavour / Name *
            </label>
            <div className="relative">
              <Cake className="w-4 h-4 text-amber-700 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="e.g. Chocolate Truffle, Black Forest, Custom Photo Cake"
                value={formData.cakeType}
                onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-2.5 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 4. Occasion */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Occasion
            </label>
            <select
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Birthday">Birthday Celebration</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Wedding / Engagement">Wedding / Engagement</option>
              <option value="Kids Theme Party">Kids Theme Party</option>
              <option value="Festival / Family Gathering">Festival / Family Gathering</option>
              <option value="Other Celebration">Other Celebration</option>
            </select>
          </div>

          {/* 5. Weight / Quantity */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Approx. Weight / Quantity
            </label>
            <div className="relative">
              <Weight className="w-4 h-4 text-amber-700 absolute left-3.5 top-3.5 pointer-events-none" />
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="0.5 kg (Small Family)">0.5 kg (Small Family)</option>
                <option value="1 kg (Standard Party)">1 kg (Standard Party)</option>
                <option value="1.5 kg">1.5 kg</option>
                <option value="2 kg (Celebration)">2 kg (Celebration)</option>
                <option value="3 kg+ (Tiered / Grand)">3 kg+ (Tiered / Grand)</option>
                <option value="Custom Size / Multiple">Custom Size / Multiple</option>
              </select>
            </div>
          </div>

          {/* 6. Preferred Date */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Required Delivery / Pickup Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-amber-700 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-2.5 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 7. Message */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1">
              Special Message / Custom Design Notes
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Please write 'Happy Birthday Aanya' on cake, less sweet cream, theme reference..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-xl border border-amber-900/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[48px] py-3.5 px-6 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-green-600/30 active:scale-98 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Enquiry on WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-[#6B5041] mt-2">
              Opens WhatsApp with all your celebration details pre-filled.
            </p>
          </div>

        </form>

      </div>
    </div>
  );
};

export default EnquiryModal;
