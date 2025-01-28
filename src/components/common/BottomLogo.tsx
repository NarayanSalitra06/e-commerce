import React from "react";

const ButtonLogo: React.FC = () => {
  return (
    <div>
      <div className="bg-white fixed bottom-0 z-[-1] items-center justify-center m-4 p-2 w-full">
        {/* Image container */}
        <div className="flex">
          {/* Image for Medium and Large Screens */}
          <img
            className="hidden md:block w-full"
            src="https://ik.imagekit.io/7phi74j9v/ShopImage/FooterImg/footer.jpg?updatedAt=1736870224073"
            alt="footer image"
          />

          {/* Image for Small Screens */}
          <img
            className="md:hidden block w-full object-cover"
            src="https://ik.imagekit.io/7phi74j9v/ShopImage/FooterImg/footerMob.png?updatedAt=1736947251943"
            alt="footer mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonLogo;
