import React, { useState } from "react";
interface button {
  buttons: string[];
  style?: string;
}

const ToggleBtn: React.FC<button> = ({ buttons, style }) => {
  const [bgIndex, setBgIndex] = useState<number | null>(0);

  const handleOnclick = (index: number) => {
    setBgIndex(index);
  };

  return (
    <div className="bg-white rounded-[2vw]">
      <div className={`${style} `}>
        {buttons?.map((item: string, index: number) => (
          <div
            className={`flex justify-center items-center rounded-[2vw] w-full  px-3 ${
              bgIndex === index ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              handleOnclick(index);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleBtn;
