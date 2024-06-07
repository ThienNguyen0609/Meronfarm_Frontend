import "./HeaderBot.scss";

import logo from "../../../assets/images/homepage/logopage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faShoppingCart, faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Slider } from "../../../store/features/sidebar/sidebarSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderBot = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  useEffect(() => {
    document.addEventListener("click", e => {
      if(!e.target.closest(".user-avatar") && !e.target.closest(".avatar-dropdown")) setActive(false)
    })
  }, [])
  return (
    <>
      <div className="header-bot">
        <div className="header-bot-content">
          <div className="content-left">
            <div className="navigation">
              <Link className="link-to-home" to={'/'}><img className="logo" src={logo} alt="logo" /></Link>
              <div className="menu">
                <Link to={'/about-us'} className="menu-item">Về chúng tôi</Link>
                <Link to={'/search?CaterogyId=all&Page=1'} className="menu-item">Sản phẩm</Link>
              </div>
            </div>
            <div className="sidebar">
              <div className="sidebar-icon" onClick={()=>dispatch(Slider(true))}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="search-wrapper">
              <div className="content">
                <span className="me-1">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input placeholder="Tìm kiếm sản phẩm..." />
              </div>
            </div>
            <Link to={"/cart-details"} className="sc-p-wrapper">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <div className="user-avatar">
              <div className="avatar-content" onClick={()=>setActive(!active)}>
                <div className="avatar">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="text">Thien</div>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
              <div className={"avatar-dropdown"+(active ? " active" : "")}>
                <div className="dropdown-arrow"></div>
                <div className="inner">
                  <div className="inner-top">
                    <div className="inner-avatar">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="inner-text">
                      <div className="inner-name">Nguyễn Hoàn Thiện</div>
                      <div className="inner-image">Chưa có email</div>
                    </div>
                  </div>
                  <div className="inner-bot">
                    <Link onClick={()=>setActive(false)} to={"/customer/orders"} className="item">Đơn hàng của tôi</Link>
                    <Link onClick={()=>setActive(false)} to={"/customer/information"} className="item">Thông tin của tôi</Link>
                    <Link onClick={()=>setActive(false)} to={"/customer/change-password"} className="item">Đổi mật khẩu</Link>
                    <Link onClick={()=>setActive(false)} to={"/customer/information"} className="item">Đăng xuất</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBot;
