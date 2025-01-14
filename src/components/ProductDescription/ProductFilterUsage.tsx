/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ProductSlider from "./ProductSlider";
import { ProductFilterProps } from "../../types/types";

const ProductFilterUsage: React.FC<ProductFilterProps> = ({
  swiperData,
  productDetails,
  sizeOptions,
  additionalSections,
  onAddToBag,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [toggleSections, setToggleSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSection = (section: string) => {
    setToggleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row relative">
      {/* Product Slider */}
      <div className="w-full lg:w-full">
        <ProductSlider data={swiperData} />
      </div>

      {/* Filter Section */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg lg:p-0 sm:h-auto sm:overflow-visible md:h-[60vh] lg:h-[75vh] lg:absolute lg:right-10 lg:top-32 rounded-lg border-[#0d0d0d33] border border-solid border-opacity-60 lg:overflow-y-auto lg:z-20 hide-scrollbar">
        <div className="grid gap-4 sm:grid-cols-1 md:mt-3 md:grid-cols-2 md:grid-rows-[auto_auto_auto] lg:block">
          {/* Color Selection */}
          <div className="ml-3 mr-4">
            <h3 className="font-bold text-lg mb-2 lg:block hidden">
              Available Colors ({productDetails.colors.length})
            </h3>
            <div className="border lg:p-0 rounded-lg">
              <div className="flex gap-1 flex-wrap">
                {productDetails.colors.map(({ color, image }, index) => (
                  <div
                    key={`${color}-${index}`}
                    className={`cursor-pointer rounded-md border ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    } bg-gray-400`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <img
                      src={image}
                      alt={color}
                      className={`rounded-lg w-full h-20 object-cover bg-gray-500 ${
                        selectedColor === color ? "border-3 border-black" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="ml-3 mr-4">
            <h2 className="text-1xl font-syncopate font-bold">
              {productDetails.name}
            </h2>
            <div className="flex w-full items-center justify-between mt-1">
              <h3 className="font-bold text-lg">{productDetails.price}</h3>
            </div>
            <p className="text-lg text-gray-600 mt-1">
              {productDetails.description}
            </p>
          </div>

          {/* Size Options */}
          <div className="mt-4 ml-3 mr-4">
            <h3 className="font-bold">Size</h3>
            <div className="flex gap-2 mt-2">
              {sizeOptions.map(({ size, available }) => (
                <button
                  key={size}
                  disabled={!available}
                  className={`px-4 py-2 rounded ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : available
                      ? "bg-gray-200"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <button
                className="mt-6 w-full bg-black text-white py-2 rounded"
                onClick={() => onAddToBag(selectedColor, selectedSize)}
              >
                Add to Bag
              </button>
            )}
          </div>

          {/* Additional Sections */}
          <div className="ml-3 mr-4">
            {additionalSections.map((section, index) => (
              <div key={index} className="mt-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <h3 className="font-bold">{section.title}</h3>
                  <span>{toggleSections[section.title] ? "x" : "+"}</span>
                </div>
                {toggleSections[section.title] && (
                  <ul className="mt-2 list-disc pl-4">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterUsage;
