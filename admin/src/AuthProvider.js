import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { loginSuccess } from "~/redux/reducer/UserReducer";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        dispatch(loginSuccess(decoded)); // 👈 đưa lại user vào Redux
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, [dispatch]);

  return children;
};

export default AuthProvider;
