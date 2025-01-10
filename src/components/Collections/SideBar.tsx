import { HiOutlinePlus } from "react-icons/hi";
import React, { useState } from "react";
import ToggleBtn from "../common/ToggleBtn";
import { sideBarBtnCategary } from "../../types/types";
import Heading from "../common/Heading";

interface SideBar {
  buttondata: sideBarBtnCategary[];
  categarynames?: string; // Optional if not always provided
  noOfProduct?: number; // Optional if not always provided
}

const SideBar: React.FC<SideBar> = ({
  buttondata,
 
  noOfProduct,
}) => {
  const [btnindex, setBtnindex] = useState<number | null>(null);

  const handleOnClickBtn = (index: number) => {
    setBtnindex(btnindex === index ? null : index);
  };
  return (
    <div className="m-[0.5vw] bg-white">
      <div className="hidden sm:block px-[1vw] ">
        <Heading
          upperText={"women"}
          lowerText={"BRA"}
          upperStyle={
            " sm:text-[1.56vw] md:text-[1.56vw] lg:text-[0.7vw] text-start font-syncopate font-bold text-black"
          }
          lowerStyle={
            "sm:text-[1.56vw] md:text-[1.56vw] lg:text-[1.5vw] text-start font-syncopate font-bold text-black"
          }
        ></Heading>
        <div>{noOfProduct}</div>
      </div>
      <div className="hidden lg:block  ">
        <ToggleBtn buttons={["Styles", "ColorsWays"]}></ToggleBtn>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        {buttondata?.map((category: sideBarBtnCategary, index: number) => (
          <div key={index} className="w-full">
            <div
              className="flex justify-between items-center w-full border-b-2 border-black text-gray-800 h-[3vw] lg:py-[2.5vw] md:px-[1vw]
             py-[4vw] font-semibold"
            >
              <button>{category.btnName}</button>
              <HiOutlinePlus onClick={() => handleOnClickBtn(index)} />
            </div>

            {btnindex === index && (
              <div className="pl-[1.5vw] mt-[0.5vw]">
                <ul
                  className={`flex ${
                    index === 2 || index === 3
                      ? "flex-row flex-wrap gap-2"
                      : "flex-col"
                  } items-start justify-start py-[2vw]`}
                >
                  {category.btnAll?.map((item: string, idx: number) =>
                    index === 2 || index === 3 ? (
                      <div
                        key={idx}
                        className={`${
                          index === 3
                            ? "h-[5vw] lg:h-[2.5vw] w-[5vw] lg:!w-[3vw] flex items-center justify-center  font-bold border border-black rounded-md"
                            : "h-[5vw] lg:h-[2.5vw]  w-[5.2vw] lg:!w-[3vw] bg-[color] rounded-md  border border-black"
                        }`}
                        style={{
                          backgroundColor: index === 2 ? item : "transparent",
                        }}
                      >
                        {index === 3 && item}
                      </div>
                    ) : (
                      <div
                        key={idx}
                        className="flex justify-start gap-2 items-center "
                      >
                        <input type="radio" name="radioGroup" />
                        <li className="text-gray-600 font-bold">{item}</li>
                      </div>
                    )
                  )}
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
