import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  "https://prod-out-res.popmart.com/cms/RANA_612caed7f1.jpg?updated_at=2023-03-07T09:18:57.220Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
  "https://prod-out-res.popmart.com/cms/BEARFOOT_546df771e3.jpg?updated_at=2023-03-07T09:18:57.408Z?x-oss-process=image/format,webp",
];

const PopFriend = () => {
  return (
    <div className="mb-30">
      <div>
        <h2 className="uppercase text-[1.66667vw] font-bold mb-[1.66667vw]">
          top sellings
        </h2>
        <div></div>
      </div>
      <Carousel opts={{ align: "start", slidesToScroll: 4, loop: true }}>
       
        <CarouselContent>
          {data.map((e, index) => {
            return (
              <CarouselItem key={index} className="basis-1/4">
                <img src={e} alt="logo" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
           <CarouselPrevious />
           <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PopFriend;
