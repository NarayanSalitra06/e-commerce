/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

interface MarqueeItem {
  id: number;
  text: string;
  link: string;
}

interface VerticalMarqueeProps {
  bgclr: string; // Receive bgclr prop
}

const marqueeData: MarqueeItem[] = [
  { id: 1, text: "30 day Hassle-Free returns", link: "https://example.com/returns" },
  { id: 2, text: "Free domestic shipping over £120", link: "https://example.com/shipping" },
];

const VerticalSentenceSlider: React.FC<VerticalMarqueeProps> = ({ bgclr }) => {
  const containerHeight = 25; // Adjust to match the text size
  const pauseDuration = 2000; // Pause duration in milliseconds
  const scrollDuration = 1000; // Scroll duration in milliseconds

  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollMarquee = () => {
      if (!marqueeRef.current) return;

      // Smooth scroll
      marqueeRef.current.style.transition = `transform ${scrollDuration}ms`;
      marqueeRef.current.style.transform = `translateY(-${containerHeight}px)`;

      // After scrolling one item, reset position
      setTimeout(() => {
        if (!marqueeRef.current) return;
        marqueeRef.current.appendChild(
          marqueeRef.current.firstElementChild as Node
        );
        marqueeRef.current.style.transition = "none";
        marqueeRef.current.style.transform = "translateY(0)";
      }, scrollDuration);
    };

    const interval = setInterval(scrollMarquee, pauseDuration + scrollDuration);

    return () => clearInterval(interval);
  }, [pauseDuration, scrollDuration, containerHeight]);

  return (
    <div
      style={{
        height: `${containerHeight}px`,
        width: "75vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
        }}
      >
        {marqueeData.concat(marqueeData).map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-[14px] font-bold font-inter cursor-pointer"
            style={{
              height: `${containerHeight}px`,
              lineHeight: `${containerHeight}px`,
              color: bgclr === "black" ? "white" : "black", // Dynamic text color
            }}
          >
            <span className="flex-1 text-start">{item.text}</span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 flex items-center ${bgclr === "black" ? "text-white" : "text-black"}`}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%", // Ensures alignment with the container
              }}
            >
              <FiExternalLink className="w-4 h-4" /> {/* Adjust icon size */}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSentenceSlider;
