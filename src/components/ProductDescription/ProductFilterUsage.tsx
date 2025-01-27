
import React, { useState, useEffect } from "react";
import ProductSlider from "./ProductSlider";
import { Bell } from "lucide-react";
import { ProductFilterProps, CategoryFilterType } from "../../types/types";
import { categoryFilter, filterImg } from "../../data/ProductFilter";
import VerticalSentenceSlider from "./VerticalSentenceSlider";

const ProductFilterUsage: React.FC<ProductFilterProps> = ({
  productDetails,
  sizeOptions,
  itemDetails,
  additionalSections,
  onAddToBag,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [toggleSections, setToggleSections] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const defaultColor = categoryFilter.find((filter: CategoryFilterType) =>
      filterImg.some((img) => img.images === filter.image)
    )?.color;
    setSelectedColor(defaultColor || null);
  }, []);

  const toggleSection = (sectionKey: string) => {
    setToggleSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  const handleSizeClick = (size: string, available: boolean) => {
    if (available) {
      setSelectedSize(size);
    }
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row relative">
      {/* Product Slider */}
      <div className="w-full lg:w-full">
        <ProductSlider data={filterImg} />
      </div>

      {/* Filter Section */}
      <div className="w-full lg:w-1/4 bg-white  p-4 sm:h-auto md:h-[65vh] lg:h-[75vh] lg:absolute lg:right-10 lg:top-32 rounded-lg  lg:overflow-y-auto lg:z-20 hide-scrollbar">
        {/* Small screens: Stack layout */}
        <div className="block md:hidden">
          {/* Color Selection First */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold font-inter text-[14px] text-[#0D0D0D]">
                {categoryFilter.length} Colors
              </h3>
              <span className="text-gray-600 font-semibold text-[14px] font-inter">{selectedColor}</span>
            </div>
            <div className="border rounded-lg">
              <div className="flex gap-1 flex-wrap">
                {categoryFilter.map(({ color, image }, index) => (
                  <div
                    key={`${color}-${index}`}
                    className={`cursor-pointer rounded-md border ${
                      selectedColor === color ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <img
                      src={image}
                      alt={color}
                      className="rounded-lg w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rest of the sections */}
          <div className="space-y-4">
            {/* Product Details */}
            <div className="border-b pb-2">
              <h2 className="text-[17px] text-[#0D0D0D] font-syncopate font-bold">
                {productDetails.name}
              </h2>
              <div className="flex w-full items-center justify-between mt-1">
                <span className="text-[#0D0D0D] font-bold text-[15px] font-inter">{selectedColor}</span>
                <p className="text-[15px] font-inter font-bold">£{productDetails.price}</p>
              </div>
              <p className="text-[14px] text-[#0D0D0D] font-medium opacity-70 font-inter mt-1">
                {productDetails.description}
              </p>
              <div className="border font-bold rounded-[3px] uppercase mt-2 inline-block">
                <p className="mr-1 ml-1 text-[#0D0D0DCC] text-[12px] font-inter">LOW IMPACT</p>
              </div>
            </div>

            {/* Size, Additional Sections follow */}
            {/* ... rest of the sections ... */}
          </div>
        </div>

        {/* Medium and Large screens: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Left Column (md) / Single Column (lg) */}
          <div className="md:row-span-1 lg:w-full">
            {/* Product Details */}
            <div className="border-b pb-2">
              <h2 className="text-[17px] text-[#0D0D0D] font-syncopate font-bold">
                {productDetails.name}
              </h2>
              <div className="flex w-full items-center justify-between mt-1">
                <span className="text-[#0D0D0D] font-bold text-[15px] font-inter">{selectedColor}</span>
                <p className="text-[15px] font-inter font-bold">£{productDetails.price}</p>
              </div>
              <p className="text-[14px] text-[#0D0D0D] font-medium opacity-70 font-inter mt-1">
                {productDetails.description}
              </p>
              <div className="border font-bold rounded-[3px] uppercase mt-2 inline-block">
                <p className="mr-1 ml-1 text-[#0D0D0DCC] text-[12px] font-inter">LOW IMPACT</p>
              </div>
            </div>
          </div>

          {/* Right Column (md) / Continue Single Column (lg) */}
          <div className="md:space-y-4 lg:space-y-4">
            {/* Color Selection */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold font-inter text-[14px] text-[#0D0D0D]">
                  {categoryFilter.length} Colors
                </h3>
                <span className="text-gray-600 font-semibold text-[14px] font-inter">{selectedColor}</span>
              </div>
              <div className="border rounded-lg">
                <div className="flex gap-1 flex-wrap">
                  {categoryFilter.map(({ color, image }, index) => (
                    <div
                      key={`${color}-${index}`}
                      className={`cursor-pointer rounded-md border ${
                        selectedColor === color ? "border-black" : "border-gray-300"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <img
                        src={image}
                        alt={color}
                        className="rounded-lg w-full h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Size Options */}
            <div className="border-b pb-4">
              <h3 className="font-inter font-bold text-[14px] text-[#0D0D0D]">Size Guide</h3>
              <div className="flex gap-2 mt-2">
                {sizeOptions.map(({ size, available }) => (
                  <div key={size} className="relative group">
                    <button
                      className={`px-4 py-2 rounded transition relative ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : available
                          ? "text-black font-bold font-syncopate hover:bg-gray-500"
                          : "text-gray-400"
                      }`}
                      onClick={() => handleSizeClick(size, available)}
                      disabled={!available}
                    >
                      {size}
                    </button>
                    {!available && (
                      <>
                        <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl font-bold opacity-100 group-hover:opacity-0 transition">
                          -
                        </span>
                        <div className="absolute inset-0 bg-gray-300 rounded opacity-0 cursor-pointer group-hover:opacity-100 flex items-center justify-center transition">
                          <Bell className="text-gray-600 bg-white rounded-full p-1 w-5 h-5" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="mt-6 w-full bg-black text-white py-2 rounded-full"
                onClick={() => onAddToBag(selectedColor, selectedSize)}
              >
                {selectedSize ? "Add to Bag" : "Select Size"}
              </button>
            </div>

            {/* Additional Sections */}
            <div>
              <ul className="list-disc pl-4 font-inter text-[14px]">
                {itemDetails.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {additionalSections.map((section, index) => (
                <div key={index} className="mt-6">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(`section${index + 1}`)}
                  >
                    <h3 className="font-bold font-inter text-[14px]">{section.title}</h3>
                    <span>{toggleSections[`section${index + 1}`] ? "x" : "+"}</span>
                  </div>
                  {toggleSections[`section${index + 1}`] && (
                    <ul className="mt-2 list-disc pl-4 text-[14px]">
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <VerticalSentenceSlider bgclr="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterUsage;