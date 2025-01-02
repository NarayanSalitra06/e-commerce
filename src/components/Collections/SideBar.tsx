import { HiOutlinePlus } from "react-icons/hi";
import React, { useState } from "react";
import ToggleBtn from "../common/ToggleBtn";
import { sideBarBtnCategary } from "../../types/types";

const SideBar: React.FC<sideBarBtnCategary> = ({ buttondata }) => {
  const [btnindex, setBtnindex] = useState<number | null>(null);

  const handleOnClickBtn = (index: number) => {
    setBtnindex(btnindex === index ? null : index);
  };
  return (
    <div className="mx-[0.5vw]  bg-white z-[-1] ">
      <div className="hidden sm:block  ">Heading</div>
      <div className="hidden sm:block  ">
        <ToggleBtn buttons={["Styles", "ColorsWays"]}></ToggleBtn>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        {buttondata.map((category, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center w-full border-b-2 border-black text-gray-800 h-[3vw] py-[2.5vw] px-[1vw] font-semibold">
              <button>{category.btnName}</button>
              <HiOutlinePlus onClick={() => handleOnClickBtn(index)} />
            </div>

            {btnindex === index && (
              <div className="pl-[1.5vw] mt-[0.5vw]">
                <ul>
                  {category.btnAll?.map((item, idx) => (
                    <li key={idx} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
