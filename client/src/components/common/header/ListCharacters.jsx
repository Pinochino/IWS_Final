import { openMenu, closeMenu } from "@/redux/reducers/DropdownReducer";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterHover from "./CharacterHover";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const items = [
  { title: "New & Feature", layout: "one", slice: 4 },
  { title: "SERIES", layout: "two" },
  { title: "MEGA", layout: "three", slice: 5 },
  { title: "TYPES", layout: "three", slice: 4 },
  { title: "ACCESSORIES", layout: "three", slice: 4 },
];

const images = [
  {
    img: "https://prod-eurasian-res.popmart.com/default/20240731_172225_989554____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Hirono",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1745376060651____mob-the-monsters-6____.jpg?x-oss-process=image/format,webp",
    name: "Hiro",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1745376067807____mob-the-monsters-9____.jpg?x-oss-process=image/format,webp",
    name: "Kere",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1745376073644____mob-the-monsters-8____.jpg?x-oss-process=image/format,webp",
    name: "Shina",
  },
  {
    img: "https://global-static.popmart.com/globalAdmin/1745376096905____mob-the-monsters-10____.jpg?x-oss-process=image/format,webp",
    name: "Techo",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241021_163040_792398____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Baku",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20240930_151942_982117____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Shimo",
  },
  {
    img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1714095999450____%E6%9C%AA%E6%A0%87%E9%A2%98-1-03____.png?x-oss-process=image/format,webp",
    name: "Shinpai",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20240926_171307_637351____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Krik",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20240716_152330_624973____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Nullder",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20240914_164116_993008____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Labunto",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20240903_143428_771783____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Fire",
  },
];

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
const ListCharacters = () => {
  const [width] = useWindowSize();

  const visibleItems = width <= 1024 ? items.slice(0, 3) : items;

  const dispatch = useDispatch();
  const { isOpen, activeMenu } = useSelector((state) => state.dropdown);

  const handleMouseEnter = (menu) => {
    dispatch(openMenu(menu.title));
  };

  const handleMouseLeave = () => {
    dispatch(closeMenu());
  };

  const activeItem = items.find((item) => item.title === activeMenu);

  return (
    <div
      className="flex flex-row items-center "
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/">
        <img
          src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
          alt="logo"
          className="lg:w-[54%] lg:h-[1.75rem] mr-10 w-[1rem] h-[1rem]"
        />
      </Link>

      <div className="flex gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="text-sm font-medium px-4 py-2 cursor-pointer transition-all duration-500 ease-in-out delay-300"
            onMouseEnter={() => handleMouseEnter(item)}
          >
            <span className="hover:text-[#D2001e]"> {item.title}</span>
          </div>
        ))}
      </div>

      {/* Hiển thị dropdown theo layout riêng */}
      {isOpen && activeItem && (
        <div className="absolute top-full left-0   bg-white shadow-lg p-6 z-50 w-screen border-t-[#ddd] border-t-2  transition-opacity duration-1000 ease-in-out delay-700">
         <Link to={"/collection/New Arrival"}>
            <CharacterHover
              name={activeItem.title}
              imgs={images}
              layoutType={activeItem.layout}
              slice={activeItem.slice}
            />
         </Link>
        </div>
      )}
    </div>
  );
};

export default ListCharacters;
