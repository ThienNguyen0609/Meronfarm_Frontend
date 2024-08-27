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
  const [quantity, setQuantity] = useState(props.quantity);
  const dispatch = useDispatch();

  const handleRemoveProductCart = async () => {
    const response = await removeProductCart(props.productCartId)
    if(response.status) {
      toastify(true, "success", response.message, dispatch)
      props.setLen(l => --l);
      setIsRemove(true)
    }
  }

  const handleDecValue = () => {
    if(isChecked) {
      props.normalPrice(draft => draft - props.product.price)
      props.setProductTotalItemQuantity(draft => --draft)
      props.setProductOrder(draft => draft.map(item => {
        if(item.productId === props.product.id) {
          return {
            ...item,
            quantity: item.quantity-1,
            totalPrice: item.totalPrice - props.product.price
          }
        }
        return item
      }))
    }
    setQuantity((draft) => --draft)
  }

  const handleIncValue = () => {
    if(isChecked) {
      props.normalPrice(draft => draft + props.product.price)
      props.setProductTotalItemQuantity(draft => ++draft)
      props.setProductOrder(draft => draft.map(item => {
        if(item.productId === props.product.id) {
          return {
            ...item,
            quantity: item.quantity+1,
            totalPrice: item.totalPrice + props.product.price
          }
        }
        return item
      }))
    }
    setQuantity((draft) => ++draft)
  }

  useEffect(() => {
    props.isAllChecked ? setIsChecked(true) : setIsChecked(false)
  }, [props.isAllChecked])
  useEffect(() => {

    isChecked ? props.normalPrice(draft => draft + props.product.price*quantity) 
              : props.normalPrice(draft => draft <= 0 ? draft = 0 : draft - props.product.price*quantity)
    
    isChecked ? props.setProductQuantity(draft => ++draft) 
              : props.setProductQuantity(draft => draft <= 0 ? 0 : --draft)

    isChecked ? props.setProductTotalItemQuantity(draft => draft+quantity)
              : props.setProductTotalItemQuantity(draft => draft <= 0 ? 0 : draft-quantity)

    isChecked ? props.setProductOrder(draft => [...draft, {
                quantity: quantity,
                totalPrice: props.product.price*quantity,
                productId: props.product.id
              }]) 
              : props.setProductOrder(draft => [...draft.filter(item => item.productId !== props.product.id)]) 
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
                    Đã bán <span className="inner">{props.product.quantitySold}</span>
                  </span>
                </div>
                <div className="quantity-action quantity-mobile" style={{ marginTop: "4px" }}>
                  <button
                    onClick={() => handleDecValue()}
                    className="btn-minus"
                    type="button"
                    disabled={quantity === 1 ? true : false}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} />
                  <button
                    onClick={() => handleIncValue()}
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
              onClick={() => handleDecValue()}
              className="btn-minus"
              type="button"
              disabled={quantity === 1 ? true : false}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type='text' value={quantity} onChange={e=>setQuantity(e.target.value)} />
            <button
              onClick={() => handleIncValue()}
              className="btn-plus"
              type="button"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="mcol-2 product-price">{props.product.price*quantity}đ</div>
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