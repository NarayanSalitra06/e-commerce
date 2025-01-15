import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mb-[12vw]  w-full  font-inter pt-0 border-t border-[#0d0d0d33] border-opacity-20  border-solid relative">
      {/* Main Container */}
      <div className="relative w-full border border-[#0d0d0d33] border-opacity-20 border-solid">
        <div className="flex flex-col lg:grid lg:grid-cols-[70%_30%] items-start w-full">
          {/* Right Container - Moved up for mobile */}
          <div className="w-full lg:border-l border-[#0d0d0d33] border-opacity-20 border-solid order-1 lg:order-2">
            <form className="p-8 lg:max-w-[300px]">
              <h3 className="lg:text-[42px] md:text-[4vw] sm:text-[5vw] pb-8 tracking-tighter leading-[0.9] text-[#444444] font-inter font-black">
                Stay
                <br />
                Connected
              </h3>
              <div className="space-y-3">
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-300"
                />
              </div>
              <button className="w-full bg-[#2d2d2d] text-white mt-3 mb-4 py-3 rounded-lg font-medium">
                Subscribe
              </button>
              <p className="text-[10px] text-[#5b5b5b] font-work-sans">
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
          <div className="w-full lg:border-r border-[#0d0d0d33] border-opacity-20 border-solid order-2 lg:order-1">
            {/* Links Container */}
            <div className="p-8 lg:pb-40 border-b border-[#0d0d0d33] border-opacity-20 border-solid">
              <div className="lg:flex lg:space-x-32">
                {/* Help Section */}
                <div>
                  <h3 className="font-bold mb-6 text-[#0d0d0d] text-[13px] font-inter">
                    Help
                  </h3>
                  <ul className="text-[11px] text-[#0d0d0dcc] space-y-2 font-inter">
                    <li>
                      <a href="#" className="hover:underline">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Returns & Exchanges
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Brexit Info
                      </a>
                    </li>
                  </ul>
                </div>

                {/* More Section */}
                <div>
                  <h3 className="font-bold mb-6 text-[#0d0d0d] text-[13px] font-inter">
                    More
                  </h3>
                  <ul className="text-[11px] text-[#0d0d0dcc] space-y-2 font-inter">
                    <li>
                      <a href="#" className="hover:underline">
                        Share The Look
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Alphaland
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Summer Shredding
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Address Section */}
                <div>
                  <h3 className="font-bold mb-6 text-[#0d0d0d] text-[13px] font-inter">
                    Address
                  </h3>
                  <p className="text-[11px] text-[#0d0d0dcc] max-w-[200px] font-inter">
                    13927 South Gessner Road, Missouri City Texas 77489, United
                    States
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            {/* <div className="p-8 lg:flex lg:justify-between items-start lg:border-r border-[#0d0d0d33] border-opacity-20 border-solid">
            <div className="lg:text-left mt-4 lg:mt-0  ">
                <p className="text-[9px] text-[#0d0d0dcc] mb-1 font-inter">
                  Privacy Policy • Terms of Service • Sitemap • Accessibility • Do not sell or share my personal information
                </p>
                <p className="text-[10px] text-center font-semibold text-[#0d0d0dcc] font-inter">
                  © 2024 • Alphalete Athletics LLC • All Rights Reserved
                </p>
              </div>
             
              <div className="lg:max-w-[50%] ml-4">
                <h3 className="font-bold text-[13px]  text-[#0d0d0dcc] font-inter">
                  Premium Workout Clothes & Athleisure
                </h3>
                <p className="text-[12px] text-[#0d0d0dcc] mt-2 font-inter">
                  Experience the next level of comfort, style, and functionality with our premium athleisure collections designed for those who demand the best. Shop now!
                </p>
              </div>
              
            </div> */}

            <div className="p-8 lg:flex lg:justify-between items-start relative">
              <div className="lg:text-left mt-4 lg:mt-0 lg:flex-1 lg:mr-2">
                <p className="text-[9px] text-[#0d0d0dcc] mb-1 font-inter">
                  Privacy Policy • Terms of Service • Sitemap • Accessibility •
                  Do not sell or share my personal information
                </p>
                <p className="text-[10px] text-center font-semibold text-[#0d0d0dcc] font-inter">
                  © 2024 • Alphalete Athletics LLC • All Rights Reserved
                </p>
              </div>

              {/* Divider in the center */}
              <div className="hidden lg:block  h-full w-[1px] bg-[#0d0d0d33] absolute left-1/2 top-0 transform -translate-x-1/2"></div>

              <div className="lg:max-w-[50%] lg:flex-1 lg:pl-8">
                <h3 className="font-bold text-[13px] text-[#0d0d0dcc] font-inter">
                  Premium Workout Clothes & Athleisure
                </h3>
                <p className="text-[12px] text-[#0d0d0dcc] mt-2 font-inter">
                  Experience the next level of comfort, style, and functionality
                  with our premium athleisure collections designed for those who
                  demand the best. Shop now!
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
