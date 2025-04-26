import ListProduct from '@/components/common/list-product/ListProduct';
import CustomBreadcum from '@/components/common/ProductDetailModes/CustomBreadcum';
import SideCollection from '@/components/common/side-collection/SideCollection';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { handleAPI } from '@/api/handleAPI';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'react-toastify';

const CollectionPage = () => {
  const { heading } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchProductsByCollection = async () => {
      setLoading(true);
      try {
        let path = '';
        if (heading === 'New Arrival') {
          path = '/api/products/new-arrivals';
        } else if (heading === 'TOP SELLINGS') {
          path = '/api/products/best-seller';
        } else {
          path = `/api/products/collections/${heading}`;
        }

        const res = await handleAPI(path);
        const result = res.data;
        setProducts(result);
      } catch (error) {
        toast.error("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCollection();
  }, [heading]);

  // ⚡ lọc sản phẩm theo category
  const filteredProducts = selectedCategories.length === 0
    ? products
    : products.filter(product =>
        selectedCategories.includes(product.category?.name)
      );

  return (
    <div>
      <div className="flex ml-15">
        <CustomBreadcum name={heading} />
      </div>
      <div className="flex justify-center items-center flex-col flex-wrap lg:w-auto w-[400%] collection-page">
        <h2 className="uppercase text-[2rem] font-bold mt-[1.45833vw] mb-[2.5vw]">{heading}</h2>
        <div className="w-[94%] lg:flex justify-between block collection-1">
          <SideCollection
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
          {
            loading 
            ? <Skeleton className="w-full h-[500px] rounded-md" />
            : <ListProduct products={filteredProducts} />
          }
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
