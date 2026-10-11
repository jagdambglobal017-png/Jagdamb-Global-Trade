import React from 'react';
import { ScrollFloat } from './ScrollFloat';
import { TranslationDictionary } from '../../types/translation';
import { CheckCircle2, TrendingUp, PackageCheck, Users, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { BorderGlow } from '../common/BorderGlow';

interface WhyUsProps {
  t: TranslationDictionary;
}

export const WhyUs: React.FC<WhyUsProps> = ({ t }) => {
  const valueCards = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: t.whyUs.card1Title,
      desc: t.whyUs.card1Desc,
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      title: t.whyUs.card2Title,
      desc: t.whyUs.card2Desc,
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: t.whyUs.card3Title,
      desc: t.whyUs.card3Desc,
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-white" />,
      title: t.whyUs.card4Title,
      desc: t.whyUs.card4Desc,
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: t.whyUs.card5Title,
      desc: t.whyUs.card5Desc,
    },
  ];

  return (
    <section id="whyUs" className="py-24 relative overflow-hidden bg-[#EFEADF] text-slateDark-950">
      {/* Background grid dots overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LARGE SCROLLFLOAT HEADING */}
        <div className="mb-16 text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom-=15%"
            scrollEnd="bottom center"
            stagger={0.03}
            containerClassName="why-us-scroll"
            textClassName="why-us-scroll-text"
          >
            {t.whyUs.heading}
          </ScrollFloat>
          <p className="text-center text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-widest mt-2">
            {t.whyUs.subtag}
          </p>
        </div>

        {/* 5 ELEGANT BORDER GLOW CARDS GRID WITH INCREASED GLOW RADIUS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueCards.map((card, idx) => (
            <ScrollReveal key={idx} animation="scale-up" delay={idx * 100}>
              <BorderGlow
                edgeSensitivity={45}
                glowColor="25 95 53"
                backgroundColor="#FAF7F0"
                borderRadius={28}
                glowRadius={45}
                glowIntensity={1.4}
                coneSpread={35}
                colors={['#F97316', '#EA580C', '#FBBF24']}
                className={`h-full shadow-xl transition-all duration-300 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center mb-6 shadow-md">
                      {card.icon}
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slateDark-950 mb-3 group-hover:text-slate-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slateDark-900 leading-relaxed font-bold">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex justify-end text-slate-400 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                </div>
              </BorderGlow>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
