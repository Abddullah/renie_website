import React from "react";
import mediaIhero from "../../../assets/images/mediaImg.svg";

const HeroMdMain = ({ isOpen }) => {
  return (
    <>
      {" "}
      {isOpen ? (
        <div className="cmd:binhub-hero-bg">
          <div className="">
            <din className="mx-auto md:flex flex-col">
              <div className="md:flex">
                <div className="w-full">
                  <img className="w-full" src={mediaIhero} alt="mian media" />
                </div>
              </div>
            </din>
          </div>
        </div>
      ) : (
        <div className="cmd:binhub-hero-bg">
          <div className=" cmd:w-10/12 max-w-[1440px] lg:px-8 mx-auto">
            <din className="mx-auto md:flex flex-col pt-[3rem]  pb-[4rem]">
              <span className="text-[25px] md:text-[36px] leading-[45px] font-[600] md:mb-4 gradient-text w-fit px-2.5 cmd:px-0">
                Latest Blog
              </span>
              <div className="md:flex">
                <div className="cmd:w-[75%]">
                  <img className="" src={mediaIhero} alt="mian media" />
                </div>

                <div className="p-4 pt-[40px] pb-6 cmd:pb-4 cmd:pt-4 md:flex cmd:w-[25%] flex-col justify-between md:shadow-lg rounded-lg">
                  <p className="text-[18px] text-[#6F6F6F] leading-[27px] font-[600] hidden md:block">
                    Update
                  </p>
                  <h2 className="text-[24px] leading-[30px] font-[600] gradient-text w-[80vw] cmd:w-full">
                    Revolutionizing Recycling: Renie Bin Unveils Groundbreaking
                    AI-Powered Solution at STEP 2024
                  </h2>
                  <p className="text-[18px] leading-[27px] font-[600] mt-2 text-[#6F6F6F]">
                    20-May-20024
                  </p>
                </div>
              </div>
            </din>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroMdMain;
