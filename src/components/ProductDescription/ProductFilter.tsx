/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ProductSlider from "./ProductSlider";
import { filterImg } from "../../data/ProductFilter";
import { ProductGrid } from "../features/ProductGrid";

const ProductFilter: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [bag, setBag] = useState<string[]>([]);
  const [toggleSections, setToggleSections] = useState<{
    [key: string]: boolean;
  }>({
    section1: false,
    section2: false,
    section3: false,
  });

  bag;
  const uniqueColors = filterImg.map((item) => ({
    color: item.color,
    image: item.image,
  }));

  const toggleSection = (section: string) => {
    setToggleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAddToBag = () => {
    if (selectedColor && selectedSize) {
      setBag((prev) => [...prev, `${selectedColor}-${selectedSize}`]);
      alert("Item added to bag!");
    } else {
      alert("Please select color and size!");
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row relative bg-white">
        {/* Product Slider */}
        <div className="w-full lg:w-full">
          <ProductSlider data={filterImg} />
        </div>

        {/* Filter Section */}
        <div className="w-full lg:w-1/4 bg-white shadow-lg lg:p-6 sm:h-auto sm:overflow-visible md:h-[60vh] lg:h-[80vh] lg:absolute lg:right-10 lg:top-32 rounded-lg border-[#0d0d0d33] border border-solid border-opacity-60 lg:overflow-y-auto lg:z-20 hide-scrollbar">
          {/* Responsive Layout for Filter Section */}
          <div className="grid gap-4 sm:grid-cols-1 md:mt-3 md:grid-cols-2 md:grid-rows-[auto_auto_auto] lg:block">
            {/* Image Cards Section - Col 2, Row 1 in MD */}
            <div className="order-1 md:col-start-2 md:row-start-1 lg:order-none">
              <h3 className="font-bold text-lg mb-2 lg:block hidden">
                Available Colors ({uniqueColors.length})
              </h3>
              <div className="border lg:p-4 rounded-lg">
                <div className="flex gap-1 flex-wrap">
                  {uniqueColors.map(({ color, image }, index) => (
                    <div
                      key={`${color}-${index}`}
                      className={`cursor-pointer rounded-md border ${
                        selectedColor === color
                          ? "border-black"
                          : "border-gray-300"
                      } bg-gray-400`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <div className="bg-gray-400">
                        <img
                          src={image}
                          alt={color}
                          className={`rounded-lg w-full h-20 object-cover bg-gray-500 ${
                            selectedColor === color
                              ? "border-3 border-black"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heading and Other Details - Col 1, Row 1 in MD */}
            <div className="order-2 md:col-start-1 md:row-start-1 lg:order-none ml-3 mr-4">
              <h2 className="text-1xl font-syncopate font-bold">
                AMPLIFY GEMINI BRA
              </h2>
              <div className="flex w-full items-center justify-between mt-1">
                <h3 className="font-bold text-lg mb-2 sm:block lg:hidden">
                  Available Colors ({uniqueColors.length})
                </h3>
                <p className="text-lg font-bold hidden lg:block">Berry</p>
                <p className="text-lg font-bold">£36</p>
              </div>
              <p className="text-lg text-gray-600 mt-1">
                Women's Seamless Bra-Removable Straps
              </p>
              <div className="border font-bold rounded-md uppercase mt-2 inline-block">
                <p className="mr-1 ml-1">{"Low Impact"}</p>
              </div>
            </div>

            {/* Size Options - Col 2, Row 2 in MD */}
            <div className="order-3 md:col-start-2 md:row-start-2 lg:order-none mt-4 ml-3 mr-4">
              <h3 className="font-bold">Size</h3>
              <div className="flex gap-2 mt-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                className="mt-6 w-full bg-black text-white py-2 rounded"
                onClick={handleAddToBag}
              >
                Add to Bag
              </button>
            </div>

            {/* Additional Sections - Col 2, Row 3 in MD */}
            <div className="order-4 md:col-start-2 md:row-start-3 lg:order-none ml-3 mr-4">
              <ul className="mt-2 list-disc pl-4">
                <li>Seamless knit</li>
                <li>Adjustable straps</li>
                <li>Core wordmark logo</li>
                <li>
                  Moveable straps that can be worn in a variety of
                  congigurations
                </li>
                <li>Cup size: A/B/C/D</li>
              </ul>

              {["Fit Suggestion", "Materials & Washing", "Description"].map(
                (section, index) => (
                  <div key={index} className="mt-6">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(`section${index + 1}`)}
                    >
                      <h3 className="font-bold">{section}</h3>
                      <span>
                        {toggleSections[`section${index + 1}`] ? "x" : "+"}
                      </span>
                    </div>
                    {toggleSections[`section${index + 1}`] && (
                      <ul className="mt-2 list-disc pl-4">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt.</li>
                        <li>Ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam.</li>
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProductGrid />
      </div>
    </>
  );
};

export default ProductFilter;
