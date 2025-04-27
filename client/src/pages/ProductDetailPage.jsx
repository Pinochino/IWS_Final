import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAPI } from "@/api/handleAPI";
import { getProductByIdStart, getProductByIdSuccess, getProductByIdFail } from "@/redux/reducers/ProductReducer";
import Spinner from "@/components/ui/spinner";
import CustomBreadcum from "@/components/common/ProductDetailModes/CustomBreadcum";
import SlideDetail from "@/components/common/ProductDetailModes/SlideDetail";
import ProductInformation from "@/components/common/ProductDetailModes/ProductInformation";
import NewArrivals, { arrivalImages } from "@/components/common/arrivals/NewArrivals";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading } = useSelector((state) => state.loading);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    setProduct(null); 
    const getProductDetail = async () => {
      dispatch(getProductByIdStart());
      try {
        const res = await handleAPI(`/api/products/${id}`);
        const result = res.data;
        if (result) {
          setProduct(result);
          dispatch(getProductByIdSuccess(result));
        }
      } catch (error) {
        dispatch(getProductByIdFail(error?.message));
        toast.error(error?.message || "Something went wrong");
      }
    };

    getProductDetail();
  }, [dispatch, id]); 

  return (
    <div className="flex justify-center w-fit lg:w-auto product-detail-page">
      {isLoading || !product ? ( 
        <div className="h-full min-h-[30rem]"><Spinner /></div>
      ) : (
        <div className="lg:w-[63.5%] w-[100%] detail-page">
          <CustomBreadcum name={product.name} />
          <div className="lg:flex justify-between flex-wrap gap-10 mb-20 flex-col lg:flex-row w-auto block">
            <div className="flex-[0.6]">
              <SlideDetail images={product.images || []} />
            </div>
            <div className="flex-[0.4] lg:block flex justify-center items-center w-[97%] product-infomation">
              <ProductInformation product={product} />
            </div>
          </div>
          <NewArrivals title={"you may also like"} images={arrivalImages} className="w-[90%] lg:w-auto mt-0 mx-auto ml-[3%] new-arrival" />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
