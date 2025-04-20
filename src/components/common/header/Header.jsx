import React from "react";
import ListCharacters from "./ListCharacters";
import HeaderModes from "./HeaderModes";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSkeleton } from "@/redux/reducers/LoadingReducer";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";


const HeaderLoading = () => {
  return (
    <div className="w-[92rem] h-[4.9rem] flex justify-between items-center flex-row ">
      <div className=" flex-[0.5] flex items-center">
        <Skeleton className="h-9 w-20 bg-[#E0E0E0] mr-5" />
        <div className="flex justify-around flex-[0.8]">
          {Array.from({ length: 5 }).map((_, index) => {
            return <Skeleton className="h-9 w-20 bg-[#E0E0E0]" key={index} />;
          })}
        </div>
      </div>
      <div className=" flex-[0.4]">
        <div className="flex justify-between">
          <Skeleton className="h-9 w-36 bg-[#E0E0E0] rounded-2xl" />

          <div className="flex flex-row items-center ">
            <Skeleton className="h-9 w-28 bg-[#E0E0E0]" />
          </div>
          <div className="flex items-center">
            <Skeleton className="h-9 w-28 bg-[#E0E0E0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMobile = () => {
const { items } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp"
            alt="logo"
            className="w-[10rem] h-[3rem] mr-1"
          />
        </Link>
        <div className="relative ml-5">
        <input
          placeholder="Dimoo"
          className="rounded-2xl bg-[#F4F4F4] h-[3.5rem] min-w-[15rem] text-2xl pl-4 outline-0"
        />
        <i className="bx bx-search absolute right-2 bottom-2 text-4xl"></i>
      </div>
      </div>
      <div className="flex items-center space-x-5">
      <Link to={"/cart"} className="">
        <Button
          variant="secondary"
          className={
            "bg-transparent rounded-2xl hover:bg-transparent hover:border-black border-2 border-[#EEEEEE] h-[3.5rem] w-[7rem]"
          }
        >
          <i className="bx bx-cart text-3xl"></i>
          <span className="text-2xl">{items.length}</span>
        </Button>
      </Link>
      <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXaJR3//wDZHhTjaWbYDx7upxHYAB7ZHh3ZFx7++ADZGx3/+wDZEh732Anyvw799APsoBLrmhP54AjeQxv43AjdOhvngBXzww3wtQ/0xwz1zgvjaRjvrxDeSRrqlRPpkBTohhXlehblcxfiYhj77AX20grbLhz76AbgVBnjZxjcNBvhXBn87wTvrBDxuQ7ldRbT9e9AAAAELklEQVR4nO3d6XaiQBAFYHsGqxEw7olL3OOSaJL3f7tRQWVpBTQZ7Or7/c7MgXu4AnbXsVQCAAAAAAAAAAAAAAAAAAAAAAAAgLNl0QfweKwXq+hDeDRyKIay6IN4MF5DNLyiD+LBUFM0qeiDeCyyJYRooTxh3miXyQjlCaP2LpM2yhMiO2Kvg/KceeNDJmOU54yqh0yqKM/ZUvjwfH9ij4NMxnbRh/IwaBFkskB5jqQ4wo0nYE9OmUxQHh/1T5n0UR6fJ87whHJgP4cyeUZ59kLVQXkC4eqgPAf2NJLJFOXZVacXyaSH8uyuEzeSiYvrpGTPRNQModBLLJMXlMepxDKpOEUfUtGceHWEGJgeCj0lMnkyvTxOLZFJzfDrxHlPRCLEu9mh0Jciky+zy2NvFZnUjH5CceaKSISYm1weq6vMpGvy9hxPVR0htgZ/YSA3ykiE2DD8/l5amdDrhUxeKdt/oFF0ctAtZ1FPPrAFd556pn/fHWgUit24cLI/q6HVTdsavv16ItuhZrcnx1M9of6kJ0+/pxiauukndjN3quULgNep/lok7Y6mjzCS6r8USZk0uuHE0PzS3fYetbmWvTmyZS/9HHPqlbS6BSvQJP0sc5lofZH4rM7qBxN5a2n2UKImL77W5NfV+MM1igbxRZzbuDMGvTmyl4v0M061WOr+4RohaXR3JA02vTmy1ve9Fb6tGfXmyHHueSt8clj15oSmN0fyzPAi8Xkf7ZsSaXZYPJSoSSrfEMknuw/XqPxvhbV3tr05smU/PYeQvvZvfFnQOD2JkzH7i8RntbK+Fa50+xr6dpS1PgbtNF+mpxEwZkDQzv41kzFjGpmrY1B5ltkXflxDyhMbxLjOkDENyvNVviljGnnWTN2iD/a/sL9zRCLEtwnlyVUdQ8qTGMS4zoQxjcQMU5oZ/1AUgxjXGTCm4eVd/nI13WmSnWKGyVdpXAqLfXmUgxg71Q9aXtjWxH5Mg9RXQ51kSZJ6B2mFeSbOQHXW241/2rRR7r9nPiBoqarTO63x2U58svZQHt5fQKqqE9l4pNrWVGNdHsUMUzO28chqNRN/w3rGKTnD9JpY45P0mfgjzuWh2CJgZaCqRWJbE+fyyHX0XBcX1vgSa4VrvgvGVnSz3+jy2nhsrZBxeSj8+HF91CQ67LJlW55Idb5SNlDIyFsA2/JYoRtKhlET+j5/cfvJtTx0WjqvZho1CQ27rJiWRw6PZ1jPuPEoNOzC9AcBrGDf1jbHqMnprbDMszyWX518oya29N8KVywzCaozybthL3grZFkeb//ZsLph1MQfdqlz/FqWmreOmhyGXTj+msb+FzGUb3xZ0MDl+GsaXrl9x65Ou1Qt8yuPnN21G1rSjN91Urr3lBhGAgAAAAAAAAAAAAAAAAAAAAAAAAAAAACgkz8QV/oLcf8Agm46TsQaDiQAAAAASUVORK5CYII="
          alt="logo"
          className="w-[4rem] h-[2.5rem] mr-2 "
        />
        <i className='bx bx-menu text-6xl'></i>
      </div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSkeleton());
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full lg:border-b lg:border-b-[#ddd] bg-white">
      {/* Header Mobile - hiển thị từ sm trở xuống */}
      <div className="lg:hidden px-[1.824rem] py-[2.25rem] w-auto">
        <HeaderMobile />
      </div>

      {/* Header Desktop - hiển thị từ md trở lên */}
      <div className="hidden md:flex justify-center items-center border-b-2 border-b-[#ddd]">
        {isLoading ? (
          <HeaderLoading />
        ) : (
          <div className="lg:w-[94%] h-[4.9rem] flex justify-between items-center">
            <div className="flex items-center flex-[0.5]">
              <ListCharacters />
            </div>
            <div className="flex-[0.4] flex justify-between items-center">
              <HeaderModes />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};


export default Header;
