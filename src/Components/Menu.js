import React from "react";
import XIcon from "../Assets/Svgs/NavbarSVG/XIcon";
import Logo from "../Assets/Svgs/Logo";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export default ({ isMenuDisplayed, setisMenuDisplayed }) => {
  const cookies = new Cookies();
  const token = cookies.get("ut");

  return (
    <div
      className={`transition-all absolute h-screen duration-700 right-0 md:hidden z-50 bg-[#2e3a3fec] backdrop-blur-sm 
      ${isMenuDisplayed ? "w-screen " : "  w-0 right[-100vw]  "}
      `}
    >
      <section className={`${isMenuDisplayed ? "" : "hidden"}`}>
        <div className="flex justify-between">
          <div
            onClick={() => setisMenuDisplayed(false)}
            className=" md:hidden p-2 "
          >
            <XIcon />
          </div>
          <div className=" my-3 mr-7">
            <Logo color="#c2c2c2" />
          </div>
          <div></div>
        </div>
        <div className=" w-screen flex flex-col justify-center text-[#c2c2c2] items-center space-y-4 mt-10 font-bold">
          <Link to={`${token ? "/dashboard" : "/signin"}`}>
            <div
              onClick={() => setisMenuDisplayed(false)}
              className="mb-5 border-2 border-[#c2c2c2] rounded-md shadow-lg shadow-[#00000049] active:bg-[#636363] active:text-[#d8d8d8] text-[#c2c2c2] w-[45vw] py-2 flex justify-center"
            >
              <p className="drop-shadow-md dana">ورود به میز کار</p>
            </div>
          </Link>

          <Link to="/">
            <div
              onClick={() => setisMenuDisplayed(false)}
              className="active:bg-[#636363] active:text-[#d8d8d8] w-screen py-2 flex justify-center"
            >
              خانه
            </div>
          </Link>

          <Link to="/popularauthors">
            <div
              onClick={() => setisMenuDisplayed(false)}
              className="active:bg-[#636363] active:text-[#d8d8d8] w-screen py-2 flex justify-center"
            >
              مقاله نویسان برتر
            </div>
          </Link>
          <Link to="/aboutus">
            <div
              onClick={() => setisMenuDisplayed(false)}
              className="active:bg-[#636363] active:text-[#d8d8d8] w-screen py-2 flex justify-center"
            >
              درباره ما
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
