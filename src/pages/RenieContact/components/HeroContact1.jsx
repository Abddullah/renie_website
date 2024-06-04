import React from "react";

const HeroContact1 = () => {
  return (
    <div className="bg-[#edeffc] w-full min-h-[179px]">
      <div className="w-11/12 md:w-10/12 max-w-[1440px] lg:px-8 mx-auto py-[40px] p-4">
        <section className="mb-[20px]">
          <h1 className="text-[45px] leading-[35px] font-[900] gradient-text  ">
            Connect
          </h1>
          <span className="text-[35px] leading-[35px] font-[600] gradient-text ">
            With an expert
          </span>
        </section>
        {/* -----------------form----------------------  */}
        <section className="">
          <from>
            <div className="mx-auto md:flex justify-around gap-2">
              <select className="w-full px-2 py-4 my-2 rounded-lg">
                <option value="" disabled className="text-gray-500">
                  Select
                </option>
                <option value="option1">I want</option>
              </select>
              <select className="w-full px-2 py-4 my-2 rounded-lg">
                <option value="" disabled className="text-gray-500">
                  Select
                </option>
                <option value="option1">I am a</option>
              </select>
              <select className="w-full px-2 py-4 my-2 rounded-lg">
                <option value="" disabled></option>
                <option value="option1">Ideal next step for me is</option>
              </select>
              <select className="w-full px-2 py-4 my-2 rounded-lg">
                <option value="" disabled className="text-gray-500">
                  Select
                </option>
                <option value="option1">Ideal next step for me is</option>
              </select>
            </div>
          </from>
        </section>
      </div>
    </div>
  );
};

export default HeroContact1;
