import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({
  text,
  navigateTo,
  buttonStyle = "",
  isExternal = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isExternal) {
      // Open external link in the same tab
      const externalUrl =
        navigateTo.startsWith("http://") || navigateTo.startsWith("https://")
          ? navigateTo
          : `https://${navigateTo}`;
      window.location.href = externalUrl;
    } else {
      navigate(navigateTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${buttonStyle} block z-30 shadow-lg  border rounded-full hover:bg-gray-200 cursor-pointer  transition-all duration-300 hover:scale-105`}
    >
      {text}
    </button>
  );
};

export default Button;
