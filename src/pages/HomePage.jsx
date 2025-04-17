import NewArrivals from "@/components/common/arrivals/NewArrivals";
import CustomCarousel from "@/components/common/carousel/CustomCarousel";
import Featured from "@/components/common/featured/Featured";
import SeriesFigures from "@/components/common/figures/SeriesFigures";
import Recommendation from "@/components/common/recommendation/Recommendation";
import { featuredData } from "@/data/WebData";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex bg-green-500 justify-center items-center ">
      <div className="w-[72rem]">
        <CustomCarousel />
        <NewArrivals />
        <Recommendation />
        <SeriesFigures />
        {featuredData.map((data, index) => {
          console.log(data.imgs);
          return <Featured key={index} imgs={data.imgs} title={data.title} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
