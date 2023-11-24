import ss from "../assets/2.jpg";
import child from "../assets/child.jpeg";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const MainContent = () => {
  return (
    <div className="main_content">
      <div className="left_content">
        <div className="child_study">
          <p>Riddha</p>
          <img src={child} alt="studying" />
        </div>
        <div className="child_study">
          <p>Ms. Kaur</p>
          <img src={child} alt="studying" />
        </div>
        <div className="icons_div">
          <Icon icon={<GoDeviceCameraVideo />} text="Cam" />
          <Icon icon={<MdMiscellaneousServices />} text="Misc" />
          <Icon icon={<FaRegShareSquare />} text="Share" />
          <Icon icon={<IoChatboxEllipsesOutline />} text="Chat" />
          <Icon icon={<IoExitOutline />} text="Leave" isSelected={true} />
        </div>
      </div>
      <div className="right_content">
        <img src={ss} alt="youtube" />
      </div>
    </div>
  );
};

export default MainContent;

const Icon = ({ text, icon, isSelected }) => {
  return (
    <div className={`icon ${isSelected ? "selected_icon" : ""}`}>
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
};
