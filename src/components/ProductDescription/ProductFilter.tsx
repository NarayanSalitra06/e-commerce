// import React from 'react'
// import ProductSlider from './ProductSlider'
// import { menFitnessdata } from '../../data/Header'

// const ProductFilter:React.FC = () => {
//   return (
//     <div className='h-full w-full'>
//         <ProductSlider data={menFitnessdata}/>
//     </div>
//   )
// }
// export default ProductFilter

// import React, { useState } from "react";
// import ProductSlider from "./ProductSlider";
// import { menFitnessdata } from "../../data/Header";

// const ProductFilter: React.FC = () => {
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [bag, setBag] = useState<string[]>([]);
//   const [toggleSections, setToggleSections] = useState<{ [key: string]: boolean }>({
//     section1: false,
//     section2: false,
//     section3: false,
//   });

//   const toggleSection = (section: string) => {
//     setToggleSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   const handleAddToBag = () => {
//     if (selectedColor && selectedSize) {
//       setBag((prev) => [...prev, `${selectedColor}-${selectedSize}`]);
//       alert("Item added to bag!");
//     } else {
//       alert("Please select color and size!");
//     }
//   };

//   return (
//     <div className="h-full w-full flex bg-white">
//       {/* Product Slider */}
//       <div className="w-full">
//         <ProductSlider data={menFitnessdata} />
//       </div>

//       {/* Filter Section */}
//       <div className="w-1/3 p-4 border-l h-6 bg-gray-100 ">
//         <h2 className="text-2xl font-bold">AMPLIFY GEMINI BRA</h2>
//         <p className="text-lg text-gray-600">Berry</p>
//         <p className="text-lg font-semibold">£36</p>

//         {/* Color Options */}
//         <h3 className="mt-4 font-bold">Available Colors</h3>
//         <div className="flex gap-2 mt-2">
//           {["Berry", "Black", "Blue"].map((color) => (
//             <button
//               key={color}
//               className={`p-2 rounded-full border ${
//                 selectedColor === color ? "border-black" : "border-gray-300"
//               }`}
//               onClick={() => setSelectedColor(color)}
//             >
//               {color}
//             </button>
//           ))}
//         </div>

//         {/* Size Options */}
//         <h3 className="mt-4 font-bold">Size</h3>
//         <div className="flex gap-2 mt-2">
//           {["XS", "S", "M", "L", "XL"].map((size) => (
//             <button
//               key={size}
//               className={`px-4 py-2 rounded ${
//                 selectedSize === size ? "bg-black text-white" : "bg-gray-200"
//               }`}
//               onClick={() => setSelectedSize(size)}
//             >
//               {size}
//             </button>
//           ))}
//         </div>

//         {/* Add to Bag */}
//         <button
//           className="mt-6 w-full bg-black text-white py-2 rounded"
//           onClick={handleAddToBag}
//         >
//           Add to Bag
//         </button>

//         {/* Toggleable Sections */}
//         {["Fit Suggestion", "Materials & Washing", "Description"].map(
//           (section, index) => (
//             <div key={index} className="mt-6">
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleSection(`section${index + 1}`)}
//               >
//                 <h3 className="font-bold">{section}</h3>
//                 <span>
//                   {toggleSections[`section${index + 1}`] ? "x" : "+"}
//                 </span>
//               </div>
//               {toggleSections[`section${index + 1}`] && (
//                 <ul className="mt-2 list-disc pl-4">
//                   <li>Lorem ipsum dolor sit amet.</li>
//                   <li>Consectetur adipiscing elit.</li>
//                   <li>Sed do eiusmod tempor incididunt.</li>
//                   <li>Ut labore et dolore magna aliqua.</li>
//                   <li>Ut enim ad minim veniam.</li>
//                 </ul>
//               )}
//             </div>
//           )
//         )}

//         {/* Additional Paragraph */}
//         <div className="mt-6">
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             commodo ligula eget dolor.
//           </p>
//           <a
//             href="https://example.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 underline mt-2 inline-block"
//           >
//             Visit more details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductFilter;

import React, { useState } from "react";
import ProductSlider from "./ProductSlider";
import { filterImg } from "../../data/ProductFilter";

const ProductFilter: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [bag, setBag] = useState<string[]>([]);
  const [toggleSections, setToggleSections] = useState<{
    [key: string]: boolean;
  }>({
    section1: false,
    section2: false,
    section3: false,
  });

  const uniqueColors = filterImg.map((item) => ({
    color: item.color,
    image: item.image,
  }));

  const toggleSection = (section: string) => {
    setToggleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAddToBag = () => {
    if (selectedColor && selectedSize) {
      setBag((prev) => [...prev, `${selectedColor}-${selectedSize}`]);
      alert("Item added to bag!");
    } else {
      alert("Please select color and size!");
    }
  };

  return (
    <div className="h-100vw w-full flex relative  bg-white">
      {/* Product Slider */}
      <div className="w-full">
        <ProductSlider data={filterImg} />
      </div>

      {/* Filter Section */}

      <div
        className=" w-1/4 bg-white shadow-lg p-6 absolute right-10 rounded-lg top-36 border-[#0d0d0d33] hide-scrollbar border border-solid border-opacity-60  items-start md:h-[80vh] z-20 overflow-y-auto  "
      >
        <h2 className="text-1xl font-bold">AMPLIFY GEMINI BRA</h2>

        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-bold mt-1">Berry</p>
          <p className="text-lg font-bold mt-1">£36</p>
        </div>

        <p className="text-lg text-gray-600 mt-1">
          Women's Seamless Bra-Removable Straps
        </p>

        <div className="border font-bold rounded-md uppercase mt-2">
          <p className="mr-1 ml-1">Low Impact</p>
        </div>

        <div className="mt-2 border border-[#0d0d0d33] b-2 h-0 w-full border-opacity-20 border-solid "></div>

        {/* Color Options */}
        <div className="mt-4">
          {/* Heading with count and selected color */}
          <h3 className="mt-1 font-bold flex justify-between items-center">
            Available Colors ({uniqueColors.length})
            {selectedColor && (
              <span className="text-gray-600 font-medium">
                Selected Color: {selectedColor}
              </span>
            )}
          </h3>

          {/* Image cards for colors */}
          <div className="border p-4 rounded-lg">
            <div className="flex gap-1 mt-1 flex-wrap">
              {uniqueColors.map(({ color, image }, index) => (
                <div
                  key={`${color}-${index}`}
                  className={`cursor-pointer rounded-md border ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  } bg-gray-400`}
                  onClick={() => setSelectedColor(color)}
                >
                  <div className="bg-gray-400">
                    <img
                      src={image}
                      alt={color}
                      className={`rounded-lg w-full h-20 object-cover bg-gray-500${
                        selectedColor === color ? "border-3 border-black" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Options */}
        <h3 className="mt-4 font-bold">Size</h3>
        <div className="flex gap-2 mt-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`px-4 py-2 rounded ${
                selectedSize === size ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to Bag */}
        <button
          className="mt-6 w-full bg-black text-white py-2 rounded"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>

        {/* Toggleable Sections */}
        {["Fit Suggestion", "Materials & Washing", "Description"].map(
          (section, index) => (
            <div key={index} className="mt-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(`section${index + 1}`)}
              >
                <h3 className="font-bold">{section}</h3>
                <span>{toggleSections[`section${index + 1}`] ? "x" : "+"}</span>
              </div>
              {toggleSections[`section${index + 1}`] && (
                <ul className="mt-2 list-disc pl-4">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Consectetur adipiscing elit.</li>
                  <li>Sed do eiusmod tempor incididunt.</li>
                  <li>Ut labore et dolore magna aliqua.</li>
                  <li>Ut enim ad minim veniam.</li>
                </ul>
              )}
            </div>
          )
        )}

        {/* Additional Rotating Paragraph */}
        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <p className="animate-spin-slow">Lorem ipsum dolor sit amet.</p>
            <p className="animate-spin-slow">Consectetur adipiscing elit.</p>
          </div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-2 inline-block"
          >
            Visit More Details
          </a>
        </div>
      </div>

      <Pra
    </div>
  );
};

export default ProductFilter;
