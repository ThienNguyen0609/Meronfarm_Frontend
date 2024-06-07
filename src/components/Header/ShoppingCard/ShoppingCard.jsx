import "./ShoppingCard.scss";

import logo from '../../../assets/images/homepage/shopping_cart_no_data.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ShoppingCard = () => {
  const [show, setShow] = useState(false);
  const handleShowPopover = () => setShow(true);
  const handleHidePopover = () => setShow(false);
  return (
    <>
      <div
        className="shopping-card-wrapper"
        onMouseOver={() => handleShowPopover()}
        onMouseLeave={() => handleHidePopover()}
      >
        <div className="shopping-card">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        {show && (
          <div className="s-popover-wrapper">
            <div className="s-popover">
              <div className="s-popover-content">
                <div className="s-popover-arrow"></div>
                <div className="s-popover-inner">
                    <div className="inner-nt">
                        <img src={logo} alt="image" />
                        <p>Hiện tại không có sản phẩm</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCard;
