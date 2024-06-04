import React from "react";
import locations from "../../../assets/images/locations.webp";
import location from "../../../assets/images/location.svg";
import Connect from "../../../components/Connect";

const arr = [
  {
    count: "500",
    city: "Ajman",
  },
  {
    count: "400",
    city: "Aubai",
  },
  {
    count: "100",
    city: "Abu Dhabi",
  },
  {
    count: "100",
    city: "Sharjah",
  },
];
const HeroAds8 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] w-11/12 md:w-10/12  lg:px-8  flex flex-col-reverse cmd:flex-row justify-center items-center gap-4 py-[100px]">
        <div className="w-[80vw] cmd:w-[56%] flex flex-col cmd:block items-center">
          <h2 className="text-[25px] cmd:text-[45px] leading-[45px] font-[900] text-[#4765E6]">
            Be seen in more than
          </h2>
          <span className="text-[60px] leading-[45px] font-[900] text-[#E31662]">
            1000+
          </span>
          <p className="text-[35px] leading-[45px] font-[900] gradient-text">
            Locations daily
          </p>
          <div className=" gap-5 flex flex-wrap cmd:flex-nowrap justify-center  my-5">
            {arr.map((item) => {
              return (
                <div className="flex flex-col items-center cmd:items-start w-[40%] cmd:w-full ">
                  <img src={location} alt="cityicon" />
                  <span className="tex-[20px] cmd:text-[35px] whitespace-pre font-semibold gradient-text">
                    {item.count} +
                  </span>
                  <span className="text-[16px] cmd:text-[18px] whitespace-pre">
                    {item.city}
                  </span>
                </div>
              );
            })}
          </div>
          {/* <button className="heroButton hidden cmd:block mt-4 text-[#fff]">
            Connect with an expert
          </button> */}
          <div className="hidden cmd:block mt-4">
            <Connect />
          </div>
        </div>

        <div className="w-[80vw] cmd:w-[56%] flex justify-center">
          <img className="" src={locations} alt="image hub" />
        </div>
      </div>
    </div>
  );
};

export default HeroAds8;
