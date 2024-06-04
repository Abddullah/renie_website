import React from "react";

const HeroSec3 = () => {
  return (
    <div className=" renie-hub-transparency w-full text-center">
      <div
        className="min-h-[256px] flex justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <h2 className="text-[25px] cmd:text-[36px] leading-[45px] font-[600] text-white px-[40px] cmd:px-0">
          How do I start earning with Renie?
        </h2>
      </div>
      <div className="mt-10 ">
        <h2 className=" text-[25px] cmd:text-[36px] leading-[45px] font-[600] gradient-text text-center my-6 ">
          First, you’ll need full <br /> transparency and control
        </h2>
        <p className="max-w-[1209px] text-[18px] leading-[27px] font-[400] mx-auto p-[40px]">
          {" "}
          We will first set you up on the Renie Hub where you can monitor every
          step related to the Renie Bins you are provided, track the impact you
          make, and watch the passive income you generate through the Renie Bins
          live on the Renie Hub
        </p>
      </div>
    </div>
  );
};

export default HeroSec3;
