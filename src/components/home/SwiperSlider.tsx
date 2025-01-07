import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { allCategaryProdect } from "../../types/types";
import Button from "../common/Button";
import { Link } from "react-router-dom";

// Import required modules
// import { Pagination } from "swiper/modules";

const SwiperSlider: React.FC<allCategaryProdect> = ({ datas }) => {
  console.log("SwiperSlider data:", datas); // Debugging log
  return (
    <>
      <div className="w-full  py-8">
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
          {datas?.products?.map((item, index) => (
            <SwiperSlide key={index} className="overflow-hidden relative ">
              <Link
                to={item.categaryLink}
                state={{
                  allProduct: item?.allProduct,
                  categaryName: item.categaryName,
                }}
              >
                {/* {console.log("Passing state to Link:", item?.allProduct[index])} */}
                <img
                  className="transition-all duration-1000 hover:scale-105 h-[60vh] lg:h-[70vh] w-[100vw] "
                  src={item?.productImg}
                  alt=""
                />
                <div className="text-center absolute bottom-[5vw]  md:bottom-[3vw] left-[3vw] z-30">
                  <p className="font-semibold text-[27px]  uppercase font-syncopate text-stone-50">
                    {item?.categaryName}
                  </p>

                  {/* Buttons */}
                  <Button
                    text="Shop"
                    navigateTo="Collections"
                    buttonStyle="bg-white text-[#000000] text-sm font-inter px-4 py-2"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
