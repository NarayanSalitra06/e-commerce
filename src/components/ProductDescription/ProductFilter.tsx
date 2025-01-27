/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ProductGrid } from "../features/ProductGrid";
import Heading from "../common/Heading";
import ToggleBtn from "../common/ToggleBtn";
import ProductFilterUsage from "./ProductFilterUsage";
import { additionalSections,  itemDetails, productDetails, sizeOptions } from "../../data/ProductFilter";

const ProductFilter: React.FC = () => {
 

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
      itemDetails={itemDetails}
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
        <ToggleBtn buttons={["Recommended", "Recently Viewed"]}
                   style="grid grid-cols-2 gap-1  max-w-[25vw] cursor-pointer text-[12px] h-[35px] p-[3px] ml-2  font-semibold border-[1px] border-gray-600 rounded-[2vw]"
        />
        <ProductGrid />
      </div>
    </>
  );
};

export default ProductFilter;
