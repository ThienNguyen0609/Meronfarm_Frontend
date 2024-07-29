import "./CartDisplay.scss";

import { useState } from "react";
import CartProductItem from "../../CartProductItem/CartProductItem";

const CartDisplay = ({props, productCart, setLen}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="cart-display">
        <div className="mrow display-bd display-pd">
          <div className="mcol-5 display-font" style={{ paddingLeft: "25px" }}>
            Tên sản phẩm
          </div>
          <div className="mcol-3 display-font dp">Số lượng</div>
          <div className="mcol-2 display-font">Thành tiền</div>
          <div style={{ width: "36px" }}></div>
        </div>
        <div className="mrow display-bd display-pd">
          <div className="opt">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="checkbox-inner"></div>
          </div>
          <div className="display-font">ALL</div>
        </div>
        <div className="cart-list">
          {productCart?.map((item) => {
            return (
              <CartProductItem
                key={item.id}
                productCartId={item.id}
                product={item.product}
                quantity={item.quantity}
                isAllChecked={isChecked}
                productPrice={props.setNormalPrice}
                setLen={setLen}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CartDisplay;
