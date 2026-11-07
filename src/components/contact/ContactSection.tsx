import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { Button } from '../buttons/Button';
import { Mail, Phone, MapPin, UserCheck, MessageSquare, Send, Globe2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface ContactSectionProps {
  t: TranslationDictionary;
  onOpenEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, onOpenEnquiry }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919403340502', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-[#F5F2EB] text-slateDark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <Globe2 className="w-3.5 h-3.5 text-white" />
              <span>DIRECT EXPORTER CONTACT</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slateDark-950 tracking-tight mt-3">
              Contact Jagdamb Global Trade
            </h2>
            <p className="text-xs sm:text-sm text-slateDark-900 font-bold max-w-xl mx-auto leading-relaxed">
              Connect with us for sample requests, specifications, and bulk container or LCL quotes for Dubai and the GCC. We provide honest lead times and direct WhatsApp communication.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* CARD 1: OWNER */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-lg h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-600 tracking-wider uppercase">
                    {t.contact.ownerRole}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-slateDark-950 mt-0.5">
                    {t.contact.ownerName}
                  </h3>
                  <p className="text-xs text-slateDark-900 font-bold mt-1">
                    {t.contact.ownerFirm}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 2: WHATSAPP / PHONE */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-lg h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-600 tracking-wider uppercase">
                    {t.contact.phoneRole}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-slateDark-950 mt-0.5">
                    +91 94033 40502
                  </h3>
                  <p className="text-xs text-slateDark-900 font-bold mt-1">
                    {t.contact.phoneDesc}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 hover:text-slate-600 transition-colors active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t.contact.whatsAppBtn}</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 3: EMAIL */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-lg h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-600 tracking-wider uppercase">
                    {t.contact.emailRole}
                  </span>
                  <h3 className="font-heading font-extrabold text-sm text-slateDark-950 mt-0.5">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jagdambglobaltrade@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors break-all">
                      jagdambglobaltrade@gmail.com
                    </a>
                  </h3>
                  <p className="text-xs text-slateDark-900 font-bold mt-1">
                    {t.contact.emailDesc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 4: LOCATION */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="p-5 sm:p-6 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-lg h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-slate-600 tracking-wider uppercase">
                    LOCATION
                  </span>
                  <p className="text-sm text-slateDark-950 font-extrabold mt-1 leading-relaxed">
                    Maharashtra, India
                  </p>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">
                    Port of Loading: JNPT / Nhava Sheva, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* CALLOUT ENQUIRY CARD WITH GLASSMORPHISM */}
        <ScrollReveal animation="scale-up">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/45 backdrop-blur-2xl border border-white/70 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-[11px] font-extrabold tracking-widest uppercase shadow-sm">
                <Send className="w-3.5 h-3.5 text-white" />
                <span>{t.contact.calloutTag}</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-orange-500 tracking-tight">
                {t.contact.calloutHeading}
              </h3>
              <p className="text-xs sm:text-sm text-slateDark-900 font-bold max-w-2xl leading-relaxed">
                {t.contact.calloutDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
              <Button variant="primary" size="lg" onClick={onOpenEnquiry} fullWidth={true} className="sm:w-auto">
                {t.contact.startBtn}
              </Button>
              <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick} fullWidth={true} className="sm:w-auto">
                {t.contact.whatsAppBtn}
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
