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
import { addItemToCart } from "@/redux/reducers/CartReducer";
import AddQuantityBtn from "../AddQuantityBtn/AddQuantityBtn";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {Link} from 'react-router-dom';

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

const ProductInformation = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();

  const handleAddItemToCart = useCallback(() => {
    dispatch(addItemToCart());
    setMsg(true);
  }, [dispatch]);

  useEffect(() => {
    if (msg) {
      const timeout = setTimeout(() => {
        setMsg(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [msg]);

  return (
    <div className="">
      {msg && (
        <Alert className="mb-4 absolute right-6 max-w-[12%]  bg-[#333333] max-h-[5%] flex items-center -translate-y-10 transition-all duration-500 ease-in-out" >
          <AlertDescription className={'flex items-center justify-between'}>
            <span className="text-xs mr-6">Added to cart</span>
           <Link to={'/cart'}> <Button variant={'destructive'} className={'h-5 w-12'}>View</Button></Link>
          </AlertDescription>
        </Alert>
      )}
      <div className="flex items-center justify-between">
        <h3 className="text-[1.45833vw] text-[#000] font-bold">
          Peach Riot Witchy Punk Figures
        </h3>
        <i className="bx bx-heart text-xl"></i>
      </div>
      <span className="mt-[1.25vw] text-[#d2001e] text-[1.25vw]">
        1.520.000 <sup>đ</sup>
      </span>
      <div>
        <span className="text-base font-normal">Quantity</span>
        <AddQuantityBtn className={"mt-3"} />
      </div>
      <div className="flex gap-[0 .3125vw] justify-between items-center mt-5 pb-5 border-b-2 border-b-[#DDDDDD]">
        <Button
          className={
            "uppercase w-[11.5625vw] h-[3.125vw] text-white cursor-pointer font-bold text-[.83333vw]"
          }
          onClick={handleAddItemToCart}
        >
          add to cart
        </Button>
        <Button
          className={
            "uppercase w-[11.5625vw] h-[3.125vw] text-white cursor-pointer font-bold text-[.83333vw] bg-[#d2001e]"
          }
        >
          Buy now
        </Button>
      </div>
      {dataAccordion.map((item, index) => (
        <div key={index} className={"border-b-2 border-b-[#DDDDDD]"}>
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.data.map((line, i) => (
                  <span key={i} className="text-[.83333vw] font-normal">
                    {line}
                  </span>
                ))}
                <div className="flex justify-between">
                  {item.outlinedText.map((text, i) => (
                    <div key={i}>
                      <span className="text-[.83333vw] font-normal underline">
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
