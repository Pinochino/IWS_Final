import { Button } from "@/components/ui/button";
import React from "react";
import CartItem from "../cart-item/CartItem";
import {Link} from 'react-router-dom';
import { fakeProducts } from "@/data/WebData";

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
  return (
    <div className="mb-20">
      <h2 className="uppercase text-[1.66667vw] font-bold mb-[1.66667vw]">
        top sellings
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 row-span-3 gap-7">
            {fakeProducts.map((e, index) => {
                return (
                  <CartItem key={index} img={e.thumbnail} name={e.name} price={e.price}/>
                )
            })}
      </div>
      <div className="mt-10 flex justify-center ">
        <Button variant={'destructive'} className={'uppercase'}><Link to={'/collection'}>View more</Link></Button>
      </div>
    </div>
  );
};

export default TopSelling;
