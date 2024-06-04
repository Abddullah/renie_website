import React, { useEffect } from "react";
import HeroApp1 from "./components/HeroApp1";
import HeroApp2 from "./components/HeroApp2";
import HeroApp3 from "./components/HeroApp3";
import HeroApp4 from "./components/HeroApp4";
import HeroApp5 from "./components/HeroApp5";
import HeroApp6 from "./components/HeroApp6";
import TrustedBy from "../../components/TrustedBy";
import Hub from "../../components/Hub";
const RenieApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="overflow-hidden">
      <HeroApp1 />
      <HeroApp2 />
      <HeroApp3 />
      <HeroApp4 />
      <HeroApp5 />
      <HeroApp6 />
      <div className="flex flex-col gap-[60px] py-20 renie-app-transparency">
        <TrustedBy />
        <Hub
          top="subTitle"
          title="Renie Hub"
          subTitle="Track it all on the"
          desc="Renie hub provides real-time data for smarter logistic decisions and an
overview of data driven income."
        />
      </div>
    </div>
  );
};

export default RenieApp;
