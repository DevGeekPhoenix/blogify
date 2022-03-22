import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../Redux/Reducer";
import Cookies from "universal-cookie";
import Header from "../Components/UserDashboard/Header";

const cookies = new Cookies();

export default () => {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.data.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function abc() {
      const token = cookies.get("ut");

      try {
        if (!token) {
          throw new Error("redirect");
        }
        const res = await fetch("http://localhost:4000/user/me", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            auth: `ut ${token}`,
          },
          body: JSON.stringify({}),
        });
        const data = await res.json();
        if (data.msg === "not logged in") return navigate("/");

        dispatch(setUserData(data));
        setloading(false);
      } catch (error) {
        navigate("/");
      }
    }

    abc();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!userData) return navigate("/");

  return (
    <div className="w-screen h-screen bg-[#2e3a3f] overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
};
