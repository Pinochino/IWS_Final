import React from "react";
import ListCharacters from "./ListCharacters";
import HeaderModes from "./HeaderModes";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import { useDispatch } from "react-redux";

{
  /* <Skeleton className="h-12 w-12 rounded-full" /> */
}
const HeaderLoading = () => {
  return (
    <div className="w-[92rem] h-[4.9rem] flex justify-between items-center flex-row ">
      <div className=" flex-[0.5] flex items-center">
        <Skeleton className="h-9 w-20 bg-[#E0E0E0] mr-5" />
        <div className="flex justify-around flex-[0.8]">
          {Array.from({ length: 5 }).map((_, index) => {
            return <Skeleton className="h-9 w-20 bg-[#E0E0E0]" key={index} />;
          })}
        </div>
      </div>
      <div className=" flex-[0.4]">
     <div className="flex justify-between">
     <Skeleton className="h-9 w-36 bg-[#E0E0E0] rounded-2xl"  />

     <div className="flex flex-row items-center ">
     <Skeleton className="h-9 w-28 bg-[#E0E0E0]"  />
      </div>
      <div className="flex items-center">
      <Skeleton className="h-9 w-28 bg-[#E0E0E0]"  />
      </div>
     </div>
      </div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.loading);

  
  useEffect(() => {
    // Giả lập delay 2 giây, bạn có thể thay bằng fetch API nếu cần
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer); // cleanup nếu component unmount
  }, [dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b-[1px] border-b-[#ddd]">
      <div className="flex justify-center items-center bg-[#FFFFFF] border-b-2 border-b-[#ddd] flex-row relative">
        {isLoading ? (
          <HeaderLoading />
        ) : (
          <div className="w-[92rem] h-[4.9rem] flex justify-between items-center flex-row ">
            <div className="flex-row  items-center flex-[0.5] ">
              <ListCharacters />
            </div>
            <div className="flex-[0.4] flex justify-between items-center">
              <HeaderModes />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
