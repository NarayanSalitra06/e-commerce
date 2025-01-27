import React from "react";

import SideBar from "../components/Collections/SideBar";
import { SideBardata } from "../data/Header";
import ToggleBtn from "../components/common/ToggleBtn";
import BottomDrawer from "../components/BottomDrawer";

// import { MenWomenCategaryProduct } from "../types/types";
import { ProductGrid } from "../components/features/ProductGrid";
import { useLocation } from "react-router-dom";

const Collections: React.FC = () => {
  const location = useLocation();
  const list = location.state || {};
  // Receiving the state
  console.log("productList", list);

  return (
    <div className="bg-white">
      <div className="h-[60vh]  w-full mt-[]">
        <img
          src={list.allProduct.mainImg}
          alt=""
          className="h-full w-[100vw]"
        />
      </div>

      <div className=" flex items-start bg-white">
        <div className=" lg:flex lg:flex-col  hidden w-[20vw] sticky lg:top-[5vw]">
          <SideBar
            buttondata={SideBardata}
            categarynames={list.categaryName}
            noOfProduct={list.allProduct.numOfProduct}
          ></SideBar>
        </div>

        {/* Main Content Area */}
        <div className="flex-1  w-full">
          <ProductGrid />
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="  gap-2 lg:hidden w-full">
        {/* <div className="col-span-1  sm:hidden fixed left-[2vw] bottom-[2vw]">
          <Toggleshort></Toggleshort>
        </div> */}
        <div className="col-span-1 fixed left-[30vw] bottom-[2vw]">
          <ToggleBtn
            buttons={["Styles", "ColorsWays"]}
            style="grid grid-cols-2 gap-1  max-w-[40vw]   text-[2vw] h-[5vh]   font-medium p-[2px] border-[2px] border-gray-600 rounded-[2vw]"
          ></ToggleBtn>
        </div>
        <div className=" col-span-1">
          <BottomDrawer />
        </div>
      </div>
    </div>
  );
};

export default Collections;
