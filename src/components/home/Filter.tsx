// import { AiOutlinePlus } from "react-icons/ai";
// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import { filterArr } from "../../types/types";

// const Filter: React.FC<{ data: filterArr[] }> = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

//   const handleMouseEnter1 = (index: number) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave1 = () => {
//     setHoveredIndex(null);
//   };

//   const handleMouseEnter2 = (index: number) => {
//     setHoveredIndex2(index);
//   };

//   const handleMouseLeave2 = () => {
//     setHoveredIndex2(null);
//   };

//   // Split data into two parts
//   const firstHalf = data.slice(0, Math.floor(data.length / 2));
//   const secondHalf = data.slice(Math.floor(data.length / 2));

//   return (
//     <div className="m-[1vw]">
//       {/* First Slider */}
//       <Swiper
//         spaceBetween={15}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           500: {
//             slidesPerView: 4,
//           },
//           0: {
//             slidesPerView: 3.5,
//           },
//           950: {
//             slidesPerView: 5,
//           },
//           1200: {
//             slidesPerView: 7,
//           },
//         }}
//         className="mySwiper "
//       >
//         {firstHalf.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="border relative border-slate-200 rounded-[1.04vw] overflow-hidden my-[0.5vw]"
//               onMouseEnter={() => handleMouseEnter1(index)}
//               onMouseLeave={handleMouseLeave1}
//             >
//               {}
//               <img
//                 src={hoveredIndex === index ? item.img2 : item.img1}
//                 className="h-full w-full object-cover"
//                 alt="Product"
//               />
//               <AiOutlinePlus className="absolute right-[1vw] bottom-[1vw] text-slate-200 h-[2vw] w-[2vw]" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Second Slider */}
//       <Swiper
//         spaceBetween={15}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           500: {
//             slidesPerView: 4,
//           },
//           0: {
//             slidesPerView: 3.5,
//           },
//           950: {
//             slidesPerView: 5,
//           },
//           1200: {
//             slidesPerView: 7,
//           },
//         }}
//         className="mySwiper"
//       >
//         {secondHalf.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="border relative border-slate-200 rounded-[1.04vw] overflow-hidden  my-[0.5vw]"
//               onMouseEnter={() => handleMouseEnter2(index)}
//               onMouseLeave={handleMouseLeave2}
//             >
//               <img
//                 src={hoveredIndex2 === index ? item.img2 : item.img1}
//                 className="h-full w-full object-cover"
//                 alt="Product"
//               />
//               <AiOutlinePlus className="absolute right-[1vw] bottom-[1vw] text-slate-200 h-[2vw] w-[2vw]" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Filter;

import { AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { filterArr } from "../../types/types";

const Filter: React.FC<{ data: filterArr[] }> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnter2 = (index: number) => {
    setHoveredIndex2(index);
  };

  const handleMouseLeave2 = () => {
    setHoveredIndex2(null);
  };
  // Group data into pairs
  const pairedNumbers = [];
  for (let i = 0; i < data.length; i += 2) {
    pairedNumbers.push([data[i], data[i + 1]]);
  }

  return (
    <div className="m-[1vw]">
      <Swiper
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: { slidesPerView: 4 },
          0: { slidesPerView: 3.5 },
          950: { slidesPerView: 5 },
          1200: { slidesPerView: 7 },
        }}
        className="mySwiper"
      >
        {pairedNumbers.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-2">
              {/* First Image */}
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="border relative border-slate-200 rounded-[1.04vw] overflow-hidden my-[0.5vw]"
              >
                <img
                  src={hoveredIndex === index ? item[0]?.img2 : item[0]?.img1}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
                <AiOutlinePlus className="absolute right-[1vw] bottom-[1vw] text-slate-200 h-[3vw] w-[3vw] my-[0.5vw]" />
              </div>
              {/* Second Image */}
              <div
                onMouseEnter={() => handleMouseEnter2(index)}
                onMouseLeave={handleMouseLeave2}
                className="border relative border-slate-200 rounded-[1.04vw] overflow-hidden"
              >
                <img
                  src={hoveredIndex2 === index ? item[1]?.img2 : item[1]?.img1}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
                <AiOutlinePlus className="absolute right-[1.5vw] bottom-[1.5vw] text-slate-200 h-[3vw] w-[3vw]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Filter;
