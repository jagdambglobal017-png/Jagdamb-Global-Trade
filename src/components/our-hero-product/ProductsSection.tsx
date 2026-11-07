import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { ReflectiveCard } from './ReflectiveCard';
import { Sparkles, ArrowRight, MessageSquare, Tag, CheckCircle2, Globe, Microscope } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { productsData } from '../../data/products';

interface ProductsSectionProps {
  t: TranslationDictionary;
  onOpenEnquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ t, onOpenEnquiry }) => {
  const handleWhatsAppEnquiry = (productName: string, scientificName: string) => {
    const text = encodeURIComponent(
      `Hello Jagdamb Global Trade, I am interested in importing/sourcing ${productName} (${scientificName}). Please share export pricing, availability, and packaging details.`
    );
    window.open(`https://wa.me/919403340502?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-20 relative overflow-hidden bg-[#EFEADF] text-slateDark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-[11px] font-extrabold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{t.products.catalogueBadge || 'OUR PRODUCTS'}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slateDark-950 tracking-tight mt-2">
              {t.products.heading || 'Premium Superfoods & Ayurvedic Grains'}
            </h2>
            <p className="text-xs sm:text-sm text-slateDark-900 font-bold max-w-2xl mx-auto leading-relaxed">
              {t.products.subheading || 'Pure, natural, and authentic products carefully sourced from Indian farms, available for domestic wholesale trade across India and certified bulk international export.'}
            </p>
          </ScrollReveal>
        </div>

        {/* COMPACT NORMAL-SIZED PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {productsData.map((product, index) => {
            const prodTrans = t.productsList?.[product.id];
            const displayName = prodTrans?.name || product.name;
            const displayTagline = prodTrans?.tagline || product.tagline;
            const displayDescription = prodTrans?.description || product.description;

            return (
              <ScrollReveal key={product.id} animation="fade-up" delay={index * 80}>
                <ReflectiveCard className="flex flex-col justify-between h-full shadow-md hover:shadow-xl rounded-2xl overflow-hidden group border border-slate-200/90 bg-white transition-all duration-300">
                  
                  {/* Image Section - Normal sized compact header */}
                  <div className="relative w-full h-44 sm:h-52 overflow-hidden bg-[#EFEADF] border-b border-slate-200">
                    <img
                      src={product.image}
                      alt={`${displayName} - Jagdamb Global Trade`}
                      className="w-full h-full object-cover object-center block transform group-hover:scale-105 transition-transform duration-500"
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                    {/* Floating badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Pure • Natural
                      </span>
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#1e4620]/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Domestic & Export
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Title & Tagline */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold text-[#2d6a30] uppercase tracking-wider">
                        <Tag className="w-3 h-3 text-[#2d6a30]" />
                        <span>{displayTagline}</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slateDark-950 leading-snug">
                        {displayName}
                      </h3>
                    </div>

                    {/* Botanical Names Strip (English & Scientific) */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#F9F7F2] border border-slate-200/90 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1 flex-shrink-0">
                          <Globe className="w-3 h-3 text-slate-600" />
                          English Name:
                        </span>
                        <strong className="text-slateDark-950 font-bold text-[11px] text-right truncate">
                          {product.englishName}
                        </strong>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-t border-slate-200/60 pt-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1 flex-shrink-0">
                          <Microscope className="w-3 h-3 text-[#1e4620]" />
                          Scientific Name:
                        </span>
                        <strong className="text-[#1e4620] font-extrabold italic text-[11px] text-right truncate">
                          {product.scientificName}
                        </strong>
                      </div>
                    </div>

                    {/* Description in full sentence */}
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {displayDescription}
                    </p>

                    {/* 4 Key Highlight Badges (Compact 2x2 grid) */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                        Key Highlights:
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {product.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-slateDark-950 text-[10px] font-bold"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#2d6a30] flex-shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Logistics / HS Code */}
                    <div className="pt-1 flex items-center justify-between text-[10px] font-bold text-slate-500 border-t border-slate-100">
                      <span>Origin: {product.origin} • Domestic & Export</span>
                      {product.hsCode && (
                        <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-200 text-orange-800 font-extrabold">
                          HS: {product.hsCode}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Compact Action Buttons */}
                  <div className="p-3 sm:p-3.5 bg-slate-50 border-t border-slate-200 flex gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(displayName)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#1e4620] hover:bg-[#153416] text-white font-extrabold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <span>{t.products.enquireBtn || 'Enquire'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatsAppEnquiry(displayName, product.scientificName)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-300 shadow-sm active:scale-95 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1e4620]" />
                      <span>{t.products.whatsAppEnquiryBtn || 'WhatsApp'}</span>
                    </button>
                  </div>

                </ReflectiveCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA BOTTOM INTIMATION */}
        <ScrollReveal animation="fade-up">
          <div className="text-center pt-4 max-w-2xl mx-auto space-y-3">
            <p className="text-xs sm:text-sm text-slateDark-900 font-bold">
              Looking for tailored packaging, private labeling, or bulk tonnage specifications for your destination port?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => onOpenEnquiry('Custom Bulk Superfood Order')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold tracking-widest uppercase transition-all shadow-md hover:shadow-lg"
              >
                <span>{t.nav.enquireNow || 'Enquire Now'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/919403340502"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e4620] hover:bg-[#153416] text-white text-xs font-extrabold tracking-widest uppercase transition-all shadow-md hover:shadow-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
