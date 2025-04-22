import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336725190____pc-hirono-2____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336722233____pc-hirono-1____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336728409____pc-hirono-3____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1744336733187____pc-hirono-4____.jpg?x-oss-process=image/format,webp",
    name: "Hirono Shelter Series Figures",
  },
];

const Recommendation = () => {
  return (
    <div className="lg:mb-20 mb-15">
      <h2 className="uppercase lg:text-[1.66667vw] font-bold lg:mb-[1.66667vw] text-5xl mb-5 md:text-xl">
        HIRONO Recommendation
      </h2>
      <Carousel>
        <CarouselContent>
          {images.map((data, index) => {
            return (
              <CarouselItem key={index} className={"lg:basis-1/3 md:basis-1/3 basis-1/2"}>
                <img src={data.img} alt="logo" className="w-[100%]" />
                <span className="lg:text-sm mt-3 text-4xl line-clamp-1 md:text-xl">{data.name}</span>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className={"-left-4 -translate-y-8"} />
        <CarouselNext className={"-right-4 -translate-y-8"} />
      </Carousel>
    </div>
  );
};

export default Recommendation;
