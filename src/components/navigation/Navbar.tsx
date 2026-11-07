import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Globe } from 'lucide-react';
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

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-3 sm:px-6 lg:px-8 w-full flex justify-center ${
          isScrolled ? 'py-1.5 sm:py-2.5' : 'py-2 sm:py-3.5'
        }`}
      >
        {/* FLOATING PILL CONTAINER WITH LOGO */}
        <div
          className={`rounded-full transition-all duration-500 w-full max-w-7xl ${
            isScrolled ? 'glass-nav-scrolled px-3.5 sm:px-6 py-1.5 sm:py-2.5' : 'glass-nav px-3.5 sm:px-6 py-2 sm:py-3'
          }`}
        >
          <div className="flex items-center justify-between gap-3 md:gap-8">

            {/* BRAND LOGO VISIBLE IN NAVBAR */}
            <a href="#hero" className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0">
              <img
                src="/logo.png"
                alt="Jagdamb Global Trade"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base text-slateDark-950 tracking-tight leading-tight">
                  Jagdamb Global Trade
                </span>
                <span className="text-[9px] sm:text-[10px] text-orange-600 font-extrabold uppercase tracking-wider hidden xs:inline">
                  Indian Herbal Powders
                </span>
              </div>
            </a>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                onClick={() => onOpenEnquiry('Sample Request - Moringa, Amla, Stevia')}
              >
                Request a Sample
              </Button>
              {/* 3-BAR MENU BUTTON ON DESKTOP & PC */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
                aria-label="Open Navigation Menu"
                title="Open Menu"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* MOBILE NAVIGATION CONTROLS */}
            <div className="flex items-center justify-end gap-2 md:hidden">
              <LanguageSelector
                currentLanguage={currentLanguage}
                onSelectLanguage={onSelectLanguage}
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* POPUP MENU - OPENS IN THE MIDDLE AS A POPUP (MOBILE & PC) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slateDark-950/75 backdrop-blur-md animate-fadeIn">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Centered Modal Card in the Middle (Never hidden behind Chrome address bar, responsive on PC, with hidden scrollbar) */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] p-6 md:p-8 animate-scale-up space-y-4 max-h-[76dvh] sm:max-h-[82vh] md:max-h-[85vh] overflow-y-auto no-scrollbar">
            {/* POPUP HEADER WITH 2X LOGO & CLOSE */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Jagdamb Global Trade"
                  className="h-16 md:h-18 w-auto object-contain"
                />
                <div>
                  <h3 className="font-heading font-extrabold text-base md:text-lg text-slateDark-950 leading-tight">
                    Jagdamb Global Trade
                  </h3>
                  <span className="text-xs md:text-sm text-orange-600 font-extrabold uppercase tracking-wider block">
                    Domestic & Global Trade
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-slate-800 transition-colors cursor-pointer"
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
                  className="px-4 py-3 rounded-2xl text-sm md:text-base font-extrabold text-slateDark-950 hover:bg-orange-50 hover:text-orange-600 active:bg-orange-100 transition-all flex items-center justify-between border border-transparent hover:border-orange-200"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-orange-500 font-bold">→</span>
                </a>
              ))}
            </nav>

            {/* QUICK LANGUAGE SELECTOR IN MENU POPUP */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs md:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-orange-600" />
                Language
              </span>
              <LanguageSelector
                currentLanguage={currentLanguage}
                onSelectLanguage={(code) => {
                  onSelectLanguage(code);
                  setMobileMenuOpen(false);
                }}
              />
            </div>

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
