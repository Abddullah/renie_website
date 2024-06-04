import React from "react";
import { Link } from "react-router-dom";

const HeroAds2 = () => {
  return (
    <div className="w-full">
      <div
        className="min-h-[256px] text-white flex flex-col justify-center items-center py-[80px] cmd:py-0"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <span className=" text-[18px] leading-[27px] font-[400] max-w-[1440px] w-11/12 md:w-10/12  lg:px-8 text-center cmd:text-left">
          Our AI-driven advertising platform, fueled by real-time data from
          thousands of Renie Bins leverages user interactions and waste metrics
          to deliver impactful, relevant ads that resonate. Drive meaningful
          engagement, powered by the eco-conscious actions of our community.
        </span>
        <div className=" justify-start max-w-[1440px] w-11/12 md:w-10/12  lg:px-8 mt-5 hidden cmd:flex">
          <Link className="text-[18px] leading-[27px] font-[400] ">
            Contact us &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroAds2;
