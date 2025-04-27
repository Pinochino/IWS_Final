import CartLeft from "@/components/common/cart-modes/CartLeft";
import CartRight from "@/components/common/cart-modes/CartRight";
import React, { useState } from "react";

const CartPage = () => {
  const [products, setProducts] = useState([]);

  const handleSelectAll = () => {
    const allSelected = products.every((product) => product.selected);
    setProducts(products.map((product) => ({ ...product, selected: !allSelected })));
  };

  return (
    // Tùy chọn: Thêm nền nhẹ cho trang, ví dụ bg-gray-50
    <div className="bg-white md:bg-gray-50 py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giảm độ đậm của tiêu đề, thêm tracking */}
        <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold uppercase tracking-wide mb-6 md:mb-8">
          My Cart
        </h2>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10"> {/* Tăng gap */}
          {/* Phần giỏ hàng bên trái */}
          <div className="w-full md:flex-[0.65] lg:flex-[0.6]"> {/* Điều chỉnh flex-basis nếu cần */}
            <CartLeft />
          </div>
          {/* Phần tóm tắt đơn hàng bên phải */}
          <div className="w-full md:flex-[0.35] lg:flex-[0.4]"> {/* Điều chỉnh flex-basis nếu cần */}
            <CartRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;