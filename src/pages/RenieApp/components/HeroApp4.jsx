import findnearest from "../../../assets/images/findnearest.webp";
import google from "../../../assets/images/google.webp";

const HeroApp3 = () => {
  return (
    <div className=" min-h-[70vh] mx-auto mt-40">
      <div
        className=" md:max-h-[588px] flex flex-col-reverse md:flex-row-reverse justify-around items-center mt-6"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <div className="text-white pb-10 cmd:pb-10 cmd:py-10 cmd:px-6 flex flex-col items-center cmd:items-start text-center cmd:w-[40%]">
          <h2 className="text-[35px] md:text-[45px] leading-[45px] font-[900] ">
            Find the closest
          </h2>
          <h2 className="text-[35px] md:text-[45px] leading-[45px] font-[900]  mt-4">
            Renie Bin.
          </h2>
          <h2 className="text-[35px] md:text-[45px] leading-[45px] font-[900] mt-4">
            And navigate to it
          </h2>
          <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8">
            Work with
          </p>

          <img className="w-[171px]" src={google} alt="AdMap" />
        </div>

        <img
          className="translate-y-[-5rem] cmd:translate-y-[0] cmd:translate-x-[40px]"
          src={findnearest}
          alt="AdMap"
        />
      </div>
    </div>
  );
};

export default HeroApp3;
