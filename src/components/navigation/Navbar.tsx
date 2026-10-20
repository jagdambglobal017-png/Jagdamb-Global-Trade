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
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.whyUs, href: '#whyUs' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 z-40 transition-all duration-500 px-4 sm:px-6 lg:px-8 w-full md:w-auto md:max-w-[calc(100vw-240px)] flex justify-end ${
        isScrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div
        className={`rounded-full transition-all duration-500 w-full md:w-auto ${
          isScrolled ? 'glass-nav-scrolled px-6 py-2.5' : 'glass-nav px-6 py-3'
        }`}
      >
        <div className="flex items-center justify-between md:justify-end md:gap-8">

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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE GLASSMENU PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-2xl p-6 animate-fadeInUp">
          <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-extrabold text-slateDark-950 hover:bg-gray-100 hover:text-slate-800 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="h-px bg-gray-200 my-1" />
            <div className="flex flex-col gap-2.5">
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
                className="w-full flex items-center justify-center py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {t.nav.whatsAppUs}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
