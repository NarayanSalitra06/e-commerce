import React from "react";
import { VideoComponentProps } from "../../types/types";
import Heading from "./Heading";
import Button from "../common/Button";

const VideoComponent: React.FC<VideoComponentProps> = ({
  videoSrc,
  subHeading,
}) => {

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
        {/* Heading */}
        <div className="flex flex-col items-center">
        <Heading
           upperText="VISIT "
           lowerText="ALPHALAND"
           upperStyle="text-30px-vw font-syncopate font-bold text-[#ffffff]"
           lowerStyle="text-[1.56vw] font-syncopate font-bold text-[#ffffff]"
      />
        </div>
        
        {/* Subheading */}
        <p className="text-lg font-light mt-4 mb-6">{subHeading}</p>

        {/* Button */}
         
         <Button
                  text="Learn More"
                  navigateTo="/officialalphaland.com/"
                  buttonStyle="bg-white text-[#000000] text-13px-vw font-inter px-6 py-3"
                  isExternal={true}
                />


      </div>
    </div>
  );
};

export default VideoComponent;
