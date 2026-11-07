import { Product } from '../types/product';

export const productsData: Product[] = [
  {
    id: 'quinoa',
    name: 'Quinoa',
    englishName: 'Quinoa',
    scientificName: 'Chenopodium quinoa',
    category: 'Superfoods',
    tagline: 'Super Grain for a Healthier You',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Complete Protein',
      'Boosts Immunity',
      'Supports Digestion',
      'Rich in Iron & Minerals'
    ],
    description: 'Known in English as Quinoa and scientifically classified as Chenopodium quinoa, this super grain is a complete plant protein containing all nine essential amino acids, dietary fiber, iron, and minerals supporting whole-body vitality.',
    image: '/products/quinoa.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Multi-wall Paper Bags',
      '50kg PP Bags',
      'Custom Retail Pouches (500g, 1kg)'
    ],
    hsCode: '1008.50.00'
  },
  {
    id: 'safed-musali',
    name: 'Safed Musali Powder',
    englishName: 'White Musli / Indian Spider Plant',
    scientificName: 'Chlorophytum borivilianum',
    category: 'Superfoods',
    tagline: 'For Strength, Energy & Vitality',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Boosts Energy',
      'Supports Immunity',
      'Enhances Stamina',
      'Natural Strength'
    ],
    description: 'Known in English as White Musli (Indian Spider Plant) and botanically identified as Chlorophytum borivilianum, this revered Ayurvedic Rasayana herb is celebrated for invigorating stamina, physical endurance, energy, and natural strength.',
    image: '/products/safed-musali.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Fiber Drums',
      '50kg HDPE Drums',
      'Vacuum Sealed Aluminum Foil Bags'
    ],
    hsCode: '1211.90.90'
  },
  {
    id: 'shatavari-powder',
    name: 'Shatavari Root Powder',
    englishName: 'Wild Asparagus / Shatavari',
    scientificName: 'Asparagus racemosus',
    category: 'Superfoods',
    tagline: "For Women's Health & Vitality",
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Hormonal Balance',
      'Boosts Immunity',
      'Supports Reproductive Health',
      'Natural Energy & Vitality'
    ],
    description: 'Known in English as Wild Asparagus and scientifically designated as Asparagus racemosus, Shatavari is celebrated in traditional Ayurveda as the "Queen of Herbs" for female hormonal balance, reproductive wellness, and natural energy.',
    image: '/products/shatavari-powder.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Fiber Drums',
      '50kg Drums',
      'Food-Grade Multi-Layer Paper Bags'
    ],
    hsCode: '1211.90.29'
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    englishName: 'Chia Seeds',
    scientificName: 'Salvia hispanica',
    category: 'Superfoods',
    tagline: 'Tiny Seeds, Big Benefits',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Supports Heart Health',
      'Boosts Immunity',
      'Improves Digestion',
      'Rich in Omega-3 & Fiber'
    ],
    description: 'Known in English as Chia Seeds and botanically classified as Salvia hispanica, these miniature seeds deliver rich plant-based Omega-3 fatty acids, dietary fiber, antioxidants, and protein for cardiovascular and metabolic wellness.',
    image: '/products/chia-seeds.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg PP Woven Bags',
      '50kg Jute / PP Bags',
      '1kg / 500g Stand-up Zip Pouches'
    ],
    hsCode: '1207.99.90'
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    englishName: 'Pumpkin Seeds / Pepitas',
    scientificName: 'Cucurbita pepo',
    category: 'Superfoods',
    tagline: 'Small Seeds, Big Nutrition',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Heart Health',
      'Boosts Immunity',
      'Rich in Magnesium',
      'Supports Overall Wellness'
    ],
    description: 'Known in English as Pumpkin Seeds (Pepitas) and scientifically identified as Cucurbita pepo, these nutrient-dense seeds provide rich bioavailable magnesium, zinc, and healthy fats supporting heart health and deep vitality.',
    image: '/products/pumpkin-seeds.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Multi-wall Paper Bags',
      '50kg PP Bags with Inner Liner',
      'Vacuum Brick Packs (5kg, 10kg)'
    ],
    hsCode: '1207.99.90'
  },
  {
    id: 'hibiscus-powder',
    name: 'Hibiscus Powder',
    englishName: 'Hibiscus Flower / Roselle Powder',
    scientificName: 'Hibiscus sabdariffa',
    category: 'Superfoods',
    tagline: 'Natural Goodness for a Healthier You',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Rich in Antioxidants',
      'Supports Heart Health',
      'Boosts Immunity',
      'Good for Skin & Hair'
    ],
    description: 'Known in English as Hibiscus Flower Powder (Roselle) and scientifically designated as Hibiscus sabdariffa, this vibrant ruby-red botanical powder is loaded with natural anthocyanins and vitamin C for heart, skin, and immune wellness.',
    image: '/products/hibiscus-powder.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Fiber Drums',
      '50kg HDPE Drums',
      'Aluminum Foil Vacuum Pouches'
    ],
    hsCode: '1211.90.90'
  },
  {
    id: 'tulsi-leaves-powder',
    name: 'Tulsi Leaves Powder',
    englishName: 'Holy Basil / Tulsi Leaves',
    scientificName: 'Ocimum sanctum',
    category: 'Superfoods',
    tagline: 'For Immunity & Overall Wellness',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Boosts Immunity',
      'Supports Respiratory Health',
      'Rich in Antioxidants',
      'Natural & Pure'
    ],
    description: 'Known in English as Holy Basil and scientifically as Ocimum sanctum, Tulsi is revered in Ayurveda as the "Queen of Herbs". An adaptogenic super-herb packed with antioxidants to support respiratory wellness and natural immunity.',
    image: '/products/tulsi-leaves-powder.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Fiber Drums',
      '50kg Drums',
      'Multi-layer Kraft Paper Bags'
    ],
    hsCode: '1211.90.90'
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    englishName: 'Indian Gooseberry / Amla',
    scientificName: 'Phyllanthus emblica',
    category: 'Superfoods',
    tagline: "Nature's Goodness for a Healthier Tomorrow",
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Rich in Vitamin C',
      'Boosts Immunity',
      'Powerful Antioxidant',
      'Supports Overall Wellness'
    ],
    description: 'Known in English as Indian Gooseberry and botanically classified as Phyllanthus emblica (Emblica officinalis), Amla is nature\'s richest source of bioavailable Vitamin C, supporting whole-body immunity, longevity, and radiance.',
    image: '/products/amla-powder.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Fiber Drums',
      '50kg Bags',
      'Moisture-Proof Aluminum Foil Bags'
    ],
    hsCode: '1211.90.90'
  },
  {
    id: 'senna-leaves-powder',
    name: 'Senna Leaves Powder',
    englishName: 'Senna Leaves Powder',
    scientificName: 'Cassia angustifolia',
    category: 'Superfoods',
    tagline: 'For Healthy Digestion & Detox Support',
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Supports Digestive Health',
      'Promotes Regular Bowel Movement',
      'Helps Detoxify the Body',
      'Supports Natural Cleanse'
    ],
    description: 'Known in English as Senna Leaves Powder and scientifically designated as Cassia angustifolia, this cleansing botanical is prized for promoting gentle digestive detox, regular bowel motility, and natural inner metabolic cleanse.',
    image: '/products/senna-leaves-powder.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Multi-wall Paper Bags',
      '50kg PP Bags with Liner',
      'Custom Bulk Pack Sizes'
    ],
    hsCode: '1211.90.22'
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    englishName: 'Drumstick Tree Leaf / Moringa',
    scientificName: 'Moringa oleifera',
    category: 'Superfoods',
    tagline: "Nature's Superfood for a Healthier Tomorrow",
    badge: 'Pure • Natural • Ayurvedic',
    highlights: [
      'Rich in Nutrients',
      'Boosts Immunity',
      'Increases Energy & Stamina',
      'Supports Overall Wellness'
    ],
    description: 'Known in English as Moringa Leaf Powder (Drumstick Tree) and scientifically identified as Moringa oleifera, this miraculous green superfood delivers concentrated plant protein, iron, calcium, and multi-vitamins for daily vitality.',
    image: '/products/moringa-powder.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: [
      '25kg Fiber Drums',
      '50kg HDPE Drums',
      'Vacuum Sealed Aluminum Foil Bags'
    ],
    hsCode: '1211.90.90'
  }
];
