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
    <div className="flex justify-center w-fit lg:w-auto product-detail-page">
      {isLoading ? (
        <div className="h-full min-h-[30rem]"><Spinner /></div>
      ) : (
        <div className="lg:w-[63.5%] w-[100%] detail-page">
          <CustomBreadcum name={product.name} />
          <div className="lg:flex justify-between flex-wrap gap-10 mb-20 flex-col lg:flex-row w-auto block ">
            <div className="flex-[0.6]">
              <SlideDetail images={product.images} />
            </div>
            <div className="flex-[0.4] lg:block flex justify-center items-center w-[97%] product-infomation">
              <ProductInformation />
            </div>
          </div>
          <BannerProduct images={product.details} />
          <NewArrivals title={"you may also like"} images={arrivalImages} className="w-[90%] lg:w-auto mt-0 mx-auto ml-[3%] new-arrival" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
