import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import { Skeleton } from "@/components/ui/skeleton";
import { fakeProducts } from "@/data/WebData";

export const arrivalImages = [
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

const NewArrivals = ({ title, layout = false }) => {
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="mb-20 w-[100%]">
      <div className="flex justify-between items-center mb-[1.66667vw] w-full ">
        <h5 className="uppercase text-[#E60021] font-bold lg:text-[1.66667vw] text-3xl">
          {title}
        </h5>
        <button>
          <Link className="flex items-center justify-center border-b-2 border-b-[#262626] h-4 cursor-pointer
          pb-2
          "
          to={'/collection/New Arrival'}
          >
            <span className="lg:text-xs text-2xl">More</span>
            <ChevronRight className="lg:w-[12px] w-[2rem]" />
          </Link>
        </button>
      </div>
      <Carousel className={'w-full Carousel1'}>
        <CarouselContent>
          {(isLoading ? Array.from({ length: 4 }) : fakeProducts).map(
            (data, index) => {
              return (
                <CarouselItem key={index} className="lg:basis-1/4 basis-1/3">
                  {isLoading ? (
                    <Skeleton className="h-[20rem] w-full rounded-lg bg-[#E0E0E0]" />
                  ) : layout ? (
                    <div className="bg-white hover:border-2">
                      <div className="w-auto lg:h-[16.75rem] card-item">
                        <img
                          alt={data.name || "Popmart product"}
                          src={data.thumbnail}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col text-xs font-bold my-4">
                        <span>{data.date}</span>
                        <span>{data.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#E60021]">
                          {data.price} <sup>₫</sup>
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full w-[2.08333vw] h-[2.08333vw]"
                        >
                          <i className="bx bx-bell"></i>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Link to={`/product/${data.id}`}>
                      <CartItem
                        img={data.thumbnail}
                        name={data.name}
                        price={data.price}
                      />
                    </Link>
                  )}
                </CarouselItem>
              );
            }
          )}
        </CarouselContent>

        <CarouselPrevious className={'-left-4 -translate-y-14' }/>
        <CarouselNext  className={'-right-4 -translate-y-14'}/>
      </Carousel>
    </div>
  );
};

export default NewArrivals;
