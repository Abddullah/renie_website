import React from "react";
import filter from "../../../assets/images/filter.webp";
import Connect from "../../../components/Connect";

const HeroAds3 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8 min-h-[70vh] flex flex-col cmd:flex-row justify-center items-center py-[80px] gap-8 cmd:gap-4">
        <div className="w-[40vw] cmd:w-[48%]  flex justify-center">
          <img className="" src={filter} alt="image hub" />
        </div>

        <div className="w-[80vw] cmd:w-[48%] flex flex-col items-center cmd:items-start">
          <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] gradient-text text-center cmd:text-left">
            The power of data extraction out of waste
          </h2>

          <p className="text-[18px] leading-[27px] font-[400] mt-4 cmd:mb-8 text-center cmd:text-left">
            Ads That Matter’s AI algorithm continuously optimizes itself powered
            by big data that is being fed by 1.000’s of Renie bins that are
            placed in different types of areas, reaching various types of
            consumers from all walks of life.
          </p>

          {/* <button className="heroButton text-[#fff] w-fit hidden cmd:block">
            Connect with an expert
          </button> */}
          <div className="hidden cmd:block">
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAds3;
