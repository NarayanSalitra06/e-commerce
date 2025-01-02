import React, { useEffect, useRef, useState } from "react";

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
  console.log(bgclr, "ccc");
  const containerHeight = 25; // Adjust to match the text size
  const pauseDuration = 2000; // Pause duration in milliseconds
  const scrollDuration = 1000; // Scroll duration in milliseconds

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const scrollMarquee = () => {
      if (marqueeRef.current) {
        if (isResetting) return;

        // Smooth scroll
        marqueeRef.current.style.transition = `transform ${scrollDuration}ms`;
        marqueeRef.current.style.transform = `translateY(-${containerHeight}px)`;

        // After scrolling one item, move items up
        setTimeout(() => {
          marqueeRef.current?.appendChild(
            marqueeRef.current?.firstElementChild as Node
          );
          marqueeRef.current.style.transition = "none";
          marqueeRef.current.style.transform = "translateY(0)";
        }, scrollDuration);
      }
    };

    const interval = setInterval(scrollMarquee, pauseDuration + scrollDuration);

    return () => clearInterval(interval);
  }, [isResetting, pauseDuration, scrollDuration, containerHeight]);

  return (
    <div
      style={{
        height: `${containerHeight}px`,
        width: "100vw",
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
              transition: "color 0.3s, background-color 0.3s", // Smooth transition
              color: bgclr === "black" ? "white" : "black", // Set text color based on bgclr
            }}
            className="marquee-text"
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
            }; /* Change text color on hover */
            background-color: transparent; /* Keep the background transparent on hover */
          }
        `}
      </style>
    </div>
  );
};

export default VerticalMarquee;
