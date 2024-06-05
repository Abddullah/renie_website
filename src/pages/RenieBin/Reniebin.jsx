// import React from "react";
import "../../assets/css/reniebin.css";
// import TwoColLeftImg from "../../components/TwoColLeftImg";
import DemoBin from "./components/DemoBin";
import HeadlineBin from "./components/HeadlineBin";

import HeroBin from "./components/HeroBin";
import FeatBin from "./components/FeatBin";
import StepBin from "./components/StepBin";
import FullVid from "./components/FullVideo";
import Scaner from "./components/ScanerBin";
import DataMonetization from "./components/DataMonetization";
import HubBin from "./components/HubBin";
import Video from "../../components/Video";
import { useEffect } from "react";

function Reniebin() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Renie Bin";
  }, []);
  return (
    <div className="mt-2.5">
      <div className="binHeroSection flex">
        <HeroBin />
      </div>
      <DemoBin />
      <HeadlineBin />
      <FeatBin />
      <StepBin />
      <Video />
      <Scaner />
      <DataMonetization />
      <HubBin />
      {/* <div className='arrowSection flex justify-center md:hidden'>
        <img className='arrowImg' src={Arrow} alt='' />
      </div> */}
      {/* <div className='trustedBySection my-5'>
        <TrustedBy />
      </div>
      <div className='aboutSection mt-10 pt-10'>
        <About />
      </div>
      <div className='serviceCardsSection my-10'>
        <ServiceCards />
      </div>
      <div className='renieBinSection my-10 '>
        <ReniebinSection />
      </div>
      <div className='renieRewardSection flex justify-center items-center my-10'>
        <RenieRewardSection />
      </div>
      <div className='renieHubSection flex justify-center items-center '>
        <RenieHub />
      </div>
      <div className='adsMatterSection flex justify-center items-center'>
        <AdsMatter />
      </div>
      <div className='tellStorySection flex justify-center items-center'>
        <TellStory />
      </div>
      <div className='subcribCardsSection md:mb-10'>
        <SubscribCards />
      </div> */}
    </div>
  );
}

export default Reniebin;
