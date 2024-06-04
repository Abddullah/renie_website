import React from "react";
import renieHub from "../../../assets/images/hubImg-1.png";
import circle from "../../../assets/images/round-2.png";
import circleTwo from "../../../assets/images/round-1.png";

const HeroBinHub = () => {
  return (
    <div className="renie-hub-main binhub-hero-bg relative z-[-1]">
      <div className="max-w-[1440px] cmd:w-10/12 h-[740px] cmd:h-[810px] cmd:min-h-[660px] px-6 lg:px-8 flex justify-center flex-col cmd:flex-row items-center gap-8 cmd:gap-4 mx-auto">
        <div className="w-full cmd:w-[50%] flex justify-center cmd:justify-end relative">
          <img
            className=" w-[50px] cmd:w-[170px] lg:w-[200px] xl:w-[200px] cxl:w-[288px] 2xl:w-[330px]  absolute z-[-1] top-[-22%] left-[2%] "
            src={circle}
            alt="cicle"
          />

          <img className="" src={renieHub} alt="renie Hub image" />
        </div>
        <div className="w-full cmd:w-[50%] relative">
          <div>
            <h2 className="text-[35px] cmd:text-[45px] leading-[45px] font-[900] gradient-text text-center cmd:text-left">
              Earn income while you make a traceable impact
            </h2>
            <p className="text-[18px] leading-[27px] font-[400] mt-6 text-center cmd:text-left">
              Our innovative platform makes it possible to generate a passive
              income from data monetization of plastic waste
            </p>
          </div>
          <img
            className=" cmd:w-[180px]  xl:w-[170px] cxl:w-[160px] hidden cmd:block lg:hidden  absolute bottom-[-65%] right-0 "
            src={circleTwo}
            alt="renie Hub image"
          />
          <img
            className=" w-[80px] renie-hub-mbl-circle cmd:hidden absolute top-[-110%] right-[-20px] z-[-1]"
            src={circleTwo}
            alt="renie Hub image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBinHub;
