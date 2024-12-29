import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="font-inter p-6 border-t border-[#0d0d0d33] border-opacity-20 border-solid">
      {/* Main Container */}
      <div className="container mx-auto border border-[#0d0d0d33] border-opacity-20 border-solid">
        <div className="grid md:grid-cols-[75%_25%] grid-cols-2 items-center w-full">
          {/* Left Container */}
          <div className="w-full mb-6 pb-0 lg:mb-0 border-r border-[#0d0d0d33] border-opacity-20 border-solid">
            <div className="p-5 border-b border-[#0d0d0d33] border-opacity-20 border-solid">
              <div className="flex items-start justify-start gap-x-[20px]">
                {/* Help Section */}
                <div className="md:min-h-[15vw]">
                  <div className="font-bold mb-2 text-[#0d0d0d] text-[13px] font-inter">
                    Help
                  </div>
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
                  <h3 className="font-bold mb-2 text-[#0d0d0d] text-[13px] font-inter">
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
                  <h3 className="font-bold mb-2 text-[#0d0d0d] text-[13px] font-inter">
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
            <div className="flex justify-between md:min-h-[6.5vw] border-[#0d0d0d33] border-opacity-20 border-solid">
              <div className="w-1/2 border-r p-[20px] gap-[15px] border-[#0d0d0d33] flex flex-col items-center justify-center border-opacity-20 border-solid">
                <p className="text-[9px] text-[#0d0d0dcc] text-center font-inter">
                  Privacy Policy • Terms of Service • Sitemap • Accessibility •
                  Do not sell or share my personal information
                </p>
                <p className="text-[10px] font-semibold text-[#0d0d0dcc] text-center font-inter">
                  © 2024 • Alphalete Athletics LLC • All Rights Reserved
                </p>
              </div>

              <div className="w-1/2 p-4 flex flex-col items-start justify-start">
                <h3 className="font-bold text-[13px] text-[#0d0d0dcc] font-inter">
                  Premium Workout Clothes & Athleisure
                </h3>
                <p className="text-[12px] text-[#0d0d0dcc] pt-1 font-inter">
                  Experience the next level of comfort, style, and functionality
                  with our premium athleisure collections designed for those who
                  demand the best. Shop now!
                </p>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="p-5 border-l border-[#0d0d0d33] border-opacity-20 border-solid">
            <form className="p-3 rounded-lg">
              <h3 className="text-[4vw] tracking-tighter leading-none text-[#444444] font-inter font-black">
                Stay Connected
              </h3>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-2 text-black rounded-[1.04vw] border border-gray-400 mb-2"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-2 text-black rounded-[1.04vw] border border-gray-400"
                />
              </div>
              <button className="w-full bg-black text-white mb-4 p-1 text-[15px] rounded-[1.04vw] py-2 font-work-sans font-semibold">
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
                .
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="bg-white text-center border-t border-[#0d0d0d33] border-opacity-20 border-solid">
          <div className="text-[15vw] tracking-tight font-work-sans font-bold text-black line-clamp-none leading-none">
            ALPHALETE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
