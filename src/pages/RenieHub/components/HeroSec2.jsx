import React from "react";
import chart from "../../../assets/images/chart.webp";
import swipearrow from "../../../assets/images/swipe-arrow.svg";
const HeroSec2 = () => {
  const [x, setX] = React.useState(100);
  return (
    <div className="max-w-[1440px] mx-auto mt-20  text-center">
      <p className="text-[25px] cmd:text-[36px] leading-[45px] font-[600] gradient-text ">
        How is waste transformed into income while{" "}
        <br className="hidden cmd:block" /> measuring the environmental impact?
      </p>
      <div className="my-40 hidden cmd:block overflow-hidden">
        <img
          className=" w-[1200px] mx-auto "
          src={chart}
          alt="chart Hub image"
        />
      </div>
      <div className="my-10 cmd:my-40 cmd:hidden overflow-hidden h-[160px]">
        <img
          style={{ transform: `translate(${x}px` }}
          className=" w-[1200px] mx-auto "
          src={chart}
          alt="chart Hub image"
        />
        <button
          className="relative w-full flex justify-center mt-5 "
          onClick={() => setX((prevX) => (prevX > 0 ? 0 : 100))}
        >
          <img className="" src={swipearrow} alt="bin" />
        </button>
      </div>
    </div>
  );
};

export default HeroSec2;
