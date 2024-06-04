import React from "react";
import marketing from "../../../assets/images/marketing.webp";
import { Circle } from "../../RenieBin/components/HeroBin";
import circleTwo from "../../../assets/images/circle-1.svg";
const HeroAds6 = () => {
  return (
    <div className="flex justify-center py-[100px] cmd:py-[200px]">
      <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8  flex flex-col-reverse cmd:flex-row justify-center items-center gap-8 ">
        <div className="w-[80vw] cmd:w-[56%]">
          <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] gradient-text text-center cmd:text-left">
            <span className=" hidden cmd:inline">
              Your Ad impressions mean measurable eco reductions that can be
              claimed
            </span>
            <span className="cmd:hidden ">
              Your brand is seen from the moment a person connects to the Renie
              Bin
            </span>
          </h2>

          <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8 text-center cmd:text-left">
            Your marketing spend now has Sustainability attached to it, not
            greenwashing, but verifiable and undeniable waste diverted from
            landfills and CO2 reductions that you can see live on the your Ads
            That Matter account.
          </p>
        </div>

        <div className="w-[80vw] cmd:w-[40%] relative">
          <div className="cmd:hidden absolute top-[-60px] right-[20px]  z-[-1]">
            <Circle />
          </div>

          <div className="hidden cmd:block absolute bottom-[-80px] right-[-20px]  z-[-1]">
            <img src={circleTwo} />{" "}
          </div>
          <img className="" src={marketing} alt="image hub" />
        </div>
      </div>
    </div>
  );
};

export default HeroAds6;
