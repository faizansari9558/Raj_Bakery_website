import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  User, 
  ShieldCheck, 
  Star,
  ExternalLink, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { locations } from '../data/locations';
import { businessInfo } from '../config/business';
import { openWhatsAppEnquiry, sendDirectPersonWhatsApp, sendGeneralEnquiry } from '../utils/whatsapp';

export const Contact = () => {
  const { contacts, mainContact } = businessInfo;

  return (
    <div className="space-y-0">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>💬</span>
            <span>Get in Touch with Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white">
            Contact <span className="text-amber-400">Raj Bakery</span>
          </h1>
          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Reach out directly to our team for cake orders, product availability, or visit our bakery branches in Pune.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Persons & Order Contact Highlight */}
      <section className="py-16 sm:py-20 bg-[#FAF5EB] border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Orders & Product Enquiries Highlight (Nadeem Ansari) */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F4C47] to-[#165B55] rounded-3xl p-6 sm:p-9 text-white shadow-2xl border-2 border-amber-400/40 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-wider shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Orders & Product Enquiries</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  {mainContact.name}
                </h3>
                
                <p className="text-sm text-teal-100 font-medium">
                  {mainContact.role}
                </p>

                <div className="pt-1 flex items-center justify-center md:justify-start gap-2 text-amber-300 font-mono font-bold text-lg">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>{mainContact.phone}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={() => openWhatsAppEnquiry({ type: 'general' })}
                  className="px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-950/30 transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Nadeem</span>
                </button>

                <a
                  href={`tel:${mainContact.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20 transition-all active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4 text-stone-950" />
                  <span>Call Nadeem</span>
                </a>
              </div>

            </div>
          </div>

          {/* All 3 Contact Persons Cards */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-8">
              <h3 className="text-2xl font-serif font-bold text-[#2A1810]">
                Bakery Contact Persons
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5041] mt-1">
                Direct contact details for our staff and managers at Raj Bakery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contacts.map((contact) => (
                <div 
                  key={contact.id}
                  className={`rounded-3xl p-6 bg-white border transition-all duration-300 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transform hover:-translate-y-1 ${
                    contact.isMainContact 
                      ? 'border-amber-500 ring-2 ring-amber-500/20' 
                      : 'border-amber-900/10'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        contact.isMainContact ? 'bg-amber-500 text-stone-950' : 'bg-amber-100 text-[#0F4C47]'
                      }`}>
                        <User className="w-6 h-6" />
                      </div>

                      {contact.isMainContact && (
                        <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider border border-amber-300">
                          Main Contact
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#2A1810]">
                        {contact.name}
                      </h4>
                      <p className="text-xs text-[#6B5041] mt-0.5">
                        {contact.role}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FFFDF7] border border-amber-900/10 flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-mono font-bold text-base text-[#0F4C47]">
                        {contact.phone}
                      </span>
                    </div>
                  </div>

                  {/* Call & WhatsApp Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-amber-900/10">
                    <a
                      href={`tel:${contact.phone}`}
                      className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#2A1810] font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>Call</span>
                    </a>

                    <button
                      onClick={() => {
                        if (contact.isMainContact) {
                          openWhatsAppEnquiry({ type: 'general' });
                        } else {
                          sendDirectPersonWhatsApp(contact);
                        }
                      }}
                      className="py-2.5 px-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Contact Form & Store Locations */}
      <section className="py-16 sm:py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Quick WhatsApp CTA & Location Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Quick CTA Card */}
              <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-green-700 to-green-800 text-white shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white">
                      Instant WhatsApp Enquiry
                    </h3>
                    <p className="text-xs text-green-100">
                      Fastest way to get cake pricing & options
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-green-50 leading-relaxed">
                  Send us your cake requirements, photos, and date preference directly on WhatsApp for an immediate response.
                </p>

                <button
                  onClick={() => openWhatsAppEnquiry({ type: 'general' })}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-green-800 font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:bg-green-50 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-green-700" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>

              {/* Both Pune Bakery Addresses */}
              <div className="rounded-3xl p-6 sm:p-7 bg-[#FAF5EB] border border-amber-900/10 space-y-5">
                <h3 className="font-serif font-bold text-lg text-[#2A1810] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>Bakery Locations</span>
                </h3>

                {locations.map((loc) => (
                  <div key={loc.id} className="p-4 rounded-2xl bg-white border border-amber-900/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#0F4C47]">{loc.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                        {loc.areaName}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5041] leading-relaxed">
                      {loc.address}
                    </p>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 pt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
