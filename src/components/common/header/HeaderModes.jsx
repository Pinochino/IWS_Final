import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

const HeaderModes = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-row items-center justify-between flex-1">
      <div className="relative">
        <input
          placeholder="Dimoo"
          className="rounded-2xl bg-[#F4F4F4] h-[2.08333vw] text-xs pl-4 outline-0"
        />
        <i className="bx bx-search absolute right-2 bottom-2 "></i>
        <span className="absolute bg-[#EEEEEE] w-0.5 h-[2.60417vw] right-0 bottom-0 translate-x-5"></span>
      </div>
      <div className="flex flex-row items-center ">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXaJR3//wDZHhTjaWbYDx7upxHYAB7ZHh3ZFx7++ADZGx3/+wDZEh732Anyvw799APsoBLrmhP54AjeQxv43AjdOhvngBXzww3wtQ/0xwz1zgvjaRjvrxDeSRrqlRPpkBTohhXlehblcxfiYhj77AX20grbLhz76AbgVBnjZxjcNBvhXBn87wTvrBDxuQ7ldRbT9e9AAAAELklEQVR4nO3d6XaiQBAFYHsGqxEw7olL3OOSaJL3f7tRQWVpBTQZ7Or7/c7MgXu4AnbXsVQCAAAAAAAAAAAAAAAAAAAAAAAAgLNl0QfweKwXq+hDeDRyKIay6IN4MF5DNLyiD+LBUFM0qeiDeCyyJYRooTxh3miXyQjlCaP2LpM2yhMiO2Kvg/KceeNDJmOU54yqh0yqKM/ZUvjwfH9ij4NMxnbRh/IwaBFkskB5jqQ4wo0nYE9OmUxQHh/1T5n0UR6fJ87whHJgP4cyeUZ59kLVQXkC4eqgPAf2NJLJFOXZVacXyaSH8uyuEzeSiYvrpGTPRNQModBLLJMXlMepxDKpOEUfUtGceHWEGJgeCj0lMnkyvTxOLZFJzfDrxHlPRCLEu9mh0Jciky+zy2NvFZnUjH5CceaKSISYm1weq6vMpGvy9hxPVR0htgZ/YSA3ykiE2DD8/l5amdDrhUxeKdt/oFF0ctAtZ1FPPrAFd556pn/fHWgUit24cLI/q6HVTdsavv16ItuhZrcnx1M9of6kJ0+/pxiauukndjN3quULgNep/lok7Y6mjzCS6r8USZk0uuHE0PzS3fYetbmWvTmyZS/9HHPqlbS6BSvQJP0sc5lofZH4rM7qBxN5a2n2UKImL77W5NfV+MM1igbxRZzbuDMGvTmyl4v0M061WOr+4RohaXR3JA02vTmy1ve9Fb6tGfXmyHHueSt8clj15oSmN0fyzPAi8Xkf7ZsSaXZYPJSoSSrfEMknuw/XqPxvhbV3tr05smU/PYeQvvZvfFnQOD2JkzH7i8RntbK+Fa50+xr6dpS1PgbtNF+mpxEwZkDQzv41kzFjGpmrY1B5ltkXflxDyhMbxLjOkDENyvNVviljGnnWTN2iD/a/sL9zRCLEtwnlyVUdQ8qTGMS4zoQxjcQMU5oZ/1AUgxjXGTCm4eVd/nI13WmSnWKGyVdpXAqLfXmUgxg71Q9aXtjWxH5Mg9RXQ51kSZJ6B2mFeSbOQHXW241/2rRR7r9nPiBoqarTO63x2U58svZQHt5fQKqqE9l4pNrWVGNdHsUMUzO28chqNRN/w3rGKTnD9JpY45P0mfgjzuWh2CJgZaCqRWJbE+fyyHX0XBcX1vgSa4VrvgvGVnSz3+jy2nhsrZBxeSj8+HF91CQ67LJlW55Idb5SNlDIyFsA2/JYoRtKhlET+j5/cfvJtTx0WjqvZho1CQ27rJiWRw6PZ1jPuPEoNOzC9AcBrGDf1jbHqMnprbDMszyWX518oya29N8KVywzCaozybthL3grZFkeb//ZsLph1MQfdqlz/FqWmreOmhyGXTj+msb+FzGUb3xZ0MDl+GsaXrl9x65Ou1Qt8yuPnN21G1rSjN91Urr3lBhGAgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgkz8QV/oLcf8Agm46TsQaDiQAAAAASUVORK5CYII="
          alt="logo"
          className="w-[1.5rem] h-[1.2rem] mr-2 "
        />
        <span className="text-xs">VN</span>
      </div>
      <div className="flex items-center">
        <i className="bx bx-user mr-1"></i>
        <Link to="/login" className="text-xs mr-0.5">
          Sign in /
        </Link>
        <Link to="/login" className="text-xs">
          Register
        </Link>
      </div>
      <Link to={'/wishlist'}><i className="bx bx-heart"></i></Link>
      <i className="bx bx-headphone"></i>
      <Link to={"/cart"}>
        <Button
          variant="secondary"
          className={
            "bg-transparent rounded-2xl hover:bg-transparent hover:border-black border-2 border-[#EEEEEE] max-w-[4.8rem] max-h-[2.1rem]"
          }
        >
          <i className="bx bx-cart"></i>
          <span>{items.length}</span>
        </Button>
      </Link>
    </div>
  );
};

export default HeaderModes;
