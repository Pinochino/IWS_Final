import NewArrivals, { arrivalImages } from "@/components/common/arrivals/NewArrivals";
import Banner from "@/components/common/banner/Banner";
import CustomCarousel from "@/components/common/carousel/CustomCarousel";
import Featured from "@/components/common/featured/Featured";
import SeriesFigures from "@/components/common/figures/SeriesFigures";
import PopFriend from "@/components/common/pop-friends/PopFriend";
import PopularSearches from "@/components/common/popular-searches/PopularSearches";
import Recommendation from "@/components/common/recommendation/Recommendation";
import TopSelling from "@/components/common/top-sellings/TopSelling";
import { featuredData } from "@/data/WebData";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[72rem]">
        <CustomCarousel />
        <NewArrivals title={'New Arrival'} images={arrivalImages}/>
        <Recommendation />
        <SeriesFigures />
        {featuredData.map((data, index) => {
          return <Featured key={index} imgs={data.imgs} title={data.title} />;
        })}
        <PopularSearches />
        <TopSelling />
        <PopFriend />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
