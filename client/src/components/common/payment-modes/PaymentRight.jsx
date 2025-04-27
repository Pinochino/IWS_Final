import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const PaymentRight = () => {
  const [data, setData] = useState([]);

  const { items } = useSelector((state) => state.cart.cart);
  console.log(items.items[0]);
  const {payment} = useSelector((state) => state.payment);

  return (
    <div className="bg-[#F5F5F5] flex flex-col p-[1.66668vw]">
     {!payment ? (
        <>
         {items.items.map((e, index) => {
        return (
          <>
            <div className="border-b-2 border-b-[#CBCBCB] space-y-3.5 pb-5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#010101]">Subtotal</span>
                <span className="text-[.78125vw] font-black">
                  {e.price} <sup>đ</sup> VND
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#010101]">Shipping</span>
                <span className="text-[.625vw] font-black">
                  10.000 <sup>đ</sup>
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
              <div className="flex flex-row">
                <span
                  className="uppercase text-[.78125vw] text-[#010101] leading-[.78125vw]
        font-medium mr-[.41667vw]
        "
                >
                  YOUR ORDER{" "}
                </span>
                <p className="uppercase text-[.78125vw] leading-[.78125vw] text-[#010101]">
                  {items.items.length} items
                </p>
              </div>
              <div className="flex mt-1.5">
                <img
                  className="max-w-[6rem] max-h-[6rem]"
                  src={e.image}
                  alt=""
                />
                <div className="flex flex-col">
                  <h5 className="text-[.78125vw] leading-[1.04167vw] text-[#010101] font-medium line-clamp-2 text-ellipsis mb-1.5">
                    Twinkle Twinkle Be a Little Star Series - Plush Pendant
                    Blind Box
                  </h5>
                  <span className="text-[.78125vw] text-[#666] font-normal mb-1.5">
                    Single Box
                  </span>
                  <div className="flex justify-between">
                    <span className="font-bold text-[.78125vw] text-[#010101]">
                      {e.price} <sup>₫</sup>
                    </span>
                    <span className="text-[.78125vw] font-normal text-[#010101]">
                      QTY: {e.quantity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}</>
     ) : (
       
        <>
        <div className="border-b-2 border-b-[#CBCBCB] space-y-3.5 pb-5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#010101]">Subtotal</span>
            <span className="text-[.78125vw] font-black">
              0 <sup>đ</sup> VND
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#010101]">Shipping</span>
            <span className="text-[.625vw] font-black">
              10.000 <sup>đ</sup>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[1.66667vw]">
          <h5 className="text-[#010101] leading-[.9375vw] text-[1.25vw] font-normal h-[.9375vw]">
            Total({items.items.length})
          </h5>
          <h5 className="text-[.1.5625vw] font-black">
            0 <sup>đ</sup> VND
          </h5>
        </div>
        <div className="mt-[1.35417vw]">
          <div className="flex flex-row">
            <span
              className="uppercase text-[.78125vw] text-[#010101] leading-[.78125vw]
    font-medium mr-[.41667vw]
    "
            >
              YOUR ORDER{" "}
            </span>
            <p className="uppercase text-[.78125vw] leading-[.78125vw] text-[#010101]">
              0 items
            </p>
          </div>
          <div className="flex mt-1.5">
            <div className="flex flex-col">
             
              <div className="flex justify-between">
                <span className="font-bold text-[.78125vw] text-[#010101]">
                  0 <sup>₫</sup>
                </span>
                <span className="text-[.78125vw] font-normal text-[#010101]">
                  QTY: 0
                </span>
              </div>
            </div>
          </div>
        </div>
      </>  
          )}
    </div>
  );
};

export default PaymentRight;
