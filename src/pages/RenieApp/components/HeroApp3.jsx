import React from "react";
import rewardsapp from "../../../assets/images/rewards-app.webp";

const HeroApp3 = () => {
  return (
    <div className="reniehub-track-earning pt-5 cmd:pt-0">
      <div className=" max-w-[1440px] cmd:w-10/12 px-4 sm:px-6 lg:px-8 mx-auto min-h-[70vh] flex flex-col-reverse md:flex-row justify-between items-center mb-16">
        <div className="w-full cmd:w-[55%]">
          <h2 className="text-[35px] md:text-[45px] leading-[35px] font-[900] text-[#E31662] text-center md:text-left">
            No vouchers, no discounts
          </h2>
          <h2 className="text-[35px] md:text-[45px] leading-[45px] font-[900] gradient-text mt-4 text-center md:text-left">
            just valuable prizes
          </h2>
          <p className="w-[382px] md:w-[660px] text-[18px] leading-[27px] font-[400]  mb-8 p-4 cmd:p-0  text-center md:text-left">
            We go beyond the usual discounts or vouchers for recycling. We
            believe that these efforts deserve more. That’s why we offer the
            chance to win truly valuable prizes, like the latest smartphone or a
            dream vacation, all without hidden costs.
          </p>
        </div>
        <div className="w-full md:w-[45%]">
          <img className=" my-8  mx-auto " src={rewardsapp} alt="AdMap" />
        </div>
      </div>
    </div>
  );
};

export default HeroApp3;
