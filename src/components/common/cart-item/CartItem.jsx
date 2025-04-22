import React from "react";

const CartItem = ({ img, name, price, outofstock = false }) => {
  return (
    <div className="col-span-1">
      <div className="group bg-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#CCCCCC">
        <div className="aspect-square overflow-hidden">
          <img
            src={img}
            alt="logo"
            className="w-full h-auto  object-cover transition-transform duration-300 group-hover:scale-110 bg-[#F6F6F6]"
          />
        </div>
        <div className="p-4 text-sm">
          <span className="uppercase text-[#EAB329] tracking-wide lg:text-xs text-2xl">
            pop mart
          </span>
          <div className="mt-1 font-medium text-gray-800 lg:text-sm text-base line-clamp-1">{name}</div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-[#D20075] font-semibold lg:text-sm text-base">
              {price}
              <sup>đ</sup>
            </span>
            <i className="bx bx-right-arrow-alt text-lg text-gray-400 group-hover:text-black transition" />
          </div>
          {outofstock && (
            <div className="mt-2 text-xs text-red-500 font-semibold">
              Hết hàng
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
