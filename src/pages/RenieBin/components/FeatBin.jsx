import ricon1 from "../../../assets/images/ricon-1.webp";
import ricon2 from "../../../assets/images/ricon-2.webp";
import ricon3 from "../../../assets/images/ricon-3.webp";
import renieBgImg from "../../../assets/images/bin-1.webp";
const FeatBin = () => {
  return (
    <div className="top-gradient flex cmd:justify-center">
      <div className="max-w-[1440px] w-full lg:w-10/12 flex flex-col-reverse items-center cmd:flex-row justify-center py-8">
        <div className="w-[80%] cmd:w-[40%] flex flex-col justify-around gap-12">
          <div className="flex cmd:justify-start">
            <span className="gradient-text text-[36px] font-semibold leading-[45px]">
              Accurate <br /> verification
            </span>{" "}
          </div>
          <div className="flex cmd:justify-start">
            <span className="gradient-text text-[36px] font-semibold leading-[45px]">
              Fraud <br /> detection
            </span>{" "}
          </div>
          <div className="flex cmd:justify-start">
            <span className="gradient-text text-[36px] font-semibold leading-[45px]">
              Data <br /> collection
            </span>{" "}
          </div>
        </div>
        <div className="w-full cmd:w-[40%] flex justify-center gap-5 px-[40px] cmd:px-0">
          <div className="flex flex-col justify-around">
            <img src={ricon1} alt="icon" />
            <img src={ricon2} alt="icon" />
            <img src={ricon3} alt="icon" />
          </div>
          <div>
            <img className=" cmd:h-[440px]" src={renieBgImg} alt="renieBgImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatBin;
