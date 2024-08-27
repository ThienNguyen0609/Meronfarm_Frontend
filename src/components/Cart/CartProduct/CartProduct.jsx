import "./CartProduct.scss";

import CartDisplay from "./CartDisplay/CartDisplay";
import { useEffect, useState } from "react";
import { getSession } from "../../../services/authenticationService";
import { getProductCart } from "../../../services/meronfarmService";
import _ from "lodash";
import CartEmpty from "./CartEmpty/CartEmpty";

const CartProduct = (props) => {
  const [productCart, setProductCart] = useState();
  const [len, setLen] = useState(0);

  useEffect(() => {
    const { data } = getSession();
    const handleGetProductCart = async () => {
      const response = await getProductCart(data.id);
      if (response.status) {
        setProductCart(response.shoppingCarts);
        setLen(response.shoppingCarts.length);
      }
    };
    handleGetProductCart();
  }, []);
  return (
    <>
      <div className="cart-product">
        <div className="cart-text">Sản phẩm</div>
        {productCart && !_.isEmpty(productCart) && len > 0 ? (
          <CartDisplay 
            props={props} 
            productCart={productCart} 
            setLen={setLen} 
          />
        ) : (
          <CartEmpty />
        )}
      </div>
    </>
  );
};

export default CartProduct;
