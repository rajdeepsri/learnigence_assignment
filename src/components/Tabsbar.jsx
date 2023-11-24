import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboard } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TbSlideshow } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";

const Tabsbar = () => {
  return (
    <div className="tabsbar">
      <Tab icon={<SiGoogleclassroom />} text="Classroom" />
      <Tab icon={<FaChalkboard />} text="Whiteboard" />
      <Tab icon={<MdOutlineOndemandVideo />} text="Videos" isSelected={true} />
      <Tab icon={<TbSlideshow />} text="Slide Show" />
      <Tab icon={<IoDocumentTextOutline />} text="Documents" />
      <Tab icon={<FaCameraRetro />} text="Doc.Cam" />
    </div>
  );
};

export default Tabsbar;

const Tab = ({ icon, text, isSelected }) => {
  return (
    <div className={`tab ${isSelected ? "selected_tab" : ""}`}>
      {icon}
      <p className="text">{text}</p>
    </div>
  );
};
