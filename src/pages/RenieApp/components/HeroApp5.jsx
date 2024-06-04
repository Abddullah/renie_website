import React from "react";
import impact from "../../../assets/images/impact.webp";

const HeroApp5 = () => {
  return (
    <div className="follow-impact cmd:mt-[-80px]">
      <div className="max-w-[1440px] flex justify-center min-h-[70vh] mx-auto">
        <div className="md:flex justify-center items-center gap-8 ">
          <div>
            <img
              className="w-[374px] h-[166.8px]  md:h-[272px] mx-auto md:w-[644px] mt-20"
              src={impact}
              alt="image hub"
            />
          </div>
          <div className="w-[410px] md:w-[660px] translate-y-9 text-center md:text-left">
            <h2 className="text-[35px] md:text-[45px] leading-[45px] font-[900] gradient-text mx-auto">
              Follow the Impact
            </h2>

            <p className="w-[400px] md:w-[660px] text-[18px] leading-[27px] font-[400] my-4 px-4 md:px-2">
              Every waste bottle that is collected through Renie bins is
              recycled with full traceability. This makes a huge impact on the
              environment.Renie app registers everything and shows it to our
              individual users.
            </p>

            <button className="heroButton text-[#fff] mx-auto">
              Take me to the Renie App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroApp5;
