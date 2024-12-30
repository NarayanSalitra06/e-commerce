/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import type { womenFitness } from "../../types/types";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperSlider from "./SwiperSlider";

// Your data array
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

const WomenFitness: React.FC = () => {
  // Slider settings
  // eslint-disable-next-line no-var
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="w-full  py-4">
      <div className="">
        <SwiperSlider />
      </div>
    </div>
  );
};

export default WomenFitness;
