import binImg1 from "../../../assets/images/icon-1.webp";
import binImg2 from "../../../assets/images/icon-2.webp";
import binImg3 from "../../../assets/images/icon-3.webp";
import binImg4 from "../../../assets/images/icon-4.webp";
import binImg5 from "../../../assets/images/icon-5.webp";
import binImg6 from "../../../assets/images/icon-6.webp";
import binImg7 from "../../../assets/images/icon-7.webp";
import binImg8 from "../../../assets/images/icon-8.webp";
import binBigImg from "../../../assets/images/bin-1.webp";
import binleafImg from "../../../assets/images/bg-leaf.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function ReniebinSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "-30px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="renieBinSection h-full cmd:py-[100px] relative">
        <div className="renieMain contentSection h-full  cmd:w-10/12  mx-auto">
          <div className="renieTitleSection mb-5 text-center ">
            <span className="renieTitleText font-bold gradient-text text-[35px] cmd:text-[45px]">
              Renie Bin
            </span>{" "}
            <br />
            <span className="renieSubTitle font-semibold text-[25px] cmd:text-[35px]">
              The ultimate data extraction machine
            </span>
          </div>
          <div className="dataSection flex flex-col md:flex-row w-full md:w-10/12 md:h-full justify-center md:justify-between mx-auto ">
            <div className="binIcons hidden md:flex flex-col justify-start gap-10 h-full mt-5">
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg1} alt="icon1" />
                <span className="iconText">only accepts</span>
                <span className="iconTitle font-semibold gradient-text">
                  recyclable waste
                </span>
              </div>
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg2} alt="icon2" />
                <span className="iconText">Gives consumer</span>
                <span className="iconTitle font-semibold gradient-text">
                  rewards
                </span>
              </div>
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg3} alt="icon3" />
                <span className="iconText">Tracks</span>
                <span className="iconTitle font-semibold gradient-text">
                  deposited waste
                </span>
              </div>
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg4} alt="icon4" />
                <span className="iconText">Automatically segregates</span>
                <span className="iconTitle font-semibold gradient-text">
                  waste
                </span>
              </div>
            </div>
            <div className="renieCenter flex flex-col items-center gap-5 mt-5 relative">
              <Link to="/products/renie-bins">
                <span className="reniebigImgText font-semibold">
                  Learn more {">"}{" "}
                </span>
              </Link>

              <img
                className="renieCenteredImg relative z-[1]"
                src={binBigImg}
                alt="bin"
              />
              <img
                className="absolute md:hidden w-[85%] top-[-5%] "
                src={binleafImg}
                alt="bin"
              />
            </div>
            <div className="binIcons hidden md:flex flex-col justify-start gap-10 h-full mt-5">
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg5} alt="icon5" />
                <span className="iconText">Uses decentraized</span>
                <span className="iconTitle font-semibold gradient-text">
                  blockchain
                </span>
              </div>
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg6} alt="icon6" />
                <span className="iconText">Monetises</span>
                <span className="iconTitle font-semibold gradient-text">
                  data
                </span>
              </div>
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg7} alt="icon7" />
                <span className="iconText">Extracts</span>
                <span className="iconTitle font-semibold gradient-text">
                  value data
                </span>
              </div>
              <div className="iconItem flex flex-col items-center w-full">
                <img className="iconImg" src={binImg8} alt="icon8" />
                <span className="iconText">Embedded cellular</span>
                <span className="iconTitle font-semibold gradient-text">
                  network
                </span>
              </div>
            </div>
            {/* this will be visible only on mobile */}
          </div>
        </div>
      </div>
      <div className="md:hidden overflow-hidden h-[250px] w-full mt-10 px-4">
        <Slider {...settings}>
          <div className="iconItem flex flex-col items-center justify-center w-full">
            <img className="iconImg" src={binImg1} alt="icon1" />
            <span className="iconText" style={{ textAlign: 'center' }}>only accepts</span>
            <span className="iconTitle font-semibold gradient-text">
              recyclable waste
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg2} alt="icon2" />
            <span className="iconText" style={{ textAlign: 'center' }}>Gives consumer</span>
            <span className="iconTitle font-semibold gradient-text">
              rewards
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg3} alt="icon3" />
            <span className="iconText" style={{ textAlign: 'center' }}>Tracks</span>
            <span className="iconTitle font-semibold gradient-text">
              deposited waste
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg4} alt="icon4" />
            <span className="iconText" style={{ textAlign: 'center' }}>Automatically segregates</span>
            <span className="iconTitle font-semibold gradient-text">
              waste
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg5} alt="icon5" />
            <span className="iconText" style={{ textAlign: 'center' }}>Uses decentraized</span>
            <span className="iconTitle font-semibold gradient-text">
              blockchain
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg6} alt="icon6" />
            <span className="iconText" style={{ textAlign: 'center' }}>Monetises</span>
            <span className="iconTitle font-semibold gradient-text">
              data
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg7} alt="icon7" />
            <span className="iconText" style={{ textAlign: 'center' }}>Extracts</span>
            <span className="iconTitle font-semibold gradient-text">
              value data
            </span>
          </div>
          <div className="iconItem flex flex-col items-center w-full">
            <img className="iconImg" src={binImg8} alt="icon8" />
            <span className="iconText" style={{ textAlign: 'center' }}>Embedded cellular</span>
            <span className="iconTitle font-semibold gradient-text">
              network
            </span>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ReniebinSection;
