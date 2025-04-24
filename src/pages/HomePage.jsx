import NewArrivals from "@/components/common/arrivals/NewArrivals";
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
import { useSelector } from "react-redux";

const HomePage = () => {
  return (
    <div className="lg:flex justify-center items-center w-fit mt-0 sm:mt-[3rem] homepage lg:w-auto">
      <div className="lg:max-w-[75%]  ml-[0.9%] lg:w-auto lg:ml-0 layout ">
        <CustomCarousel />
        <NewArrivals title={"New Arrival"} />
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
