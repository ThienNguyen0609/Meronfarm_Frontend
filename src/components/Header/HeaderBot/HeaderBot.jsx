import "./HeaderBot.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserTag from "./UserTag/UserTag";
import Navigation from "./Navigation/Navigation";
import SearchHeader from "./SearchHeader/SearchHeader";
import AuthenticateTag from "./AuthenticateTag/AuthenticateTag";
import { useEffect, useState } from "react";
import { checkSession } from "../../../services/authenticationService";

const HeaderBot = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
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
            <Link to={"/cart-details"} className="sc-p-wrapper">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            {isAuthenticate ? <UserTag /> :
            <AuthenticateTag />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBot;
