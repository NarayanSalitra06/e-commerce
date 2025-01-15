import React, { useState, useEffect, useRef } from "react";
import { ProductCard } from "../common/ProductCard";
import type {
  ThemeColors,
  ProductGridProps,
  ProductVariant,
  ProductCardProps,
} from "../../types/types";

const defaultThemes: ThemeColors[] = [
  {
    primary: "bg-blue-500",
    secondary: "bg-gray-100",
    textColor: "text-gray-900",
    borderColor: "ring-blue-500",
    hoverColor: "hover:bg-gray-100",
  },
  {
    primary: "bg-green-500",
    secondary: "bg-green-100",
    textColor: "text-green-900",
    borderColor: "ring-green-500",
    hoverColor: "hover:bg-green-50",
  },
  {
    primary: "bg-purple-500",
    secondary: "bg-purple-100",
    textColor: "text-purple-900",
    borderColor: "ring-purple-500",
    hoverColor: "hover:bg-purple-50",
  },
];

const defaultProductProps: Omit<ProductCardProps, "theme"> = {
  title: "Amplify Athletic Wear",
  price: 89.99,
  compareAtPrice: 129.99,
  variants: [
    {
      id: "blue-variant",
      color: "Blue",
      colorCode: "#0052CC",
      available: true,
      price: 89.99,
      compareAtPrice: 129.99,
      image: {
        id: "Regio-main",
        url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio1.jpg?v=1709597183",
        alt: "Blue Amplify Athletic Wear - Main View",
      },
      images: [
        {
          id: "Regio-1",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio2.jpg?v=1709597183",
          alt: "Blue Amplify Athletic Wear - Front View",
        },
        {
          id: "regio-2",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio2.jpg?v=1709597183",
          alt: "Blue Amplify Athletic Wear - Back View",
        },
      ],
    },
    {
      id: "black-variant",
      color: "Black",
      colorCode: "#000000",
      available: true,
      price: 89.99,
      compareAtPrice: 129.99,
      image: {
        id: "black-main",
        url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraGliese32.jpg?v=1714505295",
        alt: "Black Amplify Athletic Wear - Main View",
      },
      images: [
        {
          id: "black-1",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraWhite3.jpg?v=1709597316",
          alt: "Black Amplify Athletic Wear - Front View",
        },
        {
          id: "black-2",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraWhite1.jpg?v=1709597315",
          alt: "Black Amplify Athletic Wear - Back View",
        },
      ],
    },
    {
      id: "blue-variant",
      color: "Blue",
      colorCode: "#0052CC",
      available: true,
      price: 89.99,
      compareAtPrice: 129.99,
      image: {
        id: "Regio-main",
        url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio1.jpg?v=1709597183",
        alt: "Blue Amplify Athletic Wear - Main View",
      },
      images: [
        {
          id: "Regio-1",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio2.jpg?v=1709597183",
          alt: "Blue Amplify Athletic Wear - Front View",
        },
        {
          id: "regio-2",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio2.jpg?v=1709597183",
          alt: "Blue Amplify Athletic Wear - Back View",
        },
      ],
    },
    {
      id: "black-variant2",
      color: "Black",
      colorCode: "#000000",
      available: true,
      price: 89.99,
      compareAtPrice: 129.99,
      image: {
        id: "black-main",
        url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraGliese32.jpg?v=1714505295",
        alt: "Black Amplify Athletic Wear - Main View",
      },
      images: [
        {
          id: "black-1",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraWhite3.jpg?v=1709597316",
          alt: "Black Amplify Athletic Wear - Front View",
        },
        {
          id: "black-2",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraWhite1.jpg?v=1709597315",
          alt: "Black Amplify Athletic Wear - Back View",
        },
      ],
    },
    {
      id: "blue-variant3",
      color: "Blue",
      colorCode: "#0052CC",
      available: true,
      price: 89.99,
      compareAtPrice: 129.99,
      image: {
        id: "Regio-main",
        url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio1.jpg?v=1709597183",
        alt: "Blue Amplify Athletic Wear - Main View",
      },
      images: [
        {
          id: "Regio-1",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio2.jpg?v=1709597183",
          alt: "Blue Amplify Athletic Wear - Front View",
        },
        {
          id: "regio-2",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraRegio2.jpg?v=1709597183",
          alt: "Blue Amplify Athletic Wear - Back View",
        },
      ],
    },
    {
      id: "black-variant4",
      color: "Black",
      colorCode: "#000000",
      available: true,
      price: 89.99,
      compareAtPrice: 129.99,
      image: {
        id: "black-main",
        url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraGliese32.jpg?v=1714505295",
        alt: "Black Amplify Athletic Wear - Main View",
      },
      images: [
        {
          id: "black-1",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraWhite3.jpg?v=1709597316",
          alt: "Black Amplify Athletic Wear - Front View",
        },
        {
          id: "black-2",
          url: "https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyCassioBraWhite1.jpg?v=1709597315",
          alt: "Black Amplify Athletic Wear - Back View",
        },
      ],
    },
  ] as ProductVariant[],
  sizes: [
    { id: "xs", label: "XS", available: true },
    { id: "s", label: "S", available: true },
    { id: "m", label: "M", available: false },
    { id: "l", label: "L", available: true },
    { id: "xl", label: "XL", available: true },
    { id: "2xl", label: "2XL", available: true },
  ],
  onVariantSelect: (variantId: string) =>
    console.log("Variant selected:", variantId),
  onSizeSelect: (sizeId: string) => console.log("Size selected:", sizeId),
  onAddToCart: (variantId: string, sizeId: string) =>
    console.log("Adding to cart:", { variantId, sizeId }),
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  itemsPerPage = 5,
  totalItems = 20,
}) => {
  const [items, setItems] = useState<(ProductCardProps & { key: number })[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const generateItems = (startIndex: number, count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      ...defaultProductProps,
      key: startIndex + index,
      theme: defaultThemes[Math.floor(Math.random() * defaultThemes.length)],
      title: `${defaultProductProps.title} ${startIndex + index + 1}`,
    }));
  };

  const loadMoreItems = () => {
    if (loading || items.length >= totalItems) return;

    setLoading(true);
    const newItems = generateItems(items.length, itemsPerPage);

    setTimeout(() => {
      setItems((prev) => [...prev, ...newItems]);
      setHasMore(items.length + itemsPerPage < totalItems);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        loadMoreItems();
      }
    }, options);

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [items.length, hasMore, loading]);

  useEffect(() => {
    loadMoreItems();
  }, []);

  return (
    <div className="min-h-screen w-full bg-white  p-6">
      <div className="container w-full mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Product Catalog
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-full lg:grid-cols-5 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.key}
              ref={index === items.length - 1 ? lastElementRef : null}
              className="flex justify-center"
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center mt-8">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!hasMore && (
          <div className="text-center  text-gray-600 mt-8">
            No more products to load
          </div>
        )}
      </div>
    </div>
  );
};
