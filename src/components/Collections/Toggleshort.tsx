import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import React, { useState } from "react";

const Toggleshort: React.FC = () => {
  const [bgIndex, setBgIndex] = useState<boolean>(false);

  const handleOnclick = () => {
    setBgIndex(!bgIndex);
  };

  return (
    <div className=" w-[15vw]">
      <div
        className={`flex  justify-between items-center max-w-[18vw] gap-2  h-[5vh] p-[0.5vw] border-[2px] border-gray-600 rounded-full `}
      >
        <div
          className={`${
            bgIndex && "bg-gray-600"
          } w-full h-full flex justify-center items-center  rounded-full`}
          onClick={handleOnclick}
        >
          <BsFillGridFill className="w-[4vw] h-[4vw]" />
        </div>
        <div
          className={`${
            !bgIndex && "bg-gray-600"
          } w-full h-full  flex justify-center items-center  rounded-full`}
          onClick={handleOnclick}
        >
          {" "}
          <BsFillGrid3X3GapFill className="w-[4vw] h-[4vw]" />
        </div>
      </div>
    </div>
  );
};

export default Toggleshort;
