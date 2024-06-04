import React from "react";
import AboutImg from "../../../assets/images/aboutImg.png";
import Arrow from "../../../assets/images/arrow.png";
function About() {
  return (
    <div className="contentSection w-11/12 cmd:w-10/12 flex flex-col items-center cmd:flex-row cmd:gap-10 justify-center cmd:justify-between py-10 px-4 cmd:px-8 mx-auto ">
      <div className="imageSection flex items-center justify-center w-full h-full cmd:w-[40%]">
        <img className="aboutImg" src={AboutImg} alt="about image" />
      </div>
      <div className="w-full cmd:w-8/12 py-4 cmd:p-4 flex flex-col justify-center gap-5 ">
        <div className="aboutTitleSection text-center cmd:text-left">
          <span className="aboutTitleTop font-semibold">
            Turn your waste into income
          </span>{" "}
          <br />
          <span className="aboutTitleMain font-semibold gradient-text">
            with Renie’s Technology
          </span>
        </div>
        <div>
          <p className="aboutPeragraph font-normal text-center cmd:text-left">
            We transform your company’s waste from a cost into a source of
            income with Renie Bins. Our innovative bins collect data from your
            waste, feeding it into Renie’s data monetization software to uncover
            new revenue opportunities. With Renie Bins, your business’s waste
            becomes a valuable asset, turning waste management into a profitable
            venture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
