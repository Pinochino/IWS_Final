import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.user.login.user);
    console.log(user);

  
    
    // Nếu người dùng chưa đăng nhập, điều hướng về trang đăng nhập
    if (!user) {
      return <Navigate to="/login" />;
    }
  
    // Nếu người dùng đã đăng nhập, hiển thị trang yêu cầu
    return children;
  };

export default PrivateRoute;
