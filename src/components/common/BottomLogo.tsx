import React from "react";

const ButtonLogo: React.FC = () => {
  return (
    <div>
      <div className=" flex fixed  bottom-0 md:z-[-1] z-[-1]  items-center justify-center m-4 p-2 w-full">
        {/* Image container */}
        <div className="flex lg:block">
          {/* Single Image for Large Screens */}
          <img
            className="hidden lg:block w-full"
            src="/public/home/footer.jpg"
            alt="footer image"
          />

          {/* Full-Width Image for Medium and Small Screens */}
          <img
            className="block lg:hidden w-full object-cover"
            src="/public/home/footerMob.png"
            alt="footer mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonLogo;
