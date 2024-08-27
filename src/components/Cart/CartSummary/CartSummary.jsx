import "./CartSummary.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { getUserIdSession } from "../../../services/authenticationService";
import { addOrderProducts, createOrder } from "../../../services/meronfarmService";
import { useRandomString } from "../../../services/useHooks";
import { toastify } from "../../../services/toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNotification } from "../../../services/meronfarmService";

const CartSummary = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateOrder = async () => {
    if(props.productQuantity > 0) {
      const randomString = useRandomString(20);
      const concatString = `${import.meta.env.VITE_ORDERCODE_FIRST_STRING}${randomString}`
      const request = {
        id: concatString,
        totalPrice: props.totalPrice,
        totalQuantity: props.productQuantity,
        userId: getUserIdSession()
      }
      const response = await createOrder(request);
      console.log(response)
      if(response.status) {
        const nextRequest = props.productOrder.map(item => ({...item, orderId: concatString}))
        const nextResponse = await addOrderProducts(getUserIdSession(), nextRequest)
        console.log(nextResponse)
        if(nextResponse.status) {
          const nextRequest = {
            message: "đã đặt đơn hàng",
            orderId: concatString,
            receiverId: 1
          }

          const nextResponse = await addNotification(nextRequest);
          console.log(nextResponse)
          props.setProductOrder([])
          toastify(true, "success", nextResponse.message, dispatch);
          navigate("/search?CategoryId=all")
        }
        else toastify(true, "error", nextResponse.message, dispatch);
      }
    }
    else toastify(true, "warning", "Hãy chọn sản phẩm muốn mua", dispatch);
  }
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
          <button onClick={()=>handleCreateOrder()} className="cart-summary__btn">Thanh toán ({props.productQuantity} sản phẩm)</button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
