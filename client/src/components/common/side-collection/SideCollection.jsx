import { handleAPI } from "@/api/handleAPI";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SideCollection = ({ selectedCategories, setSelectedCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await handleAPI("/api/categories");
        if (data) {
          setCategories(data.slice(0, 5));
        }
      } catch (error) {
        toast.error(error.message || "Failed to fetch categories");
      }
    };
    getAllCategories();
  }, []);

  const handleCheckboxChange = (categoryName, checked) => {
    if (checked) {
      setSelectedCategories([categoryName]); // ⬅ chỉ giữ 1 cái
    } else {
      setSelectedCategories([]); // clear hết nếu bỏ chọn
    }
  };

  return (
    <div className="flex-[0.2] max-w-[12.4375rem] side-collection">
      <div className="border-b-2 border-b-gray-300 pb-2">
        <h5 className="text-[.83333vw] text-[#000] font-bold mb-4">Category</h5>
        {categories.length > 0 ? (
          categories.map((item) => (
            <div
              className="flex items-center space-x-2 mb-4 text-xs"
              key={item._id}
            >
              <Checkbox
                id={`${item._id}`}
                checked={selectedCategories.includes(item.name)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(item.name, checked)
                }
                className="w-[1.4rem] h-[1.4rem] cursor-pointer"
              />
              <label
                htmlFor={`category-${item._id}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.name}
              </label>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default SideCollection;
