import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, User, Phone, Mail, FileText } from 'lucide-react';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      type: 'custom',
      name: formData.name,
      phone: formData.phone,
      itemName: formData.subject,
      message: formData.message + (formData.email ? ` (Email: ${formData.email})` : '')
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 border border-amber-900/10 shadow-lg">
      <div className="mb-5 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2A1810]">
          Send Us an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#6B5041] mt-1.5 leading-relaxed">
          Fill out the form below and we'll connect with you on WhatsApp or call you back.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-serif font-bold text-lg text-green-900">
            Enquiry Prepared Successfully!
          </h4>
          <p className="text-xs sm:text-sm text-green-800 leading-relaxed max-w-sm mx-auto">
            Your enquiry details have been transferred to WhatsApp. If the chat did not open automatically, click the button below.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                openWhatsAppEnquiry({
                  type: 'custom',
                  name: formData.name,
                  phone: formData.phone,
                  itemName: formData.subject,
                  message: formData.message
                });
              }}
              className="min-h-[48px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-bold text-xs shadow-md hover:bg-green-700 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp Chat</span>
            </button>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="block text-xs text-stone-500 hover:text-stone-700 underline mt-2 mx-auto cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* 1. Full Name */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-amber-700 absolute left-3.5 top-4 pointer-events-none" />
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-amber-900/20 bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 2. Phone Number */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-amber-700 absolute left-3.5 top-4 pointer-events-none" />
              <input
                type="tel"
                required
                inputMode="tel"
                placeholder="e.g. 98XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-amber-900/20 bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 3. Email (Optional) */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1.5">
              Email Address (Optional)
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-amber-700 absolute left-3.5 top-4 pointer-events-none" />
              <input
                type="email"
                inputMode="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-amber-900/20 bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* 4. Enquiry Subject */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1.5">
              Enquiry Subject
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-amber-700 absolute left-3.5 top-4 pointer-events-none" />
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full min-h-[48px] pl-10 pr-4 py-3 rounded-xl border border-amber-900/20 bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Celebration Cake Enquiry">Celebration Cake Enquiry</option>
                <option value="Custom / Theme Cake Order">Custom / Theme Cake Order</option>
                <option value="Bulk Bakery Products / Party Order">Bulk Bakery Products / Party Order</option>
                <option value="General Product Enquiry">General Product Enquiry</option>
                <option value="Other Question">Other Question</option>
              </select>
            </div>
          </div>

          {/* 5. Message */}
          <div>
            <label className="block text-xs font-bold text-[#3E291D] uppercase tracking-wider mb-1.5">
              Your Message *
            </label>
            <textarea
              rows="4"
              required
              placeholder="Tell us what you're looking for (flavours, date, requirements, etc.)..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3.5 rounded-xl border border-amber-900/20 bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Enquiry to WhatsApp</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
