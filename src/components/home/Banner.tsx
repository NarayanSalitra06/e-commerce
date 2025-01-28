import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Heading from "../common/Heading";
import Button from "../common/Button";
import { items, mobileItems } from "../../data/Banner";

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen size is mobile or tablet
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % (isMobile ? mobileItems.length : items.length)
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const currentItems = isMobile ? mobileItems : items;

  return (
    <div className="relative h-screen overflow-hidden z-0">
      {/* Navbar */}
      <div className="absolute top-0 w-full z-10">
        <Navbar />
      </div>

      {/* Slideshow */}
      <div className="absolute inset-0">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-end ${
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
            <div className="absolute bottom-10 flex flex-col items-start justify-start w-full bg-opacity-50 p-4">
              <p className="leading-none text-center mb-2">
                <Heading
                  upperText={item.text.upperText}
                  lowerText={item.text.lowerText}
                  upperStyle={item.text.upperStyle}
                  lowerStyle={item.text.lowerStyle}
                />
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                {item.type === "video" ? (
                  <Button
                    text="Shop Women"
                    navigateTo="collections"
                    buttonStyle="bg-white text-[#000000] text-[20px] font-semibold font-inter px-5 py-2"
                  />
                ) : (
                  <>
                    <Button
                      text="Shop Women"
                      navigateTo="collections"
                      buttonStyle="bg-white text-[#000000] text-[20px] font-semibold  font-inter px-4 py-2"
                    />
                    <Button
                      text="Shop Men"
                      navigateTo="collections"
                      buttonStyle="bg-white text-[#000000] text-[20px]  font-semibold font-inter px-4 py-2"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
