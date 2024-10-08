import "./UserTag.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setSession, getSession, checkAuthority } from "../../../../services/authenticationService";

const UserTag = () => {
  const [active, setActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const handleLogout = () => {
    setSession(false, "", null);
    window.location.href = "/";
  };
  useEffect(() => {
    const { data } = getSession();
    setName(data.name);
    setEmail(data.email);
    setUsername(data.userName);

    setIsAdmin(checkAuthority())

    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".user-avatar") &&
        !e.target.closest(".avatar-dropdown")
      )
        setActive(false);
    });
  }, []);
  return (
    <>
      <div className="user-avatar">
        <div className="avatar-content" onClick={() => setActive(!active)}>
          <div className="avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="text d-res">{username}</div>
          <FontAwesomeIcon className="d-res" icon={faCaretDown} />
        </div>
        <div className={"avatar-dropdown" + (active ? " active" : "")}>
          <div className="dropdown-arrow"></div>
          <div className="inner">
            <div className="inner-top">
              <div className="inner-avatar">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="inner-text">
                <div className="inner-name">{name}</div>
                <div className="inner-image">{email}</div>
              </div>
            </div>
            <div className="inner-bot">
              {isAdmin && <>
                <Link
                  onClick={() => setActive(false)}
                  to={"/admin/user_manage"}
                  className="item"
                >
                  Quản lý tài khoảng
                </Link>
                <Link
                  onClick={() => setActive(false)}
                  to={"/admin/order_manage"}
                  className="item"
                >
                  Quản lý đơn hàng
                </Link>
                <Link
                  onClick={() => setActive(false)}
                  to={"/admin/notification_manage"}
                  className="item"
                >
                  Quản lý thông báo
                </Link>
              </>}
              <Link
                onClick={() => setActive(false)}
                to={"/customer/orders"}
                className="item"
              >
                Đơn hàng của tôi
              </Link>
              <Link
                onClick={() => setActive(false)}
                to={"/customer/information"}
                className="item"
              >
                Thông tin của tôi
              </Link>
              <Link
                onClick={() => setActive(false)}
                to={"/customer/change-password"}
                className="item"
              >
                Đổi mật khẩu
              </Link>
              <div onClick={() => {
                setActive(false)
                handleLogout()
              }} className="item">
                Đăng xuất
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTag;
