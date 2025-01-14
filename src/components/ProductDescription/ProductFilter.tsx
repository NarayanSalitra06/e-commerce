/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// import ProductSlider from "./ProductSlider";
// import { filterImg } from "../../data/ProductFilter";
import { ProductGrid } from "../features/ProductGrid";
import Heading from "../common/Heading";
import ToggleBtn from "../common/ToggleBtn";
import ProductFilterUsage from "./ProductFilterUsage";

const ProductFilter: React.FC = () => {
  // const [selectedColor, setSelectedColor] = useState<string | null>(null);
  // const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [bag, setBag] = useState<string[]>([]);
  // const [toggleSections, setToggleSections] = useState<{
  //   [key: string]: boolean;
  // }>({
  //   section1: false,
  //   section2: false,
  //   section3: false,
  // });

  // const uniqueColors = filterImg.map((item) => ({
  //   color: item.color,
  //   image: item.image,
  // }));

  // const toggleSection = (section: string) => {
  //   setToggleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  // };

  // const handleAddToBag = () => {
  //   if (selectedColor && selectedSize) {
  //     setBag((prev) => [...prev, `${selectedColor}-${selectedSize}`]);
  //     alert("Item added to bag!");
  //   } else {
  //     alert("Please select color and size!");
  //   }
  // };

  const swiperData = [
    { color: "Red", image: "/public/header/women/img1.webp" },
    { color: "Blue", image: "/public/header/women/img2.webp" },
    { color: "Green", image: "/public/header/women/img3.webp" },
    { color: "Red", image: "/public/header/women/img1.webp" },
    { color: "Blue", image: "/public/header/women/img2.webp" },
    { color: "Green", image: "/public/header/women/img3.webp" },
  ];

  const productDetails = {
    name: "AMPLIFY GEMINI BRA",
    price: "£36",
    description: "Women's Seamless Bra-Removable Straps",
    colors: swiperData,
  };

  const sizeOptions = [
    { size: "XS", available: true },
    { size: "S", available: false },
    { size: "M", available: true },
    { size: "L", available: true },
    { size: "XL", available: false },
  ];

  const additionalSections = [
    {
      title: "Fit Suggestion",
      content: ["Lorem ipsum dolor sit amet.", "Consectetur adipiscing elit."],
    },
    {
      title: "Materials & Washing",
      content: [
        "Sed do eiusmod tempor incididunt.",
        "Ut labore et dolore magna aliqua.",
      ],
    },
  ];

  const handleAddToBag = (color: string | null, size: string | null) => {
    if (color && size) {
      alert(`Added to bag: ${color}-${size}`);
    } else {
      alert("Please select color and size!");
    }
  };
  return (
    <>
      {/* Product Filter Section */}
      <div>
        <ProductFilterUsage
          swiperData={swiperData}
          productDetails={productDetails}
          sizeOptions={sizeOptions}
          additionalSections={additionalSections}
          onAddToBag={handleAddToBag}
        />
      </div>
      <div className="ml-3 mr-3 ">
        <div className="flex items-center justify-between ">
          <Heading
            upperText="You Might Also Like"
            lowerText=""
            upperStyle="text-[1.67vw] text-start mt-2 uppercase mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
            lowerStyle="text-[1.88vw] uppercase mt-0 mr-0 mb-[-0.vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
          />
        </div>
        <ToggleBtn buttons={["Recommended", "Recently Viewed"]} />
        <ProductGrid />
      </div>
    </>
  );
};

export default ProductFilter;
