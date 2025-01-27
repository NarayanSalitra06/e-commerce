import React from "react";

const ButtonLogo: React.FC = () => {
  return (
    <div>
      <div className="bg-white fixed bottom-0 z-[-1] items-center justify-center m-4 p-2 w-full">
        {/* Image container */}
        <div className="flex lg:block">
          {/* Single Image for Large Screens */}
          <img
            className="hidden lg:block w-full"
            src="https://ik.imagekit.io/7phi74j9v/ShopImage/FooterImg/footer.jpg?updatedAt=1736870224073"
            alt="footer image"
          />
          
          {/* Full-Width Image for Medium and Small Screens */}
          <img
            className="block lg:hidden w-full object-cover"
            src="https://ik.imagekit.io/7phi74j9v/ShopImage/FooterImg/footerMob.png?updatedAt=1736947251943"
            alt="footer mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonLogo;
