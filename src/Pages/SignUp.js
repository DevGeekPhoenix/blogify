import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <label for="">name</label>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      <label for="">userName</label>

      <input
        value={userNameValue}
        onChange={(e) => setuserNameValue(e.target.value)}
      />
      <label for="">userimg</label>

      <input value={userimg} onChange={(e) => setuserimg(e.target.value)} />

      <button onClick={() => post()}>post</button>
    </div>
  );
};
