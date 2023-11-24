import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { IoLogoChrome, IoMdTimer } from "react-icons/io";
import { IoBarChart } from "react-icons/io5";
import { GoChecklist, GoEye } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";

import avatar from "../assets/human.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="upper_sidebar">
        <IoLogoChrome color="black" />
        <RxHamburgerMenu />
        <FaRegBell style={{ marginTop: "1rem" }} />
        <IoMdTimer />
        <GoChecklist />
        <GoEye />
        <HiUsers />
        <IoBarChart />
      </div>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Sidebar;
