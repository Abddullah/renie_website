import React from "react";
import adheight from "../../../assets/images/ad-height.webp";
import reniebg from "../../../assets/images/renie-bg.png";
import binleafImg from "../../../assets/images/bg-leaf.webp";
import Connect from "../../../components/Connect";
const HeroAds5 = () => {
  return (
    <div>
      <div
        className=" flex justify-around items-center py-[40px] relative z-[-1]"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8 flex flex-col cmd:flex-row items-center gap-[40px] cmd:gap-0  relative">
          <img
            className="hidden cmd:block w-[300px] absolute top-0 right-0"
            src={binleafImg}
            alt="Ads Hero"
          />
          <img
            className=" cmd:hidden w-[300px] absolute top-[-100px] right-[-60px] z-[-1]"
            src={binleafImg}
            alt="Ads Hero"
          />
          <div className="w-[80vw] cmd:w-[48%]">
            <img
              className=" relative z-0 top-0 le"
              src={adheight}
              alt="AdMap"
            />
          </div>

          <div className="flex gap-2 w-[80vw] cmd:w-[48%]">
            <div className=" text-white">
              <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] mb-4 text-center cmd:text-left">
                Your ad is the first impression
              </h2>
              <span className="text-[18px] leading-[27px] font-[300] block text-center cmd:text-left">
                100% of the screen is covered by your advertisement. Our
                interface button has a subtle presence in your brands color.
              </span>
              <div className="hidden cmd:block mt-4">
                {/* <button className="heroButton  ">
                  Connect with an expert
                </button> */}
                <Connect />
              </div>
            </div>
            {/* <div className="">
            <img className="w-[100px] h-[100px]" src={reniebg} alt="Ads Hero" />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAds5;
