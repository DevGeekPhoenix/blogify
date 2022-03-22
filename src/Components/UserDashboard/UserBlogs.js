import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileDashboardSetting from "../Mobile/MobileDashboardSetting";
import Cookies from "universal-cookie";

export default () => {
  const cookies = new Cookies();
  const [userBlogs, setuserBlogs] = useState([]);
  const token = cookies.get("ut");
  useEffect(() => {
    async function getUserBlogs() {
      fetch("http://localhost:4000/blog/my-blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth: `ut ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setuserBlogs(data);
        });
    }
    getUserBlogs();
  }, []);

  return (
    <div
      dir="rtl"
      className="w-screen flex  flex-col items-center justify-center"
    >
      <div className="w-screen  my-2 flex justify-between item-center font-bold text-[0.8rem] md:text-[1rem] text-[#c2c2c2]">
        <p className="mr-[2vw]">مقاله های شما</p>
        <Link to="newblog">
          <p className="hidden ml-[20px] md:flex items-center rounded-sm text-[0.8rem] px-[11px] py-1 text-[#2e3a3f] bg-[#c2c2c2]">
            مقاله جدید
          </p>
        </Link>
      </div>
      <section className=" bg-[#c2c2c2] rounded-md flex flex-col w-full h-[78vh] md:h-[74vh] mx-5  ">
        <div className="bg-gradient-to-b rounded-t-lg from-[#c2c2c2] to-[#575f6360] w-full items-center h-8 md:h-10 py-[1vw] text-[0.7rem] md:text-[0.8rem] flex ">
          <p className="mr-[2vw]">ردیف</p>
          <p className="mr-[7vw]">عنوان</p>
        </div>
        <div className="overflow-y-auto  ">
          {userBlogs.map((blog, i) => {
            return (
              <div
                key={i}
                className=" text-[0.5rem] md:text-[0.7rem] flex justify-between  items-center text-[#c2c2c2] bg-[#2e3a3f] py-3 rounded-lg my-1 mx-2   "
              >
                <div className="flex items-center">
                  <p className="mr-[2vw] ml-[20px] ">{i + 1}</p>
                  <p className="mr-[7vw] max-w-[45vw]">{blog.title}</p>
                </div>
                <div className="flex">
                  <Link to={`editblog/${blog._id}`}>
                    <p className="ml-2 md:ml-3 text-[#fff]">ادیت</p>
                  </Link>
                  <Link to={`blog/${blog._id}`}>
                    <p className="ml-2 md:ml-3 text-[#fff]">مشاهده</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <MobileDashboardSetting />
    </div>
  );
};
