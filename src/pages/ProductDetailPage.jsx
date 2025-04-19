import NewArrivals, {
  arrivalImages,
} from "@/components/common/arrivals/NewArrivals";
import BannerProduct from "@/components/common/ProductDetailModes/BannerProduct";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import ProductInformation from "@/components/common/ProductDetailModes/ProductInformation";
import SlideDetail from "@/components/common/ProductDetailModes/SlideDetail";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncreaseQuanity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center">
      <div className=" w-[63.5%]">
        <CustomBreadcum />
        <div className="flex justify-between flex-nowrap gap-10 mb-20">
          <div className="  flex-[0.6]">
            {" "}
            <SlideDetail />
          </div>
          <div className="  flex-[0.4]">
            {" "}
            <ProductInformation />
          </div>
        </div>
        <BannerProduct />
        <NewArrivals title={"you may also like"} images={arrivalImages} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
