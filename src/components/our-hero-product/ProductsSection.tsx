import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { ReflectiveCard } from './ReflectiveCard';
import { Sparkles, ArrowRight, MessageSquare, Tag } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

interface ProductsSectionProps {
  t: TranslationDictionary;
  onOpenEnquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ t, onOpenEnquiry }) => {

  const handleWhatsAppEnquiry = (productName: string) => {
    const text = encodeURIComponent(`Hello Jagdamb Global Trade, I am interested in importing/sourcing ${productName}. Please share export pricing, availability, and packaging details.`);
    window.open(`https://wa.me/918668404068?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-[#EFEADF] text-slateDark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{t.products.catalogueBadge}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slateDark-950 tracking-tight mt-3">
              Our Hero Product
            </h2>
            <p className="text-sm sm:text-base text-slateDark-900 font-bold max-w-2xl mx-auto leading-relaxed">
              {t.products.subheading}
            </p>
          </ScrollReveal>
        </div>

        {/* SINGLE HERO PRODUCT HORIZONTAL CARD */}
        <div className="pt-4 max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up" delay={200}>
            <ReflectiveCard className="flex flex-col shadow-lg hover:shadow-2xl overflow-hidden group">
              {/* Image Section - Full width landscape */}
              <div className="relative w-full overflow-hidden bg-[#EFEADF]">
                <img
                  src="/hero-product.jpg"
                  alt="Cow Dung Organic Compost"
                  className="w-full h-auto block transform group-hover:scale-[1.01] transition-transform duration-700"
                />
              </div>

              {/* Detailed Content Section */}
              <div className="w-full bg-white text-slateDark-950 p-6 md:p-10 space-y-8">
                
                {/* Introduction */}
                <div className="space-y-3 max-w-4xl">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#2d6a30] uppercase tracking-widest">
                    <Tag className="w-3.5 h-3.5 text-[#2d6a30]" />
                    <span>100% Natural Organic Fertilizer</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-slateDark-950 leading-tight">
                    Cow Dung Organic Compost
                  </h3>
                  <p className="text-sm text-slateDark-900 leading-relaxed font-bold">
                    Made from pure cow dung, it enhances soil fertility, provides essential nutrients, and promotes healthy plant growth.
                  </p>
                </div>

                {/* 2-Column Grid for Benefits & Usage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200/60 pt-8">
                  {/* Key Benefits */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold text-[#1e4620] uppercase tracking-wider">Key Benefits</h4>
                    <ul className="space-y-3">
                      {[
                        'Increases soil fertility',
                        'Supports plant growth',
                        'Rich in natural nutrients',
                        'Improves soil structure and enhances water retention capacity',
                        'Safe for plants, soil, and the environment'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slateDark-900 leading-relaxed">
                          <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#419c45] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How to Use */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold text-[#1e4620] uppercase tracking-wider">How to Use</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2.5 text-xs font-bold text-slateDark-900 leading-relaxed">
                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#419c45] flex-shrink-0" />
                        <span><strong className="text-slateDark-950">For Home Gardens:</strong> Mix 100–200 grams into the soil per plant.</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs font-bold text-slateDark-900 leading-relaxed">
                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#419c45] flex-shrink-0" />
                        <span><strong className="text-slateDark-950">For Agriculture:</strong> 1–2 tons per acre (as per soil requirements).</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-xs font-bold text-slateDark-900 leading-relaxed">
                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#419c45] flex-shrink-0" />
                        <span><strong className="text-slateDark-950">For Potted Plants:</strong> Mix 10–20% compost into the potting soil.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2-Column Grid for Nutrition & Storage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200/60 pt-8">
                  {/* Nutritional Content */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold text-[#1e4620] uppercase tracking-wider">Nutritional Content <span className="text-[10px] text-slate-500 normal-case tracking-normal">(Typical Value)</span></h4>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {[
                        { label: 'Organic Carbon', value: '12–18%' },
                        { label: 'Nitrogen (N)', value: '0.8–1.2%' },
                        { label: 'Phosphorus (P₂O₅)', value: '0.4–0.8%' },
                        { label: 'Potassium (K₂O)', value: '0.6–1.2%' },
                        { label: 'Moisture', value: '15–25%' },
                        { label: 'pH', value: '6.5–8.0' },
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
                          <span className="text-[11px] font-extrabold text-slate-600">{stat.label}</span>
                          <span className="text-[11px] font-bold text-slateDark-950">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Storage Precautions */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-extrabold text-[#1e4620] uppercase tracking-wider">Storage Precautions</h4>
                    <ul className="space-y-3">
                      {[
                        'Store in a cool and dry place.',
                        'Use only in recommended quantities.',
                        'Keep away from direct intense sunlight.',
                        'Store in an airtight/covered pack.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slateDark-900 leading-relaxed">
                          <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Action Buttons Section */}
              <div className="p-4 md:p-6 w-full bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenEnquiry('Cow Dung Organic Compost')}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#1e4620] hover:bg-[#153416] text-white font-extrabold text-sm transition-colors shadow-md text-center flex items-center justify-center gap-2"
                >
                  {t.products.enquireBtn}
                </button>
                <button
                  onClick={() => handleWhatsAppEnquiry('Cow Dung Organic Compost')}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-sm transition-colors flex items-center justify-center gap-2 border border-slate-200 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#1e4620]" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </ReflectiveCard>
          </ScrollReveal>
        </div>


        {/* CTA BOTTOM INTIMATION */}
        <ScrollReveal animation="fade-up">
          <div className="text-center pt-8">
            <p className="text-xs sm:text-sm text-slateDark-900 font-bold mb-4">
              Need custom packaging, private labeling, or bulk metric tonnage pricing?
            </p>
            <button
              onClick={() => onOpenEnquiry('Custom Bulk Order')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold tracking-widest uppercase transition-all shadow-md hover:shadow-lg"
            >
              <span>{t.nav.enquireNow}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
