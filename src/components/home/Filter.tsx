/* eslint-disable react-hooks/rules-of-hooks */
import { AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { filterArr } from "../../types/types";
import "swiper/css";
import "swiper/css/pagination";

const Filter: React.FC<{ data: filterArr[] }> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnter2 = (index: number) => {
    setHoveredIndex2(index);
  };

  const handleMouseLeave2 = () => {
    setHoveredIndex2(null);
  };

  // Group data into pairs
  const pairedNumbers = [];
  for (let i = 0; i < data.length; i += 2) {
    pairedNumbers.push([data[i], data[i + 1]]);
  }

  return (
    <>
      <div className="m-[1vw]">
        <Swiper
          spaceBetween={7}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 5 }, // Small screens
            764: { slidesPerView: 9 }, // Larger screens
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {pairedNumbers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                {/* First Image */}
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="border relative border-slate-200 max-h-[34.4vw] md:max-w-[27.2vw]  max-w-[37.2vw]  rounded-[1.04vw] overflow-hidden mb-[1vw]"
                >
                  <img
                    src={hoveredIndex === index ? item[0]?.img2 : item[0]?.img1}
                    alt="Product"
                    className="h-full w-full object-cover"
                  />
                  <AiOutlinePlus className="absolute right-[1vw] bottom-[1vw] text-slate-200 h-[2vw] w-[2vw]" />
                </div>
                {/* Second Image */}
                <div
                  onMouseEnter={() => handleMouseEnter2(index)}
                  onMouseLeave={handleMouseLeave2}
                  className="border relative border-slate-200 max-h-[34.4vw] max-w-[27.2vw]  rounded-[1.04vw] overflow-hidden"
                >
                  <img
                    src={
                      hoveredIndex2 === index ? item[1]?.img2 : item[1]?.img1
                    }
                    alt="Product"
                    className="h-full w-full object-cover"
                  />
                  <AiOutlinePlus className="absolute right-[1.5vw] bottom-[1.5vw] text-slate-200 h-[2vw] w-[2vw]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Filter;
