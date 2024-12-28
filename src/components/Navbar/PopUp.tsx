import React, { useState } from "react";

interface SubCategory {
  name: string;
  count: number | null;
  adImage?: string;
}

interface CategoryWithAd {
  adImage?: string;
  items: SubCategory[];
}

interface Categories {
  [key: string]: SubCategory[] | CategoryWithAd | undefined;
}

const PopUp: React.FC<{ categories: Categories }> = ({ categories }) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="flex border w-full min-h-[25vw] bg-white ">
      <div className="w-1/2 flex p-5">
        {Object.entries(categories).map(([key, value]) => {
          const items =
            (value as CategoryWithAd)?.items || (value as SubCategory[]);
          const adImage = (value as CategoryWithAd)?.adImage || "";

          return (
            <div key={key} className="p-3 h-[25vw]">
              <h2
                className="font-bold font-inter  text-[1vw] mb-[1vw]"
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
                    className="font-inter text-[0.9vw] py-[0.3vw] group font-medium relative"
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
      <div className="w-[50%] h-[28vw]">
        <img
          src={hoveredImage || "/header/img2.webp"}
          alt="Category Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PopUp;
