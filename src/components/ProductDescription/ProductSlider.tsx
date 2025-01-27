import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { swiper} from "../../types/types";


const ProductSlider: React.FC<swiper> = ({ data }) => {

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
            slidesPerView: 1, // For smaller screens
          },
          500: {
            slidesPerView: 2, // For larger screens
          },
          950: {
            slidesPerView: 2.5, // For larger screens
          },
          1200: {
            slidesPerView: 2.5, // For larger screens
          },
        }}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden relative">
            <img
              className="transition-all duration-1000 scale-105 h-[60vh] lg:h-[100vh]  w-[100vw]"
              src={item?.images}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
