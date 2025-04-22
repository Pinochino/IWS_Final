import React from "react";

const Featured = ({title, imgs}) => {
  return (
    <div className="lg:mb-20 mb-15">
      <h2 className="uppercase lg:text-[1.66667vw] font-bold lg:mb-[1.66667vw] mb-4 text-5xl md:text-xl">
        {title}
      </h2>

      <div className="grid lg:grid-cols-2 lg:gap-5 gap-6 sm:grid-cols-1 md:grid-cols-2 w-full ">
        <div>
          <img src={imgs.one} alt="logo" className="w-[100%]" />
        </div>
        <div className="flex flex-col justify-between  lg:gap-5 gap-6">
          <div>
            <img src={imgs.two} alt="logo" className="w-[100%] " />
          </div>
          <div>
            <img src={imgs.three} alt="logo" className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
