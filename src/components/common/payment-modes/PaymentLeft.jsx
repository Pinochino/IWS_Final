import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PaymentLeft = () => {
  return (
    <form className="space-y-5">
      <div className="flex flex-col">
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">
          Address Book:{" "}
        </h5>
        <div>
          <p className="text-[.625vw] text-[#010101] font-normal mb-1.5">
            You don‘t have saved address. To save time, please add your shipping
            address.
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="w-full border border-black text-black font-bold rounded-none text-[.9375vw] py-[.625vw] hover:bg-[#f5f5f5]"
              >
                Add a new address
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div>
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">
          Coupon:{" "}
        </h5>
        <div className="flex items-center">
          <Input
            type="email"
            placeholder="Email"
            className="w-full rounded-tr-none rounded-br-none border border-[#ccc] focus:outline-none focus:outline-0  focus:ring-0  "
          />
          <Button
            type="submit"
            className="bg-black text-white font-bold uppercase rounded-none text-[.9375vw] px-[2vw] py-[.625vw] hover:bg-[#333]"
          >
            Apply
          </Button>
        </div>
      </div>
      <div>
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">
          Add-on purchase:{" "}
        </h5>
        <div className="">
          <span className="text-[.83333vw] text-[#666] leading-[.83333vw] font-normal">
            Orders over 280.000 đ are eligible for purchase{" "}
          </span>
          <div className="flex gap-4 mt-2">
            <img
              className="max-w-[6rem] max-h-[6rem]"
              src="https://prod-eurasian-res.popmart.com/default/20250416_173858_765015____7_____1200x1200.jpg?x-oss-process=image/format,webp"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-[.78125vw] font-medium leading-[1.04167vw] mb-[.625vw] text-[#999]">
                LABUBU Lemon Tea Figure
              </span>
              <span className="text-[.78125vw] font-bold leading-[.78125vw] mb-[.625vw] text-[#999]">
                700.000 <sup>₫</sup>
              </span>
              <span className="cursor-pointer underline">views details</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">
          Billing address:
        </h5>
        <Sheet>
            <SheetTrigger asChild>
            <Button
          variant="outline"
          className="w-full border border-black text-black font-bold rounded-none text-[.9375vw] py-[.625vw] hover:bg-[#f5f5f5]"
        >
          Add a Billing adress
        </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
    
      </div>
      <Button variant="destructive" className={"uppercase w-full"}>
        Processed to pay
      </Button>
    </form>
  );
};

export default PaymentLeft;
