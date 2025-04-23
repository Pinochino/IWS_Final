import React from "react";
import { useState } from "react";

const images = [
  "https://prod-eurasian-res.popmart.com/default/20241211_171454_221194____1_____1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp",
  "https://prod-eurasian-res.popmart.com/default/20241211_171454_127564____2_____1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp",
  "https://prod-eurasian-res.popmart.com/default/20241211_171454_080342____3_____1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp",
  "https://prod-eurasian-res.popmart.com/default/20241211_171454_506330____4_____1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp",
];

const SlideDetail = ({images}) => {
  const [img, setImg] = useState(images[0]);
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleClick = (index) => {
    setImg(images[index]);
  };
  return (
    <div className="lg:flex gap-2.5 block bg-red-400">
      <div className="lg:flex flex-col items-center sm:max-w-[4.4375rem] gap-3.5 hidden lg:visible">
        {images.map((img, index) => {
          return (
            <img
              src={img}
              key={index}
              className="max-w-[100%] max-h-[100%]"
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
      <div className="lg:flex-1 w-auto h-auto sm:w-[50%] sm:h-[50%] flex-none image-detail-product">
        <img
          src={img}
          alt="logo"
          className="w-full h-auto bg-[#F6F6F6] cursor-crosshair "
        />
      </div>
    </div>
  );
};

export default SlideDetail;
