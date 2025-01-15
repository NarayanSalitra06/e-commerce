import React, { useState, useEffect } from "react";

const VerticalSentenceSlider: React.FC = () => {
  const sentences = ["Llllllllllllllll", "vvvvvvvvvvvvvvvv"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 10000); 

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sentences.length]);

  return (
    <div className="relative h-16 w-full overflow-hidden bg-white flex items-start justify-start">
      <div
        className="transition-transform duration-[2s] ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {sentences.map((sentence, index) => (
          <div
            key={index}
            className="h-16 flex items-start justify-start text-lg font-medium text-gray-800"
          >
            {sentence}
          </div>
        ))}
      </div>
      
      <a
        href="#"
        className="absolute right-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default VerticalSentenceSlider;
