import Hub from "../../../components/Hub";
import TrustedBy from "../../../components/TrustedBy";
import SubscribCards from "../../Home/components/SubscribCards";

const HubBin = () => {
  return (
    <div className="top-gradient mb-14 flex flex-col gap-[60px] pt-[150px] pb-[70px]">
      <Hub
        top="subTitle"
        title="Renie Hub"
        subTitle="Management Tool"
        desc="Renie hub provides real-time data for smarter logistic decisions and an
overview of data driven income."
      />
      <TrustedBy />
      <SubscribCards />
    </div>
  );
};

export default HubBin;
