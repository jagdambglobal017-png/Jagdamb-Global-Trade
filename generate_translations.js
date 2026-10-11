import fs from 'fs';
import translate from 'translate-google';

const defaultEnglishTranslation = {
  nav: {
    home: 'Home',
    about: 'About',
    products: 'Products',
    whyUs: 'Why Us',
    faq: 'FAQ',
    contact: 'Contact',
    translate: 'Translate',
    enquireNow: 'Enquire Now',
    whatsAppUs: 'WhatsApp Us',
  },
  hero: {
    tagline: 'INDIAN AGRICULTURAL EXPORT & IMPORT FIRM',
    headline: 'CONNECTING INDIA WITH GLOBAL MARKETS',
    subheadline: 'Jagdamb Global Trade brings Indian agricultural products, natural superfoods, food ingredients, and other products to the world through growing export and import capabilities.',
    exploreBtn: 'Explore Products',
    contactBtn: 'Get in Touch',
    whatsAppBtn: 'WhatsApp Us',
    qualityBadge: 'Quality Sourced',
    originBadge: 'Indian Origin',
    shippingBadge: 'Global Shipping',
    readyBadge: 'Export Ready',
    foundedBadge: 'Founded 2025',
    firmBadge: 'Trade Firm',
    responseBadge: 'Fast Response',
    whatsAppBadge: 'Direct WhatsApp',
  },
  about: {
    heading: 'ABOUT JAGDAMB GLOBAL TRADE',
    content: 'Founded in 2025, Jagdamb Global Trade is a growing export-import firm focused on delivering quality products and reliable packaging solutions to customers across markets. The firm is continuously expanding its capabilities in international trade, sourcing, packaging, and supply solutions, with a strong focus on quality, reliability, and long-term business relationships.',
    imageAlt: 'Workers inspecting and packaging agricultural superfood products',
    badgeTitle: 'ESTABLISHED 2025',
    badgeSubtitle: 'Dharashiv, Maharashtra, India',
    foundedTitle: 'FOUNDED',
    locationTitle: 'LOCATION',
    locationValue: 'Dharashiv, Maharashtra',
  },
  whyUs: {
    heading: 'WHY US',
    card1Title: 'Quality Focus',
    card1Desc: 'We prioritize consistent product quality and careful handling throughout the sourcing and supply process.',
    card2Title: 'Reliable Trade',
    card2Desc: 'We aim to build dependable export and import relationships through professional communication and responsible execution.',
    card3Title: 'Growing Capabilities',
    card3Desc: 'Founded in 2025, we are continuously expanding our export, import, sourcing, and packaging capabilities.',
    card4Title: 'Packaging Solutions',
    card4Desc: 'We focus on practical packaging solutions designed to support product protection, presentation, and transportation.',
    card5Title: 'Customer Commitment',
    card5Desc: 'We value clear communication, responsiveness, and long-term relationships with our business partners.',
    subtag: 'Pillars of Reliability & Growth',
  },
  products: {
    heading: 'OUR PRODUCTS',
    subheading: 'Premium Indian products, carefully sourced for global markets.',
    intro: 'Explore our growing range of agricultural products, natural superfoods, food ingredients, and other products sourced from India for international trade.',
    catalogueBadge: 'EXPORT CATALOGUE',
    filterAll: 'All Products',
    filterSuperfoods: 'Superfoods',
    filterAgri: 'Agricultural Products',
    filterFood: 'Food Products',
    filterSpices: 'Spices & Ingredients',
    originLabel: 'ORIGIN — INDIA',
    availabilityLabel: 'BULK / EXPORT',
    enquireBtn: 'Enquire Now',
    whatsAppEnquiryBtn: 'WhatsApp Enquiry',
    viewDetailsBtn: 'View Details',
    featuredBadge: 'FEATURED',
  },
  enquiry: {
    title: 'ENQUIRE ABOUT',
    productLabel: 'Selected Product',
    nameLabel: 'Your Full Name *',
    companyLabel: 'Company Name',
    emailLabel: 'Business Email *',
    phoneLabel: 'WhatsApp / Phone Number *',
    quantityLabel: 'Quantity Required (e.g. 5 Metric Tons) *',
    destinationLabel: 'Destination Port / Country *',
    messageLabel: 'Specific Trade & Packaging Requirements',
    submitBtn: 'SEND ENQUIRY',
    whatsAppContinueBtn: 'CONTINUE ON WHATSAPP',
    successMsg: 'Thank you! Your enquiry has been received. Our trade team will respond shortly.',
    errorMsg: 'Please fill in all required fields to submit your enquiry.',
    systemTag: 'EXPORT ENQUIRY SYSTEM',
    helplineText: 'Direct Trade Helpline:',
    closeBtn: 'Close Window',
  },
  faq: {
    heading: 'FREQUENTLY ASKED QUESTIONS',
    subheading: 'Everything you need to know about our products, sourcing, export enquiries, and business process.',
    knowledgeTag: 'KNOWLEDGE BASE & INFORMATION',
    ctaHeading: 'STILL HAVE QUESTIONS?',
    ctaSubheading: 'Talk directly with Jagdamb Global Trade about your product or export requirement.',
    askUsBtn: 'Ask Us',
    whatsAppUsBtn: 'WhatsApp Us',
  },
  contact: {
    tagline: 'DIRECT BUSINESS CONTACT',
    heading: 'Contact — Jagdamb Global Trade',
    intro: 'Whether you are an international buyer seeking bulk superfoods, agricultural grains, or customized packaging solutions, Jagdamb Global Trade is ready to discuss your requirements.',
    ownerRole: 'FIRM OWNER',
    ownerName: 'Siddhi Vijay Atkare',
    ownerFirm: 'Jagdamb Global Trade (Founded 2025)',
    phoneRole: 'WHATSAPP / PHONE',
    phoneDesc: 'Instant International Trade Helpline',
    emailRole: 'OFFICIAL EMAIL',
    emailDesc: 'Official Business & Trade Enquiries',
    hqRole: 'HEADQUARTERS ADDRESS',
    hqAddress: 'Dighol Vasti, Kallam, District Dharashiv, Maharashtra, India',
    calloutTag: 'GLOBAL EXPORT INQUIRIES',
    calloutHeading: 'Ready to source premium products from India?',
    calloutDesc: 'Submit an enquiry specifying your product, quantity, destination port, and packaging requirements for a prompt response from Jagdamb Global Trade.',
    startBtn: 'Start Trade Enquiry',
    whatsAppBtn: 'WhatsApp Helpline',
  },
  footer: {
    brandTagline: 'Export • Import • Global Trade',
    quickLinks: 'QUICK LINKS',
    categories: 'PRODUCT CATEGORIES',
    contactInfo: 'CONTACT INFORMATION',
    ownerLabel: 'Owner',
    businessLabel: 'Business',
    addressLabel: 'Address',
    foundedLabel: 'FOUNDED — 2025',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    shippingInfo: 'Shipping / Export Info',
    disclaimer: 'Disclaimer',
    copyright: '© 2026 Jagdamb Global Trade. All rights reserved.',
    ctaHeadline: "LET'S BUILD GLOBAL CONNECTIONS",
    ctaSubtext: 'Looking for quality products from India? Talk to Jagdamb Global Trade about your sourcing, export, import, and packaging requirements.',
    startEnquiry: 'Start an Enquiry',
    brandDesc: 'Connecting quality Indian agricultural products, natural superfoods, and food ingredients with global markets through reliable sourcing, trade, and packaging solutions.',
    superfoodCat: 'Superfoods & Botanicals',
    agriCat: 'Agricultural Products & Grains',
    foodCat: 'Food Products & Ingredients',
    spicesCat: 'Indian Spices & Condiments',
    packagingCat: 'Custom Export Packaging',
  },
  legal: {
    closeBtn: 'Close Window',
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms & Conditions',
    shippingTitle: 'Shipping & Export Information',
    disclaimerTitle: 'Disclaimer',
  },
  productsList: {
    'moringa-powder': {
      name: 'Moringa Powder',
      description: 'Pure, shade-dried organic Moringa oleifera leaf powder sourced from premium Indian farms for bulk global export.'
    },
    'turmeric-powder': {
      name: 'Turmeric Powder',
      description: 'Vibrant golden Curcuma longa powder with high natural curcumin content, ideal for food ingredients and wellness formulations.'
    },
    'fingertail-millet': {
      name: 'Fingertail Millet',
      description: 'Nutritious, climate-resilient Indian Fingertail Millet, carefully cleaned and sorted for international trade and consumption.'
    },
    'cow-dung': {
      name: 'Cow Dung',
      description: '100% natural, sun-dried Indian cow dung cakes and manure, traditionally processed for organic farming, fertilizers, and ritualistic purposes.'
    }
  },
  faqList: {
    'faq-1': { question: 'What is Jagdamb Global Trade?', answer: 'Jagdamb Global Trade is an India-based export-import firm founded in 2025, focused on agricultural products, natural superfoods, food ingredients, and other products for international trade.' },
    'faq-2': { question: 'Where is Jagdamb Global Trade based?', answer: 'Jagdamb Global Trade is based in Dighol Vasti, Kallam, District Dharashiv, Maharashtra, India.' },
    'faq-3': { question: 'What products do you offer?', answer: 'Our range includes natural superfoods, botanical ingredients, agricultural products, food products, spices, fruits, vegetables, coffee, tea, cashews, maize, wheat, and processed food products.' },
    'faq-4': { question: 'Do you offer products in bulk for export?', answer: 'Our catalogue is designed around bulk and export enquiries. Availability, quantity, packaging, and requirements can be discussed for each product.' },
    'faq-5': { question: "Can I request a product that isn't listed?", answer: 'Yes. Buyers can contact the team with specific product requirements for sourcing discussion.' },
    'faq-6': { question: 'Do you provide packaging solutions?', answer: "Packaging solutions are part of Jagdamb Global Trade's growing capabilities and can be discussed according to product and buyer requirements." },
    'faq-7': { question: 'How can I enquire about a product?', answer: 'Use the Enquire Now button on a product card or contact the business through WhatsApp.' },
    'faq-8': { question: 'How can I contact Jagdamb Global Trade?', answer: 'WhatsApp: +91 86684 04068 | Email: Official Business Email' },
    'faq-9': { question: 'Can international buyers contact you?', answer: 'Yes. International buyers can contact Jagdamb Global Trade with product, quantity, packaging, and destination requirements.' },
    'faq-10': { question: 'What information should I include in an enquiry?', answer: 'Include product name, quantity, packaging preference, destination, and any specific requirements.' },
    'faq-11': { question: 'Are the products sourced from India?', answer: 'Jagdamb Global Trade is an India-based export-import firm and its catalogue focuses on products sourced from India for international trade.' },
    'faq-12': { question: 'How do I get a quotation?', answer: 'Submit an enquiry with product, quantity, packaging, and destination information.' },
    'faq-13': { question: 'Can I discuss customized requirements?', answer: 'Yes. Buyers can share specific product, quantity, packaging, and trade requirements.' },
    'faq-14': { question: 'Is Jagdamb Global Trade available for long-term business relationships?', answer: 'Jagdamb Global Trade aims to build reliable, long-term relationships with buyers and business partners.' },
    'faq-15': { question: 'How quickly will my enquiry be answered?', answer: 'Response time may vary depending on the product and complexity of the enquiry. Complete enquiries help the team understand requirements efficiently.' }
  }
};

const languages = [
  'hi', 'mr', 'gu', 'bn', 'ta', 'te', 'kn', 'ml', 'pa', 'ur',
  'zh-CN', 'ja', 'ko', 'id', 'ms', 'vi', 'th', 'tl',
  'fr', 'es', 'pt', 'de', 'it', 'nl', 'ru', 'uk', 'pl', 'tr',
  'ar', 'fa', 'he', 'sw'
];

const reverseCodeMapping = {
  'zh-CN': 'zh',
  'tl': 'fil'
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const result = {};

  for (const langCode of languages) {
    const originalCode = reverseCodeMapping[langCode] || langCode;
    console.log(`Translating to ${originalCode}...`);

    try {
      const translatedObj = await translate(defaultEnglishTranslation, { to: langCode });
      result[originalCode] = translatedObj;
      console.log(`Successfully translated to ${originalCode}`);
    } catch (e) {
      console.error(`Failed to translate for ${originalCode}:`, e.message);
      result[originalCode] = null;
    }

    await sleep(2000);
  }

  fs.writeFileSync('./generated_translations.json', JSON.stringify(result, null, 2));
  console.log('Done translating. Wrote to generated_translations.json');
}

run();
