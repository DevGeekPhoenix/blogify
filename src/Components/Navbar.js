import React from "react";
import Logo from "../Assets/Svgs/Logo";
import Menu from "../Assets/Svgs/NavbarSVG/Menu";
import MenuMobile from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export default () => {
  const cookies = new Cookies();
  const token = cookies.get("ut");

  const [isMenuDisplayed, setisMenuDisplayed] = useState(false);

  return (
    <div className="absolute z-50 top-0 ">
      <MenuMobile
        isMenuDisplayed={isMenuDisplayed}
        setisMenuDisplayed={setisMenuDisplayed}
      />
      <div className="w-screen absolute z-[-10] top-0 py-7 bg-gradient-to-b from-[#ffffff8f] to-[#0000]"></div>
      <section className=" flex w-screen justify-between">
        <div className="flex m-2">
          <Link to="/">
            <Logo />
          </Link>
          <Link
            className="hidden md:flex"
            to={`${token ? "/dashboard" : "/signin"}`}
          >
            <div
              onClick={() => setisMenuDisplayed(false)}
              className=" mt-[-5px] ml-5 border hover:border-[#c2c2c2] border-[#2e3a3f] rounded-md shadow-lg shadow-[#00000049] hover:bg-[#636363] hover:text-[#c2c2c2] text-[#2e3a3f] px-3 py-1 flex justify-center"
            >
              <p className="drop-shadow-md dana">ورود به میز کار</p>
            </div>
          </Link>
        </div>
        <div
          onClick={() => setisMenuDisplayed(true)}
          className=" md:hidden p-2 "
        >
          <Menu />
        </div>
        <div
          dir="rtl"
          className="hidden md:flex justify-between dana py-2 mr-2 text-[#2e3a3f] w-[30vw]"
        >
          <Link to="/">
            <p className="hover:text-[#636363]">خانه</p>
          </Link>
          <Link to="/popularauthors">
            <p className="hover:text-[#636363]">مقاله نویسان برتر</p>
          </Link>
          <Link to="/aboutus">
            <p className="hover:text-[#636363]">درباره ما</p>
          </Link>
        </div>
      </section>
    </div>
  );
};
