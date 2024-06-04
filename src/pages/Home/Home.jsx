import React, { useEffect, useRef } from "react";
import "../../assets/css/home.css";
import Arrow from "../../assets/images/arrow.png";
import TrustedBy from "../../components/TrustedBy";
import About from "./components/About";
import AdsMatter from "./components/AdsMatter";
import HeroSection from "./components/HeroSection";
import ReniebinSection from "./components/ReniebinSection";

import RenieRewardSection from "./components/RenieRewardSection";
import ServiceCards from "./components/ServiceCards";
import SubscribCards from "./components/SubscribCards";
import TellStory from "./components/TellStory";
import Hub from "../../components/Hub";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const serviceCardRef = useRef(null);

  const scrollToServiceCard = () => {
    if (serviceCardRef.current) {
      serviceCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mt-2.5">
      <HeroSection scrollToServiceCard={scrollToServiceCard} />
      <div className="trustedBySection my-8 cmd:my-12">
        <TrustedBy />
      </div>
      {/* <div className="aboutSection my-10 pt-10"> */}
      <About />
      {/* </div> */}
      <div
        className="serviceCardsSection pt-[40px] cmd:pt-0"
        ref={serviceCardRef}
      >
        <ServiceCards />
      </div>
      <div className="mb-10  ">
        <ReniebinSection />
      </div>
      <div className="renieRewardSection h-full flex justify-center items-center mt-10">
        <RenieRewardSection />
      </div>
      <div className="renieHubSection flex justify-center items-center !h-[640px] cmd:h-[750px]">
        <Hub
          top="title"
          title="Renie Hub"
          subTitle="One Network to Integrate Them All"
          desc="Renie hub provides real-time data for smarter logistic decisions and an
overview of data driven income."
        />
      </div>
      <div className="adsMatterSection flex justify-center items-center">
        <AdsMatter />
      </div>
      <div className="tellStorySection flex justify-center items-center">
        <TellStory />
      </div>
      <div className="subcribCardsSection mt-10 md:mb-20">
        <SubscribCards />
      </div>
    </div>
  );
}

export default Home;
