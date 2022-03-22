import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import UserPannel from "../../Assets/Svgs/UserPanel";
import Exit from "../../Assets/Svgs/Exit";

export default () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userData = useSelector((state) => state.data.userData);

  const persianMonth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const getHour = new Date().getHours();
  const date = new Date().toLocaleDateString("fa-IR");
  const sepratedDate = date.split("/");
  const day = sepratedDate[2];
  const month = sepratedDate[1]
    .replace("۱۰", persianMonth[9])
    .replace("۱۱", persianMonth[10])
    .replace("۱۲", persianMonth[11])
    .replace("۱", persianMonth[0])
    .replace("۲", persianMonth[1])
    .replace("۳", persianMonth[2])
    .replace("۴", persianMonth[3])
    .replace("۵", persianMonth[4])
    .replace("۶", persianMonth[5])
    .replace("۷", persianMonth[6])
    .replace("۸", persianMonth[7])
    .replace("۹", persianMonth[8]);
  const year = sepratedDate[0];

  return (
    <div>
      <section className="w-screen bg-gradient-to-b from-[#c2c2c2] to-[#c2c2c23d] drop-shadow-lg pb-2 px-5 flex  items-center justify-between">
        <section className="w-screen flex mt-3  justify-between">
          <div className="flex">
            <div
              onClick={() => {
                cookies.remove("ut");
                navigate("/");
              }}
              className="hidden md:flex w-fit px-2 h-9 bg-[#2e3a3f] cursor-pointer rounded drop-shadow-lg  justify-center items-center mr-2 mt-2.5"
            >
              <p dir="rtl" className="text-[0.6rem] text-[#c2c2c2] mr-2">
                خروج
              </p>
              <Exit />
            </div>
            <Link to={`edituser/${userData._id}`}>
              <div className="hidden md:flex w-fit px-2 h-9 bg-[#2e3a3f] rounded drop-shadow-lg cursor-pointer  justify-center items-center mr-2 mt-2.5">
                <p dir="rtl" className="text-[0.6rem] text-[#c2c2c2] mr-2">
                  ویرایش پروفایل
                </p>
                <UserPannel />
              </div>
            </Link>
            <div className="flex w-fit px-2 h-9 bg-[#2e3a3f] rounded drop-shadow-lg  justify-center items-center md:mt-2.5">
              <p dir="rtl" className="text-[0.6rem] text-[#c2c2c2]">
                {day + " " + month + " " + year}
              </p>
            </div>
          </div>
          <div className="flex text-[#2e3a3f] ">
            <div className="text-[0.6rem] text-right flex flex-col mt-[2px] mr-[10px] md:mt-1.5 md:text-[0.8rem]">
              {3 >= getHour && getHour >= 0 ? (
                <p className="opacity-[80%] ">شب بخیر</p>
              ) : 10 >= getHour && getHour >= 3 ? (
                <p className="opacity-[80%] ">صبح بخیر</p>
              ) : 15 >= getHour && getHour >= 10 ? (
                <p className="opacity-[80%] ">ظهر بخیر</p>
              ) : 19 >= getHour && getHour >= 15 ? (
                <p className="opacity-[80%] ">عصر بخیر</p>
              ) : 24 >= getHour && getHour >= 19 ? (
                <p className="opacity-[80%] ">شب بخیر</p>
              ) : null}
              <div className="text-[12px] md:text-[0.9rem] flex">
                <p>{userData.name}</p>
              </div>
            </div>
            <img
              src={userData.imgurl}
              className="h-[45px] w-[45px] object-cover drop-shadow-lg mt-[-5px] md:h-[65px] md:w-[65px] rounded-full"
            />
          </div>
        </section>
      </section>
    </div>
  );
};
