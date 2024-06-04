import React from "react";
import trash from "../../../assets/images/trash.svg";
import tdra from "../../../assets/images/tdra.svg";
import gcce from "../../../assets/images/gcce.svg";

const HeroMain1 = ({ isOpen, handleClick }) => {
  const cards = [
    {
      id: 1,
      imag: tdra,
      btnText: "NEWS",
      mainText: "Renie obtains TDRA certification!",
      date: "20-May-2024",
    },
    {
      id: 2,
      imag: gcce,
      btnText: "BLOGS",
      mainText:
        "Driving Urban Sustainability with Data: Renie’s Innovations at the Forefront of GCCE",
      date: "20-May-2024",
    },
    {
      id: 3,
      imag: trash,
      btnText: "MEDIAs",
      mainText: "Trash to Cash: AI’s Role in Waste Monetization",
      date: "20-May-2024",
    },
    {
      id: 4,
      imag: gcce,
      btnText: "NEWS",
      mainText:
        "Driving Urban Sustainability with Data: Renie’s Innovations at the Forefront of GCCE",
      date: "20-May-2024",
    },
    {
      id: 5,
      imag: trash,
      btnText: "BLOGS",
      mainText: "Trash to Cash: AI’s Role in Waste Monetization",
      date: "20-May-2024",
    },
    {
      id: 6,
      imag: tdra,
      btnText: "MEDIAs",
      mainText: "Renie obtains TDRA certification!",
      date: "20-May-2024",
    },
  ];

  const handleState = () => {
    handleClick(!isOpen);
  };

  return (
    <div className="reniehub-trustedby-main pt-[30px] cmd:pt-[60px] pb-[10px]">
      <div className="w-11/12 md:w-10/12 max-w-[1440px] lg:px-8 my-10 md:flex flex-col  mx-auto ">
        <span className="text-[25px] md:text-[36px] leading-[45px] font-[600] gradient-text ml-4 w-fit">
          Archive
        </span>
        <div className="cmd:flex flex-wrap">
          {cards &&
            cards.map((items) => (
              <div
                onClick={handleState}
                className="w-[98%] h-[450px] rounded-[10px] shadow-md md:w-[31.333%] flex flex-col justify-between cursor-pointer mx-auto my-4 py-4 p-2"
              >
                <header className="w-[99%] h-[280px]  overflow-hidden rounded-md ">
                  <img
                    src={items.imag}
                    alt="#"
                    className="rounded-md w-[100%]scale-125 hover:scale-100 duration-500"
                  />
                </header>
                <main className="px-1 h-[220px]">
                  <button className="heroButton text-[16px] leading-[24px] md:text-[18] md:leading-[27px] font-[600] text-[#fff]  rounded-[2px] mt-4">
                    {items.btnText}
                  </button>

                  <h2 className="text-[21.50px] leading-[26px] md:text-[24px] md:leading-[25px] font-[600] gradient-text my-4 ">
                    {items.mainText}
                  </h2>
                </main>
                <footer className="text-[#6F6F6F] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] font-[400]">
                  {items.date}
                </footer>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMain1;
