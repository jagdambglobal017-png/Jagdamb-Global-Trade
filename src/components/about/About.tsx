import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { Award, MapPin, Building2, Globe2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface AboutProps {
  t: TranslationDictionary;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F5F2EB] text-slateDark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: ABOUT IMAGE & BADGES */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal animation="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80">
                <img
                  src="/assets/about_warehouse_export.jpg"
                  alt={t.about.imageAlt}
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slateDark-950/70 via-transparent to-transparent" />
                
                {/* FLOATING ESTABLISHED BADGE */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-slateDark-950">
                      {t.about.badgeTitle}
                    </h4>
                    <p className="text-xs text-slateDark-900 font-bold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                      <span>{t.about.badgeSubtitle}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & KEY HIGHLIGHTS */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
                <Globe2 className="w-3.5 h-3.5 text-white" />
                <span>EXPORT & IMPORT FIRM</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slateDark-950 tracking-tight leading-tight mt-3">
                {t.about.heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <p className="text-sm sm:text-base text-slateDark-900 leading-relaxed font-bold">
                {t.about.content}
              </p>
            </ScrollReveal>

            {/* KEY METRICS GRID */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-600">
                      {t.about.foundedTitle}
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-lg text-slateDark-950">
                    2025
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm">
                  <div className="flex items-center gap-2 text-slate-700 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-extrabold tracking-wider uppercase text-slate-600">
                      {t.about.locationTitle}
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-base text-slateDark-950">
                    {t.about.locationValue}
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
