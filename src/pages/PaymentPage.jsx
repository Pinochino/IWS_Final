import PaymentLeft from "@/components/common/payment-modes/PaymentLeft";
import PaymentRight from "@/components/common/payment-modes/PaymentRight";
import React from "react";

const PaymentPage = () => {
  return (
    <div className=" flex justify-center items-center mb-20">
      <div className="w-[63.2%]">
        <div className="flex mt-20 gap-10">
            <div className=" flex-1/2"><PaymentLeft /></div>
            <div className=" flex-1/3"><PaymentRight /></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
