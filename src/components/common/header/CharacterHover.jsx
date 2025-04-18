import React from "react";

const CharacterHover = ({ name, imgs = [], layoutType = "one" }) => {
  if (!imgs || imgs.length === 0) return null;

  return (
    <div className="mt-6">
      {layoutType === "one" && (
        <div className="grid grid-cols-3 gap-5">
          {imgs.map((img, index) => (
            <div key={index} className="col-span-1 flex flex-col items-center justify-center">
              <img src={img.img} alt="logo" className=" object-cover max-w-[10rem] " />
              <span className="mt-2 text-center text-sm">{img.name}</span>
            </div>
          ))}
        </div>
      )}
      {layoutType === "two" && (
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          {imgs.map((img, index) => (
            <div key={index} className="col-span-1 flex flex-row items-center">
              <img src={img.img} alt="logo" className="w-20 h-20 object-cover" />
              <span className="ml-2 text-sm">{img.name}</span>
            </div>
          ))}
        </div>
      )}
      {layoutType === "three" && (
        <div className="flex justify-between items-center gap-4">
          {imgs.map((img, index) => (
            <div key={index} className="flex flex-row items-center">
              <img src={img.img} alt="logo" className="w-24 h-24 object-cover" />
              <span className="ml-3 text-sm">{img.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterHover;
