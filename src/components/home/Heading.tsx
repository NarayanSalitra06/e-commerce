// import React from "react";
// import { HeadingProps } from "../../types/types";


// const Heading: React.FC<HeadingProps> = ({ upperText,uppertextSize="",lowertextSize="",lowerText }) => {
//   return (
//     <div className="leading-tight">
//       <div className={`  font-normal font-inter ${uppertextSize}`}>{upperText}</div>
//       <div className={`font-bold font-syntos ${lowertextSize}`}>{lowerText}</div>
//     </div>
//   );
// };

// export default Heading;


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
