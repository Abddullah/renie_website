const TwoColLeftImg = ({ children, url, bgColor }) => {
  return (
    <div
      className="py-[60px] px-[40px] cmd:px-0 flex justify-center "
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1440px] w-full lg:w-10/12 flex flex-col cmd:flex-row justify-center ">
        <div className="w-full cmd:w-[40%] flex justify-center items-center">
          <img className="aboutImg" src={url} alt="about image" />
        </div>
        <div className="w-full cmd:w-[60%] flex justify-center cmd:justify-evenly cmd:px-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TwoColLeftImg;
