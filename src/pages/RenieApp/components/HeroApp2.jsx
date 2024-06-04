import React from "react";
import Video from "../../../components/Video";

const HeroApp2 = () => {
  return (
    <div>
      <div className="w-full text-center">
        <div
          className=" md:min-h-[256px] flex justify-center md:items-center"
          style={{
            background:
              "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
          }}
        >
          <h2 className="w-[377px] md:w-[1376px] text-[18px] leading-[27px] font-[400] mx-8 my-24 text-white text-left ">
            Renie App, encourages your employees and visitors to recycle plastic
            effortlessly. No downloads, just instant access through their
            browser. Each recycled bottle becomes a ticket to win exciting
            prizes, making sustainability rewarding. Boost your environmental
            impact and engage your community in a fun, meaningful way.
          </h2>
        </div>
        <p className="w-[296px] md:w-[886px] text-[35px] md:text-[45px] leading-[45px] font-[900] mx-auto gradient-text my-10 hidden md:block">
          Connect to the Renie Bin & Drop
        </p>
        <p className="w-[296px] md:w-[886px] text-[35px] leading-[45px] font-[900] mx-auto gradient-text my-10 md:hidden ">
          Connect & Drop
        </p>

        {/* <div className="h-[618px] text-[22px] md:text-[48px] md:leading-[27px] md:font-[400] flex justify-center items-center text-white bg-gray-500">
          <span>watch video</span>
        </div> */}
        <Video />
      </div>
    </div>
  );
};

export default HeroApp2;
