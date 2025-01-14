import React from "react";
import "../../index.css"; 
import { CircularTextSpinnerProps } from "../../types/types";



const CircularTextSpinner: React.FC<CircularTextSpinnerProps> = ({
  innerText = "HOUSTON, TEXAS, USA • ESTABLISHED 2015 •HOUSTON, TEXAS, USA • ",
  outerText = "LEARN MORE • DREAM MORE • BE MORE •LEARN MORE • DREAM MORE • ",
  centerText = "ALPHALETE",
  size = 200,
  color = "#000000",
  speed = 8,
  centerTextSize = 20,
}) => {
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {/* Inner rotating circle */}
      <svg
        className="absolute inset-0 animate-spin"
        style={{
          animationDuration: `${speed}s`,
        }}
        viewBox="0 0 100 100"
        width={size}
        height={size}
      >
        <defs>
          <path
            id="innerCircle"
            d="M 50,50 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
            fill="none"
          />
        </defs>

        <text
          fill={color}
          fontSize="4"
          letterSpacing="1"
          fontFamily="system-ui"
          className="uppercase"
        >
          <textPath href="#innerCircle" startOffset="0%">
            {innerText}
          </textPath>
        </text>
      </svg>

      {/* Outer rotating circle (opposite direction) */}
      <svg
        className="absolute inset-0 animate-spin-reverse"
        style={{
          animationDuration: `${speed}s`,
        }}
        viewBox="0 0 100 100"
        width={size}
        height={size}
      >
        <defs>
          <path
            id="outerCircle"
            d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="none"
          />
        </defs>

        <text
          fill={color}
          fontSize="4"
          letterSpacing="1"
          fontFamily="system-ui"
          className="uppercase"
        >
          <textPath href="#outerCircle" startOffset="0%">
            {outerText}
          </textPath>
        </text>
      </svg>

      {/* Center text overlapping the circles */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span
          className="font-bold uppercase tracking-widest text-center z-10"
          style={{
            color: color,
            fontSize: `${centerTextSize}px`,
          }}
        >
          {centerText}
        </span>
      </div>
    </div>
  );
};

export default CircularTextSpinner;
