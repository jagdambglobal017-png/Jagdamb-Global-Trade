import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { Award, MapPin, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface AboutProps {
  t?: TranslationDictionary;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#F5F2EB] text-slateDark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: CLEAN PRODUCT IMAGE & BADGES (NO FAKE FACTORY/FACILITY) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white">
                <img
                  src="/products/moringa-powder.jpg"
                  alt="Pure Indian Herbal Powders - Jagdamb Global Trade"
                  className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* EXPORT-READY PACKING BADGE */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-md inline-flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Export-Ready Packing • Direct from India
                  </span>
                </div>
                
                {/* FLOATING LOCATION & FOUNDED BADGE */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-xl flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-xs sm:text-base text-slateDark-950">
                      Jagdamb Global Trade
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-700 font-bold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                      <span>Maharashtra, India</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & EXACT PROMPT COPY */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-800 text-white text-[10px] sm:text-xs font-extrabold tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>ABOUT OUR FIRM</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slateDark-950 tracking-tight leading-tight mt-2 sm:mt-3">
                India-Based Exporter of Herbal Powders
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                India-based exporter of herbal and superfood powders. We source moringa, amla and stevia from established Indian suppliers and handle documentation, packing and shipping. We are a new company, so we keep it simple: clear specs, honest lead times, samples before bulk orders.
              </p>
            </ScrollReveal>

            {/* THREE CORE PRINCIPLES */}
            <ScrollReveal animation="fade-left" delay={250}>
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-800 font-bold leading-normal">
                    <strong className="text-slate-950">Clear Specs:</strong> Mesh size, moisture, color, and COA lab reports defined before you order.
                  </p>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-800 font-bold leading-normal">
                    <strong className="text-slate-950">Honest Lead Times:</strong> Realistic dispatch schedules with direct tracking and owner communication.
                  </p>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-800 font-bold leading-normal">
                    <strong className="text-slate-950">Samples Before Bulk:</strong> Evaluate taste, mesh, solubility, and quality before placing commercial orders.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* KEY METRICS GRID */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <Building2 className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-600">
                      FOUNDED & REGISTERED
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-sm sm:text-base text-slateDark-950">
                    2025 • IEC & GST Registered
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-600">
                      LOCATION
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-xs sm:text-sm text-slateDark-950">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
