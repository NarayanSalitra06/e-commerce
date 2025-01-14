// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../common/Footer";
// import { Outlet } from "react-router-dom";
// import ButtonLogo from "../common/BottomLogo";

// const Landing: React.FC = () => {
//   return (
//     <div className="relative bg-white">
//       <Navbar />
//       <Outlet />
//       <Footer /> 
//       <ButtonLogo />
//     </div>
//   );
// };

// export default Landing;

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";
import ButtonLogo from "../common/BottomLogo";
import CircularTextSpinner from "../common/CircularTextSpinner"; // Ensure correct import path

const Landing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data load with a timeout. Replace this with actual data-fetching logic.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <CircularTextSpinner
          size={200}
          centerTextSize={24}
          speed={8}
          color="#333333"
        />
      </div>
    );
  }

  return (
    <div className="relative bg-white">
      <Navbar />
      <Outlet />
      <Footer />
      <ButtonLogo />
    </div>
  );
};

export default Landing;
