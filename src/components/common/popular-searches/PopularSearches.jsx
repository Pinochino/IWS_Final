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
     <h2 className="uppercase text-[1.66667vw] font-bold mb-[1.66667vw]">
        Popular searches
      </h2>
        <div className="flex space-x-6">
          {data.map((e, index) => {
            return (
              <Button key={index} className={'bg-[#f5f5f5] text-black hover:text-white'}>
                <Link to={`/${e}`}>{e}</Link>
              </Button>
            );
          })}
        </div>
  </div>
  );
};

export default PopularSearches;
