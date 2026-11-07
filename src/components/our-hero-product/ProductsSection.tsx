import React from 'react';
import { TranslationDictionary } from '../../types/translation';
import { Sparkles, MessageSquare, Send, Globe, Microscope, Table } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { productsData } from '../../data/products';

interface ProductsSectionProps {
  t?: TranslationDictionary;
  onOpenEnquiry: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenEnquiry }) => {
  const handleWhatsAppEnquiry = (productName: string, scientificName: string) => {
    const text = encodeURIComponent(
      `Hello Jagdamb Global Trade, I am interested in sample/quote for ${productName} (${scientificName}). Please share export pricing, lead time, and specifications.`
    );
    window.open(`https://wa.me/919403340502?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-24 relative overflow-hidden bg-[#EFEADF] text-slateDark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ScrollReveal animation="fade-down">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 text-white text-[11px] font-extrabold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>CORE PRODUCTS</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slateDark-950 tracking-tight mt-2">
              Indian Herbal Powders for Export
            </h2>
            <p className="text-sm sm:text-base text-slate-800 font-semibold max-w-2xl mx-auto leading-relaxed">
              Bulk supply of Indian herbal powders to food and wellness buyers in Dubai and the GCC. Samples available on request.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 CORE PRODUCT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => {
            return (
              <ScrollReveal key={product.id} animation="fade-up" delay={index * 100}>
                <div className="flex flex-col justify-between h-full rounded-3xl overflow-hidden border border-slate-300/80 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  
                  {/* Product Visual Header */}
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-100 border-b border-slate-200">
                    <img
                      src={product.image}
                      alt={`${product.name} - Jagdamb Global Trade`}
                      className="w-full h-full object-cover object-center block transform hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Origin & Category Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-slate-900/90 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        Origin: India
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-700/90 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                        Sample Available
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                    
                    {/* Header: Name, Scientific Name, One-line Use */}
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slateDark-950 leading-snug">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
                        <Microscope className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="italic">{product.scientificName}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed pt-1">
                        {product.oneLineUse}
                      </p>
                    </div>

                    {/* Origin & HS Code Box */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-slate-600" />
                        Origin: <strong>India</strong>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-900 font-bold text-[11px]">
                        HS: {product.hsCode}
                      </span>
                    </div>

                    {/* Specification Table */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                        <Table className="w-3.5 h-3.5 text-orange-500" />
                        <span>Product Specifications</span>
                      </div>

                      <div className="rounded-xl border border-slate-200 overflow-hidden text-xs bg-slate-50/50">
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">Mesh size</span>
                          <span className="font-bold text-slate-900 text-right">{product.specs.meshSize}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">Moisture</span>
                          <span className="font-bold text-slate-900 text-right">{product.specs.moisture}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">Colour / Form</span>
                          <span className="font-bold text-slate-900 text-right">{product.specs.colourForm}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">Packing</span>
                          <span className="font-bold text-slate-900 text-right leading-tight">{product.specs.packing}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">Shelf life</span>
                          <span className="font-bold text-slate-900 text-right">{product.specs.shelfLife}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">MOQ</span>
                          <span className="font-bold text-slate-900 text-right">{product.specs.moq}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2 border-b border-slate-200">
                          <span className="text-slate-500 font-medium">Lead time</span>
                          <span className="font-bold text-slate-900 text-right">{product.specs.leadTime}</span>
                        </div>
                        <div className="grid grid-cols-2 p-2">
                          <span className="text-slate-500 font-medium">Lab report</span>
                          <span className="font-bold text-emerald-800 text-right">{product.specs.labReport}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Buttons: Enquire | WhatsApp */}
                  <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex gap-2.5">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(product.name)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatsAppEnquiry(product.name, product.scientificName)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* BELOW: OTHER PRODUCTS AVAILABLE ON REQUEST */}
        <ScrollReveal animation="fade-up">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-300/80 shadow-lg text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase">
              Custom Sourcing
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slateDark-950">
              Other products available on request.
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xl mx-auto leading-relaxed">
              Looking for Ashwagandha, Turmeric, Shatavari, or customized botanical specifications for your formulations in Dubai & GCC? We source directly from vetted Indian suppliers with export-ready packing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Other Herbal Powders Request')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                Request Custom Product
              </button>
              <a
                href="https://wa.me/919403340502?text=Hello%20Jagdamb%20Global%20Trade%2C%20I%20am%20looking%20for%20other%20herbal%20powders%20not%20listed%20on%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Owner</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
