import React, { useState } from "react";
import PopUp from "./PopUp";
import { categories, categories2 } from "../../data/Header";
import { Categories } from "../../types/types";
const MobPopUp: React.FC = () => {
  const [categoriestype, setCategoriestype] = useState<
  Categories | Categories
  >(categories);

  const handleOnMen = () => {
    setCategoriestype(categories);
  };
  const handleOnWomen = () => {
    setCategoriestype(categories2);
  };

  return (
    <div className=" rounded-md md:rounded-none">
      <div className=" flex justify-center items-center w-full py-[4vw] rounded-lg">
        <button className="w-[50%] text-center " onClick={handleOnWomen}>
          Women
        </button>
        <button className="w-[50%] text-center" onClick={handleOnMen}>
          Men
        </button>
      </div>
      <div>
        {" "}
        <PopUp categories={categoriestype}></PopUp>
      </div>
    </div>
  );
};

export default MobPopUp;
