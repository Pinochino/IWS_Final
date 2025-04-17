import React from "react";

const CartItem = ({ img, name, price, outofstock = false }) => {
  return (
    <div  className="col-span-1">
      <div>
        <img src={img} alt="logo" />
      </div>
      <div className="flex flex-col text-sm ">
        <span className="uppercase text-[#EAB329] px-[0.41667vw] mt-[1.25vw]">
          pop mart
        </span>
        <span className="px-[0.41667vw] mt-[.625vw]">{name}</span>
      </div>
      <div className="px-[0.41667vw] mt-[.625vw] flex justify-between">
        <span className="text-[#D20075]">
          {price} <sup>đ</sup>
        </span>
      </div>
      <div className="flex justify-end">
        <i className="bx bx-right-arrow-alt"></i>
      </div>
    </div>
  );
};

export default CartItem;
