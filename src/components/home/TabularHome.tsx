import React from "react";
import Heading from "../common/Heading";
import Button from "../common/Button";
import ToggleBtn from "../common/ToggleBtn";

export const TabularHome: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between mr-2">
        <Heading
          upperText="Shop"
          lowerText="Winter Essentials"
          upperStyle="text-[3.25vw]  lg:text-[1.56vw] text-start mt-2 mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
          lowerStyle="text-[4.33vw]  lg:text-[1.56vw]  uppercase mt-0 mr-0 mb-[-0.vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
        />

        <Button
          text="Shop All"
          navigateTo="/shop-men"
          buttonStyle="bg-[#000000] text-[#ffffff] text-sm font-inter px-4 py-2  hover:bg-gray-100"
        />
      </div>

      <ToggleBtn
        buttons={["Women", "Men"]}
        style="inline-grid grid-cols-2 gap-2 cursor-pointer text-sm px-4 py-2 ml-2 font-semibold border border-gray-600 rounded-full"
      />
    </div>
  );
};
