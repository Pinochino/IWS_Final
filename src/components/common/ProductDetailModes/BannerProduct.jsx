import React from "react";

const BannerProduct = ({ images }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-20">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              className="max-h-[53rem] w-full"
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
