import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Heading from "./Heading";
import Button from "../common/Button";

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const navigate = useNavigate();

  // Slideshow items
  const items = [
    { type: "image", src: "/home/img1.webp" },
    { type: "video", src: "/home/videobanner.mp4" },
    { type: "image", src: "/home/img2.webp" },
  ];

  // Change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  // };

  return (
    <div className="relative h-screen overflow-hidden z-0">
      {/* Navbar */}
      <div className="absolute top-0 w-full z-10">
        <Navbar />
      </div>

      <div></div>

      {/* Slideshow */}
      <div className="absolute inset-0">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Heading and Buttons */}
  
      <div className="absolute bottom-16 left-8 z-20 text-white">
        
        <p className="leading-none">
         <Heading
           upperText="NEW"
           lowerText="ARRIVALS"
           upperStyle="text-30px-vw font-syncopate font-bold text-[#ffffff]"
           lowerStyle="text-[1.56vw] font-syncopate font-bold text-[#ffffff]"
      />
        </p>
        <div className="flex gap-4 leading-3">
      
          <Button
                  text="Shop Women"
                  navigateTo="/shop-women"
                  buttonStyle="bg-white text-[#000000] text-13px-vw font-inter px-6 py-3"
    
                />

          <Button
                  text="Shop Men"
                  navigateTo="/shop-men"
                  buttonStyle="bg-white text-[#000000] text-[13px] font-inter px-6 py-3"
                />
        </div>
      </div>
    </div>
  );
};

export default Banner;
