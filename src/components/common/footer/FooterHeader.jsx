import React from "react";
import "boxicons/css/boxicons.min.css";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";

const FooterHeader = () => {
  return (
    <div className="lg:flex bg-[#e4dbdb] justify-center items-center  hidden  w-auto footer-header">
      <div className="lg:w-[75%] lg:min-h-[5.75rem] w-full h-full flex justify-center items-center">
    <div className="flex flex-row items-center space-x-15 w-full">
      <h2 className="uppercase text-[1.66667vw] font-bold">top sellings</h2>
      <div className="flex space-x-4">
        <Instagram />
        <Facebook />
        <Twitter />
        <Youtube />
        <Linkedin />
      </div>
    </div>
    </div>
    </div>
  );
};

export default FooterHeader;
