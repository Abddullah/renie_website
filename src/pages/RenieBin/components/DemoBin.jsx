import DemoImg from "../../../assets/images/bin-1.webp";
import arrowImg from "../../../assets/images/arrow.png";
import renieBgImg from "../../../assets/images/renie-bg.png";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Circle } from "./HeroBin";
import Connect from "../../../components/Connect";

const DemoBin = () => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="reniebin-demo cmd:mt-[2px] flex flex-col py-16 gap-2.5 items-center relative">
      <header className="flex flex-col items-center">
        <span className="gradient-text leading-[45px] text-[35px] md:text-[45px] font-black">
          Renie Bin
        </span>
        <p className="font-semibold leading-[45px] text-[#E31662] text-[25px] md:text-[35px]">
          280L volume
        </p>
      </header>

      {/* <button
        data-cal-namespace=""
        data-cal-link="renie-connect/30min"
        data-cal-config='{"layout":"month_view"}'
      > */}
      <img className="h-[350px] md:h-[400px]" src={DemoImg} alt="about image"
      />

      {/* <Connect text='Book a Demo'/> */}
      {/* </button> */}
      <button className="heroButton text-white"
        data-cal-namespace=""
        data-cal-link="renie-connect/30min"
        data-cal-config='{"layout":"month_view"}'
      >Book a Demo</button>
      <p className=" font-semibold leading-[27px] text-[#646464] text-[18px]">
        Good to collect 200-300 plastic bottles
      </p>

      {/* <span className=" font-semibold leading-[15px] text-[#E31662] text-[15px]">
        Contact us &gt;
      </span> */}
      <span className="absolute top-[40%] left-[-75px]">
        <Circle />
      </span>

      <img
        className="absolute h-[100px] top-[-45px] "
        src={arrowImg}
        alt="arrow image"
      />
      <img
        className="absolute w-[500px] h-[550px] top-[8%] z-[-1]"
        src={renieBgImg}
        alt="renieBg image"
      />
    </div>
  );
};

export default DemoBin;
