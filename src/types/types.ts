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

export type SlideItem = {
  type: "image" | "video";
  src: string;
  text: {
    upperText: string;
    lowerText: string;
    upperStyle: string;
    lowerStyle: string;
  };
};
export interface filtertype {
 img1?:string,
 img2?:string,
}
export interface filterArr{
 data?:  filtertype[];
}

export interface sideBarBtnSubCategary{
    subbtn?:string;
}

export interface sideBarBtnCategary{
  btnName?:string,
   btnAll?:string[]
}


export interface ButtonProps {
  text: string;
  navigateTo: string;
  buttonStyle?: string;
  isExternal?: boolean; 
}

export interface VideoComponentProps {
  videoSrc: string;
  buttonText: string; // Expecting two words
  subHeading: string;
  smVideoSrc:string,
  mdVideoSrc:string,
}

export interface HeadingProps {
  upperText: string;
  lowerText: string; 
  upperStyle?: string; 
  lowerStyle?: string;
}

