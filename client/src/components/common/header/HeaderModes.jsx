import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/reducers/UserReducer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { handleAPI } from "@/api/handleAPI"; 
import { fetchCartFail, fetchCartStart, fetchCartSuccess } from "@/redux/reducers/CartReducer";
import { toast } from "react-toastify";

const HeaderModes = () => {
  const user = useSelector((state) => state.user.login.user);
  const user1 = useSelector((state) => state.user.register.user);
  const [items, setItems] = useState([])
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 

  useEffect(() => {
    if (searchQuery) {
      const fetchSearchResults = async () => {
        try {
          const { data } = await handleAPI(`/api/products?search=${searchQuery}`);
          setSearchResults(data.products);
        } catch (error) {
          console.log("Search error:", error);
        }
      };
      fetchSearchResults();
    } else {
      setSearchResults([]); 
    }
  }, [searchQuery]);


  // Determine which user to use (login user or register user)
  const userId = user ? user : user1 ? user1 : null;
  const a = userId.user._id
  console.log(a);
  useEffect(() => {
   
  
    if (!userId) {
      toast.error("Please log in to view your cart.");
      return;
    }
  
    const handleGetAllItems = async () => {
      dispatch(fetchCartStart());
      const b= a.toString();
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
  }, [a, dispatch, user, user1, userId]);
  

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      Cookies.remove('token');
      navigate('/login');
    } catch (error) {
      console.log(error);
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
          <div className="absolute top-full left-0 w-full bg-white border mt-2 rounded-md shadow-lg z-10">
            {searchResults.map((product) => (
              <div
                key={product._id}
                onClick={() => handleSearchResultClick(product._id)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                <div className="flex items-center">
                  <img
                    src={product.images?.[0]?.url || "/default-image.jpg"}
                    alt={product.name}
                    className="w-10 h-10 object-cover mr-2"
                  />
                  <span className="text-sm">{product.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Phần còn lại của Header */}
      <div className="flex flex-row items-center">
        <img
          src="data:image/png;base64,..." // Giữ nguyên hình ảnh logo
          alt="logo"
          className="w-[1.5rem] h-[1.2rem] mr-2"
        />
        <span className="text-xs">VN</span>
      </div>

      <div className="flex items-center">
        {user || user1 ? (
          <>
            <Avatar className={'mr-2'}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-xs" onClick={handleLogout}>Log out</span>
          </>
        ) : (
          <>
            <i className="bx bx-user mr-1"></i>
            <Link to="/login" className="text-xs mr-0.5">Sign in /</Link>
            <Link to="/register" className="text-xs">Register</Link>
          </>
        )}
      </div>

      <Link to={"/cart"}>
        <Button
          variant="secondary"
          className={"bg-transparent rounded-2xl hover:bg-transparent hover:border-black border-2 border-[#EEEEEE] max-w-[4.8rem] max-h-[2.1rem]"}
        >
          <i className="bx bx-cart"></i>
          <span>{items.length}</span>
        </Button>
      </Link>
    </div>
  );
};

export default HeaderModes;
