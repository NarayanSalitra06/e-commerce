import { RxHamburgerMenu } from "react-icons/rx";
/* eslint-disable @typescript-eslint/no-wrapper-object-types */

import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import PopUp from "./PopUp";
import { categories, categories2 } from "../../data/Header";
import MobPopUp from "./MobPopUp";

interface HelpButton {
  name: string;
}

interface threeButtos {
  buttonName: String;
}
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState<string>("");
  const [sendingData, setSendingData] = useState<Categories | Categories2>({});
  const [helpToggle, setHelpToggle] = useState<boolean>(false);
  const [handleMenu, setHandleMenu] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);
  const [translateY, setTranslateY] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const helpButton: HelpButton[] = [
    { name: "Help Center" },
    { name: "Shipping Info" },
    { name: "Returns" },
    { name: "Track My Order" },
    { name: "Discount" },
    { name: "About us" },
    { name: "Share The Look" },
    { name: "Privacy Policy" },
  ];

  const threeButtos: threeButtos[] = [
    { buttonName: "Help" },
    { buttonName: "Join Us" },
    { buttonName: "Sign in" },
  ];
  const handleDragStart = (
    event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent
  ) => {
    setDragging(true);
    setStartY(
      "clientY" in event
        ? event.clientY - translateY
        : event.touches[0].clientY - translateY
    );
  };

  const handleDragMove = (event: MouseEvent | TouchEvent) => {
    if (dragging) {
      const newY =
        "clientY" in event
          ? event.clientY - startY
          : event.touches[0].clientY - startY;
      setTranslateY(Math.max(newY, 0)); // Ensure it doesn't go above the starting position
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (translateY > 30) {
      // Threshold for fully hiding the popup
      setHandleMenu(false);
      setTranslateY(0); // Reset to initial position
    }
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("touchend", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [dragging]);

  useEffect(() => {
    setSendingData(activeData === "Men" ? categories : categories2);
  }, [activeData]);

  const handleMen = () => {
    setActiveData("Men");
    setOpen(true);
  };

  const handleWomen = () => {
    setActiveData("Women");
    setOpen(true);
  };
  const handleOnClickMenu = () => {
    setHandleMenu(!handleMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Check if the scroll exceeds 5% of the total height
      if (scrollTop > totalHeight * 0.05) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hover:bg-white hover:text-black  fixed w-full top-0 z-50 ${
        hideHeader ? "bg-white text-black" : "md:text-white"
      }`}
    >
      <div className="flex sm:justify-between px-3 justify-center items-center">
        {!hideHeader && (
          <>
            <h1>Free domestic shipping over $150 and 30-day return</h1>
            <div
              className="md:p-3 p-5 text-[0.8vw] font-bold hidden sm:block"
              onMouseLeave={() => setHelpToggle(false)}
            >
              {threeButtos.map((item, index) => (
                <button
                  key={index}
                  onMouseEnter={
                    index === 0 ? () => setHelpToggle(true) : undefined
                  }
                  className={`mx-1 ${
                    index === 1 ? "border-x border-black px-2" : ""
                  }`}
                >
                  {item.buttonName}
                </button>
              ))}
              {helpToggle && (
                <div className="absolute bg-white shadow-lg p-3">
                  {helpButton.map((item, index) => (
                    <button key={index} className="block text-left w-full">
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between items-center p-[3vw] md:p-[1vw] border-t border-gray-300">
        <div className="flex gap-3 ">
          <div>
            <h1 className="md:font-bold font-extrabold">ALPHALETE</h1>
          </div>
          <div className="sm:flex sm:gap-3   hidden ">
            {" "}
            <div onMouseEnter={handleMen} className="cursor-pointer">
              Men
            </div>
            <div onMouseEnter={handleWomen} className="cursor-pointer">
              Women
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <BsFillPersonFill className="sm:hidden" />
          <BiSearchAlt2 />
          <BiShoppingBag />
          <RxHamburgerMenu className="sm:hidden" onClick={handleOnClickMenu} />
        </div>
      </div>

      {open && (
        <div onMouseLeave={() => setOpen(false)}>
          <PopUp categories={sendingData} />
        </div>
      )}
      {handleMenu && (
        <div>
          {handleMenu && (
            <div className="bg-black absolute bg-opacity-40 top-0 left-0 right-0 bottom-0 z-[-1] h-[100vh]"></div>
          )}

          <div
            className={`md:hidden fixed bottom-0 left-0 rounded-t-lg md:rounded-none top-[15vh] h-[100vh] w-full bg-white  shadow-2xl z-50 transition-transform duration-1`}
            style={{
              transform: `translateY(${translateY}px)`,
            }}
          >
            {/* Drag button */}
            <div
              className="relative flex items-center justify-center"
              style={{
                cursor: dragging ? "grabbing" : "grab",
              }}
              onMouseDown={(e) => handleDragStart(e)}
              onTouchStart={(e) => handleDragStart(e.touches[1])} // For touch devices
            >
              <div className="h-[1.3vw] w-[15vw] absolute top-[-5vw] rounded-lg bg-gray-400 opacity-85"></div>
            </div>
            <MobPopUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
