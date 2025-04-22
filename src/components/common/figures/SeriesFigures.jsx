import { Button } from "@/components/ui/button";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

const SeriesFigures = () => {

  const videoRef = useRef();
  const btnVideoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
    btnVideoRef.current.classList.add("hidden");
  }


  return (
    <div className="lg:mb-20 relative mb-15">
      <h2 className="uppercase lg:text-[1.66667vw] font-bold lg:mb-[1.66667vw] text-5xl mb-5 md:text-xl">
        Hirono Echo Series Figures
      </h2>
      <video
      ref={videoRef}
        controls
        poster="https://global-static.popmart.com/globalAdmin/1744278382440____pc____.jpg"
        className="lg:max-h-[40.5rem] relative h-[100%] w-[100%]"
      >
        <source
          src="https://global-static.popmart.com/globalAdmin/1744278372912____4月11日____.mp4"
          type="video/mp4"
          className=""
        />
        Your browser does not support the video tag.
      </video>
      <div className="lg:right-[42%] lg:top-[45%] right-[25%] top-[42%] absolute rounded-[50%] flex justify-center items-center cursor-pointer
      ">
       <img
       ref={btnVideoRef}
       src="https://cdn-global.popmart.com/global-mobile/images/icons/video-play-icon.png" alt="" className="lg:max-w-[50%] lg:max-h-[50%] max-w-[25%] max-h-[25%]" onClick={playVideo}/>
      </div>
      <div className="flex justify-center items-center mt-[1.25vh]">
        <Button variant="destructive" className={"uppercase lg:w-auto lg:h-auto w-[24%] lg:text-base text-sm"}>
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default SeriesFigures;
