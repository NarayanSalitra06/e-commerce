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
