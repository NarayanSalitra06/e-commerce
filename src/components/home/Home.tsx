import React from "react";
import Banner from "./Banner";
import WomenFitness from "./WomenFitness";
import { ProductGrid } from "../features/ProductGrid";
import VideoComponent from "./VideoComponent";
import SwiperSlider from "./SwiperSlider";
import { menFitnessdata, womenFitnessdata } from "../../data/Header";

const Home: React.FC = () => {
  console.log("home component");
  return (
    <div>
      {/* <Banner />
       */}
      <VideoComponent
        videoSrc="/home/video.mp4"
        heading="VISIT ALPHALAND"
        subHeading="An oasis where individuals come to Learn More Dream More Be More."
        buttonText="Learn More"
        buttonUrl="https://officialalphaland.com/"
      />
    </div>
  );
};

export default Home;
