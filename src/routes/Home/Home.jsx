import "./Home.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
      <Sidebar />
    </div>
  );
};

export default Home;
