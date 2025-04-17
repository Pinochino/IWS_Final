import { openMenu, toggleMenu } from "@/redux/reducers/DropdownReducer";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const items = ["New & Feature", "SIRIES", "MEGA", "TYPES", "ACCESSORIES"];
const data = [{
  'New & Featured': [
    {

    }
  ]
}]

const images = [
  {
      img: 'https://global-static.popmart.com/globalAdmin/1744336725190____pc-hirono-2____.jpg?x-oss-process=image/format,webp',
      name: 'Hirono Shelter Series Figures',
  },
  {
      img: 'https://global-static.popmart.com/globalAdmin/1744336722233____pc-hirono-1____.jpg?x-oss-process=image/format,webp',
      name: 'Hirono Shelter Series Figures',
  },
  {
      img: 'https://global-static.popmart.com/globalAdmin/1744336728409____pc-hirono-3____.jpg?x-oss-process=image/format,webp',
      name: 'Hirono Shelter Series Figures',
  },
  {
      img: 'https://global-static.popmart.com/globalAdmin/1744336733187____pc-hirono-4____.jpg?x-oss-process=image/format,webp',
      name: 'Hirono Shelter Series Figures',
  },

]

const ListCharacters = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.dropdown);

  const handleClick = () => {
    console.log('isLIC');
    dispatch(toggleMenu());
  }
  return (
    <div className="flex flex-row items-center">
      <div>
        <img
          src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
          alt="logo"
          className="w-[5.5rem] h-[1.75rem] mr-10"
        />
      </div>
      <div className="bg-amber-400 flex flex-row justify-between flex-[0.8]">
        {items.map((item, index) => {
          return (
            <button key={index} className="bg-amber-300 text-sm font-medium cursor-pointer" onClick={handleClick} >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ListCharacters;
