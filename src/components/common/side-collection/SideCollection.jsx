import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const categories = [
  "Blind Box",
  "Figurine",
  "POP BLOCKS",
  "Plush Dolls",
  "MEGA 100%",
  "Others",
];
const SideCollection = () => {
  const imageSrc = 'https://prod-eurasian-res.popmart.com/default/20241030_141739_676860____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp';
  const name = 'Figure'
  return (
    <div className="bg-yellow-500 flex-[0.2] max-w-[12.4375rem]">
      <div className="border-b-2 border-b-gray-300 pb-2">
        <h5 className="text-[.83333vw] text-[#000] font-bold mb-4">Category</h5>
        {categories.map((item, index) => {
          return (
            <div className="flex items-center space-x-2 mb-4 text-xs" key={index}>
              <Checkbox id="terms" className={'w-[1.4rem] h-[1.4rem] cursor-pointer'} />
              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
      <div>
      <h5 className="text-[.83333vw] text-[#000] font-bold my-4">Characters</h5>
      <div>
    <div className="grid grid-cols-3 grid-rows-11 gap-4">
        {[...Array(33)].map((_, index) => (
        <div key={index} className="col-span-1 flex flex-col items-center cursor-pointer">
            <img
              src={imageSrc}
              alt={`Image ${index + 1}`}
              className="max-w-15 max-h-13 object-cover border-1 border-[#000]"
            />
            <span className="text-xs py-1">{name} {index}</span>
        </div>
        ))}
    </div>
      </div>
      </div>
    </div>
  );
};

export default SideCollection;
