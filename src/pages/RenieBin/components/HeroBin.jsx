// import React from 'react';
import "../../../assets/css/home.css";
// import Arrow from '../../../assets/images/arrow.png';
// import Circle from '../../../assets/images/round-2.png';
// import RoundedIcon from '../../../assets/images/round-1.png';
import HeroImg from "../../../assets/images/binHero.png";

export const Circle = () => (
  <svg
    width="135"
    height="135"
    viewBox="0 0 135 135"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M67.454 134.98C34.8438 134.98 6.0839 111.237 0.834399 78.0373C-4.97682 41.2842 20.1881 6.65523 56.9448 0.844582C74.7461 -1.97394 92.5883 2.31511 107.173 12.9152C121.757 23.5153 131.337 39.1601 134.155 56.9597C136.974 74.7592 132.685 92.5997 122.084 107.182C111.482 121.765 95.8463 131.344 78.0347 134.163C74.4806 134.724 70.9367 135 67.454 135V134.98ZM67.6072 14.447C64.8191 14.447 62.0105 14.6615 59.2121 15.1108C30.3296 19.6756 10.547 46.8906 15.1122 75.7702C19.6774 104.65 46.9054 124.431 75.7776 119.866C89.7695 117.65 102.066 110.124 110.39 98.6656C118.723 87.2077 122.084 73.1968 119.878 59.1961C117.661 45.2056 110.134 32.9104 98.6753 24.5875C89.5142 17.9293 78.719 14.4368 67.6072 14.4368V14.447Z"
      fill="url(#paint0_linear_57_8338)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_57_8338"
        x1="-0.00307014"
        y1="67.4883"
        x2="134.993"
        y2="67.4883"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5266B0" />
        <stop offset="0.42" stopColor="#5C419A" />
        <stop offset="1" stopColor="#E21663" />
      </linearGradient>
    </defs>
  </svg>
);

function HeroBin() {
  return (
    <div className="w-11/12 md:w-10/12 max-w-[1440px] lg:px-8 mb-14 md:mb-0 mt-14 items-center md:items-start flex flex-col-reverse md:flex-row md:gap-5 justify-center md:justify-between  mx-auto ">
      {" "}
      <div className="w-full  md:w-6/12 flex flex-col justify-between gap-16">
        <div className="cmd:pt-[2.5rem] flex flex-col justify-start gap-5 h-3/5 ">
          <div className="aboutTitleSection text-center md:text-left">
            <span className=" font-bold text-[#E31662] text-[35px] md:text-[45px]">
              Your waste
            </span>{" "}
            <br />
            <span className="text-[35px] md:text-[45px] leading-[45px] font-bold  text-[#5C419A] ">
              supercharged with <br />
            </span>
            <span className="font-black text-[64px] leading-[45px] gradient-text">
              Data
            </span>
          </div>
          <div>
            <p className="font-[400] text-[18px] leading-[27px] text-center md:text-left">
              Renie bins turn waste into a valuable asset for your business
              integrated sensors work hand in hand with our software solutions
              to monetise your
              <br />
              recyclable waste
            </p>
          </div>
        </div>
        {/* Rounded Icon this will only visible on large screen*/}
        <div className="roundedIcon px-[35px] hidden md:block">
          <Circle />
        </div>
        {/* End */}
      </div>
      <div className="rewardImageSection w-10/12  md:w-6/12">
        <img className="" src={HeroImg} alt="about image" />
      </div>
    </div>
  );
}

export default HeroBin;
