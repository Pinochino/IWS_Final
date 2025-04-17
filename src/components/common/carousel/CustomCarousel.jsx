import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  return (
    <div className="relative w-[72rem] mx-auto overflow-hidden mb-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {imgs.map((src, i) => (
            <div key={i} className="flex-[0_0_100%]">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-[30rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CustomCarousel;
