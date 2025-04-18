import Footer from "@/components/common/footer/Footer";
import CharacterHover from "@/components/common/header/CharacterHover";
import Header from "@/components/common/header/Header";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const DefaultLayout = ({ children }) => {
  const { isOpen, activeMenu } = useSelector((state) => state.dropdown);
  console.log(isOpen);
  const [ad, setAd] = useState(true);
  const handleClick = () => {
    setAd((prev) => !prev);
  };

  return (
    <div>
      <Header />
      {/* {isOpen && <CharacterHover />} */}
      <div className="mt-20"> {children}</div>
      <div className="fixed bottom-4 right-4 z-50">
        {ad && (
        <div className="relative">
          <i
            className="bx bx-x right-0 absolute top-0 -translate-y-4"
            onClick={handleClick}
          ></i>
            <img
              src="https://global-static.popmart.com/globalAdmin/1744336317480____pc%E7%AB%AF%E6%8C%82%E4%BB%B6____.png?x-oss-process=image/format,webp"
              alt="Easter Event"
              className="w-24 h-24 cursor-pointer animate-bounce"
            />
        </div>
          )}
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
