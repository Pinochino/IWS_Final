import NewArrivals, {
  arrivalImages,
} from "@/components/common/arrivals/NewArrivals";
import BannerProduct from "@/components/common/ProductDetailModes/BannerProduct";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import ProductInformation from "@/components/common/ProductDetailModes/ProductInformation";
import SlideDetail from "@/components/common/ProductDetailModes/SlideDetail";
import Spinner from "@/components/ui/spinner";
import { fakeProducts } from "@/data/WebData";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  const { id } = useParams();
  const product = fakeProducts.find((item) => item.id === Number(id));

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);

    return () => clearTimeout(timer); // cleanup nếu component unmount
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      {isLoading ? (
        <div className="h-full min-h-[30rem]"><Spinner /></div>
      ) : (
        <div className=" w-[63.5%]">
          <CustomBreadcum name={product.name} />
          <div className="flex justify-between flex-nowrap gap-10 mb-20">
            <div className="flex-[0.6]">
              <SlideDetail images={product.images} />
            </div>
            <div className="flex-[0.4]">
              <ProductInformation />
            </div>
          </div>
          <BannerProduct images={product.details} />
          <NewArrivals title={"you may also like"} images={arrivalImages} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
