import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useEffect, useState, useRef } from "react";
import Bras from "../components/Collections/Bras";
import SideBar from "../components/Collections/SideBar";
import { SideBardata } from "../data/Header";
import ToggleBtn from "../components/common/ToggleBtn";
import BottomDrawer from "../components/BottomDrawer";
import Toggleshort from "../components/Collections/Toggleshort";

const Collections: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);

  const handleSideBar = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white">
      <div className="h-[500px] bg-blue-400">
        <img src="" alt="" />
      </div>

      <div className=" flex items-start">
        <div className=" lg:flex lg:flex-col  hidden w-[20vw] sticky lg:top-[5vw]">
          <SideBar buttondata={SideBardata}></SideBar>
        </div>

        {/* Main Content Area */}
        <div className="flex-1  w-full lg:px-[2vw]">
          <Bras />
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="  gap-2 lg:hidden w-full">
        <div className="col-span-1  fixed left-[2vw] bottom-[2vw]">
          <Toggleshort></Toggleshort>
        </div>
        <div className="col-span-1 fixed left-[30vw] bottom-[2vw]">
          <ToggleBtn buttons={["Styles", "ColorsWays"]}></ToggleBtn>
        </div>
        <div className=" col-span-1">
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
};

export default Collections;
