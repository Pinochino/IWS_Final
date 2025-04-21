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
    <div className="mb-20">
      <h2 className="uppercase lg:text-[1.66667vw] font-bold mb-[1.66667vw] text-3xl">
        Popular searches
      </h2>
      <div className="flex flex-wrap gap-4">
        {data.map((e, index) => {
          const isHiddenOnMobile = index >= 4 ? "hidden lg:inline-flex" : "";
          return (
            <Button
              key={index}
              className={`bg-[#f5f5f5] text-black hover:text-white ${isHiddenOnMobile} lg:w-auto lg:h-auto w-[15rem] h-[5rem]`}
            >
              <Link to={`/${e}`} className="lg:text-sm text-2xl">{e}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PopularSearches;
