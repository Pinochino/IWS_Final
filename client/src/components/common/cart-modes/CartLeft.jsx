import { Checkbox } from "@/components/ui/checkbox";
import React, { useState, useEffect } from "react";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleAPI } from "@/api/handleAPI";
import {
  fetchCartFail,
  fetchCartStart,
  fetchCartSuccess,
  removeItemFromCartFail,
  removeItemFromCartStart,
  removeItemFromCartSuccess,
} from "@/redux/reducers/CartReducer";
import { useSelector } from "react-redux";
import { useCallback } from "react";

const CartLeft = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); 
  const [isSelectAll, setIsSelectAll] = useState(false); 

  const user = useSelector((state) => state.user.login.user);
  const user1 = useSelector((state) => state.user.register.user);

  const userId = user ? user : user1 ? user1 : null;
  const a = userId.user._id;

  const handleSelectAll = (checked) => {
    setIsSelectAll(checked);

    if (checked) {
      const allIds = items.map((item) => item._id); // Lấy toàn bộ id sản phẩm
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleRemoveItem = useCallback(
    async (productId) => {
      if (!productId) {
        console.error("Product ID is missing");
        toast.error("Product ID is missing");
        return;
      }
      const b = a.toString()
      if (!user || !a) {
        console.error("User or User ID is missing");
        toast.error("User ID is missing. Please log in.");
        return;
      }
  
      dispatch(removeItemFromCartStart());
  
      try {
        // Ensure that both productId and userId are valid
        const productIdString = productId.toString();
  
        const res = await handleAPI(`/api/cart/${productIdString}/${b}`, "delete");
        const result = await res.data;
  
        if (result) {
          dispatch(removeItemFromCartSuccess(result));
        }
      } catch (error) {
        dispatch(removeItemFromCartFail(error?.message));
        toast.error(error?.message || "An error occurred");
      }
    },
    [a, dispatch, user]
  );
  
  

  useEffect(() => {

    if (!userId) {
      toast.error("Please log in to view your cart.");
      return;
    }

    const handleGetAllItems = async () => {
      dispatch(fetchCartStart());
      try {
        console.log(userId);
        const res = await handleAPI(`/api/cart/${a}`);
        const result = await res.data;
        console.log("Cart: ", result);
        if (result) {
          setItems(result.items);
          dispatch(fetchCartSuccess(result));
        }
      } catch (error) {
        dispatch(fetchCartFail(error?.message));
        toast.error(error?.message || "An error occurred");
      }
    };

    handleGetAllItems();
  }, [a, dispatch, user, user1, userId]);
  // Re-run effect when userId changes
  const handleItemSelect = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId); // Remove item if already selected
      } else {
        return [...prevSelectedItems, itemId]; // Add item if not selected
      }
    });
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-5">
        <Checkbox
          id="terms"
          checked={isSelectAll}
          onCheckedChange={handleSelectAll}
        />

        <label
          htmlFor="terms"
          className="lg:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-6xl"
        >
          Select all
        </label>
      </div>
      {Array.from(items).map((e, index) => {
        console.log('product id: ', e.productId);
        return (
          <div className="flex" key={index}>
            <Checkbox
              className="mr-4"
              checked={selectedItems.includes(e.productId)}
              onCheckedChange={() => handleItemSelect(e.productId)}
            />

            <div className="flex justify-between flex-wrap lg:flex-row flex-col cart-left mb-10">
              <img
                className="lg:w-[5rem] lg:h-[5rem] w-auto h-auto mr-3"
                src={e.image}
                alt="logo"
              />
              <div className="flex flex-col cart-left-detail">
                <h5 className="line-clamp-2 w-auto max-h-[4.375vw] lg:text-[.9375vw] font-medium ">
                  {e.name}
                </h5>
                <span className="text-[#666] font-normal lg:text-[.9375vw] mt-[.3125vw] text-6xl">
                  Single Box
                </span>
                <span className="mt-[1.5625vw] font-medium leading-[1.25vw] text-[#000] mb-16 lg:text-base text-6xl">
                  {e.price} <sup>đ</sup>
                </span>
                <div className="flex justify-between items-center">
                  <span
                    className="uppercase lg:text-[.78125vw] leading-[.9375vw] underline cursor-pointer text-4xl"
                    onClick={() => handleRemoveItem(e.productId)}
                  >
                    remove
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartLeft;
