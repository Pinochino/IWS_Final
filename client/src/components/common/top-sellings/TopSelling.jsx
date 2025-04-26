import { Button } from "@/components/ui/button";
import React from "react";
import CartItem from "../cart-item/CartItem";
import {Link} from 'react-router-dom';
import { fakeProducts } from "@/data/WebData";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { handleAPI } from "@/api/handleAPI";
import { useDispatch } from "react-redux";
import { getAllProductsTopSellerFail, getAllProductsTopSellerStart, getAllProductsTopSellerSuccess } from "@/redux/reducers/ProductReducer";

const data = [
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
  {
    img: "https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp",
    name: "Lil Peach Riot: Loading! Series Figures",
    price: "280.000",
  },
];

const TopSelling = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const getAllProducts = async () => {
      dispatch(getAllProductsTopSellerStart())
      try {
        const productList = await handleAPI('/api/products/best-seller');
        const result = await productList.data;
        if (result) {
          setProducts(result.slice(0, 12)); 
          dispatch(getAllProductsTopSellerSuccess(result))
          console.log(result.slice(0, 12));
        }
      } catch (error) {
        dispatch(getAllProductsTopSellerFail(error?.message))
        toast.error(error);
      }
    };
    getAllProducts();
  }, [dispatch]);
  
  
  return (
    <div className="lg:mb-20 mb-15">
      <h2 className="uppercase lg:text-[1.66667vw] font-bold mb-[1.66667vw] text-5xl md:text-xl">
        top sellings
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 row-span-3 gap-7">
            {products.map((e, index) => {
                return (
                  <CartItem key={index} img={e.images?.[0].url} name={e.name} price={e.price}/>
                )
            })}
      </div>
      <div className="mt-10 flex justify-center ">
        <Button variant={'destructive'} className={'uppercase'}><Link to={'/collection/TOP SELLINGS'}>View more</Link></Button>
      </div>
    </div>
  );
};

export default TopSelling;
