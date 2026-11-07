import { Product } from '../types/product';

export const productsData: Product[] = [
  {
    id: 'moringa-leaf-powder',
    name: 'Moringa Leaf Powder',
    scientificName: 'Moringa oleifera',
    oneLineUse: 'Nutrient-rich food ingredient for nutrition blends, smoothies, and functional food products.',
    origin: 'India',
    hsCode: '1211.90.90 [confirm with CHA]',
    image: '/products/moringa-powder.jpg',
    category: 'Herbal Powders',
    tagline: 'High Nutrient Content • Traditional Use',
    description: 'Clean dried moringa leaf powder sourced directly from established Indian growers, carefully sorted and milled for commercial food and wellness applications.',
    highlights: [
      'Pure plant leaf powder',
      'Naturally rich in nutrients',
      'Fine 80–100 mesh form',
      'Free from additives'
    ],
    specs: {
      meshSize: '80–100 Mesh',
      moisture: '< 7.0%',
      colourForm: 'Fine green powder',
      packing: 'Export-ready packing (25 kg Fiber Drum with food-grade inner poly liner)',
      shelfLife: '24 Months',
      moq: '50 kg',
      leadTime: '7–10 Days',
      labReport: 'Available per order'
    }
  },
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    scientificName: 'Phyllanthus emblica',
    oneLineUse: 'Traditional herbal ingredient with high natural Vitamin C content for dietary formulations.',
    origin: 'India',
    hsCode: '1211.90.90 [confirm with CHA]',
    image: '/products/amla-powder.jpg',
    category: 'Herbal Powders',
    tagline: 'Natural Vitamin C • Traditional Indian Herb',
    description: 'Produced from selected Indian gooseberry fruits, gently dried and powdered for functional food manufacturing and wellness products.',
    highlights: [
      'High natural Vitamin C',
      'Traditional Rasayana botanical',
      'Fine uniform consistency',
      'Export-grade packaging'
    ],
    specs: {
      meshSize: '80–100 Mesh',
      moisture: '< 8.0%',
      colourForm: 'Fine light brown-tan powder',
      packing: 'Export-ready packing (25 kg Drums / Multi-wall paper bags with liner)',
      shelfLife: '24 Months',
      moq: '50 kg',
      leadTime: '7–10 Days',
      labReport: 'Available per order'
    }
  },
  {
    id: 'stevia-powder',
    name: 'Stevia Powder',
    scientificName: 'Stevia rebaudiana',
    oneLineUse: 'Plant-based non-caloric sweetening ingredient for beverage, food, and dietary blend formulations.',
    origin: 'India',
    hsCode: '2938.90.90 [confirm with CHA]',
    image: '/products/stevia-powder.svg',
    category: 'Herbal Powders',
    tagline: 'Natural Plant Sweetener • Zero Calorie',
    description: 'Sourced from quality Indian Stevia rebaudiana crops, offering clean sweetening power for modern sugar-conscious food and beverage formulations.',
    highlights: [
      'Zero-calorie plant sweetness',
      'Food & beverage formulation ready',
      'Stable shelf life',
      'Export-grade packing'
    ],
    specs: {
      meshSize: '80–100 Mesh (Leaf) / Fine Powder',
      moisture: '< 6.0%',
      colourForm: 'Fine light green / Off-white powder',
      packing: 'Export-ready packing (20 kg / 25 kg Sealed Bags in Cartons/Drums)',
      shelfLife: '24 Months',
      moq: '25 kg',
      leadTime: '7–12 Days',
      labReport: 'Available per order'
    }
  }
];
