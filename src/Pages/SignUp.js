import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBackGround from "../Assets/Img/LoginBackGround.png";
import Logo from "../Assets/Svgs/Logo";
import ShowPass from "../Assets/Svgs/ShowPass";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default () => {
  const [name, setname] = useState("");
  const [userNameValue, setuserNameValue] = useState("");
  const [userimg, setuserimg] = useState("");
  const navigate = useNavigate();

  const post = async () => {
    try {
      const res = await fetch("http://localhost:4000/user/signup", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imgurl: userimg,
          username: userNameValue,
          name: name,
        }),
      });
      const { token } = await res.json();
      cookies.set("ut", token);
      navigate("/signin");
    } catch (error) {}
  };
  return (
    <>
      <img
        className="w-screen h-screen object-cover absolute z-[-100]  "
        src={LoginBackGround}
      />
      <div className="w-screen h-screen flex justify-center items-center text-[#2e3a3f]">
        <div className="flex flex-col justify-between w-[250px] md:w-[350px] h-[400px] rounded-lg bg-[#c2c2c2d7] ">
          <div>
            <div className="w-full flex justify-between">
              <div
                onClick={() => navigate("/")}
                className="text-xs font-bold mt-[1.15rem] ml-2 cursor-pointer "
              >
                بازگشت
              </div>
              <div className="mt-3 mr-10">
                <Logo className={"h-[30px]"} />
              </div>
              <div></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center ">
              <div className="space-y-2">
                <label
                  htmlFor="userName"
                  className="flex text-[14px] w-full justify-center items-center mt-5 "
                >
                  نام
                </label>
                <input
                  className="outline-none rounded-md md:w-[300px] md:py-3 px-2 py-2 shadow-lg text-right placeholder:text-[12px] placeholder:text-right"
                  id="userName"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="flex text-[14px] w-full justify-center items-center mb-2 mt-5 "
                >
                  نام کاربری
                </label>

                <input
                  className="outline-none rounded-md md:w-[300px] md:py-3 px-2 py-2 shadow-lg text-right placeholder:text-[12px] placeholder:text-right"
                  id="password"
                  type={"text"}
                  placeholder="نام کاربری خود را وارد کنید"
                  value={userNameValue}
                  onChange={(e) => setuserNameValue(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="profile"
                  className="flex text-[14px] w-full justify-center items-center mb-2 mt-5 "
                >
                  تصویر پروفایل
                </label>

                <input
                  className="outline-none rounded-md md:w-[300px] md:py-3 px-2 py-2 shadow-lg text-right placeholder:text-[12px] placeholder:text-right"
                  id="profile"
                  type={"text"}
                  placeholder="لینک تصویر پروفایل خود را بارگذاری گنید"
                  value={userimg}
                  onChange={(e) => setuserimg(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            className=" w-full font-bold py-2 rounded-b-lg mb-[-3px] bg-[#2e3a3f] text-[#c2c2c2] "
            onClick={() => post()}
          >
            عضویت
          </button>
        </div>
      </div>
    </>
  );
};
