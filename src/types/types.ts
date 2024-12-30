export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}


export interface ProductSize {
  id: string;
  label: string;
  available: boolean;
}

export interface ProductCardProps {
  title: string;
  price: number;
  compareAtPrice?: number;
  variants: ProductVariant[];
  sizes: ProductSize[];
  className?: string;
  theme?: ThemeColors;
  onVariantSelect?: (variantId: string) => void;
  onSizeSelect?: (sizeId: string) => void;
  onAddToCart?: (variantId: string, sizeId: string) => void;
  loading?: boolean;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  color: string;
  colorCode: string;
  available: boolean;
  price: number;
  compareAtPrice: number;
  image: ProductImage;
  images: ProductImage[];
}

export interface ProductSize {
  id: string;
  label: string;
  available: boolean;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  textColor: string;
  borderColor: string;
  hoverColor: string;
}

export interface ProductGridProps {
  itemsPerPage?: number;
  totalItems?: number;
}
export interface womenFitness{
  image?:string,
  text?:string,
}
export interface womenFitnessObject{
  data?:womenFitness[]
}

export interface SubCategory {
  name: string;
  count: number | null;
  adImage?: string; // Optional ad image for subcategories
}
export interface CategoryWithAd {
  adImage?: string; // Optional ad image for categories
  items: SubCategory[];
}
export type Categories = {
  featured?: SubCategory[] | CategoryWithAd;
  clothing?: SubCategory[] | CategoryWithAd;
  activity?: SubCategory[] | CategoryWithAd;
};
export type Categories2 = {
  featured?: SubCategory[] | CategoryWithAd;
  clothing?: SubCategory[] | CategoryWithAd;
  activity?: SubCategory[] | CategoryWithAd;
  sportsBras?: CategoryWithAd | CategoryWithAd;
  leggings?: CategoryWithAd | CategoryWithAd;
};