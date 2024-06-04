import React from "react";
import adsMob from "../../../assets/images/adsMob.svg";
import { Link } from "react-router-dom";

const HeroApp6 = () => {
  return (
    <div className=" max-h-[1440px] cmd:mb-24 mt-[80px] cmd:mt-0">
      <div
        className=" md:h-[588px]  flex flex-col-reverse md:flex-row justify-evenly items-center text-white"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <div className="w-[325px] md:w-[660px] text-center md:text-left mb-8 cmd:my-8">
          <h2 className="text-[35px] md:text-[45px] leading-[45px] font-[900] text-white mb-4">
            Ads that matter
          </h2>
          <h3 className="text-[25px] md:text-[35px] leading-[30px] md:leading-[40px] font-[600] text-white mb-2">
            The connection interface changes according to the user’s
            preferences.
          </h3>
          <span className="text-[18px] leading-[27px] font-[300]">
            Our AI powered advertisement platform provides you with the complete
            interface that displays relevant ads based on the preference of the
            app user.
          </span>{" "}
          <br />
          <Link to="/renieads">
            <button className="heroButton my-4 ">Learn more</button>
          </Link>
        </div>

        <img
          className="cmd:w-[372px] cmd:h-[762.8px] ads-mob  translate-y-[-6rem] md:translate-y-0 cmd:translate-x-[-3rem]"
          src={adsMob}
          alt="AdMap"
        />
      </div>
    </div>
  );
};

export default HeroApp6;
