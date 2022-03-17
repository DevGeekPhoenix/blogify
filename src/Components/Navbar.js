import React from "react";
import Logo from "../Assets/Svgs/Logo";

import Menu from "../Assets/Svgs/NavbarSVG/Menu";
import MenuMobile from "./Menu";
import { useState } from "react";

export default () => {
  const [isMenuDisplayed, setisMenuDisplayed] = useState(false);
  return (
    <div className="absolute z-50 top-0 ">
      <MenuMobile
        isMenuDisplayed={isMenuDisplayed}
        setisMenuDisplayed={setisMenuDisplayed}
      />
      <div className="w-screen absolute z-[-10] top-0 py-7 bg-gradient-to-b from-[#0000008f] to-[#0000]"></div>
      <section className=" flex w-screen justify-between">
        <div className=" m-2">
          <Logo />
        </div>
        <div
          onClick={() => setisMenuDisplayed(true)}
          className=" md:hidden p-2 "
        >
          <Menu />
        </div>
      </section>
    </div>
  );
};
