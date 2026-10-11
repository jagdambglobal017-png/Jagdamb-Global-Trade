import React from 'react';
import { TranslationDictionary, LanguageCode } from '../../types/translation';
import { Button } from '../buttons/Button';
import { Silk } from '../common/Silk';
import { MessageSquare, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  t: TranslationDictionary;
  currentLanguage: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
  onOpenEnquiry: () => void;
  onOpenLegalModal: (title: string, type: 'privacy' | 'terms' | 'shipping' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  onOpenEnquiry,
  onOpenLegalModal,
}) => {
  const ctaWords = t.footer.ctaHeadline.split(' ');

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-12 overflow-hidden border-t border-slate-800">
      
      {/* REACT BITS SILK WEBGL ANIMATED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Silk
          speed={4}
          scale={1.2}
          color="#334155"
          noiseIntensity={1.2}
          rotation={0.2}
        />
      </div>

      {/* Background Grid Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(#64748B_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* FOOTER CTA BANNER IN ELEGANT SLATE GREY WITH 'BUILD' IN ORANGE */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-800/80 backdrop-blur-xl border border-slate-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            {/* CTA HEADLINE WITH 'BUILD' IN ORANGE */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-100 tracking-tight">
              {ctaWords.map((word, idx) => (
                <span
                  key={idx}
                  className={
                    word.toUpperCase().replace(/[^A-Z]/g, '') === 'BUILD'
                      ? 'text-orange-500 font-extrabold'
                      : ''
                  }
                >
                  {word}{' '}
                </span>
              ))}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
              {t.footer.ctaSubtext}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Button variant="primary" size="lg" onClick={onOpenEnquiry}>
              {t.footer.startEnquiry}
            </Button>
            <a
              href="https://wa.me/918668404068"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" icon={<MessageSquare className="w-4 h-4 text-white" />}>
                {t.nav.whatsAppUs}
              </Button>
            </a>
          </div>
        </div>

        {/* FOOTER MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pt-4">
          
          {/* COL 1: BRAND INFORMATION (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Jagdamb Global Trade" className="h-40 sm:h-[300px] w-auto object-contain drop-shadow-md" />
            </div>

            <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
              {t.footer.brandTagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {t.footer.brandDesc}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200">
                {t.footer.foundedLabel}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200">
                OWNER — SIDDHI VIJAY ATKARE
              </span>
            </div>
          </div>

          {/* COL 2: QUICK LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-slate-400">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{t.nav.products}</a></li>
              <li><a href="#whyUs" className="hover:text-white transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* COL 3: PRODUCT CATEGORIES (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-slate-400">
              {t.footer.categories}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#products" className="hover:text-white transition-colors">{t.footer.superfoodCat}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{t.footer.agriCat}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{t.footer.foodCat}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{t.footer.spicesCat}</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">{t.footer.packagingCat}</a></li>
            </ul>
          </div>

          {/* COL 4: CONTACT INFO (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-widest text-slate-400">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300 font-medium">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{t.footer.ownerLabel}: <strong className="text-white">Siddhi Vijay Atkare</strong></span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="https://wa.me/918668404068" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  +91 86684 04068
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jagdambglobaltrade@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  jagdambglobaltrade@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Dighol Vasti, Kallam, District Dharashiv, Maharashtra, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM BAR: LEGAL & COPYRIGHT */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>{t.footer.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={() => onOpenLegalModal('Privacy Policy', 'privacy')}
              className="hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </button>
            <button
              onClick={() => onOpenLegalModal('Terms & Conditions', 'terms')}
              className="hover:text-white transition-colors"
            >
              {t.footer.terms}
            </button>
            <button
              onClick={() => onOpenLegalModal('Shipping & Export Information', 'shipping')}
              className="hover:text-white transition-colors"
            >
              {t.footer.shippingInfo}
            </button>
            <button
              onClick={() => onOpenLegalModal('Disclaimer', 'disclaimer')}
              className="hover:text-white transition-colors"
            >
              {t.footer.disclaimer}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
