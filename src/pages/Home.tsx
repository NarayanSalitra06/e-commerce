import React from "react";
import Banner from "../components/home/Banner";
import WomenFitness from "../components/home/WomenFitness";
import { ProductGrid } from "../components/features/ProductGrid";
import VideoComponent from "../components/home/VideoComponent";
import SwiperSlider from "../components/home/SwiperSlider";
import { filterdata, menFitnessdata, womenFitnessdata } from "../data/Header";
import Filter from "../components/home/Filter";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <SwiperSlider data={womenFitnessdata} />
      <Filter data={filterdata}></Filter>
      <SwiperSlider data={menFitnessdata} />
      <VideoComponent
        videoSrc="/home/video.mp4"
        subHeading="An oasis where individuals come to Learn More Dream More Be More."
        buttonText="Learn More"
        // buttonUrl="https://officialalphaland.com/"
      />
    </div>
  );
};

export default Home;
