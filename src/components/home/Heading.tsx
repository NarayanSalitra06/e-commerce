import React from "react";

interface HeadingProps {
  upperText: string;
  lowerText: string;
}

const Heading: React.FC<HeadingProps> = ({ upperText, lowerText }) => {
  return (
    <div className="leading-tight">
      <div className="text-[15px] font-normal font-inter">{upperText}</div>
      <div className="text-[20px] font-bold font-syntos">{lowerText}</div>
    </div>
  );
};

export default Heading;
