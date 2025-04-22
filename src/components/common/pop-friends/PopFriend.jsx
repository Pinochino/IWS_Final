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
    <div className="lg:mb-30 mb-15">
      <div>
        <h2 className="uppercase lg:text-[1.66667vw] font-bold mb-[1.66667vw] text-5xl md:text-xl">
          top buyers
        </h2>
        <div></div>
      </div>
      <Carousel opts={{ align: "start", slidesToScroll: 4, loop: true }}>
        <CarouselContent>
          {data.map((e, index) => {
            return (
              <CarouselItem key={index} className="lg:basis-1/4 md:basis-1/3 basis-1/2">
                <img src={e} alt="logo" className="w-full h-full" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className={"-left-4 -translate-y-5"} />
        <CarouselNext className={"-right-4 -translate-y-5"} />
      </Carousel>
    </div>
  );
};

export default PopFriend;
