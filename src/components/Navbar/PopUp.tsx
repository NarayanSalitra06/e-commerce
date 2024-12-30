import React, { useState } from "react";
import {
  Categories,
  Categories2,
  CategoryWithAd,
  SubCategory,
} from "../../types/types";

const PopUp: React.FC<{ categories: Categories | Categories2 }> = ({
  categories,
}) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="flex border w-full md:h-auto h-[77vh]  min-h-[25vw] bg-white ">
      <div className=" hidden w-1/2 md:flex p-5">
        {Object.entries(categories).map(([key, value]) => {
          const items =
            (value as CategoryWithAd)?.items || (value as SubCategory[]);
          const adImage = (value as CategoryWithAd)?.adImage || "";

          return (
            <div key={key} className="p-3 h-[25vw]">
              <h2
                className="font-bold font-inter text-[5vw] md:text-[1vw] mb-[1vw]"
                onMouseEnter={() => setHoveredImage(adImage || null)}
              >
                {key.toUpperCase()}
              </h2>
              <ul className="">
                {items?.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() =>
                      setHoveredImage(item.adImage || adImage)
                    }
                    onMouseLeave={() => setHoveredImage(null)} // Reset on mouse leave
                    className="font-inter text-[3vw] md:text-[0.9vw] py-[0.3vw] group font-medium relative"
                  >
                    {item.name}
                    {item.count !== null && (
                      <sup className=" text-[0.7vw] font-bold text-[#1c1c1c] opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.count}
                      </sup>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col flex-wrap gap-3 w-1/2 md:hidden px-5">
        {Object.entries(categories).map(([key, value]) => {
          const items =
            (value as CategoryWithAd)?.items || (value as SubCategory[]);
          const adImage = (value as CategoryWithAd)?.adImage || "";

          return (
            <div key={key} className="p-3 h-[25vw]">
              <h2
                className="font-bold font-inter text-[4vw] md:text-[1vw] mb-[1vw]"
                onMouseEnter={() => setHoveredImage(adImage || null)}
              >
                {key.toUpperCase()}
              </h2>
              <ul className="">
                {items?.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() =>
                      setHoveredImage(item.adImage || adImage)
                    }
                    onMouseLeave={() => setHoveredImage(null)} // Reset on mouse leave
                    className="font-inter text-[3vw] md:text-[0.9vw] py-[0.3vw] group font-medium relative"
                  >
                    {item.name}
                    {item.count !== null && (
                      <sup className=" text-[0.7vw] font-bold text-[#1c1c1c] opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.count}
                      </sup>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="md:w-[50%] md:h-[28vw] hidden sm:block">
        <img
          src={hoveredImage || "/header/men/img2webp"}
          alt="Category Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PopUp;
