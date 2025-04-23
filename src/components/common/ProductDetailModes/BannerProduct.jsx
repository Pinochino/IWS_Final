import React from "react";

const BannerProduct = ({ images }) => {
  return (
    <div className="flex justify-center banner-product">
      <div className="mb-20">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              className="w-full h-auto"
              src={img}
              alt="logo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BannerProduct;
