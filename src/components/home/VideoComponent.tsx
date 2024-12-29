// import React from "react";

// interface VideoComponentProps {
//   videoSrc: string;
//   heading: string;
//   subHeading: string;
//   buttonText: string;
//   buttonUrl: string;
// }

// const VideoComponent: React.FC<VideoComponentProps> = ({
//   videoSrc,
//   heading,
//   subHeading,
//   buttonText,
//   buttonUrl,
// }) => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         src={videoSrc}
//         autoPlay
//         muted
//         loop
//         className="absolute inset-0 w-full h-full object-cover"
//       ></video>

//       {/* Overlay Content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
//         {/* Heading */}
//         <h1 className="text-5xl font-bold mb-4">{heading}</h1>
//         {/* Subheading */}
//         <p className="text-lg font-light mb-6">{subHeading}</p>
//         {/* Button */}
//         <a
//           href={buttonUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-white text-black py-2 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
//         >
//           {buttonText}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;

import React from "react";

interface VideoComponentProps {
  videoSrc: string;
  heading: string; // Expecting two words
  subHeading: string;
  buttonText: string;
  buttonUrl: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  videoSrc,
  heading,
  subHeading,
  buttonText,
  buttonUrl,
}) => {
  // Split the heading into two words
  const [firstWord, ...restWords] = heading.split(" ");
  const secondLine = restWords.join(" ");

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
          <h1 className="text-6xl font-bold leading-none">{firstWord}</h1>
          <h1 className="text-6xl font-bold -mt-4">{secondLine}</h1>
        </div>
        {/* Subheading */}
        <p className="text-lg font-light mt-4 mb-6">{subHeading}</p>
        {/* Button */}
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black py-2 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default VideoComponent;
