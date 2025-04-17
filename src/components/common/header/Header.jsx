import React from "react";
import ListCharacters from "./ListCharacters";
import HeaderModes from "./HeaderModes";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-center items-center bg-blue-500 border-y-2 border-[#DDDDDD] flex-row">
        <div className="bg-green-500 w-[90rem] h-[4.9rem] flex justify-between items-center flex-row">
          <div className="flex-row  items-center flex-[0.5] ">
            <ListCharacters  />
          </div>
          <div className="flex-[0.4] flex justify-between items-center">
            <HeaderModes />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
