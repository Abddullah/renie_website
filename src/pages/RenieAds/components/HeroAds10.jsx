import React from "react";
import marketingmockup from "../../../assets/images/marketing-mockup.webp";
import Connect from "../../../components/Connect";

const HeroAds10 = () => {
  return (
    <div className="flex justify-center bg-[#EDF0FD] pb-[40px] pt-[100px] cmd:py-[100px]">
      <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8   flex flex-col cmd:flex-row justify-center items-center gap-4">
        <div className="w-[80vw] cmd:w-[48%]">
          <img className="" src={marketingmockup} alt="image hub" />
        </div>
        <div className="w-[80vw] cmd:w-[48%]">
          <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] gradient-text text-center cmd:text-left">
            The <br className="hidden cmd:block" /> Ads That Matter{" "}
            <br className="hidden cmd:block" /> platform
          </h2>

          <p className="text-[18px] leading-[27px] font-[400] text-center cmd:text-left">
            Analyze campaign performance through your own advertising dashboard
          </p>

          {/* <button className="heroButton hidden cmd:block mt-4 text-[#fff]">
            Connect with an expert
          </button> */}
          <div className="hidden cmd:block mt-4">
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAds10;
