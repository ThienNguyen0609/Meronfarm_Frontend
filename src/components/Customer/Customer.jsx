import "./Customer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Information from "./Information/Information";
import ChangePassword from "./ChangePassword/ChangePassword";
import Notification from "./Notification/Notification";
import Address from "./Address/Address";
import Voucher from "./Voucher/Voucher";
import { checkSession } from "../../services/authenticationService";
import Favourite from "./Favourite/Favourite";
import { useCustomerPage } from "../../services/useHooks";
import ProductViewed from "./ProductViewed/ProductViewed";
import Order from "./Order/Order";

const Customer = () => {
  const { service } = useParams();
  const [pathText, setPathText] = useState("Thông tin tài khoản")
  const [productActive, setProductActive] = useState(false)
  const [divActive, setDivActive] = useState(false)
  const [pageIndex, setPageIndex] = useState(1)
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  useCustomerPage(service, setPathText, setPageIndex, setDivActive)

  useEffect(() => {
    if(!checkSession()) navigate("/")
    else {
      const { data } = JSON.parse(localStorage.getItem("account"))
      setName(data.name)
    }
  }, [])
  useEffect(() => {
    document.addEventListener("click", e => {
        if(!e.target.closest(".not-link") && e.target.closest(".list-item")) {
            setDivActive(false)
            setProductActive(false)
        }
    })
  }, [])
  return (
    <>
      <div className="customer-wrapper">
        <div className="b-width customer-inner">
          <div className="path-link">
            <Link className="path-link-home" to={"/"}>Trang chủ</Link>
            <FontAwesomeIcon className="path-icon" icon={faAngleDoubleRight} />
            <span className="path-current">{pathText}</span>
          </div>
          <div className="customer-content">
            <div className="customer-menu-wrapper">
                <div className="customer-menu__avatar">
                    <div className="avatar">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="text">
                        <span>Tài khoản</span>
                        <span className="text-name">{name}</span>
                    </div>
                </div>
                <div className="customer-menu__list">
                    <NavLink to={"/customer/information"} className="list-item">Thông tin tài khoản</NavLink>
                    <NavLink to={"/customer/change-password"} className="list-item">Đổi mật khẩu</NavLink>
                    <NavLink to={"/customer/notification"} className="list-item">Thông báo của tôi</NavLink>
                    <NavLink to={"/customer/orders"} className="list-item" >Quản lý đơn hàng</NavLink>
                    <NavLink to={"/customer/addresses"} className="list-item">Số địa chỉ</NavLink>
                    <NavLink to={"/customer/vouchers"} className="list-item">Voucher khuyến mãi</NavLink>
                    <div style={{flexShrink: 0, position: "relative"}} onClick={(e)=>{
                          setProductActive(!productActive)
                          setDivActive(!divActive)
                          // productRef.current.style.width = `${e.target.closest(".list-item").offsetWidth}`+'px';
                      }}>
                      <div className={"list-item not-link"+(divActive ? " active" : "")}><span>Sản phẩm</span><FontAwesomeIcon icon={faCaretDown} /></div>
                      <div className={"list-item-dropdown not-link"+(productActive ? " item-dropdown-active" : "")}>
                          <NavLink to={"/customer/viewed-products"} className="dropdown-item">Đã xem</NavLink>
                          <NavLink to={"/customer/favorite-products"} className="dropdown-item">Yêu thích</NavLink>
                      </div>
                    </div>
                </div>
            </div>
            <div className="profile-content">
              {pageIndex === 1 && <Information />}
              {pageIndex === 2 && <ChangePassword />}
              {pageIndex === 3 && <Notification />}
              {pageIndex === 4 && <Order />}
              {pageIndex === 5 && <Address />}
              {pageIndex === 6 && <Voucher />}
              {pageIndex === 7 && <ProductViewed />}
              {pageIndex === 8 && <Favourite />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
