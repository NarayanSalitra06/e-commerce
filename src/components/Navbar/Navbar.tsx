
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import PopUp from "./PopUp";
import MobPopUp from "./MobPopUp";
import VerticalMarquee from "./VerticalMarquee";
import { categories, categories2 } from "../../data/Header";
import { useLocation, useNavigate } from "react-router-dom";

interface HelpButton {
  name: string;
}

interface ThreeButton {
  buttonName: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState<string>("");
  const [sendingData, setSendingData] = useState(categories);
  const [helpToggle, setHelpToggle] = useState(false);
  const [handleMenu, setHandleMenu] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [startY, setStartY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [bgclr, setBgclr] = useState("black");

  const navigate = useNavigate();
  const location = useLocation();
  const signinpage = location.pathname.includes("/signin");
  const signuppage = location.pathname.includes("/register");

  const helpButton: HelpButton[] = [
    { name: "Help Center" },
    { name: "Shipping Info" },
    { name: "Returns" },
    { name: "Track My Order" },
    { name: "Discount" },
    { name: "About Us" },
    { name: "Share The Look" },
    { name: "Privacy Policy" },
  ];

  const threeButtons: ThreeButton[] = [
    { buttonName: "Help" },
    { buttonName: "Join Us" },
    { buttonName: "Sign In" },
  ];

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
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
      setTranslateY(Math.max(newY, 0));
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (translateY > 30) {
      setHandleMenu(false);
      setTranslateY(0);
    }
  };

  const handlemarqueeColor = () => setBgclr("black");
  const handlemarqueeColorWhite = () => setBgclr("white");

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

  const handleOnClickMenu = () => setHandleMenu((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setHideHeader(scrollTop > totalHeight * 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hover:bg-white hover:text-black fixed w-full top-0 z-50 ${
        signinpage ? "!text-black" : ""
      } ${hideHeader ? "bg-white text-black" : "md:text-white"} ${
        signuppage ? "!text-black" : ""
      }`}
      onMouseEnter={handlemarqueeColorWhite}
      onMouseLeave={handlemarqueeColor}
    >
      <div
        className={`${
          hideHeader ? "hidden" : "block"
        } flex sm:justify-between px-2 w-full justify-center items-center`}
      >
        {hideHeader ? (
          <VerticalMarquee bgclr={bgclr} />
        ) : (
          <VerticalMarquee bgclr={bgclr} />
        )}
        <div
          className="md:p-2 p-5 text-[0.8vw] font-bold hidden sm:block"
          onMouseLeave={() => setHelpToggle(false)}
        >
          {threeButtons.map((item, index) => (
            <button
              key={index}
              onMouseEnter={index === 0 ? () => setHelpToggle(true) : undefined}
              onClick={
                item.buttonName === "Sign In"
                  ? () => navigate("/signin")
                  : undefined
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
      </div>

      <div className="flex justify-between items-center p-[3vw] md:p-[1vw] border-t border-gray-300">
        <div className="flex gap-3">
          <h1
            className="md:font-bold font-extrabold cursor-pointer"
            onClick={() => navigate("/")}
          >
            ALPHALETE
          </h1>
          <div className="sm:flex sm:gap-3 hidden">
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
          <div className="bg-black absolute bg-opacity-40 top-0 left-0 right-0 bottom-0 z-[-1] h-[100vh]" />
          <div
            className="md:hidden fixed bottom-0 left-0 rounded-t-lg top-[15vh] h-[100vh] w-full bg-white shadow-2xl z-50 transition-transform duration-300"
            style={{ transform: `translateY(${translateY}px)` }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ cursor: dragging ? "grabbing" : "grab" }}
              onMouseDown={handleDragStart}
              onTouchStart={(e) => handleDragStart(e)}
            >
              <div className="h-[1.3vw] w-[15vw] absolute top-[-5vw] rounded-lg bg-gray-400 opacity-85" />
            </div>
            <MobPopUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


