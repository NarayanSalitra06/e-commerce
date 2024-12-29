import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
      {/* <div className="absolute bottom-16 left-8 z-20 text-white">
        <h1 className="text-5xl font-bold mb-4">NEW ARRIVALS</h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleNavigation("/shop-women")}
            className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
          >
            Shop Women
          </button>
          <button
            onClick={() => handleNavigation("/shop-men")}
            className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
          >
            Shop Men
          </button>
        </div>
      </div> */}

      <div className="absolute bottom-16 left-8 z-20 text-white">
        <h1 className="text-5xl font-bold mb-4 leading-none">
          <span className="block">NEW</span>
          <span className="block">ARRIVALS</span>
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleNavigation("/shop-women")}
            className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
          >
            Shop Women
          </button>
          <button
            onClick={() => handleNavigation("/shop-men")}
            className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200"
          >
            Shop Men
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
