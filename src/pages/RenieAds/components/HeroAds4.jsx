import React from "react";
import adedit from "../../../assets/images/ad-edit.webp";
import Connect from "../../../components/Connect";

const HeroAds4 = () => {
  return (
    <div className="flex justify-center reniehub-track-earning">
      <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8 flex flex-col-reverse cmd:flex-row justify-center items-center gap-6 pb-[60px] pt-[100px] cmd:py-[100px]">
        <div className="w-[80vw] cmd:w-[48%]">
          <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] gradient-text text-center cmd:text-left">
            Your Brand, <br className="hidden cmd:block" /> fully customizable
            on our interface
          </h2>

          <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8 text-center cmd:text-left">
            Your advertisement covers the full screen of the mobile phone the
            moment a user connect to a Renie Bin, all your tailored brand’s
            colors and messaging comes to live and fully takes over their mobile
            screen.
          </p>

          {/* <button className="heroButton text-[#fff] hidden cmd:block">
            Connect with an expert
          </button> */}
          <div className=" hidden cmd:block">
            <Connect />
          </div>
        </div>
        <div className="w-[80vw] cmd:w-[48%]">
          <img className=" " src={adedit} alt="image hub" />
        </div>
      </div>
    </div>
  );
};

export default HeroAds4;
