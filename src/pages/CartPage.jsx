import CartLeft from "@/components/common/cart-modes/CartLeft";
import CartRight from "@/components/common/cart-modes/CartRight";
import React from "react";

const CartPage = () => {
  return (
    <div className=" flex justify-center items-center mb-20">
      <div className="w-[63.2%]">
        <h2 className="text-[1.66667vw] text-[#000] font-black uppercase mt-10 mb-5">My cart</h2>
        <div className="flex">
            <div className=" flex-1/2"><CartLeft /></div>
            <div className=" flex-1/3"><CartRight /></div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
