import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Cookies from "universal-cookie";
import Menu from "../../Assets/Svgs/NavbarSVG/Menu";
import XIcon from "../../Assets/Svgs/NavbarSVG/XIcon";
import Exit from "../../Assets/Svgs/Exit";
import UserPannel from "../../Assets/Svgs/UserPanel";
import Pen from "../../Assets/Svgs/Pen";

export default () => {
  const [isSettingMenuOpen, setisSettingMenuOpen] = useState(false);
  const userData = useSelector((state) => state.data.userData);

  const navigate = useNavigate();
  const cookies = new Cookies();

  return (
    <>
      <div
        className={`
        ${
          isSettingMenuOpen
            ? "absolute inset-0 w-screen h-screen backdrop-blur-sm bg-[#ffffff38]"
            : "hidden"
        }
        `}
      ></div>
      <div
        onClick={() => {
          cookies.remove("ut");
          navigate("/");
        }}
        className={`md:hidden fixed right-3 flex justify-center items-center w-14 h-14 rounded-full  bg-[#c2c2c2] transition-transform duration-500
        ${
          isSettingMenuOpen
            ? " bottom-3 -translate-y-16 shadow-xl"
            : " bottom-3 "
        }
        `}
      >
        <Exit width="18" height="18" color={"#2e3a3f"} />
      </div>
      <Link to={`edituser/${userData._id}`}>
        <div
          className={`md:hidden fixed right-3 flex justify-center items-center w-14 h-14 rounded-full  bg-[#c2c2c2] transition-transform duration-500
        ${
          isSettingMenuOpen
            ? " bottom-3 -translate-y-32 shadow-xl"
            : " bottom-3 "
        }
        `}
        >
          <UserPannel color="#2e3a3f" width="18" height="16" />
        </div>
      </Link>

      <Link to="newblog">
        <div
          className={`md:hidden fixed right-3 flex justify-center items-center w-14 h-14 rounded-full  bg-[#c2c2c2] transition-transform duration-500
        ${
          isSettingMenuOpen
            ? " bottom-3 -translate-y-48 shadow-xl"
            : " bottom-3 "
        }
        `}
        >
          <Pen />
        </div>
      </Link>
      <div
        onClick={() => setisSettingMenuOpen(!isSettingMenuOpen)}
        className="md:hidden fixed flex justify-center items-center w-14 h-14 bottom-3 right-3 rounded-full shadow-xl bg-[#c2c2c2]"
      >
        <div>{isSettingMenuOpen ? <XIcon color="#2e3a3f" /> : <Menu />}</div>
      </div>
    </>
  );
};
