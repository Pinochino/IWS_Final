import { Button } from "@/components/ui/button";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartRight = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart.cart);
  const {quantity} = useSelector((state) => state.quantity);
  const {hidden} = useSelector((state) => state.hidden);
  
  return (
    <div className="bg-[#F5F5F5] flex flex-col p-[1.66668vw]">
    {hidden ? (  <>
        <div className="border-b-2 border-b-[#CBCBCB] space-y-3.5 pb-5">
        {items.items.map((e, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#010101]">Subtotal</span>
                <span className="text-[.78125vw] font-black">
                  0
                </span>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#010101]">Shipping</span>
          <span className="text-[.625vw] font-black">
            Calculated at next step
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[1.66667vw]">
        <h5 className="text-[#010101] leading-[.9375vw] text-[1.25vw] font-normal h-[.9375vw]">
          Total(0)
        </h5>
        <h5 className="text-[.1.5625vw] font-black">
          0 <sup>đ</sup> VND
        </h5>
      </div>
      <div className="mt-[1.35417vw]">
        <Link to={"/payment"}>
          <Button className={"uppercase w-full"} variant={"destructive"}>
            Check out
          </Button>
        </Link>
      </div></>) : (
      <>
        <div className="border-b-2 border-b-[#CBCBCB] space-y-3.5 pb-5">
        {items.items.map((e, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#010101]">Subtotal</span>
                <span className="text-[.78125vw] font-black">
                  {e.price} x {e.quantity}
                </span>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#010101]">Shipping</span>
          <span className="text-[.625vw] font-black">
            Calculated at next step
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[1.66667vw]">
        <h5 className="text-[#010101] leading-[.9375vw] text-[1.25vw] font-normal h-[.9375vw]">
          Total({items.items.length})
        </h5>
        <h5 className="text-[.1.5625vw] font-black">
          {items.totalPrice} <sup>đ</sup> VND
        </h5>
      </div>
      <div className="mt-[1.35417vw]">
        <Link to={"/payment"}>
          <Button className={"uppercase w-full"} variant={"destructive"}>
            Check out
          </Button>
        </Link>
      </div></>
    )}
    </div>
  );
};

export default CartRight;
