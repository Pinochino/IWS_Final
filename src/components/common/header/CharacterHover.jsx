import React from "react";

const CharacterHover = (
  name,
  imgs,
  one = false,
  two = false,
  three = false
) => {
  return (
    <div className="mt-32">
      {one && (
        <div className="grid grid-cols-3 gap-5">
          {imgs.map((img, index) => {
            return (
              <div key={index} className="col-span-1 flex flex-col">
                <img src={img} alt="logo" />
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      )}
      {two && (
        <div className="grid grid-cols-4 grid-rows-3">
          {imgs.map((img, index) => {
            return (
              <div
                key={index}
                className="col-span-1 flex flex-row items-center"
              >
                <img src={img} alt="logo" />
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      )}
      {three && (
        <div className="flex justify-between items-center">
          {imgs.map((img, index) => {
            return (
              <div
                key={index}
                className="col-span-1 flex flex-row items-center"
              >
                <img src={img} alt="logo" />
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterHover;
