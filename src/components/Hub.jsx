import HubImg from "../assets/images/hubImg-1.png";
import { Link } from "react-router-dom";

function Hub({ top, title, subTitle, desc }) {
  return (
    <div className="w-11/12 contentSection md:w-10/12  my-5  flex flex-col items-center md:flex-row md:gap-10 justify-center md:justify-between  mx-auto ">
      {" "}
      <div className="rewardImageSection">
        <img className="rewardImg" src={HubImg} alt="about image" />
      </div>
      <div className=" md:w-6/12  p-4 flex flex-col justify-center gap-5 ">
        <div className="aboutTitleSection text-center md:text-left">
          {top == "title" ? (
            <>
              <span className="renieTitleText font-bold gradient-text text-[35px] cmd:text-[45px]">
                {title}
              </span>{" "}
              <br />
              <span className="rewardTitleMain font-semibold gradient-text text-[25px] cmd:text-[35px]">
                {subTitle}
              </span>
            </>
          ) : (
            <>
              <span className="rewardTitleMain font-semibold gradient-text text-[25px] cmd:text-[35px]">
                {subTitle}
              </span>
              <br />
              <span className="renieTitleText font-bold gradient-text text-[35px] cmd:text-[45px]">
                {title}
              </span>{" "}
            </>
          )}
        </div>
        <div>
          <p className="aboutPeragraph font-normal text-center  md:text-justify">
            {desc}
          </p>
        </div>
        <Link to="/products/renie-hub">
          <p className="reniebigImgText font-semibold text-center md:text-left">
            Learn more {">"}{" "}
          </p>
        </Link>
        {/* <div className='arrowSection relative w-full flex mx-10  hidden md:flex px-10 '>
          <img className='arrowImg absolute top-6' src={Arrow} alt='' />
        </div> */}
      </div>
    </div>
  );
}

export default Hub;
