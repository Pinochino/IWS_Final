import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.45833vw] text-[#000] font-bold">Peach Riot Witchy Punk Figures</h3>
        <i className="bx bx-heart text-xl" ></i>
      </div>
      <span className="mt-[1.25vw] text-[#d2001e] text-[1.25vw]">
        1.520.000 <sup>đ</sup>
      </span>
      <div>
        <span className="text-base font-normal">Quantity</span>
        <div className="flex space-x-3 items-center mt-3">
          <Button size={"icon"} className={'bg-transparent border-1 border-black w-7 h-7'}>
            <i className="bx bx-minus text-black"></i>
          </Button>
          <span>1</span>
          <Button size={"icon"} className={'bg-transparent border-1 border-black w-7 h-7'}>
            <i className="bx bx-plus text-black"></i>
          </Button>
        </div>
      </div>
      <div className="flex gap-[0 .3125vw] justify-between items-center mt-5 pb-5 border-b-2 border-b-[#DDDDDD]">
        <Button className={"uppercase w-[11.5625vw] h-[3.125vw] text-white cursor-pointer font-bold text-[.83333vw]"}>add to cart</Button>
        <Button className={"uppercase w-[11.5625vw] h-[3.125vw] text-white cursor-pointer font-bold text-[.83333vw] bg-[#d2001e]"}>Buy now</Button>
      </div>
      {dataAccordion.map((item, index) => (
       <div key={index} className={'border-b-2 border-b-[#DDDDDD]'}>
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${index}`} >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.data.map((line, i) => (
                  <span key={i} className="text-[.83333vw] font-normal">{line}</span>
                ))}
                <div className="flex justify-between">
                  {item.outlinedText.map((text, i) => (
                    <div key={i}>
                      <span className="text-[.83333vw] font-normal underline">{text}</span>
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
