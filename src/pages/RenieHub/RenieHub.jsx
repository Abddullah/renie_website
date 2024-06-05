import HeroHub from "./components/HeroHub";
import HeroSec2 from "./components/HeroSec2";
import TrustedBy from "../../components/TrustedBy";
import HeroSec3 from "./components/HeroSec3";
import HeroSec4 from "./components/HeroSec4";
import HeroSec5 from "./components/HeroSec5";
import { useEffect } from "react";

const RenieHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Renie Hub";
  }, []);
  return (
    <div className="overflow-hidden">
      <HeroHub />
      <div className="reniehub-trustedby-main pt-[100px] pb-4">
        <TrustedBy />
      </div>

      <HeroSec2 />
      <HeroSec3 />
      <HeroSec4 />
      <HeroSec5 />
    </div>
  );
};

export default RenieHub;
