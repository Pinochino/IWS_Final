import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addItemToCartSuccess } from "@/redux/reducers/CartReducer";
import { handleAPI } from "@/api/handleAPI";
import { toast } from "react-toastify";

const dataAccordion = [
  {
    title: "Details",
    data: ["Brand: POP MART", "Size: Height about 13cm", "Material: PVC/ABS"],
    outlinedText: ["View Product Details", "What's a blind box"],
  },
  {
    title: "SHIPPING & AFTER - SALES SERVICE",
    data: [
      `1. Shipping:
Standard Shipping (15-30 working days)
Expedited Shipping (3-7 working days)
...`,
    ],
    outlinedText: ["Read More"],
  },
];

const ProductInformation = ({ product }) => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.login.user);
  const user1 = useSelector((state) => state.user.register.user);

  const {quantity} = useSelector((state) => state.quantity);

  const handleAddItemToCart = async (productId) => {
    try {
      // Ensure that user and user._id are valid
      const currentUser = user || user1;
      if (!currentUser || !currentUser.user || !currentUser.user._id) {
        toast.error("User is not logged in");
        return;
      }
  
      const newData = {
        productId,
        quantity,
        userId: currentUser.user._id, // Ensure this value is valid
      };
  
      const res = await handleAPI(`/api/cart`, 'post', newData);
      const result = await res.data;
  
      if (result) {
        dispatch(addItemToCartSuccess(result));
        setMsg(true);  // Show notification
      }
    } catch (error) {
      console.error("Error adding item to cart", error);
      toast.error("Error adding item to cart");
    }
  };
  
  
  useEffect(() => {
    
    if (msg) {
      const timeout = setTimeout(() => {
        setMsg(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [msg]);

  return (
    <div className="lg:w-auto w-[94%]">
      {msg && (
        <Alert className="mb-4 absolute right-6 max-w-[12%]  bg-[#333333] max-h-[5%] flex items-center -translate-y-10 transition-all duration-500 ease-in-out">
          <AlertDescription className={"flex items-center justify-between"}>
            <span className="lg:text-xs mr-6 text-6xl">Added to cart</span>
            <Link to={"/cart"}>
              {" "}
              <Button variant={"destructive"} className={"h-5 w-12"}>
                View
              </Button>
            </Link>
          </AlertDescription>
        </Alert>
      )}
      <div className="flex items-center justify-between mb-10 lg:mb-0">
        <h3 className="lg:text-[1.45833vw] text-[#000] font-bold text-7xl md:text-3xl ">
          {product.name}
        </h3>
        <i className="bx bx-heart lg:text-xl text-7xl hidden lg:visible "></i>
      </div>
      <span className="mt-[1.25vw] text-[#d2001e] lg:text-[1.25vw] text-6xl md:text-3xl">
        {product.price} <sup>đ</sup>
      </span>
      <div className="lg:my-0 my-10">
        <span className="lg:text-base font-normal text-6xl md:text-3xl">
          Quantity
        </span>
        <AddQuantityBtn className={"lg:mt-3 mt-10 w-auto h-auto"} />
      </div>
      <div
        className="flex lg:flex-row gap-[0 .3125vw] lg:justify-between justify-center flex-col flex-wrap items-center mt-5 lg:pb-5 pb-10 border-b-2 border-b-[#DDDDDD]
      lg:space-y-0
      space-y-10
      
      "
      >
        <Button
          className={
            "uppercase lg:w-[11.5625vw] lg:h-[3.125vw] text-white cursor-pointer font-bold lg:text-[.83333vw] text-5xl w-[100%] h-auto md:text-3xl"
          }
          onClick={() => handleAddItemToCart(product._id)} 
        >
          add to cart
        </Button>
        <Link to={"/payment"} className="lg:w-auto w-[100%]">
          <Button
            className={
              "uppercase lg:w-[11.5625vw] lg:h-[3.125vw] w-[100%] h-auto text-white cursor-pointer font-bold lg:text-[.83333vw] bg-[#d2001e] text-5xl md:text-3xl"
            }
          >
            Buy now
          </Button>
        </Link>
      </div>
      {dataAccordion.map((item, index) => (
        <div key={index} className={"border-b-2 border-b-[#DDDDDD]"}>
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className={"lg:text-base text-6xl md:text-3xl"}>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className={"lg:block flex flex-col"}>
                {item.data.map((line, i) => (
                  <span
                    key={i}
                    className="lg:text-[.83333vw] font-normal text-5xl lg:mb-0 mb-10 md:text-3xl"
                  >
                    {line}
                  </span>
                ))}
                <div className="flex justify-between">
                  {item.outlinedText.map((text, i) => (
                    <div key={i}>
                      <span className="lg:text-[.83333vw] font-normal underline text-5xl md:text-3xl">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default ProductInformation;
