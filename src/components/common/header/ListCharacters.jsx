import React from "react";

const items = ["New & Feature", "SIRIES", "MEGA", "TYPES", "ACCESSORIES"];
const ListCharacters = () => {
  return (
    <div className="flex flex-row items-center">
      <div>
        <img
          src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
          alt="logo"
          className="w-[5.5rem] h-[1.75rem] mr-10"
        />
      </div>
      <div  className="bg-amber-400 flex flex-row justify-between flex-[0.8]">
        {items.map((item, index) => {
          return <span key={index} className="bg-amber-300 text-sm font-medium">{item}</span>;
        })}
      </div>
    </div>
  );
};

export default ListCharacters;
