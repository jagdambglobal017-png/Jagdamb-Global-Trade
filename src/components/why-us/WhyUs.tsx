import React from 'react';
import { ScrollFloat } from './ScrollFloat';
import { TranslationDictionary } from '../../types/translation';
import { CheckCircle2, FlaskConical, FileText, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { BorderGlow } from '../common/BorderGlow';

interface WhyUsProps {
  t: TranslationDictionary;
}

export const WhyUs: React.FC<WhyUsProps> = ({ t }) => {
  const cards = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      title: 'Clear specifications',
      desc: 'Mesh size, moisture %, colour, form, and lab reports defined per order. Clear, transparent specs with zero ambiguity before you purchase.',
    },
    {
      icon: <FlaskConical className="w-6 h-6 text-white" />,
      title: 'Sample first',
      desc: 'Samples available on request. Evaluate aroma, mesh fineness, color, and solubility firsthand before placing bulk orders.',
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: 'Export documentation handled',
      desc: 'We handle export documentation including Certificate of Origin, Phytosanitary Certificate, Commercial Invoice, and Packing List for smooth Dubai/GCC customs.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: 'Direct communication with the owner on WhatsApp',
      desc: 'No middlemen or delayed responses. Chat directly with owner Siddhi Vijay Atkare on WhatsApp for instant answers, quotes, and order updates.',
    },
  ];

  return (
    <section id="whyUs" className="py-16 sm:py-24 relative overflow-hidden bg-[#EFEADF] text-slateDark-950">
      {/* Background grid dots overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LARGE SCROLLFLOAT HEADING */}
        <div className="mb-10 sm:mb-16 text-center">
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
            Simple • Honest • Professional
          </p>
        </div>

        {/* 4 CARDS AS REQUIRED BY BRIEF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <ScrollReveal key={idx} animation="scale-up" delay={idx * 100}>
              <BorderGlow
                edgeSensitivity={45}
                glowColor="25 95 53"
                backgroundColor="#FAF7F0"
                borderRadius={24}
                glowRadius={40}
                glowIntensity={1.3}
                coneSpread={35}
                colors={['#F97316', '#EA580C', '#10B981']}
                className="h-full shadow-lg transition-all duration-300"
              >
                <div className="p-6 sm:p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 shadow-md">
                      {card.icon}
                    </div>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slateDark-950 mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex justify-end text-orange-600 font-mono text-xs font-bold">
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
