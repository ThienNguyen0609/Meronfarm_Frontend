import "./Sidebar.scss";

import logo from "../../assets/images/homepage/logopage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../../store/features/sidebar/sidebarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { show } = useSelector((state) => state.show);
  const [close, setClose] = useState(false);
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    setClose(true);
    setTimeout(() => {
      dispatch(Slider(false));
      setClose(false)
    }, 1000);
  };
  return (
    <>
      {show && (
        <div className="sidebar-wrapper">
          <div className={"sidebar" + (close ? " slide-in" : "") + " slide-out"}>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div
              className="arrow-close-icon"
              onClick={() => handleCloseSidebar()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="menu">
              <Link to={'/about-us'} className="menu-item">Về chúng tôi</Link>
              <Link to={'/search?CategoryId=all&Page=1'} className="menu-item">Sản phẩm</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
