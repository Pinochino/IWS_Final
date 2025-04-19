import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { removeItemFromCart } from "@/redux/reducers/CartReducer";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const CartLeft = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = useCallback(() => {
    dispatch(removeItemFromCart());
    setMsg(true);
  }, [dispatch]);


  

  return (
    <div>
      <div className="flex items-center space-x-2 mb-5">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Select all
        </label>
      </div>
      <div className="flex">
        <Checkbox className={"mr-4"} />
        <div className="flex  justify-between">
          <img
            className="max-w-[12.4375rem] max-h-[12.3475rem] mr-3"
            src="https://prod-eurasian-res.popmart.com/default/20250415_182606_284393____9_____1200x1200.jpg?x-oss-process=image/format,webp"
            alt="logo"
          />
          <div className="flex flex-col">
            <h5 className="line-clamp-2 w-auto max-h-[4.375vw] text-[.9375vw] font-medium ">
              Twinkle Twinkle Be a Little Star Series Figures
            </h5>
            <span className="text-[#666] font-normal text-[.9375vw] mt-[.3125vw]">
              Single Box
            </span>
            <span className="mt-[1.5625vw] font-medium leading-[1.25vw] text-[#000] mb-16">
              280.000 <sup>đ</sup>
            </span>
            <div className="flex justify-between items-center">
              <AddQuantityBtn className={"mt-0"} />
              <span
                className="uppercase text-[.78125vw] leading-[.9375vw] underline cursor-pointer"
                onClick={handleRemoveItem}
              >
                remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLeft;
