import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
// import "swiper/css/pagination";
import type { womenFitness } from "../../types/types";
import Button from "../common/Button";

// Import required modules
// import { Pagination } from "swiper/modules";

const SwiperSlider: React.FC = () => {
  const womenFitnessdata: womenFitness[] = [
    {
      image: "/womenpopular/img1.webp",
      text: "BRA",
    },
    {
      image: "/womenpopular/shorts2.webp",
      text: "SPORTS",
    },
    {
      image: "/womenpopular/legging2.webp",
      text: "LEGGINGS",
    },
    {
      image: "/womenpopular/hoodies.webp",
      text: "HOODIES",
    },
    {
      image: "/womenpopular/shirts.webp",
      text: "SHIRTS",
    },
    {
      image: "/womenpopular/sweatpants.webp",
      text: "SWEATPANTS",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {womenFitnessdata?.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden relative">
            <img
              className="transition-all duration-1000 hover:scale-105"
              src={item?.image}
              alt=""
            />
            <div className="text-center absolute bottom-[3vw] left-[3vw] z-30">
              <p className="font-semibold text-[27px] font-syncopate text-stone-50">
                {item.text}
              </p>
              {/* <button className="mt-2 bg-white text-black font-semibold px-6 py-2 rounded-[3vh]">
                Shop Now
              </button> */}
              <Button
                  text="Shop Now"
                  navigateTo="/shop-now"
                  buttonStyle="bg-white text-[#000000] text-13px-vw font-inter px-6 py-3"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
