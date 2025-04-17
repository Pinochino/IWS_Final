import React from "react";
import ListCharacters from "./ListCharacters";
import HeaderModes from "./HeaderModes";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-blue-500 border-y-2 border-gray-400 flex-row">
      <div className="bg-green-500 w-[88rem] h-[4.9rem] flex justify-between items-center flex-row">
        <div className="flex-row  items-center flex-[0.5] ">
          <ListCharacters />
        </div>
        <div className="flex-[0.4] flex justify-between items-center">
          <HeaderModes />
        </div>
      </div>
    </div>
  );
};

export default Header;
