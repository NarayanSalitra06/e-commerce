import React from "react";
//  Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { womenFitnessObject } from "../../types/types";
import Button from "../common/Button";

// Import required modules
// import { Pagination } from "swiper/modules";

const SwiperSlider: React.FC<womenFitnessObject> = ({ data }) => {
  console.log("SwiperSlider data:", data); // Debugging log
  return (
    <>
      <div className="w-full  pt-8 pb-2">
        <Swiper
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // When the viewport is 640px or less
            500: {
              slidesPerView: 2, // For larger screens
            },
            // Default for smaller screens
            0: {
              slidesPerView: 1.2, // For smaller screens
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
            <SwiperSlide key={index} className="overflow-hidden relative ">
              <img
                className="transition-all duration-1000 hover:scale-105 h-[60vh] lg:h-[70vh] w-[100vw] "
                src={item?.image}
                alt=""
              />
              <div className="text-center absolute bottom-[5vw]  md:bottom-[3vw] left-[3vw] z-30">
                <p className="font-semibold text-[27px] font-syncopate text-stone-50">
                  {item.text}
                </p>

                {/* Buttons */}
                <Button
                    text="Shop Women"
                    navigateTo="/shop-women"
                    buttonStyle="bg-white text-[#000000] text-sm font-inter px-4 py-2"
                  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
