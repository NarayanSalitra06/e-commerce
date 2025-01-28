import React from "react";
import { VideoComponentProps } from "../../types/types";
import Heading from "../common/Heading";
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
      <div className="absolute inset-0 flex flex-col text-white bg-black bg-opacity-40 p-4">
        {/* Content for mobile screens (at the bottom) */}
        <div className="flex flex-col justify-end items-start h-full lg:justify-center lg:items-center lg:text-center">
          {/* Heading */}
          <div className="mb-2 lg:mb-4">
            <Heading
              upperText="VISIT"
              lowerText="ALPHALAND"
              upperStyle="text-[1.56vw] font-syncopate font-bold text-[#ffffff]"
              lowerStyle="text-[1.56vw] font-syncopate font-bold text-[#ffffff]"
            />
          </div>

          {/* Subheading */}
          <p className="text-lg font-light mb-4">{subHeading}</p>

          {/* Button */}
          <Button
            text="Learn More"
            navigateTo="/officialalphaland.com/"
            buttonStyle="bg-white text-[#000000] font-bold text-sm font-inter px-4 py-2"
            isExternal={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
