import React, { useEffect } from "react";
import HeroAds1 from "./components/HeroAds1";
import HeroAds2 from "./components/HeroAds2";
import HeroAds3 from "./components/HeroAds3";
import HeroAds4 from "./components/HeroAds4";
import HeroAds5 from "./components/HeroAds5";
import HeroAds6 from "./components/HeroAds6";
import HeroAds7 from "./components/HeroAds7";
import HeroAds8 from "./components/HeroAds8";
import HeroAds9 from "./components/HeroAds9";
import HeroAds10 from "./components/HeroAds10";

import TrustedBy from "../../components/TrustedBy";
import HeroAds11 from "./components/HeroAds11";
import Video from "../../components/Video";

const RenieAds = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="overflow-hidden">
      <HeroAds1 />
      <HeroAds2 />
      <HeroAds3 />
      <HeroAds4 />
      <HeroAds5 />
      <HeroAds6 />
      <HeroAds7 />
      <HeroAds8 />
      <Video />
      <HeroAds10 />
      <div className="reniehub-trustedby-main pt-[100px]">
        <TrustedBy />
        <HeroAds11 />
      </div>
    </div>
  );
};

export default RenieAds;
