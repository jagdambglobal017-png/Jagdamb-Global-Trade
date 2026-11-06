import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { LanguageSelector } from '../language-selector/LanguageSelector';
import { Button } from '../buttons/Button';
import { LanguageCode, TranslationDictionary } from '../../types/translation';

interface NavbarProps {
  currentLanguage: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
  onOpenEnquiry: (productName?: string) => void;
  t: TranslationDictionary;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onSelectLanguage,
  onOpenEnquiry,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.whyUs, href: '#whyUs' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 px-3 sm:px-6 lg:px-8 flex justify-between items-center ${
          isScrolled ? 'py-1.5 sm:py-2.5' : 'py-2 sm:py-3.5'
        }`}
      >
        {/* BRAND LOGO VISIBLE ON MOBILE & DESKTOP NAVBAR (2X ENLARGED) */}
        <a href="#hero" className="flex items-center gap-2 z-50 group flex-shrink-0">
          <img
            src="/logo.png"
            alt="Jagdamb Global Trade"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
          />
        </a>

        {/* FLOATING PILL CONTAINER */}
        <div
          className={`rounded-full transition-all duration-500 ${
            isScrolled ? 'glass-nav-scrolled px-3 sm:px-6 py-1.5 sm:py-2.5' : 'glass-nav px-3 sm:px-6 py-2 sm:py-3'
          }`}
        >
          <div className="flex items-center gap-2 sm:gap-3 md:gap-8">

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs lg:text-sm font-extrabold text-slateDark-950 hover:text-slate-700 transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* DESKTOP RIGHT ACTION BUTTONS */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSelector
                currentLanguage={currentLanguage}
                onSelectLanguage={onSelectLanguage}
              />
              <Button
                variant="primary"
                size="sm"
                onClick={() => onOpenEnquiry()}
              >
                {t.nav.enquireNow}
              </Button>
            </div>

            {/* MOBILE NAVIGATION CONTROLS */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSelector
                currentLanguage={currentLanguage}
                onSelectLanguage={onSelectLanguage}
              />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 active:scale-95 transition-all shadow-md flex items-center justify-center"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE POPUP MENU - OPENS IN THE MIDDLE AS A POPUP */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slateDark-950/75 backdrop-blur-md animate-fadeIn">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Centered Modal Card in the Middle (Wide & Spacious) */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] p-6 animate-scale-up space-y-4 max-h-[90vh] overflow-y-auto">
            {/* POPUP HEADER WITH 2X LOGO & CLOSE */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Jagdamb Global Trade"
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h3 className="font-heading font-extrabold text-base text-slateDark-950 leading-tight">
                    Jagdamb Global Trade
                  </h3>
                  <span className="text-xs text-orange-600 font-extrabold uppercase tracking-wider block">
                    Domestic & Global Trade
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-slate-800 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-extrabold text-slateDark-950 hover:bg-orange-50 hover:text-orange-600 active:bg-orange-100 transition-all flex items-center justify-between border border-transparent hover:border-orange-200"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-orange-500 font-bold">→</span>
                </a>
              ))}
            </nav>

            <div className="h-px bg-gray-200 my-1" />

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-2.5 pt-1">
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                {t.nav.enquireNow}
              </Button>
              <a
                href="https://wa.me/919403340502"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 rounded-full bg-[#1e4620] hover:bg-[#153416] text-white font-extrabold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {t.nav.whatsAppUs}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
