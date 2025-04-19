import React from "react";

const CharacterHover = ({ name, imgs = [], layoutType = "one", slice }) => {
  if (!imgs || imgs.length === 0) return null;

  return (
    <div className="mt-6">
      {layoutType === "one" && (
       <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-5">
            {imgs.slice(0, slice).map((img, index) => (
              <div key={index} className="col-span-1 flex flex-col items-center justify-center">
                <img src={img.img} alt="logo" className=" object-cover max-w-[15rem] h-auto" />
                <span className="mt-2 text-center text-sm">{img.name}</span>
              </div>
            ))}
          </div>
       </div>
      )}
      {layoutType === "two" && (
       <div className="flex justify-center">
          <div className="grid grid-cols-4 grid-rows-3 gap-4">
            {imgs.map((img, index) => (
              <div key={index} className="col-span-1 flex flex-row items-center w-[10rem] bg-[#C0C0C0]">
                <img src={img.img} alt="logo" className="w-12 h-12 object-cover" />
                <span className="ml-2 text-xs">{img.name}</span>
              </div>
            ))}
          </div>
       </div>
      )}
      {layoutType === "three" && (
       <div className="flex justify-center">
          <div className="flex justify-between items-center gap-7">
            {imgs.slice(0, slice).map((img, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={img.img} alt="logo" className="w-24 h-24 object-cover mb-4 bg-[#COCOCO]" />
                <span className="ml-3 text-xs">{img.name}</span>
              </div>
            ))}
          </div>
       </div>
      )}
    </div>
  );
};

export default CharacterHover;
