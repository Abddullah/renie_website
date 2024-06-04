import React from "react";
import trackImapact from "../../../assets/images/track-impact.webp";

const HeroSec4 = () => {
  return (
    <div className="renie-hub-track-main flex justify-center relative z-[-1]">
      <div className="max-w-[1440px] cmd:h-[650px] px-5 sm:px-6 lg:px-8 flex flex-col-reverse cmd:flex-row justify-center items-center gap-14 cmd:gap-0 py-14">
        <div className="w-full cmd:w-[50%]">
          <h2 className="text-[35px] cmd:text-[45px] leading-[35px] font-[900] gradient-text text-center cmd:text-left">
            Track Impact and Waste
          </h2>
          <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8 text-center cmd:text-left">
            Monitor the difference you are making by tracking the waste
            collected and recycled by the Renie Bins you’ve been provided. You
            can also generate tailored ESG reports about your created impact.
          </p>
          <div className=" justify-center hidden cmd:flex cmd:justify-start">
            <button className="heroButton text-[#fff]">
              Connect with an expert
            </button>
          </div>
        </div>
        <div className="w-full cmd:w-[50%] flex justify-center">
          <img className="" src={trackImapact} alt="image hub" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec4;
