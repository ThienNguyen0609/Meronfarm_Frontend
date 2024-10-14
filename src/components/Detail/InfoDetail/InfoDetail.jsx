import "./InfoDetail.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { checkSession, getSession } from "../../../services/authenticationService";
import { addToCart } from "../../../services/meronfarmService";
import { toastify } from "../../../services/toastify";

const InfoDetail = ({product}) => {
  const [count, setCount] = useState(1);

  const handleAddToCart = async (cnt) => {
    if(checkSession()) {
      const { data } = getSession();
      const request = {
        quantity: cnt,
        userId: data.id,
        productId: product.id
      }
      const response = await addToCart(request);
      if(response.status === 1) toastify("success", response.message);
      else if(response.status === 0) toastify("error", response.message);
      else toastify("warning", response.message);
    }
    else {
      toastify("warning", "Hãy đăng nhập hoặc tạo tài khoảng");
    }
  }
  return (
    <>
      <div className="detail-content">
        <div className="detail-image">
          <img src={`../../../src/assets/images/product/${product.imageSrc}.png`} alt={`${product.imageSrc}`} />
        </div>
        <div className="detail-info">
          <div className="detail-title">{product.name}</div>
          <div
            className="d-flex align-items-center justify-content-start"
            style={{ gap: "20px" }}
          >
            <div className="evaluate-star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="evaluate-star__text ff">0 đánh giá</div>
            <div className="quantity-sold ff">Đã bán: {product.quantitySold}</div>
            <div className="nationwide ff">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Toàn quốc
            </div>
          </div>
          <div className="row">
            <div className="col-3 info-title">Đơn giá:</div>
            <div className="col-9">
              <span className="price">{product.price}đ</span>
              <span className="unit">/{product.unit}</span>
            </div>
            <div style={{ height: "25px" }}></div>
            <div className="col-3 info-title">Số lượng:</div>
            <div className={`col-9 info-dis quantity-${product.quantity.id}`}>
              {product.quantity?.quantityType}
            </div>
            <div style={{ height: "25px" }}></div>
            <div className="col-3 info-title" style={{ lineHeight: "35px" }}>
              Số lượng mua:
            </div>
            <div className="col-9 info-count">
              <button
                className={
                  "d-i-btn bd-hover m" + (count <= 1 ? " d-i-disabled" : "")
                }
                onClick={() => setCount((c) => --c)}
                disabled={count <= 1 ? true : false}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                className="count bd-hover"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
              <button
                className="d-i-btn bd-hover p"
                onClick={() => setCount((c) => ++c)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(count)}>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </>
  );
};

export default InfoDetail;
