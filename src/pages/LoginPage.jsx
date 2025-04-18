import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCallback } from "react";
import { handleAPI } from "@/api/handleAPI";
import { useEffect } from "react";
import { Alert } from "@/components/ui/alert";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const nationalData = [
  "Vietnam",
  "Thailand",
  "Span",
  "Malaysia",
  "Japan",
];

const LoginPage = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    nation: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChangeInput = useCallback((name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const API = ``;
      const res = await handleAPI();
      const data = await res.data;
      if (res.status === 500 || res.status === 400) {
        setError(res.statusText);
      }
    } catch (error) {
      setError(error)
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      return (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Loading</AlertTitle>
          <AlertDescription>This website have been loading</AlertDescription>
        </Alert>
      );
    };
    if (err) {
      return (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{err}</AlertDescription>
        </Alert>
      );
    }
  }, []);

  return (
    <div>
      <h2>sign in or register</h2>
      <form method="post" onSubmit={handleSubmit}>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Vietnam" />
          </SelectTrigger>
          <SelectContent>
            {nationalData.map((e, index) => {
              return (
                <SelectItem value={e} key={index}>
                  {e}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <div>
          <Input placeholder="Enter your e-email address" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
