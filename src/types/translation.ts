export type LanguageCode =
  // Indian Languages
  | 'en' | 'hi' | 'mr' | 'gu' | 'bn' | 'ta' | 'te' | 'kn' | 'ml' | 'pa' | 'ur'
  // Asian Languages
  | 'zh' | 'ja' | 'ko' | 'id' | 'ms' | 'vi' | 'th' | 'fil'
  // European Languages
  | 'fr' | 'es' | 'pt' | 'de' | 'it' | 'nl' | 'ru' | 'uk' | 'pl' | 'tr'
  // Middle Eastern / African Languages
  | 'ar' | 'fa' | 'he' | 'sw';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  category: 'INDIA' | 'ASIA' | 'EUROPE' | 'MIDDLE EAST & AFRICA';
  rtl?: boolean;
}

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    products: string;
    whyUs: string;
    faq: string;
    contact: string;
    translate: string;
    enquireNow: string;
    whatsAppUs: string;
  };
  hero: {
    tagline: string;
    headline: string;
    subheadline: string;
    exploreBtn: string;
    contactBtn: string;
    whatsAppBtn: string;
    qualityBadge: string;
    originBadge: string;
    shippingBadge: string;
    readyBadge: string;
    foundedBadge: string;
    firmBadge: string;
    responseBadge: string;
    whatsAppBadge: string;
  };
  about: {
    heading: string;
    content: string;
    imageAlt: string;
    badgeTitle: string;
    badgeSubtitle: string;
    foundedTitle: string;
    locationTitle: string;
    locationValue: string;
  };
  whyUs: {
    heading: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    subtag: string;
  };
  products: {
    heading: string;
    subheading: string;
    intro: string;
    catalogueBadge: string;
    filterAll: string;
    filterSuperfoods: string;
    filterAgri: string;
    filterFood: string;
    filterSpices: string;
    originLabel: string;
    availabilityLabel: string;
    enquireBtn: string;
    whatsAppEnquiryBtn: string;
    viewDetailsBtn: string;
    featuredBadge: string;
  };
  enquiry: {
    title: string;
    productLabel: string;
    nameLabel: string;
    companyLabel: string;
    emailLabel: string;
    phoneLabel: string;
    quantityLabel: string;
    destinationLabel: string;
    messageLabel: string;
    submitBtn: string;
    whatsAppContinueBtn: string;
    successMsg: string;
    errorMsg: string;
    systemTag: string;
    helplineText: string;
    closeBtn: string;
  };
  faq: {
    heading: string;
    subheading: string;
    knowledgeTag: string;
    ctaHeading: string;
    ctaSubheading: string;
    askUsBtn: string;
    whatsAppUsBtn: string;
  };
  contact: {
    tagline: string;
    heading: string;
    intro: string;
    ownerRole: string;
    ownerName: string;
    ownerFirm: string;
    phoneRole: string;
    phoneDesc: string;
    emailRole: string;
    emailDesc: string;
    hqRole: string;
    hqAddress: string;
    calloutTag: string;
    calloutHeading: string;
    calloutDesc: string;
    startBtn: string;
    whatsAppBtn: string;
  };
  footer: {
    brandTagline: string;
    quickLinks: string;
    categories: string;
    contactInfo: string;
    ownerLabel: string;
    businessLabel: string;
    addressLabel: string;
    foundedLabel: string;
    privacy: string;
    terms: string;
    shippingInfo: string;
    disclaimer: string;
    copyright: string;
    ctaHeadline: string;
    ctaSubtext: string;
    startEnquiry: string;
    brandDesc: string;
    superfoodCat: string;
    agriCat: string;
    foodCat: string;
    spicesCat: string;
    packagingCat: string;
  };
  legal: {
    closeBtn: string;
    privacyTitle: string;
    termsTitle: string;
    shippingTitle: string;
    disclaimerTitle: string;
  };
  productsList?: Record<string, { name: string; description: string; }>;
  faqList?: Record<string, { question: string; answer: string; }>;
}
