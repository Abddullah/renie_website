import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css"; // Your custom styles
import trustImg1 from "../assets/images/trust-1.png";
import trustImg2 from "../assets/images/trust-2.png";
import trustImg3 from "../assets/images/trust-3.png";
import trustImg4 from "../assets/images/trust-4.png";
import trustImg5 from "../assets/images/trust-5.png";

function TrustedBy() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="trustMain contentSection w-10/12 flex flex-col gap-8  mx-auto mb-10">
      <div className="trustTitle flex justify-center">
        <span className="trustTitleText gradient-text text-[25px] cmd:text-[35px]">
          TrustedBy
        </span>
      </div>
      <Slider {...settings}>
        <div className="item ">
          <div className="trustItem">
            <img className="trustItem1" src={trustImg1} alt="Trust 1" />
          </div>
        </div>
        <div className="item">
          <div className="trustItem">
            <img className="trustItem1" src={trustImg2} alt="Trust 2" />
          </div>
        </div>
        <div className="item">
          <div className="trustItem">
            <img className="trustItem1" src={trustImg3} alt="Trust 3" />
          </div>
        </div>
        <div className="item">
          <div className="trustItem">
            <img className="trustItem1" src={trustImg4} alt="Trust 4" />
          </div>
        </div>
        <div className="item">
          <div className="trustItem">
            <img className="trustItem1" src={trustImg5} alt="Trust 5" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TrustedBy;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../assets/css/style.css"; // Your custom styles
// import trustImg1 from "../assets/images/trust-1.png";
// import trustImg2 from "../assets/images/trust-2.png";
// import trustImg3 from "../assets/images/trust-3.png";
// import trustImg4 from "../assets/images/trust-4.png";
// import trustImg5 from "../assets/images/trust-5.png";

// function TrustedBy() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1340,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 580,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="trustMain contentSection w-10/12 flex flex-col gap-10  mx-auto mb-10">
//       <div className="trustTitle flex justify-center">
//         <span className="trustTitleText gradient-text">TrustedBy</span>
//       </div>
//       <Slider {...settings}>
//         <div className="item ">
//           <div className="trustItem">
//             <img className="trustItem1" src={trustImg1} alt="Trust 1" />
//           </div>
//         </div>
//         <div className="item">
//           <div className="trustItem">
//             <img className="trustItem1" src={trustImg2} alt="Trust 1" />
//           </div>
//         </div>
//         <div className="item">
//           <div className="trustItem">
//             <img className="trustItem1" src={trustImg3} alt="Trust 1" />
//           </div>
//         </div>
//         <div className="item">
//           <div className="trustItem">
//             <img className="trustItem1" src={trustImg4} alt="Trust 1" />
//           </div>
//         </div>
//         <div className="item">
//           <div className="trustItem">
//             <img className="trustItem1" src={trustImg5} alt="Trust 1" />
//           </div>
//         </div>

//         {/* <div className='trustItem'>
//           <img className='trustItem2' src={trustImg2} alt='Trust 2' />
//         </div> */}
//         {/* <div className='trustItem'>
//           <img className='trustItem3' src={trustImg3} alt='Trust 3' />
//         </div>
//         <div className='trustItem'>
//           <img className='trustItem4' src={trustImg4} alt='Trust 4' />
//         </div>
//         <div className='trustItem'>
//           <img className='trustItem5' src={trustImg5} alt='Trust 5' />
//         </div> */}
//       </Slider>
//     </div>
//   );
// }

// export default TrustedBy;
