import ss from "../assets/2.jpg";
import child from "../assets/child.jpeg";
import { GoDeviceCameraVideo } from "react-icons/go";

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
        </div>
      </div>
      <div className="right_content">
        <img src={ss} alt="youtube" />
      </div>
    </div>
  );
};

export default MainContent;

const Icon = ({ text, icon }) => {
  return (
    <div className="icon">
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
};
