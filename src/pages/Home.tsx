import React from "react";
import Banner from "../components/home/Banner";
import WomenFitness from "../components/home/WomenFitness";
import { ProductGrid } from "../components/features/ProductGrid";
import VideoComponent from "../components/home/VideoComponent";
import Heading from "../components/home/Heading";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />

      <Heading
       upperText="Women's"
       lowerText="Popular right now"
       upperStyle="font-bold text-[#0d0d0d] font-[15px] font-inter pt-2 m-[0px 0px 5px] m-2"
       lowerStyle="font-bold text-[#0d0d0d] font-[20px] font-syncopate uppercase m-2" 
      />

      <WomenFitness />
       
       <Heading 
        upperText="Shop"
        lowerText="Winter Essentials"
        upperStyle="font-bold text-[#0d0d0d] font-[15px] font-inter pt-2 m-[0px 0px 5px] m-2"
        lowerStyle="font-bold text-[#0d0d0d] font-[20px] font-syncopate uppercase m-2" />  

      <ProductGrid />
       
      <Heading 
        upperText="Men's"
        lowerText="tranding now"
        upperStyle="font-bold text-[#0d0d0d] font-[15px] font-inter pt-2 m-[0px 0px 5px] m-2"
        lowerStyle="font-bold text-[#0d0d0d] font-[20px] font-syncopate uppercase m-2" />  

      <WomenFitness />

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
