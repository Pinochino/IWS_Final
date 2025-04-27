import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AddAddressDialog from "../address-diaglog/AddressDialog";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { handleAPI } from "@/api/handleAPI";
import { paymentFail, paymentStart, paymentSuccess } from "@/redux/reducers/PaymentReducer";

const PaymentLeft = () => {
  const { items } = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.login.user);
  const user1 = useSelector((state) => state.user.register.user);
  const userId = user || user1;
  const userIdExists = userId && userId.user;
  const userIdFinal = userIdExists ? userId.user._id : null;
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const handlePayment = async () => {
    if (!userIdFinal) {
      toast.error("User not found!");
      return;
    }

    dispatch(paymentStart());

    const newData = {
      user: userIdFinal,
      checkoutItems: items.items,
      shippingAddress: {
        address: shippingAddress.street,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
        country: shippingAddress.country,
      },
      paymentMethod: paymentMethod || "creditCard",
      totalPrice: items.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };
    

    try {
      const res = await handleAPI(`/api/checkout`, "POST", newData);
      const result = res.data;
      console.log("payment:", res);
      if (result) {
        dispatch(paymentSuccess(result));
        toast.success("Payment initiated successfully!");
      }
    } catch (error) {
      toast.error(error?.message || "An error occurred");
      dispatch(paymentFail(error?.message));
    }
  };

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      {/* Address Section */}
      <div className="flex flex-col">
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">
          Address Book:
        </h5>
        <div>
          <p className="text-[.625vw] text-[#010101] font-normal mb-1.5">
            You don‘t have a saved address. To save time, please add your shipping address.
          </p>
          {shippingAddress && shippingAddress.address ? (
  <div className="p-4 border border-black rounded-none">
    <p className="font-bold mb-2">Shipping Address:</p>
    <p>Address: {shippingAddress.address}</p>
    <p>City: {shippingAddress.city}, {shippingAddress.country}</p>
    <p>Postal Code: {shippingAddress.postalCode}</p>
  </div>
) : (
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
        <SheetTitle className="text-2xl mb-5">My Address</SheetTitle>
        <SheetDescription>
          <div className="flex justify-center items-center flex-col">
            <Button
              size="icon"
              variant="default"
              className="bg-[#F7F7F7] hover:bg-[#F7F7F7] rounded-2xl mb-10"
            >
              <i className="bx bx-map text-2xl text-[#010101]"></i>
            </Button>
            <p className="mb-20">
              You currently don't have any saved delivery addresses.
              Add an address here to be pre-filled for quicker checkout.
            </p>
          </div>
          <AddAddressDialog setShippingAddress={setShippingAddress} />
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
)}

        </div>
      </div>

      {/* Coupon Section */}
      <div>
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">Coupon:</h5>
        <div className="flex items-center">
          <Input
            type="email"
            placeholder="Email"
            className="w-full rounded-tr-none rounded-br-none border border-[#ccc] focus:outline-none focus:outline-0 focus:ring-0"
          />
          <Button
            type="submit"
            className="bg-black text-white font-bold uppercase rounded-none text-[.9375vw] px-[2vw] py-[.625vw] hover:bg-[#333]"
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Payment Method Section */}
      <div>
        <h5 className="text-[1.25vw] text-[#010101] mb-[1.14583vw] font-bold">Billing address:</h5>
        <div>
          <select
            className="w-full border border-[#ccc] rounded-none text-black text-[.9375vw] py-[.625vw] focus:outline-none focus:ring-0"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="" disabled>Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>
      </div>

      {/* Pay Button */}
      <Button
        variant="destructive"
        className="uppercase w-full"
        onClick={handlePayment}
      >
        Process to Pay
      </Button>
    </form>
  );
};

export default PaymentLeft;
