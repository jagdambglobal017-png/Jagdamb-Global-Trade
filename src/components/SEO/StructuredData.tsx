import React from 'react';
import { productsData } from '../../data/products';
import { faqData } from '../../data/faq';

export const StructuredData: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jagdamb Global Trade',
    url: 'https://jagdambglobaltrade.com',
    logo: 'https://jagdambglobaltrade.com/assets/logo.png',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Siddhi Vijay Atkare',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dighol Vasti, Kallam',
      addressLocality: 'District Dharashiv',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9403340502',
      contactType: 'Sales & Export Enquiries',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    sameAs: [
      'https://wa.me/919403340502',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    name: 'Jagdamb Global Trade',
    image: 'https://jagdambglobaltrade.com/assets/about_warehouse.jpg',
    telephone: '+91-9403340502',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dighol Vasti, Kallam',
      addressLocality: 'District Dharashiv',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.4900',
      longitude: '75.9500',
    },
    priceRange: '$$$',
    description: 'Indian export-import firm offering agricultural products, natural superfoods, food ingredients, and packaging solutions for global trade.',
  };

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: productsData.slice(0, 10).map((prod, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Product',
        name: prod.name,
        description: prod.description,
        countryOfOrigin: {
          '@type': 'Country',
          name: 'India',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
