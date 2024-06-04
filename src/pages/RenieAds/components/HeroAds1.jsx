import React from "react";
import mobileadfull from "../../../assets/images/mobile-ad-full.webp";
import round1 from "../../../assets/images/round-1.png";
import bgLeaf from "../../../assets/images/dark-leaf.svg";
import recycle from "../../../assets/images/recycle.webp";
const HeroAds1 = () => {
  return (
    <div className="flex justify-center w-full bin-ads-bg z-[-1] relative">
      <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8 relative pt-[150px] cmd:py-[60px]">
        <div className="flex justify-center">
          <img
            className="hidden cmd:block w-[100px] h-[100px] absolute bottom-[170px] left-[100px]"
            src={round1}
            alt="Ads Hero"
          />
          <img
            className=" sm:hidden w-[70px] h-[70px] absolute bottom-[310px] right-4"
            src={round1}
            alt="Ads Hero"
          />
          <img
            className="hidden sm:block cmd:hidden w-[70px] h-[70px] absolute bottom-[160px] right-4"
            src={round1}
            alt="Ads Hero"
          />
          <img
            className="hidden cmd:block  absolute bottom-[170px] z-[-1] left-20"
            src={recycle}
            alt="Ads Hero"
          />
          <img
            className=" cmd:hidden  absolute top-[100px] z-[-1] left-[-120px]"
            src={recycle}
            alt="Ads Hero"
          />
          <img className="" src={mobileadfull} alt="Ads Hero" />
          <img
            className="w-[150px] cmd:w-[220px] absolute top-0 right-0"
            src={bgLeaf}
            alt="Ads Hero"
          />
        </div>
        <div className="text-center pt-[60px] cmd:pt-0">
          <h1 className=" text-[35px] cmd:text-[45px] leading-[45px] font-[900] ">
            <span className="gradient-text">Your Ad performance</span> <br />{" "}
            <span className="text-[#4765E6]">
              measured in environmental impact
            </span>
          </h1>
          <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8">
            AI powered ad-targeting based on data collected from waste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAds1;
