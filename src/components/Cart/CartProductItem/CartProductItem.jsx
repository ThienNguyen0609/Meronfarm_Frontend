import './CartProductItem.scss';

import productImage from "../../../assets/images/homepage/po_image_1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

const CartProductItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState(1);
  const minusRef = useRef();

  useEffect(() => {
    if(value === 1) minusRef.current.disabled = true;
    else minusRef.current.disabled = false;
  }, [value])
  useEffect(() => {
    props.isAllChecked ? setIsChecked(true) : setIsChecked(false)
  }, [props.isAllChecked])
  useEffect(() => {
    isChecked ? props.productPrice(draft => draft + props.product.price) : props.productPrice(draft => draft === 0 ? draft = 0 : draft - props.product.price)
  }, [isChecked])
    return (
      <>
        <div className="display-bd display-pd mrow">
          <div className="product-info mcol-5">
            <div className="opt">
              <input type="checkbox" checked={isChecked} onChange={e=>setIsChecked(e.target.checked)} />
              <div className="checkbox-inner"></div>
            </div>
            <div className="product-info__inner">
              <div className="product-image">
                <img src={productImage} alt="image" />
              </div>
              <div className="product-text">
                <div className="product-name">{props.product.name}</div>
                <div className="quantity-sold">
                  <span>
                    Số lượng: <span className="inner">{props.product.quantity}</span>
                  </span>
                  <div className="qs"></div>
                  <span>
                    Đã bán <span className="inner">{props.product.sold}</span>
                  </span>
                </div>
                <div className="quantity-action quantity-mobile" style={{ marginTop: "4px" }}>
                  <button
                    ref={minusRef}
                    onClick={() => setValue((draft) => --draft)}
                    className="btn-minus"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
                  <button
                    onClick={() => setValue((draft) => ++draft)}
                    className="btn-plus"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mcol-3 quantity-action dp-none quantity-lap">
            <button
              ref={minusRef}
              onClick={() => setValue((draft) => --draft)}
              className="btn-minus"
              type="button"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type='text' value={value} onChange={e=>setValue(e.target.value)} />
            <button
              onClick={() => setValue((draft) => ++draft)}
              className="btn-plus"
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="mcol-2 product-price">{props.product.price}đ</div>
          <div className="remove-icon">
            <div className="icon">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
      </>
    );
}

export default CartProductItem