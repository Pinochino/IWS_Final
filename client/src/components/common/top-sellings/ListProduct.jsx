import React, { useEffect, useState } from 'react';
import CartItem from '../cart-item/CartItem';
import { handleAPI } from '@/api/handleAPI';
import { toast } from 'react-toastify';

const ListProduct = ({ heading }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res;
        if (heading === 'TOP SELLINGS') {
          res = await handleAPI('/api/products/best-seller');
        } else if (heading === 'NEW ARRIVAL') {
          res = await handleAPI('/api/products/new-arrivals');
        } else {
          res = await handleAPI(`/api/products/collections/${heading}`);
        }

        const result = await res.data;
        setProducts(result);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, [heading]);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {products.map((product, index) => (
        <CartItem 
          key={index}
          img={product.images?.[0]?.url}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ListProduct;
