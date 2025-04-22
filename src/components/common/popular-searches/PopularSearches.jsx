import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const data = [
  "HIRONO",
  "Peach Riot",
  "Action Figure",
  "MEGA Collection",
  "NEW ARRIVAL",
  "Top Sellings",
  "MOLLY",
  "🔥CRYBABY",
];

const PopularSearches = () => {
  return (
    <div className="lg:mb-20 mb-15">
      <h2 className="uppercase lg:text-[1.66667vw] font-bold mb-[1.66667vw] text-5xl md:text-xl">
        Popular searches
      </h2>
      <div className="flex flex-wrap gap-4">
        {data.map((e, index) => {
          const isHiddenOnMobile = index >= 4 ? "hidden lg:inline-flex" : "";
          return (
            <Button
              key={index}
              className={`bg-[#f5f5f5] text-black hover:text-white ${isHiddenOnMobile} lg:w-auto lg:h-auto w-[20rem] h-[5rem]`}
            >
              <Link to={`/${e}`} className="lg:text-sm text-3xl">{e}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PopularSearches;
