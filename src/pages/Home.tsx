import React from "react";
import Banner from "../components/home/Banner";
// import WomenFitness from "../components/home/WomenFitness";
// import { ProductGrid } from "../components/features/ProductGrid";
import VideoComponent from "../components/home/VideoComponent";
import SwiperSlider from "../components/home/SwiperSlider";
import { filterdata, menFitnessdata, womenFitnessdata } from "../data/Header";
import Filter from "../components/home/Filter";
import ToggleBtn from "../components/common/ToggleBtn";
// import ButtonLogo from "../components/common/BottomLogo";
import Heading from "../components/common/Heading";


const Home: React.FC = () => {
  return (
    <div className="relative bg-white">
      <Banner />
      <Heading
            upperText="Women's"
            lowerText="Popular Right now "
            upperStyle="text-[1.67vw] text-start mt-4 mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
            lowerStyle="text-[1.88vw] uppercase mt-0 mr-0 mb-[-1.9vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
         />

      <SwiperSlider data={womenFitnessdata} />
      <ToggleBtn buttons={["men", "women"]}></ToggleBtn>

      

      <Filter data={filterdata}></Filter>

      <Heading
            upperText="Men's"
            lowerText="trending now"
            upperStyle="text-[1.67vw] text-start mt-4 mr-0 mb-1 ml-2 font-inter font-bold text-[#0d0d0d]"
            lowerStyle="text-[1.88vw] uppercase mt-0 mr-0 mb-[-1.9vw] ml-2 text-start font-syncopate font-bold text-[#0d0d0d]"
         />

      <SwiperSlider data={menFitnessdata} />
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
