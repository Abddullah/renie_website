import React from "react";
import { Link } from "react-router-dom";
import check from "../../../assets/images/check.svg";

import StandardImg from "../../../assets/images/standardFeature.png";
import Connect from "../../../components/Connect";
const card1 = [
  "15 sec video banner displayed during off-peak hours",
  " Share ad rotation with other basic Boost ads",
  "Basic analytics report",
];
const card2 = [
  "15 sec video banner displayed during off-peak hours",
  " Frequent rotations but shared with other Standard Ads",
  "Enhanced analytics report",
];

const card3 = [
  "60 sec video banner displayed during off-peak hours",
  "Exclusive Native ad display banner. First impression on Renie Rewards.",
  "4 Native ad placements",
  "Comprehensive analytics and dedicated support",
];
const HeroAds11 = () => {
  return (
    <div className="flex flex-col items-center renie-app-transparency pb-[150px]">
      <div className="max-w-[1440px] w-11/12 md:w-10/12 mt-[60px] cmd:mt-[80px] cmd:pb-[50px]">
        <p className="gradient-text text-[35px] font-black cmd:text-[45px]">
          Start advertising
        </p>
        <span className="text-[#E31662] text-[35px] font-black cmd:text-[45px]">
          on the Renie App now
        </span>
      </div>
      <div className="max-w-[1440px] w-11/12 md:w-10/12    contentSection flex  items-center cmd:items-end flex-col cmd:flex-row  justify-center md:justify-around  mx-auto ">
        {/* <div className="subscribImageSection cmd:w-3/12 flex  flex-col gap-5 justify-start cmd:items-baseline h-full">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="imageTitleText gradient-text cmd:w-full">
            Get your <br /> Renie Bin
          </span>
          <br />
          <span className="imageTitleTime cmd:w-full text-center cmd:text-left">
            Today
          </span>
        </div>
        <img
          className="subscribImg cmd:h-[370px] lg:h-[404px]"
          src={cardImg}
          alt=""
        />
      </div> */}
        {/* <div className='subscribCardsSection md:8/12 flex md:flex-row justify-end flex-col md:items-end md:mt-0 mt-10 '> */}

        <div className="  flex  cmd:flex-row justify-end flex-col cmd:items-end cmd:mt-0 mt-10 gap-[40px] cmd:gap-0">
          {/* <div className='standardCard  flex flex-col justify-center items-start px-10 md:mb-0 mb-5'> */}
          <div className="standardCard !w-full relative  flex flex-col justify-around items-start px-10 mt-10 md:mt-0 pt-5">
            <div>
              <span className="cardTitle gradient-text font-semibold">
                Basic Boost
              </span>
              <p className="cardPrice">
                {" "}
                <span className="price gradient-text font-semibold">
                  5,500 AED / mo
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-5 h-[210px] justify-center">
              {card1.map((item) => {
                return (
                  <div className="flex gap-2">
                    <img src={check} className="h-[16px] w-[16px]" />
                    <p className="text-[14px] font-[400px]">{item}</p>
                  </div>
                );
              })}
            </div>

            <div className=" w-max flex items-center justify-center mt-10  ">
              {/* <Link
                to="#"
                className="text-white  font-medium rounded-lg text-sm  "
              >
                Connect with an expert
              </Link> */}
              <Connect />
            </div>
          </div>
          <div className="Ads-card-2   ronded-[20px] cmd:rounded-0  !w-full   relative  flex flex-col justify-around items-start px-10 mt-10 md:mt-0 pt-5">
            <div className="flex flex-col gap-3">
              <span className="cardTitle gradient-text font-semibold">
                Renie Bin Standard
              </span>
              <p className="cardPrice">
                {" "}
                <span className="price gradient-text font-semibold">
                  730 AED / mo
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-5 h-[210px] justify-center">
              {card2.map((item) => {
                return (
                  <div className="flex gap-2">
                    <img src={check} className="h-[16px] w-[16px]" />
                    <p className="text-[14px] font-[400px]">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className=" w-max flex items-center justify-center mt-10  ">
              {/* <Link
                to="#"
                className="text-white  font-medium rounded-lg text-sm  "
              >
                Connect with an expert
              </Link> */}
              <Connect />
            </div>
          </div>

          <div className="Ads-card-3  !w-full  relative  flex flex-col justify-around items-start px-10 mt-10 md:mt-0 pt-5 ">
            <div className="mostPopularLabel font-semibold text-white rounded-md flex justify-center items-center ">
              MOST POPULAR
            </div>
            <div>
              <span className="cardTitle gradient-text font-semibold">
                Renie Bin Standard
              </span>
              <p className="cardPrice">
                {" "}
                <span className="price gradient-text font-semibold">
                  730 AED/ mo
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4 h-[210]">
              {card3.map((item) => {
                return (
                  <div className="flex gap-2">
                    <img src={check} className="h-[16px] w-[16px]" />
                    <p className="text-[14px] font-[400px]">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className=" w-max flex items-center justify-center mt-10  ">
              {/* <Link
                to="#"
                className="text-white  font-medium rounded-lg text-sm  "
              >
                Connect with an expert
              </Link> */}
              <Connect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroAds11;
