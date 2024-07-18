import "./ProductItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProductItem = ({ productItem }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="product-item p-item">
        <div className="p-item-content">
          <div className="item-image">
            <img src={`src/assets/images/product/${productItem.imageSrc}.png`} alt={`${productItem.imageSrc}`} />
          </div>
          <div 
            className={"item-overlay"+(isHover ? " overlay-active" : "")} 
            onMouseLeave={() => setIsHover(false)}
            onMouseOver={() => setIsHover(true)}
          >
            <FontAwesomeIcon icon={faEye} /> Review
          </div>
          <div className="item-content">
            <div className="item-title">
              <h6>{productItem.name}</h6>
            </div>
            <div className="item-content-inner">
              <div className="unit mb-1">{productItem.unit}</div>
              <div className="vote-sold mb-1">
                <div className="vote">{productItem.starEvaluate} sao</div>
                <div className="sold font-size-14">
                  Đã bán: {productItem.quantitySold}
                </div>
              </div>
              <div className="quantity font-size-14 mb-1">
                Số lượng: <span className={`quantity-${productItem.quantity.id}`}>{productItem.quantity.quantityType}</span>
              </div>
              <div className="price mb-1">{productItem.price}</div>
              <div className="address font-size-14 mb-1">Hồ Chí Minh</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
