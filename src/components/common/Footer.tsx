// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="md:mb-[12vw] bg-white w-full font-inter pt-6 border-t border-[#0d0d0d33] border-opacity-20 border-solid">
//       {/* Main Container */}
//       <div className="relative w-full border border-[#0d0d0d33] border-opacity-20 border-solid">
//         <div className="grid lg:grid-cols-[75%_25%] md:flex-col  items-center w-full">
//           {/* Right Container */}
//           <div className="p-5 border-l border-[#0d0d0d33] border-opacity-20 border-solid lg:order-2 md:order-1 sm:order-1">
//             <form className="p-3 rounded-lg">
//               <h3 className="text-[2vw] md:text-[4vw] sm:text-[5vw] pb-[40px] tracking-tighter leading-none text-[#444444] font-inter font-black">
//                 Stay<br /> Connected
//               </h3>
//               <div className="mb-4">
//                 <input
//                   type="tel"
//                   placeholder="Enter Phone Number"
//                   className="w-full px-4 py-2 text-black rounded-[1.04vw] md:rounded-md border border-gray-400 mb-2"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Enter Email Address"
//                   className="w-full px-4 py-2 text-black rounded-[1.04vw] md:rounded-md border border-gray-400"
//                 />
//               </div>
//               <button className="w-full bg-black text-white mb-4 p-1 text-[15px] md:text-[12px] sm:text-[10px] rounded-[1.04vw] py-2 font-work-sans font-semibold">
//                 Subscribe
//               </button>
//               <p className="text-[10px] text-[#5b5b5b] font-work-sans mt-2">
//                 By signing up via text you agree to receive recurring automated
//                 marketing messages and shopping cart reminders at the phone
//                 number provided. Consent is not a condition of purchase. Reply
//                 STOP to unsubscribe. HELP for help. Msg frequency varies. Msg &
//                 Data rates may apply. View{" "}
//                 <a href="#" className="underline">
//                   Privacy Policy
//                 </a>{" "}
//                 &{" "}
//                 <a href="#" className="underline">
//                   ToS
//                 </a>
//               </p>
//             </form>
//           </div>

//           {/* Left Container */}
//           <div className="w-full mt-0 mb-6 pb-0 lg:mb-0 border-r border-[#0d0d0d33] border-opacity-20 border-solid lg:order-1 md:order-2 sm:order-2">
//             <div className="p-5 border-b border-[#0d0d0d33] border-opacity-20 border-solid">
//               <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col items-start gap-y-[20px]">
//                 {/* Help Section */}
//                 <div>
//                   <h3 className="font-bold mb-2 text-[#0d0d0d] text-[13px] font-inter">
//                     Help
//                   </h3>
//                   <ul className="text-[11px] text-[#0d0d0dcc] font-inter">
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Help Center
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Careers
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Contact Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Shipping Info
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Track My Order
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Returns & Exchanges
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* More Section */}
//                 <div>
//                   <h3 className="font-bold mb-2 text-[#0d0d0d] text-[13px] font-inter">
//                     More
//                   </h3>
//                   <ul className="text-[11px] text-[#0d0d0dcc] font-inter">
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Share The Look
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         About Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Alphaland
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline block mb-2">
//                         Summer Shredding
//                       </a>
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Address Section */}
//                 <div>
//                   <h3 className="font-bold mb-2 text-[#0d0d0d] text-[13px] font-inter">
//                     Address
//                   </h3>
//                   <p className="text-[11px] text-[#0d0d0dcc] font-inter">
//                     <a href="#">
//                       13927 South Gessner Road, Missouri City Texas 77489,
//                       United States
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Footer Links */}
//             <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col sm:items-start justify-between p-[20px] gap-[15px]">
//               {/* Left Footer */}
//               <div className="flex flex-col items-start justify-start  border-b border-[#0d0d0d33] border-opacity-20 border-solid">
//                <h3 className="font-bold text-[13px] text-[#0d0d0dcc] font-inter">
//                   Premium Workout Clothes & Athleisure
//                 </h3>
//                 <p className="text-[12px] text-[#0d0d0dcc] pt-1 font-inter">
//                   Experience the next level of comfort, style, and functionality
//                   with our premium athleisure collections designed for those who
//                   demand the best. Shop now!
//                 </p>
//               </div>

//               {/* Right Footer */}
//               <div className="pt-1 md:pr-[10px]">
               

//                 <p className="text-[9px] text-[#0d0d0dcc] ml-20 text-center font-inter md:items-center md:justify-center">
//                   Privacy Policy • Terms of Service • Sitemap • Accessibility •
//                   Do not sell or share my personal information
//                 </p>
//                 <p className="text-[10px] font-semibold text-[#0d0d0dcc] text-center font-inter md:items-center md:justify-center">
//                   © 2024 • Alphalete Athletics LLC • All Rights Reserved
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="md:mb-[12vw] bg-white w-full font-inter pt-6 border-t border-[#0d0d0d33] border-opacity-20 border-solid">
      {/* Main Container */}
      <div className="relative w-full border border-[#0d0d0d33] border-opacity-20 border-solid">
        <div className="grid lg:grid-cols-[75%_25%] md:flex-col items-center w-full">
          {/* Right Container */}
          <div className="p-5 border-l border-[#0d0d0d33] border-opacity-20 border-solid lg:order-2 md:order-1 sm:order-1">
            <form className="p-3 rounded-lg">
              <h3 className="text-[2vw] md:text-[4vw] sm:text-[5vw] pb-[40px] tracking-tighter leading-none text-[#444444] font-inter font-black">
                Stay<br /> Connected
              </h3>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-2 text-black rounded-[1.04vw] md:rounded-md border border-gray-400 mb-2"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-2 text-black rounded-[1.04vw] md:rounded-md border border-gray-400"
                />
              </div>
              <button className="w-full bg-black text-white mb-4 p-1 text-[15px] md:text-[12px] sm:text-[10px] rounded-[1.04vw] py-2 font-work-sans font-semibold">
                Subscribe
              </button>
              <p className="text-[10px] text-[#5b5b5b] font-work-sans mt-2">
                By signing up via text you agree to receive recurring automated
                marketing messages and shopping cart reminders at the phone
                number provided. Consent is not a condition of purchase. Reply
                STOP to unsubscribe. HELP for help. Msg frequency varies. Msg &
                Data rates may apply. View{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                &{" "}
                <a href="#" className="underline">
                  ToS
                </a>
              </p>
            </form>
          </div>

          {/* Left Container */}
          <div className="w-full mt-0 mb-6 pb-0 lg:mb-0 border-r border-[#0d0d0d33] border-opacity-20 border-solid lg:order-1 md:order-2 sm:order-2">
            <div className="p-5 lg:pb-10 border-b lg:border-b-12 border-[#0d0d0d33] border-opacity-20 border-solid">
              <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col items-start gap-y-[20px]">
                {/* Help Section */}
                <div>
                  <h3 className="font-bold mb-2 lg:mt-0 lg:mb-6 text-[#0d0d0d] text-[13px] font-inter">
                    Help
                  </h3>
                  <ul className="text-[11px] text-[#0d0d0dcc] font-inter">
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Shipping Info
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Track My Order
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Returns & Exchanges
                      </a>
                    </li>
                  </ul>
                </div>

                {/* More Section */}
                <div>
                  <h3 className="font-bold mb-2 lg:mt-0 lg:mb-6 text-[#0d0d0d] text-[13px] font-inter">
                    More
                  </h3>
                  <ul className="text-[11px] text-[#0d0d0dcc] font-inter">
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Share The Look
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Alphaland
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline block mb-2">
                        Summer Shredding
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Address Section */}
                <div>
                  <h3 className="font-bold mb-2 lg:mt-0 lg:mb-6 text-[#0d0d0d] text-[13px] font-inter">
                    Address
                  </h3>
                  <p className="text-[11px] text-[#0d0d0dcc] font-inter">
                    <a href="#">
                      13927 South Gessner Road, Missouri City Texas 77489,
                      United States
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col sm:items-start justify-between p-[20px] gap-[15px]">
              {/* Left Footer */}
              <div className="flex flex-col items-start justify-start border-r border-[#0d0d0d33] border-opacity-20 border-solid">
                <h3 className="font-bold text-[13px] text-[#0d0d0dcc] font-inter">
                  Premium Workout Clothes & Athleisure
                </h3>
                <p className="text-[12px] text-[#0d0d0dcc] pt-1 font-inter">
                  Experience the next level of comfort, style, and functionality
                  with our premium athleisure collections designed for those who
                  demand the best. Shop now!
                </p>
              </div>

              {/* Right Footer */}
              <div className="pt-1 md:pr-[10px]">
                <p className="text-[9px] text-[#0d0d0dcc] text-center font-inter md:items-center md:justify-center">
                  Privacy Policy • Terms of Service • Sitemap • Accessibility •
                  Do not sell or share my personal information
                </p>
                <p className="text-[10px] font-semibold text-[#0d0d0dcc] text-center font-inter md:items-center md:justify-center">
                  © 2024 • Alphalete Athletics LLC • All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



