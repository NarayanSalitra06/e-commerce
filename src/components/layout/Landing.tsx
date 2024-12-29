import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Landing;
