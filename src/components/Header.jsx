import React, { useState } from "react";
// import logo from '../assets/images/logo.png';
import logoSVG from "../assets/images/logoSVG.svg";
import { Link } from "react-router-dom";
import Connect from "./Connect";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-white shadow-md border md:py-3   ">
      <div className=" contentSection mx-auto px-4 sm:px-6 lg:px-8 cmd:w-10/12">
        <div className="flex justify-between items-center gap-2.5 h-16">
          <div className="flex-shrink-0 headerLogo">
            <Link to="/">
              <img className="" src={logoSVG} alt="Logo" />
            </Link>
          </div>
          <div className="hidden cmd:flex md:justify-center gap-2 lg:gap-3 cmxl:gap-4 cxl:gap-5 space-x-4">
            <Link
              to="/reniebin"
              className="text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl text-[#000000] whitespace-pre "
            >
              Renie Bin
            </Link>

            <Link
              to="/reniehub"
              className="text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl text-[#000000] whitespace-pre "
            >
              Renie Hub
            </Link>
            <a
              href="renieapp"
              className="text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl text-[#000000] whitespace-pre "
            >
              Renie App
            </a>
            <a
              href="renieads"
              className="text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl text-[#000000] whitespace-pre "
            >
              Ads that matter
            </a>
            <a
              href="reniemedia"
              className="text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl text-[#000000] whitespace-pre "
            >
              Media Hub
            </a>
          </div>
          <div className="hidden cmd:block">
            {/* <button className=" headerButton text-white text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl whitespace-pre ">
              Connect with an expert
            </button> */}
            <Connect />
          </div>
          <div className="-mr-2 flex cmd:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex menuIcon items-center justify-center p-2 rounded-md   focus:outline-none "
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="cmd:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="reniebin"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Renie Bin
            </a>
            <a
              href="
              reniehub
"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Renie Hub
            </a>
            <a
              href=" 
              renieapp
             "
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Renie App
            </a>
            <a
              href="
              renieads
              "
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Ads that matter
            </a>
            <a
              href="
              reniemedia"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Media Hub
            </a>
            <Connect />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
