import React from "react";
import { Link } from "react-router-dom";
import RewardImg from "../../../assets/images/reward-img.png";

function RenieRewardSection() {
  return (
    <div className="w-11/12 md:w-10/12 contentSection mt-5 py-[60px] flex flex-col items-center md:flex-row md:gap-10 justify-center md:justify-between  mx-auto ">
      {" "}
      <div className="rewardImageSection">
        <img className="rewardImg" src={RewardImg} alt="about image" />
      </div>
      <div className="  md:w-6/12 pt-8 cmd:pt-4 cmd:p-4 flex flex-col justify-center gap-5 ">
        <div className="aboutTitleSection text-center md:text-left">
          <span className="renieTitleText font-bold gradient-text text-[35px] cmd:text-[45px]">
            Renie Rewards
          </span>{" "}
          <br />
          <span className="rewardTitleMain font-semibold gradient-text text-[25px] cmd:text-[35px]">
            The modern waste solution <br className="hidden cmd:block" /> to
            incentivize recycling behavior
          </span>
        </div>
        <div>
          <p className="aboutPeragraph font-normal text-center  md:text-left ">
            Ready to recycle, collect points and earn guaranteed rewards?
          </p>
        </div>

        <Link to="/products/renie-bins">
          <p className="reniebigImgText font-semibold text-center md:text-left">
            Learn more {">"}{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default RenieRewardSection;
