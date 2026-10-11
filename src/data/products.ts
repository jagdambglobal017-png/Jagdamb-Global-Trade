import { Product } from '../types/product';

export const productsData: Product[] = [
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'Superfoods',
    description: 'Pure, shade-dried organic Moringa oleifera leaf powder sourced from premium Indian farms for bulk global export.',
    image: '/assets/moringa.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    scientificName: 'Moringa oleifera',
    packagingOptions: ['25kg Kraft Bags', '50kg Drums', 'Custom Vacuum Foil Bags'],
    hsCode: '1211.90.90'
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    category: 'Superfoods',
    description: 'Vibrant golden Curcuma longa powder with high natural curcumin content, ideal for food ingredients and wellness formulations.',
    image: '/assets/turmeric.jpg',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    scientificName: 'Curcuma longa',
    packagingOptions: ['25kg Multiwall Paper Bags', '50kg PP Bags'],
    hsCode: '0910.30.20'
  },
  {
    id: 'fingertail-millet',
    name: 'Fingertail Millet',
    category: 'Agricultural Products',
    description: 'Nutritious, climate-resilient Indian Fingertail Millet, carefully cleaned and sorted for international trade and consumption.',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    scientificName: 'Eleusine coracana',
    packagingOptions: ['25kg / 50kg PP Bags']
  },
  {
    id: 'cow-dung',
    name: 'Cow Dung',
    category: 'Agricultural Products',
    description: '100% natural, sun-dried Indian cow dung cakes and manure, traditionally processed for organic farming, fertilizers, and ritualistic purposes.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    origin: 'India',
    availability: 'Bulk / Export',
    featured: true,
    packagingOptions: ['10kg Cartons', '25kg PP Bags']
  }
];
