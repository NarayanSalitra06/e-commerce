/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";

interface MarqueeItem {
  id: number;
  text: string;
}

interface VerticalMarqueeProps {
  bgclr: string; // Receive bgclr prop
}

const marqueeData: MarqueeItem[] = [
  { id: 1, text: "Free domestic shipping over $150 and 30-day return" },
  { id: 2, text: "Women new arrival, Men new arrival" },
  { id: 3, text: "Free domestic shipping over $150 and 50-day return" },
];

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({ bgclr }) => {
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
          <p
            key={index}
            style={{
              margin: 0,
              textAlign: "start",
              fontSize: "16px",
              height: `${containerHeight}px`,
              lineHeight: `${containerHeight}px`,
              color: bgclr === "black" ? "white" : "black", // Dynamic text color
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLParagraphElement).style.color =
                bgclr === "black" ? "white" : "black";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLParagraphElement).style.color =
                bgclr === "black" ? "white" : "black";
            }}
          >
            {item.text}
          </p>
        ))}
      </div>
      <style>
        {`
          .marquee-text {
            background-color: transparent; /* Default background is transparent */
          }

          .marquee-text:hover {
            color: ${
              bgclr === "black" ? "white" : "black"
            } ;  Change text color on hover 
            background-color: transparent; 
          }
            
          `}
      </style>
    </div>
  );
};

export default VerticalMarquee;
