import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Heading from "./Heading";
import Button from "../common/Button";
import { items } from "../../data/Banner";

const Banner: React.FC = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // // const navigate = useNavigate();

  // // Change slides every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [items.length]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden z-0">
       {/* Navbar */}
       <div className="absolute top-0 w-full z-10">
         <Navbar />
       </div>

    {/* Slideshow */}
    <div className="absolute inset-0">
      {items.map((item, index) => (
         <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Slide Content */}
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

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <p className="leading-none text-center">
              <Heading
                upperText={item.text.upperText}
                lowerText={item.text.lowerText}
                upperStyle={item.text.upperStyle}
                lowerStyle={item.text.lowerStyle}
              />
            </p>
            </div>
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
