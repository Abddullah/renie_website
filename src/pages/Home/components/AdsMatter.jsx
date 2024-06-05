import React from "react";
import { Link } from "react-router-dom";
import MobileImg from "../../../assets/images/mobile.png";
import adsMob from "../../../assets/images/adsMob.png";
function AdsMatter() {
  return (
    <div className="contentSection w-11/12 md:w-10/12  my-5 items-center flex flex-col md:flex-row-reverse md:gap-10 justify-center md:justify-between  mx-auto ">
      {" "}
      <div className="rewardImageSection">
        <img
          className="adsImg md:block hidden"
          src={MobileImg}
          alt="about image"
        />
        <img className=" md:hidden block" src={adsMob} alt="about image" />
      </div>
      <div className="md:w-6/12  p-4 flex flex-col justify-center gap-5 ">
        <div className="aboutTitleSection text-center md:text-left">
          <span className="adsTitleText font-bold gradient-text text-[35px] cmd:text-[45px]">
            Ads That Matter
          </span>{" "}
          <br />
          <span className="rewardTitleMain font-semibold gradient-text text-[25px] cmd:text-[35px]">
            AI powered targeted campaigns <br className="hidden md:block" />{" "}
            based on consumer habits
          </span>
        </div>
        <div>
          <p className="aboutPeragraph font-normal text-center  md:text-left">
            Powered by real-time data from thousands of Renie bins, our
            AI-driven advertising platform delivers targeted mobile ads to
            preferred audiences in countless locations every day. ensuring your
            ads reach the right people, at the right time, in the right place.
          </p>
        </div>
        <Link className="text-center md:text-left" to="/services/ads">
          <span className="reniebigImgText font-semibold ">
            Learn more {">"}{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AdsMatter;
