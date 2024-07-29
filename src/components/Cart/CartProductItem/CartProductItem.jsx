import './CartProductItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { removeProductCart } from '../../../services/meronfarmService';
import { toastify } from '../../../services/toastify';
import { useDispatch } from 'react-redux';

const CartProductItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [value, setValue] = useState(props.quantity);
  const dispatch = useDispatch();

  const handleRemoveProductCart = async () => {
    const response = await removeProductCart(props.productCartId)
    if(response.status) {
      toastify(true, "success", response.message, dispatch)
      props.setLen(l => --l);
      setIsRemove(true)
    }
  }

  useEffect(() => {
    props.isAllChecked ? setIsChecked(true) : setIsChecked(false)
  }, [props.isAllChecked])
  useEffect(() => {
    isChecked ? props.productPrice(draft => draft + props.product.price*value) 
              : props.productPrice(draft => draft === 0 ? draft = 0 : draft - props.product.price*value)
  }, [isChecked])
    return (
      <>
      {!isRemove &&
        <div className="display-bd display-pd mrow">
          <div className="product-info mcol-5">
            <div className="opt">
              <input type="checkbox" checked={isChecked} onChange={e=>setIsChecked(e.target.checked)} />
              <div className="checkbox-inner"></div>
            </div>
            <div className="product-info__inner">
              <div className="product-image">
                <img src={`src/assets/images/product/${props.product.imageSrc}.png`} alt="image" />
              </div>
              <div className="product-text">
                <div className="product-name">{props.product.name}</div>
                <div className="quantity-sold">
                  <span>
                    Số lượng: <span className={`quantity-${props.product.quantity.id}`}>{props.product.quantity.quantityType}</span>
                  </span>
                  <div className="qs"></div>
                  <span>
                    Đã bán <span className="inner">{props.product.sold}</span>
                  </span>
                </div>
                <div className="quantity-action quantity-mobile" style={{ marginTop: "4px" }}>
                  <button
                    onClick={() => setValue((draft) => --draft)}
                    className="btn-minus"
                    type="button"
                    disabled={value === 1 ? true : false}
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
              onClick={() => setValue((draft) => --draft)}
              className="btn-minus"
              type="button"
              disabled={value === 1 ? true : false}
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
          <div className="mcol-2 product-price">{props.product.price*value}đ</div>
          <div className="remove-icon">
            <div className="icon" onClick={() => handleRemoveProductCart()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
      }
      </>
    );
}

export default CartProductItem