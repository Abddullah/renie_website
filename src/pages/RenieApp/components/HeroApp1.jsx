import React from "react";
import AdMap from "../../../assets/images/ad-map.webp";
import Round1 from "../../../assets/images/round-1.png";
import bgLeaf from "../../../assets/images/dark-leaf.svg";
import recycle from "../../../assets/images/recycle.webp";

const HeroApp1 = () => {
  return (
    <div className="binHeroSection z-[-1] relative">
      <div className=" max-w-[1440px] cmd:w-10/12 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-center items-center mx-auto pt-[60px] pb-5">
        <div className="w-full md:w-[50%] md:mx-auto px-8 mx-auto my-4 cmd:translate-x-[6rem] cmd:translate-y-[-7.5rem]">
          <p className="text-[17px] md:text-[21.39px] leading-[25.09px] md:leading-[32.09px] font-[600] md:font-[900]">
            Ready to
          </p>

          <span className="text-[48.56px] md:text-[60.61px] leading-[48px] md:leading-[60px] font-[900] gradient-text">
            Recycle
          </span>
          <br />
          <span className="text-[29.88px] md:text-[30.88px] leading-[32px]  md:leading-[36.31px] font-[600px] md:font-[500px] gradient-text">
            collect points & earn <br /> guaranteed
          </span>
          <h2 className="text-[46.61px] md:text-[60.61px] leading-[40px] md:leading-[60px] font-[900] gradient-text translate-x-[1.5rem] cmd:translate-x-[2rem]">
            Rewards?
          </h2>
          <div className="flex flex-col items-center cmd:block">
            <button className="heroButton !text-[20px] text-[#fff] px-[15px] py-[10px] mt-5 ">
              Go to the Renie app
            </button>
            <p className="text-[14px] leading-[27px] font-[400]">
              No download needed
            </p>
          </div>
        </div>
        {/* --------------------------image div--------------------- */}
        <div className="w-full md:w-[50%] relative">
          <div className="flex flex-col md:flex-row ">
            <img
              className=" hidden cmd:block absolute bottom-[5rem] left-[-6rem] w-[90px] md:w-[153px] h-[89.3px] md:h-[148px] "
              src={Round1}
              alt="AdMap"
            />
            <img
              className="  cmd:hidden absolute top-[2%] left-[-25%] z-[-1] "
              src={recycle}
              alt="AdMap"
            />
            <img
              className=" cmd:hidden absolute top-12 right-1 w-[90px]  h-[90pxpx] "
              src={Round1}
              alt="AdMap"
            />
            <div className="flex flex-col md:flex-row">
              <img className="" src={AdMap} alt="AdMap" />
              <img
                className=" hidden md:block absolute top-[-30px] right-[-20px] z-[-1]"
                src={bgLeaf}
                alt="AdMap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroApp1;
