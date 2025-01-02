import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useState } from "react";
import Bras from "../components/Collections/Bras";
import SideBar from "../components/Collections/SideBar";
import { SideBardata } from "../data/Header";
import ToggleBtn from "../components/common/ToggleBtn";
import BottomDrawer from "../components/BottomDrawer";

const Collections: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleSideBar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="lg:hidden">
        {" "}
        <BottomDrawer />
      </div>
      <div className="h-[500px] bg-blue-400  ">
        <img src="" alt="" />
      </div>
      <div className="sm:flex  ">
        <div className="w-[25vw] hidden lg:block ">
          <SideBar buttondata={SideBardata}></SideBar>
        </div>

        <div className="sm:flex-1 bg-red-500">
          <Bras />
        </div>
      </div>
      <div className="fixed grid grid-cols-4 gap-2 lg:hidden  bottom-[2vw] w-full">
        <div className="w-full"> </div>
        <div className="col-span-2">
          <ToggleBtn buttons={["Styles", "ColorsWays"]}></ToggleBtn>
        </div>
      </div>
    </div>
  );
};

export default Collections;
