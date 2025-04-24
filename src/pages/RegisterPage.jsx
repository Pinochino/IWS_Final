import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { handleAPI } from "@/api/handleAPI";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useSelector, useDispatch } from "react-redux";
import {
  registerFail,
  registerStart,
  registerSuccess,
} from "@/redux/reducers/UserReducer";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useEffect } from "react";

const policies = [
  /* giữ nguyên như trước */
];

const RegisterPage = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState({
    name: "",
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

  const validateUsername = () => {
    if (!data.name.trim()) return "Username is required.";
    if (data.name.trim().length < 4) return "Username must be at least 4 characters.";
    return "";
  };

  const validateEmail = () => {
    if (!data.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(data.email)) return "Email is not valid.";
    return "";
  };

  const validatePassword = () => {
    if (!data.password.trim()) return "Password is required.";
    if (data.password.trim().length < 4) return "Password must be at least 4 characters.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateUsername();
    const emailError = validateEmail();
    const passwordError = validatePassword();

    if (nameError || emailError || passwordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }

    try {
      dispatch(registerStart());
      const API = `http://localhost:2025/api/users/register`;
      const res = await handleAPI(API, "post", data);

      if (res.status === 200) {
        dispatch(registerSuccess(res.data));
        navigate("/");
      } else {
        const msg = res.statusText || "Something went wrong.";
        dispatch(registerFail(msg));
        setErrors({ ...errors, global: msg });
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || err.message || "Unknown error";
      dispatch(registerFail(msg));
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
        Register
      </h2>

      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-[22.2rem]"
      >
        <div className="w-full mb-4">
          <Input
            placeholder="Enter your name"
            onChange={(e) => handleChangeInput("name", e.target.value)}
            value={data.name}
            disabled={loading}
            autoComplete="additional-name"
          />
          {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name}</span>}
        </div>

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
          {errors.password && <span className="text-sm text-red-500 mt-1">{errors.password}</span>}
        </div>

        <Button className="w-full mt-5" disabled={loading}>
          {loading && <Loader2 className="animate-spin mr-2" />}
          Continue
        </Button>

        <span className="mt-[2.08333vw] text-[.72917vw] text-[#000] leading-[.72917vw]">
          —— Join With —— 
        </span>

        <div className="flex space-x-2 mt-3 mb-4">
          <div className="bg-[#F6F6F6] w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center">
            <i className="bx bxl-google text-center"></i>
          </div>
          <div className="bg-[#F6F6F6] w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center">
            <i className="bx bxl-apple text-center"></i>
          </div>
        </div>

        <span className="text-[.625vw] text-[#999] leading-[.78125vw] text-center">
          By continuing, you agree to our{" "}
          {policies.map((policy, index) => (
            <span key={index}>
              <Dialog>
                <DialogTrigger className="text-black underline">
                  {policy.label}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center">{policy.label}</DialogTitle>
                    <DialogDescription className="flex flex-col">
                      <ScrollArea className="max-h-[400px] overflow-y-auto pr-4">
                        {policy.content.h2.map((heading, idx) => (
                          <div key={idx} className="mb-4">
                            <h2 className="uppercase font-bold text-xl text-black mb-2">
                              {heading}
                            </h2>
                            <p className="text-sm text-gray-700">
                              {policy.content.text[idx]}
                            </p>
                          </div>
                        ))}
                      </ScrollArea>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              {index < policies.length - 1 && <span className="mx-1">and</span>}
            </span>
          ))}
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;
