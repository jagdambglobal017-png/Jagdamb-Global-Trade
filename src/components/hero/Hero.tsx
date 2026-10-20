import React from 'react';
import { LiquidMetalButton } from '../ui/liquid-metal-button';
import { MessageSquare, Globe2, ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';
import { TranslationDictionary } from '../../types/translation';

interface HeroProps {
  t: TranslationDictionary;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const words = t.hero.headline.split(' ');
  const orangePart = words.slice(0, words.length - 2).join(' ');
  const greyPart = words.slice(words.length - 2).join(' ');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919403340502', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-slateDark-950 text-white"
    >
      {/* 1. STATIC HIGH-VISIBILITY CARGO SHIP BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_cargo_ship.jpg"
          alt="International Cargo Container Ship Sailing Ocean - Jagdamb Global Trade"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Subtle Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slateDark-950/70 via-slateDark-950/20 to-slateDark-950/30" />
      </div>

      {/* LOGO STUCK TO TOP LEFT CORNER OF HERO SECTION */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-12 z-30 flex items-center justify-center transition-all duration-300 hover:scale-105">
        <img 
          src="/logo.png" 
          alt="Jagdamb Global Trade" 
          className="h-32 sm:h-[280px] w-auto object-contain drop-shadow-xl" 
        />
      </div>

      {/* HERO CONTENT WRAPPER */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-16 text-center">
        
        {/* HERO CONTENT */}
        <div className="space-y-6 w-full">
          
          {/* TOP TAGLINE BADGE */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-[11px] font-extrabold tracking-widest uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{t.hero.tagline}</span>
          </div>

          {/* H1 MAIN HEADLINE */}
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight max-w-2xl mx-auto leading-tight">
            <span className="text-orange-500">{orangePart} </span>
            <span className="text-white drop-shadow-md">{greyPart}</span>
          </h1>

          {/* SUBHEADLINE TEXT */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-medium max-w-xl mx-auto leading-relaxed drop-shadow-md">
            {t.hero.subheadline}
          </p>

          {/* HERO CTA BUTTONS WITH LIQUID METAL SHADER EFFECT */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            {/* 1. EXPLORE PRODUCTS LIQUID METAL BUTTON */}
            <a href="#products">
              <LiquidMetalButton label={t.hero.exploreBtn} />
            </a>

            {/* 2. WHATSAPP US LIQUID METAL BUTTON */}
            <LiquidMetalButton
              label={t.hero.whatsAppBtn}
              onClick={handleWhatsAppClick}
            />
          </div>

          {/* HERO FEATURE HIGHLIGHTS */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-6 border-t border-white/20">
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-7 h-7 text-orange-400 mb-1 drop-shadow-md" />
              <div>
                <span className="block text-xs sm:text-sm font-bold text-white drop-shadow-md">{t.hero.qualityBadge}</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300">{t.hero.originBadge}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <Globe2 className="w-7 h-7 text-orange-400 mb-1 drop-shadow-md" />
              <div>
                <span className="block text-xs sm:text-sm font-bold text-white drop-shadow-md">{t.hero.shippingBadge}</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300">{t.hero.readyBadge}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <span className="w-7 h-7 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold text-xs mb-1 shadow-md">25</span>
              <div>
                <span className="block text-xs sm:text-sm font-bold text-white drop-shadow-md">{t.hero.foundedBadge}</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300">{t.hero.firmBadge}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <MessageSquare className="w-7 h-7 text-orange-400 mb-1 drop-shadow-md" />
              <div>
                <span className="block text-xs sm:text-sm font-bold text-white drop-shadow-md">{t.hero.responseBadge}</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300">{t.hero.whatsAppBadge}</span>
              </div>
            </div>
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-4 flex justify-center">
          <a
            href="#about"
            className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
