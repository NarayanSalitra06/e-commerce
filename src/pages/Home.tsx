import React from "react";
import Banner from "../components/home/Banner";

import VideoComponent from "../components/home/VideoComponent";
import SwiperSlider from "../components/home/SwiperSlider";
import { filterdata } from "../data/Header";
import Filter from "../components/home/Filter";
import Heading from "../components/common/Heading";
import { TabularHome } from "../components/home/TabularHome";
import { menAllproduct, WomenAllProduct } from "../data/WomenAllProduct";

const Home: React.FC = () => {
  return (
    <div className="relative bg-white overflow-x-hidden">
      <Banner />
      <Heading
        upperText="Women's"
        lowerText="Popular Right now "
        upperStyle="text-[3.25vw]  lg:text-[1.56vw] text-start mt-4 mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
        lowerStyle="text-[4.33vw]  lg:text-[1.56vw] uppercase mt-0 mr-0 mb-[-1.9vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
      />

      <SwiperSlider datas={WomenAllProduct} />

      <TabularHome />

      <Filter data={filterdata}></Filter>

      <Heading
        upperText="Men's"
        lowerText="trending now"
        upperStyle="text-[1.67vw] text-start mt-4 mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
        lowerStyle="text-[1.88vw] uppercase mt-0 mr-0 mb-[-1.9vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
      />

      <SwiperSlider datas={menAllproduct} />

      <VideoComponent
        videoSrc="/home/video.mp4"
        smVideoSrc="/home/videomob.mp4"
        mdVideoSrc="/home/videomob.mp4"
        subHeading="An oasis where individuals come to Learn More Dream More Be More."
        buttonText="Learn More"
      />
    </div>
  );
};

export default Home;
