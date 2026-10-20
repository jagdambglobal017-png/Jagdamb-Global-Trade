import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

export const AskAnythingSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-slateDark-950 text-white border-y border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-slate-700/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center py-4">
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight sm:tracking-normal uppercase leading-tight select-none">
              <span className="text-white drop-shadow-sm">YOU CAN ASK FOR </span>
              <span className="text-[#F97316] drop-shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all duration-300 hover:scale-105 inline-block">
                ANYTHING
              </span>
              <span className="text-white drop-shadow-sm">...!</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
