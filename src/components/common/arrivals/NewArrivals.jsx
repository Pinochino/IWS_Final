import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const images = [
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_114800_150812____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_101451_021330____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_112327_064731____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250416_100303_276638____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20250415_155736_903426____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    date: "Apr 18 09:00",
    name: "hellow",
    price: "630.000",
  },
];
const NewArrivals = () => {
  return (
    <div className="bg-blue-500 mb-20">
      <div className="flex justify-between items-center mb-[1.66667vw]">
        <h5 className="uppercase text-[#E60021] font-bold text-[1.66667vw] ">
          New Arrivals
        </h5>
        <button>
          <Link className="flex items-center justify-center border-b-2 border-b-[#262626] h-4 cursor-pointer">
            <span className="text-xs">More</span>
            <ChevronRight className="w-[12px]" />
          </Link>
        </button>
      </div>
      <Carousel>
        <CarouselContent>
          {images.map((data, index) => {
            return (
              <CarouselItem key={index} className={"lg:basis-1/4 sm:basis-1/2"}>
                <div className="bg-white">
                    <div className="w-auto h-[16.75rem]">
                        <img alt="logo" src={data.img} className="w-auto h-auto"/>
                    </div>
                    <div className={'flex flex-col text-xs font-bold my-4'}>
                        <span >{data.date}</span>
                        <span >{data.name}</span>
                    </div>
                    <div className={'flex justify-between items-center'}>
                        <span className="text-[#E60021]">{data.price } <sup>₫</sup></span>
                        <Button size={'icon'} variant={'outline'} className={'rounded-[50%] flex justify-center items-center w-[2.08333vw] h-[2.08333vw]'}><i className="bx bx-bell "></i></Button>
                    </div>
                </div>
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

export default NewArrivals;
