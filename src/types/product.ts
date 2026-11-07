export type ProductCategory =
  | 'Herbal Powders'
  | 'Superfoods'
  | 'Food Ingredients';

export interface ProductSpecs {
  meshSize: string;
  moisture: string;
  colourForm: string;
  packing: string;
  shelfLife: string;
  moq: string;
  leadTime: string;
  labReport: string;
}

export interface Product {
  id: string;
  name: string;
  scientificName: string;
  oneLineUse: string;
  origin: string;
  hsCode: string;
  specs: ProductSpecs;
  image: string;
  category?: string;
  tagline?: string;
  description?: string;
  highlights?: string[];
  englishName?: string;
  availability?: string;
  featured?: boolean;
}
