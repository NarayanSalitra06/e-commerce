/* eslint-disable @typescript-eslint/no-wrapper-object-types */

import React, { useState, useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import PopUp from "./PopUp";
// import Heading from "../home/Heading";

// Define SubCategory, CategoryWithAd, and CombinedCategories types
interface SubCategory {
  name: string;
  count: number | null;
  adImage?: string; // Optional ad image for subcategories
}

interface CategoryWithAd {
  adImage?: string; // Optional ad image for categories
  items: SubCategory[];
}

type Categories2 = {
  featured?: SubCategory[] | CategoryWithAd;
  clothing?: SubCategory[] | CategoryWithAd;
  activity?: SubCategory[] | CategoryWithAd;
  sportsBras?: CategoryWithAd | CategoryWithAd;
  leggings?: CategoryWithAd | CategoryWithAd;
};
type Categories = {
  featured?: SubCategory[] | CategoryWithAd;
  clothing?: SubCategory[] | CategoryWithAd;
  activity?: SubCategory[] | CategoryWithAd;
};

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
  const [helpToggle, setHelpToggle] = useState(false);

  const categories: Categories = {
    featured: {
      adImage: "/header/men/img2.webp",

      items: [
        { name: "Featured", count: null, adImage: "/header/men/img1.webp" },
        { name: "New Arrivals", count: 132, adImage: "/header/men/img1.webp" },
        { name: "Best Sellers", count: 46, adImage: "/header/men/img1.webp" },
        {
          name: "Better in Black",
          count: 70,
          adImage: "/header/men/img1.webp",
        },
      ],
    },
    clothing: {
      adImage: "/header/men/img1.webp",
      items: [
        { name: "All Products", count: 328, adImage: "/header/men/img3.webp" },
        { name: "Shorts", count: 68, adImage: "/header/men/img3.webp" },
        { name: "T-Shirts", count: 109, adImage: "/header/men/img3.webp" },
      ],
    },
    activity: {
      adImage: "/header/men/img3.webp",
      items: [
        { name: "Running", count: 26, adImage: "/header/men/img2.webp" },
        { name: "Workout", count: 154, adImage: "/header/men/img2.webp" },
      ],
    },
  };

  const categories2: Categories2 = {
    featured: {
      adImage: "/header/women/img3.webp",
      items: [
        {
          name: "New Arrivals",
          count: 140,
          adImage: "/header/women/img1.webp",
        },
        { name: "Best Sellers", count: 48, adImage: "/header/women/img1.webp" },
        {
          name: "Better in Black",
          count: 105,
          adImage: "/header/women/img1.webp",
        },
      ],
    },
    clothing: {
      adImage: "/header/women/img1.webp",
      items: [
        {
          name: "All Products",
          count: 615,
          adImage: "/header/women/img2.webp",
        },
        { name: "Shorts", count: 129, adImage: "/header/women/img2.webp" },
        { name: "Leggings", count: 89, adImage: "/header/women/img2.webp" },
      ],
    },
    sportsBras: {
      adImage: "/header/women/img2.webp",
      items: [
        { name: "Low Impact", count: 101, adImage: "/header/women/img3.webp" },
        {
          name: "Medium Impact",
          count: 123,
          adImage: "/header/women/img3.webp",
        },
      ],
    },
  };

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

  return (
    <div>
      <div className="flex sm:justify-between justify-center items-center">
        <h1>Free domestic shipping over $150 and 30-day return</h1>
        <div
          className="p-3 text-[0.8vw] font-bold hidden sm:block"
          onMouseLeave={() => setHelpToggle(false)}
        >
          {threeButtos.map((item, index) => (
            <button
              key={index}
              onMouseEnter={index === 0 ? () => setHelpToggle(true) : undefined}
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
                <button key={index} className="block text-left w-full ">
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-300">
        <div className="flex gap-3">
          <h1 className="font-bold">ALPHALETE</h1>
          <p onMouseEnter={handleMen} className="cursor-pointer">
            Men
          </p>
          <p onMouseEnter={handleWomen} className="cursor-pointer">
            Women
          </p>
        </div>
        <div className="flex gap-5">
          <BsFillPersonFill />
          <BiSearchAlt2 />
          <BiShoppingBag />
        </div>
      </div>

      {open && (
        <div onMouseLeave={() => setOpen(false)}>
          <PopUp categories={sendingData} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
