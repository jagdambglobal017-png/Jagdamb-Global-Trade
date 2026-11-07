import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Globe, ChevronDown, Check, X } from 'lucide-react';
import { languageOptions } from '../../data/translations';
import { LanguageCode, LanguageOption } from '../../types/translation';

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onSelectLanguage,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);

  const selectedOption = languageOptions.find((opt) => opt.code === currentLanguage) || languageOptions[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      // Do not close if clicking inside trigger button or inside the modal card
      if (
        (dropdownRef.current && dropdownRef.current.contains(target)) ||
        (modalCardRef.current && modalCardRef.current.contains(target))
      ) {
        return;
      }
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const categories: Array<'INDIA' | 'ASIA' | 'EUROPE' | 'MIDDLE EAST & AFRICA'> = [
    'INDIA',
    'ASIA',
    'EUROPE',
    'MIDDLE EAST & AFRICA',
  ];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* TRIGGER BUTTON SHOWING FULL LANGUAGE NAME */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        className="inline-flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold tracking-wide rounded-full bg-slate-800 text-white border border-slate-700 shadow-md hover:bg-slate-700 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 text-white flex-shrink-0" />
        <span className="font-bold">{selectedOption.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`} />
      </button>

      {/* POPUP MODAL FOR LANGUAGES - STYLED JUST LIKE THE 3-BAR MENU POPUP & PORTALED TO BODY (MOBILE & PC OPTIMIZED) */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-6 md:p-8 bg-slateDark-950/75 backdrop-blur-md animate-fadeIn">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />

          {/* Centered Modal Card (Never hidden behind Chrome address bar, wide & 4-col responsive on PC, with hidden scrollbar) */}
          <div
            ref={modalCardRef}
            className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 max-h-[76dvh] sm:max-h-[82vh] md:max-h-[85vh] overflow-y-auto no-scrollbar animate-scale-up"
          >
            {/* POPUP HEADER MATCHING 3-BAR MENU */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="/logo.png"
                  alt="Jagdamb Global Trade"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain"
                />
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg md:text-xl text-slateDark-950 leading-tight">
                    Select Language
                  </h3>
                  <span className="text-xs sm:text-sm text-orange-600 font-extrabold uppercase tracking-wider block">
                    34 Languages Available Worldwide
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 sm:p-2.5 rounded-full hover:bg-gray-100 text-slate-800 transition-colors cursor-pointer"
                aria-label="Close language selector"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* CATEGORIES GRID WITH FULL NAMES */}
            <div className="space-y-4 sm:space-y-6 pt-1">
              {categories.map((cat) => {
                const list = languageOptions.filter((opt) => opt.category === cat);
                return (
                  <div key={cat} className="space-y-2.5">
                    <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {cat}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
                      {list.map((opt: LanguageOption) => {
                        const isSelected = opt.code === currentLanguage;
                        return (
                          <button
                            key={opt.code}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              onSelectLanguage(opt.code);
                              setIsOpen(false);
                            }}
                            className={`flex items-center justify-between text-left px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-slate-800 text-white font-extrabold border-slate-700 shadow-md ring-2 ring-orange-500/30'
                                : 'bg-slate-50/90 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 hover:shadow-sm text-slateDark-950 border-transparent active:scale-95'
                            }`}
                          >
                            <div className="flex flex-col truncate pr-1">
                              <span className="font-extrabold text-xs sm:text-sm leading-tight">
                                {opt.name}
                              </span>
                              <span className={`text-[10px] sm:text-[11px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500 font-medium'}`}>
                                {opt.nativeName}
                              </span>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-white ml-1.5 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
