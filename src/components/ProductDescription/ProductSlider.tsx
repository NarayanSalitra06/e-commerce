import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { womenFitnessObject } from "../../types/types";
import Button from "../common/Button";

// Import required modules
// import { Pagination } from "swiper/modules";

const ProductSlider: React.FC<womenFitnessObject> = ({ data }) => {
  console.log("SwiperSlider data:", data); // Debugging log
  return (
    <div className="w-full h-full py-0">
    
      <Swiper
        spaceBetween={0}
        loop={true} 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.2, // For smaller screens
          },
          500: {
            slidesPerView: 2, // For larger screens
          },
          950: {
            slidesPerView: 2.5, // For larger screens
          },
          1200: {
            slidesPerView: 3.5, // For larger screens
          },
        }}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden relative">
            <img
              className="transition-all duration-1000 scale-105 h-[60vh] lg:h-[100vh]  w-[100vw]"
              src={item?.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
