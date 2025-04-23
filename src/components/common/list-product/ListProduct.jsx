import React from "react";
import CartItem from "../cart-item/CartItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

const ListProduct = () => {
  return (
    <div className="flex-[0.8] lg:max-w-[75%] w-auto mb-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 row-span-5 gap-7 mb-10">
        {fakeProducts.map((e, index) => {
          return (
            <CartItem key={index} img={e.thumbnail} name={e.name} price={e.price} />
          );
        })}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className={'bg-black text-white'}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ListProduct;
