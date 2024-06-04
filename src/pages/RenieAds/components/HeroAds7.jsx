import React from "react";
import adhand from "../../../assets/images/ad-hand.webp";
import Connect from "../../../components/Connect";

const HeroAds7 = () => {
  return (
    <div className="flex justify-end relative">
      <div className="absolute hidden cmd:block top-[-225px] left-0">
        <img className=" " src={adhand} alt="AdMap" />
      </div>
      <div className="absolute cmd:hidden top-[-110px] left-0">
        <img className=" h-[550px] " src={adhand} alt="AdMap" />
      </div>
      <div
        className="py-[40px] w-full cmd:w-[75%] pt-[420px]  cmd:pt-[40px]"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <div className="flex justify-center">
          <div className=" text-white w-[600px] p-4">
            <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] mb-4 text-center cmd:text-left">
              Ads for every stage of your Marketing Funnel
            </h2>
            <span className="text-[18px] leading-[27px] font-[300] text-center cmd:text-left block">
              Ads that matters supports picture and full screen video ads that
              are designed for awareness or consideration level{" "}
            </span>
            {/* <button className="heroButton mt-4 hidden cmd:block">
              Connect with an expert
            </button> */}
            <div className="mt-4 hidden cmd:block">
              <Connect />
            </div>
            <span className="text-[#fff] cmd:hidden block text-center mt-[40px] text-[15px]">
              Connect with an expert &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAds7;
