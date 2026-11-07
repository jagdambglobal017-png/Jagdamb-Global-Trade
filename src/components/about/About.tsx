import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { Award, MapPin, Building2, Globe2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface AboutProps {
  t: TranslationDictionary;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#F5F2EB] text-slateDark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: ABOUT IMAGE & BADGES */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80">
                <img
                  src="/assets/about_warehouse.jpg"
                  alt={t.about.imageAlt}
                  className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slateDark-950/70 via-transparent to-transparent" />
                
                {/* QUALITY & INSPECTION BADGE */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-md inline-flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Quality Inspection & Processing Facility
                  </span>
                </div>
                
                {/* FLOATING ESTABLISHED BADGE */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-xs sm:text-base text-slateDark-950">
                      {t.about.badgeTitle}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slateDark-900 font-bold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                      <span>kallam,Dist. Dharashiv, Maharashtra.</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & KEY HIGHLIGHTS */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-800 text-white text-[10px] sm:text-xs font-extrabold tracking-widest uppercase shadow-sm">
                <Globe2 className="w-3.5 h-3.5 text-white" />
                <span>DOMESTIC & GLOBAL TRADE FIRM</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slateDark-950 tracking-tight leading-tight mt-2 sm:mt-3">
                {t.about.heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <p className="text-xs sm:text-base text-slateDark-900 leading-relaxed font-bold">
                {t.about.content}
              </p>
            </ScrollReveal>

            {/* DOMESTIC TRADE HIGHLIGHT BOX */}
            <ScrollReveal animation="fade-left" delay={250}>
              <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-xl border border-slate-200/90 shadow-sm space-y-1">
                <h4 className="font-heading font-extrabold text-xs sm:text-sm text-orange-600 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Domestic Trade & Pan-India Sourcing
                </h4>
                <p className="text-xs text-slate-800 leading-relaxed font-semibold">
                  In addition to bulk international exports, we cater to domestic businesses, wholesalers, retailers, and Ayurvedic manufacturers throughout Maharashtra and all Indian states with seamless logistics, genuine quality, and dependable delivery schedules.
                </p>
              </div>
            </ScrollReveal>

            {/* KEY METRICS GRID */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-600">
                      {t.about.foundedTitle}
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-base sm:text-lg text-slateDark-950">
                    2025 • Domestic & Export
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-600">
                      {t.about.locationTitle}
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-xs sm:text-sm text-slateDark-950">
                    kallam,Dist. Dharashiv, Maharashtra.
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
