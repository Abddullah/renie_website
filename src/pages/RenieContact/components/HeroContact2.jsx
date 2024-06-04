import React from "react";

const HeroContact2 = () => {
  return (
    <div className="w-11/12 md:w-10/12 max-w-[1440px] lg:px-8 mx-auto py-[40px] ">
      <div className="md:flex justify-between">
        <section className=" md-w-[15%] px-8">
          <h2 className="text-[25px] md:text-[35px] leading-[45px] font-[900] mb-4 gradient-text">
            Let’s schedule a chat
          </h2>
          <form>
            <div className="mx-auto ">
              {/* Name Input */}
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-[14px] mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-[100%] border border-gray-300 rounded px-3 py-2 focus:outline-none "
                />
              </div>

              {/* Email Input */}
              <div className="w-full mb-4 md:mb-4">
                <label className="block text-[14px] mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none mb-4"
                />
                <div className="mx-auto md:flex justify-around gap-2">
                  {/* Textarea */}
                  <div className="w-full">
                    <label
                      className="block  text-[14px] mb-2"
                      htmlFor="message"
                    >
                      Tell me the good way for meeting
                    </label>
                    <textarea
                      id="message"
                      className=" w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      rows="4"
                      placeholder="Details"
                    ></textarea>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="mx-auto text-center mt-4">
                  <button
                    type="submit"
                    className="heroButton text-[19.05] rounded-md font-[500px] w-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>

        {/* -------------right dev ------------- */}
        <section className=" md-w-[85%] hidden md:flex ">
          <div className="flex flex-col max-h-[532px]">
            <section className="py-[3rem] px-[4rem] w-full shadow-md">
              <span className="text-[45px] leading-[45px] font-[900] mb-4 gradient-text">
                Renie
              </span>
              <br />
              <span className="text-[14px]  font-[900] ">
                The future of waste is digital
              </span>
            </section>
            <section className="py-[50px] px-4">
              <div className="w-[100px] h-[100px] rounded-[50%] overflow-hidden bg-gray-500 ">
                <img
                  className="w-[100%] h-[100%]"
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="#"
                />
              </div>
              <span className="text-[18px] leading-[20px] font-[400] mt-6 text-gray-500">
                Soltan from Renie
              </span>
              <h2 className="text-[35px] leading-[30px] font-[600] mb-4">
                Renie expert <br /> consultation
              </h2>
              <div>
                <section>
                  <span className="text-[14px] leading-[10px] font-[400] mt-8 text-gray-500">
                    30 min
                  </span>
                  <h2 className="text-[14px] leading-[px] font-[400] mt-2 text-gray-500">
                    Web conferencing details provided <br /> upon comfirmation
                  </h2>
                </section>
              </div>
            </section>
          </div>

          <div className="p-4 w-[60%] shadow-md md:flex">
            <section>
              <span className="text-[24px] leading-[27px] font-[900] mb-4">
                Select data and time
              </span>
              <h2 className="text-center">May 2024</h2>
              <table className=" text-gray-500 mx-auto">
                <tr>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    MON
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    TUE
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    WED
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    THU
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    FRI
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    SAT
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    SUN
                  </td>
                </tr>

                <tr>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4"></td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4"></td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    1
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    2
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    3
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    4
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    5
                  </td>
                </tr>

                <tr>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    6
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    7
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    8
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    9
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    10
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    11
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    12
                  </td>
                </tr>

                <tr>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    13
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    14
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    15
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    16
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    17
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    18
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    19
                  </td>
                </tr>

                <tr>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4">
                    20
                  </td>
                  <td className=" rounded-[50%] bg-blue-600 text-white font-[500] text-center w-[3em] h-[3rem] m-4">
                    21
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    22
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    23
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    24
                  </td>
                  <td>25</td>
                  <td>26</td>
                </tr>
                <tr>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    27
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    28
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    29
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    30
                  </td>
                  <td className=" rounded-[50%] bg-blue-200 text-blue-600 font-[500] text-center w-[3em] h-[3rem] m-4">
                    31
                  </td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4"></td>
                  <td className=" rounded-[50%] font-[500] text-center w-[3em] h-[3rem] m-4"></td>
                </tr>
              </table>
              <div className="mt-4">
                <h2 className="text-[14px] leading-[27px] font-[600] text-gray-500">
                  Time Zone
                </h2>
                <span>Dubai Time (03:00)</span> <br />
                <p className="border border-gray-600 py-2 rounded-3xl mt-5 w-[150px] text-center">
                  Troubleshoot
                </p>
              </div>
            </section>

            <sections className="flex flex-col gap-4">
              <h2>Thuesday, May 21</h2>
              <div className=" translate-y-8">
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  09:00
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  09:30
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  10:00
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  10:30
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  11:00
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  11:30
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  12:00
                </p>
                <p className=" border-[1px] border-blue-400 text-center rounded-sm px-[2rem] py-[.80rem] my-[1rem]">
                  12:30
                </p>
              </div>
            </sections>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroContact2;
