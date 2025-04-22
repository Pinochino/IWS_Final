import React from "react";

const data = ["About POP MART", "POP News"];
const Banner = () => {
  return (
    <div className="lg:flex space-x-10 items-center lg:mb-20 hidden mb-4">
      {data.map((e, index) => {
        return (
          <div
            key={index}
            className="w-[24.16667vw] px-[1.5625vw] py-[2.60417vw] bg-[#f5f5f5] flex justify-between items-center rounded-2xl"
          >
            <h2 className="uppercase text-[1.66667vw] font-bold text-[#D20075]">
              {e}
            </h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
