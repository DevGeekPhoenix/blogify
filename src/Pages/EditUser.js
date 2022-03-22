import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Back from "../Assets/Svgs/Back";
import Cookies from "universal-cookie";
import { useSelector, useDispatch } from "react-redux";

export default function EditUser() {
  const userData = useSelector((state) => state.data.userData);
  const cookies = new Cookies();
  const token = cookies.get("ut");
  const { id } = useParams();

  const [userimg, setuserimg] = useState(userData.imgurl);
  const [name, setname] = useState(userData.name);

  const editUser = async () => {
    fetch("http://localhost:4000/user/edit", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${token}`,
      },
      body: JSON.stringify({
        data: {
          name: name,
          phoneNumber: "",
          imgurl: userimg,
        },
      }),
    })
  };

  return (
    <div dir="rtl" className="w-screen flex justify-center">
      <div className="w-[85vw] h-fit  mt-5 bg-[#c2c2c2]">
        <div className="w-full flex justify-center">
          <img
            className="h-52 w-52 object-cover rounded-full mt-3"
            src={userimg}
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="">
            <div className="mt-8 flex flex-col md:flex-row  w-[100%] justify-center items-center">
              <label className="font-bold">تصویر پروفایل</label>
              <input
                className="outline-none rounded border text-[#2e3a3f] border-[#2e3a3f] mt-2 mr-2 w-[55vw] md:w-[300px] md:py-2 px-2 py-1 shadow-lg text-right placeholder:text-[10px]  md:placeholder:text-[12px] placeholder:text-right"
                placeholder="آدرس تصویر پروفایل خود را وارد کنید"
                value={userimg}
                onChange={(e) => setuserimg(e.target.value)}
              />
            </div>
            <div className="mt-5 flex flex-col md:flex-row w-[100%] justify-center items-center">
              <label className="md:ml-20 font-bold">نام</label>
              <input
                className="outline-none rounded border text-[#2e3a3f] border-[#2e3a3f] mt-2 mr-2 w-[55vw] md:w-[300px] md:py-2 px-2 py-1 shadow-lg text-right placeholder:text-[10px]  md:placeholder:text-[12px] placeholder:text-right"
                placeholder="نام خود را وارد کنید"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => editUser()}
            className="flex w-fit px-2 my-3 h-9 bg-[#2e3a3f] text-[#c2c2c2] rounded drop-shadow-lg  justify-center items-center md:mt-2.5"
          >
            اعمال تغییرات
          </button>
        </div>
      </div>
      <Link to="/dashboard">
        <div
          // onClick={() => submitBLog()}
          className=" fixed flex justify-center items-center w-14 h-14 md:top-[90px] right-5 bottom-3 md:left-5 rounded-full shadow-xl bg-[#c2c2c2] cursor-pointer"
        >
          <Back />
        </div>
      </Link>
    </div>
  );
}
