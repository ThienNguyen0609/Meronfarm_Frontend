import "./Navigation.scss";


import logo from "../../../../assets/images/homepage/logopage.jpg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Slider } from "../../../../store/features/sidebar/sidebarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const dispatch = useDispatch()
  return (
    <div className="nav-container">
      <div className="navigation">
        <Link className="link-to-home" to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="menu">
          <Link to={"/about-us"} className="menu-item">
            Về chúng tôi
          </Link>
          <Link to={"/search?CategoryId=all"} className="menu-item">
            Sản phẩm
          </Link>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-icon" onClick={() => dispatch(Slider(true))}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
