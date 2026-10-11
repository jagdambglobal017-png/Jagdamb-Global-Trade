import React, { useState, useEffect } from 'react';
import { LanguageCode } from './types/translation';
import { getTranslation, languageOptions } from './data/translations';
import { StructuredData } from './components/SEO/StructuredData';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { WhyUs } from './components/why-us/WhyUs';
import { ProductsSection } from './components/our-hero-product/ProductsSection';
import { ProductEnquiryDrawer } from './components/our-hero-product/ProductEnquiryDrawer';
import { FAQSection } from './components/faq/FAQSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { LegalModal } from './components/common/LegalModal';
import { PageTransition } from './components/common/PageTransition';
import { Preloader } from './components/common/Preloader';
import { AnimatePresence } from 'framer-motion';

export const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<string>('General Export Product Enquiry');
  
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    title: string;
    type: 'privacy' | 'terms' | 'shipping' | 'disclaimer';
  }>({
    isOpen: false,
    title: '',
    type: 'privacy',
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = getTranslation(currentLanguage);
  const selectedLangOption = languageOptions.find((opt) => opt.code === currentLanguage);

  // Handle language change with page transition & RTL layout support
  const handleSelectLanguage = (code: LanguageCode) => {
    if (code === currentLanguage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLanguage(code);
      setIsTransitioning(false);
    }, 600);
  };

  // Update HTML dir attribute for RTL support (Arabic, Persian, Hebrew, Urdu)
  useEffect(() => {
    const isRtl = selectedLangOption?.rtl || false;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, selectedLangOption]);

  const handleOpenEnquiry = (productName?: string) => {
    setSelectedProduct(productName || 'General Export Product Enquiry');
    setEnquiryOpen(true);
  };

  const handleOpenLegal = (title: string, type: 'privacy' | 'terms' | 'shipping' | 'disclaimer') => {
    setLegalModalState({
      isOpen: true,
      title,
      type,
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-slateDark-950 font-sans antialiased selection:bg-slate-800 selection:text-white">
      {/* 0. INITIAL PRELOADER */}
      <AnimatePresence mode="wait">
        {isInitialLoading && (
          <Preloader key="preloader" onComplete={() => setIsInitialLoading(false)} />
        )}
      </AnimatePresence>

      {/* 1. SEO JSON-LD STRUCTURED DATA */}
      <StructuredData />

      {/* 2. SECTION TRANSITION OVERLAY */}
      <PageTransition isLoading={isTransitioning} />

      {/* 3. FLOATING GLASSMORPHIC NAVIGATION BAR */}
      <Navbar
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
        onOpenEnquiry={handleOpenEnquiry}
        t={t}
      />

      {/* 4. MAIN CONTENT SECTIONS */}
      <main>
        {/* HERO SECTION WITH LIGHTRAYS & CARGO SHIP */}
        <Hero t={t} onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* ABOUT US SECTION */}
        <About t={t} />

        {/* WHY US SECTION WITH SCROLLFLOAT GSAP */}
        <WhyUs t={t} />

        {/* PRODUCTS SECTION WITH REFLECTIVE CARDS */}
        <ProductsSection t={t} onOpenEnquiry={handleOpenEnquiry} />

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <FAQSection t={t} onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* DIRECT CONTACT SECTION */}
        <ContactSection t={t} onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* 5. DARK PREMIUM FOOTER WITH 34-LANGUAGE SELECTOR & LEGAL LINKS */}
      <Footer
        t={t}
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenLegalModal={handleOpenLegal}
      />

      {/* 6. GLOBAL PRODUCT ENQUIRY DRAWER */}
      <ProductEnquiryDrawer
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        selectedProductName={selectedProduct}
        t={t}
      />

      {/* 7. LEGAL INFORMATION MODAL */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
        title={legalModalState.title}
        type={legalModalState.type}
        t={t}
      />
    </div>
  );
};

export default App;
