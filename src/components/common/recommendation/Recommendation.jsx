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
        img: 'https://global-static.popmart.com/globalAdmin/1744336725190____pc-hirono-2____.jpg?x-oss-process=image/format,webp',
        name: 'Hirono Shelter Series Figures',
    },
    {
        img: 'https://global-static.popmart.com/globalAdmin/1744336722233____pc-hirono-1____.jpg?x-oss-process=image/format,webp',
        name: 'Hirono Shelter Series Figures',
    },
    {
        img: 'https://global-static.popmart.com/globalAdmin/1744336728409____pc-hirono-3____.jpg?x-oss-process=image/format,webp',
        name: 'Hirono Shelter Series Figures',
    },
    {
        img: 'https://global-static.popmart.com/globalAdmin/1744336733187____pc-hirono-4____.jpg?x-oss-process=image/format,webp',
        name: 'Hirono Shelter Series Figures',
    },

]

const Recommendation = () => {
  return (
    <div className="mb-20">
      <h2 className="uppercase text-[1.66667vw] font-bold mb-[1.66667vw]">HIRONO Recommendation</h2>
      <Carousel>
        <CarouselContent>
         {images.map((data, index) => {
            return (
                <CarouselItem key={index} className={"lg:basis-1/3 sm:basis-1/2"}>
                    <img src={data.img} alt="logo"/>
                    <span className="text-sm leading-8">{data.name}</span>
                </CarouselItem>
            )
         })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Recommendation;
