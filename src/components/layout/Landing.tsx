import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";
import ButtonLogo from "../common/BottomLogo";

const Landing: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      <ButtonLogo />
    </div>
  );
};

export default Landing;
