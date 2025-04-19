import { Button } from "@/components/ui/button";
import React from "react";

const SeriesFigures = () => {
  return (
    <div className="mb-20 relative">
      <h2 className="uppercase text-[1.66667vw] font-bold mb-[1.66667vw]">
        Hirono Echo Series Figures
      </h2>
      <video
        controls
        poster="https://global-static.popmart.com/globalAdmin/1744278382440____pc____.jpg"
        className="max-h-[40.5rem] relative"
      >
        <source
          src="https://global-static.popmart.com/globalAdmin/1744278372912____4月11日____.mp4"
          type="video/mp4"
          className=""
        />
        Your browser does not support the video tag.
      </video>
      <i class='bx bx-play absolute text-7xl right-[45%] top-[40%] bg-white rounded-[50%] text-center'></i>
      <div className="flex justify-center items-center mt-[1.25vh]">
        <Button variant="destructive" className={"uppercase"}>
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default SeriesFigures;
