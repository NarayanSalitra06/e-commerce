import React, { useState } from "react";
interface button {
  buttons: string[];
}

const ToggleBtn: React.FC<button> = ({ buttons }) => {
  const [bgIndex, setBgIndex] = useState<number | null>(0);

  const handleOnclick = (index: number) => {
    setBgIndex(index);
  };

  return (
    <div className="">
      <div
        className={`grid grid-cols-2 gap-2 lg:max-w-[24vw] max-w-[34vw] p-1  border-[2px] border-gray-600 rounded-[2vw] `}
      >
        {buttons?.map((item: string, index: number) => (
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
