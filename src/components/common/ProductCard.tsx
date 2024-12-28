import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/utils';
import { useHover } from '../../hooks/useHover';
import { useSlider } from '../../hooks/useSlider';
import type { ProductCardProps } from '../../types/types';

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  compareAtPrice,
  variants,
  sizes,
  className,
  theme = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-100',
    textColor: 'text-gray-900',
    borderColor: 'ring-blue-500',
    hoverColor: 'hover:bg-gray-100'
  },
  onVariantSelect,
  onSizeSelect,
  onAddToCart,
  loading = false,
}) => {
  // State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizes, setShowSizes] = useState(false);
  const [hasAutoSlided, setHasAutoSlided] = useState(false);

  // Custom hooks
  const { isHovered: showVariants, hoverProps } = useHover(100);
  const { sliderRef, scroll: handleVariantScroll } = useSlider();

  // Current variant and its images
  const currentVariant = variants[selectedVariant];
  const currentImages = currentVariant.images;

  // Handlers
  const handleImageNavigation = (direction: 'prev' | 'next') => {
    setCurrentImageIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % currentImages.length;
      }
      return (prev - 1 + currentImages.length) % currentImages.length;
    });
  };

  const handleVariantSelect = (index: number) => {
    setSelectedVariant(index);
    setCurrentImageIndex(0);
    setHasAutoSlided(false);
    onVariantSelect?.(variants[index].id);
  };

  const handleSizeSelect = (sizeId: string) => {
    setSelectedSize(sizeId);
    onSizeSelect?.(sizeId);
  };

  const handleAddToCart = () => {
    if (selectedSize && currentVariant) {
      onAddToCart?.(currentVariant.id, selectedSize);
    }
  };

  const handleMouseEnter = () => {
    if (!hasAutoSlided && currentImages.length > 1) {
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % currentImages.length);
        setHasAutoSlided(true);
      }, 300);
    }
  };

  if (loading) {
    return (
      <div className={cn(
        "w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden animate-pulse",
        className
      )}>
        <div className="h-72 bg-gray-200" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden",
      className
    )}>
      {/* Main Image */}
     <div 
  className="relative h-72 group"
  onMouseEnter={() => {
    if (currentImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }
  }}
  onMouseLeave={() => {
    setCurrentImageIndex(0); // Revert to the first image
  }}
>
  <img
    src={currentImages[currentImageIndex].url}
    alt={currentImages[currentImageIndex].alt}
    className="w-full h-full object-cover"
    loading="lazy"
  />

        {/* Image Navigation */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-black/5" />
          
          {!showSizes && (
            <>
              <button
                onClick={() => handleImageNavigation('prev')}
                className={cn(
                    "absolute left-4 bottom-24 p-2 bg-white rounded-full shadow-md transition-colors",
                    theme.hoverColor
                  )}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleImageNavigation('next')}
                className={cn(
                    "absolute right-4 bottom-24 p-2 bg-white rounded-full shadow-md transition-colors",
                    theme.hoverColor
                  )}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Quick Add */}
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64"
            onMouseEnter={()=>setTimeout(()=>setShowSizes(true),300) }
            onMouseLeave={() => setShowSizes(false)}
          >
            {showSizes ? (
              <div className="bg-white rounded-lg shadow-xl p-4">
                  <h3 className={cn("text-center font-medium mb-3", theme.textColor)}>Select Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => handleSizeSelect(size.id)}
                      disabled={!size.available}
                      className={cn(
                        "px-3 py-2 rounded text-sm font-medium transition-colors",
                        selectedSize === size.id
                          ? cn(theme.primary, "text-white")
                          : cn(theme.secondary, theme.hoverColor, theme.textColor),
                        !size.available && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <button
                    onClick={handleAddToCart}
                    className={cn(
                        "w-full mt-3 px-4 py-2 text-white rounded-md transition-colors",
                        theme.primary,
                        theme.hoverColor
                      )}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            ) : (
                <button className={cn(
                    "w-full px-4 py-2 bg-white rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors",
                    theme.hoverColor
                  )}>
                Quick Add
                <span className="text-lg">+</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Info & Variant Selection */}
      <div className="relative bg-black p-4">
        <div {...hoverProps}>
          {/* Product Info */}
          <div className={cn(
            "transition-opacity duration-300",
            showVariants ? 'opacity-0' : 'opacity-100'
          )}>
            <h3 className={cn("font-medium", theme.textColor)}>{title}</h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-medium">
                ${currentVariant.price || price}
              </span>
              {(currentVariant.compareAtPrice || compareAtPrice) && (
                <span className="text-sm text-gray-500 line-through">
                  ${currentVariant.compareAtPrice || compareAtPrice}
                </span>
              )}
            </div>
          </div>

          {/* Variant Selector */}
          <div className={cn(
            "absolute inset-x-0 top-0 transition-opacity duration-300",
            showVariants ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}>
            <div className="relative px-6">
              <button
                onClick={() => handleVariantScroll('left')}
                className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow-md z-10 transition-colors",
                    theme.hoverColor
                  )}
                aria-label="Scroll variants left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div
                ref={sliderRef}
                className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth"
              >
                {variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantSelect(index)}
                    disabled={!variant.available}
                    className={cn(
                        "flex-shrink-0 relative w-14 h-14 rounded-lg overflow-hidden transition-all",
                        selectedVariant === index ? `ring-2 ${theme.borderColor} ring-offset-1` : "",
                        !variant.available && "opacity-50 cursor-not-allowed"
                      )}
                    aria-label={`Select ${variant.color} variant`}
                  >
                    <img
                      src={variant.image.url}
                      alt={variant.color}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-xs py-0.5 text-center">
                      {variant.color}
                    </div> */}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleVariantScroll('right')}
                className={cn(
                  "absolute right-0 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow-md z-10 transition-colors",
                  theme.hoverColor
                )}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};