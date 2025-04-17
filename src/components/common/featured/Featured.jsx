import React from "react";

const Featured = ({title, imgs}) => {
  return (
    <div className="mb-20">
      <h2 className="uppercase text-[1.66667vw] font-bold mb-[1.66667vw]">
        {title}
      </h2>

      <div className="grid grid-cols-2 bg-blue-500 gap-5">
        <div>
          <img src={imgs.one} alt="logo" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <img src={imgs.two} alt="logo" />
          </div>
          <div>
            <img src={imgs.three} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
