import React from "react";
import type { womenFitness } from "../../types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const womenFitnessdata: womenFitness[] = [
  {
    image: "/womenpopular/img1.webp",
    text: "BRA",
  },
  {
    image: "/womenpopular/img1.webp",
    text: "SPORTS",
  },
  {
    image: "/womenpopular/img1.webp",
    text: "LEGGINGS",
  },
  {
    image: "/womenpopular/img1.webp",
    text: "HODDIES",
  },
  {
    image: "/womenpopular/img1.webp",
    text: "SHIRTS",
  },
  {
    image: "/womenpopular/img1.webp",
    text: "SWEATPANTS",
  },
];

const WomenFitness: React.FC = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        {womenFitnessdata.map((item, index) => (
          <div className="mx-1 ">
            {" "}
            <div className=" ">
              <img src={item.image} alt="image" className="h-[30vw] w-[40vw]" />
            </div>
            <div>
              <p>{item.text}</p>
              <button> Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenFitness;
