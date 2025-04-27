import { handleAPI } from "@/api/handleAPI";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddAddressDialog = ({ setShippingAddress }) => {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Vietnam",
  });

  const user = useSelector((state) => state.user.login.user) || useSelector((state) => state.user.register.user);
  const userId = user?.user?._id;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addressString = `${formData.street}, ${formData.city}, ${formData.state}, ${formData.country}`;
      
      const res = await handleAPI(`/api/users/update`, "put", {
        userId: userId,
        addressString: addressString,
      });
      
      if (res.status === 200) {
        toast.success("Address updated successfully!");
        setShippingAddress({
          address: formData.street,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country,
        }); 
        // <-- Gửi object cho PaymentLeft, không gửi string nữa!
      } else {
        toast.error(res.statusText || "Failed to update address.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    }
  };
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="uppercase bg-black text-white rounded-none text-[15px] py-2 hover:bg-[#333]">
          Add a new address
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px] rounded-none">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-center text-xl font-bold">ADD A NEW ADDRESS</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input id="street" placeholder="* Street" value={formData.street} onChange={handleChange} />
          <Input id="city" placeholder="* City" value={formData.city} onChange={handleChange} />
          <Input id="state" placeholder="* State/Province" value={formData.state} onChange={handleChange} />
          <Input id="postalCode" placeholder="* Postal Code" value={formData.postalCode} onChange={handleChange} />
          <Button
            type="submit"
            className="w-full bg-black text-white rounded-none text-[15px] py-2 hover:bg-[#333]"
          >
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressDialog;
