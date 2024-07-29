import "./CartSummary.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTag } from '@fortawesome/free-solid-svg-icons';

const CartSummary = (props) => {
  return (
    <>
      <div className="cart-summary">
        <div className="cart-summary__top">
          <div className="d-flex justify-content-between font-style">
            <div>
              <span className="font-color">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>{" "}
              Địa chỉ nhận hàng
            </div>
            <div className="font-color" style={{ cursor: "pointer" }}>
              Thay đổi
            </div>
          </div>
          <div className="cart-summary__address">
            <div className="name font-style">
              Địa chỉ mặc định{" "}
              <span className="font-style-2">(0827 578 477)</span>
            </div>
            <div className="address font-style-1">
              Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh
            </div>
          </div>
          <div className="d-flex justify-content-between font-style">
            <div>
              <span className="font-color">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>{" "}
              Khuyến mãi
            </div>
            <div className="font-color" style={{ cursor: "pointer" }}>
              Có thể chọn 0
            </div>
          </div>
          <button className="cart-summary__btn">
            <FontAwesomeIcon icon={faTag} />
            Chọn hoặc nhập khuyến mãi
          </button>
        </div>
        <div className="cart-summary__bot">
          <div className="crow">
            <p>Tạm tính</p>
            <p>{props.normalPrice}đ</p>
          </div>
          <div className="crow">
            <p>Phí giao hàng</p>
            <p>{props.deliveryPrice}đ</p>
          </div>
          <div className="crow">
            <p>Giảm giá</p>
            <p>{props.discountPrice}đ</p>
          </div>
          <div className="crow total-price">
            <p>Tổng tiền:</p>
            <p style={{ color: "rgb(235, 64, 61)", fontWeight: "700" }}>
              {props.totalPrice}đ
            </p>
          </div>
          <button className="cart-summary__btn">Thanh toán (1 sản phẩm)</button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
