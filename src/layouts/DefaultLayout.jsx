import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
