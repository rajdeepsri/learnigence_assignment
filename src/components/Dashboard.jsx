import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Tabsbar from "./Tabsbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Tabsbar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
