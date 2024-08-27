import "./HeaderTop.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top-content">
          <div className="content-left">
            <div className="me-3">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="ms-2 dp">0372 714 412</span>
            </div>
            <div className="email">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ms-2 dp">duhuynh.meron@gmail.com</span>
            </div>
          </div>
          <div className="content-right">
            <FontAwesomeIcon icon={faBell} />
            <span className="ms-2">
              <Link to="/customer/notification">Thông báo</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
