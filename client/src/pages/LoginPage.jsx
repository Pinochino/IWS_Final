import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { handleAPI } from "@/api/handleAPI";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginFail, loginStart, loginSuccess } from "@/redux/reducers/UserReducer";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required.";
    if (!emailRegex.test(email)) return "Invalid email address.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(data.email);

    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    try {
      dispatch(loginStart());
      const API = `http://localhost:2025/api/users/login`;
      const res = await handleAPI(API, "post", data);

      if (res.status === 200) {
        dispatch(loginSuccess(res.data));
        navigate("/");
      } else {
        const msg = res.statusText || "Something went wrong.";
        dispatch(loginFail(msg));
        setErrors({ ...errors, global: msg });
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || err.message || "Unknown error";
      dispatch(loginFail(msg));
      setErrors({ ...errors, global: msg });
    }
  };

  useEffect(() => {
    if (errors.global) {
      toast.error(errors.global);
    }
  }, [errors.global]);

  return (
    <div className="flex justify-center items-center flex-col mb-40 w-full overflow-x-hidden">
      <h2 className="font-medium text-[1.66667vw] mb-[1.66667vw] text-[#000] leading-[1.71875vw] uppercase mt-20">
        Login
      </h2>

      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-[22.2rem]"
      >
        <div className="w-full mb-4">
          <Input
            placeholder="Enter your email address"
            onChange={(e) => handleChangeInput("email", e.target.value)}
            value={data.email}
            disabled={loading}
            autoComplete="new-email"
          />
          {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email}</span>}
        </div>

        <div className="w-full mb-4">
          <Input
            placeholder="Enter your password"
            onChange={(e) => handleChangeInput("password", e.target.value)}
            value={data.password}
            type="password"
            disabled={loading}
          />
        </div>

        <Button className="w-full mt-5" disabled={loading}>
          {loading && <Loader2 className="animate-spin mr-2" />}
          Continue
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
