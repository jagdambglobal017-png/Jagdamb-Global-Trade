import React from 'react';
import { MessageSquare, ArrowDown, ShieldCheck, FileCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { TranslationDictionary } from '../../types/translation';

interface HeroProps {
  t?: TranslationDictionary;
  onOpenEnquiry: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hello Jagdamb Global Trade, I am interested in samples and quotation for herbal powders (Moringa, Amla, Stevia).'
    );
    window.open(`https://wa.me/919403340502?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Subtle Gradient & Botanical Radial Pattern (No generic cargo ship) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-950/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
      </div>

      {/* HERO CONTENT WRAPPER */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 text-center">
        <div className="space-y-6 sm:space-y-7 w-full">
          
          {/* TOP TAGLINE BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-orange-400 text-[11px] sm:text-xs font-extrabold tracking-widest uppercase shadow-md backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>INDIAN HERBAL POWDER EXPORTER</span>
          </div>

          {/* H1 MAIN HEADLINE */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.15]">
            <span className="text-orange-400">Moringa, Amla & Stevia Powder, </span>
            <span className="text-white drop-shadow-sm">Direct from India</span>
          </h1>

          {/* SUBHEADLINE TEXT */}
          <p className="text-sm sm:text-lg lg:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Bulk supply of Indian herbal powders to food and wellness buyers in Dubai and the GCC. Samples available on request.
          </p>

          {/* HERO CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenEnquiry('Sample Request - Moringa, Amla, Stevia')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-lg shadow-orange-500/25 active:scale-95 cursor-pointer"
            >
              Request a Sample
            </button>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* TRUST STRIP (4 ITEMS) */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <FileCheck className="w-5 h-5 text-orange-400 mb-1" />
                <span className="text-xs sm:text-sm font-bold text-white">IEC Registered</span>
                <span className="text-[10px] text-slate-400">DGFT India</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-orange-400 mb-1" />
                <span className="text-xs sm:text-sm font-bold text-white">GST Registered</span>
                <span className="text-[10px] text-slate-400">Govt of India</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-orange-400 mb-1" />
                <span className="text-xs sm:text-sm font-bold text-white">Samples Available</span>
                <span className="text-[10px] text-slate-400">On request</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Clock className="w-5 h-5 text-orange-400 mb-1" />
                <span className="text-xs sm:text-sm font-bold text-white">Reply within 24 hours</span>
                <span className="text-[10px] text-slate-400">Direct with owner</span>
              </div>
            </div>
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-800 active:scale-90"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
