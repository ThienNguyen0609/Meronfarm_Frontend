import "./HeaderBot.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import UserTag from "./UserTag/UserTag";
import Navigation from "./Navigation/Navigation";
import SearchHeader from "./SearchHeader/SearchHeader";
import AuthenticateTag from "./AuthenticateTag/AuthenticateTag";
import { useEffect, useState } from "react";
import { checkSession } from "../../../services/authenticationService";
import { toastify } from "../../../services/toastify";

const HeaderBot = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const navigate = useNavigate();
  const handleClickToShoppingCart = () => {
    isAuthenticate ? navigate("/cart-details") 
                   : toastify("warning", "Hãy đăng nhập trước khi kiểm tra giỏ hàng");
  }
  useEffect(() => {
    if(checkSession()) setIsAuthenticate(true);
  }, [])
  return (
    <>
      <div className="header-bot">
        <div className="header-bot-content">
          <Navigation />
          <div className="content-right">
            <SearchHeader />
            <div onClick={()=>handleClickToShoppingCart()} className="sc-p-wrapper">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            {isAuthenticate ? <UserTag /> :
            <AuthenticateTag />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBot;
