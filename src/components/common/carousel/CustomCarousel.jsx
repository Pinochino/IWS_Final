import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";

const imgs = [
  "https://global-static.popmart.com/globalAdmin/1744284374147____pc-1-3____.jpg?x-oss-process=image/format,webp",
  "https://global-static.popmart.com/globalAdmin/1744276297768____pc英文购买____.jpg?x-oss-process=image/format,webp",
  "https://global-static.popmart.com/globalAdmin/1744191510868____pc%E8%8B%B1%E6%96%87%E8%B4%AD%E4%B9%B0____.jpg?x-oss-process=image/format,webp",
  "https://global-static.popmart.com/globalAdmin/1744336373799____pc-1440_600____.jpg?x-oss-process=image/format,webp",
];

const CustomCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();


    useEffect(() => {
      // Giả lập delay 2 giây, bạn có thể thay bằng fetch API nếu cần
      const timer = setTimeout(() => {
        dispatch(setSkeleton());
      }, 2000);
  
      return () => clearTimeout(timer); // cleanup nếu component unmount
    }, [dispatch]);
return (
  <div >
    {isLoading ? (
      <div className="relative w-full sm:w-[72rem] mx-auto overflow-hidden lg:mb-20 mb-7 h-[15rem] sm:h-[30rem]">
        <Skeleton className="h-full w-full bg-[#E0E0E0]" />
      </div>
    ) : (
      <div  className="relative w-fit lg:w-[100%%] mx-auto overflow-hidden lg:mb-20 mb-10 h-auto sm:min-h-[16rem]">
        <div className="overflow-hidden lg:mt-0 mt-[5rem]" ref={emblaRef}>
          <div className="flex">
            {imgs.map((src, i) => (
              <div key={i} className="flex-[0_0_100%]">
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="w-full h-full  lg:object-cover  min-h-[16rem] "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons only visible on sm and up */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    )}
  </div>
);

};

export default CustomCarousel;
