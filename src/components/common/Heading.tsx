import React from "react";
import { HeadingProps } from "../../types/types";

const Heading: React.FC<HeadingProps> = ({
  upperText,
  lowerText,
  upperStyle = "",
  lowerStyle = "",
}) => {
  return (
    <div className="">
      {/* Upper Text */}
      <div className={upperStyle}>{upperText}</div>

      {/* Lower Text */}
      <div className={lowerStyle}>{lowerText}</div>
    </div>
  );
};

export default Heading;
