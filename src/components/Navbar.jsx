import { FaChevronLeft, FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left_nav">
        <div className="left_icon">
          <FaChevronLeft />
        </div>
        <p>Basic Mathematics 101</p>
      </div>
      <div className="right_nav">
        <div className="call_icon">
          <IoIosCall />
        </div>
        <p>Call Teacher</p>
        <div className="support_icon">
          <FaUser />
        </div>
        <p>Support</p>
      </div>
    </nav>
  );
};

export default Navbar;
