import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/reducers/UserReducer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { handleAPI } from "@/api/handleAPI";
import {
  fetchCartFail,
  fetchCartStart,
  fetchCartSuccess,
} from "@/redux/reducers/CartReducer";
import { toast } from "react-toastify";

const HeaderModes = () => {
  const user = useSelector((state) => state.user.login.user);
  const user1 = useSelector((state) => state.user.register.user);
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const fetchSearchResults = async () => {
        try {
          const { data } = await handleAPI(
            `/api/products?search=${searchQuery}`
          );
          setSearchResults(data.products);
        } catch (error) {
          toast.error(error);
        }
      };
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Safely access userId and user._id
  const userId = user || user1;
  const userIdExists = userId && userId.user; // Check if userId and userId.user exist

  const a = userIdExists ? userId.user._id : null; // Only access _id if userId.user exists

  useEffect(() => {
    if (a) {
      // Only fetch items if `a` (userId) exists
      const handleGetAllItems = async () => {
        dispatch(fetchCartStart());
        const b = a.toString();
        try {
          const res = await handleAPI(`/api/cart/${b}`);
          const result = await res.data;
          if (result) {
            setItems(result.items);
            dispatch(fetchCartSuccess(result));
          }
        } catch (error) {
          dispatch(fetchCartFail(error?.message));
          toast.error(error?.message || "An error occurred");
        }
      };
      handleGetAllItems();
    }
  }, [a, dispatch]);

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      Cookies.remove("token");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="flex flex-row items-center justify-between lg:flex-1 header-mode-item">
      <div className="relative">
        <input
          placeholder="Tìm sản phẩm..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="rounded-2xl bg-[#F4F4F4] h-[2.08333vw] text-xs pl-4 outline-0 lg:h-2rem input-desktop"
        />
        <i className="bx bx-search absolute right-2 bottom-2 text-[#999999]"></i>

        {/* Gợi ý tìm kiếm */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0  bg-white border mt-2 rounded-md shadow-lg z-10 w-[10rem]">
            {searchResults.slice(1, 4).map((product) => (
              <div
                key={product._id}
                onClick={() => handleSearchResultClick(product._id)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                <div className="flex items-center">
                  <Link to={"/collection/New Arrival"}>
                    <img
                      src={product.images?.[0]?.url || "/default-image.jpg"}
                      alt={product.name}
                      className="w-10 h-10 object-cover mr-2"
                    />
                    <span className="text-sm line-clamp-1">{product.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Phần còn lại của Header */}
      <div className="flex flex-row items-center">
        <img
          src="data:image/jpeg;base64,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" // Giữ nguyên hình ảnh logo
          alt="logo"
          className="w-[1.5rem] h-[1.2rem] mr-2"
        />
        <span className="text-xs">VN</span>
      </div>

      <div className="flex items-center">
        {user || user1 ? (
          <>
            <Avatar className={"mr-2"}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xs" onClick={handleLogout}>
              Log out
            </span>
          </>
        ) : (
          <>
            <i className="bx bx-user mr-1"></i>
            <Link to="/login" className="text-xs mr-0.5">
              Sign in /
            </Link>
            <Link to="/register" className="text-xs">
              Register
            </Link>
          </>
        )}
      </div>

      <Link to={"/cart"}>
        <Button
          variant="secondary"
          className={
            "bg-transparent rounded-2xl hover:bg-transparent hover:border-black border-2 border-[#EEEEEE] max-w-[4.8rem] max-h-[2.1rem]"
          }
        >
          <i className="bx bx-cart"></i>
        </Button>
      </Link>
    </div>
  );
};

export default HeaderModes;
