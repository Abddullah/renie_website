import React, { useState } from "react";
// import logo from '../assets/images/logo.png';
import logoSVG from "../assets/images/logoSVG.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-white shadow-md border md:py-3   ">
      <div className=" contentSection mx-auto px-4 sm:px-6 lg:px-8 md:w-10/12">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 headerLogo">
            <Link to="/">
              <img className="" src={logoSVG} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex md:justify-center gap-5 space-x-4">
            <Link to="/reniebin" className="linkItem">
              Renie Bin
            </Link>
            <a href="#" className="linkItem">
              Renie Hub
            </a>
            <a href="#" className="linkItem">
              Renie App
            </a>
            <a href="#" className="linkItem">
              Ads that matter
            </a>
            <a href="#" className="linkItem">
              Media Hub
            </a>
          </div>
          <div className="hidden md:block">
            <button className=" headerButton text-white ">
              Connect with an expert
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Renie Bin
            </a>
            <a
              href="#"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Renie Hub
            </a>
            <a
              href="#"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Renie App
            </a>
            <a
              href="#"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              ds that matter
            </a>
            <a
              href="#"
              className="block text-black px-3 py-2  text-base font-normal"
            >
              Media Hub
            </a>
            <button className="headerButton text-white">
              Connect with an expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
