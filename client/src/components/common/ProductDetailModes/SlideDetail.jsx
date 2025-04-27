import React, { useState, useEffect } from "react";

const SlideDetail = ({ images }) => {
  const [img, setImg] = useState("");
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      setImg(images[0].url);
    }
  }, [images]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleClick = (index) => {
    if (Array.isArray(images)) {
      setImg(images[index].url);
    }
  };

  return (
    <div className="lg:flex gap-2.5 block">
      {/* Thumbnail images */}
      <div className="lg:flex flex-col items-center sm:max-w-[4.4375rem] gap-3.5 hidden lg:visible">
        {Array.isArray(images) && images.map((item, index) => (
          <img
            key={item._id || index}
            src={item.url}
            className="max-w-[100%] max-h-[100%] cursor-pointer"
            onClick={() => handleClick(index)}
            alt={`Thumbnail ${index}`}
          />
        ))}
      </div>

      {/* Main image */}
      <div className="lg:flex-1 w-auto h-auto sm:w-[50%] sm:h-[50%] flex-none image-detail-product">
        {img && (
          <img
            src={img}
            alt="Product"
            onMouseMove={handleMouseMove}
            style={{ backgroundPosition }}
            className="w-full h-auto bg-[#F6F6F6] cursor-crosshair"
          />
        )}
      </div>
    </div>
  );
};

export default SlideDetail;
