import "./ProductItem.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import { checkSession, getUserIdSession } from "../../../services/authenticationService";
import { addFavouriteProduct, addViewedProduct } from "../../../services/meronfarmService";
import { toastify } from "../../../services/toastify";
import VerifyPurchaseModal from "./VerifyPurchaseModal/VerifyPurchaseModal";
import _ from "lodash"

const ProductItem = ({ productItem, classItem, isFavor }) => {
  const [isHover, setIsHover] = useState(false);
  const [isShow, setIsShow] = useState(false);
  console.log(productItem.favourites)
  const handleAddFavouriteProd = async (prodId) => {
    if(checkSession()) {
      if(_.isEmpty(productItem.favourites)) {
        const request = {
          userId: getUserIdSession(),
          productId: prodId
        }
        const response = await addFavouriteProduct(request)
        if(response.status) toastify("success", response.message);
        else toastify("warning", response.message);
      }
    }
    else {
      toastify("warning", "Hãy đăng nhập hoặc tạo tài khoảng");
    }
  }
  const handleAddViewedProd = async (prodId) => {
    if(checkSession()) {
      const request = {
        userId: getUserIdSession(),
        productId: prodId
      }
      const response = await addViewedProduct(request)
      console.log(response)
    }
  }

  const handleShowModal = () => {
    if(checkSession()) setIsShow(true)
    else toastify("warning", "Hãy đăng nhập trước khi lựa chọn sản phẩm");
  }
  return (
    <>
      {checkSession() && isShow && <VerifyPurchaseModal show={isShow} setIsShow={setIsShow} productItem={productItem} />}
      <div className={"product-item " + classItem}>
        <div className="p-item-content">
          <div className="item-image">
            <img src={`../src/assets/images/product/${productItem.imageSrc}.png`} alt={`${productItem.imageSrc}`} />
          </div>
          <div 
            className={"item-overlay"+(isHover ? " overlay-active" : "")} 
            onMouseLeave={() => setIsHover(false)}
            onMouseOver={() => setIsHover(true)}
          >
            <Link 
              className="item-overlay__icon" 
              onClick={()=>handleAddViewedProd(productItem.id)}
              to={`/product/detail?id=${productItem.id}`} 
            >Chi tiết</Link>
            {!isFavor && <div className={"item-overlay__icon"+(productItem.favourites && !_.isEmpty(productItem.favourites) ? " favor-overlay" : "")} onClick={()=>handleAddFavouriteProd(productItem.id)}>
              {productItem.favourites && !_.isEmpty(productItem.favourites) ? "Đã thích":  "Thích"}
            </div>}
            <div className="item-overlay__icon" onClick={()=>handleShowModal()}>Mua ngay</div>
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
