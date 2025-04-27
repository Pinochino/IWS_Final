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
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <div className="relative w-full max-w-[90rem] mx-auto overflow-hidden mb-4 sm:mb-6 lg:mb-10 aspect-[16/9]">
          <Skeleton className="h-full w-full bg-[#E0E0E0]" />
        </div>
      ) : (
        <div className="relative w-full max-w-[90rem] mx-auto overflow-hidden mb-4 sm:mb-6 lg:mb-10 aspect-[16/9]">
          <div className="overflow-hidden lg:mt-0 mt-10" ref={emblaRef}>
            <div className="flex">
              {imgs.map((src, i) => (
                <div key={i} className="flex-[0_0_100%]">
                  <img
                    src={src}
                    alt={`slide-${i}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/50 p-1 sm:p-2 rounded-full shadow hover:bg-white hover:bg-opacity-100 disabled:opacity-50 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-700" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/50 p-1 sm:p-2 rounded-full shadow hover:bg-white hover:bg-opacity-100 disabled:opacity-50 transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;