import React, { useState } from 'react';
import { TranslationDictionary } from '../../types/translation';
import { FAQItem, faqData } from '../../data/faq';
import { Button } from '../buttons/Button';
import { ChevronDown, HelpCircle, MessageSquare, Send } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface FAQSectionProps {
  t: TranslationDictionary;
  onOpenEnquiry: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t, onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919403340502', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#EFEADF] text-slateDark-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-white" />
              <span>{t.faq.knowledgeTag}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slateDark-950 tracking-tight mt-3">
              {t.faq.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slateDark-900 font-bold max-w-xl mx-auto leading-relaxed">
              {t.faq.subheading}
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {faqData.map((item: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={item.id} animation="fade-up" delay={idx * 50}>
                <div className="rounded-2xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-sm overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-base sm:text-lg text-slateDark-950 hover:text-slate-700 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{t.faqList?.[item.id]?.question || item.question}</span>
                    <div className={`w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-slate-700' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slateDark-900 leading-relaxed font-bold border-t border-white/40">
                      {t.faqList?.[item.id]?.answer || item.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA BOTTOM BOX IN ORANGE */}
        <ScrollReveal animation="scale-up">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl text-center space-y-4">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-orange-500">
              {t.faq.ctaHeading}
            </h3>
            <p className="text-xs sm:text-sm text-slateDark-900 font-bold max-w-xl mx-auto">
              {t.faq.ctaSubheading}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button variant="primary" icon={<Send className="w-4 h-4" />} onClick={onOpenEnquiry}>
                {t.faq.askUsBtn}
              </Button>
              <Button variant="whatsapp" icon={<MessageSquare className="w-4 h-4 text-white" />} onClick={handleWhatsAppClick}>
                {t.faq.whatsAppUsBtn}
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
