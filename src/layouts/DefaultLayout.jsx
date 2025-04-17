import Footer from "@/components/common/footer/Footer";
import CharacterHover from "@/components/common/header/CharacterHover";
import Header from "@/components/common/header/Header";
import React from "react";
import { useSelector } from "react-redux";

const DefaultLayout = ({ children }) => {
  
  const { isOpen } = useSelector((state) => state.dropdown);
  console.log(isOpen);

  return (
    <div>
      <Header />
      {isOpen && <CharacterHover />}
      <div className="mt-20"> {children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
