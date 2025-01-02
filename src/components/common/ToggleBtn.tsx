import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
interface button {
  buttons: string[];
}
interface width {
  maxWd: number;
}

const ToggleBtn: React.FC<button | width> = ({ buttons, maxWd }) => {
  const [bgIndex, setBgIndex] = useState<number | null>(0);

  const handleOnclick = (index: number) => {
    setBgIndex(index);
  };

  return (
    <div className="ml-2">
      <div className="flex items-center justify-between mr-2">
        <Heading
          upperText="Shop"
          lowerText="Winter Essentials"
          upperStyle="text-[1.67vw] text-start mt-2 mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
          lowerStyle="text-[1.88vw] uppercase mt-0 mr-0 mb-[-0.vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
        />

        <Button
          text="Shop"
          navigateTo="/shop-men"
          buttonStyle="bg-[#000000] text-[#ffffff] text-sm font-inter px-4 py-2  hover:bg-gray-100"
        />
      </div>

      <div
        className={`grid grid-cols-2 gap-2 lg:max-w-[24vw] p-1  border-[2px] border-gray-600 rounded-[2vw] `}
      >
        {buttons?.map((item, index) => (
          <div>
            <div
              className={`flex justify-center items-center rounded-[2vw] w-full py-1 px-3 ${
                bgIndex === index ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                handleOnclick(index);
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleBtn;
