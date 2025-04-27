import { Button } from "@/components/ui/button";
import React, { useRef } from "react";

const SeriesFigures = () => {
  const videoRef = useRef();
  const btnVideoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
    btnVideoRef.current.classList.add("hidden");
  };

  return (
    <div className="series-figures">
      <h2 className="uppercase font-bold">Hirono Echo Series Figures</h2>
      <div className="relative">
        <video
          ref={videoRef}
          controls
          poster="https://global-static.popmart.com/globalAdmin/1744278382440____pc____.jpg"
          className="w-full"
        >
          <source
            src="https://global-static.popmart.com/globalAdmin/1744278372912____4月11日____.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className="play-button absolute top-[calc(55%+10px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center cursor-pointer"
          onClick={playVideo}
        >
          <img
            ref={btnVideoRef}
            src="https://cdn-global.popmart.com/global-mobile/images/icons/video-play-icon.png"
            alt="Play"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[1.25vh]">
        <Button variant="destructive" className="shop-now-btn uppercase">
          Shop now
        </Button>
      </div>
    </div>
  );
};

export default SeriesFigures;