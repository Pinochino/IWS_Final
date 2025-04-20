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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Chrome } from "lucide-react";
import { Apple } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";


const policies = [
  {
    label: `Platform's Term of Service`,
    title: `term of service`,
    content: {
      h2: [
        "overview",
        "section 1 - online store terms",
        "section 2 - general conditions",
        "SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
        "SECTION 5 - PRODUCTS OR SERVICES (if applicable)",
        "SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION",
      ],
      text: [
        "This website is operated by Pop Mart Hong Kong limited, its affiliates, and its subsidiaries (collectively as the “Pop Mart”). Throughout the site, the terms “we”, “us” and “our” refer to Pop Mart. Pop Mart offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
        `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. 
You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction, or other jurisdictions applicable to this Terms of Service (including but not limited to copyright laws). 
You must not transmit any worms or viruses or any code of a destructive nature. 
A breach or violation of any of the Terms will result in an immediate termination of your Services.`,
        `We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. 
This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time. You agree that it is your responsibility to monitor changes to our site.`,
        `Prices for our products are subject to change without notice. 
We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time,  in case that the action afore-mentioned doesn’t affect any applicable laws/regulations . 
We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.`,
        `Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.&nbsp;
We have made every effort to display as accurately as possible the colours and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any colour will be accurate.&nbsp;
We reserve the right but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.&nbsp;
We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.&nbsp;`,
      ],
    },
  },
  {
    label: "Privacy policy",
    title: `privacy policy`,
    content: {
      h2: [
        "overview",
        "section 1 - online store terms",
        "section 2 - general conditions",
        "SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
        "SECTION 5 - PRODUCTS OR SERVICES (if applicable)",
        "SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION",
      ],
      text: [
        "This website is operated by Pop Mart Hong Kong limited, its affiliates, and its subsidiaries (collectively as the “Pop Mart”). Throughout the site, the terms “we”, “us” and “our” refer to Pop Mart. Pop Mart offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.",
        `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. 
You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction, or other jurisdictions applicable to this Terms of Service (including but not limited to copyright laws). 
You must not transmit any worms or viruses or any code of a destructive nature. 
A breach or violation of any of the Terms will result in an immediate termination of your Services.`,
        `We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. 
This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time. You agree that it is your responsibility to monitor changes to our site.`,
        `Prices for our products are subject to change without notice. 
We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time,  in case that the action afore-mentioned doesn’t affect any applicable laws/regulations . 
We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.`,
        `Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.&nbsp;
We have made every effort to display as accurately as possible the colours and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any colour will be accurate.&nbsp;
We reserve the right but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.&nbsp;
We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.&nbsp;`,
      ],
    },
  },
];

const RegisterPage = () => {
  const [err, setError] = useState("");
  const [data, setData] = useState({
      email: "",
    password: "",
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
      setLoading(true);
      const data = await res.data;
      if (data) {
        setLoading(false);
      }
      if (res.status === 500 || res.status === 400) {
        setLoading(false);
        setError(res.statusText);
      }
    } catch (error) {
      setError(error);
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
    }
    if (err) {
      return (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{err}</AlertDescription>
        </Alert>
      );
    }
  }, [err, loading]);

  return (
    <div className=" flex justify-center items-center flex-col mb-40 w-full overflow-x-hidden">
      <h2 className="font-medium text-[1.66667vw]  mb-[1.66667vw] text-[#000] leading-[1.71875vw] uppercase mt-20">
       Register
      </h2>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col w-[22.2rem]"
      >
      
      <div className="w-full mb-4">
          <Input
            placeholder="Enter your e-email address"
            onChange={(value) => handleChangeInput("email", value)}
            value={data.email}
          />
        </div>
        <div className="w-full">
          <Input
            placeholder="Enter your password"
            onChange={(value) => handleChangeInput("password", value)}
            value={data.password}
          />
        </div>
        <Button className={"w-full mt-5"}>
          {loading && <Loader2 className="animate-spin" />}
          Continue
        </Button>
        <span className="mt-[2.08333vw] text-[.72917vw] text-[#000] leading-[.72917vw]">
          {" "}
          —— Join With ——{" "}
        </span>
        <div className="flex space-x-2 mt-3 mb-4">
          <div className="bg-[#F6F6F6] w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center">
            <i class="bx bxl-google text-center"></i>
          </div>
          <div className="bg-[#F6F6F6] w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center">
            <i class="bx bxl-apple text-center"></i>
          </div>
        </div>
        <span className="text-[.625vw] text-[#999] leading-[.78125vw]">
          By continuing, you agree to our{" "}
          {policies.map((data, index) => (
  <span key={index}>
    <Dialog>
      <DialogTrigger className="text-black underline">
        {data.label}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{data.label}</DialogTitle>
          <DialogDescription className="flex flex-col">
            <ScrollArea className="max-h-[400px] overflow-y-auto pr-4">
              {data.content.h2.map((heading, idx) => (
                <div key={idx} className="mb-4">
                  <h2 className="uppercase font-bold text-xl text-black mb-2">
                    {heading}
                  </h2>
                  <p className="text-sm text-gray-700">
                    {data.content.text[idx]}
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
