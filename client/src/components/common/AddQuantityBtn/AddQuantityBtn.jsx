import { Button } from "@/components/ui/button";
import { increaseQuantity, decreaseQuantity } from "@/redux/reducers/QuantityReducer";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const AddQuantityBtn = ({ className = "" }) => {
  const [quantity, setQuantity] = useState(1);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      dispatch(increaseQuantity(1)); // 👈 dispatch increase Redux store
      setDisabledBtn(false);
      return newQuantity;
    });
  }, [dispatch]);

  const handleDecreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      const newQuantity = prev - 1;
      if (newQuantity <= 1) {
        setDisabledBtn(true);
      }
      dispatch(decreaseQuantity(1)); // 👈 dispatch decrease Redux store
      return newQuantity;
    });
  }, [dispatch]);

  return (
    <div className={`flex space-x-3 items-center ${className}`}>
      <Button
        size={"icon"}
        className="bg-transparent border-1 border-black lg:w-7 lg:h-7 w-[10%] h-[100%] md:w-[10%] md:h-16"
        onClick={handleDecreaseQuantity}
        disabled={disabledBtn}
      >
        <i className="bx bx-minus text-black lg:text-base text-7xl md:text-5xl"></i>
      </Button>
      <span className="text-center lg:text-base text-6xl md:text-4xl">{quantity}</span>
      <Button
        size={"icon"}
        className="bg-transparent border-1 border-black lg:w-7 lg:h-7 w-[10%] h-[100%] md:w-[10%] md:h-16"
        onClick={handleIncreaseQuantity}
      >
        <i className="bx bx-plus text-black lg:text-base text-7xl md:text-5xl"></i>
      </Button>
    </div>
  );
};

export default AddQuantityBtn;
