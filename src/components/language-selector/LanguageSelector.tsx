import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
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

  const selectedOption = languageOptions.find((opt) => opt.code === currentLanguage) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories: Array<'INDIA' | 'ASIA' | 'EUROPE' | 'MIDDLE EAST & AFRICA'> = [
    'INDIA',
    'ASIA',
    'EUROPE',
    'MIDDLE EAST & AFRICA',
  ];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        className="inline-flex items-center justify-between px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider rounded-full bg-slate-800 text-white border border-slate-700 shadow-md hover:bg-slate-700 transition-all duration-200 cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 mr-1.5 text-white" />
        <span>{selectedOption.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180 text-white' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 max-h-[80vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-2xl z-50 p-4 divide-y divide-gray-100 animate-fadeInUp">
          <div className="pb-2 mb-2 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center">
              <Globe className="w-3.5 h-3.5 mr-1 text-slate-800" /> Select Language (34 Available)
            </span>
            <span className="text-[10px] text-slateDark-800 font-bold bg-gray-200 px-2 py-0.5 rounded-full">
              {selectedOption.nativeName}
            </span>
          </div>

          {categories.map((cat) => {
            const list = languageOptions.filter((opt) => opt.category === cat);
            return (
              <div key={cat} className="py-2.5">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 mb-2">
                  {cat}
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {list.map((opt: LanguageOption) => {
                    const isSelected = opt.code === currentLanguage;
                    return (
                      <button
                        key={opt.code}
                        onClick={() => {
                          onSelectLanguage(opt.code);
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between text-left px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-slate-800 text-white font-extrabold shadow-sm'
                            : 'text-slateDark-950 hover:bg-gray-200 hover:text-slate-900'
                        }`}
                      >
                        <span className="truncate">{opt.nativeName}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white ml-1 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
