import { Link } from "react-router-dom";
import logoSVG from "../assets/images/logoSVG.svg";
import linkedinIcon from "../assets/images/linkedin.png";
import tiktokIcon from "../assets/images/tiktok.png";
import twiterIcon from "../assets/images/linkedin.png";
import youtubeIcon from "../assets/images/youtube.png";
import instagramIcon from "../assets/images/instagram.png";

function Footer() {
  return (
    <footer className="footer flex flex-col justify-center items-center p-3 md:p-0 gap-2 md:gap-5">
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 mb-5">
        <div className="LogoSection flex flex-col items-center md:items-start w-11/12 md:w-5/12">
          <Link to="/" className="footerLogo w-auto flex items-center">
            <img src={logoSVG} alt="Logo" />
          </Link>
          <div className="py-2">
            <p className="footerText text-black">
              We transform your company’s waste from a cost into a source of
              income with Renie Bins. Our innovative bins collect data from your
              waste, feeding it into Renie Software Solutions to uncover new
              revenue opportunities. With Renie Bins, your business’s trash
              becomes a valuable asset, turning waste management into a
              profitable venture.
            </p>
          </div>
        </div>
        <div
          className="IconsSection flex flex-col gap-5 justify-center items-center w-11/12 md:w-4/12"
          style={{ maxWidth: 446 }}
        >
          <p className="socialTitle gradient-text">Follow our socials!</p>
          <div className="socialIcons w-full flex justify-between items-center">
            <img src={instagramIcon} alt="" className="iconItem" />
            <img src={twiterIcon} alt="" className="iconItem" />
            <img src={youtubeIcon} alt="" className="iconItem" />
            <img src={tiktokIcon} alt="" className="iconItem" />
            <img src={linkedinIcon} alt="" className="iconItem" />
          </div>
          <div className="flex justify-between w-full px-2">
            <Link className="footerLink text-black" to="">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link className="footerLink text-black" to="">
              Platform terms
            </Link>
            <span>|</span>
            <Link className="footerLink text-black" to="">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-10 rightRreservedText text-black">
        <p>© 2024 All rights reserved. Renie Tech Trading LLC</p>
      </div>
    </footer>
  );
}

export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logoSVG from '../assets/images/logoSVG.svg';
// import linkedinIcon from '../assets/images/linkedin.png';
// import tiktokIcon from '../assets/images/tiktok.png';
// import twiterIcon from '../assets/images/linkedin.png';
// import youtubeIcon from '../assets/images/youtube.png';
// import instagramIcon from '../assets/images/instagram.png';

// function Footer() {
//   return (
//     <footer className='footer flex flex-col justify-center items-center p-3 md:p-0 gap-2 md:gap-5'>
//       <div className=' flex flex-col lg:flex-row  justify-evenly items-center gap-5 mb-5'>
//         <div className='LogoSection flex flex-col items-center md:items-start  w-11/12 md:w-5/12 '>
//           <Link to='/' className='footerLogo w-auto flex items-center'>
//             <img src={logoSVG} className='' alt='Logo' />
//           </Link>
//           <div className='py-2'>
//             <p className='footerText text-black'>
//               We transform your company’s waste from a cost into a source of
//               income with Renie Bins. Our innovative bins collect data from your
//               waste, feeding it into Renie Software Solutions to uncover new
//               revenue opportunities. With Renie Bins, your business’s trash
//               becomes a valuable asset, turning waste management into a
//               profitable venture.
//             </p>
//           </div>
//         </div>
//         <div className='IconsSection flex flex-col gap-5 justify-center items-center  w-11/12 md:w-4/12' style={{ maxWidth: 446 }}>
//           <p className='socialTitle gradient-text'>Follow our socials!</p>
//           <div className='socialIcons w-full flex justify-between  items-center  '>
//             <img src={instagramIcon} alt='' className='iconItem ' />
//             <img src={twiterIcon} alt='' className='iconItem' />
//             <img src={youtubeIcon} alt='' className='iconItem' />
//             <img src={tiktokIcon} alt='' className='iconItem' />
//             <img src={linkedinIcon} alt='' className='iconItem' />
//           </div>
//           <div className='flex justify-between w-full px-2'>
//             <Link className='footerLink text-black' to=''>
//               Privacy Policy
//             </Link>
//             <span>|</span>
//             <Link className='footerLink text-black' to=''>
//               Platform terms
//             </Link>
//             <span>|</span>
//             <Link className='footerLink text-black' to=''>
//               Terms of use
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className='mt-3 md:mt-10 rightRreservedText text-black'>
//         <p>© 2024 All rights reserved. Renie Tech Trading LLC</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
