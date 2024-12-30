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
      const externalUrl = navigateTo.startsWith("http://") || navigateTo.startsWith("https://")
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
      className={`${buttonStyle} shadow-lg  border rounded-2xl hover:bg-gray-200 cursor-pointer font-bold`}
    >
      {text}
    </button>
  );
};

export default Button;
