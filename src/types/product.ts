export type ProductCategory =
  | 'Superfoods'
  | 'Agricultural Products'
  | 'Food Products'
  | 'Spices & Ingredients';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  origin: string;
  availability: string;
  featured?: boolean;
  scientificName?: string;
  packagingOptions?: string[];
  hsCode?: string;
}
