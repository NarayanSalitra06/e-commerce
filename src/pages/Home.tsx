import React from "react";
import Banner from "../components/home/Banner";
import WomenFitness from "../components/home/WomenFitness";
import { ProductGrid } from "../components/features/ProductGrid";
import VideoComponent from "../components/home/VideoComponent";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <WomenFitness />
      <ProductGrid />
      <WomenFitness />
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
